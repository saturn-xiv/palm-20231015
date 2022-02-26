CREATE TABLE IF NOT EXISTS schema_migrations(
  version BIGINT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  up TEXT NOT NULL,
  down TEXT NOT NULL,
  run_at TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_schema_migrations_name ON schema_migrations(name);
