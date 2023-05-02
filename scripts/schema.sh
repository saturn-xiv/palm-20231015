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
    $PROTOBUF_ROOT/bin/protoc -I $WORKSPACE/protocols \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --${1}_out=$target --grpc_out=$target \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_${1}_plugin \
        $WORKSPACE/protocols/*.proto
}

function generate_flatbuffers() {
    echo "generate flatbuffers"
    flatc --rust --filename-suffix "" -o $WORKSPACE/$2 $WORKSPACE/$1.fbs
    flatc --rust --filename-suffix "" -o $WORKSPACE/$2 $WORKSPACE/$1.fbs
}

function generate_loquat() {
    cd $WORKSPACE
        
    echo 'generate code for loquat-cpp'
    local cpp_target=loquat/gourd/src
    if [ -d $cpp_target ]
    then
        rm -r $cpp_target
    fi
    mkdir -p $cpp_target
    thrift -out $cpp_target --gen cpp -r protocols/loquat.thrift

    echo 'generate code for loquat-java'
    thrift -out tmp/protocols/java --gen java -r protocols/loquat.thrift    
}

# https://github.com/grpc/grpc-web#code-generator-plugin
function generate_web() {
    echo "generate code for $1@grpc-web"
    local target=$WORKSPACE/$1/dashboard/src/protocols
    if [ -d $target ]
    then
        rm -r $target
    fi
    mkdir -p $target
    
    $PROTOBUF_ROOT/bin/protoc -I $WORKSPACE/protocols \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --js_out=import_style=commonjs,binary:$target \
        --grpc-web_out=import_style=typescript,mode=grpcweb:$target \
        $WORKSPACE/protocols/*.proto
}

function copy_musa() {
    cd $WORKSPACE


    local -a plugins=(
        "loquat"
        "musa"
    )
    for p in "${plugins[@]}"
    do
        local package=com/github/saturn_xiv/palm/plugins/$p/v1
        local target=musa/src/main/java/$package
        if [ -d $target ]
        then
            rm -r $target
        fi
        cp -r tmp/protocols/java/$package $target        
    done
}


# -----------------------------------------------------------------------------

declare -a languages=(
    # "node"
    # "php"
    # "python"
    # "ruby"
    "cpp"
    # "csharp"
    # https://repo1.maven.org/maven2/io/grpc/protoc-gen-grpc-java/
    # "java" 
    # "objective_c"
)

for l in "${languages[@]}"
do
    generate_grpc_by_lang $l
done

# generate_web fig
# generate_web aloe
# generate_loquat
# copy_musa

# ----------------------------------------------------------

echo 'done.'
exit 0
