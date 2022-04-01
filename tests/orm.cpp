#define BOOST_TEST_MODULE orm
#include <boost/test/unit_test.hpp>

#include "palm/orm.hpp"

void timestamp(std::shared_ptr<soci::session> db) {
  const std::string query = "SELECT CURRENT_TIMESTAMP";
  {
    boost::gregorian::date now;
    (*db) << query, soci::into(now);
    std::cout << boost::gregorian::to_simple_string(now) << std::endl;
  }
  {
    std::tm now;
    (*db) << query, soci::into(now);
    std::cout << std::asctime(&now) << std::endl;
  }
}

BOOST_AUTO_TEST_CASE(postgresql) {
  auto sql = palm::postgresql::open("demo");
  timestamp(sql);
}

BOOST_AUTO_TEST_CASE(mysql) {
  auto sql = palm::mysql::open("demo", "127.0.0.1", 3306, "www", "123456");
  timestamp(sql);
}

BOOST_AUTO_TEST_CASE(sqlite3) {
  auto sql = palm::sqlite3::open("tmp/db");
  timestamp(sql);
}
