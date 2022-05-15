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
        --grpc-web_out=import_style=commonjs,mode=grpcweb:$target \
        $WORKSPACE/protos/*.proto
}

function generate_diesel_mysql() {
    echo 'generate diesel schema for mysql'
    DATABASE_URL=$1/cms diesel print-schema -e \
        jm_contentitem_tag_map jm_fields_values \
        jm_finder_terms_common jm_finder_tokens jm_finder_tokens_aggregate \
        jm_messages_cfg jm_user_profiles \
        jm_content_types \
        > src/plugins/cms/schema.rs

    DATABASE_URL=$1/forum diesel print-schema -e \
        bb_online bb_search_matches \
        bb_forums bb_topics \
        > src/plugins/forum/schema.rs

    DATABASE_URL=$1/cart diesel print-schema -e \
        oc_googleshopping_product oc_googleshopping_target oc_recurring \
        > src/plugins/mall/schema.rs
}

function generate_diesel_postgresql() {
    echo "generate diesel schema for postgresql"
    
    DATABASE_URL=$1 diesel print-schema -o settings > src/settings/schema.rs
    DATABASE_URL=$1 diesel print-schema -o locales > src/i18n/schema.rs
    DATABASE_URL=$1 diesel print-schema -o users logs attachments \
        policies users_roles > src/plugins/nut/schema.rs
    DATABASE_URL=$1 diesel print-schema -o sms_logs > src/plugins/twilio/schema.rs
}

# ----------------------------------------------------------

generate_diesel_postgresql "postgres://postgres@127.0.0.1:5432/palm"
generate_diesel_mysql "mysql://www:apee1uo1Eique8A.e@127.0.0.1:3306"


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
    generate_grpc_by_lang $l
done

generate_grpc_web

echo 'format rust code'
cargo fmt

# ----------------------------------------------------------

echo 'done.'
exit 0
