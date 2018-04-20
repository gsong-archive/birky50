FROM node:carbon-alpine

ARG packages="npm onchange prettier yarn"
RUN npm install -g -U ${packages} && npm cache clean --force

WORKDIR /app

RUN apk add --upgrade --update --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/main/ apk-tools
RUN apk add --update --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community/ tini
ENTRYPOINT ["/sbin/tini", "-e", "143", "--"]
