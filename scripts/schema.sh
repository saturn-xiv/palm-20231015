#!/bin/bash

set -e

export PROTOBUF_ROOT=$HOME/.local
export WORKSPACE=$PWD
export PALM_PROTOCOLS=$WORKSPACE/protocols

# -----------------------------------------------------------------------------

function generate_grpc_by_lang() {
    local target=$WORKSPACE/sdk/$1
    echo "generate sdk for grpc-$1"
    if [ -d $target ]; then
        rm -r $target
    fi
    mkdir -p $target
    $PROTOBUF_ROOT/bin/protoc -I $PALM_PROTOCOLS \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --${1}_out=$target --grpc_out=$target \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_${1}_plugin \
        $PALM_PROTOCOLS/*.proto
}

function generate_grpc_for_php() {
    local target=$WORKSPACE/sdk/php
    echo "generate sdk for grpc-php"
    if [ -d $target ]; then
        rm -r $target
    fi
    mkdir -p $target
    $PROTOBUF_ROOT/bin/protoc -I $PALM_PROTOCOLS \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --php_out=$target --grpc_out=generate_server:$target \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_php_plugin \
        $PALM_PROTOCOLS/*.proto
}

# https://github.com/grpc/grpc-web#code-generator-plugin
function generate_typescript() {
    echo "generate typescript sdk($1)"
    if [ -d $1 ]; then
        rm -r $1
    fi
    mkdir -p $1

    $PROTOBUF_ROOT/bin/protoc -I $PALM_PROTOCOLS \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --js_out=import_style=commonjs,binary:$1 \
        --grpc-web_out=import_style=typescript,mode=grpcweb:$1 \
        $PALM_PROTOCOLS/*.proto
}

function generate_morus() {
    echo "generate code for morus"
    local target=$WORKSPACE/morus/src/protocols
    if [ -d $target ]; then
        rm -r $target
    fi
    mkdir -p $target
    grpc_tools_node_protoc -I $PALM_PROTOCOLS \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --js_out=import_style=commonjs,binary:$target \
        --grpc_out=grpc_js:$target $PALM_PROTOCOLS/morus.proto
}

function generate_gardenia() {
    cd $WORKSPACE
    local target=gardenia/src/main/java

    echo "generate gRPC for gardenia"
    local gardenia_target=$target/com/github/saturn_xiv/palm/plugins/gardenia/v1
    if [ -d $gardenia_target ]; then
        rm -r $gardenia_target
    fi
    $PROTOBUF_ROOT/bin/protoc -I $PALM_PROTOCOLS \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --java_out=$target --grpc_out=$target \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_java_plugin \
        $PALM_PROTOCOLS/gardenia.proto

}

function generate_lily() {
    echo "generate code for lily"
    local target=$WORKSPACE/lily/palm
    local -a files=(
        "lily_pb2.py"
        "lily_pb2_grpc.py"
    )

    for f in "${files[@]}"; do
        if [ -f $target/$f ]; then
            rm $target/$f
        fi
    done

    $PROTOBUF_ROOT/bin/protoc -I $PALM_PROTOCOLS \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --python_out=$target --grpc_out=$target \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_python_plugin \
        $PALM_PROTOCOLS/lily.proto
    sed -i 's/import lily_/from . import lily_/g' $target/lily_pb2_grpc.py
}

function generate_musa() {
    cd $WORKSPACE
    local target=musa/src/main/java

    echo "generate code for musa"
    local musa_target=$target/com/github/saturn_xiv/palm/plugins/musa/v1
    if [ -d $musa_target ]; then
        rm -r $musa_target
    fi
    $PROTOBUF_ROOT/bin/protoc -I $PALM_PROTOCOLS \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --java_out=$target --grpc_out=$target \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_java_plugin \
        $PALM_PROTOCOLS/musa.proto

}

function generate_grpc_for_go() {
    if [ -d $2 ]; then
        rm -r $2
    fi
    mkdir -p $2
    protoc -I $PALM_PROTOCOLS -I $PROTOBUF_ROOT/include/google/protobuf \
        --go_out=$2 --go_opt=paths=source_relative \
        --go-grpc_out=$2 --go-grpc_opt=paths=source_relative \
        $PALM_PROTOCOLS/$1.proto
}

function generate_fig() {
    echo "generate code for fig"
    local target=$WORKSPACE/fig
    local -a plugins=(
        "metasequoia"
        "orchid"
        "lemon"
        "musa"
        "morus"
        "lily"
        "gardenia"
        "cms"
        "forum"
        "babel"
        "cbeta"
        "cscd"
    )
    for p in "${plugins[@]}"; do
        generate_grpc_for_go $p $target/$p/v2
    done

    local -a ops_plugins=(
        "ddns"
        "mail"
        "metrics"
        "vpn"
    )

    for p in "${ops_plugins[@]}"; do
        generate_grpc_for_go ops-$p $target/ops/$p/v2
    done
}

# -----------------------------------------------------------------------------

declare -a languages=(
    # "node"
    "python"
    "ruby"
    "cpp"
    "csharp"
    # https://repo1.maven.org/maven2/io/grpc/protoc-gen-grpc-java/
    "java"
    # "objective_c"
)

function generate_aloe() {
    echo "generate code for aloe"
    generate_grpc_for_go ops-router $WORKSPACE/aloe/ops/router/v2
}

# ----------------------------------------------------------

for l in "${languages[@]}"; do
    generate_grpc_by_lang $l
done

generate_grpc_for_php
generate_typescript $WORKSPACE/sdk/typescript

# generate_typescript $WORKSPACE/dashboard/src/protocols
generate_musa
generate_morus
generate_lily
generate_gardenia
generate_fig
generate_aloe

# ----------------------------------------------------------

echo 'done.'
exit 0
