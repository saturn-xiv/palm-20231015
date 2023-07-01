-- migrate:up
CREATE TABLE attachments(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    bucket VARCHAR(63) NOT NULL,
    "name" VARCHAR(63) NOT NULL,
    title VARCHAR(127) NOT NULL,
    size BIGINT NOT NULL,
    content_type VARCHAR(63) NOT NULL,
    "status" VARCHAR(15) NOT NULL,
    deleted_at TIMESTAMP WITHOUT TIME ZONE,
    "version" INT NOT NULL DEFAULT 0,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_attachments_bucket_name ON attachments(bucket, "name");

CREATE INDEX idx_attachments_bucket ON attachments(bucket);

CREATE INDEX idx_attachments_name ON attachments("name");

CREATE INDEX idx_attachments_title ON attachments(title);

CREATE INDEX idx_attachments_content_type ON attachments(content_type);

CREATE INDEX idx_attachments_status ON attachments("status");

CREATE TABLE attachment_resources(
    id SERIAL PRIMARY KEY,
    attachment_id INT NOT NULL,
    resource_type VARCHAR(255) NOT NULL,
    resource_id INT NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_attachment_resources ON attachment_resources(attachment_id, resource_type, resource_id);

CREATE INDEX idx_attachment_resources_resource_type ON attachment_resources(resource_type);

-- migrate:down
DROP TABLE attachment_resources;

DROP TABLE attachments;
