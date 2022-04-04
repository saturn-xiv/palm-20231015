table! {
    cms_action_log_config (id) {
        id -> Unsigned<Integer>,
        type_title -> Varchar,
        type_alias -> Varchar,
        id_holder -> Nullable<Varchar>,
        title_holder -> Nullable<Varchar>,
        table_name -> Nullable<Varchar>,
        text_prefix -> Nullable<Varchar>,
    }
}

table! {
    cms_action_logs (id) {
        id -> Unsigned<Integer>,
        message_language_key -> Varchar,
        message -> Text,
        log_date -> Datetime,
        extension -> Varchar,
        user_id -> Integer,
        item_id -> Integer,
        ip_address -> Varchar,
    }
}

table! {
    cms_action_logs_extensions (id) {
        id -> Unsigned<Integer>,
        extension -> Varchar,
    }
}

table! {
    cms_action_logs_users (user_id) {
        user_id -> Unsigned<Integer>,
        notify -> Unsigned<Tinyint>,
        extensions -> Text,
    }
}

table! {
    cms_assets (id) {
        id -> Unsigned<Integer>,
        parent_id -> Integer,
        lft -> Integer,
        rgt -> Integer,
        level -> Unsigned<Integer>,
        name -> Varchar,
        title -> Varchar,
        rules -> Varchar,
    }
}

table! {
    cms_associations (context, id) {
        id -> Integer,
        context -> Varchar,
        key -> Char,
    }
}

table! {
    cms_banner_clients (id) {
        id -> Integer,
        name -> Varchar,
        contact -> Varchar,
        email -> Varchar,
        extrainfo -> Text,
        state -> Tinyint,
        checked_out -> Nullable<Unsigned<Integer>>,
        checked_out_time -> Nullable<Datetime>,
        metakey -> Nullable<Text>,
        own_prefix -> Tinyint,
        metakey_prefix -> Varchar,
        purchase_type -> Tinyint,
        track_clicks -> Tinyint,
        track_impressions -> Tinyint,
    }
}

table! {
    cms_banner_tracks (track_date, track_type, banner_id) {
        track_date -> Datetime,
        track_type -> Unsigned<Integer>,
        banner_id -> Unsigned<Integer>,
        count -> Unsigned<Integer>,
    }
}

table! {
    cms_banners (id) {
        id -> Integer,
        cid -> Integer,
        #[sql_name = "type"]
        type_ -> Integer,
        name -> Varchar,
        alias -> Varchar,
        imptotal -> Integer,
        impmade -> Integer,
        clicks -> Integer,
        clickurl -> Varchar,
        state -> Tinyint,
        catid -> Unsigned<Integer>,
        description -> Text,
        custombannercode -> Varchar,
        sticky -> Unsigned<Tinyint>,
        ordering -> Integer,
        metakey -> Nullable<Text>,
        params -> Text,
        own_prefix -> Tinyint,
        metakey_prefix -> Varchar,
        purchase_type -> Tinyint,
        track_clicks -> Tinyint,
        track_impressions -> Tinyint,
        checked_out -> Nullable<Unsigned<Integer>>,
        checked_out_time -> Nullable<Datetime>,
        publish_up -> Nullable<Datetime>,
        publish_down -> Nullable<Datetime>,
        reset -> Nullable<Datetime>,
        created -> Datetime,
        language -> Char,
        created_by -> Unsigned<Integer>,
        created_by_alias -> Varchar,
        modified -> Datetime,
        modified_by -> Unsigned<Integer>,
        version -> Unsigned<Integer>,
    }
}

