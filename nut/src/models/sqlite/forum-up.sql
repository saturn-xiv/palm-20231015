CREATE TABLE categories(
    id INTEGER PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    description_type VARCHAR(32) NOT NULL,
    icon VARCHAR(32) NOT NULL,
    parent_id INTEGER,
    "level" INTEGER NOT NULL DEFAULT 1,
    locked_at TIMESTAMP,
    deleted_at TIMESTAMP,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL
);

CREATE UNIQUE INDEX idx_categories_title ON categories(title);

CREATE TABLE tags(
    id INTEGER PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    description_type VARCHAR(32) NOT NULL,
    icon VARCHAR(32) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL
);

CREATE UNIQUE INDEX idx_tags_title ON tags(title);

CREATE TABLE topics(
    id INTEGER PRIMARY KEY NOT NULL,
    category_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    body_type VARCHAR(32) NOT NULL,
    author_id INTEGER NOT NULL,
    published_at TIMESTAMP,
    locked_at TIMESTAMP,
    deleted_at TIMESTAMP,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL
);

CREATE INDEX idx_topics_title ON topics(title);

CREATE TABLE tags_topics(
    id INTEGER PRIMARY KEY NOT NULL,
    tag_id INTEGER NOT NULL,
    topic_id INTEGER NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_tags_topics ON tags_topics(tag_id, topic_id);

CREATE TABLE posts(
    id INTEGER PRIMARY KEY NOT NULL,
    topic_id INTEGER NOT NULL,
    body TEXT NOT NULL,
    body_type VARCHAR(32) NOT NULL,
    author_id INTEGER NOT NULL,
    published_at TIMESTAMP,
    locked_at TIMESTAMP,
    deleted_at TIMESTAMP,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL
);

CREATE TABLE attachments(
    id INTEGER PRIMARY KEY NOT NULL,
    owner_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    size INTEGER NOT NULL,
    content_type VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL
);

CREATE INDEX idx_attachments ON attachments(title);

CREATE TABLE notifications(
    id INTEGER PRIMARY KEY NOT NULL,
    user_id INTEGER NOT NULL,
    url VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    media_type VARCHAR(36) NOT NULL,
    "level" VARCHAR(16) NOT NULL,
    "read" BOOLEAN NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL
);

CREATE INDEX idx_notifications ON notifications("level");
