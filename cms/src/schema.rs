// @generated automatically by Diesel CLI.

diesel::table! {
    cms_collection_pages (id) {
        id -> Int4,
        collection_id -> Int4,
        page_id -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cms_collections (id) {
        id -> Int4,
        lang -> Varchar,
        path -> Varchar,
        depth -> Int4,
        num_of_children -> Int4,
        title -> Varchar,
        version -> Int4,
        updated_at -> Timestamp,
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
    cms_groups (id) {
        id -> Int4,
        lang -> Varchar,
        name -> Varchar,
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
    cms_menu_pages (id) {
        id -> Int4,
        menu_id -> Int4,
        page_id -> Int4,
        position -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cms_menus (id) {
        id -> Int4,
        lang -> Varchar,
        panel -> Varchar,
        parent_id -> Nullable<Int4>,
        depth -> Int4,
        title -> Varchar,
        slug -> Varchar,
        position -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cms_pages (id) {
        id -> Int4,
        lang -> Varchar,
        slug -> Varchar,
        path -> Varchar,
        depth -> Int4,
        ip -> Varchar,
        title -> Varchar,
        summary -> Nullable<Varchar>,
        body -> Text,
        body_editor -> Int4,
        owner_id -> Int4,
        owner_nick -> Varchar,
        owner_name -> Varchar,
        auth_by -> Int4,
        published_at -> Nullable<Timestamp>,
        locked_at -> Nullable<Timestamp>,
        expired_at -> Nullable<Timestamp>,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    cms_tag_pages (id) {
        id -> Int4,
        tag_id -> Int4,
        page_id -> Int4,
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

diesel::table! {
    cms_user_groups (id) {
        id -> Int4,
        group_id -> Int4,
        user_id -> Int4,
        created_at -> Timestamp,
    }
}

diesel::allow_tables_to_appear_in_same_query!(
    cms_collection_pages,
    cms_collections,
    cms_comments,
    cms_groups,
    cms_logs,
    cms_menu_pages,
    cms_menus,
    cms_pages,
    cms_tag_pages,
    cms_tags,
    cms_user_groups,
);
