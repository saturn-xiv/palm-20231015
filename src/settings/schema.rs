table! {
    settings (id) {
        id -> Int4,
        user_id -> Nullable<Int4>,
        key -> Varchar,
        value -> Json,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}
