FROM node:12.20.0-alpine3.10 AS firebase
ARG user="node"
ARG group="node"
ENV UID=$user
ENV GID=$group
ENV NPM_CONFIG_PREFIX /home/$UID/.npm-global
ENV PATH $PATH:/home/$UID/.npm-global/bin
LABEL authors="morozov.space@mail.ru" \
      source="https://gitlab.com/reverse.studio/docker-firebase-nuxt-template" \
      description="Dockerized firebase-tools for local development"
USER root
RUN apk --no-cache add --upgrade openjdk11 --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community && \
    apk --no-cache add --upgrade bash;
USER $UID
RUN npm install -g firebase-tools

FROM firebase AS base
USER root
RUN mkdir /home/$UID/app && \
    chown $UID:$GID /home/$UID/app;
WORKDIR /home/$UID/app
COPY --chown=$UID:$GID ./app/functions/package*.json ./functions/
USER $UID
RUN cd functions && \
    npm install && \
    npm cache clean --force;

FROM base AS start
ENV NPM_CONFIG_PREFIX /home/$UID/.npm-global
ENV PATH $PATH:/home/$UID/.npm-global/bin
USER root
WORKDIR /home/$UID/app
COPY --chown=$UID:$GID ./app .
USER $UID
ENTRYPOINT  if [ "$FIREBASE_TOKEN" == "" ]; \
            then echo "You have not been authorized" && exit 0; \
            else firebase emulators:start --import=./seed --export-on-exit ; \
            fi;