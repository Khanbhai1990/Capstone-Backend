FROM node:alpine

ENV NODE_ENV production

WORKDIR /Capstone-Backend

COPY . /Capstone-Backend/

RUN npm install