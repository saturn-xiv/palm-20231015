// @generated automatically by Diesel CLI.

diesel::table! {
    sms_logs (id) {
        id -> Int4,
        from -> Varchar,
        to -> Varchar,
        body -> Text,
        created_at -> Timestamp,
    }
}
