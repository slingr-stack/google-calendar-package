<table class="table" style="margin-top: 10px">
    <thead>
    <tr>
        <th>Title</th>
        <th>Last Updated</th>
        <th>Summary</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Google Calendar package</td>
        <td>November 13, 2023</td>
        <td>Detailed description of the API of the Google Calendar package.</td>
    </tr>
    </tbody>
</table>

# Overview

This endpoint allows direct access to the [Google Calendar API](https://developers.google.com/calendar/api/v3/reference/) through a service account, however it provides shortcuts and helpers for most common use cases.

Some features available in this endpoint are:

- Authentication and authorization
- Direct access to the Google Calendar API
- Helpers for API methods
- Flow Steps for common use cases

## Configuration

To use the Google Calendar package you must create an app in the [Google Developer Console](https://console.developers.google.com)
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

The Javascript API of the googlecalendar package has two pieces:

- **HTTP requests**
- **Flow steps**

## HTTP requests
You can make `DELETE`,`GET`,`POST`,`PATCH`,`PUT` requests to the [googlecalendar API](https://developers.google.com/calendar/api/v3/reference) like this:
```javascript
var response = pkg.googlecalendar.api.delete('/users/me/calendarList/:calendarId')
var response = pkg.googlecalendar.api.get('/users/me/calendarList')
var response = pkg.googlecalendar.api.post('/calendars/:calendarId/events/quickAdd', body)
var response = pkg.googlecalendar.api.post('/calendars/:calendarId/events/quickAdd')
var response = pkg.googlecalendar.api.patch('/calendars/:calendarId/acl/:ruleId', body)
var response = pkg.googlecalendar.api.patch('/calendars/:calendarId/acl/:ruleId')
var response = pkg.googlecalendar.api.put('/users/me/calendarList/:calendarId', body)
var response = pkg.googlecalendar.api.put('/users/me/calendarList/:calendarId')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the package:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>

### Generic Flow Step

Generic flow step for full use of the entire package and its services.

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
        <td>Connect a timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read a timeout interval, in milliseconds (0 = infinity).</td>
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

For more information about how shortcuts or flow steps work, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

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

## Events

There are no events for this endpoint.

## Dependencies
* HTTP Service (Latest Version)

# About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
