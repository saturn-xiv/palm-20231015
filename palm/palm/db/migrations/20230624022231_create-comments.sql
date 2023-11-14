-- migrate:up
CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    username VARCHAR(63) NOT NULL,
    ip VARCHAR(45) NOT NULL,
    comment_id INT,
    content TEXT NOT NULL,
    content_editor VARCHAR(15) NOT NULL,
    resource_type VARCHAR(255) NOT NULL,
    resource_id INT NOT NULL,
    deleted_at TIMESTAMP WITHOUT TIME ZONE,
    "version" INT NOT NULL DEFAULT 0,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_comments_ip ON comments(ip);

CREATE INDEX idx_comments_username ON comments(username);

CREATE INDEX idx_comments_resource_type ON comments(resource_type);

CREATE INDEX idx_content_editor ON comments(content_editor);

-- migrate:down
DROP TABLE comments;
