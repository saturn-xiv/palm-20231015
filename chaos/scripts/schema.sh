#!/bin/bash

set -e

export PROTOBUF_ROOT=$HOME/.local
export WORKSPACE=$PWD

function generate_flatbuffers(){
    echo "generate flatbuffers"
    flatc --rust -o $WORKSPACE/src/$2.rs $WORKSPACE/$1.fbs
}


function generate_grpc_by_lang() {
    local target=$WORKSPACE/tmp/protocols/$1
    echo "generate code for grpc-$1"
    if [ -d $target ]
    then
        rm -r $target
    fi
    mkdir -p $target
    $PROTOBUF_ROOT/bin/protoc -I $WORKSPACE/protos \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --${1}_out=$target --grpc_out=$target \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_${1}_plugin \
        $WORKSPACE/protos/*.proto
}

function generate_grpc_web() {
    echo "generate code for grpc-web"
    local target=$WORKSPACE/dashboard/src/protocols
    if [ -d $target ]
    then
        rm -r $target
    fi
    mkdir -p $target
    $PROTOBUF_ROOT/bin/protoc -I $WORKSPACE/protos \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --js_out=import_style=commonjs,binary:$target \
        --grpc-web_out=import_style=typescript,mode=grpcweb:$target \
        $WORKSPACE/protos/*.proto
}

function generate_grpc_cpp() {
    echo "generate code for grpc-cpp"
    local target=$WORKSPACE/coco/src
    if [ -d $target ]
    then
        rm -r $target
    fi
    mkdir -p $target
    $PROTOBUF_ROOT/bin/protoc -I $WORKSPACE/protos \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --cpp_out=$target --grpc_out=$target \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_cpp_plugin \
        $WORKSPACE/protos/*.proto
}
# ----------------------------------------------------------

declare -a languages=(
    # "node"
    "php"
    "python"
    "ruby"
    "csharp"
    # https://repo1.maven.org/maven2/io/grpc/protoc-gen-grpc-java/
    # "java" 
    # "objective_c"
)

for l in "${languages[@]}"
do
    generate_grpc_by_lang $l
done

# generate_grpc_web
generate_grpc_cpp

# ----------------------------------------------------------

echo 'done.'
exit 0