table! {
    cms_categories (id) {
        id -> Integer,
        asset_id -> Unsigned<Integer>,
        parent_id -> Unsigned<Integer>,
        lft -> Integer,
        rgt -> Integer,
        level -> Unsigned<Integer>,
        path -> Varchar,
        extension -> Varchar,
        title -> Varchar,
        alias -> Varchar,
        note -> Varchar,
        description -> Nullable<Mediumtext>,
        published -> Tinyint,
        checked_out -> Nullable<Unsigned<Integer>>,
        checked_out_time -> Nullable<Datetime>,
        access -> Unsigned<Integer>,
        params -> Nullable<Text>,
        metadesc -> Varchar,
        metakey -> Varchar,
        metadata -> Varchar,
        created_user_id -> Unsigned<Integer>,
        created_time -> Datetime,
        modified_user_id -> Unsigned<Integer>,
        modified_time -> Datetime,
        hits -> Unsigned<Integer>,
        language -> Char,
        version -> Unsigned<Integer>,
    }
}

table! {
    cms_contact_details (id) {
        id -> Integer,
        name -> Varchar,
        alias -> Varchar,
        con_position -> Nullable<Varchar>,
        address -> Nullable<Text>,
        suburb -> Nullable<Varchar>,
        state -> Nullable<Varchar>,
        country -> Nullable<Varchar>,
        postcode -> Nullable<Varchar>,
        telephone -> Nullable<Varchar>,
        fax -> Nullable<Varchar>,
        misc -> Nullable<Mediumtext>,
        image -> Nullable<Varchar>,
        email_to -> Nullable<Varchar>,
        default_con -> Unsigned<Tinyint>,
        published -> Tinyint,
        checked_out -> Nullable<Unsigned<Integer>>,
        checked_out_time -> Nullable<Datetime>,
        ordering -> Integer,
        params -> Text,
        user_id -> Integer,
        catid -> Integer,
        access -> Unsigned<Integer>,
        mobile -> Varchar,
        webpage -> Varchar,
        sortname1 -> Varchar,
        sortname2 -> Varchar,
        sortname3 -> Varchar,
        language -> Varchar,
        created -> Datetime,
        created_by -> Unsigned<Integer>,
        created_by_alias -> Varchar,
        modified -> Datetime,
        modified_by -> Unsigned<Integer>,
        metakey -> Nullable<Text>,
        metadesc -> Text,
        metadata -> Text,
        featured -> Unsigned<Tinyint>,
        publish_up -> Nullable<Datetime>,
        publish_down -> Nullable<Datetime>,
        version -> Unsigned<Integer>,
        hits -> Unsigned<Integer>,
    }
}

table! {
    cms_content (id) {
        id -> Unsigned<Integer>,
        asset_id -> Unsigned<Integer>,
        title -> Varchar,
        alias -> Varchar,
        introtext -> Mediumtext,
        fulltext -> Mediumtext,
        state -> Tinyint,
        catid -> Unsigned<Integer>,
        created -> Datetime,
        created_by -> Unsigned<Integer>,
        created_by_alias -> Varchar,
        modified -> Datetime,
        modified_by -> Unsigned<Integer>,
        checked_out -> Nullable<Unsigned<Integer>>,
        checked_out_time -> Nullable<Datetime>,
        publish_up -> Nullable<Datetime>,
        publish_down -> Nullable<Datetime>,
        images -> Text,
        urls -> Text,
        attribs -> Varchar,
        version -> Unsigned<Integer>,
        ordering -> Integer,
        metakey -> Nullable<Text>,
        metadesc -> Text,
        access -> Unsigned<Integer>,
        hits -> Unsigned<Integer>,
        metadata -> Text,
        featured -> Unsigned<Tinyint>,
        language -> Char,
        note -> Varchar,
    }
}

table! {
    cms_content_frontpage (content_id) {
        content_id -> Integer,
        ordering -> Integer,
        featured_up -> Nullable<Datetime>,
        featured_down -> Nullable<Datetime>,
    }
}

table! {
    cms_content_rating (content_id) {
        content_id -> Integer,
        rating_sum -> Unsigned<Integer>,
        rating_count -> Unsigned<Integer>,
        lastip -> Varchar,
    }
}

