// @generated automatically by Diesel CLI.

diesel::table! {
    articles (id) {
        id -> Int4,
        ip -> Varchar,
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
    categories (id) {
        id -> Int4,
        code -> Varchar,
        left -> Int4,
        right -> Int4,
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
    comments (id) {
        id -> Int4,
        ip -> Varchar,
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
    articles,
    categories,
    categories_resources,
    comments,
    leave_words,
    notifications,
    shorter_links,
    tags,
    tags_resources,
    twilio_sms_logs,
    vote_items,
    vote_logs,
);
