FROM node:carbon-alpine

ARG packages="npm create-react-app onchange prettier yarn"
RUN npm install -g ${packages} && npm cache clean --force

WORKDIR /app

RUN apk add --update --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community/ tini
ENTRYPOINT ["/sbin/tini", "-e", "143", "--"]
