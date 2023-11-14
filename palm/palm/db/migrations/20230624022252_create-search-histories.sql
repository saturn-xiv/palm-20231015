-- migrate:up
CREATE TABLE search_histories(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    ip VARCHAR(45) NOT NULL,
    keyword VARCHAR(63) NOT NULL,
    "from" VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_search_histories_ip ON search_histories(ip);

CREATE INDEX idx_search_histories_keyword ON search_histories(keyword);

CREATE INDEX idx_search_histories_from ON search_histories("from");

-- migrate:down
DROP TABLE search_histories;
