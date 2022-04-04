table! {
    mall_address (address_id) {
        address_id -> Integer,
        customer_id -> Integer,
        firstname -> Varchar,
        lastname -> Varchar,
        company -> Varchar,
        address_1 -> Varchar,
        address_2 -> Varchar,
        city -> Varchar,
        postcode -> Varchar,
        country_id -> Integer,
        zone_id -> Integer,
        custom_field -> Text,
    }
}

table! {
    mall_api (api_id) {
        api_id -> Integer,
        username -> Varchar,
        key -> Text,
        status -> Bool,
        date_added -> Datetime,
        date_modified -> Datetime,
    }
}

table! {
    mall_api_ip (api_ip_id) {
        api_ip_id -> Integer,
        api_id -> Integer,
        ip -> Varchar,
    }
}

table! {
    mall_api_session (api_session_id) {
        api_session_id -> Integer,
        api_id -> Integer,
        session_id -> Varchar,
        ip -> Varchar,
        date_added -> Datetime,
        date_modified -> Datetime,
    }
}

table! {
    mall_attribute (attribute_id) {
        attribute_id -> Integer,
        attribute_group_id -> Integer,
        sort_order -> Integer,
    }
}

table! {
    mall_attribute_description (attribute_id, language_id) {
        attribute_id -> Integer,
        language_id -> Integer,
        name -> Varchar,
    }
}

table! {
    mall_attribute_group (attribute_group_id) {
        attribute_group_id -> Integer,
        sort_order -> Integer,
    }
}

table! {
    mall_attribute_group_description (attribute_group_id, language_id) {
        attribute_group_id -> Integer,
        language_id -> Integer,
        name -> Varchar,
    }
}

table! {
    mall_banner (banner_id) {
        banner_id -> Integer,
        name -> Varchar,
        status -> Bool,
    }
}

table! {
    mall_banner_image (banner_image_id) {
        banner_image_id -> Integer,
        banner_id -> Integer,
        language_id -> Integer,
        title -> Varchar,
        link -> Varchar,
        image -> Varchar,
        sort_order -> Integer,
    }
}

table! {
    mall_cart (cart_id) {
        cart_id -> Unsigned<Integer>,
        api_id -> Integer,
        customer_id -> Integer,
        session_id -> Varchar,
        product_id -> Integer,
        recurring_id -> Integer,
        option -> Text,
        quantity -> Integer,
        date_added -> Datetime,
    }
}

table! {
    mall_category (category_id) {
        category_id -> Integer,
        image -> Nullable<Varchar>,
        parent_id -> Integer,
        top -> Bool,
        column -> Integer,
        sort_order -> Integer,
        status -> Bool,
        date_added -> Datetime,
        date_modified -> Datetime,
    }
}

table! {
    mall_category_description (category_id, language_id) {
        category_id -> Integer,
        language_id -> Integer,
        name -> Varchar,
        description -> Text,
        meta_title -> Varchar,
        meta_description -> Varchar,
        meta_keyword -> Varchar,
    }
}

table! {
    mall_category_filter (category_id, filter_id) {
        category_id -> Integer,
        filter_id -> Integer,
    }
}

table! {
    mall_category_path (category_id, path_id) {
        category_id -> Integer,
        path_id -> Integer,
        level -> Integer,
    }
}

table! {
    mall_category_to_layout (category_id, store_id) {
        category_id -> Integer,
        store_id -> Integer,
        layout_id -> Integer,
    }
}

table! {
    mall_category_to_store (category_id, store_id) {
        category_id -> Integer,
        store_id -> Integer,
    }
}

table! {
    mall_country (country_id) {
        country_id -> Integer,
        name -> Varchar,
        iso_code_2 -> Varchar,
        iso_code_3 -> Varchar,
        address_format -> Text,
        postcode_required -> Bool,
        status -> Bool,
    }
}

table! {
    mall_coupon (coupon_id) {
        coupon_id -> Integer,
        name -> Varchar,
        code -> Varchar,
        #[sql_name = "type"]
        type_ -> Char,
        discount -> Decimal,
        logged -> Bool,
        shipping -> Bool,
        total -> Decimal,
        date_start -> Date,
        date_end -> Date,
        uses_total -> Integer,
        uses_customer -> Varchar,
        status -> Bool,
        date_added -> Datetime,
    }
}

table! {
    mall_coupon_category (coupon_id, category_id) {
        coupon_id -> Integer,
        category_id -> Integer,
    }
}

