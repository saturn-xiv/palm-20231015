// @generated automatically by Diesel CLI.

diesel::table! {
    permissions (id) {
        id -> Int4,
        subject_type -> Varchar,
        subject_id -> Int4,
        operation -> Varchar,
        resource_type -> Varchar,
        resource_id -> Nullable<Int4>,
        created_at -> Timestamp,
    }
}

diesel::table! {
    roles (id) {
        id -> Int4,
        code -> Varchar,
        left -> Int4,
        right -> Int4,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::table! {
    roles_constraints (id) {
        id -> Int4,
        x -> Int4,
        term -> Int4,
        y -> Int4,
        created_at -> Timestamp,
    }
}

diesel::table! {
    roles_users (id) {
        id -> Int4,
        role_id -> Int4,
        user_id -> Int4,
        not_before -> Timestamp,
        expired_at -> Timestamp,
        version -> Int4,
        updated_at -> Timestamp,
        created_at -> Timestamp,
    }
}

diesel::allow_tables_to_appear_in_same_query!(permissions, roles, roles_constraints, roles_users,);
