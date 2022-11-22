CREATE TABLE IF NOT EXISTS settings(
    id INTEGER NOT NULL PRIMARY KEY,
    key VARCHAR(255) NOT NULL,
    value BLOB NOT NULL,
    updated_at DATETIME NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_settings_key ON settings(key);

CREATE TABLE IF NOT EXISTS users(
    id INTEGER NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact BLOB NOT NULL,
    updated_at DATETIME NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_users_name ON users(name);

CREATE TABLE IF NOT EXISTS hosts(
    id INTEGER NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    'group' VARCHAR(255) NOT NULL,
    mac VARCHAR(64) NOT NULL,
    ip VARCHAR(64) NOT NULL,
    user_id INTEGER,
    location VARCHAR(64),
    fixed BOOLEAN NOT NULL DEFAULT FALSE,
    confirmed_at DATETIME,
    updated_at DATETIME NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_hosts_mac ON hosts(mac);

CREATE INDEX IF NOT EXISTS idx_hosts_name ON hosts(name);

CREATE INDEX IF NOT EXISTS idx_hosts_ip ON hosts(ip);

CREATE INDEX IF NOT EXISTS idx_hosts_group ON hosts('group');

CREATE TABLE IF NOT EXISTS rules(
    id INTEGER NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    'group' VARCHAR(255) NOT NULL,
    content BLOB NOT NULL,
    updated_at DATETIME NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_rules_name ON rules(name);

CREATE INDEX IF NOT EXISTS idx_rules_group ON rules('group');
