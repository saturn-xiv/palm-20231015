-- migrate:up
CREATE TABLE settings(
    id SERIAL PRIMARY KEY,
    "key" VARCHAR(255) NOT NULL,
    user_id INT,
    salt BYTEA,
    "value" BYTEA NOT NULL,
    "version" INT NOT NULL DEFAULT 0,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_settings_key ON settings("key")
WHERE
    user_id IS NULL;

CREATE UNIQUE INDEX idx_setting_key ON settings("key", user_id)
WHERE
    user_id IS NOT NULL;

-- migrate:down
DROP TABLE settings;
