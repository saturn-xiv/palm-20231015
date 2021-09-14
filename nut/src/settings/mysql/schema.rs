table! {
    settings (id) {
        id -> Integer,
        key -> Varchar,
        value -> Blob,
        salt -> Nullable<Blob>,
        version -> Integer,
        created_at -> Datetime,
        updated_at -> Datetime,
    }
}
