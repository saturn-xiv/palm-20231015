FROM alpine:latest
LABEL maintainer="Jeremy Zheng"

RUN apk update
RUN apk upgrade
RUN apk add nodejs npm

COPY morus/config.json morus/dist /opt/morus/

RUN echo "$(date -u +%4Y%m%d%H%M%S)" | tee /VERSION

WORKDIR /opt/morus
VOLUME /workspace

CMD ["/bin/sh", "-l"]
