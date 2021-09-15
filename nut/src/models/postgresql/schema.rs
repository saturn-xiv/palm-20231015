table! {
    attachments (id) {
        id -> Int4,
        owner_id -> Int4,
        title -> Varchar,
        size -> Int4,
        content_type -> Varchar,
        url -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    categories (id) {
        id -> Int4,
        title -> Varchar,
        description -> Text,
        description_type -> Varchar,
        icon -> Varchar,
        parent_id -> Nullable<Int4>,
        level -> Int4,
        locked_at -> Nullable<Timestamp>,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    groups (id) {
        id -> Int4,
        code -> Varchar,
        name -> Varchar,
        parent_id -> Nullable<Int4>,
        level -> Int4,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    groups_users (id) {
        id -> Int4,
        group_id -> Int4,
        user_id -> Int4,
        created_at -> Timestamp,
    }
}

table! {
    logs (id) {
        id -> Int4,
        user_id -> Int4,
        ip -> Varchar,
        message -> Varchar,
        created_at -> Timestamp,
    }
}

table! {
    notifications (id) {
        id -> Int4,
        user_id -> Int4,
        url -> Varchar,
        body -> Text,
        media_type -> Varchar,
        level -> Varchar,
        read -> Bool,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    operations (id) {
        id -> Int4,
        code -> Varchar,
        name -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    policies (id) {
        id -> Int4,
        role_id -> Int4,
        resource_id -> Int4,
        operation_id -> Int4,
        version -> Int4,
        created_at -> Timestamp,
    }
}

table! {
    posts (id) {
        id -> Int4,
        topic_id -> Int4,
        body -> Text,
        body_type -> Varchar,
        author_id -> Int4,
        published_at -> Nullable<Timestamp>,
        locked_at -> Nullable<Timestamp>,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    resources (id) {
        id -> Int4,
        code -> Varchar,
        name -> Varchar,
        parent_id -> Nullable<Int4>,
        level -> Int4,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    roles (id) {
        id -> Int4,
        code -> Varchar,
        name -> Varchar,
        parent_id -> Nullable<Int4>,
        level -> Int4,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    roles_groups (id) {
        id -> Int4,
        role_id -> Int4,
        group_id -> Int4,
        not_before -> Date,
        expire_at -> Date,
        created_at -> Timestamp,
    }
}

table! {
    roles_relations (id) {
        id -> Int4,
        a -> Int4,
        constraint -> Varchar,
        b -> Int4,
        name -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
    }
}

table! {
    roles_users (id) {
        id -> Int4,
        role_id -> Int4,
        user_id -> Int4,
        not_before -> Date,
        expire_at -> Date,
        created_at -> Timestamp,
    }
}

table! {
    tags (id) {
        id -> Int4,
        title -> Varchar,
        description -> Text,
        description_type -> Varchar,
        icon -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    tags_topics (id) {
        id -> Int4,
        tag_id -> Int4,
        topic_id -> Int4,
        created_at -> Timestamp,
    }
}

table! {
    topics (id) {
        id -> Int4,
        category_id -> Int4,
        title -> Varchar,
        body -> Text,
        body_type -> Varchar,
        author_id -> Int4,
        published_at -> Nullable<Timestamp>,
        locked_at -> Nullable<Timestamp>,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    users (id) {
        id -> Int4,
        real_name -> Varchar,
        nick_name -> Varchar,
        email -> Varchar,
        password -> Nullable<Bytea>,
        salt -> Bytea,
        uid -> Varchar,
        provider_type -> Varchar,
        provider_id -> Varchar,
        access_token -> Nullable<Varchar>,
        logo -> Varchar,
        lang -> Varchar,
        profile -> Bytea,
        sign_in_count -> Int4,
        current_sign_in_at -> Nullable<Timestamp>,
        current_sign_in_ip -> Nullable<Varchar>,
        last_sign_in_at -> Nullable<Timestamp>,
        last_sign_in_ip -> Nullable<Varchar>,
        confirmed_at -> Nullable<Timestamp>,
        locked_at -> Nullable<Timestamp>,
        deleted_at -> Nullable<Timestamp>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

allow_tables_to_appear_in_same_query!(
    attachments,
    categories,
    groups,
    groups_users,
    logs,
    notifications,
    operations,
    policies,
    posts,
    resources,
    roles,
    roles_groups,
    roles_relations,
    roles_users,
    tags,
    tags_topics,
    topics,
    users,
);
