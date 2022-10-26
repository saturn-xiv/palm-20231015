// @generated automatically by Diesel CLI.

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

diesel::allow_tables_to_appear_in_same_query!(forum_posts, forum_topics,);