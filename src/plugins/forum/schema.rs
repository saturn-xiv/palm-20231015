table! {
    bb_bans (id) {
        id -> Unsigned<Integer>,
        username -> Nullable<Varchar>,
        ip -> Nullable<Varchar>,
        email -> Nullable<Varchar>,
        message -> Nullable<Varchar>,
        expire -> Nullable<Unsigned<Integer>>,
        ban_creator -> Unsigned<Integer>,
    }
}

table! {
    bb_categories (id) {
        id -> Unsigned<Integer>,
        cat_name -> Varchar,
        disp_position -> Integer,
    }
}

table! {
    bb_censoring (id) {
        id -> Unsigned<Integer>,
        search_for -> Varchar,
        replace_with -> Varchar,
    }
}

table! {
    bb_config (conf_name) {
        conf_name -> Varchar,
        conf_value -> Nullable<Text>,
    }
}

table! {
    bb_forum_perms (group_id, forum_id) {
        group_id -> Integer,
        forum_id -> Integer,
        read_forum -> Bool,
        post_replies -> Bool,
        post_topics -> Bool,
    }
}

table! {
    bb_forum_subscriptions (user_id, forum_id) {
        user_id -> Unsigned<Integer>,
        forum_id -> Unsigned<Integer>,
    }
}

table! {
    bb_groups (g_id) {
        g_id -> Unsigned<Integer>,
        g_title -> Varchar,
        g_user_title -> Nullable<Varchar>,
        g_promote_min_posts -> Unsigned<Integer>,
        g_promote_next_group -> Unsigned<Integer>,
        g_moderator -> Bool,
        g_mod_edit_users -> Bool,
        g_mod_rename_users -> Bool,
        g_mod_change_passwords -> Bool,
        g_mod_ban_users -> Bool,
        g_mod_promote_users -> Bool,
        g_read_board -> Bool,
        g_view_users -> Bool,
        g_post_replies -> Bool,
        g_post_topics -> Bool,
        g_edit_posts -> Bool,
        g_delete_posts -> Bool,
        g_delete_topics -> Bool,
        g_post_links -> Bool,
        g_set_title -> Bool,
        g_search -> Bool,
        g_search_users -> Bool,
        g_send_email -> Bool,
        g_post_flood -> Smallint,
        g_search_flood -> Smallint,
        g_email_flood -> Smallint,
        g_report_flood -> Smallint,
    }
}

table! {
    bb_posts (id) {
        id -> Unsigned<Integer>,
        poster -> Varchar,
        poster_id -> Unsigned<Integer>,
        poster_ip -> Nullable<Varchar>,
        poster_email -> Nullable<Varchar>,
        message -> Nullable<Mediumtext>,
        hide_smilies -> Bool,
        posted -> Unsigned<Integer>,
        edited -> Nullable<Unsigned<Integer>>,
        edited_by -> Nullable<Varchar>,
        topic_id -> Unsigned<Integer>,
    }
}

table! {
    bb_reports (id) {
        id -> Unsigned<Integer>,
        post_id -> Unsigned<Integer>,
        topic_id -> Unsigned<Integer>,
        forum_id -> Unsigned<Integer>,
        reported_by -> Unsigned<Integer>,
        created -> Unsigned<Integer>,
        message -> Nullable<Text>,
        zapped -> Nullable<Unsigned<Integer>>,
        zapped_by -> Nullable<Unsigned<Integer>>,
    }
}

table! {
    bb_search_cache (id) {
        id -> Unsigned<Integer>,
        ident -> Varchar,
        search_data -> Nullable<Mediumtext>,
    }
}

table! {
    bb_search_words (word) {
        id -> Unsigned<Integer>,
        word -> Varchar,
    }
}

table! {
    bb_topic_subscriptions (user_id, topic_id) {
        user_id -> Unsigned<Integer>,
        topic_id -> Unsigned<Integer>,
    }
}

table! {
    bb_users (id) {
        id -> Unsigned<Integer>,
        group_id -> Unsigned<Integer>,
        username -> Varchar,
        password -> Varchar,
        email -> Varchar,
        title -> Nullable<Varchar>,
        realname -> Nullable<Varchar>,
        url -> Nullable<Varchar>,
        jabber -> Nullable<Varchar>,
        icq -> Nullable<Varchar>,
        msn -> Nullable<Varchar>,
        aim -> Nullable<Varchar>,
        yahoo -> Nullable<Varchar>,
        location -> Nullable<Varchar>,
        signature -> Nullable<Text>,
        disp_topics -> Nullable<Unsigned<Tinyint>>,
        disp_posts -> Nullable<Unsigned<Tinyint>>,
        email_setting -> Bool,
        notify_with_post -> Bool,
        auto_notify -> Bool,
        show_smilies -> Bool,
        show_img -> Bool,
        show_img_sig -> Bool,
        show_avatars -> Bool,
        show_sig -> Bool,
        timezone -> Float,
        dst -> Bool,
        time_format -> Bool,
        date_format -> Bool,
        language -> Varchar,
        style -> Varchar,
        num_posts -> Unsigned<Integer>,
        last_post -> Nullable<Unsigned<Integer>>,
        last_search -> Nullable<Unsigned<Integer>>,
        last_email_sent -> Nullable<Unsigned<Integer>>,
        last_report_sent -> Nullable<Unsigned<Integer>>,
        registered -> Unsigned<Integer>,
        registration_ip -> Varchar,
        last_visit -> Unsigned<Integer>,
        admin_note -> Nullable<Varchar>,
        activate_string -> Nullable<Varchar>,
        activate_key -> Nullable<Varchar>,
    }
}

allow_tables_to_appear_in_same_query!(
    bb_bans,
    bb_categories,
    bb_censoring,
    bb_config,
    bb_forum_perms,
    bb_forum_subscriptions,
    bb_groups,
    bb_posts,
    bb_reports,
    bb_search_cache,
    bb_search_words,
    bb_topic_subscriptions,
    bb_users,
);
