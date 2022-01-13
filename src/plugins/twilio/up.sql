CREATE TABLE sms_logs(
    id SERIAL PRIMARY KEY,
    "from" VARCHAR(32) NOT NULL,
    "to" VARCHAR(32) NOT NULL,
    body TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_sms_logs_from ON sms_logs("from");

CREATE INDEX idx_sms_logs_to ON sms_logs("to");