table! {
    mall_coupon_history (coupon_history_id) {
        coupon_history_id -> Integer,
        coupon_id -> Integer,
        order_id -> Integer,
        customer_id -> Integer,
        amount -> Decimal,
        date_added -> Datetime,
    }
}

table! {
    mall_coupon_product (coupon_product_id) {
        coupon_product_id -> Integer,
        coupon_id -> Integer,
        product_id -> Integer,
    }
}

table! {
    mall_currency (currency_id) {
        currency_id -> Integer,
        title -> Varchar,
        code -> Varchar,
        symbol_left -> Varchar,
        symbol_right -> Varchar,
        decimal_place -> Char,
        value -> Double,
        status -> Bool,
        date_modified -> Datetime,
    }
}

table! {
    mall_custom_field (custom_field_id) {
        custom_field_id -> Integer,
        #[sql_name = "type"]
        type_ -> Varchar,
        value -> Text,
        validation -> Varchar,
        location -> Varchar,
        status -> Bool,
        sort_order -> Integer,
    }
}

table! {
    mall_custom_field_customer_group (custom_field_id, customer_group_id) {
        custom_field_id -> Integer,
        customer_group_id -> Integer,
        required -> Bool,
    }
}

table! {
    mall_custom_field_description (custom_field_id, language_id) {
        custom_field_id -> Integer,
        language_id -> Integer,
        name -> Varchar,
    }
}

table! {
    mall_custom_field_value (custom_field_value_id) {
        custom_field_value_id -> Integer,
        custom_field_id -> Integer,
        sort_order -> Integer,
    }
}

table! {
    mall_custom_field_value_description (custom_field_value_id, language_id) {
        custom_field_value_id -> Integer,
        language_id -> Integer,
        custom_field_id -> Integer,
        name -> Varchar,
    }
}

table! {
    mall_customer (customer_id) {
        customer_id -> Integer,
        customer_group_id -> Integer,
        store_id -> Integer,
        language_id -> Integer,
        firstname -> Varchar,
        lastname -> Varchar,
        email -> Varchar,
        telephone -> Varchar,
        fax -> Varchar,
        password -> Varchar,
        salt -> Varchar,
        cart -> Nullable<Text>,
        wishlist -> Nullable<Text>,
        newsletter -> Bool,
        address_id -> Integer,
        custom_field -> Text,
        ip -> Varchar,
        status -> Bool,
        safe -> Bool,
        token -> Text,
        code -> Varchar,
        date_added -> Datetime,
    }
}

table! {
    mall_customer_activity (customer_activity_id) {
        customer_activity_id -> Integer,
        customer_id -> Integer,
        key -> Varchar,
        data -> Text,
        ip -> Varchar,
        date_added -> Datetime,
    }
}

table! {
    mall_customer_affiliate (customer_id) {
        customer_id -> Integer,
        company -> Varchar,
        website -> Varchar,
        tracking -> Varchar,
        commission -> Decimal,
        tax -> Varchar,
        payment -> Varchar,
        cheque -> Varchar,
        paypal -> Varchar,
        bank_name -> Varchar,
        bank_branch_number -> Varchar,
        bank_swift_code -> Varchar,
        bank_account_name -> Varchar,
        bank_account_number -> Varchar,
        custom_field -> Text,
        status -> Bool,
        date_added -> Datetime,
    }
}

table! {
    mall_customer_approval (customer_approval_id) {
        customer_approval_id -> Integer,
        customer_id -> Integer,
        #[sql_name = "type"]
        type_ -> Varchar,
        date_added -> Datetime,
    }
}

table! {
    mall_customer_group (customer_group_id) {
        customer_group_id -> Integer,
        approval -> Integer,
        sort_order -> Integer,
    }
}

table! {
    mall_customer_group_description (customer_group_id, language_id) {
        customer_group_id -> Integer,
        language_id -> Integer,
        name -> Varchar,
        description -> Text,
    }
}

table! {
    mall_customer_history (customer_history_id) {
        customer_history_id -> Integer,
        customer_id -> Integer,
        comment -> Text,
        date_added -> Datetime,
    }
}

table! {
    mall_customer_ip (customer_ip_id) {
        customer_ip_id -> Integer,
        customer_id -> Integer,
        ip -> Varchar,
        date_added -> Datetime,
    }
}

table! {
    mall_customer_login (customer_login_id) {
        customer_login_id -> Integer,
        email -> Varchar,
        ip -> Varchar,
        total -> Integer,
        date_added -> Datetime,
        date_modified -> Datetime,
    }
}

table! {
    mall_customer_online (ip) {
        ip -> Varchar,
        customer_id -> Integer,
        url -> Text,
        referer -> Text,
        date_added -> Datetime,
    }
}

