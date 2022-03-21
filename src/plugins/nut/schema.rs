table! {
    addresses (id) {
        id -> Uuid,
        resource_type -> Varchar,
        resource_id -> Uuid,
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
        id -> Uuid,
        attachment_id -> Uuid,
        resource_type -> Varchar,
        resource_id -> Uuid,
        created_at -> Timestamp,
    }
}

table! {
    attachments (id) {
        id -> Uuid,
        user_id -> Uuid,
        title -> Varchar,
        size -> Int8,
        content_type -> Varchar,
        region -> Varchar,
        status -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    categories (id) {
        id -> Uuid,
        code -> Varchar,
        parent_id -> Nullable<Uuid>,
        order -> Int4,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    categories_resources (id) {
        id -> Uuid,
        category_id -> Uuid,
        resource_type -> Varchar,
        resource_id -> Uuid,
        created_at -> Timestamp,
    }
}

table! {
    contacts (id) {
        id -> Uuid,
        resource_type -> Varchar,
        resource_id -> Uuid,
        code -> Varchar,
        value -> Text,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    friend_links (id) {
        id -> Uuid,
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
        id -> Uuid,
        code -> Varchar,
        parent_id -> Nullable<Uuid>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    groups_users (id) {
        id -> Uuid,
        group_id -> Uuid,
        user_id -> Uuid,
        created_at -> Timestamp,
    }
}

table! {
    leave_words (id) {
        id -> Uuid,
        ip -> Varchar,
        read_at -> Nullable<Timestamp>,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    logs (id) {
        id -> Uuid,
        user_id -> Uuid,
        level -> Varchar,
        ip -> Varchar,
        resource_type -> Varchar,
        resource_id -> Uuid,
        message -> Varchar,
        created_at -> Timestamp,
    }
}

table! {
    notifications (id) {
        id -> Uuid,
        user_id -> Uuid,
        url -> Varchar,
        level -> Varchar,
        read -> Bool,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    operations (id) {
        id -> Uuid,
        code -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    page_contents (id) {
        id -> Uuid,
        resource_type -> Varchar,
        resource_id -> Uuid,
        body -> Text,
        editor -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    policies (id) {
        id -> Uuid,
        role_id -> Uuid,
        resource_id -> Uuid,
        operation_id -> Uuid,
        created_at -> Timestamp,
    }
}

table! {
    rating_logs (id) {
        id -> Uuid,
        user_id -> Uuid,
        point -> Int4,
        resource_type -> Varchar,
        resource_id -> Uuid,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    resources (id) {
        id -> Uuid,
        code -> Varchar,
        parent_id -> Nullable<Uuid>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    role_relations (id) {
        id -> Uuid,
        a -> Uuid,
        constraint -> Varchar,
        b -> Uuid,
        version -> Int4,
        created_at -> Timestamp,
    }
}

table! {
    roles (id) {
        id -> Uuid,
        code -> Varchar,
        parent_id -> Nullable<Uuid>,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    roles_items (id) {
        id -> Uuid,
        role_id -> Uuid,
        target_type -> Varchar,
        target_id -> Uuid,
        not_before -> Date,
        expire_at -> Date,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    tags (id) {
        id -> Uuid,
        code -> Varchar,
        version -> Int4,
        created_at -> Timestamp,
        updated_at -> Timestamp,
    }
}

table! {
    tags_resources (id) {
        id -> Uuid,
        tag_id -> Uuid,
        resource_type -> Varchar,
        resource_id -> Uuid,
        created_at -> Timestamp,
    }
}

table! {
    users (id) {
        id -> Uuid,
        real_name -> Varchar,
        nick_name -> Varchar,
        email -> Varchar,
        password -> Nullable<Bytea>,
        salt -> Bytea,
        provider_type -> Varchar,
        provider_id -> Varchar,
        access_token -> Nullable<Varchar>,
        logo -> Varchar,
        lang -> Varchar,
        time_zone -> Varchar,
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
        id -> Uuid,
        resource_type -> Varchar,
        resource_id -> Uuid,
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
    page_contents,
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
