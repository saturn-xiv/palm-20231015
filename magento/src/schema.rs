// @generated automatically by Diesel CLI.

diesel::table! {
    admin_analytics_usage_version_log (id) {
        id -> Unsigned<Integer>,
        #[max_length = 50]
        last_viewed_in_version -> Varchar,
    }
}

diesel::table! {
    admin_passwords (password_id) {
        password_id -> Unsigned<Integer>,
        user_id -> Unsigned<Integer>,
        #[max_length = 255]
        password_hash -> Nullable<Varchar>,
        expires -> Unsigned<Integer>,
        last_updated -> Unsigned<Integer>,
    }
}

diesel::table! {
    admin_system_messages (identity) {
        #[max_length = 100]
        identity -> Varchar,
        severity -> Unsigned<Smallint>,
        created_at -> Timestamp,
    }
}

diesel::table! {
    admin_user (user_id) {
        user_id -> Unsigned<Integer>,
        #[max_length = 32]
        firstname -> Nullable<Varchar>,
        #[max_length = 32]
        lastname -> Nullable<Varchar>,
        #[max_length = 128]
        email -> Nullable<Varchar>,
        #[max_length = 40]
        username -> Nullable<Varchar>,
        #[max_length = 255]
        password -> Varchar,
        created -> Timestamp,
        modified -> Timestamp,
        logdate -> Nullable<Timestamp>,
        lognum -> Unsigned<Smallint>,
        reload_acl_flag -> Smallint,
        is_active -> Smallint,
        extra -> Nullable<Text>,
        rp_token -> Nullable<Text>,
        rp_token_created_at -> Nullable<Timestamp>,
        #[max_length = 16]
        interface_locale -> Varchar,
        failures_num -> Nullable<Smallint>,
        first_failure -> Nullable<Timestamp>,
        lock_expires -> Nullable<Timestamp>,
    }
}

diesel::table! {
    admin_user_expiration (user_id) {
        user_id -> Unsigned<Integer>,
        expires_at -> Datetime,
    }
}

diesel::table! {
    admin_user_session (id) {
        id -> Unsigned<Integer>,
        #[max_length = 1]
        session_id -> Nullable<Varchar>,
        user_id -> Nullable<Unsigned<Integer>>,
        status -> Unsigned<Smallint>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
        #[max_length = 15]
        ip -> Varchar,
    }
}

diesel::table! {
    adminnotification_inbox (notification_id) {
        notification_id -> Unsigned<Integer>,
        severity -> Unsigned<Smallint>,
        date_added -> Timestamp,
        #[max_length = 255]
        title -> Varchar,
        description -> Nullable<Text>,
        #[max_length = 255]
        url -> Nullable<Varchar>,
        is_read -> Unsigned<Smallint>,
        is_remove -> Unsigned<Smallint>,
    }
}

diesel::table! {
    authorization_role (role_id) {
        role_id -> Unsigned<Integer>,
        parent_id -> Unsigned<Integer>,
        tree_level -> Unsigned<Smallint>,
        sort_order -> Unsigned<Smallint>,
        #[max_length = 1]
        role_type -> Varchar,
        user_id -> Unsigned<Integer>,
        #[max_length = 16]
        user_type -> Nullable<Varchar>,
        #[max_length = 50]
        role_name -> Nullable<Varchar>,
    }
}

diesel::table! {
    authorization_rule (rule_id) {
        rule_id -> Unsigned<Integer>,
        role_id -> Unsigned<Integer>,
        #[max_length = 255]
        resource_id -> Nullable<Varchar>,
        #[max_length = 20]
        privileges -> Nullable<Varchar>,
        #[max_length = 10]
        permission -> Nullable<Varchar>,
    }
}

diesel::table! {
    cache (id) {
        #[max_length = 200]
        id -> Varchar,
        data -> Nullable<Mediumblob>,
        create_time -> Nullable<Integer>,
        update_time -> Nullable<Integer>,
        expire_time -> Nullable<Integer>,
    }
}

diesel::table! {
    cache_tag (tag, cache_id) {
        #[max_length = 100]
        tag -> Varchar,
        #[max_length = 200]
        cache_id -> Varchar,
    }
}

diesel::table! {
    catalog_category_entity (entity_id) {
        entity_id -> Unsigned<Integer>,
        attribute_set_id -> Unsigned<Smallint>,
        parent_id -> Unsigned<Integer>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
        #[max_length = 255]
        path -> Varchar,
        position -> Integer,
        level -> Integer,
        children_count -> Integer,
    }
}

diesel::table! {
    catalog_category_entity_datetime (value_id) {
        value_id -> Integer,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        value -> Nullable<Datetime>,
    }
}

