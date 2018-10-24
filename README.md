# Ionic & Express.js Assignment

An Ionic & Express application that redirect the user to the selected/default url.

## Live server

```
https://ionic-express-assignment.herokuapp.com/
```

## Installation

```sh
yarn
# or
npm install
```

## Usage

```sh
# Run Ionic client
yarn dev:client
# or
npm run dev:client

# Run Express server
yarn dev:server
# or
npm run dev:server

# Run both
yarn dev
#or
npm run dev

# Run Ionic client using production api
yarn prod
# or
npm run prod
```

## Running server with docker

If you don't have MongoDB on your environment, you could use the docker.

First, create docker machine and enable port forwarding to your host:

```bash
docker-machine create assignment
eval $(docker-machine env assignment)

vboxmanage controlvm assignment natpf1 "3000,tcp,127.0.0.1,3000,,3000"
vboxmanage controlvm assignment natpf1 "27017,tcp,127.0.0.1,27017,,27017"
```

Then use the following commands to run/stop the containers:

```bash
# Run first time
docker-compose up --build

# And then
docker-compose up

# Stop
docker-compose down
```

## Endpoints

Base url path: /api/v1

| Method |   Path    |                    Description                    |
| :----: | :-------: | :-----------------------------------------------: |
|  POST  |   /url    |          url: string, redirect: boolean           |
|  GET   |    /db    | Seed the collection with default url (google.com) |
|  GET   | /db/clear |          Clear the collection from urls           |

## Build hybrid app
```bash
# Android
ionic cordova build android --release --prod

# iOS
ionic cordova build ios --release --prod
 
```

## Built with

|                                       Package                                        | Version |
| :----------------------------------------------------------------------------------: | :-----: |
|                  [Express.js](https://github.com/expressjs/express)                  |  4.\*   |
|                  [Socket.IO](https://github.com/socketio/socket.io)                  |  2.\*   |
|                  [Mongoose](https://github.com/Automattic/mongoose)                  |  5.\*   |
|     [express-validator](https://github.com/express-validator/express-validator)      |  5.\*   |
|             [response-time](https://github.com/expressjs/response-time)              |  2.\*   |
|                    [Angular](https://github.com/angular/angular)                     | 5.2.11  |
|             [ng-socket-io](https://github.com/bougarfaoui/ng-socket-io)              |  0.2\*  |
|                     [Ionic](https://github.com/ionic-team/ionic)                     |  3.9.2  |
| [cordova-plugin-inappbrowser](https://github.com/apache/cordova-plugin-inappbrowser) | 3.0.\*  |

## Developed under

| Platform  |  Version   |
| :-------: | :--------: |
|   macOS   |  10.13.6   |
|  NodeJS   |   8.11.1   |
|    npm    |   6.1.0    |
|   Yarn    |   1.9.4    |
|  Cordova  |   8.1.2    |
| Ionic CLI |   4.2.1    |
|  Docker   | 18.06.1-ce |
|  MongoDB  |   4.0.3    |
