table! {
    addresses (id) {
        id -> Int4,
        resource_type -> Varchar,
        resource_id -> Int4,
        gate -> Nullable<Varchar>,
        unit -> Nullable<Varchar>,
        street -> Varchar,
        city -> Varchar,
        state -> Varchar,
        country -> Varchar,
        zip -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    attachment_usages (id) {
        id -> Int4,
        attachment_id -> Int4,
        resource_type -> Varchar,
        resource_id -> Int4,
        created_at -> Timestamp,
    }
}

table! {
    attachments (id) {
        id -> Int4,
        user_id -> Int4,
        title -> Varchar,
        size -> Int4,
        content_type -> Varchar,
        region -> Varchar,
        uid -> Varchar,
        status -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    categories (id) {
        id -> Int4,
        code -> Varchar,
        name -> Varchar,
        parent_id -> Nullable<Int4>,
        order -> Int4,
        font -> Bytea,
        icon -> Bytea,
        color -> Bytea,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    categories_resources (id) {
        id -> Int4,
        category_id -> Int4,
        resource_type -> Varchar,
        resource_id -> Int4,
        created_at -> Timestamp,
    }
}

table! {
    contacts (id) {
        id -> Int4,
        resource_type -> Varchar,
        resource_id -> Int4,
        code -> Varchar,
        name -> Varchar,
        value -> Text,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    friend_links (id) {
        id -> Int4,
        title -> Varchar,
        home -> Varchar,
        logo -> Nullable<Varchar>,
        order -> Int4,
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
    leave_words (id) {
        id -> Int4,
        ip -> Varchar,
        body -> Text,
        body_editor -> Varchar,
        created_at -> Timestamp,
    }
}

table! {
    logs (id) {
        id -> Int4,
        user_id -> Int4,
        level -> Varchar,
        ip -> Varchar,
        resource_type -> Varchar,
        resource_id -> Int4,
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
        body_editor -> Varchar,
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
        created_at -> Timestamp,
    }
}

table! {
    rating_logs (id) {
        id -> Int4,
        user_id -> Int4,
        point -> Int4,
        resource_type -> Varchar,
        resource_id -> Int4,
        body -> Text,
        body_editor -> Varchar,
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
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    role_relations (id) {
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
    roles (id) {
        id -> Int4,
        code -> Varchar,
        name -> Varchar,
        parent_id -> Nullable<Int4>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    roles_items (id) {
        id -> Int4,
        role_id -> Int4,
        target_type -> Varchar,
        target_id -> Int4,
        not_before -> Date,
        expire_at -> Date,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    tags (id) {
        id -> Int4,
        code -> Varchar,
        name -> Varchar,
        font -> Bytea,
        icon -> Bytea,
        color -> Bytea,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    tags_resources (id) {
        id -> Int4,
        tag_id -> Int4,
        resource_type -> Varchar,
        resource_id -> Int4,
        created_at -> Timestamp,
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
        time_zone -> Varchar,
        address -> Nullable<Varchar>,
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

table! {
    view_counters (id) {
        id -> Int4,
        resource_type -> Varchar,
        resource_id -> Int4,
        point -> Int4,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

allow_tables_to_appear_in_same_query!(
    addresses,
    attachment_usages,
    attachments,
    categories,
    categories_resources,
    contacts,
    friend_links,
    groups,
    groups_users,
    leave_words,
    logs,
    notifications,
    operations,
    policies,
    rating_logs,
    resources,
    role_relations,
    roles,
    roles_items,
    tags,
    tags_resources,
    users,
    view_counters,
);
