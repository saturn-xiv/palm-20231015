-- migrate:up
CREATE TABLE notifications(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    "subject" VARCHAR(127) NOT NULL,
    body VARCHAR(511) NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "status" VARCHAR(15) NOT NULL,
    read_at TIMESTAMP WITHOUT TIME ZONE,
    deleted_at TIMESTAMP WITHOUT TIME ZONE,
    "version" INT NOT NULL DEFAULT 0,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_notifications_subject ON notifications("subject");

-- migrate:down
DROP TABLE notifications;
