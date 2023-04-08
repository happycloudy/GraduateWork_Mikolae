FROM node:16.13-buster as development

ENV NODE_ENV=development

RUN mkdir /usr/src/app && chown node:node /usr/src/app

WORKDIR /usr/src/app

COPY --chown=node:node package.json ./
COPY --chown=node:node yarn.lock ./

RUN yarn --dev install

COPY --chown=node:node . .

RUN yarn build

# seperate build for production
FROM node:16.13-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]