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

function generate_thrift_by_lang() {
    echo "generate thrift($1) $2 => $3"
    local target=$WORKSPACE/$3
    
    mkdir -p $target

    thrift -out $3 --gen $1 -r $WORKSPACE/$2
}

# -----------------------------------------------------------------------------
cd $WORKSPACE
declare -a tmp_folders=(
    "babel/protocols"
    "loquat/gourd/src"
)
for t in "${tmp_folders[@]}"
do
    if [ -d $t ]
    then 
        rm -r $t
    fi
done


generate_grpc_by_lang cpp protocols/babel.proto babel/protocols
generate_thrift_by_lang cpp protocols/loquat.thrift loquat/gourd/src
# -----------------------------------------------------------------------------

echo 'done.'
exit 0
