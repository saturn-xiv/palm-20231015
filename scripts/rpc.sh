#!/bin/sh

set -e


export WORKSPACE=$PWD
export PROTOBUF_ROOT=$HOME/.local

function generate_flatbuffers(){
    flatc --rust -o $WORKSPACE/src/$2.rs $WORKSPACE/$1.fbs
}


function generate_grpc() {
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
    local target=$WORKSPACE/react-ant-design/src/protocols
    if [ -d $target ]
    then
        rm -r $target
    fi
    mkdir -pv $target
    $PROTOBUF_ROOT/bin/protoc -I $WORKSPACE/protos \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --js_out=import_style=commonjs,binary:$target \
        --grpc-web_out=import_style=commonjs,mode=grpcweb:$target \
        $WORKSPACE/protos/*.proto
}

declare -a languages=(
    # "node"
    "php"
    "python"
    "ruby"
    "cpp"
    "csharp"
    # "objective_c"
)

for l in "${languages[@]}"
do
    generate_grpc $l
done

generate_grpc_web

echo 'done.'
exit 0
