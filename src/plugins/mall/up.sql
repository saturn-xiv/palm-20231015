CREATE TABLE erp_spec_groups(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_spec_groups ON erp_spec_groups(code);
CREATE INDEX idx_erp_spec_groups_name ON erp_spec_groups(name);
CREATE TABLE erp_spec_params(
    id SERIAL PRIMARY KEY,
    spec_group_id INTEGER NOT NULL,
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    unit VARCHAR(255),
    "type" VARCHAR(32) NOT NULL,
    segements TEXT,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_spec_params ON erp_spec_params(spec_group_id, code);
CREATE INDEX idx_erp_spec_params_name ON erp_spec_params(name);
CREATE INDEX idx_erp_spec_params_code ON erp_spec_params(code);
CREATE INDEX idx_erp_spec_params_unit ON erp_spec_params(unit)
WHERE unit IS NOT NULL;
CREATE TABLE erp_brands(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    home VARCHAR(255),
    logo VARCHAR(255),
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_brands_code ON erp_brands(code);
CREATE INDEX idx_erp_brands_name ON erp_brands(name);
CREATE TABLE erp_categories(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    parent_id INTEGER,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_categories_code ON erp_categories(code);
CREATE INDEX idx_erp_categories_name ON erp_categories(name);
CREATE TABLE erp_categories_brands(
    id SERIAL PRIMARY KEY,
    category_id INTEGER NOT NULL,
    brand_id INTEGER NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX idx_erp_categories_brands ON erp_categories_brands(category_id, brand_id);
CREATE TABLE erp_spu(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    subhead VARCHAR(255),
    body TEXT NOT NULL,
    body_editor VARCHAR(32) NOT NULL,
    "status" VARCHAR(16) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_spu ON erp_spu(code);
CREATE INDEX idx_erp_spu_code ON erp_spu(code);
CREATE INDEX idx_erp_spu_title ON erp_spu(title);
CREATE INDEX idx_erp_spu_status ON erp_spu("status");
CREATE TABLE erp_spu_brands(
    id SERIAL PRIMARY KEY,
    spu_id INTEGER NOT NULL,
    brand_id INTEGER NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX idx_erp_spu_brands ON erp_spu_brands(spu_id, brand_id);
CREATE TABLE erp_spu_categories(
    id SERIAL PRIMARY KEY,
    spu_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX idx_erp_spu_categories ON erp_spu_categories(spu_id, category_id);
CREATE TABLE erp_sku(
    id SERIAL PRIMARY KEY,
    spu_id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    "status" VARCHAR(16) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE INDEX idx_erp_sku_name ON erp_sku(name);
CREATE INDEX idx_erp_sku_status ON erp_sku("status");
CREATE TABLE erp_prices(
    id SERIAL PRIMARY KEY,
    sku_id INTEGER NOT NULL,
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    currency VARCHAR(8) NOT NULL,
    value NUMERIC(20, 2) NOT NULL DEFAULT 0.0,
    tax_id INTEGER NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_prices ON erp_prices(sku_id, code, currency);
CREATE INDEX idx_erp_prices_code ON erp_prices(code);
CREATE INDEX idx_erp_prices_name ON erp_prices(name);
CREATE INDEX idx_erp_prices_currency ON erp_prices(currency);
CREATE TABLE erp_taxes(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    value NUMERIC(20, 2) NOT NULL DEFAULT 0.0,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_taxes ON erp_taxes(code);
CREATE INDEX idx_erp_taxes_name ON erp_taxes(name);
CREATE TABLE erp_spu_params(
    id SERIAL PRIMARY KEY,
    spu_id INTEGER NOT NULL,
    param_id INTEGER NOT NULL,
    value BYTEA NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_spu_params ON erp_spu_params (param_id, spu_id);
CREATE TABLE erp_sku_params(
    id SERIAL PRIMARY KEY,
    sku_id INTEGER NOT NULL,
    param_id INTEGER NOT NULL,
    value BYTEA NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_sku_params ON erp_sku_params (param_id, sku_id);
CREATE TABLE erp_warehouses(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_warehouses ON erp_warehouses(code);
CREATE INDEX idx_erp_warehouses_name ON erp_warehouses(name);
CREATE TABLE erp_warehouses_sku(
    id SERIAL PRIMARY KEY,
    warehouse_id INTEGER NOT NULL,
    sku_id INTEGER NOT NULL,
    amount INTEGER NOT NULL,
    unit VARCHAR(32) NOT NULL,
    x INTEGER NOT NULL DEFAULT 0,
    y INTEGER NOT NULL DEFAULT 0,
    z INTEGER NOT NULL DEFAULT 0,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_warehouses_sku ON erp_warehouses_sku(warehouse_id, sku_id);
CREATE TABLE erp_levels(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    discount NUMERIC(20, 2) NOT NULL DEFAULT 0.0,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_levels ON erp_levels(code);
CREATE INDEX idx_erp_levels_name ON erp_levels(name);
CREATE TABLE erp_users_levels(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    level_id INTEGER NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX idx_erp_users_levels ON erp_users_levels(user_id, level_id);
CREATE TABLE erp_vouchers(
    id SERIAL PRIMARY KEY,
    operator_id INTEGER NOT NULL,
    customer_id INTEGER NOT NULL,
    code VARCHAR(255) NOT NULL,
    deno NUMERIC(20, 2) NOT NULL,
    "condition" NUMERIC(20, 2) NOT NULL,
    not_before DATE NOT NULL,
    expired_at DATE NOT NULL,
    consumed_at TIMESTAMP WITHOUT TIME ZONE,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_vouchers_code ON erp_vouchers(code);
CREATE TABLE erp_orders(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    customer_id INTEGER NOT NULL,
    sales_id INTEGER,
    payment BYTEA NOT NULL,
    delivery BYTEA NOT NULL,
    payload BYTEA NOT NULL,
    "state" VARCHAR(32) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_orders ON erp_orders(code);
CREATE INDEX idx_erp_orders_state ON erp_orders("state");
CREATE TABLE erp_delivery_logs(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    order_id INTEGER NOT NULL,
    deliverer_id INTEGER NOT NULL,
    warehouse_id INTEGER NOT NULL,
    "by" VARCHAR(255) NOT NULL,
    payload BYTEA NOT NULL,
    "state" VARCHAR(32) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_delivery_logs ON erp_delivery_logs(code);
CREATE INDEX idx_erp_delivery_logs_state ON erp_delivery_logs("state");
CREATE TABLE erp_returning_logs(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    order_id INTEGER NOT NULL,
    consumer_id INTEGER NOT NULL,
    qa_id INTEGER NOT NULL,
    reason TEXT NOT NULL,
    reason_editor VARCHAR(255) NOT NULL,
    payment BYTEA NOT NULL,
    delivery BYTEA NOT NULL,
    payload BYTEA NOT NULL,
    "state" VARCHAR(32) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_returning_logs ON erp_returning_logs(code);
CREATE INDEX idx_erp_returning_logs_state ON erp_returning_logs("state");
CREATE TABLE erp_suppliers(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    payment BYTEA NOT NULL,
    "state" VARCHAR(32) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_suppliers ON erp_suppliers(code);
CREATE INDEX idx_erp_suppliers_state ON erp_suppliers("state");
CREATE TABLE erp_purchase_logs(
    id SERIAL PRIMARY KEY,
    buyer_id INTEGER NOT NULL,
    supplier_id INTEGER NOT NULL,
    payment BYTEA NOT NULL,
    payload BYTEA NOT NULL,
    "state" VARCHAR(32) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE INDEX idx_erp_purchase_logs_state ON erp_purchase_logs("state");
CREATE TABLE erp_warehousing_logs(
    id SERIAL PRIMARY KEY,
    storekeeper_id INTEGER NOT NULL,
    purchase_log_id INTEGER NOT NULL,
    payload BYTEA NOT NULL,
    "state" VARCHAR(32) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE INDEX idx_erp_warehousing_logs_state ON erp_warehousing_logs("state");
CREATE TABLE erp_carts(
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    sku_id INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_carts ON erp_carts(code, sku_id);
CREATE INDEX idx_erp_carts_code ON erp_carts(code);
