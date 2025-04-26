FROM node:23-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install lightningcss

RUN cp node_modules/lightningcss-linux-x64-musl/lightningcss.linux-x64-musl.node \
       node_modules/lightningcss/lightningcss.linux-x64-gnu.node

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
