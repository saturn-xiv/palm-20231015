#!/bin/bash

set -e

export WORKSPACE=$PWD
export PROTOBUF_ROOT=$HOME/.local

# ----------------------------------------------------------

function generate_flatbuffers(){
    flatc --rust -o $WORKSPACE/src/$2.rs $WORKSPACE/$1.fbs
}

function generate_diesel_postgresql() {
    echo "generate diesel schema for(postgresql)..."
    local DATABASE_URL=postgres://postgres@127.0.0.1:5432/demo
    local MIGRATION_DIRECTORY=db/postgresql/migrations

    diesel print-schema -o settings > src/settings/schema.rs
    diesel print-schema -o locales > src/i18n/schema.rs
    diesel print-schema -o users logs groups groups_users \
        roles roles_relations roles_users roles_groups operations resources policies \
        attachments tags notifications votes view_counters > src/plugins/nut/schema.rs
    
    diesel print-schema -o forum_topics forum_posts forum_topics_tags > src/plugins/forum/schema.rs
     
    diesel print-schema -o erp_brands erp_categories erp_spu erp_spu_parameters erp_categories_spu erp_sku erp_sku_pictures \
        erp_sku_parameters erp_warehouses erp_warehouses_parameters erp_stores erp_stores_parameters \
        erp_stocks erp_consignees erp_delivery_methods erp_payment_methods erp_orders erp_order_logs > src/plugins/mall/schema.rs
}

function generate_grpc() {
    echo "generate code for grpc-$1"
    if [ -d $WORKSPACE/protocols/$1 ]
    then
        rm -r $WORKSPACE/protocols/$1
    fi
    mkdir -p $WORKSPACE/protocols/$1
    $PROTOBUF_ROOT/bin/protoc -I $WORKSPACE/protos \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --${1}_out=$WORKSPACE/protocols/$1 --grpc_out=$WORKSPACE/protocols/$1 \
        --plugin=protoc-gen-grpc=$PROTOBUF_ROOT/bin/grpc_${1}_plugin \
        $WORKSPACE/protos/*.proto
}

function generate_grpc_web() {
    echo "generate code for grpc-web"
    local JS_OUT=$WORKSPACE/dashboard/src/protocols
    if [ -d $JS_OUT ]
    then
        rm -r $JS_OUT
    fi
    mkdir -p $JS_OUT
    $PROTOBUF_ROOT/bin/protoc -I $WORKSPACE/protos \
        -I $PROTOBUF_ROOT/include/google/protobuf \
        --js_out=import_style=commonjs:$JS_OUT \
        --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$JS_OUT \
        $WORKSPACE/protos/*.proto
}
# ----------------------------------------------------------

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

generate_diesel_postgresql
cargo fmt

# ----------------------------------------------------------

echo 'done.'
exit 0