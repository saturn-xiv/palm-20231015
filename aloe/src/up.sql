CREATE TABLE IF NOT EXISTS settings(
    id INTEGER NOT NULL PRIMARY KEY,
    key VARCHAR(255) NOT NULL,
    value TEXT NOT NULL,
    updated_at DATETIME NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_settings_key ON settings(key);

CREATE TABLE IF NOT EXISTS users(
    id INTEGER NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    'group' VARCHAR(255) NOT NULL,
    contact TEXT NOT NULL,
    updated_at DATETIME NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_users_name ON users(name);

CREATE INDEX IF NOT EXISTS idx_users_group ON users('group');

CREATE TABLE IF NOT EXISTS hosts(
    id INTEGER NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    mac VARCHAR(64) NOT NULL,
    ip VARCHAR(64) NOT NULL,
    user_id INTEGER,
    location VARCHAR(255),
    fixed BOOLEAN NOT NULL DEFAULT FALSE,
    confirmed_at DATETIME,
    updated_at DATETIME NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_hosts_mac ON hosts(mac);

CREATE INDEX IF NOT EXISTS idx_hosts_name ON hosts(name);

CREATE INDEX IF NOT EXISTS idx_hosts_ip ON hosts(ip);

CREATE TABLE IF NOT EXISTS rules(
    id INTEGER NOT NULL PRIMARY KEY,
    zone VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    'group' VARCHAR(255) NOT NULL,
    content BLOB NOT NULL,
    updated_at DATETIME NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_rules_zone_name ON rules(zone, name);

CREATE INDEX IF NOT EXISTS idx_rules_group ON rules('group');
