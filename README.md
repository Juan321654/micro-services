# micro-services
cd into each folder and `npm run start`
creating posts on the front end while one of the services is down will keep the data in memory until the service is ran again, for example the "query" service.
it will not display the created posts on the UI, but when the service is ran again, it and the ui is refreshed, it will fetch all those missed events that happened while the service was down.