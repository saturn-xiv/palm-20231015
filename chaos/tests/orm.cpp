#define BOOST_TEST_MODULE orm
#include <boost/test/unit_test.hpp>

#include "palm/orm.hpp"

BOOST_AUTO_TEST_CASE(postgresql_toml) {
  const char* str = R"TOML(
    host = "192.168.0.10"
    port = 5433
    user = "www"
    name = "testing"
    password = "secret"
    timeout = 8
    pool-size = 16
)TOML";
  std::cout << "=======\n" << str << "\n======" << std::endl;
  const auto node = toml::parse(str);
  const palm::postgresql::Config cfg(node);

  BOOST_CHECK_EQUAL(cfg.host(), "192.168.0.10");
  BOOST_CHECK_EQUAL(cfg.port(), 5433);
  BOOST_CHECK_EQUAL(cfg.name(), "testing");
  BOOST_CHECK_EQUAL(cfg.user(), "www");
  {
    auto it = cfg.password();
    BOOST_CHECK_EQUAL(it.value(), "secret");
  }
  BOOST_CHECK_EQUAL(cfg.timeout(), std::chrono::seconds(8));
  BOOST_CHECK_NE(cfg.pool_size(), 32);
}

BOOST_AUTO_TEST_CASE(postgresql_version) {
  const palm::postgresql::Config cfg("demo");
  auto pool = cfg.open();

  {
    soci::session db(*pool);
    const auto version = palm::postgresql::version(db);
    std::cout << "PostgreSql: " << version << std::endl;

    {
      std::tm now;
      db << "SELECT CURRENT_TIMESTAMP", soci::into(now);
      std::cout << std::asctime(&now) << std::endl;
    }
  }
}

BOOST_AUTO_TEST_CASE(sqlite3) {
  auto db = palm::sqlite3::open("demo.db");
  const auto version = palm::sqlite3::version(*db);
  std::cout << "Sqlite3: " << version << std::endl;
}
