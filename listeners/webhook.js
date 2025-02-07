/****************************************************
 Listeners
 ****************************************************/

 listeners.defaultWebhookGoogleCalendar = {
    label: 'Catch HTTP Google Calendar events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/googlecalendar',
        }
    },
    callback: function(event) {
        sys.logs.info('[googlecalendar] Received Google Calendar webhook. Processing and triggering a package event.', event);
        sys.logs.info('[googlecalendar] Triggering Google Calendar event [webhook]');
        sys.events.triggerEvent('googlecalendar:webhook', event.data);
    }
};