table! {
    forum_posts (id) {
        id -> Uuid,
        user_id -> Uuid,
        topic_id -> Uuid,
        parent_id -> Nullable<Uuid>,
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
        id -> Uuid,
        user_id -> Uuid,
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
