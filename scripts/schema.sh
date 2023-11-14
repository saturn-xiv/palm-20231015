#!/bin/bash

set -e

export PROTOBUF_ROOT=$HOME/.local
export WORKSPACE=$PWD
export PALM_PROTOCOLS=$WORKSPACE/palm/palm/protocols

# -----------------------------------------------------------------------------

function generate_grpc_by_lang() {
    cd $WORKSPACE
    echo "generate code for grpc-$1"
    local target=sdk/$1
    if [ -d $target ]
    then
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
    cd $WORKSPACE

    echo "generate code for grpc-php"
    local target=sdk/php
    if [ -d $target ]
    then
        rm -r $target
    fi
    mkdir -p $target
    $PROTOBUF_ROOT/bin/protoc -I $PALM_PROTOCOLS \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --php_out=$target --grpc_out=generate_server:$target \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_php_plugin \
        $PALM_PROTOCOLS/*.proto
}


function generate_loquat() {    
    cd $WORKSPACE

    echo 'generate code for loquat'
    local target=loquat/loquat/gourd/src
    if [ -d $target ]
    then
        rm -r $target
    fi
    mkdir -p $target
    thrift -out $target --gen cpp:no_skeleton -r $PALM_PROTOCOLS/loquat.thrift
}


# https://github.com/grpc/grpc-web#code-generator-plugin
function generate_palm() {
    cd $WORKSPACE

    echo "generate code for palm/dashboard"
    local dashboard_target=palm/palm/dashboard/src/protocols
    if [ -d $dashboard_target ]
    then
        rm -r $dashboard_target
    fi
    mkdir -p $dashboard_target
    
    $PROTOBUF_ROOT/bin/protoc -I $PALM_PROTOCOLS \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --js_out=import_style=commonjs,binary:$dashboard_target \
        --grpc-web_out=import_style=typescript,mode=grpcweb:$tardashboard_target \
        $PALM_PROTOCOLS/*.proto

    echo 'generate code for palm/gourd'
    local gourd_target=palm/palm/gourd/src
    if [ -d $gourd_target ]
    then
        rm -r $gourd_target
    fi
    mkdir -p $gourd_target
    thrift -out $gourd_target --gen cpp:no_skeleton -r $PALM_PROTOCOLS/*.thrift
    $PROTOBUF_ROOT/bin/protoc -I $PALM_PROTOCOLS \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --cpp_out=$gourd_target --grpc_out=$gourd_target \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_cpp_plugin \
        $PALM_PROTOCOLS/*.proto
}

function generate_gardenia() {
    cd $WORKSPACE
    local target=gardenia/gardenia/src/main/java
    
    echo "generate gRPC for gardenia"
    local gardenia_target=$target/com/github/saturn_xiv/palm/plugins/gardenia/v1
    if [ -d $gardenia_target ]
    then
        rm -r $gardenia_target
    fi
    $PROTOBUF_ROOT/bin/protoc -I $PALM_PROTOCOLS \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --java_out=$target --grpc_out=$target \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_java_plugin \
        $PALM_PROTOCOLS/gardenia.proto

}

function generate_musa() {
    cd $WORKSPACE

    echo "generate loquat protocol for musa"
    local target=musa/musa/src/main/java
    local loquat_target=$target/com/github/saturn_xiv/palm/plugins/loquat/v1
    if [ -d $loquat_target ]
    then
        rm -r $loquat_target
    fi
    thrift -out $target --gen java -r $PALM_PROTOCOLS/loquat.thrift

    echo "generate musa"
    local musa_target=$target/com/github/saturn_xiv/palm/plugins/musa/v1
    if [ -d $musa_target ]
    then
        rm -r $musa_target
    fi
    $PROTOBUF_ROOT/bin/protoc -I $PALM_PROTOCOLS \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --java_out=$target --grpc_out=$target \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_java_plugin \
        $PALM_PROTOCOLS/musa.proto

}

function generate_morus() {
    cd $WORKSPACE

    echo "generate code for morus"
    local target=morus/morus/src/protocols
    if [ -d $target ]
    then
        rm -r $target
    fi
    mkdir -p $target
    grpc_tools_node_protoc -I $PALM_PROTOCOLS \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --js_out=import_style=commonjs,binary:$target \
        --grpc_out=grpc_js:$target $PALM_PROTOCOLS/morus.proto
}

function generate_lily() {
    cd $WORKSPACE

    echo "generate code for lily"
    local target=lily/lily/palm
    local -a files=(
        "lily_pb2.py"
        "lily_pb2_grpc.py"
    )

    for f in "${files[@]}"
    do
        if [ -f $target/$f ]
        then
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

# -----------------------------------------------------------------------------

for l in "${languages[@]}"
do
    generate_grpc_by_lang $l
done

generate_grpc_for_php

generate_palm
generate_loquat
generate_musa
generate_gardenia
generate_morus
generate_lily

echo 'format rust code'
cargo fmt

# ----------------------------------------------------------

echo 'done.'
exit 0