diesel::table! {
    catalog_category_entity_decimal (value_id) {
        value_id -> Integer,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        value -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_category_entity_int (value_id) {
        value_id -> Integer,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        value -> Nullable<Integer>,
    }
}

diesel::table! {
    catalog_category_entity_text (value_id) {
        value_id -> Integer,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        value -> Nullable<Mediumtext>,
    }
}

diesel::table! {
    catalog_category_entity_varchar (value_id) {
        value_id -> Integer,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        #[max_length = 255]
        value -> Nullable<Varchar>,
    }
}

diesel::table! {
    catalog_category_product (entity_id, category_id, product_id) {
        entity_id -> Integer,
        category_id -> Unsigned<Integer>,
        product_id -> Unsigned<Integer>,
        position -> Integer,
    }
}

diesel::table! {
    catalog_category_product_index (category_id, product_id, store_id) {
        category_id -> Unsigned<Integer>,
        product_id -> Unsigned<Integer>,
        position -> Nullable<Integer>,
        is_parent -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        visibility -> Unsigned<Smallint>,
    }
}

diesel::table! {
    catalog_category_product_index_replica (category_id, product_id, store_id) {
        category_id -> Unsigned<Integer>,
        product_id -> Unsigned<Integer>,
        position -> Nullable<Integer>,
        is_parent -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        visibility -> Unsigned<Smallint>,
    }
}

diesel::table! {
    catalog_category_product_index_store1 (category_id, product_id, store_id) {
        category_id -> Unsigned<Integer>,
        product_id -> Unsigned<Integer>,
        position -> Nullable<Integer>,
        is_parent -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        visibility -> Unsigned<Smallint>,
    }
}

diesel::table! {
    catalog_category_product_index_store1_replica (category_id, product_id, store_id) {
        category_id -> Unsigned<Integer>,
        product_id -> Unsigned<Integer>,
        position -> Nullable<Integer>,
        is_parent -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        visibility -> Unsigned<Smallint>,
    }
}

diesel::table! {
    catalog_category_product_index_tmp (category_id, product_id, store_id) {
        category_id -> Unsigned<Integer>,
        product_id -> Unsigned<Integer>,
        position -> Integer,
        is_parent -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        visibility -> Unsigned<Smallint>,
    }
}

diesel::table! {
    catalog_compare_item (catalog_compare_item_id) {
        catalog_compare_item_id -> Unsigned<Integer>,
        visitor_id -> Unsigned<Integer>,
        customer_id -> Nullable<Unsigned<Integer>>,
        product_id -> Unsigned<Integer>,
        store_id -> Nullable<Unsigned<Smallint>>,
        list_id -> Nullable<Unsigned<Integer>>,
    }
}

diesel::table! {
    catalog_compare_list (list_id) {
        list_id -> Unsigned<Integer>,
        #[max_length = 32]
        list_id_mask -> Nullable<Varchar>,
        customer_id -> Nullable<Unsigned<Integer>>,
    }
}

diesel::table! {
    catalog_eav_attribute (attribute_id) {
        attribute_id -> Unsigned<Smallint>,
        #[max_length = 255]
        frontend_input_renderer -> Nullable<Varchar>,
        is_global -> Unsigned<Smallint>,
        is_visible -> Unsigned<Smallint>,
        is_searchable -> Unsigned<Smallint>,
        is_filterable -> Unsigned<Smallint>,
        is_comparable -> Unsigned<Smallint>,
        is_visible_on_front -> Unsigned<Smallint>,
        is_html_allowed_on_front -> Unsigned<Smallint>,
        is_used_for_price_rules -> Unsigned<Smallint>,
        is_filterable_in_search -> Unsigned<Smallint>,
        used_in_product_listing -> Unsigned<Smallint>,
        used_for_sort_by -> Unsigned<Smallint>,
        #[max_length = 255]
        apply_to -> Nullable<Varchar>,
        is_visible_in_advanced_search -> Unsigned<Smallint>,
        position -> Integer,
        is_wysiwyg_enabled -> Unsigned<Smallint>,
        is_used_for_promo_rules -> Unsigned<Smallint>,
        is_required_in_admin_store -> Unsigned<Smallint>,
        is_used_in_grid -> Unsigned<Smallint>,
        is_visible_in_grid -> Unsigned<Smallint>,
        is_filterable_in_grid -> Unsigned<Smallint>,
        search_weight -> Float,
        additional_data -> Nullable<Text>,
    }
}

diesel::table! {
    catalog_product_bundle_price_index (entity_id, website_id, customer_group_id) {
        entity_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        customer_group_id -> Unsigned<Integer>,
        min_price -> Decimal,
        max_price -> Decimal,
    }
}

diesel::table! {
    catalog_product_bundle_selection (selection_id) {
        selection_id -> Unsigned<Integer>,
        option_id -> Unsigned<Integer>,
        parent_product_id -> Unsigned<Integer>,
        product_id -> Unsigned<Integer>,
        position -> Unsigned<Integer>,
        is_default -> Unsigned<Smallint>,
        selection_price_type -> Unsigned<Smallint>,
        selection_price_value -> Decimal,
        selection_qty -> Nullable<Decimal>,
        selection_can_change_qty -> Smallint,
    }
}

diesel::table! {
    catalog_product_bundle_selection_price (selection_id, parent_product_id, website_id) {
        selection_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        selection_price_type -> Unsigned<Smallint>,
        selection_price_value -> Decimal,
        parent_product_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    catalog_product_bundle_stock_index (entity_id, website_id, stock_id, option_id) {
        entity_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        stock_id -> Unsigned<Smallint>,
        option_id -> Unsigned<Integer>,
        stock_status -> Nullable<Smallint>,
    }
}

diesel::table! {
    catalog_product_entity (entity_id) {
        entity_id -> Unsigned<Integer>,
        attribute_set_id -> Unsigned<Smallint>,
        #[max_length = 32]
        type_id -> Varchar,
        #[max_length = 64]
        sku -> Varchar,
        has_options -> Smallint,
        required_options -> Unsigned<Smallint>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

diesel::table! {
    catalog_product_entity_datetime (value_id) {
        value_id -> Integer,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        value -> Nullable<Datetime>,
    }
}

diesel::table! {
    catalog_product_entity_decimal (value_id) {
        value_id -> Integer,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        value -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_entity_gallery (value_id) {
        value_id -> Integer,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        position -> Integer,
        #[max_length = 255]
        value -> Nullable<Varchar>,
    }
}

diesel::table! {
    catalog_product_entity_int (value_id) {
        value_id -> Integer,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        value -> Nullable<Integer>,
    }
}

diesel::table! {
    catalog_product_entity_media_gallery (value_id) {
        value_id -> Unsigned<Integer>,
        attribute_id -> Unsigned<Smallint>,
        #[max_length = 255]
        value -> Nullable<Varchar>,
        #[max_length = 32]
        media_type -> Varchar,
        disabled -> Unsigned<Smallint>,
    }
}

diesel::table! {
    catalog_product_entity_media_gallery_value (record_id) {
        value_id -> Unsigned<Integer>,
        store_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        #[max_length = 255]
        label -> Nullable<Varchar>,
        position -> Nullable<Unsigned<Integer>>,
        disabled -> Unsigned<Smallint>,
        record_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    catalog_product_entity_media_gallery_value_to_entity (value_id, entity_id) {
        value_id -> Unsigned<Integer>,
        entity_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    catalog_product_entity_media_gallery_value_video (value_id, store_id) {
        value_id -> Unsigned<Integer>,
        store_id -> Unsigned<Smallint>,
        #[max_length = 32]
        provider -> Nullable<Varchar>,
        url -> Nullable<Text>,
        #[max_length = 255]
        title -> Nullable<Varchar>,
        description -> Nullable<Text>,
        metadata -> Nullable<Text>,
    }
}

diesel::table! {
    catalog_product_entity_text (value_id) {
        value_id -> Integer,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        value -> Nullable<Mediumtext>,
    }
}

diesel::table! {
    catalog_product_entity_tier_price (value_id) {
        value_id -> Integer,
        entity_id -> Unsigned<Integer>,
        all_groups -> Unsigned<Smallint>,
        customer_group_id -> Unsigned<Integer>,
        qty -> Decimal,
        value -> Decimal,
        website_id -> Unsigned<Smallint>,
        percentage_value -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_entity_varchar (value_id) {
        value_id -> Integer,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        #[max_length = 255]
        value -> Nullable<Varchar>,
    }
}

diesel::table! {
    catalog_product_frontend_action (action_id) {
        action_id -> Unsigned<Bigint>,
        #[max_length = 64]
        type_id -> Varchar,
        visitor_id -> Nullable<Unsigned<Integer>>,
        customer_id -> Nullable<Unsigned<Integer>>,
        product_id -> Unsigned<Integer>,
        added_at -> Bigint,
    }
}

diesel::table! {
    catalog_product_index_eav (entity_id, attribute_id, store_id, value, source_id) {
        entity_id -> Unsigned<Integer>,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        value -> Unsigned<Integer>,
        source_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    catalog_product_index_eav_decimal (entity_id, attribute_id, store_id, value, source_id) {
        entity_id -> Unsigned<Integer>,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        value -> Decimal,
        source_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    catalog_product_index_eav_decimal_idx (entity_id, attribute_id, store_id, value, source_id) {
        entity_id -> Unsigned<Integer>,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        value -> Decimal,
        source_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    catalog_product_index_eav_decimal_replica (entity_id, attribute_id, store_id, value, source_id) {
        entity_id -> Unsigned<Integer>,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        value -> Decimal,
        source_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    catalog_product_index_eav_decimal_tmp (entity_id, attribute_id, store_id, value, source_id) {
        entity_id -> Unsigned<Integer>,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        value -> Decimal,
        source_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    catalog_product_index_eav_idx (entity_id, attribute_id, store_id, value, source_id) {
        entity_id -> Unsigned<Integer>,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        value -> Unsigned<Integer>,
        source_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    catalog_product_index_eav_replica (entity_id, attribute_id, store_id, value, source_id) {
        entity_id -> Unsigned<Integer>,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        value -> Unsigned<Integer>,
        source_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    catalog_product_index_eav_tmp (entity_id, attribute_id, store_id, value, source_id) {
        entity_id -> Unsigned<Integer>,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        value -> Unsigned<Integer>,
        source_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    catalog_product_index_price (entity_id, customer_group_id, website_id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        tax_class_id -> Nullable<Unsigned<Smallint>>,
        price -> Nullable<Decimal>,
        final_price -> Nullable<Decimal>,
        min_price -> Nullable<Decimal>,
        max_price -> Nullable<Decimal>,
        tier_price -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_index_price_bundle_idx (entity_id, customer_group_id, website_id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Integer,
        website_id -> Unsigned<Smallint>,
        tax_class_id -> Nullable<Unsigned<Smallint>>,
        price_type -> Unsigned<Smallint>,
        special_price -> Nullable<Decimal>,
        tier_percent -> Nullable<Decimal>,
        orig_price -> Nullable<Decimal>,
        price -> Nullable<Decimal>,
        min_price -> Nullable<Decimal>,
        max_price -> Nullable<Decimal>,
        tier_price -> Nullable<Decimal>,
        base_tier -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_index_price_bundle_opt_idx (entity_id, customer_group_id, website_id, option_id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Integer,
        website_id -> Unsigned<Smallint>,
        option_id -> Unsigned<Integer>,
        min_price -> Nullable<Decimal>,
        alt_price -> Nullable<Decimal>,
        max_price -> Nullable<Decimal>,
        tier_price -> Nullable<Decimal>,
        alt_tier_price -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_index_price_bundle_opt_tmp (entity_id, customer_group_id, website_id, option_id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Integer,
        website_id -> Unsigned<Smallint>,
        option_id -> Unsigned<Integer>,
        min_price -> Nullable<Decimal>,
        alt_price -> Nullable<Decimal>,
        max_price -> Nullable<Decimal>,
        tier_price -> Nullable<Decimal>,
        alt_tier_price -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_index_price_bundle_sel_idx (entity_id, customer_group_id, website_id, option_id, selection_id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Integer,
        website_id -> Unsigned<Smallint>,
        option_id -> Unsigned<Integer>,
        selection_id -> Unsigned<Integer>,
        group_type -> Nullable<Unsigned<Smallint>>,
        is_required -> Nullable<Unsigned<Smallint>>,
        price -> Nullable<Decimal>,
        tier_price -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_index_price_bundle_sel_tmp (entity_id, customer_group_id, website_id, option_id, selection_id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Integer,
        website_id -> Unsigned<Smallint>,
        option_id -> Unsigned<Integer>,
        selection_id -> Unsigned<Integer>,
        group_type -> Nullable<Unsigned<Smallint>>,
        is_required -> Nullable<Unsigned<Smallint>>,
        price -> Nullable<Decimal>,
        tier_price -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_index_price_bundle_tmp (entity_id, customer_group_id, website_id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Integer,
        website_id -> Unsigned<Smallint>,
        tax_class_id -> Nullable<Unsigned<Smallint>>,
        price_type -> Unsigned<Smallint>,
        special_price -> Nullable<Decimal>,
        tier_percent -> Nullable<Decimal>,
        orig_price -> Nullable<Decimal>,
        price -> Nullable<Decimal>,
        min_price -> Nullable<Decimal>,
        max_price -> Nullable<Decimal>,
        tier_price -> Nullable<Decimal>,
        base_tier -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_index_price_cfg_opt_agr_idx (parent_id, child_id, customer_group_id, website_id) {
        parent_id -> Unsigned<Integer>,
        child_id -> Unsigned<Integer>,
        customer_group_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        price -> Nullable<Decimal>,
        tier_price -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_index_price_cfg_opt_agr_tmp (parent_id, child_id, customer_group_id, website_id) {
        parent_id -> Unsigned<Integer>,
        child_id -> Unsigned<Integer>,
        customer_group_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        price -> Nullable<Decimal>,
        tier_price -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_index_price_cfg_opt_idx (entity_id, customer_group_id, website_id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        min_price -> Nullable<Decimal>,
        max_price -> Nullable<Decimal>,
        tier_price -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_index_price_cfg_opt_tmp (entity_id, customer_group_id, website_id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        min_price -> Nullable<Decimal>,
        max_price -> Nullable<Decimal>,
        tier_price -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_index_price_downlod_idx (entity_id, customer_group_id, website_id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Integer,
        website_id -> Unsigned<Smallint>,
        min_price -> Decimal,
        max_price -> Decimal,
    }
}

diesel::table! {
    catalog_product_index_price_downlod_tmp (entity_id, customer_group_id, website_id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Integer,
        website_id -> Unsigned<Smallint>,
        min_price -> Decimal,
        max_price -> Decimal,
    }
}

diesel::table! {
    catalog_product_index_price_final_idx (entity_id, customer_group_id, website_id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        tax_class_id -> Nullable<Unsigned<Smallint>>,
        orig_price -> Nullable<Decimal>,
        price -> Nullable<Decimal>,
        min_price -> Nullable<Decimal>,
        max_price -> Nullable<Decimal>,
        tier_price -> Nullable<Decimal>,
        base_tier -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_index_price_final_tmp (entity_id, customer_group_id, website_id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        tax_class_id -> Nullable<Unsigned<Smallint>>,
        orig_price -> Nullable<Decimal>,
        price -> Nullable<Decimal>,
        min_price -> Nullable<Decimal>,
        max_price -> Nullable<Decimal>,
        tier_price -> Nullable<Decimal>,
        base_tier -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_index_price_idx (entity_id, customer_group_id, website_id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        tax_class_id -> Nullable<Unsigned<Smallint>>,
        price -> Nullable<Decimal>,
        final_price -> Nullable<Decimal>,
        min_price -> Nullable<Decimal>,
        max_price -> Nullable<Decimal>,
        tier_price -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_index_price_opt_agr_idx (entity_id, customer_group_id, website_id, option_id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        option_id -> Unsigned<Integer>,
        min_price -> Nullable<Decimal>,
        max_price -> Nullable<Decimal>,
        tier_price -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_index_price_opt_agr_tmp (entity_id, customer_group_id, website_id, option_id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        option_id -> Unsigned<Integer>,
        min_price -> Nullable<Decimal>,
        max_price -> Nullable<Decimal>,
        tier_price -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_index_price_opt_idx (entity_id, customer_group_id, website_id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        min_price -> Nullable<Decimal>,
        max_price -> Nullable<Decimal>,
        tier_price -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_index_price_opt_tmp (entity_id, customer_group_id, website_id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        min_price -> Nullable<Decimal>,
        max_price -> Nullable<Decimal>,
        tier_price -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_index_price_replica (entity_id, customer_group_id, website_id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        tax_class_id -> Nullable<Unsigned<Smallint>>,
        price -> Nullable<Decimal>,
        final_price -> Nullable<Decimal>,
        min_price -> Nullable<Decimal>,
        max_price -> Nullable<Decimal>,
        tier_price -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_index_price_tmp (id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        tax_class_id -> Nullable<Unsigned<Smallint>>,
        price -> Nullable<Decimal>,
        final_price -> Nullable<Decimal>,
        min_price -> Nullable<Decimal>,
        max_price -> Nullable<Decimal>,
        tier_price -> Nullable<Decimal>,
        id -> Unsigned<Integer>,
    }
}

diesel::table! {
    catalog_product_index_tier_price (entity_id, customer_group_id, website_id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        min_price -> Nullable<Decimal>,
    }
}

diesel::table! {
    catalog_product_index_website (website_id) {
        website_id -> Unsigned<Smallint>,
        default_store_id -> Unsigned<Smallint>,
        website_date -> Nullable<Date>,
        rate -> Nullable<Float>,
    }
}

diesel::table! {
    catalog_product_link (link_id) {
        link_id -> Unsigned<Integer>,
        product_id -> Unsigned<Integer>,
        linked_product_id -> Unsigned<Integer>,
        link_type_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    catalog_product_link_attribute (product_link_attribute_id) {
        product_link_attribute_id -> Unsigned<Smallint>,
        link_type_id -> Unsigned<Smallint>,
        #[max_length = 32]
        product_link_attribute_code -> Nullable<Varchar>,
        #[max_length = 32]
        data_type -> Nullable<Varchar>,
    }
}

diesel::table! {
    catalog_product_link_attribute_decimal (value_id) {
        value_id -> Unsigned<Integer>,
        product_link_attribute_id -> Nullable<Unsigned<Smallint>>,
        link_id -> Unsigned<Integer>,
        value -> Decimal,
    }
}

diesel::table! {
    catalog_product_link_attribute_int (value_id) {
        value_id -> Unsigned<Integer>,
        product_link_attribute_id -> Nullable<Unsigned<Smallint>>,
        link_id -> Unsigned<Integer>,
        value -> Integer,
    }
}

diesel::table! {
    catalog_product_link_attribute_varchar (value_id) {
        value_id -> Unsigned<Integer>,
        product_link_attribute_id -> Unsigned<Smallint>,
        link_id -> Unsigned<Integer>,
        #[max_length = 255]
        value -> Nullable<Varchar>,
    }
}

diesel::table! {
    catalog_product_link_type (link_type_id) {
        link_type_id -> Unsigned<Smallint>,
        #[max_length = 32]
        code -> Nullable<Varchar>,
    }
}

diesel::table! {
    catalog_product_relation (parent_id, child_id) {
        parent_id -> Unsigned<Integer>,
        child_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    catalog_product_super_attribute (product_super_attribute_id) {
        product_super_attribute_id -> Unsigned<Integer>,
        product_id -> Unsigned<Integer>,
        attribute_id -> Unsigned<Smallint>,
        position -> Unsigned<Smallint>,
    }
}

diesel::table! {
    catalog_product_super_attribute_label (value_id) {
        value_id -> Unsigned<Integer>,
        product_super_attribute_id -> Unsigned<Integer>,
        store_id -> Unsigned<Smallint>,
        use_default -> Nullable<Unsigned<Smallint>>,
        #[max_length = 255]
        value -> Nullable<Varchar>,
    }
}

diesel::table! {
    catalog_product_super_link (link_id) {
        link_id -> Unsigned<Integer>,
        product_id -> Unsigned<Integer>,
        parent_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    catalog_product_website (product_id, website_id) {
        product_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    catalog_url_rewrite_product_category (url_rewrite_id) {
        url_rewrite_id -> Unsigned<Integer>,
        category_id -> Unsigned<Integer>,
        product_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    cataloginventory_stock (stock_id) {
        stock_id -> Unsigned<Smallint>,
        website_id -> Unsigned<Smallint>,
        #[max_length = 255]
        stock_name -> Nullable<Varchar>,
    }
}

diesel::table! {
    cataloginventory_stock_item (item_id) {
        item_id -> Unsigned<Integer>,
        product_id -> Unsigned<Integer>,
        stock_id -> Unsigned<Smallint>,
        qty -> Nullable<Decimal>,
        min_qty -> Decimal,
        use_config_min_qty -> Unsigned<Smallint>,
        is_qty_decimal -> Unsigned<Smallint>,
        backorders -> Unsigned<Smallint>,
        use_config_backorders -> Unsigned<Smallint>,
        min_sale_qty -> Decimal,
        use_config_min_sale_qty -> Unsigned<Smallint>,
        max_sale_qty -> Decimal,
        use_config_max_sale_qty -> Unsigned<Smallint>,
        is_in_stock -> Unsigned<Smallint>,
        low_stock_date -> Nullable<Timestamp>,
        notify_stock_qty -> Nullable<Decimal>,
        use_config_notify_stock_qty -> Unsigned<Smallint>,
        manage_stock -> Unsigned<Smallint>,
        use_config_manage_stock -> Unsigned<Smallint>,
        stock_status_changed_auto -> Unsigned<Smallint>,
        use_config_qty_increments -> Unsigned<Smallint>,
        qty_increments -> Decimal,
        use_config_enable_qty_inc -> Unsigned<Smallint>,
        enable_qty_increments -> Unsigned<Smallint>,
        is_decimal_divided -> Unsigned<Smallint>,
        website_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    cataloginventory_stock_status (product_id, website_id, stock_id) {
        product_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        stock_id -> Unsigned<Smallint>,
        qty -> Decimal,
        stock_status -> Unsigned<Smallint>,
    }
}

diesel::table! {
    cataloginventory_stock_status_idx (product_id, website_id, stock_id) {
        product_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        stock_id -> Unsigned<Smallint>,
        qty -> Decimal,
        stock_status -> Unsigned<Smallint>,
    }
}

diesel::table! {
    cataloginventory_stock_status_replica (product_id, website_id, stock_id) {
        product_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        stock_id -> Unsigned<Smallint>,
        qty -> Decimal,
        stock_status -> Unsigned<Smallint>,
    }
}

diesel::table! {
    cataloginventory_stock_status_tmp (product_id, website_id, stock_id) {
        product_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        stock_id -> Unsigned<Smallint>,
        qty -> Decimal,
        stock_status -> Unsigned<Smallint>,
    }
}

diesel::table! {
    catalogrule (rule_id) {
        rule_id -> Unsigned<Integer>,
        #[max_length = 255]
        name -> Nullable<Varchar>,
        description -> Nullable<Text>,
        from_date -> Nullable<Date>,
        to_date -> Nullable<Date>,
        is_active -> Smallint,
        conditions_serialized -> Nullable<Mediumtext>,
        actions_serialized -> Nullable<Mediumtext>,
        stop_rules_processing -> Smallint,
        sort_order -> Unsigned<Integer>,
        #[max_length = 32]
        simple_action -> Nullable<Varchar>,
        discount_amount -> Decimal,
    }
}

diesel::table! {
    catalogrule_customer_group (rule_id, customer_group_id) {
        rule_id -> Unsigned<Integer>,
        customer_group_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    catalogrule_group_website (rule_id, customer_group_id, website_id) {
        rule_id -> Unsigned<Integer>,
        customer_group_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    catalogrule_group_website_replica (rule_id, customer_group_id, website_id) {
        rule_id -> Unsigned<Integer>,
        customer_group_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    catalogrule_product (rule_product_id) {
        rule_product_id -> Unsigned<Integer>,
        rule_id -> Unsigned<Integer>,
        from_time -> Unsigned<Integer>,
        to_time -> Unsigned<Integer>,
        customer_group_id -> Nullable<Integer>,
        product_id -> Unsigned<Integer>,
        #[max_length = 10]
        action_operator -> Nullable<Varchar>,
        action_amount -> Decimal,
        action_stop -> Smallint,
        sort_order -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    catalogrule_product_price (rule_product_price_id) {
        rule_product_price_id -> Unsigned<Integer>,
        rule_date -> Date,
        customer_group_id -> Nullable<Integer>,
        product_id -> Unsigned<Integer>,
        rule_price -> Decimal,
        website_id -> Unsigned<Smallint>,
        latest_start_date -> Nullable<Date>,
        earliest_end_date -> Nullable<Date>,
    }
}

diesel::table! {
    catalogrule_product_price_replica (rule_product_price_id) {
        rule_product_price_id -> Unsigned<Integer>,
        rule_date -> Date,
        customer_group_id -> Nullable<Integer>,
        product_id -> Unsigned<Integer>,
        rule_price -> Decimal,
        website_id -> Unsigned<Smallint>,
        latest_start_date -> Nullable<Date>,
        earliest_end_date -> Nullable<Date>,
    }
}

diesel::table! {
    catalogrule_product_replica (rule_product_id) {
        rule_product_id -> Unsigned<Integer>,
        rule_id -> Unsigned<Integer>,
        from_time -> Unsigned<Integer>,
        to_time -> Unsigned<Integer>,
        customer_group_id -> Nullable<Integer>,
        product_id -> Unsigned<Integer>,
        #[max_length = 10]
        action_operator -> Nullable<Varchar>,
        action_amount -> Decimal,
        action_stop -> Smallint,
        sort_order -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    catalogrule_website (rule_id, website_id) {
        rule_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    catalogsearch_recommendations (id) {
        id -> Unsigned<Integer>,
        query_id -> Unsigned<Integer>,
        relation_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    checkout_agreement (agreement_id) {
        agreement_id -> Unsigned<Integer>,
        #[max_length = 255]
        name -> Nullable<Varchar>,
        content -> Nullable<Text>,
        #[max_length = 25]
        content_height -> Nullable<Varchar>,
        checkbox_text -> Nullable<Text>,
        is_active -> Smallint,
        is_html -> Smallint,
        mode -> Smallint,
    }
}

diesel::table! {
    checkout_agreement_store (agreement_id, store_id) {
        agreement_id -> Unsigned<Integer>,
        store_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    cms_block (block_id) {
        block_id -> Smallint,
        #[max_length = 255]
        title -> Varchar,
        #[max_length = 255]
        identifier -> Varchar,
        content -> Nullable<Mediumtext>,
        creation_time -> Timestamp,
        update_time -> Timestamp,
        is_active -> Smallint,
    }
}

diesel::table! {
    cms_block_store (block_id, store_id) {
        block_id -> Smallint,
        store_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    cms_page (page_id) {
        page_id -> Smallint,
        #[max_length = 255]
        title -> Nullable<Varchar>,
        #[max_length = 255]
        page_layout -> Nullable<Varchar>,
        meta_keywords -> Nullable<Text>,
        meta_description -> Nullable<Text>,
        #[max_length = 100]
        identifier -> Nullable<Varchar>,
        #[max_length = 255]
        content_heading -> Nullable<Varchar>,
        content -> Nullable<Mediumtext>,
        creation_time -> Timestamp,
        update_time -> Timestamp,
        is_active -> Smallint,
        sort_order -> Smallint,
        layout_update_xml -> Nullable<Text>,
        #[max_length = 100]
        custom_theme -> Nullable<Varchar>,
        #[max_length = 255]
        custom_root_template -> Nullable<Varchar>,
        custom_layout_update_xml -> Nullable<Text>,
        #[max_length = 128]
        layout_update_selected -> Nullable<Varchar>,
        custom_theme_from -> Nullable<Date>,
        custom_theme_to -> Nullable<Date>,
        #[max_length = 255]
        meta_title -> Nullable<Varchar>,
    }
}

diesel::table! {
    cms_page_store (page_id, store_id) {
        page_id -> Smallint,
        store_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    core_config_data (config_id) {
        config_id -> Unsigned<Integer>,
        #[max_length = 8]
        scope -> Varchar,
        scope_id -> Integer,
        #[max_length = 255]
        path -> Varchar,
        value -> Nullable<Text>,
        updated_at -> Timestamp,
    }
}

diesel::table! {
    cron_schedule (schedule_id) {
        schedule_id -> Unsigned<Integer>,
        #[max_length = 255]
        job_code -> Varchar,
        #[max_length = 7]
        status -> Varchar,
        messages -> Nullable<Text>,
        created_at -> Timestamp,
        scheduled_at -> Nullable<Timestamp>,
        executed_at -> Nullable<Timestamp>,
        finished_at -> Nullable<Timestamp>,
    }
}

diesel::table! {
    customer_address_entity (entity_id) {
        entity_id -> Unsigned<Integer>,
        #[max_length = 50]
        increment_id -> Nullable<Varchar>,
        parent_id -> Nullable<Unsigned<Integer>>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
        is_active -> Unsigned<Smallint>,
        #[max_length = 255]
        city -> Varchar,
        #[max_length = 255]
        company -> Nullable<Varchar>,
        #[max_length = 255]
        country_id -> Varchar,
        #[max_length = 255]
        fax -> Nullable<Varchar>,
        #[max_length = 255]
        firstname -> Varchar,
        #[max_length = 255]
        lastname -> Varchar,
        #[max_length = 255]
        middlename -> Nullable<Varchar>,
        #[max_length = 255]
        postcode -> Nullable<Varchar>,
        #[max_length = 40]
        prefix -> Nullable<Varchar>,
        #[max_length = 255]
        region -> Nullable<Varchar>,
        region_id -> Nullable<Unsigned<Integer>>,
        street -> Text,
        #[max_length = 40]
        suffix -> Nullable<Varchar>,
        #[max_length = 255]
        telephone -> Varchar,
        #[max_length = 255]
        vat_id -> Nullable<Varchar>,
        vat_is_valid -> Nullable<Unsigned<Integer>>,
        #[max_length = 255]
        vat_request_date -> Nullable<Varchar>,
        #[max_length = 255]
        vat_request_id -> Nullable<Varchar>,
        vat_request_success -> Nullable<Unsigned<Integer>>,
    }
}

diesel::table! {
    customer_address_entity_datetime (value_id) {
        value_id -> Integer,
        attribute_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        value -> Nullable<Datetime>,
    }
}

diesel::table! {
    customer_address_entity_decimal (value_id) {
        value_id -> Integer,
        attribute_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        value -> Decimal,
    }
}

diesel::table! {
    customer_address_entity_int (value_id) {
        value_id -> Integer,
        attribute_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        value -> Integer,
    }
}

diesel::table! {
    customer_address_entity_text (value_id) {
        value_id -> Integer,
        attribute_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        value -> Text,
    }
}

diesel::table! {
    customer_address_entity_varchar (value_id) {
        value_id -> Integer,
        attribute_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        #[max_length = 255]
        value -> Nullable<Varchar>,
    }
}

diesel::table! {
    customer_eav_attribute (attribute_id) {
        attribute_id -> Unsigned<Smallint>,
        is_visible -> Unsigned<Smallint>,
        #[max_length = 255]
        input_filter -> Nullable<Varchar>,
        multiline_count -> Unsigned<Smallint>,
        validate_rules -> Nullable<Text>,
        is_system -> Unsigned<Smallint>,
        sort_order -> Unsigned<Integer>,
        #[max_length = 255]
        data_model -> Nullable<Varchar>,
        is_used_in_grid -> Unsigned<Smallint>,
        is_visible_in_grid -> Unsigned<Smallint>,
        is_filterable_in_grid -> Unsigned<Smallint>,
        is_searchable_in_grid -> Unsigned<Smallint>,
        grid_filter_condition_type -> Unsigned<Smallint>,
    }
}

diesel::table! {
    customer_eav_attribute_website (attribute_id, website_id) {
        attribute_id -> Unsigned<Smallint>,
        website_id -> Unsigned<Smallint>,
        is_visible -> Nullable<Unsigned<Smallint>>,
        is_required -> Nullable<Unsigned<Smallint>>,
        default_value -> Nullable<Text>,
        multiline_count -> Nullable<Unsigned<Smallint>>,
    }
}

diesel::table! {
    customer_entity (entity_id) {
        entity_id -> Unsigned<Integer>,
        website_id -> Nullable<Unsigned<Smallint>>,
        #[max_length = 255]
        email -> Nullable<Varchar>,
        group_id -> Unsigned<Smallint>,
        #[max_length = 50]
        increment_id -> Nullable<Varchar>,
        store_id -> Nullable<Unsigned<Smallint>>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
        is_active -> Unsigned<Smallint>,
        disable_auto_group_change -> Unsigned<Smallint>,
        #[max_length = 255]
        created_in -> Nullable<Varchar>,
        #[max_length = 40]
        prefix -> Nullable<Varchar>,
        #[max_length = 255]
        firstname -> Nullable<Varchar>,
        #[max_length = 255]
        middlename -> Nullable<Varchar>,
        #[max_length = 255]
        lastname -> Nullable<Varchar>,
        #[max_length = 40]
        suffix -> Nullable<Varchar>,
        dob -> Nullable<Date>,
        #[max_length = 128]
        password_hash -> Nullable<Varchar>,
        #[max_length = 128]
        rp_token -> Nullable<Varchar>,
        rp_token_created_at -> Nullable<Datetime>,
        default_billing -> Nullable<Unsigned<Integer>>,
        default_shipping -> Nullable<Unsigned<Integer>>,
        #[max_length = 50]
        taxvat -> Nullable<Varchar>,
        #[max_length = 64]
        confirmation -> Nullable<Varchar>,
        gender -> Nullable<Unsigned<Smallint>>,
        failures_num -> Nullable<Smallint>,
        first_failure -> Nullable<Timestamp>,
        lock_expires -> Nullable<Timestamp>,
        session_cutoff -> Nullable<Timestamp>,
    }
}

diesel::table! {
    customer_entity_datetime (value_id) {
        value_id -> Integer,
        attribute_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        value -> Nullable<Datetime>,
    }
}

diesel::table! {
    customer_entity_decimal (value_id) {
        value_id -> Integer,
        attribute_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        value -> Decimal,
    }
}

diesel::table! {
    customer_entity_int (value_id) {
        value_id -> Integer,
        attribute_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        value -> Integer,
    }
}

diesel::table! {
    customer_entity_text (value_id) {
        value_id -> Integer,
        attribute_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        value -> Text,
    }
}

diesel::table! {
    customer_entity_varchar (value_id) {
        value_id -> Integer,
        attribute_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        #[max_length = 255]
        value -> Nullable<Varchar>,
    }
}

diesel::table! {
    customer_form_attribute (form_code, attribute_id) {
        #[max_length = 32]
        form_code -> Varchar,
        attribute_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    customer_grid_flat (entity_id) {
        entity_id -> Unsigned<Integer>,
        name -> Nullable<Text>,
        #[max_length = 255]
        email -> Nullable<Varchar>,
        group_id -> Nullable<Integer>,
        created_at -> Nullable<Timestamp>,
        website_id -> Nullable<Integer>,
        #[max_length = 255]
        confirmation -> Nullable<Varchar>,
        created_in -> Nullable<Text>,
        dob -> Nullable<Date>,
        gender -> Nullable<Integer>,
        #[max_length = 255]
        taxvat -> Nullable<Varchar>,
        lock_expires -> Nullable<Timestamp>,
        shipping_full -> Nullable<Text>,
        billing_full -> Nullable<Text>,
        #[max_length = 255]
        billing_firstname -> Nullable<Varchar>,
        #[max_length = 255]
        billing_lastname -> Nullable<Varchar>,
        #[max_length = 255]
        billing_telephone -> Nullable<Varchar>,
        #[max_length = 255]
        billing_postcode -> Nullable<Varchar>,
        #[max_length = 255]
        billing_country_id -> Nullable<Varchar>,
        #[max_length = 255]
        billing_region -> Nullable<Varchar>,
        billing_region_id -> Nullable<Integer>,
        #[max_length = 255]
        billing_street -> Nullable<Varchar>,
        #[max_length = 255]
        billing_city -> Nullable<Varchar>,
        #[max_length = 255]
        billing_fax -> Nullable<Varchar>,
        #[max_length = 255]
        billing_vat_id -> Nullable<Varchar>,
        #[max_length = 255]
        billing_company -> Nullable<Varchar>,
    }
}

diesel::table! {
    customer_group (customer_group_id) {
        customer_group_id -> Unsigned<Integer>,
        #[max_length = 32]
        customer_group_code -> Varchar,
        tax_class_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    customer_group_excluded_website (entity_id) {
        entity_id -> Unsigned<Integer>,
        customer_group_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    customer_log (log_id) {
        log_id -> Integer,
        customer_id -> Integer,
        last_login_at -> Nullable<Timestamp>,
        last_logout_at -> Nullable<Timestamp>,
    }
}

diesel::table! {
    customer_visitor (visitor_id) {
        visitor_id -> Unsigned<Bigint>,
        customer_id -> Nullable<Integer>,
        #[max_length = 1]
        session_id -> Nullable<Varchar>,
        created_at -> Timestamp,
        last_visit_at -> Timestamp,
    }
}

diesel::table! {
    design_change (design_change_id) {
        design_change_id -> Integer,
        store_id -> Unsigned<Smallint>,
        #[max_length = 255]
        design -> Nullable<Varchar>,
        date_from -> Nullable<Date>,
        date_to -> Nullable<Date>,
    }
}

diesel::table! {
    design_config_grid_flat (entity_id) {
        entity_id -> Unsigned<Integer>,
        store_website_id -> Nullable<Integer>,
        store_group_id -> Nullable<Integer>,
        store_id -> Nullable<Integer>,
        #[max_length = 255]
        theme_theme_id -> Nullable<Varchar>,
    }
}

diesel::table! {
    directory_country (country_id) {
        #[max_length = 2]
        country_id -> Varchar,
        #[max_length = 2]
        iso2_code -> Nullable<Varchar>,
        #[max_length = 3]
        iso3_code -> Nullable<Varchar>,
    }
}

diesel::table! {
    directory_country_region (region_id) {
        region_id -> Unsigned<Integer>,
        #[max_length = 4]
        country_id -> Varchar,
        #[max_length = 32]
        code -> Nullable<Varchar>,
        #[max_length = 255]
        default_name -> Nullable<Varchar>,
    }
}

diesel::table! {
    directory_country_region_name (locale, region_id) {
        #[max_length = 16]
        locale -> Varchar,
        region_id -> Unsigned<Integer>,
        #[max_length = 255]
        name -> Nullable<Varchar>,
    }
}

diesel::table! {
    directory_currency_rate (currency_from, currency_to) {
        #[max_length = 3]
        currency_from -> Varchar,
        #[max_length = 3]
        currency_to -> Varchar,
        rate -> Decimal,
    }
}

diesel::table! {
    downloadable_link (link_id) {
        link_id -> Unsigned<Integer>,
        product_id -> Unsigned<Integer>,
        sort_order -> Unsigned<Integer>,
        number_of_downloads -> Nullable<Integer>,
        is_shareable -> Unsigned<Smallint>,
        #[max_length = 255]
        link_url -> Nullable<Varchar>,
        #[max_length = 255]
        link_file -> Nullable<Varchar>,
        #[max_length = 20]
        link_type -> Nullable<Varchar>,
        #[max_length = 255]
        sample_url -> Nullable<Varchar>,
        #[max_length = 255]
        sample_file -> Nullable<Varchar>,
        #[max_length = 20]
        sample_type -> Nullable<Varchar>,
    }
}

diesel::table! {
    downloadable_link_price (price_id) {
        price_id -> Unsigned<Integer>,
        link_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        price -> Decimal,
    }
}

diesel::table! {
    downloadable_link_purchased (purchased_id) {
        purchased_id -> Unsigned<Integer>,
        order_id -> Nullable<Unsigned<Integer>>,
        #[max_length = 50]
        order_increment_id -> Nullable<Varchar>,
        order_item_id -> Unsigned<Integer>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
        customer_id -> Nullable<Unsigned<Integer>>,
        #[max_length = 255]
        product_name -> Nullable<Varchar>,
        #[max_length = 255]
        product_sku -> Nullable<Varchar>,
        #[max_length = 255]
        link_section_title -> Nullable<Varchar>,
    }
}

diesel::table! {
    downloadable_link_purchased_item (item_id) {
        item_id -> Unsigned<Integer>,
        purchased_id -> Unsigned<Integer>,
        order_item_id -> Nullable<Unsigned<Integer>>,
        product_id -> Nullable<Unsigned<Integer>>,
        #[max_length = 255]
        link_hash -> Nullable<Varchar>,
        number_of_downloads_bought -> Unsigned<Integer>,
        number_of_downloads_used -> Unsigned<Integer>,
        link_id -> Unsigned<Integer>,
        #[max_length = 255]
        link_title -> Nullable<Varchar>,
        is_shareable -> Unsigned<Smallint>,
        #[max_length = 255]
        link_url -> Nullable<Varchar>,
        #[max_length = 255]
        link_file -> Nullable<Varchar>,
        #[max_length = 255]
        link_type -> Nullable<Varchar>,
        #[max_length = 50]
        status -> Nullable<Varchar>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

diesel::table! {
    downloadable_link_title (title_id) {
        title_id -> Unsigned<Integer>,
        link_id -> Unsigned<Integer>,
        store_id -> Unsigned<Smallint>,
        #[max_length = 255]
        title -> Nullable<Varchar>,
    }
}

diesel::table! {
    downloadable_sample (sample_id) {
        sample_id -> Unsigned<Integer>,
        product_id -> Unsigned<Integer>,
        #[max_length = 255]
        sample_url -> Nullable<Varchar>,
        #[max_length = 255]
        sample_file -> Nullable<Varchar>,
        #[max_length = 20]
        sample_type -> Nullable<Varchar>,
        sort_order -> Unsigned<Integer>,
    }
}

diesel::table! {
    downloadable_sample_title (title_id) {
        title_id -> Unsigned<Integer>,
        sample_id -> Unsigned<Integer>,
        store_id -> Unsigned<Smallint>,
        #[max_length = 255]
        title -> Nullable<Varchar>,
    }
}

diesel::table! {
    eav_attribute (attribute_id) {
        attribute_id -> Unsigned<Smallint>,
        entity_type_id -> Unsigned<Smallint>,
        #[max_length = 255]
        attribute_code -> Varchar,
        #[max_length = 255]
        attribute_model -> Nullable<Varchar>,
        #[max_length = 255]
        backend_model -> Nullable<Varchar>,
        #[max_length = 8]
        backend_type -> Varchar,
        #[max_length = 255]
        backend_table -> Nullable<Varchar>,
        #[max_length = 255]
        frontend_model -> Nullable<Varchar>,
        #[max_length = 50]
        frontend_input -> Nullable<Varchar>,
        #[max_length = 255]
        frontend_label -> Nullable<Varchar>,
        #[max_length = 255]
        frontend_class -> Nullable<Varchar>,
        #[max_length = 255]
        source_model -> Nullable<Varchar>,
        is_required -> Unsigned<Smallint>,
        is_user_defined -> Unsigned<Smallint>,
        default_value -> Nullable<Text>,
        is_unique -> Unsigned<Smallint>,
        #[max_length = 255]
        note -> Nullable<Varchar>,
    }
}

diesel::table! {
    eav_attribute_group (attribute_group_id) {
        attribute_group_id -> Unsigned<Smallint>,
        attribute_set_id -> Unsigned<Smallint>,
        #[max_length = 255]
        attribute_group_name -> Nullable<Varchar>,
        sort_order -> Smallint,
        default_id -> Nullable<Unsigned<Smallint>>,
        #[max_length = 255]
        attribute_group_code -> Varchar,
        #[max_length = 255]
        tab_group_code -> Nullable<Varchar>,
    }
}

diesel::table! {
    eav_attribute_label (attribute_label_id) {
        attribute_label_id -> Unsigned<Integer>,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        #[max_length = 255]
        value -> Nullable<Varchar>,
    }
}

diesel::table! {
    eav_attribute_option (option_id) {
        option_id -> Unsigned<Integer>,
        attribute_id -> Unsigned<Smallint>,
        sort_order -> Unsigned<Smallint>,
    }
}

diesel::table! {
    eav_attribute_option_swatch (swatch_id) {
        swatch_id -> Unsigned<Integer>,
        option_id -> Unsigned<Integer>,
        store_id -> Unsigned<Smallint>,
        #[sql_name = "type"]
        type_ -> Unsigned<Smallint>,
        #[max_length = 255]
        value -> Nullable<Varchar>,
    }
}

diesel::table! {
    eav_attribute_option_value (value_id) {
        value_id -> Unsigned<Integer>,
        option_id -> Unsigned<Integer>,
        store_id -> Unsigned<Smallint>,
        #[max_length = 255]
        value -> Nullable<Varchar>,
    }
}

diesel::table! {
    eav_attribute_set (attribute_set_id) {
        attribute_set_id -> Unsigned<Smallint>,
        entity_type_id -> Unsigned<Smallint>,
        #[max_length = 255]
        attribute_set_name -> Nullable<Varchar>,
        sort_order -> Smallint,
    }
}

diesel::table! {
    eav_entity (entity_id) {
        entity_id -> Unsigned<Integer>,
        entity_type_id -> Unsigned<Smallint>,
        attribute_set_id -> Unsigned<Smallint>,
        #[max_length = 50]
        increment_id -> Nullable<Varchar>,
        parent_id -> Unsigned<Integer>,
        store_id -> Unsigned<Smallint>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
        is_active -> Unsigned<Smallint>,
    }
}

diesel::table! {
    eav_entity_attribute (entity_attribute_id) {
        entity_attribute_id -> Unsigned<Integer>,
        entity_type_id -> Unsigned<Smallint>,
        attribute_set_id -> Unsigned<Smallint>,
        attribute_group_id -> Unsigned<Smallint>,
        attribute_id -> Unsigned<Smallint>,
        sort_order -> Smallint,
    }
}

diesel::table! {
    eav_entity_datetime (value_id) {
        value_id -> Integer,
        entity_type_id -> Unsigned<Smallint>,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        value -> Nullable<Datetime>,
    }
}

diesel::table! {
    eav_entity_decimal (value_id) {
        value_id -> Integer,
        entity_type_id -> Unsigned<Smallint>,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        value -> Decimal,
    }
}

diesel::table! {
    eav_entity_int (value_id) {
        value_id -> Integer,
        entity_type_id -> Unsigned<Smallint>,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        value -> Integer,
    }
}

diesel::table! {
    eav_entity_store (entity_store_id) {
        entity_store_id -> Unsigned<Integer>,
        entity_type_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        #[max_length = 20]
        increment_prefix -> Nullable<Varchar>,
        #[max_length = 50]
        increment_last_id -> Nullable<Varchar>,
    }
}

diesel::table! {
    eav_entity_text (value_id) {
        value_id -> Integer,
        entity_type_id -> Unsigned<Smallint>,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        value -> Text,
    }
}

diesel::table! {
    eav_entity_type (entity_type_id) {
        entity_type_id -> Unsigned<Smallint>,
        #[max_length = 50]
        entity_type_code -> Varchar,
        #[max_length = 255]
        entity_model -> Varchar,
        #[max_length = 255]
        attribute_model -> Nullable<Varchar>,
        #[max_length = 255]
        entity_table -> Nullable<Varchar>,
        #[max_length = 255]
        value_table_prefix -> Nullable<Varchar>,
        #[max_length = 255]
        entity_id_field -> Nullable<Varchar>,
        is_data_sharing -> Unsigned<Smallint>,
        #[max_length = 100]
        data_sharing_key -> Nullable<Varchar>,
        default_attribute_set_id -> Unsigned<Smallint>,
        #[max_length = 255]
        increment_model -> Nullable<Varchar>,
        increment_per_store -> Unsigned<Smallint>,
        increment_pad_length -> Unsigned<Smallint>,
        #[max_length = 1]
        increment_pad_char -> Varchar,
        #[max_length = 255]
        additional_attribute_table -> Nullable<Varchar>,
        #[max_length = 255]
        entity_attribute_collection -> Nullable<Varchar>,
    }
}

diesel::table! {
    eav_entity_varchar (value_id) {
        value_id -> Integer,
        entity_type_id -> Unsigned<Smallint>,
        attribute_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        #[max_length = 255]
        value -> Nullable<Varchar>,
    }
}

diesel::table! {
    eav_form_element (element_id) {
        element_id -> Unsigned<Integer>,
        type_id -> Unsigned<Smallint>,
        fieldset_id -> Nullable<Unsigned<Smallint>>,
        attribute_id -> Unsigned<Smallint>,
        sort_order -> Integer,
    }
}

diesel::table! {
    eav_form_fieldset (fieldset_id) {
        fieldset_id -> Unsigned<Smallint>,
        type_id -> Unsigned<Smallint>,
        #[max_length = 64]
        code -> Varchar,
        sort_order -> Integer,
    }
}

diesel::table! {
    eav_form_fieldset_label (fieldset_id, store_id) {
        fieldset_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        #[max_length = 255]
        label -> Varchar,
    }
}

diesel::table! {
    eav_form_type (type_id) {
        type_id -> Unsigned<Smallint>,
        #[max_length = 64]
        code -> Varchar,
        #[max_length = 255]
        label -> Varchar,
        is_system -> Unsigned<Smallint>,
        #[max_length = 64]
        theme -> Nullable<Varchar>,
        store_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    eav_form_type_entity (type_id, entity_type_id) {
        type_id -> Unsigned<Smallint>,
        entity_type_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    email_template (template_id) {
        template_id -> Unsigned<Integer>,
        #[max_length = 150]
        template_code -> Varchar,
        template_text -> Text,
        template_styles -> Nullable<Text>,
        template_type -> Nullable<Unsigned<Integer>>,
        #[max_length = 200]
        template_subject -> Varchar,
        #[max_length = 200]
        template_sender_name -> Nullable<Varchar>,
        #[max_length = 200]
        template_sender_email -> Nullable<Varchar>,
        added_at -> Timestamp,
        modified_at -> Timestamp,
        #[max_length = 200]
        orig_template_code -> Nullable<Varchar>,
        orig_template_variables -> Nullable<Text>,
        is_legacy -> Bool,
    }
}

diesel::table! {
    flag (flag_id) {
        flag_id -> Unsigned<Integer>,
        #[max_length = 255]
        flag_code -> Varchar,
        state -> Unsigned<Smallint>,
        flag_data -> Nullable<Mediumtext>,
        last_update -> Timestamp,
    }
}

diesel::table! {
    gift_message (gift_message_id) {
        gift_message_id -> Unsigned<Integer>,
        customer_id -> Unsigned<Integer>,
        #[max_length = 255]
        sender -> Nullable<Varchar>,
        #[max_length = 255]
        recipient -> Nullable<Varchar>,
        message -> Nullable<Text>,
    }
}

diesel::table! {
    googleoptimizer_code (code_id) {
        code_id -> Unsigned<Integer>,
        entity_id -> Unsigned<Integer>,
        #[max_length = 50]
        entity_type -> Nullable<Varchar>,
        store_id -> Unsigned<Smallint>,
        experiment_script -> Nullable<Text>,
    }
}

diesel::table! {
    import_history (history_id) {
        history_id -> Unsigned<Integer>,
        started_at -> Timestamp,
        user_id -> Unsigned<Integer>,
        #[max_length = 255]
        imported_file -> Nullable<Varchar>,
        #[max_length = 255]
        execution_time -> Nullable<Varchar>,
        #[max_length = 255]
        summary -> Nullable<Varchar>,
        #[max_length = 255]
        error_file -> Varchar,
    }
}

diesel::table! {
    importexport_importdata (id) {
        id -> Unsigned<Integer>,
        #[max_length = 50]
        entity -> Varchar,
        #[max_length = 10]
        behavior -> Varchar,
        data -> Nullable<Longtext>,
        is_processed -> Bool,
        updated_at -> Timestamp,
    }
}

diesel::table! {
    indexer_state (state_id) {
        state_id -> Unsigned<Integer>,
        #[max_length = 255]
        indexer_id -> Nullable<Varchar>,
        #[max_length = 16]
        status -> Nullable<Varchar>,
        updated -> Nullable<Datetime>,
        #[max_length = 32]
        hash_config -> Varchar,
    }
}

diesel::table! {
    integration (integration_id) {
        integration_id -> Unsigned<Integer>,
        #[max_length = 255]
        name -> Varchar,
        #[max_length = 255]
        email -> Varchar,
        #[max_length = 255]
        endpoint -> Nullable<Varchar>,
        status -> Unsigned<Smallint>,
        consumer_id -> Nullable<Unsigned<Integer>>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
        setup_type -> Unsigned<Smallint>,
        #[max_length = 255]
        identity_link_url -> Nullable<Varchar>,
    }
}

diesel::table! {
    jwt_auth_revoked (user_type_id, user_id) {
        user_type_id -> Unsigned<Integer>,
        user_id -> Unsigned<Integer>,
        revoke_before -> Unsigned<Bigint>,
    }
}

diesel::table! {
    layout_link (layout_link_id) {
        layout_link_id -> Unsigned<Integer>,
        store_id -> Unsigned<Smallint>,
        theme_id -> Unsigned<Integer>,
        layout_update_id -> Unsigned<Integer>,
        is_temporary -> Bool,
    }
}

diesel::table! {
    layout_update (layout_update_id) {
        layout_update_id -> Unsigned<Integer>,
        #[max_length = 255]
        handle -> Nullable<Varchar>,
        xml -> Nullable<Text>,
        sort_order -> Smallint,
        updated_at -> Nullable<Timestamp>,
    }
}

diesel::table! {
    login_as_customer (secret) {
        #[max_length = 64]
        secret -> Varchar,
        customer_id -> Integer,
        admin_id -> Integer,
        created_at -> Nullable<Timestamp>,
    }
}

diesel::table! {
    login_as_customer_assistance_allowed (customer_id) {
        customer_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    magento_acknowledged_bulk (id) {
        id -> Unsigned<Integer>,
        #[max_length = 39]
        bulk_uuid -> Nullable<Varbinary>,
    }
}

diesel::table! {
    magento_bulk (id) {
        id -> Unsigned<Integer>,
        #[max_length = 39]
        uuid -> Nullable<Varbinary>,
        user_id -> Nullable<Unsigned<Integer>>,
        user_type -> Nullable<Integer>,
        #[max_length = 255]
        description -> Nullable<Varchar>,
        operation_count -> Unsigned<Integer>,
        start_time -> Timestamp,
    }
}

diesel::table! {
    magento_login_as_customer_log (log_id) {
        log_id -> Integer,
        time -> Nullable<Timestamp>,
        user_id -> Nullable<Unsigned<Integer>>,
        #[max_length = 40]
        user_name -> Nullable<Varchar>,
        customer_id -> Nullable<Unsigned<Integer>>,
        #[max_length = 40]
        customer_email -> Nullable<Varchar>,
    }
}

diesel::table! {
    magento_operation (id) {
        id -> Unsigned<Integer>,
        operation_key -> Nullable<Unsigned<Integer>>,
        #[max_length = 39]
        bulk_uuid -> Nullable<Varbinary>,
        #[max_length = 255]
        topic_name -> Nullable<Varchar>,
        serialized_data -> Nullable<Blob>,
        result_serialized_data -> Nullable<Blob>,
        status -> Nullable<Smallint>,
        error_code -> Nullable<Smallint>,
        #[max_length = 255]
        result_message -> Nullable<Varchar>,
        started_at -> Nullable<Timestamp>,
    }
}

diesel::table! {
    media_content_asset (entity_type, entity_id, field, asset_id) {
        asset_id -> Unsigned<Integer>,
        #[max_length = 255]
        entity_type -> Varchar,
        #[max_length = 255]
        entity_id -> Varchar,
        #[max_length = 255]
        field -> Varchar,
    }
}

diesel::table! {
    media_gallery_asset (id) {
        id -> Unsigned<Integer>,
        path -> Nullable<Text>,
        #[max_length = 255]
        title -> Nullable<Varchar>,
        description -> Nullable<Text>,
        #[max_length = 255]
        source -> Nullable<Varchar>,
        #[max_length = 255]
        hash -> Nullable<Varchar>,
        #[max_length = 255]
        content_type -> Nullable<Varchar>,
        width -> Unsigned<Integer>,
        height -> Unsigned<Integer>,
        size -> Unsigned<Integer>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

diesel::table! {
    media_gallery_asset_keyword (keyword_id, asset_id) {
        keyword_id -> Unsigned<Integer>,
        asset_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    media_gallery_keyword (id) {
        id -> Unsigned<Integer>,
        #[max_length = 255]
        keyword -> Varchar,
    }
}

diesel::table! {
    mview_state (state_id) {
        state_id -> Unsigned<Integer>,
        #[max_length = 255]
        view_id -> Nullable<Varchar>,
        #[max_length = 16]
        mode -> Nullable<Varchar>,
        #[max_length = 16]
        status -> Nullable<Varchar>,
        updated -> Nullable<Datetime>,
        version_id -> Nullable<Unsigned<Integer>>,
    }
}

diesel::table! {
    newsletter_problem (problem_id) {
        problem_id -> Unsigned<Integer>,
        subscriber_id -> Nullable<Unsigned<Integer>>,
        queue_id -> Unsigned<Integer>,
        problem_error_code -> Nullable<Unsigned<Integer>>,
        #[max_length = 200]
        problem_error_text -> Nullable<Varchar>,
    }
}

diesel::table! {
    newsletter_queue (queue_id) {
        queue_id -> Unsigned<Integer>,
        template_id -> Unsigned<Integer>,
        newsletter_type -> Nullable<Integer>,
        newsletter_text -> Nullable<Text>,
        newsletter_styles -> Nullable<Text>,
        #[max_length = 200]
        newsletter_subject -> Nullable<Varchar>,
        #[max_length = 200]
        newsletter_sender_name -> Nullable<Varchar>,
        #[max_length = 200]
        newsletter_sender_email -> Nullable<Varchar>,
        queue_status -> Unsigned<Integer>,
        queue_start_at -> Nullable<Timestamp>,
        queue_finish_at -> Nullable<Timestamp>,
    }
}

diesel::table! {
    newsletter_queue_link (queue_link_id) {
        queue_link_id -> Unsigned<Integer>,
        queue_id -> Unsigned<Integer>,
        subscriber_id -> Unsigned<Integer>,
        letter_sent_at -> Nullable<Timestamp>,
    }
}

diesel::table! {
    newsletter_queue_store_link (queue_id, store_id) {
        queue_id -> Unsigned<Integer>,
        store_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    newsletter_subscriber (subscriber_id) {
        subscriber_id -> Unsigned<Integer>,
        store_id -> Nullable<Unsigned<Smallint>>,
        change_status_at -> Nullable<Timestamp>,
        customer_id -> Unsigned<Integer>,
        #[max_length = 150]
        subscriber_email -> Nullable<Varchar>,
        subscriber_status -> Integer,
        #[max_length = 32]
        subscriber_confirm_code -> Nullable<Varchar>,
    }
}

diesel::table! {
    newsletter_template (template_id) {
        template_id -> Unsigned<Integer>,
        #[max_length = 150]
        template_code -> Nullable<Varchar>,
        template_text -> Nullable<Text>,
        template_styles -> Nullable<Text>,
        template_type -> Nullable<Unsigned<Integer>>,
        #[max_length = 200]
        template_subject -> Nullable<Varchar>,
        #[max_length = 200]
        template_sender_name -> Nullable<Varchar>,
        #[max_length = 200]
        template_sender_email -> Nullable<Varchar>,
        template_actual -> Nullable<Unsigned<Smallint>>,
        added_at -> Nullable<Timestamp>,
        modified_at -> Nullable<Timestamp>,
        is_legacy -> Bool,
    }
}

diesel::table! {
    oauth_consumer (entity_id) {
        entity_id -> Unsigned<Integer>,
        created_at -> Timestamp,
        updated_at -> Nullable<Timestamp>,
        #[max_length = 255]
        name -> Varchar,
        #[max_length = 32]
        key -> Varchar,
        #[max_length = 128]
        secret -> Varchar,
        callback_url -> Nullable<Text>,
        rejected_callback_url -> Text,
    }
}

diesel::table! {
    oauth_nonce (nonce, consumer_id) {
        #[max_length = 32]
        nonce -> Varchar,
        timestamp -> Unsigned<Integer>,
        consumer_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    password_reset_request_event (id) {
        id -> Unsigned<Integer>,
        request_type -> Unsigned<Smallint>,
        #[max_length = 255]
        account_reference -> Nullable<Varchar>,
        created_at -> Timestamp,
        #[max_length = 15]
        ip -> Varchar,
    }
}

diesel::table! {
    patch_list (patch_id) {
        patch_id -> Integer,
        #[max_length = 1024]
        patch_name -> Varchar,
    }
}

diesel::table! {
    paypal_billing_agreement (agreement_id) {
        agreement_id -> Unsigned<Integer>,
        customer_id -> Unsigned<Integer>,
        #[max_length = 32]
        method_code -> Varchar,
        #[max_length = 32]
        reference_id -> Varchar,
        #[max_length = 20]
        status -> Varchar,
        created_at -> Timestamp,
        updated_at -> Nullable<Timestamp>,
        store_id -> Nullable<Unsigned<Smallint>>,
        #[max_length = 255]
        agreement_label -> Nullable<Varchar>,
    }
}

diesel::table! {
    paypal_billing_agreement_order (agreement_id, order_id) {
        agreement_id -> Unsigned<Integer>,
        order_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    paypal_cert (cert_id) {
        cert_id -> Unsigned<Smallint>,
        website_id -> Unsigned<Smallint>,
        content -> Nullable<Text>,
        updated_at -> Nullable<Timestamp>,
    }
}

diesel::table! {
    paypal_payment_transaction (transaction_id) {
        transaction_id -> Unsigned<Integer>,
        #[max_length = 100]
        txn_id -> Nullable<Varchar>,
        additional_information -> Nullable<Blob>,
        created_at -> Nullable<Timestamp>,
    }
}

diesel::table! {
    paypal_settlement_report (report_id) {
        report_id -> Unsigned<Integer>,
        report_date -> Nullable<Date>,
        #[max_length = 64]
        account_id -> Nullable<Varchar>,
        #[max_length = 24]
        filename -> Nullable<Varchar>,
        last_modified -> Nullable<Timestamp>,
    }
}

diesel::table! {
    paypal_settlement_report_row (row_id) {
        row_id -> Unsigned<Integer>,
        report_id -> Unsigned<Integer>,
        #[max_length = 19]
        transaction_id -> Nullable<Varchar>,
        #[max_length = 127]
        invoice_id -> Nullable<Varchar>,
        #[max_length = 19]
        paypal_reference_id -> Nullable<Varchar>,
        #[max_length = 3]
        paypal_reference_id_type -> Nullable<Varchar>,
        #[max_length = 5]
        transaction_event_code -> Nullable<Varchar>,
        transaction_initiation_date -> Nullable<Timestamp>,
        transaction_completion_date -> Nullable<Timestamp>,
        #[max_length = 2]
        transaction_debit_or_credit -> Varchar,
        gross_transaction_amount -> Decimal,
        #[max_length = 3]
        gross_transaction_currency -> Nullable<Varchar>,
        #[max_length = 2]
        fee_debit_or_credit -> Nullable<Varchar>,
        fee_amount -> Decimal,
        #[max_length = 3]
        fee_currency -> Nullable<Varchar>,
        #[max_length = 255]
        custom_field -> Nullable<Varchar>,
        #[max_length = 127]
        consumer_id -> Nullable<Varchar>,
        #[max_length = 255]
        payment_tracking_id -> Nullable<Varchar>,
        #[max_length = 50]
        store_id -> Nullable<Varchar>,
    }
}

diesel::table! {
    persistent_session (persistent_id) {
        persistent_id -> Unsigned<Integer>,
        #[max_length = 50]
        key -> Varchar,
        customer_id -> Nullable<Unsigned<Integer>>,
        website_id -> Unsigned<Smallint>,
        info -> Nullable<Text>,
        updated_at -> Timestamp,
    }
}

diesel::table! {
    product_alert_price (alert_price_id) {
        alert_price_id -> Unsigned<Integer>,
        customer_id -> Unsigned<Integer>,
        product_id -> Unsigned<Integer>,
        price -> Decimal,
        website_id -> Unsigned<Smallint>,
        store_id -> Nullable<Unsigned<Smallint>>,
        add_date -> Timestamp,
        last_send_date -> Nullable<Timestamp>,
        send_count -> Unsigned<Smallint>,
        status -> Unsigned<Smallint>,
    }
}

diesel::table! {
    product_alert_stock (alert_stock_id) {
        alert_stock_id -> Unsigned<Integer>,
        customer_id -> Unsigned<Integer>,
        product_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        store_id -> Nullable<Unsigned<Smallint>>,
        add_date -> Timestamp,
        send_date -> Nullable<Timestamp>,
        send_count -> Unsigned<Smallint>,
        status -> Unsigned<Smallint>,
    }
}

diesel::table! {
    queue (id) {
        id -> Unsigned<Integer>,
        #[max_length = 255]
        name -> Nullable<Varchar>,
    }
}

diesel::table! {
    queue_lock (id) {
        id -> Unsigned<Integer>,
        #[max_length = 255]
        message_code -> Varchar,
        created_at -> Timestamp,
    }
}

diesel::table! {
    queue_message (id) {
        id -> Unsigned<Bigint>,
        #[max_length = 255]
        topic_name -> Nullable<Varchar>,
        body -> Nullable<Longtext>,
    }
}

diesel::table! {
    queue_message_status (id) {
        id -> Unsigned<Bigint>,
        queue_id -> Unsigned<Integer>,
        message_id -> Unsigned<Bigint>,
        updated_at -> Timestamp,
        status -> Unsigned<Smallint>,
        number_of_trials -> Unsigned<Smallint>,
    }
}

diesel::table! {
    quote (entity_id) {
        entity_id -> Unsigned<Integer>,
        store_id -> Unsigned<Smallint>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
        converted_at -> Nullable<Timestamp>,
        is_active -> Nullable<Unsigned<Smallint>>,
        is_virtual -> Nullable<Unsigned<Smallint>>,
        is_multi_shipping -> Nullable<Unsigned<Smallint>>,
        items_count -> Nullable<Unsigned<Integer>>,
        items_qty -> Nullable<Decimal>,
        orig_order_id -> Nullable<Unsigned<Integer>>,
        store_to_base_rate -> Nullable<Decimal>,
        store_to_quote_rate -> Nullable<Decimal>,
        #[max_length = 255]
        base_currency_code -> Nullable<Varchar>,
        #[max_length = 255]
        store_currency_code -> Nullable<Varchar>,
        #[max_length = 255]
        quote_currency_code -> Nullable<Varchar>,
        grand_total -> Nullable<Decimal>,
        base_grand_total -> Nullable<Decimal>,
        #[max_length = 255]
        checkout_method -> Nullable<Varchar>,
        customer_id -> Nullable<Unsigned<Integer>>,
        customer_tax_class_id -> Nullable<Unsigned<Integer>>,
        customer_group_id -> Nullable<Unsigned<Integer>>,
        #[max_length = 255]
        customer_email -> Nullable<Varchar>,
        #[max_length = 40]
        customer_prefix -> Nullable<Varchar>,
        #[max_length = 255]
        customer_firstname -> Nullable<Varchar>,
        #[max_length = 40]
        customer_middlename -> Nullable<Varchar>,
        #[max_length = 255]
        customer_lastname -> Nullable<Varchar>,
        #[max_length = 40]
        customer_suffix -> Nullable<Varchar>,
        customer_dob -> Nullable<Datetime>,
        customer_note -> Nullable<Text>,
        customer_note_notify -> Nullable<Unsigned<Smallint>>,
        customer_is_guest -> Nullable<Unsigned<Smallint>>,
        #[max_length = 45]
        remote_ip -> Nullable<Varchar>,
        #[max_length = 255]
        applied_rule_ids -> Nullable<Varchar>,
        #[max_length = 64]
        reserved_order_id -> Nullable<Varchar>,
        #[max_length = 255]
        password_hash -> Nullable<Varchar>,
        #[max_length = 255]
        coupon_code -> Nullable<Varchar>,
        #[max_length = 255]
        global_currency_code -> Nullable<Varchar>,
        base_to_global_rate -> Nullable<Decimal>,
        base_to_quote_rate -> Nullable<Decimal>,
        #[max_length = 255]
        customer_taxvat -> Nullable<Varchar>,
        #[max_length = 255]
        customer_gender -> Nullable<Varchar>,
        subtotal -> Nullable<Decimal>,
        base_subtotal -> Nullable<Decimal>,
        subtotal_with_discount -> Nullable<Decimal>,
        base_subtotal_with_discount -> Nullable<Decimal>,
        is_changed -> Nullable<Unsigned<Integer>>,
        trigger_recollect -> Smallint,
        ext_shipping_info -> Nullable<Text>,
        gift_message_id -> Nullable<Integer>,
        is_persistent -> Nullable<Unsigned<Smallint>>,
    }
}

diesel::table! {
    quote_address (address_id) {
        address_id -> Unsigned<Integer>,
        quote_id -> Unsigned<Integer>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
        customer_id -> Nullable<Unsigned<Integer>>,
        save_in_address_book -> Nullable<Smallint>,
        customer_address_id -> Nullable<Unsigned<Integer>>,
        #[max_length = 10]
        address_type -> Nullable<Varchar>,
        #[max_length = 255]
        email -> Nullable<Varchar>,
        #[max_length = 40]
        prefix -> Nullable<Varchar>,
        #[max_length = 255]
        firstname -> Nullable<Varchar>,
        #[max_length = 40]
        middlename -> Nullable<Varchar>,
        #[max_length = 255]
        lastname -> Nullable<Varchar>,
        #[max_length = 40]
        suffix -> Nullable<Varchar>,
        #[max_length = 255]
        company -> Nullable<Varchar>,
        #[max_length = 255]
        street -> Nullable<Varchar>,
        #[max_length = 255]
        city -> Nullable<Varchar>,
        #[max_length = 255]
        region -> Nullable<Varchar>,
        region_id -> Nullable<Unsigned<Integer>>,
        #[max_length = 20]
        postcode -> Nullable<Varchar>,
        #[max_length = 30]
        country_id -> Nullable<Varchar>,
        #[max_length = 255]
        telephone -> Nullable<Varchar>,
        #[max_length = 255]
        fax -> Nullable<Varchar>,
        same_as_billing -> Unsigned<Smallint>,
        collect_shipping_rates -> Unsigned<Smallint>,
        #[max_length = 120]
        shipping_method -> Nullable<Varchar>,
        #[max_length = 255]
        shipping_description -> Nullable<Varchar>,
        weight -> Decimal,
        subtotal -> Decimal,
        base_subtotal -> Decimal,
        subtotal_with_discount -> Decimal,
        base_subtotal_with_discount -> Decimal,
        tax_amount -> Decimal,
        base_tax_amount -> Decimal,
        shipping_amount -> Decimal,
        base_shipping_amount -> Decimal,
        shipping_tax_amount -> Nullable<Decimal>,
        base_shipping_tax_amount -> Nullable<Decimal>,
        discount_amount -> Decimal,
        base_discount_amount -> Decimal,
        grand_total -> Decimal,
        base_grand_total -> Decimal,
        customer_notes -> Nullable<Text>,
        applied_taxes -> Nullable<Text>,
        #[max_length = 255]
        discount_description -> Nullable<Varchar>,
        shipping_discount_amount -> Nullable<Decimal>,
        base_shipping_discount_amount -> Nullable<Decimal>,
        subtotal_incl_tax -> Nullable<Decimal>,
        base_subtotal_total_incl_tax -> Nullable<Decimal>,
        discount_tax_compensation_amount -> Nullable<Decimal>,
        base_discount_tax_compensation_amount -> Nullable<Decimal>,
        shipping_discount_tax_compensation_amount -> Nullable<Decimal>,
        base_shipping_discount_tax_compensation_amnt -> Nullable<Decimal>,
        shipping_incl_tax -> Nullable<Decimal>,
        base_shipping_incl_tax -> Nullable<Decimal>,
        vat_id -> Nullable<Text>,
        vat_is_valid -> Nullable<Smallint>,
        vat_request_id -> Nullable<Text>,
        vat_request_date -> Nullable<Text>,
        vat_request_success -> Nullable<Smallint>,
        validated_country_code -> Nullable<Text>,
        validated_vat_number -> Nullable<Text>,
        gift_message_id -> Nullable<Integer>,
        free_shipping -> Unsigned<Smallint>,
    }
}

diesel::table! {
    quote_address_item (address_item_id) {
        address_item_id -> Unsigned<Integer>,
        parent_item_id -> Nullable<Unsigned<Integer>>,
        quote_address_id -> Unsigned<Integer>,
        quote_item_id -> Unsigned<Integer>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
        applied_rule_ids -> Nullable<Text>,
        additional_data -> Nullable<Text>,
        weight -> Nullable<Decimal>,
        qty -> Decimal,
        discount_amount -> Nullable<Decimal>,
        tax_amount -> Nullable<Decimal>,
        row_total -> Decimal,
        base_row_total -> Decimal,
        row_total_with_discount -> Nullable<Decimal>,
        base_discount_amount -> Nullable<Decimal>,
        base_tax_amount -> Nullable<Decimal>,
        row_weight -> Nullable<Decimal>,
        product_id -> Nullable<Unsigned<Integer>>,
        super_product_id -> Nullable<Unsigned<Integer>>,
        parent_product_id -> Nullable<Unsigned<Integer>>,
        store_id -> Nullable<Unsigned<Smallint>>,
        #[max_length = 255]
        sku -> Nullable<Varchar>,
        #[max_length = 255]
        image -> Nullable<Varchar>,
        #[max_length = 255]
        name -> Nullable<Varchar>,
        description -> Nullable<Text>,
        is_qty_decimal -> Nullable<Unsigned<Integer>>,
        price -> Nullable<Decimal>,
        discount_percent -> Nullable<Decimal>,
        no_discount -> Nullable<Unsigned<Integer>>,
        tax_percent -> Nullable<Decimal>,
        base_price -> Nullable<Decimal>,
        base_cost -> Nullable<Decimal>,
        price_incl_tax -> Nullable<Decimal>,
        base_price_incl_tax -> Nullable<Decimal>,
        row_total_incl_tax -> Nullable<Decimal>,
        base_row_total_incl_tax -> Nullable<Decimal>,
        discount_tax_compensation_amount -> Nullable<Decimal>,
        base_discount_tax_compensation_amount -> Nullable<Decimal>,
        gift_message_id -> Nullable<Integer>,
        free_shipping -> Nullable<Unsigned<Integer>>,
    }
}

diesel::table! {
    quote_id_mask (entity_id, quote_id) {
        entity_id -> Unsigned<Integer>,
        quote_id -> Unsigned<Integer>,
        #[max_length = 32]
        masked_id -> Nullable<Varchar>,
    }
}

diesel::table! {
    quote_item (item_id) {
        item_id -> Unsigned<Integer>,
        quote_id -> Unsigned<Integer>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
        product_id -> Nullable<Unsigned<Integer>>,
        store_id -> Nullable<Unsigned<Smallint>>,
        parent_item_id -> Nullable<Unsigned<Integer>>,
        is_virtual -> Nullable<Unsigned<Smallint>>,
        #[max_length = 255]
        sku -> Nullable<Varchar>,
        #[max_length = 255]
        name -> Nullable<Varchar>,
        description -> Nullable<Text>,
        applied_rule_ids -> Nullable<Text>,
        additional_data -> Nullable<Text>,
        is_qty_decimal -> Nullable<Unsigned<Smallint>>,
        no_discount -> Nullable<Unsigned<Smallint>>,
        weight -> Nullable<Decimal>,
        qty -> Decimal,
        price -> Decimal,
        base_price -> Decimal,
        custom_price -> Nullable<Decimal>,
        discount_percent -> Nullable<Decimal>,
        discount_amount -> Nullable<Decimal>,
        base_discount_amount -> Nullable<Decimal>,
        tax_percent -> Nullable<Decimal>,
        tax_amount -> Nullable<Decimal>,
        base_tax_amount -> Nullable<Decimal>,
        row_total -> Decimal,
        base_row_total -> Decimal,
        row_total_with_discount -> Nullable<Decimal>,
        row_weight -> Nullable<Decimal>,
        #[max_length = 255]
        product_type -> Nullable<Varchar>,
        base_tax_before_discount -> Nullable<Decimal>,
        tax_before_discount -> Nullable<Decimal>,
        original_custom_price -> Nullable<Decimal>,
        #[max_length = 255]
        redirect_url -> Nullable<Varchar>,
        base_cost -> Nullable<Decimal>,
        price_incl_tax -> Nullable<Decimal>,
        base_price_incl_tax -> Nullable<Decimal>,
        row_total_incl_tax -> Nullable<Decimal>,
        base_row_total_incl_tax -> Nullable<Decimal>,
        discount_tax_compensation_amount -> Nullable<Decimal>,
        base_discount_tax_compensation_amount -> Nullable<Decimal>,
        gift_message_id -> Nullable<Integer>,
        free_shipping -> Unsigned<Smallint>,
        weee_tax_applied -> Nullable<Text>,
        weee_tax_applied_amount -> Nullable<Decimal>,
        weee_tax_applied_row_amount -> Nullable<Decimal>,
        weee_tax_disposition -> Nullable<Decimal>,
        weee_tax_row_disposition -> Nullable<Decimal>,
        base_weee_tax_applied_amount -> Nullable<Decimal>,
        base_weee_tax_applied_row_amnt -> Nullable<Decimal>,
        base_weee_tax_disposition -> Nullable<Decimal>,
        base_weee_tax_row_disposition -> Nullable<Decimal>,
    }
}

diesel::table! {
    quote_item_option (option_id) {
        option_id -> Unsigned<Integer>,
        item_id -> Unsigned<Integer>,
        product_id -> Unsigned<Integer>,
        #[max_length = 255]
        code -> Varchar,
        value -> Nullable<Text>,
    }
}

diesel::table! {
    quote_payment (payment_id) {
        payment_id -> Unsigned<Integer>,
        quote_id -> Unsigned<Integer>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
        #[max_length = 255]
        method -> Nullable<Varchar>,
        #[max_length = 255]
        cc_type -> Nullable<Varchar>,
        #[max_length = 255]
        cc_number_enc -> Nullable<Varchar>,
        #[max_length = 255]
        cc_last_4 -> Nullable<Varchar>,
        #[max_length = 255]
        cc_cid_enc -> Nullable<Varchar>,
        #[max_length = 255]
        cc_owner -> Nullable<Varchar>,
        #[max_length = 255]
        cc_exp_month -> Nullable<Varchar>,
        cc_exp_year -> Nullable<Unsigned<Smallint>>,
        #[max_length = 255]
        cc_ss_owner -> Nullable<Varchar>,
        cc_ss_start_month -> Nullable<Unsigned<Smallint>>,
        cc_ss_start_year -> Nullable<Unsigned<Smallint>>,
        #[max_length = 255]
        po_number -> Nullable<Varchar>,
        additional_data -> Nullable<Text>,
        #[max_length = 255]
        cc_ss_issue -> Nullable<Varchar>,
        additional_information -> Nullable<Text>,
        #[max_length = 255]
        paypal_payer_id -> Nullable<Varchar>,
        #[max_length = 255]
        paypal_payer_status -> Nullable<Varchar>,
        #[max_length = 255]
        paypal_correlation_id -> Nullable<Varchar>,
    }
}

diesel::table! {
    quote_shipping_rate (rate_id) {
        rate_id -> Unsigned<Integer>,
        address_id -> Unsigned<Integer>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
        #[max_length = 255]
        carrier -> Nullable<Varchar>,
        #[max_length = 255]
        carrier_title -> Nullable<Varchar>,
        #[max_length = 255]
        code -> Nullable<Varchar>,
        #[max_length = 255]
        method -> Nullable<Varchar>,
        method_description -> Nullable<Text>,
        price -> Decimal,
        error_message -> Nullable<Text>,
        method_title -> Nullable<Text>,
    }
}

diesel::table! {
    rating (rating_id) {
        rating_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Smallint>,
        #[max_length = 64]
        rating_code -> Varchar,
        position -> Unsigned<Smallint>,
        is_active -> Smallint,
    }
}

diesel::table! {
    rating_entity (entity_id) {
        entity_id -> Unsigned<Smallint>,
        #[max_length = 64]
        entity_code -> Varchar,
    }
}

diesel::table! {
    rating_option (option_id) {
        option_id -> Unsigned<Integer>,
        rating_id -> Unsigned<Smallint>,
        #[max_length = 32]
        code -> Varchar,
        value -> Unsigned<Smallint>,
        position -> Unsigned<Smallint>,
    }
}

diesel::table! {
    rating_option_vote (vote_id) {
        vote_id -> Unsigned<Bigint>,
        option_id -> Unsigned<Integer>,
        #[max_length = 16]
        remote_ip -> Varchar,
        remote_ip_long -> Bigint,
        customer_id -> Nullable<Unsigned<Integer>>,
        entity_pk_value -> Unsigned<Bigint>,
        rating_id -> Unsigned<Smallint>,
        review_id -> Nullable<Unsigned<Bigint>>,
        percent -> Smallint,
        value -> Smallint,
    }
}

diesel::table! {
    rating_option_vote_aggregated (primary_id) {
        primary_id -> Integer,
        rating_id -> Unsigned<Smallint>,
        entity_pk_value -> Unsigned<Bigint>,
        vote_count -> Unsigned<Integer>,
        vote_value_sum -> Unsigned<Integer>,
        percent -> Smallint,
        percent_approved -> Nullable<Smallint>,
        store_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    rating_store (rating_id, store_id) {
        rating_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    rating_title (rating_id, store_id) {
        rating_id -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        #[max_length = 255]
        value -> Varchar,
    }
}

diesel::table! {
    release_notification_viewer_log (id) {
        id -> Unsigned<Integer>,
        viewer_id -> Unsigned<Integer>,
        #[max_length = 16]
        last_view_version -> Varchar,
    }
}

diesel::table! {
    report_compared_product_index (index_id) {
        index_id -> Unsigned<Bigint>,
        visitor_id -> Nullable<Unsigned<Integer>>,
        customer_id -> Nullable<Unsigned<Integer>>,
        product_id -> Unsigned<Integer>,
        store_id -> Nullable<Unsigned<Smallint>>,
        added_at -> Timestamp,
    }
}

diesel::table! {
    report_event (event_id) {
        event_id -> Unsigned<Bigint>,
        logged_at -> Timestamp,
        event_type_id -> Unsigned<Smallint>,
        object_id -> Unsigned<Integer>,
        subject_id -> Unsigned<Integer>,
        subtype -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    report_event_types (event_type_id) {
        event_type_id -> Unsigned<Smallint>,
        #[max_length = 64]
        event_name -> Varchar,
        customer_login -> Unsigned<Smallint>,
    }
}

diesel::table! {
    report_viewed_product_aggregated_daily (id) {
        id -> Unsigned<Integer>,
        period -> Nullable<Date>,
        store_id -> Nullable<Unsigned<Smallint>>,
        product_id -> Nullable<Unsigned<Integer>>,
        #[max_length = 255]
        product_name -> Nullable<Varchar>,
        product_price -> Decimal,
        views_num -> Integer,
        rating_pos -> Unsigned<Smallint>,
    }
}

diesel::table! {
    report_viewed_product_aggregated_monthly (id) {
        id -> Unsigned<Integer>,
        period -> Nullable<Date>,
        store_id -> Nullable<Unsigned<Smallint>>,
        product_id -> Nullable<Unsigned<Integer>>,
        #[max_length = 255]
        product_name -> Nullable<Varchar>,
        product_price -> Decimal,
        views_num -> Integer,
        rating_pos -> Unsigned<Smallint>,
    }
}

diesel::table! {
    report_viewed_product_aggregated_yearly (id) {
        id -> Unsigned<Integer>,
        period -> Nullable<Date>,
        store_id -> Nullable<Unsigned<Smallint>>,
        product_id -> Nullable<Unsigned<Integer>>,
        #[max_length = 255]
        product_name -> Nullable<Varchar>,
        product_price -> Decimal,
        views_num -> Integer,
        rating_pos -> Unsigned<Smallint>,
    }
}

diesel::table! {
    report_viewed_product_index (index_id) {
        index_id -> Unsigned<Bigint>,
        visitor_id -> Nullable<Unsigned<Integer>>,
        customer_id -> Nullable<Unsigned<Integer>>,
        product_id -> Unsigned<Integer>,
        store_id -> Nullable<Unsigned<Smallint>>,
        added_at -> Timestamp,
    }
}

diesel::table! {
    reporting_module_status (entity_id) {
        entity_id -> Unsigned<Integer>,
        #[max_length = 255]
        name -> Nullable<Varchar>,
        #[max_length = 255]
        active -> Nullable<Varchar>,
        #[max_length = 255]
        setup_version -> Nullable<Varchar>,
        #[max_length = 255]
        state -> Nullable<Varchar>,
        updated_at -> Timestamp,
    }
}

diesel::table! {
    reporting_orders (entity_id) {
        entity_id -> Unsigned<Integer>,
        customer_id -> Nullable<Unsigned<Integer>>,
        total -> Nullable<Unsigned<Decimal>>,
        total_base -> Nullable<Unsigned<Decimal>>,
        item_count -> Unsigned<Integer>,
        updated_at -> Timestamp,
    }
}

diesel::table! {
    review (review_id) {
        review_id -> Unsigned<Bigint>,
        created_at -> Timestamp,
        entity_id -> Unsigned<Smallint>,
        entity_pk_value -> Unsigned<Integer>,
        status_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    review_detail (detail_id) {
        detail_id -> Unsigned<Bigint>,
        review_id -> Unsigned<Bigint>,
        store_id -> Nullable<Unsigned<Smallint>>,
        #[max_length = 255]
        title -> Varchar,
        detail -> Text,
        #[max_length = 128]
        nickname -> Varchar,
        customer_id -> Nullable<Unsigned<Integer>>,
    }
}

diesel::table! {
    review_entity (entity_id) {
        entity_id -> Unsigned<Smallint>,
        #[max_length = 32]
        entity_code -> Varchar,
    }
}

diesel::table! {
    review_entity_summary (primary_id) {
        primary_id -> Bigint,
        entity_pk_value -> Bigint,
        entity_type -> Smallint,
        reviews_count -> Smallint,
        rating_summary -> Smallint,
        store_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    review_status (status_id) {
        status_id -> Unsigned<Smallint>,
        #[max_length = 32]
        status_code -> Varchar,
    }
}

diesel::table! {
    review_store (review_id, store_id) {
        review_id -> Unsigned<Bigint>,
        store_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    sales_bestsellers_aggregated_daily (id) {
        id -> Unsigned<Integer>,
        period -> Nullable<Date>,
        store_id -> Nullable<Unsigned<Smallint>>,
        product_id -> Nullable<Unsigned<Integer>>,
        #[max_length = 255]
        product_name -> Nullable<Varchar>,
        product_price -> Decimal,
        qty_ordered -> Decimal,
        rating_pos -> Unsigned<Smallint>,
    }
}

diesel::table! {
    sales_bestsellers_aggregated_monthly (id) {
        id -> Unsigned<Integer>,
        period -> Nullable<Date>,
        store_id -> Nullable<Unsigned<Smallint>>,
        product_id -> Nullable<Unsigned<Integer>>,
        #[max_length = 255]
        product_name -> Nullable<Varchar>,
        product_price -> Decimal,
        qty_ordered -> Decimal,
        rating_pos -> Unsigned<Smallint>,
    }
}

diesel::table! {
    sales_bestsellers_aggregated_yearly (id) {
        id -> Unsigned<Integer>,
        period -> Nullable<Date>,
        store_id -> Nullable<Unsigned<Smallint>>,
        product_id -> Nullable<Unsigned<Integer>>,
        #[max_length = 255]
        product_name -> Nullable<Varchar>,
        product_price -> Decimal,
        qty_ordered -> Decimal,
        rating_pos -> Unsigned<Smallint>,
    }
}

diesel::table! {
    sales_creditmemo (entity_id) {
        entity_id -> Unsigned<Integer>,
        store_id -> Nullable<Unsigned<Smallint>>,
        adjustment_positive -> Nullable<Decimal>,
        base_shipping_tax_amount -> Nullable<Decimal>,
        store_to_order_rate -> Nullable<Decimal>,
        base_discount_amount -> Nullable<Decimal>,
        base_to_order_rate -> Nullable<Decimal>,
        grand_total -> Nullable<Decimal>,
        base_adjustment_negative -> Nullable<Decimal>,
        base_subtotal_incl_tax -> Nullable<Decimal>,
        shipping_amount -> Nullable<Decimal>,
        subtotal_incl_tax -> Nullable<Decimal>,
        adjustment_negative -> Nullable<Decimal>,
        base_shipping_amount -> Nullable<Decimal>,
        store_to_base_rate -> Nullable<Decimal>,
        base_to_global_rate -> Nullable<Decimal>,
        base_adjustment -> Nullable<Decimal>,
        base_subtotal -> Nullable<Decimal>,
        discount_amount -> Nullable<Decimal>,
        subtotal -> Nullable<Decimal>,
        adjustment -> Nullable<Decimal>,
        base_grand_total -> Nullable<Decimal>,
        base_adjustment_positive -> Nullable<Decimal>,
        base_tax_amount -> Nullable<Decimal>,
        shipping_tax_amount -> Nullable<Decimal>,
        tax_amount -> Nullable<Decimal>,
        order_id -> Unsigned<Integer>,
        email_sent -> Nullable<Unsigned<Smallint>>,
        send_email -> Nullable<Unsigned<Smallint>>,
        creditmemo_status -> Nullable<Integer>,
        state -> Nullable<Integer>,
        shipping_address_id -> Nullable<Integer>,
        billing_address_id -> Nullable<Integer>,
        invoice_id -> Nullable<Integer>,
        #[max_length = 3]
        store_currency_code -> Nullable<Varchar>,
        #[max_length = 3]
        order_currency_code -> Nullable<Varchar>,
        #[max_length = 3]
        base_currency_code -> Nullable<Varchar>,
        #[max_length = 3]
        global_currency_code -> Nullable<Varchar>,
        #[max_length = 255]
        transaction_id -> Nullable<Varchar>,
        #[max_length = 50]
        increment_id -> Nullable<Varchar>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
        discount_tax_compensation_amount -> Nullable<Decimal>,
        base_discount_tax_compensation_amount -> Nullable<Decimal>,
        shipping_discount_tax_compensation_amount -> Nullable<Decimal>,
        base_shipping_discount_tax_compensation_amnt -> Nullable<Decimal>,
        shipping_incl_tax -> Nullable<Decimal>,
        base_shipping_incl_tax -> Nullable<Decimal>,
        #[max_length = 255]
        discount_description -> Nullable<Varchar>,
        customer_note -> Nullable<Text>,
        customer_note_notify -> Nullable<Unsigned<Smallint>>,
    }
}

diesel::table! {
    sales_creditmemo_comment (entity_id) {
        entity_id -> Unsigned<Integer>,
        parent_id -> Unsigned<Integer>,
        is_customer_notified -> Nullable<Integer>,
        is_visible_on_front -> Unsigned<Smallint>,
        comment -> Nullable<Text>,
        created_at -> Timestamp,
    }
}

diesel::table! {
    sales_creditmemo_grid (entity_id) {
        entity_id -> Unsigned<Integer>,
        #[max_length = 50]
        increment_id -> Nullable<Varchar>,
        created_at -> Nullable<Timestamp>,
        updated_at -> Nullable<Timestamp>,
        order_id -> Unsigned<Integer>,
        #[max_length = 50]
        order_increment_id -> Nullable<Varchar>,
        order_created_at -> Nullable<Timestamp>,
        #[max_length = 255]
        billing_name -> Nullable<Varchar>,
        state -> Nullable<Integer>,
        base_grand_total -> Nullable<Decimal>,
        #[max_length = 32]
        order_status -> Nullable<Varchar>,
        store_id -> Nullable<Unsigned<Smallint>>,
        #[max_length = 255]
        billing_address -> Nullable<Varchar>,
        #[max_length = 255]
        shipping_address -> Nullable<Varchar>,
        #[max_length = 128]
        customer_name -> Varchar,
        #[max_length = 128]
        customer_email -> Nullable<Varchar>,
        customer_group_id -> Nullable<Smallint>,
        #[max_length = 32]
        payment_method -> Nullable<Varchar>,
        #[max_length = 255]
        shipping_information -> Nullable<Varchar>,
        subtotal -> Nullable<Decimal>,
        shipping_and_handling -> Nullable<Decimal>,
        adjustment_positive -> Nullable<Decimal>,
        adjustment_negative -> Nullable<Decimal>,
        order_base_grand_total -> Nullable<Decimal>,
    }
}

diesel::table! {
    sales_creditmemo_item (entity_id) {
        entity_id -> Unsigned<Integer>,
        parent_id -> Unsigned<Integer>,
        base_price -> Nullable<Decimal>,
        tax_amount -> Nullable<Decimal>,
        base_row_total -> Nullable<Decimal>,
        discount_amount -> Nullable<Decimal>,
        row_total -> Nullable<Decimal>,
        base_discount_amount -> Nullable<Decimal>,
        price_incl_tax -> Nullable<Decimal>,
        base_tax_amount -> Nullable<Decimal>,
        base_price_incl_tax -> Nullable<Decimal>,
        qty -> Nullable<Decimal>,
        base_cost -> Nullable<Decimal>,
        price -> Nullable<Decimal>,
        base_row_total_incl_tax -> Nullable<Decimal>,
        row_total_incl_tax -> Nullable<Decimal>,
        product_id -> Nullable<Integer>,
        order_item_id -> Nullable<Integer>,
        additional_data -> Nullable<Text>,
        description -> Nullable<Text>,
        #[max_length = 255]
        sku -> Nullable<Varchar>,
        #[max_length = 255]
        name -> Nullable<Varchar>,
        discount_tax_compensation_amount -> Nullable<Decimal>,
        base_discount_tax_compensation_amount -> Nullable<Decimal>,
        tax_ratio -> Nullable<Text>,
        weee_tax_applied -> Nullable<Text>,
        weee_tax_applied_amount -> Nullable<Decimal>,
        weee_tax_applied_row_amount -> Nullable<Decimal>,
        weee_tax_disposition -> Nullable<Decimal>,
        weee_tax_row_disposition -> Nullable<Decimal>,
        base_weee_tax_applied_amount -> Nullable<Decimal>,
        base_weee_tax_applied_row_amnt -> Nullable<Decimal>,
        base_weee_tax_disposition -> Nullable<Decimal>,
        base_weee_tax_row_disposition -> Nullable<Decimal>,
    }
}

diesel::table! {
    sales_invoice (entity_id) {
        entity_id -> Unsigned<Integer>,
        store_id -> Nullable<Unsigned<Smallint>>,
        base_grand_total -> Nullable<Decimal>,
        shipping_tax_amount -> Nullable<Decimal>,
        tax_amount -> Nullable<Decimal>,
        base_tax_amount -> Nullable<Decimal>,
        store_to_order_rate -> Nullable<Decimal>,
        base_shipping_tax_amount -> Nullable<Decimal>,
        base_discount_amount -> Nullable<Decimal>,
        base_to_order_rate -> Nullable<Decimal>,
        grand_total -> Nullable<Decimal>,
        shipping_amount -> Nullable<Decimal>,
        subtotal_incl_tax -> Nullable<Decimal>,
        base_subtotal_incl_tax -> Nullable<Decimal>,
        store_to_base_rate -> Nullable<Decimal>,
        base_shipping_amount -> Nullable<Decimal>,
        total_qty -> Nullable<Decimal>,
        base_to_global_rate -> Nullable<Decimal>,
        subtotal -> Nullable<Decimal>,
        base_subtotal -> Nullable<Decimal>,
        discount_amount -> Nullable<Decimal>,
        billing_address_id -> Nullable<Integer>,
        is_used_for_refund -> Nullable<Unsigned<Smallint>>,
        order_id -> Unsigned<Integer>,
        email_sent -> Nullable<Unsigned<Smallint>>,
        send_email -> Nullable<Unsigned<Smallint>>,
        can_void_flag -> Nullable<Unsigned<Smallint>>,
        state -> Nullable<Integer>,
        shipping_address_id -> Nullable<Integer>,
        #[max_length = 3]
        store_currency_code -> Nullable<Varchar>,
        #[max_length = 255]
        transaction_id -> Nullable<Varchar>,
        #[max_length = 3]
        order_currency_code -> Nullable<Varchar>,
        #[max_length = 3]
        base_currency_code -> Nullable<Varchar>,
        #[max_length = 3]
        global_currency_code -> Nullable<Varchar>,
        #[max_length = 50]
        increment_id -> Nullable<Varchar>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
        discount_tax_compensation_amount -> Nullable<Decimal>,
        base_discount_tax_compensation_amount -> Nullable<Decimal>,
        shipping_discount_tax_compensation_amount -> Nullable<Decimal>,
        base_shipping_discount_tax_compensation_amnt -> Nullable<Decimal>,
        shipping_incl_tax -> Nullable<Decimal>,
        base_shipping_incl_tax -> Nullable<Decimal>,
        base_total_refunded -> Nullable<Decimal>,
        #[max_length = 255]
        discount_description -> Nullable<Varchar>,
        customer_note -> Nullable<Text>,
        customer_note_notify -> Nullable<Unsigned<Smallint>>,
    }
}

diesel::table! {
    sales_invoice_comment (entity_id) {
        entity_id -> Unsigned<Integer>,
        parent_id -> Unsigned<Integer>,
        is_customer_notified -> Nullable<Unsigned<Smallint>>,
        is_visible_on_front -> Unsigned<Smallint>,
        comment -> Nullable<Text>,
        created_at -> Timestamp,
    }
}

diesel::table! {
    sales_invoice_grid (entity_id) {
        entity_id -> Unsigned<Integer>,
        #[max_length = 50]
        increment_id -> Nullable<Varchar>,
        state -> Nullable<Integer>,
        store_id -> Nullable<Unsigned<Smallint>>,
        #[max_length = 255]
        store_name -> Nullable<Varchar>,
        order_id -> Unsigned<Integer>,
        #[max_length = 50]
        order_increment_id -> Nullable<Varchar>,
        order_created_at -> Nullable<Timestamp>,
        #[max_length = 255]
        customer_name -> Nullable<Varchar>,
        #[max_length = 255]
        customer_email -> Nullable<Varchar>,
        customer_group_id -> Nullable<Integer>,
        #[max_length = 128]
        payment_method -> Nullable<Varchar>,
        #[max_length = 3]
        store_currency_code -> Nullable<Varchar>,
        #[max_length = 3]
        order_currency_code -> Nullable<Varchar>,
        #[max_length = 3]
        base_currency_code -> Nullable<Varchar>,
        #[max_length = 3]
        global_currency_code -> Nullable<Varchar>,
        #[max_length = 255]
        billing_name -> Nullable<Varchar>,
        #[max_length = 255]
        billing_address -> Nullable<Varchar>,
        #[max_length = 255]
        shipping_address -> Nullable<Varchar>,
        #[max_length = 255]
        shipping_information -> Nullable<Varchar>,
        subtotal -> Nullable<Decimal>,
        shipping_and_handling -> Nullable<Decimal>,
        grand_total -> Nullable<Decimal>,
        created_at -> Nullable<Timestamp>,
        updated_at -> Nullable<Timestamp>,
        base_grand_total -> Nullable<Decimal>,
    }
}

diesel::table! {
    sales_invoice_item (entity_id) {
        entity_id -> Unsigned<Integer>,
        parent_id -> Unsigned<Integer>,
        base_price -> Nullable<Decimal>,
        tax_amount -> Nullable<Decimal>,
        base_row_total -> Nullable<Decimal>,
        discount_amount -> Nullable<Decimal>,
        row_total -> Nullable<Decimal>,
        base_discount_amount -> Nullable<Decimal>,
        price_incl_tax -> Nullable<Decimal>,
        base_tax_amount -> Nullable<Decimal>,
        base_price_incl_tax -> Nullable<Decimal>,
        qty -> Nullable<Decimal>,
        base_cost -> Nullable<Decimal>,
        price -> Nullable<Decimal>,
        base_row_total_incl_tax -> Nullable<Decimal>,
        row_total_incl_tax -> Nullable<Decimal>,
        product_id -> Nullable<Integer>,
        order_item_id -> Nullable<Integer>,
        additional_data -> Nullable<Text>,
        description -> Nullable<Text>,
        #[max_length = 255]
        sku -> Nullable<Varchar>,
        #[max_length = 255]
        name -> Nullable<Varchar>,
        discount_tax_compensation_amount -> Nullable<Decimal>,
        base_discount_tax_compensation_amount -> Nullable<Decimal>,
        tax_ratio -> Nullable<Text>,
        weee_tax_applied -> Nullable<Text>,
        weee_tax_applied_amount -> Nullable<Decimal>,
        weee_tax_applied_row_amount -> Nullable<Decimal>,
        weee_tax_disposition -> Nullable<Decimal>,
        weee_tax_row_disposition -> Nullable<Decimal>,
        base_weee_tax_applied_amount -> Nullable<Decimal>,
        base_weee_tax_applied_row_amnt -> Nullable<Decimal>,
        base_weee_tax_disposition -> Nullable<Decimal>,
        base_weee_tax_row_disposition -> Nullable<Decimal>,
    }
}

diesel::table! {
    sales_invoiced_aggregated (id) {
        id -> Unsigned<Integer>,
        period -> Nullable<Date>,
        store_id -> Nullable<Unsigned<Smallint>>,
        #[max_length = 50]
        order_status -> Nullable<Varchar>,
        orders_count -> Integer,
        orders_invoiced -> Nullable<Decimal>,
        invoiced -> Nullable<Decimal>,
        invoiced_captured -> Nullable<Decimal>,
        invoiced_not_captured -> Nullable<Decimal>,
    }
}

diesel::table! {
    sales_invoiced_aggregated_order (id) {
        id -> Unsigned<Integer>,
        period -> Nullable<Date>,
        store_id -> Nullable<Unsigned<Smallint>>,
        #[max_length = 50]
        order_status -> Varchar,
        orders_count -> Integer,
        orders_invoiced -> Nullable<Decimal>,
        invoiced -> Nullable<Decimal>,
        invoiced_captured -> Nullable<Decimal>,
        invoiced_not_captured -> Nullable<Decimal>,
    }
}

diesel::table! {
    sales_payment_transaction (transaction_id) {
        transaction_id -> Unsigned<Integer>,
        parent_id -> Nullable<Unsigned<Integer>>,
        order_id -> Unsigned<Integer>,
        payment_id -> Unsigned<Integer>,
        #[max_length = 100]
        txn_id -> Nullable<Varchar>,
        #[max_length = 100]
        parent_txn_id -> Nullable<Varchar>,
        #[max_length = 15]
        txn_type -> Nullable<Varchar>,
        is_closed -> Unsigned<Smallint>,
        additional_information -> Nullable<Blob>,
        created_at -> Timestamp,
    }
}

diesel::table! {
    sales_refunded_aggregated (id) {
        id -> Unsigned<Integer>,
        period -> Nullable<Date>,
        store_id -> Nullable<Unsigned<Smallint>>,
        #[max_length = 50]
        order_status -> Varchar,
        orders_count -> Integer,
        refunded -> Nullable<Decimal>,
        online_refunded -> Nullable<Decimal>,
        offline_refunded -> Nullable<Decimal>,
    }
}

diesel::table! {
    sales_refunded_aggregated_order (id) {
        id -> Unsigned<Integer>,
        period -> Nullable<Date>,
        store_id -> Nullable<Unsigned<Smallint>>,
        #[max_length = 50]
        order_status -> Nullable<Varchar>,
        orders_count -> Integer,
        refunded -> Nullable<Decimal>,
        online_refunded -> Nullable<Decimal>,
        offline_refunded -> Nullable<Decimal>,
    }
}

diesel::table! {
    sales_sequence_meta (meta_id) {
        meta_id -> Unsigned<Integer>,
        #[max_length = 32]
        entity_type -> Varchar,
        store_id -> Unsigned<Smallint>,
        #[max_length = 64]
        sequence_table -> Varchar,
    }
}

diesel::table! {
    sales_sequence_profile (profile_id) {
        profile_id -> Unsigned<Integer>,
        meta_id -> Unsigned<Integer>,
        #[max_length = 32]
        prefix -> Nullable<Varchar>,
        #[max_length = 32]
        suffix -> Nullable<Varchar>,
        start_value -> Unsigned<Integer>,
        step -> Unsigned<Integer>,
        max_value -> Unsigned<Integer>,
        warning_value -> Unsigned<Integer>,
        is_active -> Bool,
    }
}

diesel::table! {
    sales_shipment (entity_id) {
        entity_id -> Unsigned<Integer>,
        store_id -> Nullable<Unsigned<Smallint>>,
        total_weight -> Nullable<Decimal>,
        total_qty -> Nullable<Decimal>,
        email_sent -> Nullable<Unsigned<Smallint>>,
        send_email -> Nullable<Unsigned<Smallint>>,
        order_id -> Unsigned<Integer>,
        customer_id -> Nullable<Integer>,
        shipping_address_id -> Nullable<Integer>,
        billing_address_id -> Nullable<Integer>,
        shipment_status -> Nullable<Integer>,
        #[max_length = 50]
        increment_id -> Nullable<Varchar>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
        packages -> Nullable<Text>,
        shipping_label -> Nullable<Mediumblob>,
        customer_note -> Nullable<Text>,
        customer_note_notify -> Nullable<Unsigned<Smallint>>,
    }
}

diesel::table! {
    sales_shipment_comment (entity_id) {
        entity_id -> Unsigned<Integer>,
        parent_id -> Unsigned<Integer>,
        is_customer_notified -> Nullable<Integer>,
        is_visible_on_front -> Unsigned<Smallint>,
        comment -> Nullable<Text>,
        created_at -> Timestamp,
    }
}

diesel::table! {
    sales_shipment_grid (entity_id) {
        entity_id -> Unsigned<Integer>,
        #[max_length = 50]
        increment_id -> Nullable<Varchar>,
        store_id -> Nullable<Unsigned<Smallint>>,
        #[max_length = 32]
        order_increment_id -> Varchar,
        order_id -> Unsigned<Integer>,
        order_created_at -> Timestamp,
        #[max_length = 128]
        customer_name -> Varchar,
        total_qty -> Nullable<Decimal>,
        shipment_status -> Nullable<Integer>,
        #[max_length = 32]
        order_status -> Nullable<Varchar>,
        #[max_length = 255]
        billing_address -> Nullable<Varchar>,
        #[max_length = 255]
        shipping_address -> Nullable<Varchar>,
        #[max_length = 128]
        billing_name -> Nullable<Varchar>,
        #[max_length = 128]
        shipping_name -> Nullable<Varchar>,
        #[max_length = 128]
        customer_email -> Nullable<Varchar>,
        customer_group_id -> Nullable<Integer>,
        #[max_length = 32]
        payment_method -> Nullable<Varchar>,
        #[max_length = 255]
        shipping_information -> Nullable<Varchar>,
        created_at -> Nullable<Timestamp>,
        updated_at -> Nullable<Timestamp>,
    }
}

diesel::table! {
    sales_shipment_item (entity_id) {
        entity_id -> Unsigned<Integer>,
        parent_id -> Unsigned<Integer>,
        row_total -> Nullable<Decimal>,
        price -> Nullable<Decimal>,
        weight -> Nullable<Decimal>,
        qty -> Nullable<Decimal>,
        product_id -> Nullable<Integer>,
        order_item_id -> Nullable<Integer>,
        additional_data -> Nullable<Text>,
        description -> Nullable<Text>,
        #[max_length = 255]
        name -> Nullable<Varchar>,
        #[max_length = 255]
        sku -> Nullable<Varchar>,
    }
}

diesel::table! {
    sales_shipment_track (entity_id) {
        entity_id -> Unsigned<Integer>,
        parent_id -> Unsigned<Integer>,
        weight -> Nullable<Decimal>,
        qty -> Nullable<Decimal>,
        order_id -> Unsigned<Integer>,
        track_number -> Nullable<Text>,
        description -> Nullable<Text>,
        #[max_length = 255]
        title -> Nullable<Varchar>,
        #[max_length = 32]
        carrier_code -> Nullable<Varchar>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

diesel::table! {
    sales_shipping_aggregated (id) {
        id -> Unsigned<Integer>,
        period -> Nullable<Date>,
        store_id -> Nullable<Unsigned<Smallint>>,
        #[max_length = 50]
        order_status -> Nullable<Varchar>,
        #[max_length = 255]
        shipping_description -> Nullable<Varchar>,
        orders_count -> Integer,
        total_shipping -> Nullable<Decimal>,
        total_shipping_actual -> Nullable<Decimal>,
    }
}

diesel::table! {
    sales_shipping_aggregated_order (id) {
        id -> Unsigned<Integer>,
        period -> Nullable<Date>,
        store_id -> Nullable<Unsigned<Smallint>>,
        #[max_length = 50]
        order_status -> Nullable<Varchar>,
        #[max_length = 255]
        shipping_description -> Nullable<Varchar>,
        orders_count -> Integer,
        total_shipping -> Nullable<Decimal>,
        total_shipping_actual -> Nullable<Decimal>,
    }
}

diesel::table! {
    salesrule (rule_id) {
        rule_id -> Unsigned<Integer>,
        #[max_length = 255]
        name -> Nullable<Varchar>,
        description -> Nullable<Text>,
        from_date -> Nullable<Date>,
        to_date -> Nullable<Date>,
        uses_per_customer -> Integer,
        is_active -> Smallint,
        conditions_serialized -> Nullable<Mediumtext>,
        actions_serialized -> Nullable<Mediumtext>,
        stop_rules_processing -> Smallint,
        is_advanced -> Unsigned<Smallint>,
        product_ids -> Nullable<Text>,
        sort_order -> Unsigned<Integer>,
        #[max_length = 32]
        simple_action -> Nullable<Varchar>,
        discount_amount -> Decimal,
        discount_qty -> Nullable<Decimal>,
        discount_step -> Unsigned<Integer>,
        apply_to_shipping -> Unsigned<Smallint>,
        times_used -> Unsigned<Integer>,
        is_rss -> Smallint,
        coupon_type -> Unsigned<Smallint>,
        use_auto_generation -> Smallint,
        uses_per_coupon -> Integer,
        simple_free_shipping -> Nullable<Unsigned<Smallint>>,
    }
}

diesel::table! {
    salesrule_coupon (coupon_id) {
        coupon_id -> Unsigned<Integer>,
        rule_id -> Unsigned<Integer>,
        #[max_length = 255]
        code -> Nullable<Varchar>,
        usage_limit -> Nullable<Unsigned<Integer>>,
        usage_per_customer -> Nullable<Unsigned<Integer>>,
        times_used -> Unsigned<Integer>,
        expiration_date -> Nullable<Datetime>,
        is_primary -> Nullable<Unsigned<Smallint>>,
        created_at -> Nullable<Timestamp>,
        #[sql_name = "type"]
        type_ -> Nullable<Smallint>,
    }
}

diesel::table! {
    salesrule_coupon_aggregated (id) {
        id -> Unsigned<Integer>,
        period -> Date,
        store_id -> Nullable<Unsigned<Smallint>>,
        #[max_length = 50]
        order_status -> Nullable<Varchar>,
        #[max_length = 50]
        coupon_code -> Nullable<Varchar>,
        coupon_uses -> Integer,
        subtotal_amount -> Decimal,
        discount_amount -> Decimal,
        total_amount -> Decimal,
        subtotal_amount_actual -> Decimal,
        discount_amount_actual -> Decimal,
        total_amount_actual -> Decimal,
        #[max_length = 255]
        rule_name -> Nullable<Varchar>,
    }
}

diesel::table! {
    salesrule_coupon_aggregated_order (id) {
        id -> Unsigned<Integer>,
        period -> Date,
        store_id -> Nullable<Unsigned<Smallint>>,
        #[max_length = 50]
        order_status -> Nullable<Varchar>,
        #[max_length = 50]
        coupon_code -> Nullable<Varchar>,
        coupon_uses -> Integer,
        subtotal_amount -> Decimal,
        discount_amount -> Decimal,
        total_amount -> Decimal,
        #[max_length = 255]
        rule_name -> Nullable<Varchar>,
    }
}

diesel::table! {
    salesrule_coupon_aggregated_updated (id) {
        id -> Unsigned<Integer>,
        period -> Date,
        store_id -> Nullable<Unsigned<Smallint>>,
        #[max_length = 50]
        order_status -> Nullable<Varchar>,
        #[max_length = 50]
        coupon_code -> Nullable<Varchar>,
        coupon_uses -> Integer,
        subtotal_amount -> Decimal,
        discount_amount -> Decimal,
        total_amount -> Decimal,
        subtotal_amount_actual -> Decimal,
        discount_amount_actual -> Decimal,
        total_amount_actual -> Decimal,
        #[max_length = 255]
        rule_name -> Nullable<Varchar>,
    }
}

diesel::table! {
    salesrule_coupon_usage (coupon_id, customer_id) {
        coupon_id -> Unsigned<Integer>,
        customer_id -> Unsigned<Integer>,
        times_used -> Unsigned<Integer>,
    }
}

diesel::table! {
    salesrule_customer (rule_customer_id) {
        rule_customer_id -> Unsigned<Integer>,
        rule_id -> Unsigned<Integer>,
        customer_id -> Unsigned<Integer>,
        times_used -> Unsigned<Smallint>,
    }
}

diesel::table! {
    salesrule_customer_group (rule_id, customer_group_id) {
        rule_id -> Unsigned<Integer>,
        customer_group_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    salesrule_label (label_id) {
        label_id -> Unsigned<Integer>,
        rule_id -> Unsigned<Integer>,
        store_id -> Unsigned<Smallint>,
        #[max_length = 255]
        label -> Nullable<Varchar>,
    }
}

diesel::table! {
    salesrule_product_attribute (rule_id, website_id, customer_group_id, attribute_id) {
        rule_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
        customer_group_id -> Unsigned<Integer>,
        attribute_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    salesrule_website (rule_id, website_id) {
        rule_id -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    search_query (query_id) {
        query_id -> Unsigned<Integer>,
        #[max_length = 255]
        query_text -> Nullable<Varchar>,
        num_results -> Unsigned<Integer>,
        popularity -> Unsigned<Integer>,
        #[max_length = 255]
        redirect -> Nullable<Varchar>,
        store_id -> Unsigned<Smallint>,
        display_in_terms -> Smallint,
        is_active -> Nullable<Smallint>,
        is_processed -> Nullable<Smallint>,
        updated_at -> Timestamp,
    }
}

diesel::table! {
    search_synonyms (group_id) {
        group_id -> Unsigned<Bigint>,
        synonyms -> Text,
        store_id -> Unsigned<Smallint>,
        website_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    sendfriend_log (log_id) {
        log_id -> Unsigned<Integer>,
        ip -> Unsigned<Bigint>,
        time -> Unsigned<Integer>,
        website_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    sequence_creditmemo_0 (sequence_value) {
        sequence_value -> Unsigned<Integer>,
    }
}

diesel::table! {
    sequence_creditmemo_1 (sequence_value) {
        sequence_value -> Unsigned<Integer>,
    }
}

diesel::table! {
    sequence_invoice_0 (sequence_value) {
        sequence_value -> Unsigned<Integer>,
    }
}

diesel::table! {
    sequence_invoice_1 (sequence_value) {
        sequence_value -> Unsigned<Integer>,
    }
}

diesel::table! {
    sequence_order_0 (sequence_value) {
        sequence_value -> Unsigned<Integer>,
    }
}

diesel::table! {
    sequence_order_1 (sequence_value) {
        sequence_value -> Unsigned<Integer>,
    }
}

diesel::table! {
    sequence_shipment_0 (sequence_value) {
        sequence_value -> Unsigned<Integer>,
    }
}

diesel::table! {
    sequence_shipment_1 (sequence_value) {
        sequence_value -> Unsigned<Integer>,
    }
}

diesel::table! {
    session (session_id) {
        #[max_length = 255]
        session_id -> Varchar,
        session_expires -> Unsigned<Integer>,
        session_data -> Mediumblob,
    }
}

diesel::table! {
    setup_module (module) {
        #[max_length = 50]
        module -> Varchar,
        #[max_length = 50]
        schema_version -> Nullable<Varchar>,
        #[max_length = 50]
        data_version -> Nullable<Varchar>,
    }
}

diesel::table! {
    shipping_tablerate (pk) {
        pk -> Unsigned<Integer>,
        website_id -> Integer,
        #[max_length = 4]
        dest_country_id -> Varchar,
        dest_region_id -> Integer,
        #[max_length = 10]
        dest_zip -> Varchar,
        #[max_length = 30]
        condition_name -> Varchar,
        condition_value -> Decimal,
        price -> Decimal,
        cost -> Decimal,
    }
}

diesel::table! {
    sitemap (sitemap_id) {
        sitemap_id -> Unsigned<Integer>,
        #[max_length = 32]
        sitemap_type -> Nullable<Varchar>,
        #[max_length = 32]
        sitemap_filename -> Nullable<Varchar>,
        #[max_length = 255]
        sitemap_path -> Nullable<Varchar>,
        sitemap_time -> Nullable<Timestamp>,
        store_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    store (store_id) {
        store_id -> Unsigned<Smallint>,
        #[max_length = 32]
        code -> Nullable<Varchar>,
        website_id -> Unsigned<Smallint>,
        group_id -> Unsigned<Smallint>,
        #[max_length = 255]
        name -> Varchar,
        sort_order -> Unsigned<Smallint>,
        is_active -> Unsigned<Smallint>,
    }
}

diesel::table! {
    store_group (group_id) {
        group_id -> Unsigned<Smallint>,
        website_id -> Unsigned<Smallint>,
        #[max_length = 255]
        name -> Varchar,
        root_category_id -> Unsigned<Integer>,
        default_store_id -> Unsigned<Smallint>,
        #[max_length = 32]
        code -> Nullable<Varchar>,
    }
}

diesel::table! {
    store_website (website_id) {
        website_id -> Unsigned<Smallint>,
        #[max_length = 32]
        code -> Nullable<Varchar>,
        #[max_length = 64]
        name -> Nullable<Varchar>,
        sort_order -> Unsigned<Smallint>,
        default_group_id -> Unsigned<Smallint>,
        is_default -> Nullable<Unsigned<Smallint>>,
    }
}

diesel::table! {
    tax_calculation (tax_calculation_id) {
        tax_calculation_id -> Integer,
        tax_calculation_rate_id -> Integer,
        tax_calculation_rule_id -> Integer,
        customer_tax_class_id -> Smallint,
        product_tax_class_id -> Smallint,
    }
}

diesel::table! {
    tax_calculation_rate (tax_calculation_rate_id) {
        tax_calculation_rate_id -> Integer,
        #[max_length = 2]
        tax_country_id -> Varchar,
        tax_region_id -> Integer,
        #[max_length = 21]
        tax_postcode -> Nullable<Varchar>,
        #[max_length = 255]
        code -> Varchar,
        rate -> Decimal,
        zip_is_range -> Nullable<Smallint>,
        zip_from -> Nullable<Unsigned<Integer>>,
        zip_to -> Nullable<Unsigned<Integer>>,
    }
}

diesel::table! {
    tax_calculation_rate_title (tax_calculation_rate_title_id) {
        tax_calculation_rate_title_id -> Integer,
        tax_calculation_rate_id -> Integer,
        store_id -> Unsigned<Smallint>,
        #[max_length = 255]
        value -> Varchar,
    }
}

diesel::table! {
    tax_calculation_rule (tax_calculation_rule_id) {
        tax_calculation_rule_id -> Integer,
        #[max_length = 255]
        code -> Varchar,
        priority -> Integer,
        position -> Integer,
        calculate_subtotal -> Integer,
    }
}

diesel::table! {
    tax_class (class_id) {
        class_id -> Smallint,
        #[max_length = 255]
        class_name -> Varchar,
        #[max_length = 8]
        class_type -> Varchar,
    }
}

diesel::table! {
    tax_order_aggregated_created (id) {
        id -> Unsigned<Integer>,
        period -> Nullable<Date>,
        store_id -> Nullable<Unsigned<Smallint>>,
        #[max_length = 255]
        code -> Varchar,
        #[max_length = 50]
        order_status -> Varchar,
        percent -> Nullable<Float>,
        orders_count -> Unsigned<Integer>,
        tax_base_amount_sum -> Nullable<Float>,
    }
}

diesel::table! {
    tax_order_aggregated_updated (id) {
        id -> Unsigned<Integer>,
        period -> Nullable<Date>,
        store_id -> Nullable<Unsigned<Smallint>>,
        #[max_length = 255]
        code -> Varchar,
        #[max_length = 50]
        order_status -> Varchar,
        percent -> Nullable<Float>,
        orders_count -> Unsigned<Integer>,
        tax_base_amount_sum -> Nullable<Float>,
    }
}

diesel::table! {
    theme (theme_id) {
        theme_id -> Unsigned<Integer>,
        parent_id -> Nullable<Integer>,
        #[max_length = 255]
        theme_path -> Nullable<Varchar>,
        #[max_length = 255]
        theme_title -> Varchar,
        #[max_length = 255]
        preview_image -> Nullable<Varchar>,
        is_featured -> Bool,
        #[max_length = 255]
        area -> Varchar,
        #[sql_name = "type"]
        type_ -> Smallint,
        code -> Nullable<Text>,
    }
}

diesel::table! {
    theme_file (theme_files_id) {
        theme_files_id -> Unsigned<Integer>,
        theme_id -> Unsigned<Integer>,
        #[max_length = 255]
        file_path -> Nullable<Varchar>,
        #[max_length = 32]
        file_type -> Varchar,
        content -> Longtext,
        sort_order -> Smallint,
        is_temporary -> Bool,
    }
}

diesel::table! {
    translation (key_id) {
        key_id -> Unsigned<Integer>,
        #[max_length = 255]
        string -> Varchar,
        store_id -> Unsigned<Smallint>,
        #[max_length = 255]
        translate -> Nullable<Varchar>,
        #[max_length = 20]
        locale -> Varchar,
        crc_string -> Bigint,
    }
}

diesel::table! {
    ui_bookmark (bookmark_id) {
        bookmark_id -> Unsigned<Integer>,
        user_id -> Unsigned<Integer>,
        #[max_length = 255]
        namespace -> Varchar,
        #[max_length = 255]
        identifier -> Varchar,
        current -> Smallint,
        #[max_length = 255]
        title -> Nullable<Varchar>,
        config -> Nullable<Longtext>,
        created_at -> Datetime,
        updated_at -> Datetime,
    }
}

diesel::table! {
    url_rewrite (url_rewrite_id) {
        url_rewrite_id -> Unsigned<Integer>,
        #[max_length = 32]
        entity_type -> Varchar,
        entity_id -> Unsigned<Integer>,
        #[max_length = 255]
        request_path -> Nullable<Varchar>,
        #[max_length = 255]
        target_path -> Nullable<Varchar>,
        redirect_type -> Unsigned<Smallint>,
        store_id -> Unsigned<Smallint>,
        #[max_length = 255]
        description -> Nullable<Varchar>,
        is_autogenerated -> Unsigned<Smallint>,
        #[max_length = 255]
        metadata -> Nullable<Varchar>,
    }
}

diesel::table! {
    variable (variable_id) {
        variable_id -> Unsigned<Integer>,
        #[max_length = 255]
        code -> Nullable<Varchar>,
        #[max_length = 255]
        name -> Nullable<Varchar>,
    }
}

diesel::table! {
    variable_value (value_id) {
        value_id -> Unsigned<Integer>,
        variable_id -> Unsigned<Integer>,
        store_id -> Unsigned<Smallint>,
        plain_value -> Nullable<Text>,
        html_value -> Nullable<Text>,
    }
}

diesel::table! {
    weee_tax (value_id) {
        value_id -> Integer,
        website_id -> Unsigned<Smallint>,
        entity_id -> Unsigned<Integer>,
        #[max_length = 2]
        country -> Nullable<Varchar>,
        value -> Decimal,
        state -> Integer,
        attribute_id -> Unsigned<Smallint>,
    }
}

diesel::table! {
    widget (widget_id) {
        widget_id -> Unsigned<Integer>,
        #[max_length = 255]
        widget_code -> Nullable<Varchar>,
        #[max_length = 255]
        widget_type -> Nullable<Varchar>,
        parameters -> Nullable<Text>,
    }
}

diesel::table! {
    widget_instance (instance_id) {
        instance_id -> Unsigned<Integer>,
        #[max_length = 255]
        instance_type -> Nullable<Varchar>,
        theme_id -> Unsigned<Integer>,
        #[max_length = 255]
        title -> Nullable<Varchar>,
        #[max_length = 255]
        store_ids -> Varchar,
        widget_parameters -> Nullable<Text>,
        sort_order -> Unsigned<Smallint>,
    }
}

diesel::table! {
    widget_instance_page (page_id) {
        page_id -> Unsigned<Integer>,
        instance_id -> Unsigned<Integer>,
        #[max_length = 25]
        page_group -> Nullable<Varchar>,
        #[max_length = 255]
        layout_handle -> Nullable<Varchar>,
        #[max_length = 255]
        block_reference -> Nullable<Varchar>,
        #[max_length = 25]
        page_for -> Nullable<Varchar>,
        entities -> Nullable<Text>,
        #[max_length = 255]
        page_template -> Nullable<Varchar>,
    }
}

diesel::table! {
    widget_instance_page_layout (layout_update_id, page_id) {
        page_id -> Unsigned<Integer>,
        layout_update_id -> Unsigned<Integer>,
    }
}

diesel::table! {
    wishlist (wishlist_id) {
        wishlist_id -> Unsigned<Integer>,
        customer_id -> Unsigned<Integer>,
        shared -> Unsigned<Smallint>,
        #[max_length = 32]
        sharing_code -> Nullable<Varchar>,
        updated_at -> Nullable<Timestamp>,
    }
}

diesel::table! {
    wishlist_item (wishlist_item_id) {
        wishlist_item_id -> Unsigned<Integer>,
        wishlist_id -> Unsigned<Integer>,
        product_id -> Unsigned<Integer>,
        store_id -> Nullable<Unsigned<Smallint>>,
        added_at -> Nullable<Timestamp>,
        description -> Nullable<Text>,
        qty -> Decimal,
    }
}

diesel::table! {
    wishlist_item_option (option_id) {
        option_id -> Unsigned<Integer>,
        wishlist_item_id -> Unsigned<Integer>,
        product_id -> Unsigned<Integer>,
        #[max_length = 255]
        code -> Varchar,
        value -> Nullable<Text>,
    }
}

diesel::joinable!(admin_passwords -> admin_user (user_id));
diesel::joinable!(admin_user_expiration -> admin_user (user_id));
diesel::joinable!(admin_user_session -> admin_user (user_id));
diesel::joinable!(authorization_rule -> authorization_role (role_id));
diesel::joinable!(catalog_category_entity_datetime -> catalog_category_entity (entity_id));
diesel::joinable!(catalog_category_entity_datetime -> eav_attribute (attribute_id));
diesel::joinable!(catalog_category_entity_datetime -> store (store_id));
diesel::joinable!(catalog_category_entity_decimal -> catalog_category_entity (entity_id));
diesel::joinable!(catalog_category_entity_decimal -> eav_attribute (attribute_id));
diesel::joinable!(catalog_category_entity_decimal -> store (store_id));
diesel::joinable!(catalog_category_entity_int -> catalog_category_entity (entity_id));
diesel::joinable!(catalog_category_entity_int -> eav_attribute (attribute_id));
diesel::joinable!(catalog_category_entity_int -> store (store_id));
diesel::joinable!(catalog_category_entity_text -> catalog_category_entity (entity_id));
diesel::joinable!(catalog_category_entity_text -> eav_attribute (attribute_id));
diesel::joinable!(catalog_category_entity_text -> store (store_id));
diesel::joinable!(catalog_category_entity_varchar -> catalog_category_entity (entity_id));
diesel::joinable!(catalog_category_entity_varchar -> eav_attribute (attribute_id));
diesel::joinable!(catalog_category_entity_varchar -> store (store_id));
diesel::joinable!(catalog_category_product -> catalog_category_entity (category_id));
diesel::joinable!(catalog_category_product -> catalog_product_entity (product_id));
diesel::joinable!(catalog_compare_item -> catalog_compare_list (list_id));
diesel::joinable!(catalog_compare_item -> catalog_product_entity (product_id));
diesel::joinable!(catalog_compare_item -> customer_entity (customer_id));
diesel::joinable!(catalog_compare_item -> store (store_id));
diesel::joinable!(catalog_compare_list -> customer_entity (customer_id));
diesel::joinable!(catalog_eav_attribute -> eav_attribute (attribute_id));
diesel::joinable!(catalog_product_bundle_price_index -> catalog_product_entity (entity_id));
diesel::joinable!(catalog_product_bundle_price_index -> customer_group (customer_group_id));
diesel::joinable!(catalog_product_bundle_price_index -> store_website (website_id));
diesel::joinable!(catalog_product_bundle_selection -> catalog_product_entity (product_id));
diesel::joinable!(catalog_product_bundle_selection_price -> catalog_product_bundle_selection (selection_id));
diesel::joinable!(catalog_product_bundle_selection_price -> store_website (website_id));
diesel::joinable!(catalog_product_entity_datetime -> catalog_product_entity (entity_id));
diesel::joinable!(catalog_product_entity_datetime -> eav_attribute (attribute_id));
diesel::joinable!(catalog_product_entity_datetime -> store (store_id));
diesel::joinable!(catalog_product_entity_decimal -> catalog_product_entity (entity_id));
diesel::joinable!(catalog_product_entity_decimal -> eav_attribute (attribute_id));
diesel::joinable!(catalog_product_entity_decimal -> store (store_id));
diesel::joinable!(catalog_product_entity_gallery -> catalog_product_entity (entity_id));
diesel::joinable!(catalog_product_entity_gallery -> eav_attribute (attribute_id));
diesel::joinable!(catalog_product_entity_gallery -> store (store_id));
diesel::joinable!(catalog_product_entity_int -> catalog_product_entity (entity_id));
diesel::joinable!(catalog_product_entity_int -> eav_attribute (attribute_id));
diesel::joinable!(catalog_product_entity_int -> store (store_id));
diesel::joinable!(catalog_product_entity_media_gallery -> eav_attribute (attribute_id));
diesel::joinable!(catalog_product_entity_media_gallery_value -> catalog_product_entity (entity_id));
diesel::joinable!(catalog_product_entity_media_gallery_value -> catalog_product_entity_media_gallery (value_id));
diesel::joinable!(catalog_product_entity_media_gallery_value -> store (store_id));
diesel::joinable!(catalog_product_entity_media_gallery_value_to_entity -> catalog_product_entity (entity_id));
diesel::joinable!(catalog_product_entity_media_gallery_value_to_entity -> catalog_product_entity_media_gallery (value_id));
diesel::joinable!(catalog_product_entity_media_gallery_value_video -> catalog_product_entity_media_gallery (value_id));
diesel::joinable!(catalog_product_entity_media_gallery_value_video -> store (store_id));
diesel::joinable!(catalog_product_entity_text -> catalog_product_entity (entity_id));
diesel::joinable!(catalog_product_entity_text -> eav_attribute (attribute_id));
diesel::joinable!(catalog_product_entity_text -> store (store_id));
diesel::joinable!(catalog_product_entity_tier_price -> catalog_product_entity (entity_id));
diesel::joinable!(catalog_product_entity_tier_price -> customer_group (customer_group_id));
diesel::joinable!(catalog_product_entity_tier_price -> store_website (website_id));
diesel::joinable!(catalog_product_entity_varchar -> catalog_product_entity (entity_id));
diesel::joinable!(catalog_product_entity_varchar -> eav_attribute (attribute_id));
diesel::joinable!(catalog_product_entity_varchar -> store (store_id));
diesel::joinable!(catalog_product_frontend_action -> catalog_product_entity (product_id));
diesel::joinable!(catalog_product_frontend_action -> customer_entity (customer_id));
diesel::joinable!(catalog_product_index_tier_price -> catalog_product_entity (entity_id));
diesel::joinable!(catalog_product_index_tier_price -> customer_group (customer_group_id));
diesel::joinable!(catalog_product_index_tier_price -> store_website (website_id));
diesel::joinable!(catalog_product_index_website -> store_website (website_id));
diesel::joinable!(catalog_product_link -> catalog_product_link_type (link_type_id));
diesel::joinable!(catalog_product_link_attribute -> catalog_product_link_type (link_type_id));
diesel::joinable!(catalog_product_link_attribute_decimal -> catalog_product_link (link_id));
diesel::joinable!(catalog_product_link_attribute_decimal -> catalog_product_link_attribute (product_link_attribute_id));
diesel::joinable!(catalog_product_link_attribute_int -> catalog_product_link (link_id));
diesel::joinable!(catalog_product_link_attribute_int -> catalog_product_link_attribute (product_link_attribute_id));
diesel::joinable!(catalog_product_link_attribute_varchar -> catalog_product_link (link_id));
diesel::joinable!(catalog_product_link_attribute_varchar -> catalog_product_link_attribute (product_link_attribute_id));
diesel::joinable!(catalog_product_super_attribute -> catalog_product_entity (product_id));
diesel::joinable!(catalog_product_super_attribute_label -> catalog_product_super_attribute (product_super_attribute_id));
diesel::joinable!(catalog_product_super_attribute_label -> store (store_id));
diesel::joinable!(catalog_product_website -> catalog_product_entity (product_id));
diesel::joinable!(catalog_product_website -> store_website (website_id));
diesel::joinable!(catalog_url_rewrite_product_category -> catalog_category_entity (category_id));
diesel::joinable!(catalog_url_rewrite_product_category -> catalog_product_entity (product_id));
diesel::joinable!(catalog_url_rewrite_product_category -> url_rewrite (url_rewrite_id));
diesel::joinable!(cataloginventory_stock_item -> catalog_product_entity (product_id));
diesel::joinable!(cataloginventory_stock_item -> cataloginventory_stock (stock_id));
diesel::joinable!(catalogrule_customer_group -> catalogrule (rule_id));
diesel::joinable!(catalogrule_customer_group -> customer_group (customer_group_id));
diesel::joinable!(catalogrule_website -> catalogrule (rule_id));
diesel::joinable!(catalogrule_website -> store_website (website_id));
diesel::joinable!(checkout_agreement_store -> checkout_agreement (agreement_id));
diesel::joinable!(checkout_agreement_store -> store (store_id));
diesel::joinable!(cms_block_store -> cms_block (block_id));
diesel::joinable!(cms_block_store -> store (store_id));
diesel::joinable!(cms_page_store -> cms_page (page_id));
diesel::joinable!(cms_page_store -> store (store_id));
diesel::joinable!(customer_address_entity -> customer_entity (parent_id));
diesel::joinable!(customer_address_entity_datetime -> customer_address_entity (entity_id));
diesel::joinable!(customer_address_entity_datetime -> eav_attribute (attribute_id));
diesel::joinable!(customer_address_entity_decimal -> customer_address_entity (entity_id));
diesel::joinable!(customer_address_entity_decimal -> eav_attribute (attribute_id));
diesel::joinable!(customer_address_entity_int -> customer_address_entity (entity_id));
diesel::joinable!(customer_address_entity_int -> eav_attribute (attribute_id));
diesel::joinable!(customer_address_entity_text -> customer_address_entity (entity_id));
diesel::joinable!(customer_address_entity_text -> eav_attribute (attribute_id));
diesel::joinable!(customer_address_entity_varchar -> customer_address_entity (entity_id));
diesel::joinable!(customer_address_entity_varchar -> eav_attribute (attribute_id));
diesel::joinable!(customer_eav_attribute -> eav_attribute (attribute_id));
diesel::joinable!(customer_eav_attribute_website -> eav_attribute (attribute_id));
diesel::joinable!(customer_eav_attribute_website -> store_website (website_id));
diesel::joinable!(customer_entity -> store (store_id));
diesel::joinable!(customer_entity -> store_website (website_id));
diesel::joinable!(customer_entity_datetime -> customer_entity (entity_id));
diesel::joinable!(customer_entity_datetime -> eav_attribute (attribute_id));
diesel::joinable!(customer_entity_decimal -> customer_entity (entity_id));
diesel::joinable!(customer_entity_decimal -> eav_attribute (attribute_id));
diesel::joinable!(customer_entity_int -> customer_entity (entity_id));
diesel::joinable!(customer_entity_int -> eav_attribute (attribute_id));
diesel::joinable!(customer_entity_text -> customer_entity (entity_id));
diesel::joinable!(customer_entity_text -> eav_attribute (attribute_id));
diesel::joinable!(customer_entity_varchar -> customer_entity (entity_id));
diesel::joinable!(customer_entity_varchar -> eav_attribute (attribute_id));
diesel::joinable!(customer_form_attribute -> eav_attribute (attribute_id));
diesel::joinable!(design_change -> store (store_id));
diesel::joinable!(directory_country_region_name -> directory_country_region (region_id));
diesel::joinable!(downloadable_link -> catalog_product_entity (product_id));
diesel::joinable!(downloadable_link_price -> downloadable_link (link_id));
diesel::joinable!(downloadable_link_price -> store_website (website_id));
diesel::joinable!(downloadable_link_purchased -> customer_entity (customer_id));
diesel::joinable!(downloadable_link_purchased_item -> downloadable_link_purchased (purchased_id));
diesel::joinable!(downloadable_link_title -> downloadable_link (link_id));
diesel::joinable!(downloadable_link_title -> store (store_id));
diesel::joinable!(downloadable_sample -> catalog_product_entity (product_id));
diesel::joinable!(downloadable_sample_title -> downloadable_sample (sample_id));
diesel::joinable!(downloadable_sample_title -> store (store_id));
diesel::joinable!(eav_attribute -> eav_entity_type (entity_type_id));
diesel::joinable!(eav_attribute_group -> eav_attribute_set (attribute_set_id));
diesel::joinable!(eav_attribute_label -> eav_attribute (attribute_id));
diesel::joinable!(eav_attribute_label -> store (store_id));
diesel::joinable!(eav_attribute_option -> eav_attribute (attribute_id));
diesel::joinable!(eav_attribute_option_swatch -> eav_attribute_option (option_id));
diesel::joinable!(eav_attribute_option_swatch -> store (store_id));
diesel::joinable!(eav_attribute_option_value -> eav_attribute_option (option_id));
diesel::joinable!(eav_attribute_option_value -> store (store_id));
diesel::joinable!(eav_attribute_set -> eav_entity_type (entity_type_id));
diesel::joinable!(eav_entity -> eav_entity_type (entity_type_id));
diesel::joinable!(eav_entity -> store (store_id));
diesel::joinable!(eav_entity_attribute -> eav_attribute (attribute_id));
diesel::joinable!(eav_entity_attribute -> eav_attribute_group (attribute_group_id));
diesel::joinable!(eav_entity_datetime -> eav_entity (entity_id));
diesel::joinable!(eav_entity_datetime -> eav_entity_type (entity_type_id));
diesel::joinable!(eav_entity_datetime -> store (store_id));
diesel::joinable!(eav_entity_decimal -> eav_entity (entity_id));
diesel::joinable!(eav_entity_decimal -> eav_entity_type (entity_type_id));
diesel::joinable!(eav_entity_decimal -> store (store_id));
diesel::joinable!(eav_entity_int -> eav_entity (entity_id));
diesel::joinable!(eav_entity_int -> eav_entity_type (entity_type_id));
diesel::joinable!(eav_entity_int -> store (store_id));
diesel::joinable!(eav_entity_store -> eav_entity_type (entity_type_id));
diesel::joinable!(eav_entity_store -> store (store_id));
diesel::joinable!(eav_entity_text -> eav_entity (entity_id));
diesel::joinable!(eav_entity_text -> eav_entity_type (entity_type_id));
diesel::joinable!(eav_entity_text -> store (store_id));
diesel::joinable!(eav_entity_varchar -> eav_entity (entity_id));
diesel::joinable!(eav_entity_varchar -> eav_entity_type (entity_type_id));
diesel::joinable!(eav_entity_varchar -> store (store_id));
diesel::joinable!(eav_form_element -> eav_attribute (attribute_id));
diesel::joinable!(eav_form_element -> eav_form_fieldset (fieldset_id));
diesel::joinable!(eav_form_element -> eav_form_type (type_id));
diesel::joinable!(eav_form_fieldset -> eav_form_type (type_id));
diesel::joinable!(eav_form_fieldset_label -> eav_form_fieldset (fieldset_id));
diesel::joinable!(eav_form_fieldset_label -> store (store_id));
diesel::joinable!(eav_form_type -> store (store_id));
diesel::joinable!(eav_form_type_entity -> eav_entity_type (entity_type_id));
diesel::joinable!(eav_form_type_entity -> eav_form_type (type_id));
diesel::joinable!(googleoptimizer_code -> store (store_id));
diesel::joinable!(integration -> oauth_consumer (consumer_id));
diesel::joinable!(layout_link -> layout_update (layout_update_id));
diesel::joinable!(layout_link -> store (store_id));
diesel::joinable!(layout_link -> theme (theme_id));
diesel::joinable!(login_as_customer_assistance_allowed -> customer_entity (customer_id));
diesel::joinable!(media_gallery_asset_keyword -> media_gallery_asset (asset_id));
diesel::joinable!(media_gallery_asset_keyword -> media_gallery_keyword (keyword_id));
diesel::joinable!(newsletter_problem -> newsletter_queue (queue_id));
diesel::joinable!(newsletter_problem -> newsletter_subscriber (subscriber_id));
diesel::joinable!(newsletter_queue -> newsletter_template (template_id));
diesel::joinable!(newsletter_queue_link -> newsletter_queue (queue_id));
diesel::joinable!(newsletter_queue_link -> newsletter_subscriber (subscriber_id));
diesel::joinable!(newsletter_queue_store_link -> newsletter_queue (queue_id));
diesel::joinable!(newsletter_queue_store_link -> store (store_id));
diesel::joinable!(newsletter_subscriber -> store (store_id));
diesel::joinable!(oauth_nonce -> oauth_consumer (consumer_id));
diesel::joinable!(paypal_billing_agreement -> customer_entity (customer_id));
diesel::joinable!(paypal_billing_agreement -> store (store_id));
diesel::joinable!(paypal_billing_agreement_order -> paypal_billing_agreement (agreement_id));
diesel::joinable!(paypal_cert -> store_website (website_id));
diesel::joinable!(paypal_settlement_report_row -> paypal_settlement_report (report_id));
diesel::joinable!(persistent_session -> customer_entity (customer_id));
diesel::joinable!(persistent_session -> store_website (website_id));
diesel::joinable!(product_alert_price -> catalog_product_entity (product_id));
diesel::joinable!(product_alert_price -> customer_entity (customer_id));
diesel::joinable!(product_alert_price -> store (store_id));
diesel::joinable!(product_alert_price -> store_website (website_id));
diesel::joinable!(product_alert_stock -> catalog_product_entity (product_id));
diesel::joinable!(product_alert_stock -> customer_entity (customer_id));
diesel::joinable!(product_alert_stock -> store (store_id));
diesel::joinable!(product_alert_stock -> store_website (website_id));
diesel::joinable!(queue_message_status -> queue (queue_id));
diesel::joinable!(queue_message_status -> queue_message (message_id));
diesel::joinable!(quote -> store (store_id));
diesel::joinable!(quote_address -> quote (quote_id));
diesel::joinable!(quote_address_item -> quote_address (quote_address_id));
diesel::joinable!(quote_address_item -> quote_item (quote_item_id));
diesel::joinable!(quote_id_mask -> quote (quote_id));
diesel::joinable!(quote_item -> quote (quote_id));
diesel::joinable!(quote_item -> store (store_id));
diesel::joinable!(quote_item_option -> quote_item (item_id));
diesel::joinable!(quote_payment -> quote (quote_id));
diesel::joinable!(quote_shipping_rate -> quote_address (address_id));
diesel::joinable!(rating -> rating_entity (entity_id));
diesel::joinable!(rating_option -> rating (rating_id));
diesel::joinable!(rating_option_vote -> rating_option (option_id));
diesel::joinable!(rating_option_vote -> review (review_id));
diesel::joinable!(rating_option_vote_aggregated -> rating (rating_id));
diesel::joinable!(rating_option_vote_aggregated -> store (store_id));
diesel::joinable!(rating_store -> rating (rating_id));
diesel::joinable!(rating_store -> store (store_id));
diesel::joinable!(rating_title -> rating (rating_id));
diesel::joinable!(rating_title -> store (store_id));
diesel::joinable!(release_notification_viewer_log -> admin_user (viewer_id));
diesel::joinable!(report_compared_product_index -> catalog_product_entity (product_id));
diesel::joinable!(report_compared_product_index -> customer_entity (customer_id));
diesel::joinable!(report_compared_product_index -> store (store_id));
diesel::joinable!(report_event -> report_event_types (event_type_id));
diesel::joinable!(report_event -> store (store_id));
diesel::joinable!(report_viewed_product_aggregated_daily -> catalog_product_entity (product_id));
diesel::joinable!(report_viewed_product_aggregated_daily -> store (store_id));
diesel::joinable!(report_viewed_product_aggregated_monthly -> catalog_product_entity (product_id));
diesel::joinable!(report_viewed_product_aggregated_monthly -> store (store_id));
diesel::joinable!(report_viewed_product_aggregated_yearly -> catalog_product_entity (product_id));
diesel::joinable!(report_viewed_product_aggregated_yearly -> store (store_id));
diesel::joinable!(report_viewed_product_index -> catalog_product_entity (product_id));
diesel::joinable!(report_viewed_product_index -> customer_entity (customer_id));
diesel::joinable!(report_viewed_product_index -> store (store_id));
diesel::joinable!(review -> review_entity (entity_id));
diesel::joinable!(review -> review_status (status_id));
diesel::joinable!(review_detail -> customer_entity (customer_id));
diesel::joinable!(review_detail -> review (review_id));
diesel::joinable!(review_detail -> store (store_id));
diesel::joinable!(review_entity_summary -> store (store_id));
diesel::joinable!(review_store -> review (review_id));
diesel::joinable!(review_store -> store (store_id));
diesel::joinable!(sales_bestsellers_aggregated_daily -> store (store_id));
diesel::joinable!(sales_bestsellers_aggregated_monthly -> store (store_id));
diesel::joinable!(sales_bestsellers_aggregated_yearly -> store (store_id));
diesel::joinable!(sales_creditmemo -> store (store_id));
diesel::joinable!(sales_creditmemo_comment -> sales_creditmemo (parent_id));
diesel::joinable!(sales_creditmemo_item -> sales_creditmemo (parent_id));
diesel::joinable!(sales_invoice -> store (store_id));
diesel::joinable!(sales_invoice_comment -> sales_invoice (parent_id));
diesel::joinable!(sales_invoice_item -> sales_invoice (parent_id));
diesel::joinable!(sales_invoiced_aggregated -> store (store_id));
diesel::joinable!(sales_invoiced_aggregated_order -> store (store_id));
diesel::joinable!(sales_refunded_aggregated -> store (store_id));
diesel::joinable!(sales_refunded_aggregated_order -> store (store_id));
diesel::joinable!(sales_sequence_profile -> sales_sequence_meta (meta_id));
diesel::joinable!(sales_shipment -> store (store_id));
diesel::joinable!(sales_shipment_comment -> sales_shipment (parent_id));
diesel::joinable!(sales_shipment_item -> sales_shipment (parent_id));
diesel::joinable!(sales_shipment_track -> sales_shipment (parent_id));
diesel::joinable!(sales_shipping_aggregated -> store (store_id));
diesel::joinable!(sales_shipping_aggregated_order -> store (store_id));
diesel::joinable!(salesrule_coupon -> salesrule (rule_id));
diesel::joinable!(salesrule_coupon_aggregated -> store (store_id));
diesel::joinable!(salesrule_coupon_aggregated_order -> store (store_id));
diesel::joinable!(salesrule_coupon_aggregated_updated -> store (store_id));
diesel::joinable!(salesrule_coupon_usage -> customer_entity (customer_id));
diesel::joinable!(salesrule_coupon_usage -> salesrule_coupon (coupon_id));
diesel::joinable!(salesrule_customer -> customer_entity (customer_id));
diesel::joinable!(salesrule_customer -> salesrule (rule_id));
diesel::joinable!(salesrule_customer_group -> customer_group (customer_group_id));
diesel::joinable!(salesrule_customer_group -> salesrule (rule_id));
diesel::joinable!(salesrule_label -> salesrule (rule_id));
diesel::joinable!(salesrule_label -> store (store_id));
diesel::joinable!(salesrule_product_attribute -> customer_group (customer_group_id));
diesel::joinable!(salesrule_product_attribute -> eav_attribute (attribute_id));
diesel::joinable!(salesrule_product_attribute -> salesrule (rule_id));
diesel::joinable!(salesrule_product_attribute -> store_website (website_id));
diesel::joinable!(salesrule_website -> salesrule (rule_id));
diesel::joinable!(salesrule_website -> store_website (website_id));
diesel::joinable!(search_query -> store (store_id));
diesel::joinable!(search_synonyms -> store (store_id));
diesel::joinable!(search_synonyms -> store_website (website_id));
diesel::joinable!(sitemap -> store (store_id));
diesel::joinable!(store -> store_group (group_id));
diesel::joinable!(store -> store_website (website_id));
diesel::joinable!(store_group -> store_website (website_id));
diesel::joinable!(tax_calculation -> tax_calculation_rate (tax_calculation_rate_id));
diesel::joinable!(tax_calculation -> tax_calculation_rule (tax_calculation_rule_id));
diesel::joinable!(tax_calculation_rate_title -> store (store_id));
diesel::joinable!(tax_calculation_rate_title -> tax_calculation_rate (tax_calculation_rate_id));
diesel::joinable!(tax_order_aggregated_created -> store (store_id));
diesel::joinable!(tax_order_aggregated_updated -> store (store_id));
diesel::joinable!(theme_file -> theme (theme_id));
diesel::joinable!(translation -> store (store_id));
diesel::joinable!(ui_bookmark -> admin_user (user_id));
diesel::joinable!(variable_value -> store (store_id));
diesel::joinable!(variable_value -> variable (variable_id));
diesel::joinable!(weee_tax -> catalog_product_entity (entity_id));
diesel::joinable!(weee_tax -> directory_country (country));
diesel::joinable!(weee_tax -> eav_attribute (attribute_id));
diesel::joinable!(weee_tax -> store_website (website_id));
diesel::joinable!(widget_instance -> theme (theme_id));
diesel::joinable!(widget_instance_page -> widget_instance (instance_id));
diesel::joinable!(widget_instance_page_layout -> layout_update (layout_update_id));
diesel::joinable!(widget_instance_page_layout -> widget_instance_page (page_id));
diesel::joinable!(wishlist -> customer_entity (customer_id));
diesel::joinable!(wishlist_item -> catalog_product_entity (product_id));
diesel::joinable!(wishlist_item -> store (store_id));
diesel::joinable!(wishlist_item -> wishlist (wishlist_id));
diesel::joinable!(wishlist_item_option -> wishlist_item (wishlist_item_id));

diesel::allow_tables_to_appear_in_same_query!(
    admin_analytics_usage_version_log,
    admin_passwords,
    admin_system_messages,
    admin_user,
    admin_user_expiration,
    admin_user_session,
    adminnotification_inbox,
    authorization_role,
    authorization_rule,
    cache,
    cache_tag,
    catalog_category_entity,
    catalog_category_entity_datetime,
    catalog_category_entity_decimal,
    catalog_category_entity_int,
    catalog_category_entity_text,
    catalog_category_entity_varchar,
    catalog_category_product,
    catalog_category_product_index,
    catalog_category_product_index_replica,
    catalog_category_product_index_store1,
    catalog_category_product_index_store1_replica,
    catalog_category_product_index_tmp,
    catalog_compare_item,
    catalog_compare_list,
    catalog_eav_attribute,
    catalog_product_bundle_price_index,
    catalog_product_bundle_selection,
    catalog_product_bundle_selection_price,
    catalog_product_bundle_stock_index,
    catalog_product_entity,
    catalog_product_entity_datetime,
    catalog_product_entity_decimal,
    catalog_product_entity_gallery,
    catalog_product_entity_int,
    catalog_product_entity_media_gallery,
    catalog_product_entity_media_gallery_value,
    catalog_product_entity_media_gallery_value_to_entity,
    catalog_product_entity_media_gallery_value_video,
    catalog_product_entity_text,
    catalog_product_entity_tier_price,
    catalog_product_entity_varchar,
    catalog_product_frontend_action,
    catalog_product_index_eav,
    catalog_product_index_eav_decimal,
    catalog_product_index_eav_decimal_idx,
    catalog_product_index_eav_decimal_replica,
    catalog_product_index_eav_decimal_tmp,
    catalog_product_index_eav_idx,
    catalog_product_index_eav_replica,
    catalog_product_index_eav_tmp,
    catalog_product_index_price,
    catalog_product_index_price_bundle_idx,
    catalog_product_index_price_bundle_opt_idx,
    catalog_product_index_price_bundle_opt_tmp,
    catalog_product_index_price_bundle_sel_idx,
    catalog_product_index_price_bundle_sel_tmp,
    catalog_product_index_price_bundle_tmp,
    catalog_product_index_price_cfg_opt_agr_idx,
    catalog_product_index_price_cfg_opt_agr_tmp,
    catalog_product_index_price_cfg_opt_idx,
    catalog_product_index_price_cfg_opt_tmp,
    catalog_product_index_price_downlod_idx,
    catalog_product_index_price_downlod_tmp,
    catalog_product_index_price_final_idx,
    catalog_product_index_price_final_tmp,
    catalog_product_index_price_idx,
    catalog_product_index_price_opt_agr_idx,
    catalog_product_index_price_opt_agr_tmp,
    catalog_product_index_price_opt_idx,
    catalog_product_index_price_opt_tmp,
    catalog_product_index_price_replica,
    catalog_product_index_price_tmp,
    catalog_product_index_tier_price,
    catalog_product_index_website,
    catalog_product_link,
    catalog_product_link_attribute,
    catalog_product_link_attribute_decimal,
    catalog_product_link_attribute_int,
    catalog_product_link_attribute_varchar,
    catalog_product_link_type,
    catalog_product_relation,
    catalog_product_super_attribute,
    catalog_product_super_attribute_label,
    catalog_product_super_link,
    catalog_product_website,
    catalog_url_rewrite_product_category,
    cataloginventory_stock,
    cataloginventory_stock_item,
    cataloginventory_stock_status,
    cataloginventory_stock_status_idx,
    cataloginventory_stock_status_replica,
    cataloginventory_stock_status_tmp,
    catalogrule,
    catalogrule_customer_group,
    catalogrule_group_website,
    catalogrule_group_website_replica,
    catalogrule_product,
    catalogrule_product_price,
    catalogrule_product_price_replica,
    catalogrule_product_replica,
    catalogrule_website,
    catalogsearch_recommendations,
    checkout_agreement,
    checkout_agreement_store,
    cms_block,
    cms_block_store,
    cms_page,
    cms_page_store,
    core_config_data,
    cron_schedule,
    customer_address_entity,
    customer_address_entity_datetime,
    customer_address_entity_decimal,
    customer_address_entity_int,
    customer_address_entity_text,
    customer_address_entity_varchar,
    customer_eav_attribute,
    customer_eav_attribute_website,
    customer_entity,
    customer_entity_datetime,
    customer_entity_decimal,
    customer_entity_int,
    customer_entity_text,
    customer_entity_varchar,
    customer_form_attribute,
    customer_grid_flat,
    customer_group,
    customer_group_excluded_website,
    customer_log,
    customer_visitor,
    design_change,
    design_config_grid_flat,
    directory_country,
    directory_country_region,
    directory_country_region_name,
    directory_currency_rate,
    downloadable_link,
    downloadable_link_price,
    downloadable_link_purchased,
    downloadable_link_purchased_item,
    downloadable_link_title,
    downloadable_sample,
    downloadable_sample_title,
    eav_attribute,
    eav_attribute_group,
    eav_attribute_label,
    eav_attribute_option,
    eav_attribute_option_swatch,
    eav_attribute_option_value,
    eav_attribute_set,
    eav_entity,
    eav_entity_attribute,
    eav_entity_datetime,
    eav_entity_decimal,
    eav_entity_int,
    eav_entity_store,
    eav_entity_text,
    eav_entity_type,
    eav_entity_varchar,
    eav_form_element,
    eav_form_fieldset,
    eav_form_fieldset_label,
    eav_form_type,
    eav_form_type_entity,
    email_template,
    flag,
    gift_message,
    googleoptimizer_code,
    import_history,
    importexport_importdata,
    indexer_state,
    integration,
    jwt_auth_revoked,
    layout_link,
    layout_update,
    login_as_customer,
    login_as_customer_assistance_allowed,
    magento_acknowledged_bulk,
    magento_bulk,
    magento_login_as_customer_log,
    magento_operation,
    media_content_asset,
    media_gallery_asset,
    media_gallery_asset_keyword,
    media_gallery_keyword,
    mview_state,
    newsletter_problem,
    newsletter_queue,
    newsletter_queue_link,
    newsletter_queue_store_link,
    newsletter_subscriber,
    newsletter_template,
    oauth_consumer,
    oauth_nonce,
    password_reset_request_event,
    patch_list,
    paypal_billing_agreement,
    paypal_billing_agreement_order,
    paypal_cert,
    paypal_payment_transaction,
    paypal_settlement_report,
    paypal_settlement_report_row,
    persistent_session,
    product_alert_price,
    product_alert_stock,
    queue,
    queue_lock,
    queue_message,
    queue_message_status,
    quote,
    quote_address,
    quote_address_item,
    quote_id_mask,
    quote_item,
    quote_item_option,
    quote_payment,
    quote_shipping_rate,
    rating,
    rating_entity,
    rating_option,
    rating_option_vote,
    rating_option_vote_aggregated,
    rating_store,
    rating_title,
    release_notification_viewer_log,
    report_compared_product_index,
    report_event,
    report_event_types,
    report_viewed_product_aggregated_daily,
    report_viewed_product_aggregated_monthly,
    report_viewed_product_aggregated_yearly,
    report_viewed_product_index,
    reporting_module_status,
    reporting_orders,
    review,
    review_detail,
    review_entity,
    review_entity_summary,
    review_status,
    review_store,
    sales_bestsellers_aggregated_daily,
    sales_bestsellers_aggregated_monthly,
    sales_bestsellers_aggregated_yearly,
    sales_creditmemo,
    sales_creditmemo_comment,
    sales_creditmemo_grid,
    sales_creditmemo_item,
    sales_invoice,
    sales_invoice_comment,
    sales_invoice_grid,
    sales_invoice_item,
    sales_invoiced_aggregated,
    sales_invoiced_aggregated_order,
    sales_payment_transaction,
    sales_refunded_aggregated,
    sales_refunded_aggregated_order,
    sales_sequence_meta,
    sales_sequence_profile,
    sales_shipment,
    sales_shipment_comment,
    sales_shipment_grid,
    sales_shipment_item,
    sales_shipment_track,
    sales_shipping_aggregated,
    sales_shipping_aggregated_order,
    salesrule,
    salesrule_coupon,
    salesrule_coupon_aggregated,
    salesrule_coupon_aggregated_order,
    salesrule_coupon_aggregated_updated,
    salesrule_coupon_usage,
    salesrule_customer,
    salesrule_customer_group,
    salesrule_label,
    salesrule_product_attribute,
    salesrule_website,
    search_query,
    search_synonyms,
    sendfriend_log,
    sequence_creditmemo_0,
    sequence_creditmemo_1,
    sequence_invoice_0,
    sequence_invoice_1,
    sequence_order_0,
    sequence_order_1,
    sequence_shipment_0,
    sequence_shipment_1,
    session,
    setup_module,
    shipping_tablerate,
    sitemap,
    store,
    store_group,
    store_website,
    tax_calculation,
    tax_calculation_rate,
    tax_calculation_rate_title,
    tax_calculation_rule,
    tax_class,
    tax_order_aggregated_created,
    tax_order_aggregated_updated,
    theme,
    theme_file,
    translation,
    ui_bookmark,
    url_rewrite,
    variable,
    variable_value,
    weee_tax,
    widget,
    widget_instance,
    widget_instance_page,
    widget_instance_page_layout,
    wishlist,
    wishlist_item,
    wishlist_item_option,
);
