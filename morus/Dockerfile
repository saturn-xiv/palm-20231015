FROM alpine:latest
LABEL maintainer="Jeremy Zheng"

RUN apk update
RUN apk upgrade
RUN apk add nodejs npm

COPY morus /opt/morus/
RUN cd /opt/morus && \
    npm install \
    npm build
RUN echo "$(date -u +%4Y%m%d%H%M%S)" | sudo tee /VERSION

WORKDIR /opt/morus

CMD ["/bin/bash", "-l"]