table! {
    mall_customer_reward (customer_reward_id) {
        customer_reward_id -> Integer,
        customer_id -> Integer,
        order_id -> Integer,
        description -> Text,
        points -> Integer,
        date_added -> Datetime,
    }
}

table! {
    mall_customer_search (customer_search_id) {
        customer_search_id -> Integer,
        store_id -> Integer,
        language_id -> Integer,
        customer_id -> Integer,
        keyword -> Varchar,
        category_id -> Nullable<Integer>,
        sub_category -> Bool,
        description -> Bool,
        products -> Integer,
        ip -> Varchar,
        date_added -> Datetime,
    }
}

table! {
    mall_customer_transaction (customer_transaction_id) {
        customer_transaction_id -> Integer,
        customer_id -> Integer,
        order_id -> Integer,
        description -> Text,
        amount -> Decimal,
        date_added -> Datetime,
    }
}

table! {
    mall_customer_wishlist (customer_id, product_id) {
        customer_id -> Integer,
        product_id -> Integer,
        date_added -> Datetime,
    }
}

table! {
    mall_download (download_id) {
        download_id -> Integer,
        filename -> Varchar,
        mask -> Varchar,
        date_added -> Datetime,
    }
}

table! {
    mall_download_description (download_id, language_id) {
        download_id -> Integer,
        language_id -> Integer,
        name -> Varchar,
    }
}

table! {
    mall_event (event_id) {
        event_id -> Integer,
        code -> Varchar,
        trigger -> Text,
        action -> Text,
        status -> Bool,
        sort_order -> Integer,
    }
}

table! {
    mall_extension (extension_id) {
        extension_id -> Integer,
        #[sql_name = "type"]
        type_ -> Varchar,
        code -> Varchar,
    }
}

table! {
    mall_extension_install (extension_install_id) {
        extension_install_id -> Integer,
        extension_download_id -> Integer,
        filename -> Varchar,
        date_added -> Datetime,
    }
}

table! {
    mall_extension_path (extension_path_id) {
        extension_path_id -> Integer,
        extension_install_id -> Integer,
        path -> Varchar,
        date_added -> Datetime,
    }
}

table! {
    mall_filter (filter_id) {
        filter_id -> Integer,
        filter_group_id -> Integer,
        sort_order -> Integer,
    }
}

table! {
    mall_filter_description (filter_id, language_id) {
        filter_id -> Integer,
        language_id -> Integer,
        filter_group_id -> Integer,
        name -> Varchar,
    }
}

table! {
    mall_filter_group (filter_group_id) {
        filter_group_id -> Integer,
        sort_order -> Integer,
    }
}

table! {
    mall_filter_group_description (filter_group_id, language_id) {
        filter_group_id -> Integer,
        language_id -> Integer,
        name -> Varchar,
    }
}

table! {
    mall_geo_zone (geo_zone_id) {
        geo_zone_id -> Integer,
        name -> Varchar,
        description -> Varchar,
        date_added -> Datetime,
        date_modified -> Datetime,
    }
}

table! {
    mall_googleshopping_category (google_product_category, store_id) {
        google_product_category -> Varchar,
        store_id -> Integer,
        category_id -> Integer,
    }
}

table! {
    mall_googleshopping_product_status (product_id, store_id, product_variation_id) {
        product_id -> Integer,
        store_id -> Integer,
        product_variation_id -> Varchar,
        destination_statuses -> Text,
        data_quality_issues -> Text,
        item_level_issues -> Text,
        google_expiration_date -> Integer,
    }
}

table! {
    mall_googleshopping_product_target (product_id, advertise_google_target_id) {
        product_id -> Integer,
        store_id -> Integer,
        advertise_google_target_id -> Unsigned<Integer>,
    }
}

table! {
    mall_information (information_id) {
        information_id -> Integer,
        bottom -> Integer,
        sort_order -> Integer,
        status -> Bool,
    }
}

table! {
    mall_information_description (information_id, language_id) {
        information_id -> Integer,
        language_id -> Integer,
        title -> Varchar,
        description -> Mediumtext,
        meta_title -> Varchar,
        meta_description -> Varchar,
        meta_keyword -> Varchar,
    }
}

table! {
    mall_information_to_layout (information_id, store_id) {
        information_id -> Integer,
        store_id -> Integer,
        layout_id -> Integer,
    }
}

table! {
    mall_information_to_store (information_id, store_id) {
        information_id -> Integer,
        store_id -> Integer,
    }
}

