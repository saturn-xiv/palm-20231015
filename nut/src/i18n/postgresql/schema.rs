table! {
    locales (id) {
        id -> Integer,
        lang -> Varchar,
        code -> Varchar,
        message -> Text,
        version -> Integer,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}
