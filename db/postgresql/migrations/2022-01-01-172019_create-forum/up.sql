CREATE TABLE forum_topics(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    summary VARCHAR(500) NOT NULL,
    body TEXT NOT NULL,
    media_type VARCHAR(16) NOT NULL,
    author_id INTEGER NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);

CREATE INDEX forum_topics_title ON forum_topics(title);

CREATE INDEX forum_topics_media_type ON forum_topics(media_type);

CREATE TABLE forum_posts(
    id SERIAL PRIMARY KEY,
    topic_id INTEGER NOT NULL,
    body TEXT NOT NULL,
    media_type VARCHAR(16) NOT NULL,
    author_id INTEGER NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);

CREATE INDEX forum_posts_media_type ON forum_posts(media_type);

CREATE TABLE forum_topics_tags(
    id SERIAL PRIMARY KEY,
    topic_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_forum_topics_tags ON forum_topics_tags(topic_id, tag_id);
