CREATE TABLE locales(
    id BIGSERIAL PRIMARY KEY,
    lang VARCHAR(16) NOT NULL,
    code VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    version BIGINT NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);

CREATE INDEX idx_locales_lang ON locales(lang);

CREATE INDEX idx_locales_code ON locales(code);

CREATE UNIQUE INDEX idx_locales_lang_code ON locales(lang, code);
