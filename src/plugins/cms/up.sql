CREATE TABLE cms_links(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lang VARCHAR(16) NOT NULL,
    location VARCHAR(255) NOT NULL,
    x INTEGER NOT NULL DEFAULT 0,
    y INTEGER NOT NULL DEFAULT 0,
    title VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    summary TEXT,
    logo VARCHAR(255),
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_cms_links ON cms_links(lang, location, x, y);
CREATE INDEX idx_cms_links_lang_location ON cms_links(lang, location);
CREATE TABLE cms_articles(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    body_editor VARCHAR(32) NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE INDEX idx_cms_articles_status ON cms_articles("status");