table! {
    cms_extensions (extension_id) {
        extension_id -> Integer,
        package_id -> Integer,
        name -> Varchar,
        #[sql_name = "type"]
        type_ -> Varchar,
        element -> Varchar,
        changelogurl -> Nullable<Text>,
        folder -> Varchar,
        client_id -> Tinyint,
        enabled -> Tinyint,
        access -> Unsigned<Integer>,
        protected -> Tinyint,
        locked -> Tinyint,
        manifest_cache -> Text,
        params -> Text,
        custom_data -> Text,
        checked_out -> Nullable<Unsigned<Integer>>,
        checked_out_time -> Nullable<Datetime>,
        ordering -> Nullable<Integer>,
        state -> Nullable<Integer>,
        note -> Nullable<Varchar>,
    }
}

table! {
    cms_fields (id) {
        id -> Unsigned<Integer>,
        asset_id -> Unsigned<Integer>,
        context -> Varchar,
        group_id -> Unsigned<Integer>,
        title -> Varchar,
        name -> Varchar,
        label -> Varchar,
        default_value -> Nullable<Text>,
        #[sql_name = "type"]
        type_ -> Varchar,
        note -> Varchar,
        description -> Text,
        state -> Tinyint,
        required -> Tinyint,
        only_use_in_subform -> Tinyint,
        checked_out -> Nullable<Unsigned<Integer>>,
        checked_out_time -> Nullable<Datetime>,
        ordering -> Integer,
        params -> Text,
        fieldparams -> Text,
        language -> Char,
        created_time -> Datetime,
        created_user_id -> Unsigned<Integer>,
        modified_time -> Datetime,
        modified_by -> Unsigned<Integer>,
        access -> Integer,
    }
}

table! {
    cms_fields_categories (field_id, category_id) {
        field_id -> Integer,
        category_id -> Integer,
    }
}

table! {
    cms_fields_groups (id) {
        id -> Unsigned<Integer>,
        asset_id -> Unsigned<Integer>,
        context -> Varchar,
        title -> Varchar,
        note -> Varchar,
        description -> Text,
        state -> Tinyint,
        checked_out -> Nullable<Unsigned<Integer>>,
        checked_out_time -> Nullable<Datetime>,
        ordering -> Integer,
        params -> Text,
        language -> Char,
        created -> Datetime,
        created_by -> Unsigned<Integer>,
        modified -> Datetime,
        modified_by -> Unsigned<Integer>,
        access -> Integer,
    }
}

table! {
    cms_finder_filters (filter_id) {
        filter_id -> Unsigned<Integer>,
        title -> Varchar,
        alias -> Varchar,
        state -> Tinyint,
        created -> Datetime,
        created_by -> Unsigned<Integer>,
        created_by_alias -> Varchar,
        modified -> Datetime,
        modified_by -> Unsigned<Integer>,
        checked_out -> Nullable<Unsigned<Integer>>,
        checked_out_time -> Nullable<Datetime>,
        map_count -> Unsigned<Integer>,
        data -> Nullable<Text>,
        params -> Nullable<Mediumtext>,
    }
}

table! {
    cms_finder_links (link_id) {
        link_id -> Unsigned<Integer>,
        url -> Varchar,
        route -> Varchar,
        title -> Nullable<Varchar>,
        description -> Nullable<Text>,
        indexdate -> Datetime,
        md5sum -> Nullable<Varchar>,
        published -> Tinyint,
        state -> Integer,
        access -> Integer,
        language -> Char,
        publish_start_date -> Nullable<Datetime>,
        publish_end_date -> Nullable<Datetime>,
        start_date -> Nullable<Datetime>,
        end_date -> Nullable<Datetime>,
        list_price -> Unsigned<Double>,
        sale_price -> Unsigned<Double>,
        type_id -> Integer,
        object -> Nullable<Mediumblob>,
    }
}

table! {
    cms_finder_links_terms (link_id, term_id) {
        link_id -> Unsigned<Integer>,
        term_id -> Unsigned<Integer>,
        weight -> Unsigned<Float>,
    }
}

