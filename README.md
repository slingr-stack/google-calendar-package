---
title: Google Calendar endpoint
keywords: 
last_updated: April 27, 2023
tags: []
summary: "Detailed description of the Google Calendar endpoint."
---

## Overview

This endpoint allows direct access to the [Google Calendar API](https://developers.google.com/calendar/api/v3/reference/) through a service account, however it provides shortcuts and helpers for most common use cases.

Some features available in this endpoint are:

- Authentication and authorization
- Direct access to the Google Calendar API
- Helpers for API methods
- Flow Steps for common use cases

## Configuration

In order to use the Google Calendar endpoint you must create an app in the [Google Developer Console](https://console.developers.google.com)
by following these instructions:

- Create a Google Cloud project for your Google Calendar app.
- Enable the Calendar API in your Google Cloud project.
- Download the JSON file with the service account credentials to get the service account private key.

### Service account email

As explained above, this value comes from the credentials file.

### OAuth Scopes

The scopes the service account have access to. Take into account if any scope is selected to which the service account does not have access the endpoint will fail to be authorized to make any requests.

### Private Key

As explained above, this value also comes from the credentials file.

# Javascript API

The Javascript API of the googlecalendar endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `DELETE`,`GET`,`POST`,`PATCH`,`PUT` requests to the [googlecalendar API](https://developers.google.com/calendar/api/v3/reference) like this:
```javascript
var response = app.endpoints.googlecalendar.delete('/calendars/:calendarId/events/:eventId')
var response = app.endpoints.googlecalendar.get('/users/me/calendarList')
var response = app.endpoints.googlecalendar.post('/calendars/:calendarId/clear', body)
var response = app.endpoints.googlecalendar.post('/calendars/:calendarId/clear')
var response = app.endpoints.googlecalendar.patch('/calendars/:calendarId/acl/:ruleId', body)
var response = app.endpoints.googlecalendar.patch('/calendars/:calendarId/acl/:ruleId')
var response = app.endpoints.googlecalendar.put('/calendars/:calendarId', body)
var response = app.endpoints.googlecalendar.put('/calendars/:calendarId')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/calendars/:calendarId/acl/:ruleId'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.acl.delete(calendarId, ruleId)
```
---
* API URL: '/users/me/calendarList/:calendarId'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.users.me.calendarList.delete(calendarId)
```
---
* API URL: '/calendars/:calendarId/events/:eventId'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.events.delete(calendarId, eventId)
```
---
* API URL: '/calendars/:calendarId/acl'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.acl.get(calendarId)
```
---
* API URL: '/calendars/:calendarId/acl/:ruleId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.acl.get(calendarId, ruleId)
```
---
* API URL: '/users/me/calendarList'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.users.me.calendarList.get()
```
---
* API URL: '/users/me/calendarList/:calendarId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.users.me.calendarList.get(calendarId)
```
---
* API URL: '/users/me/calendarList/:calendarId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.users.me.calendarList.get()
```
---
* API URL: '/calendars/:calendarId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.get(calendarId)
```
---
* API URL: '/colors'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.colors.get()
```
---
* API URL: '/calendars/:calendarId/events'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.events.get(calendarId)
```
---
* API URL: '/calendars/:calendarId/events/:eventId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.events.get(calendarId, eventId)
```
---
* API URL: '/calendars/:calendarId/events/:eventId/instances'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.events.instances.get(calendarId, eventId)
```
---
* API URL: '/users/me/settings'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.users.me.settings.get()
```
---
* API URL: '/users/me/settings/:setting'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.users.me.settings.get(setting)
```
---
* API URL: '/users/me/settings/:setting'
* HTTP Method: 'GET'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.users.me.settings.get()
```
---
* API URL: '/calendars/:calendarId/acl'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.acl.post(calendarId, body)
```
---
* API URL: '/calendars/:calendarId/acl/watch'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.acl.watch.post(calendarId, body)
```
---
* API URL: '/users/me/calendarList'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.users.me.calendarList.post(body)
```
---
* API URL: '/users/me/calendarList/watch'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.users.me.calendarList.watch.post(body)
```
---
* API URL: '/calendars/:calendarId/clear'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.clear.post(calendarId, body)
```
---
* API URL: '/calendars'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.post(body)
```
---
* API URL: '/calendars/:calendarId'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.post(calendarId, body)
```
---
* API URL: '/calendars/:calendarId'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.post(calendarId, body)
```
---
* API URL: '/channels/stop'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.channels.stop.post(body)
```
---
* API URL: '/calendars/:calendarId/events/import'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.events.import.post(calendarId, body)
```
---
* API URL: '/calendars/:calendarId/events'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.events.post(calendarId, body)
```
---
* API URL: '/calendars/:calendarId/events/:eventId/move'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.events.move.post(calendarId, eventId, body)
```
---
* API URL: '/calendars/:calendarId/events/quickAdd'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.events.quickAdd.post(calendarId, body)
```
---
* API URL: '/calendars/:calendarId/events/watch'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.events.watch.post(calendarId, body)
```
---
* API URL: '/freeBusy'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.freeBusy.post(body)
```
---
* API URL: '/users/me/settings/watch'
* HTTP Method: 'POST'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.users.me.settings.watch.post(body)
```
---
* API URL: '/calendars/:calendarId/acl/:ruleId'
* HTTP Method: 'PATCH'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.acl.patch(calendarId, ruleId, body)
```
---
* API URL: '/users/me/calendarList/:calendarId'
* HTTP Method: 'PATCH'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.users.me.calendarList.patch(calendarId, body)
```
---
* API URL: '/calendars/:calendarId'
* HTTP Method: 'PATCH'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.patch(calendarId, body)
```
---
* API URL: '/calendars/:calendarId/events/:eventId'
* HTTP Method: 'PATCH'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.events.patch(calendarId, eventId, body)
```
---
* API URL: '/calendars/:calendarId/acl/:ruleId'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.acl.put(calendarId, ruleId, body)
```
---
* API URL: '/users/me/calendarList/:calendarId'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.users.me.calendarList.put(calendarId, body)
```
---
* API URL: '/calendars/:calendarId'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.put(calendarId, body)
```
---
* API URL: '/calendars/:calendarId/events/:eventId'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/calendar/api/v3/reference
```javascript
app.endpoints.googlecalendar.calendars.events.put(calendarId, eventId, body)
```
---

</details>

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>DELETE,GET,POST,PATCH,PUT</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/calendars/{calendarId}/acl/{ruleId}<br>/users/me/calendarList/{calendarId}<br>/calendars/{calendarId}/events/{eventId}<br>/calendars/{calendarId}/acl<br>/calendars/{calendarId}/acl/{ruleId}<br>/users/me/calendarList<br>/users/me/calendarList/{calendarId}<br>/users/me/calendarList/{calendarId}<br>/calendars/{calendarId}<br>/colors<br>/calendars/{calendarId}/events<br>/calendars/{calendarId}/events/{eventId}<br>/calendars/{calendarId}/events/{eventId}/instances<br>/users/me/settings<br>/users/me/settings/{setting}<br>/users/me/settings/{setting}<br>/calendars/{calendarId}/acl<br>/calendars/{calendarId}/acl/watch<br>/users/me/calendarList<br>/users/me/calendarList/watch<br>/calendars/{calendarId}/clear<br>/calendars<br>/calendars/{calendarId}<br>/calendars/{calendarId}<br>/channels/stop<br>/calendars/{calendarId}/events/import<br>/calendars/{calendarId}/events<br>/calendars/{calendarId}/events/{eventId}/move<br>/calendars/{calendarId}/events/quickAdd<br>/calendars/{calendarId}/events/watch<br>/freeBusy<br>/users/me/settings/watch<br>/calendars/{calendarId}/acl/{ruleId}<br>/users/me/calendarList/{calendarId}<br>/calendars/{calendarId}<br>/calendars/{calendarId}/events/{eventId}<br>/calendars/{calendarId}/acl/{ruleId}<br>/users/me/calendarList/{calendarId}<br>/calendars/{calendarId}<br>/calendars/{calendarId}/events/{eventId}<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Calendar Manager

This flow step will send a request to handle calendars.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Actions</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is for the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>
                Find One Calendar (GET /calendars/{idCalendar})
                Find All Calendars (GET /calendars)
                Create Calendar (POST /calendars)
                Update Calendar (PUT /calendars/{idCalendar})
                Delete Calendar (DELETE /calendars/{idCalendar})
            </strong></i>
        </td>
    </tr>
    <tr>
        <td>Path Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the call (idCalendar).
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).


### Events Manager

This flow step will send a request to handle events.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Actions</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is for the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>
                Find One Event (GET /calendars/{idCalendar}/events/{idEvent})
                Find All Events (GET /calendars/{idCalendar}/events)
                Create Event (POST /calendars/{idCalendar}/events)
                Update Event (PUT /calendars/{idCalendar}/events/{idEvent}) 
                Delete Event (DELETE /calendars/{idCalendar}/events/{idEvent})
            </strong></i>
        </td>
    </tr>
    <tr>
        <td>Path Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the call (idCalendar and idEvent).
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).



</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*

## Events

There are no events for this endpoint.

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
