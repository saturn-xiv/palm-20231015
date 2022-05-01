table! {
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

table! {
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

table! {
    users (id) {
        id -> Int4,
        real_name -> Varchar,
        nick_name -> Varchar,
        email -> Varchar,
        password -> Nullable<Bytea>,
        salt -> Bytea,
        provider_type -> Varchar,
        provider_id -> Varchar,
        access_token -> Nullable<Varchar>,
        logo -> Varchar,
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

allow_tables_to_appear_in_same_query!(attachments, logs, users,);