table! {
    mall_language (language_id) {
        language_id -> Integer,
        name -> Varchar,
        code -> Varchar,
        locale -> Varchar,
        image -> Varchar,
        directory -> Varchar,
        sort_order -> Integer,
        status -> Bool,
    }
}

table! {
    mall_layout (layout_id) {
        layout_id -> Integer,
        name -> Varchar,
    }
}

table! {
    mall_layout_module (layout_module_id) {
        layout_module_id -> Integer,
        layout_id -> Integer,
        code -> Varchar,
        position -> Varchar,
        sort_order -> Integer,
    }
}

table! {
    mall_layout_route (layout_route_id) {
        layout_route_id -> Integer,
        layout_id -> Integer,
        store_id -> Integer,
        route -> Varchar,
    }
}

table! {
    mall_length_class (length_class_id) {
        length_class_id -> Integer,
        value -> Decimal,
    }
}

table! {
    mall_length_class_description (length_class_id, language_id) {
        length_class_id -> Integer,
        language_id -> Integer,
        title -> Varchar,
        unit -> Varchar,
    }
}

table! {
    mall_location (location_id) {
        location_id -> Integer,
        name -> Varchar,
        address -> Text,
        telephone -> Varchar,
        fax -> Varchar,
        geocode -> Varchar,
        image -> Nullable<Varchar>,
        open -> Text,
        comment -> Text,
    }
}

table! {
    mall_manufacturer (manufacturer_id) {
        manufacturer_id -> Integer,
        name -> Varchar,
        image -> Nullable<Varchar>,
        sort_order -> Integer,
    }
}

table! {
    mall_manufacturer_to_store (manufacturer_id, store_id) {
        manufacturer_id -> Integer,
        store_id -> Integer,
    }
}

table! {
    mall_marketing (marketing_id) {
        marketing_id -> Integer,
        name -> Varchar,
        description -> Text,
        code -> Varchar,
        clicks -> Integer,
        date_added -> Datetime,
    }
}

table! {
    mall_modification (modification_id) {
        modification_id -> Integer,
        extension_install_id -> Integer,
        name -> Varchar,
        code -> Varchar,
        author -> Varchar,
        version -> Varchar,
        link -> Varchar,
        xml -> Mediumtext,
        status -> Bool,
        date_added -> Datetime,
    }
}

table! {
    mall_module (module_id) {
        module_id -> Integer,
        name -> Varchar,
        code -> Varchar,
        setting -> Text,
    }
}

table! {
    mall_option (option_id) {
        option_id -> Integer,
        #[sql_name = "type"]
        type_ -> Varchar,
        sort_order -> Integer,
    }
}

table! {
    mall_option_description (option_id, language_id) {
        option_id -> Integer,
        language_id -> Integer,
        name -> Varchar,
    }
}

table! {
    mall_option_value (option_value_id) {
        option_value_id -> Integer,
        option_id -> Integer,
        image -> Varchar,
        sort_order -> Integer,
    }
}

table! {
    mall_option_value_description (option_value_id, language_id) {
        option_value_id -> Integer,
        language_id -> Integer,
        option_id -> Integer,
        name -> Varchar,
    }
}

table! {
    mall_order (order_id) {
        order_id -> Integer,
        invoice_no -> Integer,
        invoice_prefix -> Varchar,
        store_id -> Integer,
        store_name -> Varchar,
        store_url -> Varchar,
        customer_id -> Integer,
        customer_group_id -> Integer,
        firstname -> Varchar,
        lastname -> Varchar,
        email -> Varchar,
        telephone -> Varchar,
        fax -> Varchar,
        custom_field -> Text,
        payment_firstname -> Varchar,
        payment_lastname -> Varchar,
        payment_company -> Varchar,
        payment_address_1 -> Varchar,
        payment_address_2 -> Varchar,
        payment_city -> Varchar,
        payment_postcode -> Varchar,
        payment_country -> Varchar,
        payment_country_id -> Integer,
        payment_zone -> Varchar,
        payment_zone_id -> Integer,
        payment_address_format -> Text,
        payment_custom_field -> Text,
        payment_method -> Varchar,
        payment_code -> Varchar,
        shipping_firstname -> Varchar,
        shipping_lastname -> Varchar,
        shipping_company -> Varchar,
        shipping_address_1 -> Varchar,
        shipping_address_2 -> Varchar,
        shipping_city -> Varchar,
        shipping_postcode -> Varchar,
        shipping_country -> Varchar,
        shipping_country_id -> Integer,
        shipping_zone -> Varchar,
        shipping_zone_id -> Integer,
        shipping_address_format -> Text,
        shipping_custom_field -> Text,
        shipping_method -> Varchar,
        shipping_code -> Varchar,
        comment -> Text,
        total -> Decimal,
        order_status_id -> Integer,
        affiliate_id -> Integer,
        commission -> Decimal,
        marketing_id -> Integer,
        tracking -> Varchar,
        language_id -> Integer,
        currency_id -> Integer,
        currency_code -> Varchar,
        currency_value -> Decimal,
        ip -> Varchar,
        forwarded_ip -> Varchar,
        user_agent -> Varchar,
        accept_language -> Varchar,
        date_added -> Datetime,
        date_modified -> Datetime,
    }
}