table! {
    cms_finder_logging (md5sum) {
        searchterm -> Varchar,
        md5sum -> Varchar,
        query -> Blob,
        hits -> Integer,
        results -> Integer,
    }
}

table! {
    cms_finder_taxonomy (id) {
        id -> Unsigned<Integer>,
        parent_id -> Unsigned<Integer>,
        lft -> Integer,
        rgt -> Integer,
        level -> Unsigned<Integer>,
        path -> Varchar,
        title -> Varchar,
        alias -> Varchar,
        state -> Unsigned<Tinyint>,
        access -> Unsigned<Tinyint>,
        language -> Char,
    }
}

table! {
    cms_finder_taxonomy_map (link_id, node_id) {
        link_id -> Unsigned<Integer>,
        node_id -> Unsigned<Integer>,
    }
}

table! {
    cms_finder_terms (term_id) {
        term_id -> Unsigned<Integer>,
        term -> Varchar,
        stem -> Varchar,
        common -> Unsigned<Tinyint>,
        phrase -> Unsigned<Tinyint>,
        weight -> Unsigned<Float>,
        soundex -> Varchar,
        links -> Integer,
        language -> Char,
    }
}

table! {
    cms_finder_types (id) {
        id -> Unsigned<Integer>,
        title -> Varchar,
        mime -> Varchar,
    }
}

table! {
    cms_history (version_id) {
        version_id -> Unsigned<Integer>,
        item_id -> Varchar,
        version_note -> Varchar,
        save_date -> Datetime,
        editor_user_id -> Unsigned<Integer>,
        character_count -> Unsigned<Integer>,
        sha1_hash -> Varchar,
        version_data -> Mediumtext,
        keep_forever -> Tinyint,
    }
}

table! {
    cms_languages (lang_id) {
        lang_id -> Unsigned<Integer>,
        asset_id -> Unsigned<Integer>,
        lang_code -> Char,
        title -> Varchar,
        title_native -> Varchar,
        sef -> Varchar,
        image -> Varchar,
        description -> Varchar,
        metakey -> Nullable<Text>,
        metadesc -> Text,
        sitename -> Varchar,
        published -> Integer,
        access -> Unsigned<Integer>,
        ordering -> Integer,
    }
}

table! {
    cms_mail_templates (template_id, language) {
        template_id -> Varchar,
        extension -> Varchar,
        language -> Char,
        subject -> Varchar,
        body -> Text,
        htmlbody -> Text,
        attachments -> Text,
        params -> Text,
    }
}

table! {
    cms_menu (id) {
        id -> Integer,
        menutype -> Varchar,
        title -> Varchar,
        alias -> Varchar,
        note -> Varchar,
        path -> Varchar,
        link -> Varchar,
        #[sql_name = "type"]
        type_ -> Varchar,
        published -> Tinyint,
        parent_id -> Unsigned<Integer>,
        level -> Unsigned<Integer>,
        component_id -> Unsigned<Integer>,
        checked_out -> Nullable<Unsigned<Integer>>,
        checked_out_time -> Nullable<Datetime>,
        browserNav -> Tinyint,
        access -> Unsigned<Integer>,
        img -> Varchar,
        template_style_id -> Unsigned<Integer>,
        params -> Text,
        lft -> Integer,
        rgt -> Integer,
        home -> Unsigned<Tinyint>,
        language -> Char,
        client_id -> Tinyint,
        publish_up -> Nullable<Datetime>,
        publish_down -> Nullable<Datetime>,
    }
}

table! {
    cms_menu_types (id) {
        id -> Unsigned<Integer>,
        asset_id -> Unsigned<Integer>,
        menutype -> Varchar,
        title -> Varchar,
        description -> Varchar,
        client_id -> Integer,
    }
}

