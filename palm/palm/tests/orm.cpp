#include <catch2/catch_test_macros.hpp>

#include "palm/orm.hpp"

TEST_CASE("PostgreSQL", "[postgresql]") { REQUIRE((1 + 1) == 2); }


TEST_CASE("MySql", "[mysql]") { REQUIRE((1 + 1) == 2); }


TEST_CASE("Sqlite3", "[sqlite3]") { REQUIRE((1 + 1) == 2); }
