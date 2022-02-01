CREATE TABLE erp_brands(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    body_editor VARCHAR(32) NOT NULL,
    deleted_at TIMESTAMP WITHOUT TIME ZONE,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);

CREATE UNIQUE INDEX idx_erp_brands_code ON erp_brands(code);

CREATE INDEX idx_erp_brands_title ON erp_brands(title);

CREATE TABLE erp_categories(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    parent_id INTEGER,
    sort INTEGER NOT NULL DEFAULT 0,
    deleted_at TIMESTAMP WITHOUT TIME ZONE,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);

CREATE UNIQUE INDEX idx_erp_categories_code ON erp_categories(code);

CREATE INDEX idx_erp_categories_name ON erp_categories(name);

CREATE TABLE erp_spu(
    id SERIAL PRIMARY KEY,
    brand_id INTEGER NOT NULL,
    code VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    body_editor VARCHAR(32) NOT NULL,
    "status" VARCHAR(16) NOT NULL,
    deleted_at TIMESTAMP WITHOUT TIME ZONE,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);

CREATE UNIQUE INDEX idx_erp_spu ON erp_spu(brand_id, code);

CREATE INDEX idx_erp_spu_code ON erp_spu(code);

CREATE INDEX idx_erp_spu_title ON erp_spu(title);

CREATE INDEX idx_erp_spu_status ON erp_spu("status");

CREATE TABLE erp_parameters(
    id SERIAL PRIMARY KEY,
    resource_type VARCHAR(255) NOT NULL,
    resource_id INTEGER NOT NULL,
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    value TEXT NOT NULL,
    sort INTEGER NOT NULL DEFAULT 0,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);

CREATE UNIQUE INDEX idx_erp_spu_parameters ON erp_parameters(resource_type, resource_id, code);

CREATE INDEX idx_erp_spu_parameters_code ON erp_parameters(code);

CREATE INDEX idx_erp_spu_parameters_name ON erp_parameters(name);

CREATE TABLE erp_prices(
    id SERIAL PRIMARY KEY,
    resource_type VARCHAR(255) NOT NULL,
    resource_id INTEGER NOT NULL,
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    currency VARCHAR(8) NOT NULL,
    value NUMERIC(20, 6) NOT NULL DEFAULT 0.0,
    sort INTEGER NOT NULL DEFAULT 0,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);

CREATE UNIQUE INDEX idx_erp_prices ON erp_prices(resource_type, resource_id, code);

CREATE INDEX idx_erp_spu_prices_code ON erp_prices(code);

CREATE INDEX idx_erp_spu_prices_name ON erp_prices(name);

CREATE TABLE erp_categories_spu(
    id SERIAL PRIMARY KEY,
    category_id INTEGER NOT NULL,
    spu_id INTEGER NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX idx_erp_categories_spu ON erp_categories_spu(category_id, spu_id);

CREATE TABLE erp_sku(
    id SERIAL PRIMARY KEY,
    spu_id INTEGER NOT NULL,
    code VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    body_editor VARCHAR(32) NOT NULL,
    "status" VARCHAR(16) NOT NULL,
    deleted_at TIMESTAMP WITHOUT TIME ZONE,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);

CREATE UNIQUE INDEX idx_erp_sku ON erp_sku(spu_id, code);

CREATE INDEX idx_erp_sku_code ON erp_sku(code);

CREATE INDEX idx_erp_sku_title ON erp_sku(title);

CREATE INDEX idx_erp_sku_status ON erp_sku("status");

CREATE TABLE erp_warehouses(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    deleted_at TIMESTAMP WITHOUT TIME ZONE,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);

CREATE UNIQUE INDEX idx_erp_warehouses ON erp_warehouses(code);

CREATE INDEX idx_erp_warehouses_name ON erp_warehouses(name);

CREATE TABLE erp_stores(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    deleted_at TIMESTAMP WITHOUT TIME ZONE,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);

CREATE UNIQUE INDEX idx_erp_stores ON erp_stores(code);

CREATE INDEX idx_erp_stores_name ON erp_stores(name);

CREATE TABLE erp_stocks(
    id SERIAL PRIMARY KEY,
    sku_id INTEGER NOT NULL,
    warehouse_id INTEGER NOT NULL,
    store_id INTEGER NOT NULL,
    amount INTEGER NOT NULL DEFAULT 0,
    unit VARCHAR(32) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);

CREATE UNIQUE INDEX idx_erp_stocks ON erp_stocks(sku_id, warehouse_id, store_id);

CREATE TABLE erp_consignees(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);

CREATE INDEX idx_erp_consignees_username ON erp_consignees(username);

CREATE INDEX idx_erp_consignees_company ON erp_consignees(company)
WHERE
    company IS NOT NULL;

CREATE TABLE erp_delivery_methods(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    logo VARCHAR(255),
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);

CREATE UNIQUE INDEX idx_erp_delivery_methods ON erp_delivery_methods(code);

CREATE INDEX idx_erp_delivery_methods_name ON erp_delivery_methods(name);

CREATE TABLE erp_payment_methods(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    logo VARCHAR(255),
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);

CREATE UNIQUE INDEX idx_erp_payment_methods ON erp_payment_methods(code);

CREATE INDEX idx_erp_payment_methods_name ON erp_payment_methods(name);

CREATE TABLE erp_orders(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    code VARCHAR(255) NOT NULL,
    consignee BYTEA NOT NULL,
    items BYTEA NOT NULL,
    deliverer BYTEA NOT NULL,
    payment BYTEA NOT NULL,
    prices BYTEA NOT NULL,
    "status" VARCHAR(16) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);

CREATE UNIQUE INDEX idx_erp_orders ON erp_orders(code);

CREATE INDEX idx_erp_orders_status ON erp_orders("status");

CREATE TABLE erp_order_logs(
    id SERIAL PRIMARY KEY,
    operator_id INTEGER NOT NULL,
    order_id INTEGER NOT NULL,
    "type" VARCHAR(32) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_erp_order_logs_type ON erp_order_logs("type");

CREATE TABLE erp_carts(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    code VARCHAR(255) NOT NULL,
    items BYTEA NOT NULL,
    prices BYTEA NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);

CREATE UNIQUE INDEX idx_erp_carts ON erp_carts(code);

CREATE TABLE erp_contacts(
    id SERIAL PRIMARY KEY,
    resource_type VARCHAR(255) NOT NULL,
    resource_id INTEGER NOT NULL,
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    value TEXT NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);

CREATE UNIQUE INDEX idx_erp_contacts ON erp_contacts(resource_type, resource_id, code);

CREATE INDEX idx_erp_contacts_resource ON erp_contacts(resource_type, resource_id);

CREATE INDEX idx_erp_contacts_code ON erp_contacts(code);
