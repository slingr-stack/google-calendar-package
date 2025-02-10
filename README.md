# Overview
Repo: [https://github.com/slingr-stack/google-calendar-package](https://github.com/slingr-stack/google-calendar-package)

This [package](https://platform-docs.slingr.io/dev-reference/data-model-and-logic/packages/) allows direct access to the [Google Calendar API](https://developers.google.com/calendar/api/v3/reference?hl=es-419),
through a Client ID OAuth 2.0 account; however, it provides shortcuts and helpers for most common use cases.
Also, you can refer to the [Google Calendar Documentation](https://developers.google.com/calendar/api/guides/overview?hl=es-419) for more information.
Some features available in this endpoint are:

- Authentication and authorization
- Direct access to the Google Calendar API
- Listener that catch incoming webhooks from Google Calendar

## Configuration

To use the Google Calendar package,
first you must create an app in the [Google Developer Console](https://console.developers.google.com)
then create a Google Cloud project for your Google Calendar app, then if you plan to use Service Account authentication method, follow these instructions:

- Enable the Admin SDK API in your Google Cloud project.
- Create a service account and credentials and delegate domain-wide authority to it (assign ONLY the necessary scopes to your service - account) [Click here for instructions](https://cloud.google.com/iam/docs/manage-access-service-accounts?hl=es-419).
- Download the JSON file with the service account credentials to get the service account private key.

Otherwise, if you plan to use OAuth 2.0 authentication method:

- Enable the Calendar API in your Google Cloud project.
- Create a Client ID OAuth 2.0 account.
- Copy the Client ID and Client Secret of the package.

### Scopes

Note that the client must have access to the calendar resources. If you try to access to a resource that the user does not own
the request will result in a 404 or 403 unauthorized error.

To successfully use the Google Calendar package through a Service Account, please note the following requirements:

### Domain-Wide Delegation (If you want to access all users' calendars within your organization):
   If you wish to allow the Service Account to access the calendars of all users within your domain (Google Workspace/GSuite), you must configure Domain-Wide Delegation for the Service Account. This allows the Service Account to act on behalf of users in your organization.

#### Steps to Set Up Domain-Wide Delegation:

Enable Domain-Wide Delegation for the Service Account:

1. Go to the Google Cloud Console.
Navigate to IAM & Admin > Service Accounts.
Select your Service Account and click on it.
Under the Service Account details, enable Domain-Wide Delegation.
Note the Client ID of the Service Account.
Configure Delegation in Google Admin Console:

2. Go to the Google Admin Console (you need to be a super administrator).
Navigate to Security > API Controls.
Under Domain-wide delegation, click Manage Domain Wide Delegation.
Add the Client ID of your Service Account.
Assign the necessary scopes (permissions) that you want the Service Account to access.

### Share Individual User Calendars with the Service Account (If you want to access a specific user's calendar):
   If you prefer to limit access to a specific user's calendar, you can share their calendar directly with the Service Account.

#### Steps to Share a Calendar with the Service Account:

Go to Google Calendar:

1. Open Google Calendar with the user account whose calendar you want to share.
Share the Calendar:

2. On the left panel, find the calendar you want to share (under My calendars).
Click on the three dots next to the calendar and select Settings and sharing.
Scroll down to the Share with specific people section.
Add the email address of the Service Account (this is typically in the format your-service-account@your-project.iam.gserviceaccount.com).
3. Set the appropriate permissions, such as "See all event details" or "Make changes to events" (depending on your needs).

## Configuration Parameters
If you have selected OAuth 2.0 authorization method, these are the field names to use the parameters with dynamic configuration.

Name (Dynamic Config param name) - Type
* Client Id (clientId) - Text
* Client Secret (clientSecret) - Text

#### Authentication Method
Allows to choose between Account Service and OAuth 2.0 authorization methods.

**Name**: `authenticationMethod`
**Type**: buttonsGroup
**Mandatory**: true

#### Service Account Email
The email created for the service account, it shows up when Service Account authorization method is enabled.

**Name**: `serviceAccountEmail`
**Type**: text
**Mandatory**: true



#### Private Key
The private key associated to the service account, it shows up when Service Account authorization method is enabled.

**Name**: `privateKey`
**Type**: password
**Mandatory**: true

#### Client ID
The ID for your client application registered with the API provider, it shows up when OAuth 2.0 authorization method is enabled.

**Name**: `clientId`
**Type**: text
**Mandatory**: true

#### Client Secret
The client secret given to you by the API provider, it shows up when OAuth 2.0 authorization method is enabled.

**Name**: `clientSecret`
**Type**: password
**Mandatory**: true

#### OAuth Callback
The OAuth callback to configure in your Google Calendar App. it shows up when OAuth 2.0 authorization method is enabled.

**Name**: `oauthCallback`
**Type**: label

#### Webhooks URL
The URL to configure in webhooks of your Google Calendar App.

**Name**: `webhooksUrl`
**Type**: label

#### Google Calendar API URL
The URL of the Google Calendar API where the requests are performed.

**Name**: `GOOGLECALENDAR_API_BASE_URL`
**Type**: label

### Storage Value And Offline Mode

By default, the `Service Account` authorization method is used. When using this method, you can directly call the following method to retrieve the access token, without requiring any additional actions:

`pkg.googlecalendar.api.getAccessToken();`

This will return the access token, which will be securely stored in the application's storage and associated with a user by their ID.

If you have enabled the `OAuth 2.0` authorization method, the same method is used. The difference is that the Google Calendar package includes the `&access_type=offline` parameter, which allows the application to request a refresh token. This happens when calling the UI service (which should run during runtime, for example, by invoking the method within an action) to log in to the application.

The Google service will return an object containing both the access token and the refresh token. Each token will be stored in the app's storage (accessible via the Monitor), where you can view them encrypted and associated with the user by ID.

# Javascript API

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
### Create an event.

```javascript
const event = {
    'summary': 'Google I/O 2015',
    'location': '800 Howard St., San Francisco, CA 94103',
    'description': 'A chance to hear more about Google\'s developer products.',
    'start': {
        'dateTime': '2015-05-28T09:00:00-07:00',
        'timeZone': 'America/Los_Angeles'
    },
    'end': {
        'dateTime': '2015-05-28T17:00:00-07:00',
        'timeZone': 'America/Los_Angeles'
    },
    'recurrence': [
        'RRULE:FREQ=DAILY;COUNT=2'
    ],
    'attendees': [
        {'email': 'lpage@example.com'},
        {'email': 'sbrin@example.com'}
    ],
    'reminders': {
        'useDefault': false,
        'overrides': [
            {'method': 'email', 'minutes': 24 * 60},
            {'method': 'popup', 'minutes': 10}
        ]
    }
};

const request = pkg.googlecalendar.api.post('/calendars/:calendarId/events', event);
```
### Subscribes to google calendar events changes.

```javascript
const body = {
  "id": "<use a unique UUID or any similar unique string>", // Your channel ID. Maximum length: 64 characters. 
  "type": "web_hook",
  "address": "https://mydomain.com/notifications", // Your receiving URL.
  ...
  "token": "target=myApp-myChangesChannelDest", // (Optional) Your changes channel token.
  "expiration": 1426325213000 // (Optional) Your requested channel expiration date and time.
};
const response = pkg.googlecalendar.api.post('/calendars/:calendarId/events/watch', body);
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Events
### Webhook

Incoming webhook events are automatically captured by the default listener named `Catch HTTP google calendar events`, which can be found below the `Scripts` section. Alternatively, you have the option to create a new package listener. For more information, please refer to the [Listeners Documentation](https://platform-docs.slingr.io/dev-reference/data-model-and-logic/listeners/). Please take a look at the Google Calendar documentation of the [Webhooks](https://developers.google.com/calendar/api/guides/push?hl=es-419) for more information.

There are no events for this endpoint.

## Dependencies
* HTTP Service
* OAuth Package

# About Slingr

Slingr is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
