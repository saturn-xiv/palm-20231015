-- migrate:up
CREATE TABLE tags(
    id SERIAL PRIMARY KEY,
    code VARCHAR(63) NOT NULL,
    sort_order INT NOT NULL DEFAULT 100,
    deleted_at TIMESTAMP WITHOUT TIME ZONE,
    "version" INT NOT NULL DEFAULT 0,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_tags_code ON tags(code);

CREATE TABLE tag_resources(
    id SERIAL PRIMARY KEY,
    tag_id INT NOT NULL,
    resource_type VARCHAR(255) NOT NULL,
    resource_id INT NOT NULL,
    sort_order INT NOT NULL DEFAULT 100,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_tag_resources ON tag_resources(tag_id, resource_type, resource_id);

CREATE INDEX idx_tag_resources_resource_type ON tag_resources(resource_type);

-- migrate:down
DROP TABLE tag_resources;

DROP TABLE tags;
