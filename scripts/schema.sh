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
    local DATABASE_URL=postgres://postgres@127.0.0.1:5432/demo

    diesel print-schema -o schema_migrations > src/orm/schema.rs
    diesel print-schema -o settings > src/settings/schema.rs
    diesel print-schema -o locales > src/i18n/schema.rs
    # diesel print-schema -o users logs groups groups_users \
    #     roles role_relations roles_items operations resources policies \
    #     attachments attachment_usages friend_links leave_words \
    #     tags tags_resources categories categories_resources \
    #     contacts addresses \
    #     notifications rating_logs view_counters page_contents > src/plugins/nut/schema.rs
    
    # diesel print-schema -o forum_topics forum_posts > src/plugins/forum/schema.rs
    # diesel print-schema -o sms_logs > src/plugins/twilio/schema.rs
     
    # diesel print-schema -o erp_spec_groups erp_spec_params \
    # erp_brands erp_categories erp_categories_brands \
    # erp_spu erp_spu_brands erp_spu_categories erp_spu_params \
    # erp_sku erp_sku_params \
    # erp_prices erp_taxes \
    # erp_warehouses erp_warehouses_sku \
    # erp_levels erp_users_levels erp_vouchers \
    # erp_orders erp_delivery_logs erp_returning_logs \
    # erp_suppliers erp_purchase_logs erp_warehousing_logs \
    # erp_carts \
    # > src/plugins/mall/schema.rs
    
}

# ----------------------------------------------------------

generate_diesel_postgresql
generate_diesel_mysql "mysql://root:'gil@6ohngei5yei6Phoaph4egh8roh4pi'@127.0.0.1:3306"


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
