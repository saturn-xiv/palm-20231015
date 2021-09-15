CREATE TABLE settings(
    id SERIAL PRIMARY KEY,
    "key" VARCHAR(255) NOT NULL,
    value BYTEA NOT NULL,
    salt BYTEA,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL
);

CREATE UNIQUE INDEX idx_settings_key ON settings("key");
