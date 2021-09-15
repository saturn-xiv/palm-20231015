table! {
    attachments (id) {
        id -> Integer,
        owner_id -> Integer,
        title -> Text,
        size -> Integer,
        content_type -> Text,
        url -> Text,
        version -> Integer,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    categories (id) {
        id -> Integer,
        title -> Text,
        description -> Text,
        description_type -> Text,
        icon -> Text,
        parent_id -> Nullable<Integer>,
        level -> Integer,
        locked_at -> Nullable<Timestamp>,
        deleted_at -> Nullable<Timestamp>,
        version -> Integer,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    groups (id) {
        id -> Integer,
        code -> Text,
        name -> Text,
        parent_id -> Nullable<Integer>,
        level -> Integer,
        version -> Integer,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    groups_users (id) {
        id -> Integer,
        group_id -> Integer,
        user_id -> Integer,
        created_at -> Timestamp,
    }
}

table! {
    logs (id) {
        id -> Integer,
        user_id -> Integer,
        ip -> Text,
        message -> Text,
        created_at -> Timestamp,
    }
}

table! {
    notifications (id) {
        id -> Integer,
        user_id -> Integer,
        url -> Text,
        body -> Text,
        media_type -> Text,
        level -> Text,
        read -> Bool,
        version -> Integer,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    operations (id) {
        id -> Integer,
        code -> Text,
        name -> Text,
        version -> Integer,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    policies (id) {
        id -> Integer,
        role_id -> Integer,
        resource_id -> Integer,
        operation_id -> Integer,
        version -> Integer,
        created_at -> Timestamp,
    }
}

table! {
    posts (id) {
        id -> Integer,
        topic_id -> Integer,
        body -> Text,
        body_type -> Text,
        author_id -> Integer,
        published_at -> Nullable<Timestamp>,
        locked_at -> Nullable<Timestamp>,
        deleted_at -> Nullable<Timestamp>,
        version -> Integer,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    resources (id) {
        id -> Integer,
        code -> Text,
        name -> Text,
        parent_id -> Nullable<Integer>,
        level -> Integer,
        version -> Integer,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    roles (id) {
        id -> Integer,
        code -> Text,
        name -> Text,
        parent_id -> Nullable<Integer>,
        level -> Integer,
        version -> Integer,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    roles_groups (id) {
        id -> Integer,
        role_id -> Integer,
        group_id -> Integer,
        not_before -> Date,
        expire_at -> Date,
        created_at -> Timestamp,
    }
}

table! {
    roles_relations (id) {
        id -> Integer,
        a -> Integer,
        constraint -> Text,
        b -> Integer,
        name -> Text,
        version -> Integer,
        created_at -> Timestamp,
    }
}

table! {
    roles_users (id) {
        id -> Integer,
        role_id -> Integer,
        user_id -> Integer,
        not_before -> Date,
        expire_at -> Date,
        created_at -> Timestamp,
    }
}

table! {
    tags (id) {
        id -> Integer,
        title -> Text,
        description -> Text,
        description_type -> Text,
        icon -> Text,
        version -> Integer,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    tags_topics (id) {
        id -> Integer,
        tag_id -> Integer,
        topic_id -> Integer,
        created_at -> Timestamp,
    }
}

table! {
    topics (id) {
        id -> Integer,
        category_id -> Integer,
        title -> Text,
        body -> Text,
        body_type -> Text,
        author_id -> Integer,
        published_at -> Nullable<Timestamp>,
        locked_at -> Nullable<Timestamp>,
        deleted_at -> Nullable<Timestamp>,
        version -> Integer,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    users (id) {
        id -> Integer,
        real_name -> Text,
        nick_name -> Text,
        email -> Text,
        password -> Nullable<Binary>,
        salt -> Binary,
        uid -> Text,
        provider_type -> Text,
        provider_id -> Text,
        access_token -> Nullable<Text>,
        logo -> Text,
        lang -> Text,
        profile -> Binary,
        sign_in_count -> Integer,
        current_sign_in_at -> Nullable<Timestamp>,
        current_sign_in_ip -> Nullable<Text>,
        last_sign_in_at -> Nullable<Timestamp>,
        last_sign_in_ip -> Nullable<Text>,
        confirmed_at -> Nullable<Timestamp>,
        locked_at -> Nullable<Timestamp>,
        deleted_at -> Nullable<Timestamp>,
        version -> Integer,
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
