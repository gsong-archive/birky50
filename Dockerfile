FROM cypress/browsers:chrome65-ff57

ARG packages="npm cypress onchange prettier yarn"
RUN npm install -g -U ${packages} && npm cache clean --force

WORKDIR /app

ARG TINI_VERSION
RUN curl -SL \
  https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini \
  -o /usr/local/bin/tini
RUN chmod +x /usr/local/bin/tini
ENTRYPOINT ["/usr/local/bin/tini", "-e", "143", "--"]
