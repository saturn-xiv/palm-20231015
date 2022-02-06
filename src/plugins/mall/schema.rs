table! {
    erp_brands (id) {
        id -> Int4,
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
        id -> Int4,
        code -> Varchar,
        sku_id -> Int4,
        count -> Int4,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_categories (id) {
        id -> Int4,
        code -> Varchar,
        name -> Varchar,
        parent_id -> Nullable<Int4>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_categories_brands (id) {
        id -> Int4,
        category_id -> Int4,
        brand_id -> Int4,
        created_at -> Timestamp,
    }
}

table! {
    erp_delivery_logs (id) {
        id -> Int4,
        code -> Varchar,
        order_id -> Int4,
        deliverer_id -> Int4,
        warehouse_id -> Int4,
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
        id -> Int4,
        code -> Varchar,
        name -> Varchar,
        discount -> Numeric,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_orders (id) {
        id -> Int4,
        code -> Varchar,
        customer_id -> Int4,
        sales_id -> Nullable<Int4>,
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
        id -> Int4,
        sku_id -> Int4,
        code -> Varchar,
        name -> Varchar,
        currency -> Varchar,
        value -> Numeric,
        tax_id -> Int4,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_purchase_logs (id) {
        id -> Int4,
        buyer_id -> Int4,
        supplier_id -> Int4,
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
        id -> Int4,
        code -> Varchar,
        order_id -> Int4,
        consumer_id -> Int4,
        qa_id -> Int4,
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
        id -> Int4,
        spu_id -> Int4,
        name -> Varchar,
        status -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_sku_params (id) {
        id -> Int4,
        sku_id -> Int4,
        param_id -> Int4,
        value -> Bytea,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_spec_groups (id) {
        id -> Int4,
        code -> Varchar,
        name -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_spec_params (id) {
        id -> Int4,
        spec_group_id -> Int4,
        code -> Varchar,
        name -> Varchar,
        unit -> Nullable<Varchar>,
        #[sql_name = "type"]
        type_ -> Varchar,
        segements -> Nullable<Text>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_spu (id) {
        id -> Int4,
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
        id -> Int4,
        spu_id -> Int4,
        brand_id -> Int4,
        created_at -> Timestamp,
    }
}

table! {
    erp_spu_categories (id) {
        id -> Int4,
        spu_id -> Int4,
        category_id -> Int4,
        created_at -> Timestamp,
    }
}

table! {
    erp_spu_params (id) {
        id -> Int4,
        spu_id -> Int4,
        param_id -> Int4,
        value -> Bytea,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_suppliers (id) {
        id -> Int4,
        code -> Varchar,
        name -> Varchar,
        payment -> Bytea,
        state -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_taxes (id) {
        id -> Int4,
        code -> Varchar,
        name -> Varchar,
        value -> Numeric,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_users_levels (id) {
        id -> Int4,
        user_id -> Int4,
        level_id -> Int4,
        created_at -> Timestamp,
    }
}

table! {
    erp_vouchers (id) {
        id -> Int4,
        operator_id -> Int4,
        customer_id -> Int4,
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
        id -> Int4,
        code -> Varchar,
        name -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_warehouses_sku (id) {
        id -> Int4,
        warehouse_id -> Int4,
        sku_id -> Int4,
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
        id -> Int4,
        storekeeper_id -> Int4,
        purchase_log_id -> Int4,
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
