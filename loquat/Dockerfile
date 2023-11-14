FROM ubuntu:latest
LABEL maintainer="Jeremy Zheng"

ENV DEBIAN_FRONTEND noninteractive

RUN apt update
RUN apt -y upgrade
RUN apt -y install build-essential cmake pkg-config g++-12 \
    lsb-release wget git python3 golang \
    libssl-dev libunwind-dev libboost-all-dev libevent-dev
RUN apt -y clean

RUN mkdir -p $HOME/downloads $HOME/build

RUN mkdir /opt/loquat
COPY loquat /opt/loquat/

RUN echo "$(date -u +%4Y%m%d%H%M%S)" | tee /VERSION

WORKDIR /opt/loquat
VOLUME /workspace

CMD ["/bin/bash", "-l"]
