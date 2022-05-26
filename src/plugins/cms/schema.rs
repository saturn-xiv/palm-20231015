// @generated automatically by Diesel CLI.

diesel::table! {
    cms_articles (id) {
        id -> Int4,
        lang -> Varchar,
        title -> Varchar,
        summary -> Varchar,
        editor -> Varchar,
        body -> Text,
        user_id -> Int4,
        status -> Varchar,
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
        status -> Varchar,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::allow_tables_to_appear_in_same_query!(cms_articles, cms_comments,);
