// @generated automatically by Diesel CLI.

diesel::table! {
    cart_address (id) {
        id -> Int4,
        customer_id -> Int4,
        first_name -> Varchar,
        last_name -> Varchar,
        company -> Varchar,
        line_1 -> Varchar,
        line_2 -> Varchar,
        city -> Varchar,
        postcode -> Varchar,
        country_id -> Int4,
        zone_id -> Int4,
        extra -> Text,
        is_default -> Bool,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_address_format (id) {
        id -> Int4,
        name -> Varchar,
        template -> Text,
        status -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_affiliate (id) {
        id -> Int4,
        customer_id -> Int4,
        company -> Varchar,
        tracking -> Varchar,
        commission -> Int4,
        tax -> Varchar,
        payment -> Varchar,
        cheque -> Varchar,
        paypal -> Varchar,
        bank_name -> Varchar,
        bank_branch_number -> Varchar,
        bank_swift_code -> Varchar,
        bank_account_name -> Varchar,
        bank_account_number -> Varchar,
        extra -> Bytea,
        status -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_attribute (id) {
        id -> Int4,
        lang -> Varchar,
        code -> Varchar,
        name -> Varchar,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_attribute_group (id) {
        id -> Int4,
        lang -> Varchar,
        code -> Varchar,
        name -> Varchar,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_banner (id) {
        id -> Int4,
        lang -> Varchar,
        code -> Varchar,
        name -> Varchar,
        link -> Varchar,
        image -> Varchar,
        sort_order -> Int4,
        status -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_category (id) {
        id -> Int4,
        lang -> Varchar,
        parent_id -> Nullable<Int4>,
        code -> Varchar,
        name -> Varchar,
        depth -> Int4,
        image -> Varchar,
        desription -> Text,
        layout -> Int4,
        sort_order -> Int4,
        status -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_category_keyword (id) {
        id -> Int4,
        category_id -> Int4,
        keyword_id -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_country (id) {
        id -> Int4,
        name -> Varchar,
        iso_code_2 -> Bpchar,
        iso_code_3 -> Bpchar,
        address_format -> Int4,
        status -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_coupon (id) {
        id -> Int4,
        name -> Varchar,
        code -> Nullable<Varchar>,
        #[sql_name = "type"]
        type_ -> Int4,
        discount -> Int4,
        logged -> Bool,
        shipping -> Bool,
        total -> Int4,
        start_date -> Timestamp,
        end_date -> Timestamp,
        uses_totle -> Int4,
        uses_customer -> Int4,
        status -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_coupon_category (id) {
        id -> Int4,
        category_id -> Int4,
        coupon_id -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_coupon_history (id) {
        id -> Int4,
        coupon_id -> Int4,
        order_id -> Int4,
        customer_id -> Int4,
        amount -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_coupon_product (id) {
        id -> Int4,
        product_id -> Int4,
        coupon_id -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_currency (id) {
        id -> Int4,
        code -> Varchar,
        title -> Varchar,
        symbol_left -> Varchar,
        symbol_right -> Varchar,
        decimal_place -> Int4,
        status -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_customer_activity (id) {
        id -> Int4,
        customer -> Int4,
        #[sql_name = "type"]
        type_ -> Int4,
        message -> Text,
        ip -> Varchar,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_customer_groups (id) {
        id -> Int4,
        customer_id -> Int4,
        group_id -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_customer_history (id) {
        id -> Int4,
        customer_id -> Int4,
        message -> Text,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_customer_reward (id) {
        id -> Int4,
        customer_id -> Int4,
        order_id -> Int4,
        points -> Int4,
        description -> Text,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_customer_search (id) {
        id -> Int4,
        customer_id -> Nullable<Int4>,
        lang -> Varchar,
        keyword -> Varchar,
        ip -> Varchar,
        extra -> Bytea,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_customer_transaction (id) {
        id -> Int4,
        customer_id -> Int4,
        order_id -> Int4,
        amount -> Int4,
        description -> Text,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_customer_wishlist (id) {
        id -> Int4,
        customer_id -> Int4,
        product_id -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_group (id) {
        id -> Int4,
        lang -> Varchar,
        name -> Varchar,
        description -> Text,
        status -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_keyword (id) {
        id -> Int4,
        lang -> Varchar,
        name -> Varchar,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_order (id) {
        id -> Int4,
        sn -> Varchar,
        lang -> Varchar,
        customer_id -> Int4,
        customer_group -> Bytea,
        invoice_id -> Int4,
        transaction_id -> Int4,
        payment_id -> Int4,
        shipment_id -> Int4,
        affiliate -> Bytea,
        first_name -> Varchar,
        last_name -> Varchar,
        email -> Varchar,
        telphone -> Varchar,
        comment -> Text,
        extra -> Bytea,
        user_agent -> Nullable<Int4>,
        comission -> Int4,
        ip -> Varchar,
        status -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_order_history (id) {
        id -> Int4,
        order_id -> Int4,
        comment -> Text,
        status -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_order_payment (id) {
        id -> Int4,
        order_id -> Int4,
        address -> Bytea,
        address_format -> Text,
        method -> Int4,
        total -> Int4,
        currency -> Bytea,
        extra -> Bytea,
        status -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_order_product (id) {
        id -> Int4,
        order_id -> Int4,
        product_id -> Int4,
        product_snapshot -> Bytea,
        name -> Varchar,
        price -> Int4,
        quantity -> Int4,
        total -> Int4,
        tax -> Int4,
        reward -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_order_shipment (id) {
        id -> Int4,
        order_id -> Int4,
        address -> Bytea,
        address_format -> Text,
        method -> Int4,
        tracking_ -> Varchar,
        extra -> Bytea,
        status -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_order_voucher (id) {
        id -> Int4,
        order_id -> Int4,
        voucher_id -> Int4,
        voucher_body -> Text,
        description -> Text,
        code -> Varchar,
        from_name -> Varchar,
        from_email -> Varchar,
        to_name -> Varchar,
        to_email -> Varchar,
        message -> Text,
        amount -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_product (id) {
        id -> Int4,
        store_id -> Int4,
        model -> Varchar,
        sku -> Varchar,
        upc -> Varchar,
        ean -> Varchar,
        jan -> Varchar,
        isbn -> Varchar,
        mpn -> Varchar,
        location -> Varchar,
        variant -> Bytea,
        #[sql_name = "override"]
        override_ -> Bytea,
        quantity -> Int4,
        image -> Varchar,
        manufacturer_id -> Int4,
        shipping -> Bool,
        price -> Int4,
        points -> Int4,
        tax_rule_id -> Int4,
        available_at -> Timestamp,
        weight -> Int4,
        weight_unit -> Varchar,
        length -> Int4,
        length_unit -> Varchar,
        height -> Int4,
        height_unit -> Varchar,
        width -> Int4,
        width_unit -> Varchar,
        subtract -> Bool,
        minimum -> Int4,
        sort_order -> Int4,
        status -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_product_attribute (id) {
        id -> Int4,
        product_id -> Int4,
        lang -> Varchar,
        name -> Varchar,
        value -> Text,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_product_category (id) {
        id -> Int4,
        product_id -> Int4,
        category_id -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_product_description (id) {
        id -> Int4,
        product_id -> Int4,
        lang -> Varchar,
        title -> Varchar,
        body -> Text,
        body_editor -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_product_discount (id) {
        id -> Int4,
        product_id -> Int4,
        customer_group_id -> Int4,
        quantity -> Int4,
        priority -> Int4,
        price -> Int4,
        start_at -> Timestamp,
        end_at -> Timestamp,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_product_image (id) {
        id -> Int4,
        product_id -> Int4,
        title -> Varchar,
        url -> Varchar,
        sort_order -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_product_related (id) {
        id -> Int4,
        product_id -> Int4,
        related_id -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_product_reward (id) {
        id -> Int4,
        product_id -> Int4,
        customer_group_id -> Int4,
        points -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_product_special (id) {
        id -> Int4,
        product_id -> Int4,
        customer_group_id -> Int4,
        price -> Int4,
        start_at -> Timestamp,
        end_at -> Timestamp,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_product_viewed (id) {
        id -> Int4,
        product_id -> Int4,
        times -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_return (id) {
        id -> Int4,
        order_id -> Int4,
        product_id -> Int4,
        customer_id -> Int4,
        first_name -> Varchar,
        last_name -> Varchar,
        email -> Varchar,
        telphone -> Varchar,
        product -> Varchar,
        model -> Varchar,
        quantity -> Int4,
        opened -> Bool,
        reason -> Bytea,
        action -> Int4,
        status -> Int4,
        comment -> Text,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_return_history (id) {
        id -> Int4,
        return_id -> Int4,
        status -> Int4,
        notify -> Bool,
        comment -> Text,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_review (id) {
        id -> Int4,
        product_id -> Int4,
        customer_id -> Int4,
        author -> Varchar,
        comment -> Text,
        rating -> Int4,
        status -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_store (id) {
        id -> Int4,
        name -> Varchar,
        currency_id -> Int4,
        detail -> Text,
        detail_editor -> Int4,
        status -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_tax (id) {
        id -> Int4,
        name -> Varchar,
        title -> Varchar,
        rate -> Int4,
        description -> Varchar,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_tax_rule (id) {
        id -> Int4,
        name -> Varchar,
        title -> Varchar,
        formula -> Text,
        description -> Varchar,
        status -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_voucher (id) {
        id -> Int4,
        order_id -> Int4,
        code -> Varchar,
        from_name -> Varchar,
        from_email -> Varchar,
        to_name -> Varchar,
        to_email -> Varchar,
        message -> Text,
        amount -> Int4,
        status -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cart_voucher_history (id) {
        id -> Int4,
        voucher_id -> Int4,
        order_id -> Int4,
        amount -> Int4,
        created_at -> Timestamp,
    }
}

diesel::allow_tables_to_appear_in_same_query!(
    cart_address,
    cart_address_format,
    cart_affiliate,
    cart_attribute,
    cart_attribute_group,
    cart_banner,
    cart_category,
    cart_category_keyword,
    cart_country,
    cart_coupon,
    cart_coupon_category,
    cart_coupon_history,
    cart_coupon_product,
    cart_currency,
    cart_customer_activity,
    cart_customer_groups,
    cart_customer_history,
    cart_customer_reward,
    cart_customer_search,
    cart_customer_transaction,
    cart_customer_wishlist,
    cart_group,
    cart_keyword,
    cart_order,
    cart_order_history,
    cart_order_payment,
    cart_order_product,
    cart_order_shipment,
    cart_order_voucher,
    cart_product,
    cart_product_attribute,
    cart_product_category,
    cart_product_description,
    cart_product_discount,
    cart_product_image,
    cart_product_related,
    cart_product_reward,
    cart_product_special,
    cart_product_viewed,
    cart_return,
    cart_return_history,
    cart_review,
    cart_store,
    cart_tax,
    cart_tax_rule,
    cart_voucher,
    cart_voucher_history,
);