table! {
    mall_order_history (order_history_id) {
        order_history_id -> Integer,
        order_id -> Integer,
        order_status_id -> Integer,
        notify -> Bool,
        comment -> Text,
        date_added -> Datetime,
    }
}

table! {
    mall_order_option (order_option_id) {
        order_option_id -> Integer,
        order_id -> Integer,
        order_product_id -> Integer,
        product_option_id -> Integer,
        product_option_value_id -> Integer,
        name -> Varchar,
        value -> Text,
        #[sql_name = "type"]
        type_ -> Varchar,
    }
}

table! {
    mall_order_product (order_product_id) {
        order_product_id -> Integer,
        order_id -> Integer,
        product_id -> Integer,
        name -> Varchar,
        model -> Varchar,
        quantity -> Integer,
        price -> Decimal,
        total -> Decimal,
        tax -> Decimal,
        reward -> Integer,
    }
}

table! {
    mall_order_recurring (order_recurring_id) {
        order_recurring_id -> Integer,
        order_id -> Integer,
        reference -> Varchar,
        product_id -> Integer,
        product_name -> Varchar,
        product_quantity -> Integer,
        recurring_id -> Integer,
        recurring_name -> Varchar,
        recurring_description -> Varchar,
        recurring_frequency -> Varchar,
        recurring_cycle -> Smallint,
        recurring_duration -> Smallint,
        recurring_price -> Decimal,
        trial -> Bool,
        trial_frequency -> Varchar,
        trial_cycle -> Smallint,
        trial_duration -> Smallint,
        trial_price -> Decimal,
        status -> Tinyint,
        date_added -> Datetime,
    }
}

table! {
    mall_order_recurring_transaction (order_recurring_transaction_id) {
        order_recurring_transaction_id -> Integer,
        order_recurring_id -> Integer,
        reference -> Varchar,
        #[sql_name = "type"]
        type_ -> Varchar,
        amount -> Decimal,
        date_added -> Datetime,
    }
}

table! {
    mall_order_shipment (order_shipment_id) {
        order_shipment_id -> Integer,
        order_id -> Integer,
        date_added -> Datetime,
        shipping_courier_id -> Varchar,
        tracking_number -> Varchar,
    }
}

table! {
    mall_order_status (order_status_id, language_id) {
        order_status_id -> Integer,
        language_id -> Integer,
        name -> Varchar,
    }
}

table! {
    mall_order_total (order_total_id) {
        order_total_id -> Integer,
        order_id -> Integer,
        code -> Varchar,
        title -> Varchar,
        value -> Decimal,
        sort_order -> Integer,
    }
}

table! {
    mall_order_voucher (order_voucher_id) {
        order_voucher_id -> Integer,
        order_id -> Integer,
        voucher_id -> Integer,
        description -> Varchar,
        code -> Varchar,
        from_name -> Varchar,
        from_email -> Varchar,
        to_name -> Varchar,
        to_email -> Varchar,
        voucher_theme_id -> Integer,
        message -> Text,
        amount -> Decimal,
    }
}

table! {
    mall_product (product_id) {
        product_id -> Integer,
        model -> Varchar,
        sku -> Varchar,
        upc -> Varchar,
        ean -> Varchar,
        jan -> Varchar,
        isbn -> Varchar,
        mpn -> Varchar,
        location -> Varchar,
        quantity -> Integer,
        stock_status_id -> Integer,
        image -> Nullable<Varchar>,
        manufacturer_id -> Integer,
        shipping -> Bool,
        price -> Decimal,
        points -> Integer,
        tax_class_id -> Integer,
        date_available -> Date,
        weight -> Decimal,
        weight_class_id -> Integer,
        length -> Decimal,
        width -> Decimal,
        height -> Decimal,
        length_class_id -> Integer,
        subtract -> Bool,
        minimum -> Integer,
        sort_order -> Integer,
        status -> Bool,
        viewed -> Integer,
        date_added -> Datetime,
        date_modified -> Datetime,
    }
}

