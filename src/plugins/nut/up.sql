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
    time_zone VARCHAR(32) NOT NULL DEFAULT 'UTC',
    address VARCHAR(255),
    profile BYTEA NOT NULL,
    sign_in_count INTEGER NOT NULL DEFAULT 0,
    current_sign_in_at TIMESTAMP WITHOUT TIME ZONE,
    current_sign_in_ip VARCHAR(45),
    last_sign_in_at TIMESTAMP WITHOUT TIME ZONE,
    last_sign_in_ip VARCHAR(45),
    confirmed_at TIMESTAMP WITHOUT TIME ZONE,
    locked_at TIMESTAMP WITHOUT TIME ZONE,
    deleted_at TIMESTAMP WITHOUT TIME ZONE,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE INDEX idx_users_lang ON users(lang);
CREATE INDEX idx_users_time_zone ON users(time_zone);
CREATE INDEX idx_users_real_name ON users(real_name);
CREATE UNIQUE INDEX idx_users_nick_name ON users(nick_name);
CREATE UNIQUE INDEX idx_users_email ON users(email);
CREATE UNIQUE INDEX idx_users_uid ON users(uid);
CREATE UNIQUE INDEX idx_users_provider ON users(provider_type, provider_id);
CREATE TABLE "logs"(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    LEVEL VARCHAR(16) NOT NULL DEFAULT 'info',
    ip VARCHAR(45) NOT NULL,
    message VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_logs_ip ON "logs"(ip);
CREATE INDEX idx_logs_level ON "logs"("level");
CREATE TABLE groups(
    id SERIAL PRIMARY KEY,
    code VARCHAR(32) NOT NULL,
    name VARCHAR(255) NOT NULL,
    parent_id INTEGER,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_groups ON groups(code);
CREATE INDEX idx_groups_name ON groups(name);
CREATE TABLE groups_users(
    id SERIAL PRIMARY KEY,
    group_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX idx_groups_users ON groups_users(group_id, user_id);
CREATE TABLE roles(
    id SERIAL PRIMARY KEY,
    code VARCHAR(32) NOT NULL,
    name VARCHAR(255) NOT NULL,
    parent_id INTEGER,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_roles ON roles(code, code);
CREATE INDEX idx_roles_name ON roles(name);
CREATE TABLE role_relations(
    id SERIAL PRIMARY KEY,
    a INTEGER NOT NULL,
    "constraint" VARCHAR(32) NOT NULL,
    b INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX idx_role_relations ON role_relations(a, "constraint", b);
CREATE INDEX idx_role_relations_from ON role_relations(a, "constraint");
CREATE TABLE roles_items(
    id SERIAL PRIMARY KEY,
    role_id INTEGER NOT NULL,
    target_type VARCHAR(32) NOT NULL,
    target_id INTEGER NOT NULL,
    not_before DATE NOT NULL,
    expire_at DATE NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_roles_items ON roles_items(role_id, target_type, target_id);
CREATE INDEX idx_roles_items_type ON roles_items(target_type);
CREATE TABLE operations(
    id SERIAL PRIMARY KEY,
    code VARCHAR(32) NOT NULL,
    name VARCHAR(255) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_operations_code ON operations(code);
CREATE INDEX idx_operations_name ON operations(name);
CREATE TABLE resources(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    parent_id INTEGER,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_resources ON resources(code);
CREATE INDEX idx_resources_name ON resources(name);
CREATE TABLE policies(
    id SERIAL PRIMARY KEY,
    role_id INTEGER NOT NULL,
    resource_id INTEGER NOT NULL,
    operation_id INTEGER NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX idx_policies ON policies(role_id, resource_id, operation_id);
CREATE TABLE attachments(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    size INTEGER NOT NULL,
    content_type VARCHAR(255) NOT NULL,
    region VARCHAR(32) NOT NULL,
    uid VARCHAR(36) NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_attachments ON attachments(uid);
CREATE INDEX idx_attachments_title ON attachments(title);
CREATE INDEX idx_attachments_status ON attachments("status");
CREATE TABLE attachment_usages(
    id SERIAL PRIMARY KEY,
    attachment_id INTEGER NOT NULL,
    resource_type VARCHAR(255) NOT NULL,
    resource_id INTEGER NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX idx_attachment_usages ON attachment_usages(attachment_id, resource_type, resource_id);
CREATE TABLE notifications(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    url VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    body_editor VARCHAR(32) NOT NULL,
    "level" VARCHAR(16) NOT NULL,
    "read" BOOLEAN NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE INDEX idx_notifications ON notifications("level");
CREATE TABLE tags(
    id SERIAL PRIMARY KEY,
    code VARCHAR(32) NOT NULL,
    name VARCHAR(255) NOT NULL,
    font BYTEA NOT NULL,
    icon BYTEA NOT NULL,
    color BYTEA NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_tags_code ON tags(code);
CREATE INDEX idx_tags_name ON tags(name);
CREATE TABLE tags_resources(
    id SERIAL PRIMARY KEY,
    tag_id INTEGER NOT NULL,
    resource_type VARCHAR(255) NOT NULL,
    resource_id INTEGER NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX idx_tags_resources ON tags_resources(tag_id, resource_type, resource_id);
CREATE INDEX idx_tags_resources_type ON tags_resources(resource_type);
CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    code VARCHAR(32) NOT NULL,
    name VARCHAR(255) NOT NULL,
    parent_id INTEGER,
    "order" INTEGER NOT NULL DEFAULT 0,
    font BYTEA NOT NULL,
    icon BYTEA NOT NULL,
    color BYTEA NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_categories_code ON categories(code);
CREATE INDEX idx_categories_name ON categories(name);
CREATE TABLE categories_resources(
    id SERIAL PRIMARY KEY,
    category_id INTEGER NOT NULL,
    resource_type VARCHAR(255) NOT NULL,
    resource_id INTEGER NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX idx_categories_resources ON categories_resources(category_id, resource_type, resource_id);
CREATE INDEX idx_categories_resources_type ON categories_resources(resource_type);
CREATE TABLE friend_links(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    home VARCHAR(255) NOT NULL,
    logo VARCHAR(255),
    "order" INTEGER NOT NULL DEFAULT 0,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_friend_links ON friend_links(home);
CREATE INDEX idx_friend_links_title ON friend_links(title);
CREATE TABLE leave_words(
    id SERIAL PRIMARY KEY,
    ip VARCHAR(45) NOT NULL,
    body TEXT NOT NULL,
    body_editor VARCHAR(32) NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_leave_words_ip ON leave_words(ip);
CREATE TABLE votes(
    id SERIAL PRIMARY KEY,
    "point" INTEGER NOT NULL DEFAULT 0,
    resource_type VARCHAR(255) NOT NULL,
    resource_id INTEGER NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_votes ON votes(resource_type, resource_id);
CREATE INDEX idx_votes_resource_type ON votes(resource_type);
CREATE TABLE view_counters(
    id SERIAL PRIMARY KEY,
    resource_type VARCHAR(255) NOT NULL,
    resource_id INTEGER NOT NULL,
    "point" INTEGER NOT NULL DEFAULT 0,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_view_counters ON view_counters(resource_type, resource_id);
CREATE INDEX idx_view_counters_resource_type ON view_counters(resource_type);
CREATE TABLE contacts(
    id SERIAL PRIMARY KEY,
    resource_type VARCHAR(255) NOT NULL,
    resource_id INTEGER NOT NULL,
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    value TEXT NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_contacts ON contacts(resource_type, resource_id, code);
CREATE INDEX idx_contacts_resource ON contacts(resource_type, resource_id);
CREATE INDEX idx_contacts_code ON contacts(code);
CREATE INDEX idx_contacts_name ON contacts(name);
CREATE TABLE addresses(
    id SERIAL PRIMARY KEY,
    resource_type VARCHAR(255) NOT NULL,
    resource_id INTEGER NOT NULL,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    zip VARCHAR(16) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE INDEX idx_addresses_resource ON addresses(resource_type, resource_id);
CREATE INDEX idx_addresses_street ON addresses(street);
CREATE INDEX idx_addresses_city ON addresses(city);
CREATE INDEX idx_addresses_state ON addresses("state");
CREATE INDEX idx_addresses_country ON addresses("country");
CREATE INDEX idx_addresses_zip ON addresses("zip");
