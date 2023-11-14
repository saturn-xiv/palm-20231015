-- migrate:up
CREATE TABLE footprints(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    resource_type VARCHAR(255) NOT NULL,
    resource_id INT NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_footprints_resource_type ON footprints(resource_type);

-- migrate:down
DROP TABLE footprints;
