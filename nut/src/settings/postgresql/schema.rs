table! {
    settings (id) {
        id -> Integer,
        key -> Varchar,
        value -> Bytea,
        salt -> Nullable<Bytea>,
        version -> Integer,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}
