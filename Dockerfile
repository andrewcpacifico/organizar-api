FROM node:6.10-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install && npm cache clean
COPY . /usr/src/app

CMD [ "npm", "start" ]

EXPOSE 9998