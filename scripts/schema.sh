#!/bin/bash

set -e

export PROTOBUF_ROOT=$HOME/.local
export WORKSPACE=$PWD

# -----------------------------------------------------------------------------

function generate_grpc_by_lang() {
    local target=$WORKSPACE/$3
    echo "generate grpc($1) $2 => $3"
    if [ -d $target ]
    then 
        rm -r $target
    fi
    mkdir -p $target
    
    $PROTOBUF_ROOT/bin/protoc -I $WORKSPACE/protocols \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --${1}_out=$target --grpc_out=$target \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_${1}_plugin \
        $WORKSPACE/$2
}

# -----------------------------------------------------------------------------
generate_grpc_by_lang cpp protocols/babel.proto babel/protocols
# -----------------------------------------------------------------------------

echo 'done.'
exit 0