table! {
    mall_product_attribute (product_id, attribute_id, language_id) {
        product_id -> Integer,
        attribute_id -> Integer,
        language_id -> Integer,
        text -> Text,
    }
}

table! {
    mall_product_description (product_id, language_id) {
        product_id -> Integer,
        language_id -> Integer,
        name -> Varchar,
        description -> Text,
        tag -> Text,
        meta_title -> Varchar,
        meta_description -> Varchar,
        meta_keyword -> Varchar,
    }
}

table! {
    mall_product_discount (product_discount_id) {
        product_discount_id -> Integer,
        product_id -> Integer,
        customer_group_id -> Integer,
        quantity -> Integer,
        priority -> Integer,
        price -> Decimal,
        date_start -> Date,
        date_end -> Date,
    }
}

table! {
    mall_product_filter (product_id, filter_id) {
        product_id -> Integer,
        filter_id -> Integer,
    }
}

table! {
    mall_product_image (product_image_id) {
        product_image_id -> Integer,
        product_id -> Integer,
        image -> Nullable<Varchar>,
        sort_order -> Integer,
    }
}

table! {
    mall_product_option (product_option_id) {
        product_option_id -> Integer,
        product_id -> Integer,
        option_id -> Integer,
        value -> Text,
        required -> Bool,
    }
}

table! {
    mall_product_option_value (product_option_value_id) {
        product_option_value_id -> Integer,
        product_option_id -> Integer,
        product_id -> Integer,
        option_id -> Integer,
        option_value_id -> Integer,
        quantity -> Integer,
        subtract -> Bool,
        price -> Decimal,
        price_prefix -> Varchar,
        points -> Integer,
        points_prefix -> Varchar,
        weight -> Decimal,
        weight_prefix -> Varchar,
    }
}

table! {
    mall_product_recurring (product_id, recurring_id, customer_group_id) {
        product_id -> Integer,
        recurring_id -> Integer,
        customer_group_id -> Integer,
    }
}

table! {
    mall_product_related (product_id, related_id) {
        product_id -> Integer,
        related_id -> Integer,
    }
}

table! {
    mall_product_reward (product_reward_id) {
        product_reward_id -> Integer,
        product_id -> Integer,
        customer_group_id -> Integer,
        points -> Integer,
    }
}

table! {
    mall_product_special (product_special_id) {
        product_special_id -> Integer,
        product_id -> Integer,
        customer_group_id -> Integer,
        priority -> Integer,
        price -> Decimal,
        date_start -> Date,
        date_end -> Date,
    }
}

table! {
    mall_product_to_category (product_id, category_id) {
        product_id -> Integer,
        category_id -> Integer,
    }
}

table! {
    mall_product_to_download (product_id, download_id) {
        product_id -> Integer,
        download_id -> Integer,
    }
}

table! {
    mall_product_to_layout (product_id, store_id) {
        product_id -> Integer,
        store_id -> Integer,
        layout_id -> Integer,
    }
}

table! {
    mall_product_to_store (product_id, store_id) {
        product_id -> Integer,
        store_id -> Integer,
    }
}

table! {
    mall_recurring_description (recurring_id, language_id) {
        recurring_id -> Integer,
        language_id -> Integer,
        name -> Varchar,
    }
}

table! {
    mall_return (return_id) {
        return_id -> Integer,
        order_id -> Integer,
        product_id -> Integer,
        customer_id -> Integer,
        firstname -> Varchar,
        lastname -> Varchar,
        email -> Varchar,
        telephone -> Varchar,
        product -> Varchar,
        model -> Varchar,
        quantity -> Integer,
        opened -> Bool,
        return_reason_id -> Integer,
        return_action_id -> Integer,
        return_status_id -> Integer,
        comment -> Nullable<Text>,
        date_ordered -> Date,
        date_added -> Datetime,
        date_modified -> Datetime,
    }
}

table! {
    mall_return_action (return_action_id, language_id) {
        return_action_id -> Integer,
        language_id -> Integer,
        name -> Varchar,
    }
}

table! {
    mall_return_history (return_history_id) {
        return_history_id -> Integer,
        return_id -> Integer,
        return_status_id -> Integer,
        notify -> Bool,
        comment -> Text,
        date_added -> Datetime,
    }
}

table! {
    mall_return_reason (return_reason_id, language_id) {
        return_reason_id -> Integer,
        language_id -> Integer,
        name -> Varchar,
    }
}

