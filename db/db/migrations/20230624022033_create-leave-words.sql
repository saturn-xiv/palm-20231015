-- migrate:up
CREATE TABLE leave_words(
    id SERIAL PRIMARY KEY,
    lang VARCHAR(15) NOT NULL,
    ip VARCHAR(45) NOT NULL,
    body TEXT NOT NULL,
    body_editor VARCHAR(15) NOT NULL,
    "status" VARCHAR(15) NOT NULL,
    published_at TIMESTAMP WITHOUT TIME ZONE,
    deleted_at TIMESTAMP WITHOUT TIME ZONE,
    "version" INT NOT NULL DEFAULT 0,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_leave_words_lang ON leave_words(lang);

CREATE INDEX idx_leave_words_ip ON leave_words(ip);

CREATE INDEX idx_leave_words_body_editor ON leave_words(body_editor);

CREATE INDEX idx_leave_words_status ON leave_words("status");

-- migrate:down
DROP TABLE leave_words;
