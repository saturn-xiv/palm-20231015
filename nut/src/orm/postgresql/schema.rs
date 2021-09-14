table! {
    schema_migrations (id) {
        id -> Int4,
        version -> Bpchar,
        name -> Varchar,
        up -> Text,
        down -> Text,
        run_at -> Nullable<Timestamp>,
        created_at -> Timestamp,
    }
}