table! {
    mall_return_status (return_status_id, language_id) {
        return_status_id -> Integer,
        language_id -> Integer,
        name -> Varchar,
    }
}

table! {
    mall_review (review_id) {
        review_id -> Integer,
        product_id -> Integer,
        customer_id -> Integer,
        author -> Varchar,
        text -> Text,
        rating -> Integer,
        status -> Bool,
        date_added -> Datetime,
        date_modified -> Datetime,
    }
}

table! {
    mall_seo_url (seo_url_id) {
        seo_url_id -> Integer,
        store_id -> Integer,
        language_id -> Integer,
        query -> Varchar,
        keyword -> Varchar,
    }
}

table! {
    mall_session (session_id) {
        session_id -> Varchar,
        data -> Text,
        expire -> Datetime,
    }
}

table! {
    mall_setting (setting_id) {
        setting_id -> Integer,
        store_id -> Integer,
        code -> Varchar,
        key -> Varchar,
        value -> Text,
        serialized -> Bool,
    }
}

table! {
    mall_shipping_courier (shipping_courier_id) {
        shipping_courier_id -> Integer,
        shipping_courier_code -> Varchar,
        shipping_courier_name -> Varchar,
    }
}

table! {
    mall_statistics (statistics_id) {
        statistics_id -> Integer,
        code -> Varchar,
        value -> Decimal,
    }
}

table! {
    mall_stock_status (stock_status_id, language_id) {
        stock_status_id -> Integer,
        language_id -> Integer,
        name -> Varchar,
    }
}

table! {
    mall_store (store_id) {
        store_id -> Integer,
        name -> Varchar,
        url -> Varchar,
        ssl -> Varchar,
    }
}

table! {
    mall_tax_class (tax_class_id) {
        tax_class_id -> Integer,
        title -> Varchar,
        description -> Varchar,
        date_added -> Datetime,
        date_modified -> Datetime,
    }
}

table! {
    mall_tax_rate (tax_rate_id) {
        tax_rate_id -> Integer,
        geo_zone_id -> Integer,
        name -> Varchar,
        rate -> Decimal,
        #[sql_name = "type"]
        type_ -> Char,
        date_added -> Datetime,
        date_modified -> Datetime,
    }
}

table! {
    mall_tax_rate_to_customer_group (tax_rate_id, customer_group_id) {
        tax_rate_id -> Integer,
        customer_group_id -> Integer,
    }
}

table! {
    mall_tax_rule (tax_rule_id) {
        tax_rule_id -> Integer,
        tax_class_id -> Integer,
        tax_rate_id -> Integer,
        based -> Varchar,
        priority -> Integer,
    }
}

table! {
    mall_theme (theme_id) {
        theme_id -> Integer,
        store_id -> Integer,
        theme -> Varchar,
        route -> Varchar,
        code -> Mediumtext,
        date_added -> Datetime,
    }
}

table! {
    mall_translation (translation_id) {
        translation_id -> Integer,
        store_id -> Integer,
        language_id -> Integer,
        route -> Varchar,
        key -> Varchar,
        value -> Text,
        date_added -> Datetime,
    }
}

table! {
    mall_upload (upload_id) {
        upload_id -> Integer,
        name -> Varchar,
        filename -> Varchar,
        code -> Varchar,
        date_added -> Datetime,
    }
}

table! {
    mall_user (user_id) {
        user_id -> Integer,
        user_group_id -> Integer,
        username -> Varchar,
        password -> Varchar,
        salt -> Varchar,
        firstname -> Varchar,
        lastname -> Varchar,
        email -> Varchar,
        image -> Varchar,
        code -> Varchar,
        ip -> Varchar,
        status -> Bool,
        date_added -> Datetime,
    }
}

table! {
    mall_user_group (user_group_id) {
        user_group_id -> Integer,
        name -> Varchar,
        permission -> Text,
    }
}

table! {
    mall_voucher (voucher_id) {
        voucher_id -> Integer,
        order_id -> Integer,
        code -> Varchar,
        from_name -> Varchar,
        from_email -> Varchar,
        to_name -> Varchar,
        to_email -> Varchar,
        voucher_theme_id -> Integer,
        message -> Text,
        amount -> Decimal,
        status -> Bool,
        date_added -> Datetime,
    }
}

table! {
    mall_voucher_history (voucher_history_id) {
        voucher_history_id -> Integer,
        voucher_id -> Integer,
        order_id -> Integer,
        amount -> Decimal,
        date_added -> Datetime,
    }
}

