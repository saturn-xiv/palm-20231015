#include "carnation/casbin.hpp"

inline static const std::string UP = R"SQL(
CREATE TABLE IF NOT EXISTS casbin_rule (
    id INTEGER PRIMARY KEY,
    ptype VARCHAR(12) NOT NULL,
    v0 VARCHAR(128) NOT NULL,
    v1 VARCHAR(128) NOT NULL,
    v2 VARCHAR(128) NOT NULL,
    v3 VARCHAR(128) NOT NULL,
    v4 VARCHAR(128) NOT NULL,
    v5 VARCHAR(128) NOT NULL,
    CONSTRAINT idx_casbin_rule UNIQUE(ptype, v0, v1, v2, v3, v4, v5)
);
)SQL";
