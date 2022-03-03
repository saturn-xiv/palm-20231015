table! {
    erp_brands (id) {
        id -> Uuid,
        code -> Varchar,
        name -> Varchar,
        home -> Nullable<Varchar>,
        logo -> Nullable<Varchar>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_carts (id) {
        id -> Uuid,
        code -> Varchar,
        sku_id -> Uuid,
        count -> Int4,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_categories (id) {
        id -> Uuid,
        code -> Varchar,
        parent_id -> Nullable<Uuid>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_categories_brands (id) {
        id -> Uuid,
        category_id -> Uuid,
        brand_id -> Uuid,
        created_at -> Timestamp,
    }
}

table! {
    erp_delivery_logs (id) {
        id -> Uuid,
        code -> Varchar,
        order_id -> Uuid,
        deliverer_id -> Uuid,
        warehouse_id -> Uuid,
        by -> Varchar,
        payload -> Bytea,
        state -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_levels (id) {
        id -> Uuid,
        code -> Varchar,
        discount -> Numeric,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_orders (id) {
        id -> Uuid,
        code -> Varchar,
        customer_id -> Uuid,
        sales_id -> Nullable<Uuid>,
        payment -> Bytea,
        delivery -> Bytea,
        payload -> Bytea,
        state -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_prices (id) {
        id -> Uuid,
        sku_id -> Uuid,
        code -> Varchar,
        currency -> Varchar,
        value -> Numeric,
        tax_id -> Uuid,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_purchase_logs (id) {
        id -> Uuid,
        buyer_id -> Uuid,
        supplier_id -> Uuid,
        payment -> Bytea,
        payload -> Bytea,
        state -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_returning_logs (id) {
        id -> Uuid,
        code -> Varchar,
        order_id -> Uuid,
        consumer_id -> Uuid,
        qa_id -> Uuid,
        reason -> Text,
        reason_editor -> Varchar,
        payment -> Bytea,
        delivery -> Bytea,
        payload -> Bytea,
        state -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_sku (id) {
        id -> Uuid,
        spu_id -> Uuid,
        status -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_sku_params (id) {
        id -> Uuid,
        sku_id -> Uuid,
        param_id -> Uuid,
        value -> Bytea,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_spec_groups (id) {
        id -> Uuid,
        code -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_spec_params (id) {
        id -> Uuid,
        spec_group_id -> Uuid,
        code -> Varchar,
        unit -> Nullable<Varchar>,
        #[sql_name = "type"]
        type_ -> Varchar,
        segements -> Nullable<Bytea>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_spu (id) {
        id -> Uuid,
        code -> Varchar,
        title -> Varchar,
        subhead -> Nullable<Varchar>,
        body -> Text,
        body_editor -> Varchar,
        status -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_spu_brands (id) {
        id -> Uuid,
        spu_id -> Uuid,
        brand_id -> Uuid,
        created_at -> Timestamp,
    }
}

table! {
    erp_spu_categories (id) {
        id -> Uuid,
        spu_id -> Uuid,
        category_id -> Uuid,
        created_at -> Timestamp,
    }
}

table! {
    erp_spu_params (id) {
        id -> Uuid,
        spu_id -> Uuid,
        param_id -> Uuid,
        value -> Bytea,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_suppliers (id) {
        id -> Uuid,
        code -> Varchar,
        payment -> Bytea,
        state -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_taxes (id) {
        id -> Uuid,
        code -> Varchar,
        value -> Numeric,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_users_levels (id) {
        id -> Uuid,
        user_id -> Uuid,
        level_id -> Uuid,
        created_at -> Timestamp,
    }
}

table! {
    erp_vouchers (id) {
        id -> Uuid,
        operator_id -> Uuid,
        customer_id -> Uuid,
        code -> Varchar,
        deno -> Numeric,
        condition -> Numeric,
        not_before -> Date,
        expired_at -> Date,
        consumed_at -> Nullable<Timestamp>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_warehouses (id) {
        id -> Uuid,
        code -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_warehouses_sku (id) {
        id -> Uuid,
        warehouse_id -> Uuid,
        sku_id -> Uuid,
        amount -> Int4,
        unit -> Varchar,
        x -> Int4,
        y -> Int4,
        z -> Int4,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_warehousing_logs (id) {
        id -> Uuid,
        storekeeper_id -> Uuid,
        purchase_log_id -> Uuid,
        payload -> Bytea,
        state -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

allow_tables_to_appear_in_same_query!(
    erp_brands,
    erp_carts,
    erp_categories,
    erp_categories_brands,
    erp_delivery_logs,
    erp_levels,
    erp_orders,
    erp_prices,
    erp_purchase_logs,
    erp_returning_logs,
    erp_sku,
    erp_sku_params,
    erp_spec_groups,
    erp_spec_params,
    erp_spu,
    erp_spu_brands,
    erp_spu_categories,
    erp_spu_params,
    erp_suppliers,
    erp_taxes,
    erp_users_levels,
    erp_vouchers,
    erp_warehouses,
    erp_warehouses_sku,
    erp_warehousing_logs,
);
