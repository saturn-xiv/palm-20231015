table! {
    schema_migrations (version) {
        version -> Int8,
        name -> Varchar,
        up -> Text,
        down -> Text,
        run_at -> Nullable<Timestamp>,
        created_at -> Timestamp,
    }
}
