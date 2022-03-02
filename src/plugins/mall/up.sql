CREATE TABLE erp_spec_groups(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(255) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_spec_groups ON erp_spec_groups(code);
CREATE TABLE erp_spec_params(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    spec_group_id UUID NOT NULL,
    code VARCHAR(255) NOT NULL,
    unit VARCHAR(255),
    "type" VARCHAR(255) NOT NULL,
    segements BYTEA,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_spec_params ON erp_spec_params(spec_group_id, code);
CREATE INDEX idx_erp_spec_params_code ON erp_spec_params(code);
CREATE INDEX idx_erp_spec_params_unit ON erp_spec_params(unit)
WHERE unit IS NOT NULL;
CREATE TABLE erp_brands(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
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
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(255) NOT NULL,
    parent_id UUID,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_categories_code ON erp_categories(code);
CREATE TABLE erp_categories_brands(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID NOT NULL,
    brand_id UUID NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX idx_erp_categories_brands ON erp_categories_brands(category_id, brand_id);
CREATE TABLE erp_spu(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
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
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    spu_id UUID NOT NULL,
    brand_id UUID NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX idx_erp_spu_brands ON erp_spu_brands(spu_id, brand_id);
CREATE TABLE erp_spu_categories(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    spu_id UUID NOT NULL,
    category_id UUID NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX idx_erp_spu_categories ON erp_spu_categories(spu_id, category_id);
CREATE TABLE erp_sku(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    spu_id UUID NOT NULL,
    "status" VARCHAR(16) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE INDEX idx_erp_sku_status ON erp_sku("status");
CREATE TABLE erp_prices(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sku_id UUID NOT NULL,
    code VARCHAR(255) NOT NULL,
    currency VARCHAR(8) NOT NULL,
    value NUMERIC(20, 2) NOT NULL DEFAULT 0.0,
    tax_id UUID NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_prices ON erp_prices(sku_id, code, currency);
CREATE INDEX idx_erp_prices_code ON erp_prices(code);
CREATE INDEX idx_erp_prices_currency ON erp_prices(currency);
CREATE TABLE erp_taxes(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(255) NOT NULL,
    value NUMERIC(20, 2) NOT NULL DEFAULT 0.0,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_taxes ON erp_taxes(code);
CREATE TABLE erp_spu_params(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    spu_id UUID NOT NULL,
    param_id UUID NOT NULL,
    value BYTEA NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_spu_params ON erp_spu_params (param_id, spu_id);
CREATE TABLE erp_sku_params(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sku_id UUID NOT NULL,
    param_id UUID NOT NULL,
    value BYTEA NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_sku_params ON erp_sku_params (param_id, sku_id);
CREATE TABLE erp_warehouses(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(255) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_warehouses ON erp_warehouses(code);
CREATE TABLE erp_warehouses_sku(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    warehouse_id UUID NOT NULL,
    sku_id UUID NOT NULL,
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
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(255) NOT NULL,
    discount NUMERIC(20, 2) NOT NULL DEFAULT 0.0,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_levels ON erp_levels(code);
CREATE TABLE erp_users_levels(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    level_id UUID NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX idx_erp_users_levels ON erp_users_levels(user_id, level_id);
CREATE TABLE erp_vouchers(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    operator_id UUID NOT NULL,
    customer_id UUID NOT NULL,
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
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(255) NOT NULL,
    customer_id UUID NOT NULL,
    sales_id UUID,
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
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(255) NOT NULL,
    order_id UUID NOT NULL,
    deliverer_id UUID NOT NULL,
    warehouse_id UUID NOT NULL,
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
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(255) NOT NULL,
    order_id UUID NOT NULL,
    consumer_id UUID NOT NULL,
    qa_id UUID NOT NULL,
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
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(255) NOT NULL,
    payment BYTEA NOT NULL,
    "state" VARCHAR(32) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_suppliers ON erp_suppliers(code);
CREATE INDEX idx_erp_suppliers_state ON erp_suppliers("state");
CREATE TABLE erp_purchase_logs(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    buyer_id UUID NOT NULL,
    supplier_id UUID NOT NULL,
    payment BYTEA NOT NULL,
    payload BYTEA NOT NULL,
    "state" VARCHAR(32) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE INDEX idx_erp_purchase_logs_state ON erp_purchase_logs("state");
CREATE TABLE erp_warehousing_logs(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    storekeeper_id UUID NOT NULL,
    purchase_log_id UUID NOT NULL,
    payload BYTEA NOT NULL,
    "state" VARCHAR(32) NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE INDEX idx_erp_warehousing_logs_state ON erp_warehousing_logs("state");
CREATE TABLE erp_carts(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(255) NOT NULL,
    sku_id UUID NOT NULL,
    "count" INTEGER NOT NULL,
    version INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_erp_carts ON erp_carts(code, sku_id);
CREATE INDEX idx_erp_carts_code ON erp_carts(code);
