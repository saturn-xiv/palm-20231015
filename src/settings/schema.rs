table! {
    settings (id) {
        id -> Uuid,
        user_id -> Nullable<Uuid>,
        key -> Varchar,
        value -> Bytea,
        salt -> Nullable<Bytea>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}
