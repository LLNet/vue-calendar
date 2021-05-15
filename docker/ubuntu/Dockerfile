FROM ubuntu:20.04
ENV TZ=Europe/Kiev
ARG DEBIAN_FRONTEND=noninteractive
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get update
RUN apt-get upgrade -y
RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections
RUN apt-get install -y --no-install-recommends apt-utils
RUN apt-get install -y curl wget
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash
RUN apt-get install nodejs git -y
RUN npm install --global bower
RUN npm install --global bower-npm-resolver
RUN npm install --global npm
RUN npm install --global @vue/cli
RUN npm install --global http-server

RUN groupadd --gid 1000 node
RUN useradd --uid 1000 --gid node --shell /bin/bash --create-home node
RUN node --version
RUN http-server --version
RUN vue --version

EXPOSE 22
