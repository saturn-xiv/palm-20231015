table! {
    settings (id) {
        id -> Uuid,
        key -> Varchar,
        user_id -> Nullable<Uuid>,
        salt -> Nullable<Bytea>,
        value -> Bytea,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}
