FROM node:latest

WORKDIR  /pipeline

COPY . .

RUN  npm install

EXPOSE  3000

CMD [ "npm","start" ]
