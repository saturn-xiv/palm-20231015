table! {
    schema_migrations (id) {
        id -> Integer,
        version -> Char,
        name -> Varchar,
        up -> Text,
        down -> Text,
        run_at -> Nullable<Datetime>,
        created_at -> Datetime,
    }
}
