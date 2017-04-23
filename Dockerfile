FROM node:6.10-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install && npm cache clean
COPY server.js /usr/src/app/
COPY src /usr/src/app/src
COPY config /usr/src/app/config

CMD [ "npm", "start" ]

EXPOSE 9998
