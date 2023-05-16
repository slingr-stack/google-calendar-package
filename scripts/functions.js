/****************************************************
 Dependencies
 ****************************************************/

var httpService = svc.http;

/****************************************************
 Helpers
 ****************************************************/

exports.calendars = {};

exports.calendars.acl = {};

exports.calendars.acl.watch = {};

exports.users = {};

exports.users.me = {};

exports.users.me.calendarList = {};

exports.users.me.calendarList.watch = {};

exports.calendars.clear = {};

exports.channels = {};

exports.channels.stop = {};

exports.colors = {};

exports.calendars.events = {};

exports.calendars.events.import = {};

exports.calendars.events.instances = {};

exports.calendars.events.move = {};

exports.calendars.events.quickAdd = {};

exports.calendars.events.watch = {};

exports.freeBusy = {};

exports.users.me.settings = {};

exports.users.me.settings.watch = {};


exports.calendars.acl.delete = function(calendarId, ruleId, httpOptions) {
    if (!calendarId || !ruleId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId,ruleId].');
        return;
    }
    var url = parse('/calendars/:calendarId/acl/:ruleId', [calendarId, ruleId]);
    sys.logs.debug('[googlecalendar] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(GoogleCalendar(options));
};

exports.calendars.acl.get = function(calendarId, ruleId, httpOptions) {
    if (!calendarId || arguments.length === 0) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-1){
        case 0:
            url = parse('/calendars/:calendarId/acl', [calendarId]);
            break;
        case 1:
            url = parse('/calendars/:calendarId/acl/:ruleId', [calendarId, ruleId]);
            break;
        case 2:
            url = parse('/calendars/:calendarId/acl/:ruleId', [calendarId,ruleId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googlecalendar] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleCalendar(options));
};

exports.calendars.acl.post = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/calendars/:calendarId/acl', [calendarId]);
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleCalendar(options));
};

exports.calendars.acl.patch = function(calendarId, ruleId, httpOptions) {
    if (!calendarId || !ruleId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId,ruleId].');
        return;
    }
    var url = parse('/calendars/:calendarId/acl/:ruleId', [calendarId, ruleId]);
    sys.logs.debug('[googlecalendar] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(GoogleCalendar(options));
};

exports.calendars.acl.put = function(calendarId, ruleId, httpOptions) {
    if (!calendarId || !ruleId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId,ruleId].');
        return;
    }
    var url = parse('/calendars/:calendarId/acl/:ruleId', [calendarId, ruleId]);
    sys.logs.debug('[googlecalendar] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(GoogleCalendar(options));
};

exports.calendars.acl.watch.post = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/calendars/:calendarId/acl/watch', [calendarId]);
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleCalendar(options));
};

exports.users.me.calendarList.delete = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/users/me/calendarList/:calendarId', [calendarId]);
    sys.logs.debug('[googlecalendar] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(GoogleCalendar(options));
};

exports.users.me.calendarList.get = function(calendarId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/users/me/calendarList');
			break;
		case 1:
			url = parse('/users/me/calendarList/:calendarId', [calendarId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googlecalendar] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(GoogleCalendar(options));
};

exports.users.me.calendarList.post = function(httpOptions) {
    var url = parse('/users/me/calendarList');
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleCalendar(options));
};

exports.users.me.calendarList.patch = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/users/me/calendarList/:calendarId', [calendarId]);
    sys.logs.debug('[googlecalendar] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(GoogleCalendar(options));
};

exports.users.me.calendarList.put = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/users/me/calendarList/:calendarId', [calendarId]);
    sys.logs.debug('[googlecalendar] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(GoogleCalendar(options));
};

exports.users.me.calendarList.watch.post = function(httpOptions) {
    var url = parse('/users/me/calendarList/watch');
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleCalendar(options));
};

exports.calendars.clear.post = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/calendars/:calendarId/clear', [calendarId]);
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleCalendar(options));
};

exports.calendars.post = function(calendarId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/calendars');
			break;
		case 1:
			url = parse('/calendars/:calendarId', [calendarId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googlecalendar] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.post(GoogleCalendar(options));
};

exports.calendars.get = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/calendars/:calendarId', [calendarId]);
    sys.logs.debug('[googlecalendar] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleCalendar(options));
};

exports.calendars.patch = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/calendars/:calendarId', [calendarId]);
    sys.logs.debug('[googlecalendar] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(GoogleCalendar(options));
};

exports.calendars.put = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/calendars/:calendarId', [calendarId]);
    sys.logs.debug('[googlecalendar] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(GoogleCalendar(options));
};

exports.channels.stop.post = function(httpOptions) {
    var url = parse('/channels/stop');
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleCalendar(options));
};

exports.colors.get = function(httpOptions) {
    var url = parse('/colors');
    sys.logs.debug('[googlecalendar] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleCalendar(options));
};

exports.calendars.events.delete = function(calendarId, eventId, httpOptions) {
    if (!calendarId || !eventId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId,eventId].');
        return;
    }
    var url = parse('/calendars/:calendarId/events/:eventId', [calendarId, eventId]);
    sys.logs.debug('[googlecalendar] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(GoogleCalendar(options));
};

exports.calendars.events.get = function(calendarId, eventId, httpOptions) {
    if (!calendarId || arguments.length === 0) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-1){
        case 0:
            url = parse('/calendars/:calendarId/events', [calendarId]);
            break;
        case 1:
            url = parse('/calendars/:calendarId/events/:eventId', [calendarId, eventId]);
            break;
        case 2:
            url = parse('/calendars/:calendarId/events/:eventId', [calendarId,eventId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googlecalendar] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleCalendar(options));
};

exports.calendars.events.import.post = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/calendars/:calendarId/events/import', [calendarId]);
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleCalendar(options));
};

