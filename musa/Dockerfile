FROM ubuntu:latest
LABEL maintainer="Jeremy Zheng"

ENV DEBIAN_FRONTEND noninteractive

RUN apt update
RUN apt -y upgrade

RUN apt -y install 
RUN apt -y clean

RUN mkdir /opt/musa
COPY loquat /opt/musa/

RUN echo "$(date -u +%4Y%m%d%H%M%S)" | tee /VERSION

WORKDIR /opt/musa

CMD ["/bin/bash", "-l"]