table! {
    mall_voucher_theme (voucher_theme_id) {
        voucher_theme_id -> Integer,
        image -> Varchar,
    }
}

table! {
    mall_voucher_theme_description (voucher_theme_id, language_id) {
        voucher_theme_id -> Integer,
        language_id -> Integer,
        name -> Varchar,
    }
}

table! {
    mall_weight_class (weight_class_id) {
        weight_class_id -> Integer,
        value -> Decimal,
    }
}

table! {
    mall_weight_class_description (weight_class_id, language_id) {
        weight_class_id -> Integer,
        language_id -> Integer,
        title -> Varchar,
        unit -> Varchar,
    }
}

table! {
    mall_zone (zone_id) {
        zone_id -> Integer,
        country_id -> Integer,
        name -> Varchar,
        code -> Varchar,
        status -> Bool,
    }
}

table! {
    mall_zone_to_geo_zone (zone_to_geo_zone_id) {
        zone_to_geo_zone_id -> Integer,
        country_id -> Integer,
        zone_id -> Integer,
        geo_zone_id -> Integer,
        date_added -> Datetime,
        date_modified -> Datetime,
    }
}

allow_tables_to_appear_in_same_query!(
    mall_address,
    mall_api,
    mall_api_ip,
    mall_api_session,
    mall_attribute,
    mall_attribute_description,
    mall_attribute_group,
    mall_attribute_group_description,
    mall_banner,
    mall_banner_image,
    mall_cart,
    mall_category,
    mall_category_description,
    mall_category_filter,
    mall_category_path,
    mall_category_to_layout,
    mall_category_to_store,
    mall_country,
    mall_coupon,
    mall_coupon_category,
    mall_coupon_history,
    mall_coupon_product,
    mall_currency,
    mall_custom_field,
    mall_custom_field_customer_group,
    mall_custom_field_description,
    mall_custom_field_value,
    mall_custom_field_value_description,
    mall_customer,
    mall_customer_activity,
    mall_customer_affiliate,
    mall_customer_approval,
    mall_customer_group,
    mall_customer_group_description,
    mall_customer_history,
    mall_customer_ip,
    mall_customer_login,
    mall_customer_online,
    mall_customer_reward,
    mall_customer_search,
    mall_customer_transaction,
    mall_customer_wishlist,
    mall_download,
    mall_download_description,
    mall_event,
    mall_extension,
    mall_extension_install,
    mall_extension_path,
    mall_filter,
    mall_filter_description,
    mall_filter_group,
    mall_filter_group_description,
    mall_geo_zone,
    mall_googleshopping_category,
    mall_googleshopping_product_status,
    mall_googleshopping_product_target,
    mall_information,
    mall_information_description,
    mall_information_to_layout,
    mall_information_to_store,
    mall_language,
    mall_layout,
    mall_layout_module,
    mall_layout_route,
    mall_length_class,
    mall_length_class_description,
    mall_location,
    mall_manufacturer,
    mall_manufacturer_to_store,
    mall_marketing,
    mall_modification,
    mall_module,
    mall_option,
    mall_option_description,
    mall_option_value,
    mall_option_value_description,
    mall_order,
    mall_order_history,
    mall_order_option,
    mall_order_product,
    mall_order_recurring,
    mall_order_recurring_transaction,
    mall_order_shipment,
    mall_order_status,
    mall_order_total,
    mall_order_voucher,
    mall_product,
    mall_product_attribute,
    mall_product_description,
    mall_product_discount,
    mall_product_filter,
    mall_product_image,
    mall_product_option,
    mall_product_option_value,
    mall_product_recurring,
    mall_product_related,
    mall_product_reward,
    mall_product_special,
    mall_product_to_category,
    mall_product_to_download,
    mall_product_to_layout,
    mall_product_to_store,
    mall_recurring_description,
    mall_return,
    mall_return_action,
    mall_return_history,
    mall_return_reason,
    mall_return_status,
    mall_review,
    mall_seo_url,
    mall_session,
    mall_setting,
    mall_shipping_courier,
    mall_statistics,
    mall_stock_status,
    mall_store,
    mall_tax_class,
    mall_tax_rate,
    mall_tax_rate_to_customer_group,
    mall_tax_rule,
    mall_theme,
    mall_translation,
    mall_upload,
    mall_user,
    mall_user_group,
    mall_voucher,
    mall_voucher_history,
    mall_voucher_theme,
    mall_voucher_theme_description,
    mall_weight_class,
    mall_weight_class_description,
    mall_zone,
    mall_zone_to_geo_zone,
);