table! {
    cms_messages (message_id) {
        message_id -> Unsigned<Integer>,
        user_id_from -> Unsigned<Integer>,
        user_id_to -> Unsigned<Integer>,
        folder_id -> Unsigned<Tinyint>,
        date_time -> Datetime,
        state -> Tinyint,
        priority -> Unsigned<Tinyint>,
        subject -> Varchar,
        message -> Text,
    }
}

table! {
    cms_modules (id) {
        id -> Integer,
        asset_id -> Unsigned<Integer>,
        title -> Varchar,
        note -> Varchar,
        content -> Nullable<Text>,
        ordering -> Integer,
        position -> Varchar,
        checked_out -> Nullable<Unsigned<Integer>>,
        checked_out_time -> Nullable<Datetime>,
        publish_up -> Nullable<Datetime>,
        publish_down -> Nullable<Datetime>,
        published -> Tinyint,
        module -> Nullable<Varchar>,
        access -> Unsigned<Integer>,
        showtitle -> Unsigned<Tinyint>,
        params -> Text,
        client_id -> Tinyint,
        language -> Char,
    }
}

table! {
    cms_modules_menu (moduleid, menuid) {
        moduleid -> Integer,
        menuid -> Integer,
    }
}

table! {
    cms_newsfeeds (id) {
        catid -> Integer,
        id -> Unsigned<Integer>,
        name -> Varchar,
        alias -> Varchar,
        link -> Varchar,
        published -> Tinyint,
        numarticles -> Unsigned<Integer>,
        cache_time -> Unsigned<Integer>,
        checked_out -> Nullable<Unsigned<Integer>>,
        checked_out_time -> Nullable<Datetime>,
        ordering -> Integer,
        rtl -> Tinyint,
        access -> Unsigned<Integer>,
        language -> Char,
        params -> Text,
        created -> Datetime,
        created_by -> Unsigned<Integer>,
        created_by_alias -> Varchar,
        modified -> Datetime,
        modified_by -> Unsigned<Integer>,
        metakey -> Nullable<Text>,
        metadesc -> Text,
        metadata -> Text,
        publish_up -> Nullable<Datetime>,
        publish_down -> Nullable<Datetime>,
        description -> Text,
        version -> Unsigned<Integer>,
        hits -> Unsigned<Integer>,
        images -> Text,
    }
}

table! {
    cms_overrider (id) {
        id -> Integer,
        constant -> Varchar,
        string -> Text,
        file -> Varchar,
    }
}

table! {
    cms_postinstall_messages (postinstall_message_id) {
        postinstall_message_id -> Unsigned<Bigint>,
        extension_id -> Bigint,
        title_key -> Varchar,
        description_key -> Varchar,
        action_key -> Varchar,
        language_extension -> Varchar,
        language_client_id -> Tinyint,
        #[sql_name = "type"]
        type_ -> Varchar,
        action_file -> Nullable<Varchar>,
        action -> Nullable<Varchar>,
        condition_file -> Nullable<Varchar>,
        condition_method -> Nullable<Varchar>,
        version_introduced -> Varchar,
        enabled -> Tinyint,
    }
}

table! {
    cms_privacy_consents (id) {
        id -> Unsigned<Integer>,
        user_id -> Unsigned<Integer>,
        state -> Integer,
        created -> Datetime,
        subject -> Varchar,
        body -> Text,
        remind -> Tinyint,
        token -> Varchar,
    }
}

table! {
    cms_privacy_requests (id) {
        id -> Unsigned<Integer>,
        email -> Varchar,
        requested_at -> Datetime,
        status -> Tinyint,
        request_type -> Varchar,
        confirm_token -> Varchar,
        confirm_token_created_at -> Nullable<Datetime>,
    }
}

table! {
    cms_redirect_links (id) {
        id -> Unsigned<Integer>,
        old_url -> Varchar,
        new_url -> Nullable<Varchar>,
        referer -> Varchar,
        comment -> Varchar,
        hits -> Unsigned<Integer>,
        published -> Tinyint,
        created_date -> Datetime,
        modified_date -> Datetime,
        header -> Smallint,
    }
}

