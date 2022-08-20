// @generated automatically by Diesel CLI.

diesel::table! {
    attachments (id) {
        id -> Int4,
        user_id -> Int4,
        bucket -> Varchar,
        name -> Varchar,
        title -> Varchar,
        size -> Int8,
        content_type -> Varchar,
        region -> Varchar,
        status -> Varchar,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    attachments_resources (id) {
        id -> Int4,
        attachment_id -> Nullable<Int4>,
        resource_type -> Varchar,
        resource_id -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    categories (id) {
        id -> Int4,
        lang -> Varchar,
        name -> Varchar,
        parent_id -> Nullable<Int4>,
        priority -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    categories_resources (id) {
        id -> Int4,
        category_id -> Int4,
        resource_type -> Varchar,
        resource_id -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    leave_words (id) {
        id -> Int4,
        lang -> Varchar,
        ip -> Varchar,
        body -> Text,
        created_at -> Timestamp,
    }
}

diesel::table! {
    logs (id) {
        id -> Int4,
        user_id -> Int4,
        level -> Varchar,
        ip -> Varchar,
        resource_type -> Varchar,
        resource_id -> Nullable<Int4>,
        message -> Text,
        created_at -> Timestamp,
    }
}

diesel::table! {
    permissions (id) {
        id -> Int4,
        role -> Varchar,
        operation -> Varchar,
        resource_type -> Varchar,
        resource_id -> Nullable<Int4>,
        created_at -> Timestamp,
    }
}

diesel::table! {
    roles (id) {
        id -> Int4,
        code -> Varchar,
        parent -> Nullable<Varchar>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    roles_constraints (id) {
        id -> Int4,
        x -> Varchar,
        term -> Varchar,
        y -> Varchar,
        created_at -> Timestamp,
    }
}

diesel::table! {
    roles_users (id) {
        id -> Int4,
        role -> Varchar,
        user -> Int4,
        nbf -> Date,
        exp -> Date,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    shorter_links (id) {
        id -> Int4,
        url -> Varchar,
        details -> Text,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    tags (id) {
        id -> Int4,
        lang -> Varchar,
        name -> Varchar,
        priority -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    tags_resources (id) {
        id -> Int4,
        tag_id -> Int4,
        resource_type -> Varchar,
        resource_id -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    twilio_sms_logs (id) {
        id -> Int4,
        from -> Varchar,
        to -> Varchar,
        body -> Text,
        created_at -> Timestamp,
    }
}

diesel::table! {
    users (id) {
        id -> Int4,
        real_name -> Varchar,
        nick_name -> Varchar,
        email -> Varchar,
        password -> Nullable<Bytea>,
        salt -> Bytea,
        uid -> Bpchar,
        provider_type -> Varchar,
        provider_id -> Varchar,
        access_token -> Nullable<Varchar>,
        avatar -> Varchar,
        lang -> Varchar,
        time_zone -> Varchar,
        sign_in_count -> Int4,
        current_sign_in_at -> Nullable<Timestamp>,
        current_sign_in_ip -> Nullable<Varchar>,
        last_sign_in_at -> Nullable<Timestamp>,
        last_sign_in_ip -> Nullable<Varchar>,
        confirmed_at -> Nullable<Timestamp>,
        locked_at -> Nullable<Timestamp>,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    vote_items (id) {
        id -> Int4,
        score -> Int4,
        resource_type -> Varchar,
        resource_id -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    vote_logs (id) {
        id -> Int4,
        user_id -> Int4,
        ip -> Varchar,
        score -> Int4,
        body -> Text,
        body_editor -> Varchar,
        resource_type -> Varchar,
        resource_id -> Int4,
        status -> Varchar,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::allow_tables_to_appear_in_same_query!(
    attachments,
    attachments_resources,
    categories,
    categories_resources,
    leave_words,
    logs,
    permissions,
    roles,
    roles_constraints,
    roles_users,
    shorter_links,
    tags,
    tags_resources,
    twilio_sms_logs,
    users,
    vote_items,
    vote_logs,
);
