table! {
    cms_links (id) {
        id -> Uuid,
        lang -> Varchar,
        location -> Varchar,
        x -> Int4,
        y -> Int4,
        title -> Varchar,
        url -> Varchar,
        summary -> Nullable<Text>,
        logo -> Nullable<Varchar>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}
