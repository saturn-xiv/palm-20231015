CREATE TABLE IF NOT EXISTS schema_migrations(
    id INTEGER PRIMARY KEY NOT NULL,
    version CHAR(14) NOT NULL,
    name VARCHAR(255) NOT NULL,
    up TEXT NOT NULL,
    down TEXT NOT NULL,
    run_at TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_schema_migrations ON schema_migrations(version, name);