table! {
    cms_scheduler_tasks (id) {
        id -> Unsigned<Integer>,
        asset_id -> Unsigned<Integer>,
        title -> Varchar,
        #[sql_name = "type"]
        type_ -> Varchar,
        execution_rules -> Nullable<Text>,
        cron_rules -> Nullable<Text>,
        state -> Tinyint,
        last_exit_code -> Integer,
        last_execution -> Nullable<Datetime>,
        next_execution -> Nullable<Datetime>,
        times_executed -> Nullable<Integer>,
        times_failed -> Nullable<Integer>,
        locked -> Nullable<Datetime>,
        priority -> Smallint,
        ordering -> Integer,
        cli_exclusive -> Smallint,
        params -> Text,
        note -> Nullable<Text>,
        created -> Datetime,
        created_by -> Unsigned<Integer>,
        checked_out -> Nullable<Unsigned<Integer>>,
        checked_out_time -> Nullable<Datetime>,
    }
}

table! {
    cms_schemas (extension_id, version_id) {
        extension_id -> Integer,
        version_id -> Varchar,
    }
}

table! {
    cms_session (session_id) {
        session_id -> Varbinary,
        client_id -> Nullable<Unsigned<Tinyint>>,
        guest -> Nullable<Unsigned<Tinyint>>,
        time -> Integer,
        data -> Nullable<Mediumtext>,
        userid -> Nullable<Integer>,
        username -> Nullable<Varchar>,
    }
}

table! {
    cms_tags (id) {
        id -> Unsigned<Integer>,
        parent_id -> Unsigned<Integer>,
        lft -> Integer,
        rgt -> Integer,
        level -> Unsigned<Integer>,
        path -> Varchar,
        title -> Varchar,
        alias -> Varchar,
        note -> Varchar,
        description -> Mediumtext,
        published -> Tinyint,
        checked_out -> Nullable<Unsigned<Integer>>,
        checked_out_time -> Nullable<Datetime>,
        access -> Unsigned<Integer>,
        params -> Text,
        metadesc -> Varchar,
        metakey -> Varchar,
        metadata -> Varchar,
        created_user_id -> Unsigned<Integer>,
        created_time -> Datetime,
        created_by_alias -> Varchar,
        modified_user_id -> Unsigned<Integer>,
        modified_time -> Datetime,
        images -> Text,
        urls -> Text,
        hits -> Unsigned<Integer>,
        language -> Char,
        version -> Unsigned<Integer>,
        publish_up -> Nullable<Datetime>,
        publish_down -> Nullable<Datetime>,
    }
}

table! {
    cms_template_overrides (id) {
        id -> Unsigned<Integer>,
        template -> Varchar,
        hash_id -> Varchar,
        extension_id -> Nullable<Integer>,
        state -> Tinyint,
        action -> Varchar,
        client_id -> Unsigned<Tinyint>,
        created_date -> Datetime,
        modified_date -> Nullable<Datetime>,
    }
}

table! {
    cms_template_styles (id) {
        id -> Unsigned<Integer>,
        template -> Varchar,
        client_id -> Unsigned<Tinyint>,
        home -> Char,
        title -> Varchar,
        inheritable -> Tinyint,
        parent -> Nullable<Varchar>,
        params -> Text,
    }
}

table! {
    cms_ucm_base (ucm_id) {
        ucm_id -> Unsigned<Integer>,
        ucm_item_id -> Integer,
        ucm_type_id -> Integer,
        ucm_language_id -> Integer,
    }
}

