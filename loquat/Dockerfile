FROM ubuntu:latest
LABEL maintainer="Jeremy Zheng"

ENV DEBIAN_FRONTEND noninteractive

RUN apt update
RUN apt -y upgrade

RUN apt -y install build-essential cmake clang llvm mold \
    golang libssl-dev libunwind-dev libboost-all-dev
RUN apt -y clean

RUN mkdir /opt/loquat
COPY loquat /opt/loquat/

RUN echo "$(date -u +%4Y%m%d%H%M%S)" | tee /VERSION

WORKDIR /opt/loquat

CMD ["/bin/bash", "-l"]
