CREATE TABLE users(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    real_name VARCHAR(32) NOT NULL,
    nick_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    "password" BYTEA,
    salt BYTEA NOT NULL,
    provider_type VARCHAR(16) NOT NULL,
    provider_id VARCHAR(255) NOT NULL,
    access_token VARCHAR(255),
    logo VARCHAR(255) NOT NULL,
    lang VARCHAR(16) NOT NULL DEFAULT 'en-US',
    time_zone VARCHAR(32) NOT NULL DEFAULT 'UTC',
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
CREATE UNIQUE INDEX idx_users_provider ON users(provider_type, provider_id);
CREATE TABLE "logs"(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    "level" VARCHAR(16) NOT NULL DEFAULT 'info',
    ip VARCHAR(45) NOT NULL,
    resource_type VARCHAR(255) NOT NULL,
    resource_id UUID NOT NULL,
    message VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_logs_ip ON "logs"(ip);
CREATE INDEX idx_logs_level ON "logs"("level");
CREATE INDEX idx_logs_resource ON "logs"(user_id, resource_type, resource_id);
CREATE TABLE groups(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(255) NOT NULL,
    parent_id UUID,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_groups ON groups(code);
CREATE TABLE groups_users(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    group_id UUID NOT NULL,
    user_id UUID NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX idx_groups_users ON groups_users(group_id, user_id);
CREATE TABLE roles(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(255) NOT NULL,
    parent_id UUID,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_roles ON roles(code, code);
CREATE TABLE role_relations(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    a UUID NOT NULL,
    "constraint" VARCHAR(255) NOT NULL,
    b UUID NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX idx_role_relations ON role_relations(a, "constraint", b);
CREATE INDEX idx_role_relations_from ON role_relations(a, "constraint");
CREATE TABLE roles_items(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    role_id UUID NOT NULL,
    target_type VARCHAR(255) NOT NULL,
    target_id UUID NOT NULL,
    not_before DATE NOT NULL,
    expire_at DATE NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_roles_items ON roles_items(role_id, target_type, target_id);
CREATE INDEX idx_roles_items_type ON roles_items(target_type);
CREATE TABLE operations(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(255) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_operations_code ON operations(code);
CREATE TABLE resources(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(255) NOT NULL,
    parent_id UUID,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_resources ON resources(code);
CREATE TABLE policies(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    role_id UUID NOT NULL,
    resource_id UUID NOT NULL,
    operation_id UUID NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX idx_policies ON policies(role_id, resource_id, operation_id);
CREATE TABLE attachments(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    title VARCHAR(255) NOT NULL,
    size BIGINT NOT NULL,
    content_type VARCHAR(255) NOT NULL,
    region VARCHAR(255) NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE INDEX idx_attachments_title ON attachments(title);
CREATE INDEX idx_attachments_status ON attachments("status");
CREATE TABLE attachment_usages(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    attachment_id UUID NOT NULL,
    resource_type VARCHAR(255) NOT NULL,
    resource_id UUID NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX idx_attachment_usages ON attachment_usages(attachment_id, resource_type, resource_id);
CREATE TABLE notifications(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    url VARCHAR(255) NOT NULL,
    "level" VARCHAR(16) NOT NULL,
    "read" BOOLEAN NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE INDEX idx_notifications ON notifications("level");
CREATE TABLE tags(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(255) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_tags_code ON tags(code);
CREATE TABLE tags_resources(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tag_id UUID NOT NULL,
    resource_type VARCHAR(255) NOT NULL,
    resource_id UUID NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX idx_tags_resources ON tags_resources(tag_id, resource_type, resource_id);
CREATE INDEX idx_tags_resources_type ON tags_resources(resource_type);
CREATE TABLE categories(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(255) NOT NULL,
    parent_id UUID,
    "order" INTEGER NOT NULL DEFAULT 0,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_categories_code ON categories(code);
CREATE TABLE categories_resources(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID NOT NULL,
    resource_type VARCHAR(255) NOT NULL,
    resource_id UUID NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX idx_categories_resources ON categories_resources(category_id, resource_type, resource_id);
CREATE INDEX idx_categories_resources_type ON categories_resources(resource_type);
CREATE TABLE friend_links(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
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
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ip VARCHAR(45) NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_leave_words_ip ON leave_words(ip);
CREATE TABLE rating_logs(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    "point" INTEGER NOT NULL DEFAULT 0,
    resource_type VARCHAR(255) NOT NULL,
    resource_id UUID NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_rating_logs ON rating_logs(resource_type, resource_id);
CREATE INDEX idx_rating_logs_resource_type ON rating_logs(resource_type);
CREATE TABLE view_counters(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    resource_type VARCHAR(255) NOT NULL,
    resource_id UUID NOT NULL,
    "point" INTEGER NOT NULL DEFAULT 0,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_view_counters ON view_counters(resource_type, resource_id);
CREATE INDEX idx_view_counters_resource_type ON view_counters(resource_type);
CREATE TABLE contacts(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    resource_type VARCHAR(255) NOT NULL,
    resource_id UUID NOT NULL,
    code VARCHAR(255) NOT NULL,
    value TEXT NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_contacts ON contacts(resource_type, resource_id, code);
CREATE INDEX idx_contacts_resource ON contacts(resource_type, resource_id);
CREATE INDEX idx_contacts_code ON contacts(code);
CREATE TABLE addresses(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    resource_type VARCHAR(255) NOT NULL,
    resource_id UUID NOT NULL,
    gate VARCHAR(255),
    unit VARCHAR(255),
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
CREATE TABLE page_contents(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    resource_type VARCHAR(255) NOT NULL,
    resource_id UUID NOT NULL,
    body TEXT NOT NULL,
    editor VARCHAR(32) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_page_contents ON page_contents(resource_type, resource_id);
CREATE INDEX idx_page_contents_resource_type ON page_contents(resource_type);
CREATE INDEX idx_page_contents_editor ON page_contents(editor);
