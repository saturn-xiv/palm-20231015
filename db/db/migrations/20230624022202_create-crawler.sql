-- migrate:up
CREATE TABLE crawler_logs(
    id SERIAL PRIMARY KEY,
    "url" VARCHAR(255) NOT NULL,
    body BYTEA NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_crawler_logs_url ON crawler_logs("url");

-- migrate:down
DROP TABLE crawler_logs;
