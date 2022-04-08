#!/bin/bash

set -e

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
        notifications rating_logs view_counters page_contents > src/plugins/nut/schema.rs
    
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
    erp_carts \
    > src/plugins/mall/schema.rs
    
}

# ----------------------------------------------------------

generate_diesel_postgresql
cargo fmt

# ----------------------------------------------------------

echo 'done.'
exit 0
