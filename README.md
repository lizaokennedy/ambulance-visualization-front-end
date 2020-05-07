# Ambu-Lenz - Front-end

This project uses a docker container. In order to start up the front-end follow the following steps.

## Setting up
You will need to install docker, docker-compose , as well as, npm.

### Docker install
Docker can be downloaded and installed here: https://docs.docker.com/get-docker/.

### Docker-Compose install
Docker-Compose can be installed and downloaded here: https://docs.docker.com/compose/install/.


### NPM install
Npm can be downloaded and installed here: https://www.npmjs.com/get-npm

## Creating and Running the Docker Container 
cd into the root directory and run the following commands

1. ```docker build -t my-app:dev .```

2. ``` docker-compose up -d --build```

## Useful Commands
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
