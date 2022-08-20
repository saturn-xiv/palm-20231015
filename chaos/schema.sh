#!/bin/sh

set -e

export WORKSPACE=$PWD
export TARGET=$PWD/coco/src

echo 'generate cpp protocol files...'
protoc -I $WORKSPACE/protos \
        -I /usr/include/google/protobuf \
        --cpp_out=$TARGET --grpc_out=$TARGET \
        --plugin=protoc-gen-grpc=/usr/bin/grpc_cpp_plugin \
        $WORKSPACE/protos/*.proto

echo 'done.'
exit 0
