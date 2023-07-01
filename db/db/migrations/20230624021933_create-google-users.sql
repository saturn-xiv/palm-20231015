-- migrate:up
CREATE TABLE google_users(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    sub VARCHAR(127) NOT NULL,
    code BYTEA NOT NULL,
    token VARCHAR(127) NOT NULL,
    "version" INT NOT NULL DEFAULT 0,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_google_users_sub ON google_users("sub");

-- migrate:down
DROP TABLE google_users;
