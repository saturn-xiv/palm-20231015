table! {
    erp_brands (id) {
        id -> Int4,
        code -> Varchar,
        title -> Varchar,
        body -> Json,
        pictures -> Json,
        deleted_at -> Nullable<Timestamp>,
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
        has_nodes -> Bool,
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
        user_id -> Int4,
        username -> Varchar,
        phone -> Varchar,
        address -> Nullable<Varchar>,
        sort -> Int4,
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
        contact -> Json,
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
        consignee -> Json,
        items -> Json,
        deliverer -> Json,
        payment -> Json,
        prices -> Json,
        status -> Varchar,
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
        contact -> Json,
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
        body -> Json,
        price -> Json,
        status -> Varchar,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_sku_parameters (id) {
        id -> Int4,
        sku_id -> Int4,
        code -> Varchar,
        name -> Varchar,
        value -> Json,
        sort -> Int4,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_sku_pictures (id) {
        id -> Int4,
        sku_id -> Int4,
        title -> Varchar,
        summary -> Nullable<Text>,
        url -> Varchar,
        sort -> Int4,
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
        body -> Json,
        status -> Varchar,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_spu_parameters (id) {
        id -> Int4,
        spu_id -> Int4,
        code -> Varchar,
        name -> Varchar,
        value -> Json,
        sort -> Int4,
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
        address -> Nullable<Varchar>,
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
        address -> Varchar,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_stores_parameters (id) {
        id -> Int4,
        store_id -> Int4,
        code -> Varchar,
        name -> Varchar,
        value -> Json,
        sort -> Int4,
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
        address -> Varchar,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    erp_warehouses_parameters (id) {
        id -> Int4,
        warehouse_id -> Int4,
        code -> Varchar,
        name -> Varchar,
        value -> Json,
        sort -> Int4,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

allow_tables_to_appear_in_same_query!(
    erp_brands,
    erp_categories,
    erp_categories_spu,
    erp_consignees,
    erp_delivery_methods,
    erp_order_logs,
    erp_orders,
    erp_payment_methods,
    erp_sku,
    erp_sku_parameters,
    erp_sku_pictures,
    erp_spu,
    erp_spu_parameters,
    erp_stocks,
    erp_stores,
    erp_stores_parameters,
    erp_warehouses,
    erp_warehouses_parameters,
);
