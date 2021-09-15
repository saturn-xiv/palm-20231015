CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    real_name VARCHAR(32) NOT NULL,
    nick_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    "password" BYTEA,
    salt BYTEA NOT NULL,
    uid VARCHAR(36) NOT NULL,
    provider_type VARCHAR(16) NOT NULL,
    provider_id VARCHAR(255) NOT NULL,
    access_token VARCHAR(255),
    logo VARCHAR(255) NOT NULL,
    lang VARCHAR(16) NOT NULL DEFAULT 'en-US',
    profile BYTEA NOT NULL,
    sign_in_count INTEGER NOT NULL DEFAULT 0,
    current_sign_in_at TIMESTAMP,
    current_sign_in_ip VARCHAR(45),
    last_sign_in_at TIMESTAMP,
    last_sign_in_ip VARCHAR(45),
    confirmed_at TIMESTAMP,
    locked_at TIMESTAMP,
    deleted_at TIMESTAMP,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL
);

CREATE INDEX idx_users_lang ON users(lang);

CREATE INDEX idx_users_real_name ON users(real_name);

CREATE UNIQUE INDEX idx_users_nick_name ON users(nick_name);

CREATE UNIQUE INDEX idx_users_email ON users(email);

CREATE UNIQUE INDEX idx_users_uid ON users(uid);

CREATE UNIQUE INDEX idx_users_provider ON users(provider_type, provider_id);

CREATE TABLE "logs"(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    ip VARCHAR(45) NOT NULL,
    message VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE groups(
    id SERIAL PRIMARY KEY,
    code VARCHAR(32) NOT NULL,
    name VARCHAR(255) NOT NULL,
    parent_id INTEGER,
    "level" INTEGER NOT NULL DEFAULT 1,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL
);

CREATE UNIQUE INDEX idx_groups ON groups(code, "level");

CREATE INDEX idx_groups_name ON groups(name);

CREATE TABLE groups_users(
    id SERIAL PRIMARY KEY,
    group_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_groups_users ON groups_users(group_id, user_id);

CREATE TABLE roles(
    id SERIAL PRIMARY KEY,
    code VARCHAR(32) NOT NULL,
    name VARCHAR(255) NOT NULL,
    parent_id INTEGER,
    "level" INTEGER NOT NULL DEFAULT 1,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL
);

CREATE UNIQUE INDEX idx_roles ON roles(code, "level");

CREATE INDEX idx_roles_name ON roles(name);

CREATE TABLE roles_relations(
    id SERIAL PRIMARY KEY,
    a INTEGER NOT NULL,
    "constraint" VARCHAR(32) NOT NULL,
    b INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_roles_relations ON roles_relations(a, "constraint", b);

CREATE INDEX idx_roles_relations_from ON roles_relations(a, "constraint");

CREATE TABLE roles_users(
    id SERIAL PRIMARY KEY,
    role_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    not_before DATE NOT NULL,
    expire_at DATE NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_roles_users ON roles_users(role_id, user_id);

CREATE TABLE roles_groups(
    id SERIAL PRIMARY KEY,
    role_id INTEGER NOT NULL,
    group_id INTEGER NOT NULL,
    not_before DATE NOT NULL,
    expire_at DATE NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_roles_groups ON roles_groups(role_id, group_id);

CREATE TABLE operations(
    id SERIAL PRIMARY KEY,
    code VARCHAR(32) NOT NULL,
    name VARCHAR(255) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL
);

CREATE UNIQUE INDEX idx_operations_code ON operations(code);

CREATE INDEX idx_operations_name ON operations(name);

CREATE TABLE resources(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    parent_id INTEGER,
    "level" INTEGER NOT NULL DEFAULT 1,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL
);

CREATE UNIQUE INDEX idx_resources ON resources(code, "level");

CREATE INDEX idx_resources_name ON resources(name);

CREATE TABLE policies(
    id SERIAL PRIMARY KEY,
    role_id INTEGER NOT NULL,
    resource_id INTEGER NOT NULL,
    operation_id INTEGER NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_policies ON policies(role_id, resource_id, operation_id);
