FROM node:10.0.0-alpine
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN apk add yarn
RUN yarn install --pure-lockfile
COPY . .
EXPOSE 5000
CMD npm run start