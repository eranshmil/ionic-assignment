# Ionic & Express.js Assignment

An Ionic application that redirect the user to the selected/default url.

## Live server

```
https://ionic-express-assignment.herokuapp.com/
```

## Installation

```sh
npm ci
# or
yarn
```

## Usage

```sh
# Run Ionic client
npm run dev:client
# or
yarn dev:client

# Run Express server
npm run dev:server
# or
yarn dev:server

# Run both
npm run dev
#or
yarn dev

# Run Ionic client using production api
npm run prod
# or
yarn prod
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

## Built with

|                                   Package                                   | Version |
| :-------------------------------------------------------------------------: | :-----: |
|                                 Express.js                                  |  4.\*   |
|                                  Mongoose                                   |  5.\*   |
| [Express Validator](https://github.com/express-validator/express-validator) |  5.\*   |
|                                   Angular                                   | 5.2.11  |
|                                    Ionic                                    |  3.9.2  |
|   [In App Browser](https://github.com/apache/cordova-plugin-inappbrowser)   | 3.0.\*  |

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
