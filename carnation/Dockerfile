FROM ubuntu:latest
LABEL maintainer="Jeremy Zheng"

ENV DEBIAN_FRONTEND noninteractive

RUN apt update
RUN apt -y upgrade
RUN apt -y install build-essential cmake libpq-dev \
    wget git python3
RUN apt -y clean

RUN mkdir /opt/carnation
COPY carnation /opt/carnation/

RUN echo "$(date -u +%4Y%m%d%H%M%S)" | tee /VERSION

WORKDIR /opt/carnation
VOLUME /workspace

CMD ["/bin/bash", "-l"]
