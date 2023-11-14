FROM ubuntu:latest
LABEL maintainer="Jeremy Zheng"

ENV DEBIAN_FRONTEND noninteractive

RUN apt update
RUN apt -y upgrade

RUN apt install -y software-properties-common
# https://launchpad.net/~openjdk-r/+archive/ubuntu/ppa
RUN add-apt-repository -y ppa:openjdk-r/ppa
RUN apt update
RUN apt install -y openjdk-21-jdk
RUN apt -y clean

RUN mkdir /opt/musa
COPY musa/target/musa-*.jar musa/application.properties /opt/musa/

RUN echo "$(date -u +%4Y%m%d%H%M%S)" | tee /VERSION

WORKDIR /opt/musa

CMD ["/bin/bash", "-l"]
