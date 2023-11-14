FROM ubuntu:latest
LABEL maintainer="Jeremy Zheng"

ENV DEBIAN_FRONTEND noninteractive

RUN apt update
RUN apt -y upgrade
RUN apt -y install build-essential cmake \
    wget git python3
RUN apt -y clean

RUN mkdir -p $HOME/downloads $HOME/build
# https://musl.cc/
RUN wget -q -P $HOME/downloads https://more.musl.cc/x86_64-linux-musl/x86_64-linux-musl-cross.tgz \
    && cd /opt \
    && tar xf $HOME/downloads/x86_64-linux-musl-cross.tgz \
    && echo 'export PATH=/opt/x86_64-linux-musl-cross/bin:$PATH' >> $HOME/.bashrc
RUN wget -q -P $HOME/downloads https://more.musl.cc/x86_64-linux-musl/armv7l-linux-musleabihf-cross.tgz \
    && cd /opt \
    && tar xf $HOME/downloads/armv7l-linux-musleabihf-cross.tgz \
    && echo 'export PATH=/opt/armv7l-linux-musleabihf-cross/bin:$PATH' >> $HOME/.bashrc
RUN wget -q -P $HOME/downloads https://more.musl.cc/x86_64-linux-musl/aarch64-linux-musl-cross.tgz \
    && cd /opt \
    && tar xf $HOME/downloads/aarch64-linux-musl-cross.tgz \
    && echo 'export PATH=/opt/aarch64-linux-musl-cross/bin:$PATH' >> $HOME/.bashrc
RUN wget -q -P $HOME/downloads https://more.musl.cc/x86_64-linux-musl/riscv64-linux-musl-cross.tgz \
    && cd /opt \
    && tar xf $HOME/downloads/riscv64-linux-musl-cross.tgz \
    && echo 'export PATH=/opt/riscv64-linux-musl-cross/bin:$PATH' >> $HOME/.bashrc

RUN mkdir /opt/coconut
COPY coconut /opt/coconut/

RUN echo "$(date -u +%4Y%m%d%H%M%S)" | tee /VERSION

WORKDIR /opt/coconut
VOLUME /workspace

CMD ["/bin/bash", "-l"]
