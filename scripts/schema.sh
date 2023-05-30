#!/bin/bash

set -e

export PROTOBUF_ROOT=$HOME/.local
export WORKSPACE=$PWD

# -----------------------------------------------------------------------------

function generate_grpc_by_lang() {
    local target=$WORKSPACE/$2
    echo "generate grpc($1) => $2"
    $PROTOBUF_ROOT/bin/protoc -I $WORKSPACE/protocols \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --${1}_out=$target --grpc_out=$target \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_${1}_plugin \
        $WORKSPACE/protocols/*.proto
}

function generate_thrift_cpp() {
    echo "generate thrift(cpp) => $1"
    local target=$WORKSPACE/$1
    mkdir -p $target
    thrift -out $1 --gen cpp:no_skeleton -r $WORKSPACE/protocols/*.thrift
}

# -----------------------------------------------------------------------------
cd $WORKSPACE
declare -a tmp_folders=(
    "gourd/src"
    "lemon/src"
)
for t in "${tmp_folders[@]}"
do
    if [ -d $t ]
    then 
        rm -r $t
    fi
    mkdir -p $t
done


generate_grpc_by_lang cpp lemon/src
generate_thrift_cpp gourd/src
# -----------------------------------------------------------------------------

echo 'done.'
exit 0
