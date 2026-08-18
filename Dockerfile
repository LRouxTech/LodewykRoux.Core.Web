FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

RUN npm i -g serve

ARG VITE_API_BASE_URL
ARG VITE_API_KEY

ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_API_KEY=$VITE_API_KEY

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]