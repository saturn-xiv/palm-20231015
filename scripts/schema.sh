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

    diesel print-schema -o schema_migrations > src/orm/schema.rs
    diesel print-schema -o settings > src/settings/schema.rs
    diesel print-schema -o locales > src/i18n/schema.rs
    diesel print-schema -o users logs groups groups_users \
        roles role_relations roles_items operations resources policies \
        attachments attachment_usages friend_links leave_words \
        tags tags_resources categories categories_resources \
        contacts addresses \
        notifications rating_logs view_counters > src/plugins/nut/schema.rs
    
    diesel print-schema -o forum_topics forum_posts > src/plugins/forum/schema.rs
    diesel print-schema -o sms_logs > src/plugins/twilio/schema.rs
     
    diesel print-schema -o erp_spec_groups erp_spec_params \
    erp_brands erp_categories erp_categories_brands \
    erp_spu erp_spu_brands erp_spu_categories erp_spu_params \
    erp_sku erp_sku_params \
    erp_prices erp_taxes \
    erp_warehouses erp_warehouses_sku \
    erp_levels erp_users_levels erp_vouchers \
    erp_orders erp_delivery_logs erp_returning_logs \
    erp_suppliers erp_purchase_logs erp_warehousing_logs \
    > src/plugins/mall/schema.rs
    
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
# generate_grpc_web

generate_diesel_postgresql
cargo fmt

# ----------------------------------------------------------

echo 'done.'
exit 0
