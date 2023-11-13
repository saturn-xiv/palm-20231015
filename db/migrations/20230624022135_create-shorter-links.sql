-- migrate:up
CREATE TABLE shorter_links(
    id SERIAL PRIMARY KEY,
    "url" VARCHAR(255) NOT NULL,
    summary VARCHAR(511) NOT NULL DEFAULT '',
    "version" INT NOT NULL DEFAULT 0,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_shorter_links_url ON shorter_links("url");

CREATE INDEX idx_shorter_links_summary ON shorter_links(summary);

-- migrate:down
DROP TABLE shorter_links;
