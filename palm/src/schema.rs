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
        region -> Varchar,
        status -> Int4,
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
    categories (id) {
        id -> Int4,
        code -> Varchar,
        parent_id -> Nullable<Int4>,
        priority -> Int4,
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
    cms_articles (id) {
        id -> Int4,
        lang -> Varchar,
        title -> Varchar,
        summary -> Varchar,
        body -> Text,
        editor -> Int4,
        user_id -> Int4,
        status -> Int4,
        published_at -> Timestamp,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cms_comments (id) {
        id -> Int4,
        editor -> Varchar,
        body -> Text,
        user_id -> Int4,
        article_id -> Int4,
        status -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    forum_posts (id) {
        id -> Int4,
        editor -> Int4,
        body -> Text,
        reply -> Varchar,
        user_id -> Int4,
        topic_id -> Int4,
        post_id -> Nullable<Int4>,
        status -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    forum_topics (id) {
        id -> Int4,
        lang -> Varchar,
        title -> Varchar,
        editor -> Int4,
        body -> Text,
        user_id -> Int4,
        status -> Int4,
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
        editor -> Int4,
        status -> Int4,
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
    permissions (id) {
        id -> Int4,
        subject_type -> Varchar,
        subject_id -> Int4,
        operation -> Varchar,
        resource_type -> Varchar,
        resource_id -> Nullable<Int4>,
        created_at -> Timestamp,
    }
}

diesel::table! {
    roles (id) {
        id -> Int4,
        code -> Varchar,
        parent_id -> Nullable<Int4>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    roles_constraints (id) {
        id -> Int4,
        x -> Int4,
        term -> Int4,
        y -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    roles_users (id) {
        id -> Int4,
        role_id -> Int4,
        user_id -> Int4,
        not_before -> Timestamp,
        expired_at -> Timestamp,
        version -> Int4,
        updated_at -> Timestamp,
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
    sms_logs (id) {
        id -> Int4,
        from -> Varchar,
        to -> Varchar,
        body -> Text,
        created_at -> Timestamp,
    }
}

diesel::table! {
    tags (id) {
        id -> Int4,
        code -> Varchar,
        priority -> Int4,
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
    users (id) {
        id -> Int4,
        real_name -> Varchar,
        nick_name -> Varchar,
        email -> Varchar,
        password -> Nullable<Bytea>,
        salt -> Bytea,
        uid -> Bpchar,
        provider_type -> Int4,
        provider_id -> Varchar,
        access_token -> Nullable<Varchar>,
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
        editor -> Int4,
        resource_type -> Varchar,
        resource_id -> Int4,
        status -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::allow_tables_to_appear_in_same_query!(
    attachments,
    attachments_resources,
    categories,
    categories_resources,
    cms_articles,
    cms_comments,
    forum_posts,
    forum_topics,
    leave_words,
    locales,
    logs,
    notifications,
    permissions,
    roles,
    roles_constraints,
    roles_users,
    settings,
    shorter_links,
    sms_logs,
    tags,
    tags_resources,
    users,
    users_contacts,
    vote_items,
    vote_logs,
);
