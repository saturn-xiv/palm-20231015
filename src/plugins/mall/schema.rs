table! {
    erp_brands (id) {
        id -> Int4,
        code -> Varchar,
        title -> Varchar,
        body -> Text,
        body_editor -> Varchar,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_carts (id) {
        id -> Int4,
        user_id -> Nullable<Int4>,
        code -> Varchar,
        items -> Bytea,
        prices -> Bytea,
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
        sort -> Int4,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_categories_spu (id) {
        id -> Int4,
        category_id -> Int4,
        spu_id -> Int4,
        created_at -> Timestamp,
    }
}

table! {
    erp_consignees (id) {
        id -> Int4,
        username -> Varchar,
        company -> Nullable<Varchar>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_contacts (id) {
        id -> Int4,
        resource_type -> Varchar,
        resource_id -> Int4,
        code -> Varchar,
        name -> Varchar,
        value -> Text,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_delivery_methods (id) {
        id -> Int4,
        code -> Varchar,
        name -> Varchar,
        logo -> Nullable<Varchar>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_order_logs (id) {
        id -> Int4,
        operator_id -> Int4,
        order_id -> Int4,
        #[sql_name = "type"]
        type_ -> Varchar,
        message -> Text,
        created_at -> Timestamp,
    }
}

table! {
    erp_orders (id) {
        id -> Int4,
        user_id -> Int4,
        code -> Varchar,
        consignee -> Bytea,
        items -> Bytea,
        deliverer -> Bytea,
        payment -> Bytea,
        prices -> Bytea,
        status -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_parameters (id) {
        id -> Int4,
        resource_type -> Varchar,
        resource_id -> Int4,
        code -> Varchar,
        name -> Varchar,
        value -> Text,
        sort -> Int4,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_payment_methods (id) {
        id -> Int4,
        code -> Varchar,
        name -> Varchar,
        logo -> Nullable<Varchar>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_prices (id) {
        id -> Int4,
        resource_type -> Varchar,
        resource_id -> Int4,
        code -> Varchar,
        name -> Varchar,
        currency -> Varchar,
        value -> Numeric,
        sort -> Int4,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_sku (id) {
        id -> Int4,
        spu_id -> Int4,
        code -> Varchar,
        title -> Varchar,
        body -> Text,
        body_editor -> Varchar,
        status -> Varchar,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_spu (id) {
        id -> Int4,
        brand_id -> Int4,
        code -> Varchar,
        title -> Varchar,
        body -> Text,
        body_editor -> Varchar,
        status -> Varchar,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_stocks (id) {
        id -> Int4,
        sku_id -> Int4,
        warehouse_id -> Int4,
        store_id -> Int4,
        amount -> Int4,
        unit -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_stores (id) {
        id -> Int4,
        code -> Varchar,
        name -> Varchar,
        deleted_at -> Nullable<Timestamp>,
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
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

allow_tables_to_appear_in_same_query!(
    erp_brands,
    erp_carts,
    erp_categories,
    erp_categories_spu,
    erp_consignees,
    erp_contacts,
    erp_delivery_methods,
    erp_order_logs,
    erp_orders,
    erp_parameters,
    erp_payment_methods,
    erp_prices,
    erp_sku,
    erp_spu,
    erp_stocks,
    erp_stores,
    erp_warehouses,
);
