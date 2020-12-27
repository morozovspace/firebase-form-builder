FROM node:12.20.0-alpine3.10 AS dependencies
ARG user="node"
ARG group="node"
ENV UID=$user
ENV GID=$group
ENV NPM_CONFIG_PREFIX /home/$UID/.npm-global
ENV PATH $PATH:/home/$UID/.npm-global/bin
LABEL authors="morozov.space@mail.ru" \
      source="https://gitlab.com/reverse.studio/docker-firebase-nuxt-template" \
      description="Dockerized nuxt js app"
USER root 
RUN apk update &&\
    apk upgrade && \
    mkdir /home/$UID/app && \
    chown $UID:$GID /home/$UID/app
WORKDIR /home/$UID/app
COPY --chown=$UID:$GID ./app/package*.json ./
USER $UID
RUN npm install --cache

FROM dependencies AS base
USER root
WORKDIR /home/$UID/app
COPY --chown=$UID:$GID ./app .
USER $UID
CMD npm run dev