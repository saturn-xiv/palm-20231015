-- migrate:up
CREATE TABLE twilio_sms_logs(
    id SERIAL PRIMARY KEY,
    "from" VARCHAR(31) NOT NULL,
    "to" VARCHAR(31) NOT NULL,
    body BYTEA NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_twilio_sms_logs_from ON twilio_sms_logs("from");

CREATE INDEX idx_twilio_sms_logs_to ON twilio_sms_logs("to");

-- migrate:down
DROP TABLE twilio_sms_logs;
