CREATE TABLE settings(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    "key" VARCHAR(255) NOT NULL,
    value BYTEA NOT NULL,
    salt BYTEA,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_settings_key ON settings("key")
WHERE user_id IS NULL;
CREATE UNIQUE INDEX idx_settings_user_key ON settings("key", user_id)
WHERE user_id IS NOT NULL;
