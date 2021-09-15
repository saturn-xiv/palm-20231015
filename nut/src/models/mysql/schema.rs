table! {
    attachments (id) {
        id -> Integer,
        owner_id -> Integer,
        title -> Varchar,
        size -> Integer,
        content_type -> Varchar,
        url -> Varchar,
        version -> Integer,
        created_at -> Datetime,
        updated_at -> Datetime,
    }
}

table! {
    categories (id) {
        id -> Integer,
        title -> Varchar,
        description -> Text,
        description_type -> Varchar,
        icon -> Varchar,
        parent_id -> Nullable<Integer>,
        level -> Integer,
        locked_at -> Nullable<Datetime>,
        deleted_at -> Nullable<Datetime>,
        version -> Integer,
        created_at -> Datetime,
        updated_at -> Datetime,
    }
}

table! {
    groups (id) {
        id -> Integer,
        code -> Varchar,
        name -> Varchar,
        parent_id -> Nullable<Integer>,
        level -> Integer,
        version -> Integer,
        created_at -> Datetime,
        updated_at -> Datetime,
    }
}

table! {
    groups_users (id) {
        id -> Integer,
        group_id -> Integer,
        user_id -> Integer,
        created_at -> Datetime,
    }
}

table! {
    logs (id) {
        id -> Integer,
        user_id -> Integer,
        ip -> Varchar,
        message -> Varchar,
        created_at -> Datetime,
    }
}

table! {
    notifications (id) {
        id -> Integer,
        user_id -> Integer,
        url -> Varchar,
        body -> Text,
        body_type -> Varchar,
        level -> Varchar,
        read -> Bool,
        version -> Integer,
        created_at -> Datetime,
        updated_at -> Datetime,
    }
}

table! {
    operations (id) {
        id -> Integer,
        code -> Varchar,
        name -> Varchar,
        version -> Integer,
        created_at -> Datetime,
        updated_at -> Datetime,
    }
}

table! {
    policies (id) {
        id -> Integer,
        role_id -> Integer,
        resource_id -> Integer,
        operation_id -> Integer,
        version -> Integer,
        created_at -> Datetime,
    }
}

table! {
    posts (id) {
        id -> Integer,
        topic_id -> Integer,
        body -> Text,
        body_type -> Varchar,
        author_id -> Integer,
        published_at -> Nullable<Datetime>,
        locked_at -> Nullable<Datetime>,
        deleted_at -> Nullable<Datetime>,
        version -> Integer,
        created_at -> Datetime,
        updated_at -> Datetime,
    }
}

table! {
    resources (id) {
        id -> Integer,
        code -> Varchar,
        name -> Varchar,
        parent_id -> Nullable<Integer>,
        level -> Integer,
        version -> Integer,
        created_at -> Datetime,
        updated_at -> Datetime,
    }
}

table! {
    roles (id) {
        id -> Integer,
        code -> Varchar,
        name -> Varchar,
        parent_id -> Nullable<Integer>,
        level -> Integer,
        version -> Integer,
        created_at -> Datetime,
        updated_at -> Datetime,
    }
}

table! {
    roles_groups (id) {
        id -> Integer,
        role_id -> Integer,
        group_id -> Integer,
        not_before -> Date,
        expire_at -> Date,
        created_at -> Datetime,
    }
}

table! {
    roles_relations (id) {
        id -> Integer,
        a -> Integer,
        constraint -> Varchar,
        b -> Integer,
        name -> Varchar,
        version -> Integer,
        created_at -> Datetime,
    }
}

table! {
    roles_users (id) {
        id -> Integer,
        role_id -> Integer,
        user_id -> Integer,
        not_before -> Date,
        expire_at -> Date,
        created_at -> Datetime,
    }
}

table! {
    tags (id) {
        id -> Integer,
        title -> Varchar,
        description -> Text,
        description_type -> Varchar,
        icon -> Varchar,
        version -> Integer,
        created_at -> Datetime,
        updated_at -> Datetime,
    }
}

table! {
    tags_topics (id) {
        id -> Integer,
        tag_id -> Integer,
        topic_id -> Integer,
        created_at -> Datetime,
    }
}

table! {
    topics (id) {
        id -> Integer,
        category_id -> Integer,
        title -> Varchar,
        body -> Text,
        body_type -> Varchar,
        author_id -> Integer,
        published_at -> Nullable<Datetime>,
        locked_at -> Nullable<Datetime>,
        deleted_at -> Nullable<Datetime>,
        version -> Integer,
        created_at -> Datetime,
        updated_at -> Datetime,
    }
}

table! {
    users (id) {
        id -> Integer,
        real_name -> Varchar,
        nick_name -> Varchar,
        email -> Varchar,
        password -> Nullable<Blob>,
        salt -> Blob,
        uid -> Varchar,
        provider_type -> Varchar,
        provider_id -> Varchar,
        access_token -> Nullable<Varchar>,
        logo -> Varchar,
        lang -> Varchar,
        profile -> Blob,
        sign_in_count -> Integer,
        current_sign_in_at -> Nullable<Datetime>,
        current_sign_in_ip -> Nullable<Varchar>,
        last_sign_in_at -> Nullable<Datetime>,
        last_sign_in_ip -> Nullable<Varchar>,
        confirmed_at -> Nullable<Datetime>,
        locked_at -> Nullable<Datetime>,
        deleted_at -> Nullable<Datetime>,
        version -> Integer,
        created_at -> Datetime,
        updated_at -> Datetime,
    }
}

table! {
    view_counters (id) {
        id -> Integer,
        resource -> Varchar,
        point -> Integer,
        created_at -> Datetime,
        updated_at -> Datetime,
    }
}

table! {
    votes (id) {
        id -> Integer,
        resource -> Varchar,
        user_id -> Integer,
        point -> Integer,
        created_at -> Datetime,
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
    view_counters,
    votes,
);
