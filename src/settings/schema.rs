table! {
    settings (id) {
        id -> Int8,
        key -> Varchar,
        user_id -> Nullable<Int8>,
        salt -> Nullable<Bytea>,
        value -> Bytea,
        version -> Int8,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}
