table! {
    locales (id) {
        id -> Uuid,
        lang -> Varchar,
        code -> Varchar,
        message -> Text,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}
