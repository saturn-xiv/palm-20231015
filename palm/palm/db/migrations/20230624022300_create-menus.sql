-- migrate:up
CREATE TABLE menus(
    id SERIAL PRIMARY KEY,
    code VARCHAR(63) NOT NULL,
    "location" VARCHAR(31) NOT NULL,
    "left" INT NOT NULL,
    "right" INT NOT NULL,
    deleted_at TIMESTAMP WITHOUT TIME ZONE,
    "version" INT NOT NULL DEFAULT 0,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_menus ON menus(code, "location");

CREATE INDEX idx_menus_code ON menus(code);

CREATE INDEX idx_menus_location ON menus("location");

-- migrate:down
DROP TABLE menus;
