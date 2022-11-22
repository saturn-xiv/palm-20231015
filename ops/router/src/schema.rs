// @generated automatically by Diesel CLI.

diesel::table! {
    hosts (id) {
        id -> Integer,
        name -> Text,
        group -> Text,
        mac -> Text,
        ip -> Text,
        user_id -> Nullable<Integer>,
        location -> Nullable<Text>,
        fixed -> Bool,
        confirmed_at -> Nullable<Timestamp>,
        updated_at -> Timestamp,
    }
}

diesel::table! {
    rules (id) {
        id -> Integer,
        name -> Text,
        group -> Text,
        content -> Binary,
        updated_at -> Timestamp,
    }
}

diesel::table! {
    settings (id) {
        id -> Integer,
        key -> Text,
        value -> Binary,
        updated_at -> Timestamp,
    }
}

diesel::table! {
    users (id) {
        id -> Integer,
        name -> Text,
        contact -> Binary,
        updated_at -> Timestamp,
    }
}

diesel::allow_tables_to_appear_in_same_query!(hosts, rules, settings, users,);
