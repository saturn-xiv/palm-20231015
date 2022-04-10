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
        cms_contentitem_tag_map cms_fields_values \
        cms_finder_terms_common cms_finder_tokens cms_finder_tokens_aggregate \
        cms_messages_cfg cms_user_profiles \
        cms_content_types \
        > src/plugins/cms/schema.rs

    DATABASE_URL=$1/forum diesel print-schema -e \
        forum_online forum_search_matches \
        forum_forums forum_topics \
        > src/plugins/forum/schema.rs

    DATABASE_URL=$1/mall diesel print-schema -e \
        mall_googleshopping_product mall_googleshopping_target mall_recurring \
        > src/plugins/mall/schema.rs
}

function generate_diesel_postgresql() {
    echo "generate diesel schema for postgresql"
    local DATABASE_URL=postgres://postgres@127.0.0.1:5432/palm
    
    # diesel print-schema -o schema_migrations > src/orm/postgresql/schema.rs
    diesel print-schema -o settings > src/settings/schema.rs
    diesel print-schema -o locales > src/i18n/schema.rs
    diesel print-schema -o users logs policies \
        attachments > src/plugins/nut/schema.rs
    diesel print-schema -o sms_logs > src/plugins/twilio/schema.rs
}

# ----------------------------------------------------------

generate_diesel_postgresql
generate_diesel_mysql "mysql://root:apee1uo1Eique8A.e@127.0.0.1:3306"


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
