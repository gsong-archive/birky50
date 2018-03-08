FROM node:carbon-alpine

ARG packages="create-react-app prettier yarn"
RUN npm install -g ${packages} && npm cache clean --force

WORKDIR /app
