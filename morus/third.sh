#!/bin/bash

set -e

npm install --save @grpc/grpc-js grpc-health-check google-protobuf \
    marked dompurify jsdom canvas bufferutil utf-8-validate \
    tslog

npm install --save-dev webpack webpack-cli

if [ -d health ]
then
    rm -r health
fi
cp -r node_modules/grpc-health-check/proto/health ./

echo 'done.'
exit 0
