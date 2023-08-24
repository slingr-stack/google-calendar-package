# Javascript API

The Javascript API of the googlecalendar package has three pieces:

- **HTTP requests**: These allow making regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the package usage in SLINGR.

## HTTP requests
You can make `DELETE`,`GET`,`POST`,`PATCH`,`PUT` requests to the [googlecalendar API](API_URL_HERE) like this:
```javascript
var response = pkg.googlecalendar.functions.delete('/users/me/calendarList/:calendarId')
var response = pkg.googlecalendar.functions.get('/users/me/calendarList')
var response = pkg.googlecalendar.functions.post('/calendars/:calendarId/events/quickAdd', body)
var response = pkg.googlecalendar.functions.post('/calendars/:calendarId/events/quickAdd')
var response = pkg.googlecalendar.functions.patch('/calendars/:calendarId/acl/:ruleId', body)
var response = pkg.googlecalendar.functions.patch('/calendars/:calendarId/acl/:ruleId')
var response = pkg.googlecalendar.functions.put('/users/me/calendarList/:calendarId', body)
var response = pkg.googlecalendar.functions.put('/users/me/calendarList/:calendarId')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the package:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/calendars'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.post(body)
```
---
* API URL: '/calendars/:calendarId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.get(calendarId)
```
---
* API URL: '/calendars/:calendarId'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.post(body)
```
---
* API URL: '/calendars/:calendarId'
* HTTP Method: 'PATCH'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.patch(calendarId, body)
```
---
* API URL: '/calendars/:calendarId'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.put(calendarId, body)
```
---
* API URL: '/calendars/:calendarId/acl'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.acl.get(calendarId)
```
---
* API URL: '/calendars/:calendarId/acl'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.acl.post(calendarId, body)
```
---
* API URL: '/calendars/:calendarId/clear'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.clear.post(calendarId, body)
```
---
* API URL: '/calendars/:calendarId/events'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.events.get(calendarId)
```
---
* API URL: '/calendars/:calendarId/events'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.events.post(calendarId, body)
```
---
* API URL: '/calendars/:calendarId/acl/:ruleId'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.acl.delete(calendarId, ruleId)
```
---
* API URL: '/calendars/:calendarId/acl/:ruleId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.acl.get(calendarId, ruleId)
```
---
* API URL: '/calendars/:calendarId/acl/:ruleId'
* HTTP Method: 'PATCH'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.acl.patch(calendarId, ruleId, body)
```
---
* API URL: '/calendars/:calendarId/acl/:ruleId'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.acl.put(calendarId, ruleId, body)
```
---
* API URL: '/calendars/:calendarId/acl/watch'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.acl.watch.post(calendarId, body)
```
---
* API URL: '/calendars/:calendarId/events/:eventId'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.events.delete(calendarId, eventId)
```
---
* API URL: '/calendars/:calendarId/events/:eventId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.events.get(calendarId, eventId)
```
---
* API URL: '/calendars/:calendarId/events/:eventId'
* HTTP Method: 'PATCH'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.events.patch(calendarId, eventId, body)
```
---
* API URL: '/calendars/:calendarId/events/:eventId'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.events.put(calendarId, eventId, body)
```
---
* API URL: '/calendars/:calendarId/events/import'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.events.import.post(calendarId, body)
```
---
* API URL: '/calendars/:calendarId/events/quickAdd'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.events.quickAdd.post(calendarId, body)
```
---
* API URL: '/calendars/:calendarId/events/watch'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.events.watch.post(calendarId, body)
```
---
* API URL: '/calendars/:calendarId/events/:eventId/instances'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.events.instances.get(calendarId, eventId)
```
---
* API URL: '/calendars/:calendarId/events/:eventId/move'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.calendars.events.move.post(calendarId, eventId, body)
```
---
* API URL: '/channels/stop'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.channels.stop.post(body)
```
---
* API URL: '/colors'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.colors.get()
```
---
* API URL: '/freeBusy'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.freeBusy.post(body)
```
---
* API URL: '/users/me/calendarList'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.users.me.calendarList.get()
```
---
* API URL: '/users/me/calendarList'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.users.me.calendarList.post(body)
```
---
* API URL: '/users/me/settings'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.users.me.settings.get()
```
---
* API URL: '/users/me/calendarList/:calendarId'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.users.me.calendarList.delete(calendarId)
```
---
* API URL: '/users/me/calendarList/:calendarId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.users.me.calendarList.get()
```
---
* API URL: '/users/me/calendarList/:calendarId'
* HTTP Method: 'PATCH'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.users.me.calendarList.patch(calendarId, body)
```
---
* API URL: '/users/me/calendarList/:calendarId'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.users.me.calendarList.put(calendarId, body)
```
---
* API URL: '/users/me/calendarList/watch'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.users.me.calendarList.watch.post(body)
```
---
* API URL: '/users/me/settings/:setting'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.users.me.settings.get()
```
---
* API URL: '/users/me/settings/watch'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
pkg.googlecalendar.functions.users.me.settings.watch.post(body)
```
---

</details>

