// @generated automatically by Diesel CLI.

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

diesel::allow_tables_to_appear_in_same_query!(
    bbs_categories,
    bbs_logs,
    cms_comments,
    cms_logs,
    cms_tags,
);
