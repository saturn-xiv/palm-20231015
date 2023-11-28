#!/bin/bash

set -e

export PROTOBUF_ROOT=$HOME/.local
export WORKSPACE=$PWD
export PALM_PROTOCOLS=$WORKSPACE/palm/protocols

# -----------------------------------------------------------------------------

function generate_grpc_by_lang() {
    local target=$WORKSPACE/sdk/$1
    echo "generate sdk for grpc-$1"
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
    local target=$WORKSPACE/sdk/php
    echo "generate sdk for grpc-php"
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
    local cpp_target=loquat/gourd/src
    if [ -d $cpp_target ]
    then
        rm -r $cpp_target
    fi
    mkdir -p $cpp_target
    thrift -out $cpp_target --gen cpp:no_skeleton -r $PALM_PROTOCOLS/loquat.thrift
}

# https://github.com/grpc/grpc-web#code-generator-plugin
function generate_typescript() {
    echo "generate typescript sdk($1)"    
    if [ -d $1 ]
    then
        rm -r $1
    fi
    mkdir -p $1
    
    $PROTOBUF_ROOT/bin/protoc -I $PALM_PROTOCOLS \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --js_out=import_style=commonjs,binary:$1 \
        --grpc-web_out=import_style=typescript,mode=grpcweb:$1 \
        $PALM_PROTOCOLS/*.proto
}


function generate_diesel_postgresql() {
    echo "generate diesel schema for postgresql"
    
    DATABASE_URL=$1 diesel print-schema \
        -o schema_migrations \
            casbin_rule locales settings \
            users user_contacts user_bans user_sessions logs \
            google_users \
            wechat_oauth2_users wechat_mini_program_users \
            attachments attachment_resources \
            roles roles_users roles_constraints permissions \
            leave_words shorter_links notifications twilio_sms_logs crawler_logs \
            tags tag_resources \
            categories category_resources \
            vote_items vote_logs \
            footprints feedbacks favorites issues comments search_histories \
            menus \
            excel_files excel_sheets excel_items \
        > nut/src/schema.rs    
    # FIXME
    # DATABASE_URL=$1 diesel print-schema -o cms_* > cms/src/schema.rs    
    # DATABASE_URL=$1 diesel print-schema -o bbs_* > forum/src/schema.rs
    # DATABASE_URL=$1 diesel print-schema -o cart_* > mall/src/schema.rs
    # DATABASE_URL=$1 diesel print-schema \
    #     -o flashcard_books flashcard_quizzes flashcard_scores \
    #     > flashcard/src/schema.rs
}

function generate_gardenia() {
    cd $WORKSPACE
    local target=gardenia/src/main/java
    
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
    local target=musa/src/main/java

    echo "generate loquat protocol for musa"
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


function generate_lemon() {
    cd $WORKSPACE
    local target=lemon/gourd/src

    echo "generate lemon"
    if [ -d $target ]
    then
        rm -r $target
    fi
    mkdir -p $target
    $PROTOBUF_ROOT/bin/protoc -I $PALM_PROTOCOLS \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --cpp_out=$target --grpc_out=$target \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_cpp_plugin \
        $PALM_PROTOCOLS/*.proto
}

function generate_morus() {
    echo "generate code for morus"
    local target=$WORKSPACE/morus/morus/src/protocols
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
    echo "generate code for lily"
    local target=$WORKSPACE/lily/lily/palm
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

function generate_babel() {
    local target=$WORKSPACE/babel/protocols
    if [ -d $target ]
    then
        rm -r $target
    fi
    mkdir -p $target

    declare -a plugins=(
        "rbac"
        "nut"
        "orchid"
        "babel"
    )

    for p in "${plugins[@]}"
    do
        $PROTOBUF_ROOT/bin/protoc -I $PALM_PROTOCOLS \
            -I $PROTOBUF_ROOT/include/google/protobuf \
            --cpp_out=$target --grpc_out=$target \
            --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_cpp_plugin \
            $PALM_PROTOCOLS/$p.proto        
    done
}
# -----------------------------------------------------------------------------

generate_diesel_postgresql "postgres://www:change-me@127.0.0.1:5432/demo"
DATABASE_URL=tmp/db diesel print-schema > ops/router/src/schema.rs

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

for l in "${languages[@]}"
do
    generate_grpc_by_lang $l
done

generate_grpc_for_php
generate_typescript $WORKSPACE/sdk/typescript

generate_typescript $WORKSPACE/dashboard/src/protocols
generate_loquat
generate_musa
generate_gardenia
generate_babel
generate_lemon
generate_morus
generate_lily

echo 'format rust code'
cargo fmt

# ----------------------------------------------------------

echo 'done.'
exit 0
