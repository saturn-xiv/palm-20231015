#!/bin/bash

set -e

npm install --save @grpc/grpc-js google-protobuf \
    marked dompurify jsdom canvas bufferutil utf-8-validate \
    pino pino-pretty

npm install --save-dev webpack webpack-cli

echo 'done.'
exit 0
