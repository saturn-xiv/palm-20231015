// @generated automatically by Diesel CLI.

diesel::table! {
    attachments (id) {
        id -> Int4,
        user_id -> Int4,
        bucket -> Varchar,
        name -> Varchar,
        title -> Varchar,
        size -> Int8,
        content_type -> Varchar,
        status -> Int4,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    attachments_resources (id) {
        id -> Int4,
        attachment_id -> Nullable<Int4>,
        resource_type -> Varchar,
        resource_id -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    bbs_categories (id) {
        id -> Int4,
        lang -> Varchar,
        name -> Varchar,
        position -> Int4,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    bbs_logs (id) {
        id -> Int4,
        user_id -> Int4,
        ip -> Varchar,
        message -> Text,
        created_at -> Timestamp,
    }
}

diesel::table! {
    categories (id) {
        id -> Int4,
        code -> Varchar,
        left -> Int4,
        right -> Int4,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    categories_resources (id) {
        id -> Int4,
        category_id -> Int4,
        resource_type -> Varchar,
        resource_id -> Int4,
        priority -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cms_comments (id) {
        id -> Int4,
        page_id -> Int4,
        comment_id -> Nullable<Int4>,
        body -> Text,
        body_editor -> Int4,
        owner_id -> Int4,
        owner_nick -> Varchar,
        owner_name -> Varchar,
        ip -> Varchar,
        auth_by -> Int4,
        published_at -> Nullable<Timestamp>,
        locked_at -> Nullable<Timestamp>,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cms_logs (id) {
        id -> Int4,
        user_id -> Int4,
        ip -> Varchar,
        message -> Text,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cms_tags (id) {
        id -> Int4,
        name -> Varchar,
        lang -> Varchar,
        slug -> Varchar,
        position -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    comments (id) {
        id -> Int4,
        user_id -> Int4,
        ip -> Varchar,
        resource_id -> Int4,
        resource_type -> Varchar,
        content -> Text,
        content_editor -> Int4,
        star -> Int4,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    crawler_logs (id) {
        id -> Int4,
        url -> Varchar,
        body -> Bytea,
        created_at -> Timestamp,
    }
}

diesel::table! {
    favorites (id) {
        id -> Int4,
        user_id -> Int4,
        resource_id -> Int4,
        resource_type -> Varchar,
        created_at -> Timestamp,
    }
}

diesel::table! {
    feedbacks (id) {
        id -> Int4,
        user_id -> Int4,
        username -> Varchar,
        mobile -> Nullable<Varchar>,
        email -> Nullable<Varchar>,
        content -> Text,
        resource_id -> Int4,
        resource_type -> Varchar,
        #[sql_name = "type"]
        type_ -> Int4,
        status -> Int4,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    footprints (id) {
        id -> Int4,
        user_id -> Int4,
        resource_id -> Int4,
        resource_type -> Varchar,
        created_at -> Timestamp,
    }
}

diesel::table! {
    google_users (id) {
        id -> Int4,
        user_id -> Int4,
        sub -> Varchar,
        code -> Bytea,
        token -> Text,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    issues (id) {
        id -> Int4,
        question -> Varchar,
        answer -> Text,
        answer_editor -> Int4,
        resource_type -> Varchar,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    leave_words (id) {
        id -> Int4,
        lang -> Varchar,
        ip -> Varchar,
        body -> Text,
        body_editor -> Int4,
        status -> Int4,
        published_at -> Nullable<Timestamp>,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    locales (id) {
        id -> Int4,
        lang -> Varchar,
        code -> Varchar,
        message -> Text,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    logs (id) {
        id -> Int4,
        user_id -> Int4,
        level -> Int4,
        ip -> Varchar,
        resource_type -> Varchar,
        resource_id -> Nullable<Int4>,
        message -> Text,
        created_at -> Timestamp,
    }
}

diesel::table! {
    menu_bars (id) {
        id -> Int4,
        lang -> Varchar,
        code -> Varchar,
        title -> Varchar,
        sort_order -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    menu_links (id) {
        id -> Int4,
        bar_id -> Int4,
        title -> Varchar,
        url -> Varchar,
        sort_order -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    notifications (id) {
        id -> Int4,
        from -> Int4,
        message -> Varchar,
        url -> Nullable<Varchar>,
        read_at -> Nullable<Timestamp>,
        created_at -> Timestamp,
    }
}

diesel::table! {
    search_histories (id) {
        id -> Int4,
        user_id -> Int4,
        keyword -> Varchar,
        from -> Varchar,
        created_at -> Timestamp,
    }
}

diesel::table! {
    settings (id) {
        id -> Int4,
        key -> Varchar,
        user_id -> Nullable<Int4>,
        salt -> Nullable<Bytea>,
        value -> Bytea,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    shorter_links (id) {
        id -> Int4,
        url -> Varchar,
        details -> Text,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    tags (id) {
        id -> Int4,
        code -> Varchar,
        priority -> Int4,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    tags_resources (id) {
        id -> Int4,
        tag_id -> Int4,
        resource_type -> Varchar,
        resource_id -> Int4,
        priority -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    twilio_sms_logs (id) {
        id -> Int4,
        from -> Varchar,
        to -> Varchar,
        body -> Bytea,
        created_at -> Timestamp,
    }
}

diesel::table! {
    user_bans (id) {
        id -> Int4,
        user_id -> Int4,
        ip -> Varchar,
        reason -> Varchar,
        expired_at -> Timestamp,
        creator_id -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    users (id) {
        id -> Int4,
        real_name -> Varchar,
        nickname -> Varchar,
        email -> Varchar,
        password -> Nullable<Bytea>,
        salt -> Bytea,
        avatar -> Varchar,
        lang -> Varchar,
        time_zone -> Varchar,
        sign_in_count -> Int4,
        current_sign_in_at -> Nullable<Timestamp>,
        current_sign_in_ip -> Nullable<Varchar>,
        last_sign_in_at -> Nullable<Timestamp>,
        last_sign_in_ip -> Nullable<Varchar>,
        confirmed_at -> Nullable<Timestamp>,
        locked_at -> Nullable<Timestamp>,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    users_contacts (id) {
        id -> Int4,
        user_id -> Int4,
        key -> Int4,
        value -> Text,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    vote_items (id) {
        id -> Int4,
        score -> Int4,
        resource_type -> Varchar,
        resource_id -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    vote_logs (id) {
        id -> Int4,
        user_id -> Int4,
        ip -> Varchar,
        score -> Int4,
        body -> Text,
        body_editor -> Int4,
        resource_type -> Varchar,
        resource_id -> Int4,
        status -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    wechat_mini_program_users (id) {
        id -> Int4,
        user_id -> Nullable<Int4>,
        union_id -> Varchar,
        app_id -> Varchar,
        open_id -> Varchar,
        nickname -> Nullable<Varchar>,
        avatar_url -> Nullable<Varchar>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    wechat_oauth2_users (id) {
        id -> Int4,
        user_id -> Int4,
        union_id -> Varchar,
        app_id -> Varchar,
        open_id -> Varchar,
        nickname -> Varchar,
        sex -> Int4,
        city -> Varchar,
        province -> Varchar,
        country -> Varchar,
        head_img_url -> Nullable<Varchar>,
        privilege -> Bytea,
        lang -> Varchar,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::allow_tables_to_appear_in_same_query!(
    attachments,
    attachments_resources,
    bbs_categories,
    bbs_logs,
    categories,
    categories_resources,
    cms_comments,
    cms_logs,
    cms_tags,
    comments,
    crawler_logs,
    favorites,
    feedbacks,
    footprints,
    google_users,
    issues,
    leave_words,
    locales,
    logs,
    menu_bars,
    menu_links,
    notifications,
    search_histories,
    settings,
    shorter_links,
    tags,
    tags_resources,
    twilio_sms_logs,
    user_bans,
    users,
    users_contacts,
    vote_items,
    vote_logs,
    wechat_mini_program_users,
    wechat_oauth2_users,
);
