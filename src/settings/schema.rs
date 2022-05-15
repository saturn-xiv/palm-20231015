table! {
    settings (id) {
        id -> Int4,
        key -> Varchar,
        user_id -> Nullable<Int4>,
        salt -> Nullable<Bytea>,
        value -> Bytea,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}
