# mythingiverse
Custom application proxy to echange data with https://www.thingiverse.com

## Prerequisites
Ensure the following software has been installed in your local machine:

- **Docker** - https://docs.docker.com/install/
- **Docker-compose** - https://docs.docker.com/compose/install/

## Start up

After that you can excute the following command in the root project in order to Start the react UI and the Node server.

```
docker-compose up
```

## Alternative

If you prefer build and start without docker, you are going to need:

- **Yarn** - https://yarnpkg.com/lang/en/docs/install/#windows-stable
- **Npm** - https://www.npmjs.com/get-npm 

After that we are going to start the backend and frontend:

### Backend

Navigate to backend folder and execute:

```
npm install
npm start
```

### Frontend

Navigate to frontend folder and execute:

```
yarn
yarn start
```