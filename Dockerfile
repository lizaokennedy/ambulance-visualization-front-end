FROM node:lts-alpine
# install simple http server for serving static content
RUN npm install -g http-server
# make the 'app' folder the current working directory
WORKDIR /app
# copy both 'package.json' and 'package-lock.json' (if available)
COPY . ./
# install project dependencies
RUN npm install && npm run build
EXPOSE 8081
CMD [ "http-server", "dist" ]