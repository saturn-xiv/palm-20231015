FROM ubuntu:jammy
LABEL maintainer="Jeremy Zheng"

ENV DEBIAN_FRONTEND noninteractive

RUN apt update
RUN apt -y upgrade
RUN apt -y install isc-dhcp-server netplan.io \
    openssl nmap pwgen \
    iptables iptables-persistent
RUN apt clean
RUN apt -y autoremove

RUN echo "$(date -u +%4Y%m%d%H%M%S)" | tee /VERSION

VOLUME /workspace
WORKDIR /workspace

CMD ["/bin/bash", "-l"]
