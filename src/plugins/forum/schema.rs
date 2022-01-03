table! {
    forum_posts (id) {
        id -> Int4,
        topic_id -> Int4,
        body -> Json,
        author_id -> Int4,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    forum_topics (id) {
        id -> Int4,
        title -> Varchar,
        summary -> Varchar,
        body -> Json,
        author_id -> Int4,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    forum_topics_tags (id) {
        id -> Int4,
        topic_id -> Int4,
        tag_id -> Int4,
        created_at -> Timestamp,
    }
}

allow_tables_to_appear_in_same_query!(forum_posts, forum_topics, forum_topics_tags,);
