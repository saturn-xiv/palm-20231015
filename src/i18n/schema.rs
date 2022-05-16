// @generated automatically by Diesel CLI.

diesel::table! {
    locales (id) {
        id -> Int4,
        lang -> Varchar,
        code -> Varchar,
        message -> Text,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}
