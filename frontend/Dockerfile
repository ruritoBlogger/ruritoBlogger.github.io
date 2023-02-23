FROM node:19

RUN apt-get update -qq && apt-get -y upgrade

RUN mkdir /app
WORKDIR /app

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn

COPY . /app