exports.calendars.events.post = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/calendars/:calendarId/events', [calendarId]);
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleCalendar(options));
};

exports.calendars.events.instances.get = function(calendarId, eventId, httpOptions) {
    if (!calendarId || !eventId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId,eventId].');
        return;
    }
    var url = parse('/calendars/:calendarId/events/:eventId/instances', [calendarId, eventId]);
    sys.logs.debug('[googlecalendar] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleCalendar(options));
};

exports.calendars.events.move.post = function(calendarId, eventId, httpOptions) {
    if (!calendarId || !eventId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId,eventId].');
        return;
    }
    var url = parse('/calendars/:calendarId/events/:eventId/move', [calendarId, eventId]);
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleCalendar(options));
};

exports.calendars.events.patch = function(calendarId, eventId, httpOptions) {
    if (!calendarId || !eventId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId,eventId].');
        return;
    }
    var url = parse('/calendars/:calendarId/events/:eventId', [calendarId, eventId]);
    sys.logs.debug('[googlecalendar] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(GoogleCalendar(options));
};

exports.calendars.events.quickAdd.post = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/calendars/:calendarId/events/quickAdd', [calendarId]);
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleCalendar(options));
};

exports.calendars.events.put = function(calendarId, eventId, httpOptions) {
    if (!calendarId || !eventId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId,eventId].');
        return;
    }
    var url = parse('/calendars/:calendarId/events/:eventId', [calendarId, eventId]);
    sys.logs.debug('[googlecalendar] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(GoogleCalendar(options));
};

exports.calendars.events.watch.post = function(calendarId, httpOptions) {
    if (!calendarId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [calendarId].');
        return;
    }
    var url = parse('/calendars/:calendarId/events/watch', [calendarId]);
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleCalendar(options));
};

exports.freeBusy.post = function(httpOptions) {
    var url = parse('/freeBusy');
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleCalendar(options));
};

exports.users.me.settings.get = function(setting, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/users/me/settings');
			break;
		case 1:
			url = parse('/users/me/settings/:setting', [setting]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googlecalendar] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(GoogleCalendar(options));
};

exports.users.me.settings.watch.post = function(httpOptions) {
    var url = parse('/users/me/settings/watch');
    sys.logs.debug('[googlecalendar] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleCalendar(options));
};

/****************************************************
 Public API - Generic Functions
 ****************************************************/

exports.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleCalendar(options), callbackData, callbacks);
};

exports.post = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleCalendar(options), callbackData, callbacks);
};

exports.put = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return httpService.put(GoogleCalendar(options), callbackData, callbacks);
};

exports.patch = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return httpService.patch(GoogleCalendar(options), callbackData, callbacks);
};

exports.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(GoogleCalendar(options), callbackData, callbacks);
};

exports.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.head(GoogleCalendar(options), callbackData, callbacks);
};

exports.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.options(GoogleCalendar(options), callbackData, callbacks);
};

exports.utils = {};

exports.utils.getConfiguration = function (property) {
    sys.logs.debug('[googlecalendar] Get property: '+property);
    return config.get(property);
};

exports.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

exports.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

exports.utils.verifySignature = function (body, signature) {
    var secret = config.get("webhooksSharedKey");
    if (!secret || secret === "" || !sys.utils.crypto.verifySignatureWithHmac(body, signature, secret, "HmacSHA256")) {
        sys.logs.error("Invalid signature or body");
        return false;
    }
    return true;
};

/****************************************************
 Private helpers
 ****************************************************/

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
};

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}

/****************************************************
 Constants
 ****************************************************/

var GOOGLE_CALENDAR_API_BASE_URL = "https://www.googleapis.com";
var GOOGLE_CALENDAR_API_URL = GOOGLE_CALENDAR_API_BASE_URL+"/calendar/v3";

/****************************************************
 Configurator
 ****************************************************/

var GoogleCalendar = function (options) {
    options = options || {};
    options= setApiUri(options);
    options= setRequestHeaders(options);
    return options;
}

/****************************************************
 Private API
 ****************************************************/

function setApiUri(options) {
    var url = options.path || "";
    options.url = GOOGLE_CALENDAR_API_URL + url;
    sys.logs.debug('[googlecalendar] Set url: ' + options.path + "->" + options.url);
    return options;
}

function setRequestHeaders(options) {
    var headers = options.headers || {};
    if (config.get("authenticationMethod") === "apiKey") {
        sys.logs.debug('[googlecalendar] Set header apikey');
        headers = mergeJSON(headers, {"Authorization": "API-Key " + config.get("apiKey")});
    } else {
        sys.logs.debug('[googlecalendar] Set header Bearer');
        headers = mergeJSON(headers, {"Authorization": "Bearer " + config.get("accessToken")});
    }
    headers = mergeJSON(headers, {"Content-Type": "application/json"});
    if (headers.Accept === undefined) {
        sys.logs.debug('[googlecalendar] Set header accept');
        headers = mergeJSON(headers, "Accept", "application/json");
    }
    options.headers = headers;
    return options;
}

function mergeJSON (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}
