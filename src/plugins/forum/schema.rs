table! {
    forum_posts (id) {
        id -> Int4,
        user_id -> Int4,
        topic_id -> Int4,
        body -> Text,
        body_editor -> Varchar,
        status -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    forum_topics (id) {
        id -> Int4,
        user_id -> Int4,
        title -> Varchar,
        summary -> Varchar,
        body -> Text,
        body_editor -> Varchar,
        status -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

allow_tables_to_appear_in_same_query!(forum_posts, forum_topics,);
