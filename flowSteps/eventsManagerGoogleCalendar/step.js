/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

/**
 * This flow step will send a request to handle events with the googlecalendar endpoint.
 *
 * @param {object} inputs
 * {Array[string]} params, This is used to config params.
 * {string} body, This is used to send body request.
 * {boolean} fullResponse, This is used to config full response.
 */
step.eventsManagerGoogleCalendar = function (inputs) {

	var inputsLogic = {
		params: inputs.params || [],
		body: inputs.body || {},
		fullResponse: inputs.fullResponse || false,
		url: {
			urlValue: inputs.url.urlValue ? inputs.url.urlValue.split(" ")[1] : "",
			paramsValue: inputs.url.paramsValue || []
		},
		method: inputs.url.urlValue ? inputs.url.urlValue.split(" ")[0] : ""
	};

	inputsLogic.params = isObject(inputsLogic.params) ? inputsLogic.params : stringToObject(inputsLogic.params);
	inputsLogic.body = isObject(inputsLogic.body) ? inputsLogic.body : JSON.parse(inputsLogic.body);


	var options = {
		url: config.get("GOOGLECALENDAR_API_BASE_URL") + parse(inputsLogic.url.urlValue, inputsLogic.url.paramsValue),
		params: inputsLogic.params,
		body: inputsLogic.body,
		fullResponse : inputsLogic.fullResponse
	}

	options= setApiUri(options);
	options= setRequestHeaders(options);

	switch (inputsLogic.method.toLowerCase()) {
		case 'get':
			return httpService.get(options);
		case 'post':
			return httpService.post(options);
		case 'delete':
			return httpService.delete(options);
		case 'put':
			return httpService.put(options);
	}

	return null;
};

function parse (url, pathVariables){
	var regex = /{([^}]*)}/g;
	if (!url.match(regex)){
		return url;
	}
	if(!pathVariables){
		sys.logs.error('No path variables have been received and the url contains curly brackets\'{}\'');
		throw new Error('Error please contact support.');
	}
	url = url.replace(regex, function(m, i) {
		return pathVariables[i] ? pathVariables[i] : m;
	})
	return url;
}

function isObject (obj) {
	return !!obj && stringType(obj) === '[object Object]'
}

var stringType = Function.prototype.call.bind(Object.prototype.toString);

function stringToObject (obj) {
	if (!!obj){
		var keyValue = obj.toString().split(',');
		var parseObj = {};
		for(var i = 0; i < keyValue.length; i++) {
			parseObj[keyValue[i].split('=')[0]] = keyValue[i].split('=')[1]
		}
		return parseObj;
	}
	return null;
}

function setApiUri(options) {
	var API_URL = config.get("GOOGLECALENDAR_API_BASE_URL");
	var url = options.path || "";
	options.url = API_URL + url;
	sys.logs.debug('[googlecalendar] Set url: ' + options.path + "->" + options.url);
	return options;
}

function setRequestHeaders(options) {
	var headers = options.headers || {};

	sys.logs.debug('[googlecalendar] Set header Bearer');
	headers = mergeJSON(headers, {"Content-Type": "application/json"});
	headers = mergeJSON(headers, {"Authorization": "Bearer "+getAccessTokenForAccount()});

	if (headers.Accept === undefined || headers.Accept === null || headers.Accept === "") {
		sys.logs.debug('[googlecalendar] Set header accept');
		headers = mergeJSON(headers, {"Accept": "application/json"});
	}

	options.headers = headers;
	return options;
}

function getAccessTokenForAccount(account) {
	account = account || "account";
	sys.logs.info('[googlecalendar] Getting access token for account: '+account);
	var installationJson = sys.storage.get('installationInfo-GoogleCalendar---'+account) || {id: null};
	var token = installationJson.token || null;
	var expiration = installationJson.expiration || 0;
	if (!token || expiration < new Date().getTime()) {
		sys.logs.info('[googlecalendar] Access token is expired or not found. Getting new token');
		var res = httpService.post(
			{
				url: "https://oauth2.googleapis.com/token",
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: {
					grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
					assertion: getJsonWebToken()
				}
			});
		token = res.access_token;
		var expires_at = res.expires_in;
		expiration = new Date(new Date(expires_at) - 1 * 60 * 1000).getTime();
		installationJson = mergeJSON(installationJson, {"token": token, "expiration": expiration});
		sys.logs.info('[googlecalendar] Saving new token for account: ' + account);
		sys.storage.replace('installationInfo-GoogleCalendar---'+account, installationJson);
	}
	return token;
}

function getJsonWebToken() {
	var currentTime = new Date().getTime();
	var futureTime = new Date(currentTime + ( 10 * 60 * 1000)).getTime();
	var scopeProp= config.get("scope");
	var scopes;
	if (!!scopeProp) {
		scopes = scopeProp.map(function (s) {
			return "https://www.googleapis.com/auth/" + s;
		});
	}
	var scopesGlobal = scopes.join(" ");
	return sys.utils.crypto.jwt.generate(
		{
			iss: config.get("serviceAccountEmail"),
			aud: GOOGLEWORKSPACE_API_AUTH_URL,
			scope: scopesGlobal,
			iat: currentTime,
			exp: futureTime
		},
		config.get("privateKey"),
		"RS256"
	)
}

function mergeJSON (json1, json2) {
	var result = {};
	var key;
	for (key in json1) {
		if(json1.hasOwnProperty(key)) result[key] = json1[key];
	}
	for (key in json2) {
		if(json2.hasOwnProperty(key)) result[key] = json2[key];
	}
	return result;
}