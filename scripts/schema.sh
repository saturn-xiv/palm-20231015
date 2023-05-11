#!/bin/bash

set -e

export PROTOBUF_ROOT=$HOME/.local
export WORKSPACE=$PWD

generate_bamboo() {
    echo "generate pages"
    cd $WORKSPACE
    local target=bamboo/src
    if [ -d $target ]
        then rm -r $target
    fi
    mkdir -p $target
    
    find themes -type f -name "*.cpsp" -exec cpspc -N -o $target "{}" \;
    $PROTOBUF_ROOT/bin/protoc -I $WORKSPACE/protocols \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --cpp_out=$target --grpc_out=$target \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_cpp_plugin \
        $WORKSPACE/protocols/*.proto
}

generate_cactus() {
    echo "generate active records"
    cd $WORKSPACE/cactus
    arc mappers/*.xml
}

generate_bamboo
generate_cactus

echo 'done.'

exit 0
