#!/bin/bash

set -e

yarn add @grpc/grpc-js google-protobuf \
    marked dompurify jsdom \
    pino pino-pretty

yarn add --dev webpack webpack-cli

echo 'done.'
exit 0
