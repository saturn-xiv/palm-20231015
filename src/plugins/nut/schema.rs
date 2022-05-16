// @generated automatically by Diesel CLI.

diesel::table! {
    attachments (id) {
        id -> Int4,
        user_id -> Int4,
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
    logs (id) {
        id -> Int4,
        user_id -> Int4,
        level -> Varchar,
        ip -> Varchar,
        resource_type -> Varchar,
        resource_id -> Int4,
        message -> Text,
        created_at -> Timestamp,
    }
}

diesel::table! {
    policies (id) {
        id -> Int4,
        role -> Varchar,
        operation -> Varchar,
        resource -> Varchar,
        created_at -> Timestamp,
    }
}

diesel::table! {
    sms_logs (id) {
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
    users_roles (id) {
        id -> Int4,
        user_id -> Int4,
        role -> Varchar,
        not_before -> Date,
        expired_at -> Date,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::allow_tables_to_appear_in_same_query!(
    attachments,
    logs,
    policies,
    sms_logs,
    users,
    users_roles,
);