table! {
    cms_ucm_content (core_content_id) {
        core_content_id -> Unsigned<Integer>,
        core_type_alias -> Varchar,
        core_title -> Varchar,
        core_alias -> Varchar,
        core_body -> Nullable<Mediumtext>,
        core_state -> Tinyint,
        core_checked_out_time -> Nullable<Datetime>,
        core_checked_out_user_id -> Nullable<Unsigned<Integer>>,
        core_access -> Unsigned<Integer>,
        core_params -> Nullable<Text>,
        core_featured -> Unsigned<Tinyint>,
        core_metadata -> Varchar,
        core_created_user_id -> Unsigned<Integer>,
        core_created_by_alias -> Varchar,
        core_created_time -> Datetime,
        core_modified_user_id -> Unsigned<Integer>,
        core_modified_time -> Datetime,
        core_language -> Char,
        core_publish_up -> Nullable<Datetime>,
        core_publish_down -> Nullable<Datetime>,
        core_content_item_id -> Unsigned<Integer>,
        asset_id -> Unsigned<Integer>,
        core_images -> Nullable<Text>,
        core_urls -> Nullable<Text>,
        core_hits -> Unsigned<Integer>,
        core_version -> Unsigned<Integer>,
        core_ordering -> Integer,
        core_metakey -> Nullable<Text>,
        core_metadesc -> Nullable<Text>,
        core_catid -> Unsigned<Integer>,
        core_type_id -> Unsigned<Integer>,
    }
}

table! {
    cms_update_sites (update_site_id) {
        update_site_id -> Integer,
        name -> Nullable<Varchar>,
        #[sql_name = "type"]
        type_ -> Nullable<Varchar>,
        location -> Text,
        enabled -> Nullable<Integer>,
        last_check_timestamp -> Nullable<Bigint>,
        extra_query -> Nullable<Varchar>,
        checked_out -> Nullable<Unsigned<Integer>>,
        checked_out_time -> Nullable<Datetime>,
    }
}

table! {
    cms_update_sites_extensions (update_site_id, extension_id) {
        update_site_id -> Integer,
        extension_id -> Integer,
    }
}

table! {
    cms_updates (update_id) {
        update_id -> Integer,
        update_site_id -> Nullable<Integer>,
        extension_id -> Nullable<Integer>,
        name -> Nullable<Varchar>,
        description -> Text,
        element -> Nullable<Varchar>,
        #[sql_name = "type"]
        type_ -> Nullable<Varchar>,
        folder -> Nullable<Varchar>,
        client_id -> Nullable<Tinyint>,
        version -> Nullable<Varchar>,
        data -> Text,
        detailsurl -> Text,
        infourl -> Text,
        changelogurl -> Nullable<Text>,
        extra_query -> Nullable<Varchar>,
    }
}

table! {
    cms_user_keys (id) {
        id -> Unsigned<Integer>,
        user_id -> Varchar,
        token -> Varchar,
        series -> Varchar,
        time -> Varchar,
        uastring -> Varchar,
    }
}

table! {
    cms_user_notes (id) {
        id -> Unsigned<Integer>,
        user_id -> Unsigned<Integer>,
        catid -> Unsigned<Integer>,
        subject -> Varchar,
        body -> Text,
        state -> Tinyint,
        checked_out -> Nullable<Unsigned<Integer>>,
        checked_out_time -> Nullable<Datetime>,
        created_user_id -> Unsigned<Integer>,
        created_time -> Datetime,
        modified_user_id -> Unsigned<Integer>,
        modified_time -> Datetime,
        review_time -> Nullable<Datetime>,
        publish_up -> Nullable<Datetime>,
        publish_down -> Nullable<Datetime>,
    }
}

table! {
    cms_user_usergroup_map (user_id, group_id) {
        user_id -> Unsigned<Integer>,
        group_id -> Unsigned<Integer>,
    }
}

table! {
    cms_usergroups (id) {
        id -> Unsigned<Integer>,
        parent_id -> Unsigned<Integer>,
        lft -> Integer,
        rgt -> Integer,
        title -> Varchar,
    }
}

