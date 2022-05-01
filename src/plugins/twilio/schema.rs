table! {
    sms_logs (id) {
        id -> Int8,
        from -> Varchar,
        to -> Varchar,
        body -> Text,
        created_at -> Timestamp,
    }
}
