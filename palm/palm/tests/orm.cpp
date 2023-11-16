#include <catch2/catch_test_macros.hpp>

#include "palm/orm.hpp"
#include "palm/utils.hpp"

#include <iostream>

TEST_CASE("PostgreSQL", "[postgresql]") {
  auto config = toml::parse_file("config.toml");
  auto node = config["postgresql"].as_table();
  const palm::postgresql::Config cfg(*node);
  std::cout << "connect " << cfg << std::endl;

  auto db = cfg.open();
  {
    pqxx::work tx{db};

    {
      pqxx::row r = tx.exec1("SELECT VERSION()");
      std::cout << r[0].as<std::string>() << std::endl;
    }
    {
      pqxx::row r = tx.exec1("SELECT CURRENT_TIMESTAMP");

      const auto ts = r[0].as<std::string>();
      //   const auto tp = r[0].as<std::chrono::system_clock::time_point>();
      const auto tp = palm::to_time_point(ts);
      std::cout << ts << "\t" << tp << std::endl;
    }
    tx.commit();
  }
}

TEST_CASE("MySql", "[mysql]") { REQUIRE((1 + 1) == 2); }

TEST_CASE("Sqlite3", "[sqlite3]") { REQUIRE((1 + 1) == 2); }