table! {
    cms_users (id) {
        id -> Integer,
        name -> Varchar,
        username -> Varchar,
        email -> Varchar,
        password -> Varchar,
        block -> Tinyint,
        sendEmail -> Nullable<Tinyint>,
        registerDate -> Datetime,
        lastvisitDate -> Nullable<Datetime>,
        activation -> Varchar,
        params -> Text,
        lastResetTime -> Nullable<Datetime>,
        resetCount -> Integer,
        otpKey -> Varchar,
        otep -> Varchar,
        requireReset -> Tinyint,
        authProvider -> Varchar,
    }
}

table! {
    cms_viewlevels (id) {
        id -> Unsigned<Integer>,
        title -> Varchar,
        ordering -> Integer,
        rules -> Varchar,
    }
}

table! {
    cms_webauthn_credentials (id) {
        id -> Varchar,
        user_id -> Varchar,
        label -> Varchar,
        credential -> Mediumtext,
    }
}

table! {
    cms_workflow_associations (item_id, extension) {
        item_id -> Integer,
        stage_id -> Integer,
        extension -> Varchar,
    }
}

table! {
    cms_workflow_stages (id) {
        id -> Integer,
        asset_id -> Nullable<Integer>,
        ordering -> Integer,
        workflow_id -> Integer,
        published -> Tinyint,
        title -> Varchar,
        description -> Text,
        default -> Tinyint,
        checked_out_time -> Nullable<Datetime>,
        checked_out -> Nullable<Unsigned<Integer>>,
    }
}

table! {
    cms_workflow_transitions (id) {
        id -> Integer,
        asset_id -> Nullable<Integer>,
        ordering -> Integer,
        workflow_id -> Integer,
        published -> Tinyint,
        title -> Varchar,
        description -> Text,
        from_stage_id -> Integer,
        to_stage_id -> Integer,
        options -> Text,
        checked_out_time -> Nullable<Datetime>,
        checked_out -> Nullable<Unsigned<Integer>>,
    }
}

table! {
    cms_workflows (id) {
        id -> Integer,
        asset_id -> Nullable<Integer>,
        published -> Tinyint,
        title -> Varchar,
        description -> Text,
        extension -> Varchar,
        default -> Tinyint,
        ordering -> Integer,
        created -> Datetime,
        created_by -> Integer,
        modified -> Datetime,
        modified_by -> Integer,
        checked_out_time -> Nullable<Datetime>,
        checked_out -> Nullable<Unsigned<Integer>>,
    }
}

allow_tables_to_appear_in_same_query!(
    cms_action_log_config,
    cms_action_logs,
    cms_action_logs_extensions,
    cms_action_logs_users,
    cms_assets,
    cms_associations,
    cms_banner_clients,
    cms_banner_tracks,
    cms_banners,
    cms_categories,
    cms_contact_details,
    cms_content,
    cms_content_frontpage,
    cms_content_rating,
    cms_extensions,
    cms_fields,
    cms_fields_categories,
    cms_fields_groups,
    cms_finder_filters,
    cms_finder_links,
    cms_finder_links_terms,
    cms_finder_logging,
    cms_finder_taxonomy,
    cms_finder_taxonomy_map,
    cms_finder_terms,
    cms_finder_types,
    cms_history,
    cms_languages,
    cms_mail_templates,
    cms_menu,
    cms_menu_types,
    cms_messages,
    cms_modules,
    cms_modules_menu,
    cms_newsfeeds,
    cms_overrider,
    cms_postinstall_messages,
    cms_privacy_consents,
    cms_privacy_requests,
    cms_redirect_links,
    cms_scheduler_tasks,
    cms_schemas,
    cms_session,
    cms_tags,
    cms_template_overrides,
    cms_template_styles,
    cms_ucm_base,
    cms_ucm_content,
    cms_update_sites,
    cms_update_sites_extensions,
    cms_updates,
    cms_user_keys,
    cms_user_notes,
    cms_user_usergroup_map,
    cms_usergroups,
    cms_users,
    cms_viewlevels,
    cms_webauthn_credentials,
    cms_workflow_associations,
    cms_workflow_stages,
    cms_workflow_transitions,
    cms_workflows,
);
