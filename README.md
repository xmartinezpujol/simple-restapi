# Simple REST API a la Unsplash - ReactJS, NodeJS, Express

### Client / Server localhost
Node/NPM required to install dependencies.

![ReactJS App - Simple REST API](/server/data/preview.jpg?raw=true "ReactJS App - Simple REST API")

Clone rep
``` shell
git clone https://github.com/xmartinezpujol/simple-restapi.git
```

Install dependencies
``` shell
npm install
```

Run Server (API) at http://localhost:8080
``` shell
npm run api
```

Run Client (ReactJS App) at http://localhost:3000
``` shell
npm start
```

Make Production Bundle - Client (ReactJS App)
``` shell
npm run prod
```

### Testing for Mobile Devices

You can use this Heroku App (https://simple-restapi.herokuapp.com/) as an External Server and open a tunnel using Ngrok (or similar software) with your Client App. Server configuration can be changed in ReactJS App.js file, in setServerConfig function.

Do tests with Wifi, the app isn't optimized yet for mobile devices and detail modals still load Raw images (1-3MB). Mobile devices are still pending for optimization and a React Native app. This is just for testing purposes, don't leave it like that for production.


### API URLs

GET all galleries
``` shell
http://localhost:8080/api/galleries/
```

GET a gallery by it's keyword identifier
``` shell
http://localhost:8080/api/galleries/oriental/
```

GET a gallery detail image
``` shell
http://localhost:8080/api/galleries/oriental/2
```

Direct link to image file
```
http://localhost:8080/oriental/sushi.jpg
```

### About React Routing and Redux

Because of the app scale it isn't actually needed a solution like Redux or App Routing (at moment we only show a single view with default gallery)


### Tech Stack
ReactJS, NodeJS, Express, Webpack3 + DevServer, SASS, Pug(Jade).
