-- migrate:up
CREATE TABLE issues(
    id SERIAL PRIMARY KEY,
    lang VARCHAR(15) NOT NULL,
    question VARCHAR(255) NOT NULL,
    answer TEXT NOT NULL,
    answer_editor VARCHAR(15) NOT NULL,
    resource_type VARCHAR(255) NOT NULL,
    deleted_at TIMESTAMP WITHOUT TIME ZONE,
    "version" INT NOT NULL DEFAULT 0,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_issues_lang ON issues(lang);

CREATE INDEX idx_issues_question ON issues(question);

CREATE INDEX idx_issues_resource_type ON issues(resource_type);

-- migrate:down
DROP TABLE issues;
