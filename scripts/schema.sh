#!/bin/bash

set -e

export PROTOBUF_ROOT=$HOME/.local
export WORKSPACE=$PWD

# -----------------------------------------------------------------------------

function generate_grpc_by_lang() {
    local target=$WORKSPACE/tmp/protocols/$1
    echo "generate code for grpc-$1"
    if [ -d $target ]
    then
        rm -r $target
    fi
    mkdir -p $target
    $PROTOBUF_ROOT/bin/protoc -I $WORKSPACE/palm/protocols \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --${1}_out=$target --grpc_out=$target \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_${1}_plugin \
        $WORKSPACE/palm/protocols/*.proto
}

function generate_flatbuffers(){
    echo "generate flatbuffers"
    flatc --rust -o $WORKSPACE/src/$2.rs $WORKSPACE/$1.fbs
}



# https://github.com/grpc/grpc-web#code-generator-plugin
function generate_grpc_web() {
    echo "generate code for grpc-web"
    local target=$WORKSPACE/dashboard/src/protocols
    if [ -d $target ]
    then
        rm -r $target
    fi
    mkdir -p $target
    $PROTOBUF_ROOT/bin/protoc -I $WORKSPACE/palm/protocols \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --js_out=import_style=commonjs,binary:$target \
        --grpc-web_out=import_style=typescript,mode=grpcweb:$target \
        $WORKSPACE/palm/protocols/*.proto
}


function generate_diesel_postgresql() {
    echo "generate diesel schema for postgresql"
    DATABASE_URL=$1 diesel print-schema -e databasechangelog \
    > palm/src/schema.rs
}

# -----------------------------------------------------------------------------

generate_diesel_postgresql "postgres://www:change-me@127.0.0.1:5432/demo"

declare -a languages=(
    # "node"
    "php"
    "python"
    "ruby"
    "cpp"
    "csharp"
    # https://repo1.maven.org/maven2/io/grpc/protoc-gen-grpc-java/
    "java" 
    # "objective_c"
)

for l in "${languages[@]}"
do
    generate_grpc_by_lang $l
done

generate_grpc_web

echo 'format rust code'
cargo fmt

# ----------------------------------------------------------

echo 'done.'
exit 0
