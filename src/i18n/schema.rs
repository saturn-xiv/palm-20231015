table! {
    locales (id) {
        id -> Int8,
        lang -> Varchar,
        code -> Varchar,
        message -> Text,
        version -> Int8,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}
