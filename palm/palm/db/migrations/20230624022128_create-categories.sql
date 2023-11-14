-- migrate:up
CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    code VARCHAR(63) NOT NULL,
    "left" INT NOT NULL,
    "right" INT NOT NULL,
    deleted_at TIMESTAMP WITHOUT TIME ZONE,
    "version" INT NOT NULL DEFAULT 0,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_categories_code ON categories(code);

CREATE UNIQUE INDEX idx_categories_left_right ON categories("left", "right");

CREATE TABLE category_resources(
    id SERIAL PRIMARY KEY,
    category_id INT NOT NULL,
    resource_type VARCHAR(255) NOT NULL,
    resource_id INT NOT NULL,
    sort_order INT NOT NULL DEFAULT 100,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_category_resources ON category_resources(category_id, resource_type, resource_id);

CREATE INDEX idx_category_resources_resource_type ON category_resources(resource_type);

-- migrate:down
DROP TABLE category_resources;

DROP TABLE categories;
