-- migrate:up
CREATE TABLE locales(
    id SERIAL PRIMARY KEY,
    lang VARCHAR(8) NOT NULL,
    code VARCHAR(255) NOT NULL,
    "message" TEXT NOT NULL,
    "version" INT NOT NULL DEFAULT 0,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_locales_lang ON locales(lang);

CREATE INDEX idx_locales_code ON locales(code);

CREATE UNIQUE INDEX idx_locales_lang_code ON locales(lang, code);

-- migrate:down
DROP TABLE locales;
