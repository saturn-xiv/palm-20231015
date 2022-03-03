table! {
    sms_logs (id) {
        id -> Uuid,
        from -> Varchar,
        to -> Varchar,
        body -> Text,
        created_at -> Timestamp,
    }
}
