-- migrate:up
CREATE TABLE feedbacks(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    username VARCHAR(63) NOT NULL,
    mobile VARCHAR(15) NOT NULL,
    email VARCHAR(127) NOT NULL,
    content TEXT NOT NULL,
    content_editor VARCHAR(15) NOT NULL,
    resource_type VARCHAR(255) NOT NULL,
    resource_id INT NOT NULL,
    "status" VARCHAR(15) NOT NULL,
    deleted_at TIMESTAMP WITHOUT TIME ZONE,
    "version" INT NOT NULL DEFAULT 0,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_feedbacks_username ON feedbacks(username);

CREATE INDEX idx_feedbacks_mobile ON feedbacks(mobile);

CREATE INDEX idx_feedbacks_email ON feedbacks(email);

CREATE INDEX idx_feedbacks_content_editor ON feedbacks(content_editor);

CREATE INDEX idx_feedbacks_resource_type ON feedbacks(resource_type);

CREATE INDEX idx_feedbacks_status ON feedbacks("status");

-- migrate:down
DROP TABLE feedbacks;
