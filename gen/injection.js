calendarsAclGet = () => {
    //INIT_INJECTION
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
    return endpoint._get(options);
    //END_INJECTION
}

calendarsEventsGet = () => {
    //INIT_INJECTION
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
    return endpoint._get(options);
    //END_INJECTION
}

module.exports = {
    calendarsAclGet,
    calendarsEventsGet
};