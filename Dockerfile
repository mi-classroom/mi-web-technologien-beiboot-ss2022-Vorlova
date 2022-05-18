FROM node:18.1.0-alpine3.14
RUN npm install -g http-server

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

ENV PORT 5050
EXPOSE 5050
CMD [ "http-server", "build" ]
