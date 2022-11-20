// @generated automatically by Diesel CLI.

diesel::table! {
    cms_articles (id) {
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
    cms_comments (id) {
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

diesel::allow_tables_to_appear_in_same_query!(cms_articles, cms_comments,);
