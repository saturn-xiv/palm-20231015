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
    bbs_censoring (id) {
        id -> Int4,
        search_for -> Varchar,
        replace_with -> Varchar,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    bbs_forum_subscriptions (id) {
        id -> Int4,
        user_id -> Int4,
        forum_id -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    bbs_forums (id) {
        id -> Int4,
        category_id -> Int4,
        name -> Varchar,
        detail -> Text,
        detail_editor -> Int4,
        num_topics -> Int8,
        num_posts -> Int8,
        last_post_at -> Nullable<Timestamp>,
        last_post_id -> Nullable<Int4>,
        last_poster -> Nullable<Varchar>,
        sort_by -> Int4,
        position -> Int4,
        status -> Int4,
        locked_at -> Nullable<Timestamp>,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    bbs_forums_moderators (id) {
        id -> Int4,
        forum_id -> Int4,
        user_id -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    bbs_groups (id) {
        id -> Int4,
        lang -> Varchar,
        title -> Varchar,
        post_flood -> Int4,
        search_flood -> Int4,
        email_flood -> Int4,
        report_flood -> Int4,
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
    bbs_online (id) {
        id -> Int4,
        user_id -> Int4,
        ip -> Varchar,
        idle -> Int4,
        last_post_at -> Nullable<Timestamp>,
        last_search_at -> Nullable<Timestamp>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    bbs_posts (id) {
        id -> Int4,
        topic_id -> Int4,
        poster_nick -> Varchar,
        poster_id -> Int4,
        poster_name -> Varchar,
        ip -> Varchar,
        content -> Text,
        content_editor -> Int4,
        hide_smilies -> Bool,
        posted_at -> Timestamp,
        edited_at -> Nullable<Timestamp>,
        editor_nick -> Nullable<Varchar>,
        editor_id -> Nullable<Int4>,
        editor_name -> Nullable<Varchar>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    bbs_reports (id) {
        id -> Int4,
        post_id -> Int4,
        topic_id -> Int4,
        forum_id -> Int4,
        reported_by -> Int4,
        message -> Text,
        message_editor -> Int4,
        ip -> Varchar,
        zapped_at -> Nullable<Timestamp>,
        zapped_by -> Nullable<Int4>,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    bbs_search_cache (id) {
        id -> Int4,
        keyword -> Varchar,
        result -> Text,
        created_at -> Timestamp,
    }
}

diesel::table! {
    bbs_search_matches (id) {
        id -> Int4,
        post_id -> Int4,
        word_id -> Int4,
        subject_match -> Bool,
        created_at -> Timestamp,
    }
}

diesel::table! {
    bbs_search_words (id) {
        id -> Int4,
        word -> Varchar,
        created_at -> Timestamp,
    }
}

diesel::table! {
    bbs_topic_subscriptions (id) {
        id -> Int4,
        user_id -> Int4,
        topic_id -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    bbs_topics (id) {
        id -> Int4,
        forum_id -> Int4,
        poster_nick -> Varchar,
        poster_id -> Int4,
        poster_name -> Varchar,
        subject -> Varchar,
        content -> Text,
        content_editor -> Int4,
        posted_at -> Timestamp,
        ip -> Varchar,
        first_post_id -> Nullable<Int4>,
        last_post_id -> Nullable<Int4>,
        last_post_at -> Nullable<Timestamp>,
        last_poster -> Nullable<Varchar>,
        num_views -> Int8,
        num_replies -> Int8,
        closed_at -> Nullable<Timestamp>,
        sticky -> Bool,
        moved_to -> Nullable<Int4>,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    bbs_user_groups (id) {
        id -> Int4,
        user_id -> Int4,
        group_id -> Int4,
        created_at -> Timestamp,
    }
}

diesel::allow_tables_to_appear_in_same_query!(
    bbs_categories,
    bbs_censoring,
    bbs_forum_subscriptions,
    bbs_forums,
    bbs_forums_moderators,
    bbs_groups,
    bbs_logs,
    bbs_online,
    bbs_posts,
    bbs_reports,
    bbs_search_cache,
    bbs_search_matches,
    bbs_search_words,
    bbs_topic_subscriptions,
    bbs_topics,
    bbs_user_groups,
);
