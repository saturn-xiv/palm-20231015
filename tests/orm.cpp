#define BOOST_TEST_MODULE orm
#include <boost/test/unit_test.hpp>

#include "palm/orm.hpp"

void timestamp(Poco::Data::Session& db) {
  const std::string query = "SELECT CURRENT_TIMESTAMP";
  {
    Poco::DateTime now;
    db << query, Poco::Data::Keywords::into(now);
    std::cout << Poco::DateTimeFormatter::format(
                     now, Poco::DateTimeFormat::SORTABLE_FORMAT)
              << std::endl;
  }
}

BOOST_AUTO_TEST_CASE(postgresql) {
  boost::property_tree::ptree tree;
  tree.put("postgresql.database", "palm");
  palm::postgresql::Config cfg(tree);
  auto pool = cfg.open();
  {
    Poco::Data::Session db(pool->get());
    timestamp(db);
  }
}

BOOST_AUTO_TEST_CASE(mysql) {
  boost::property_tree::ptree tree;
  tree.put("mysql.database", "palm");
  tree.put("mysql.user", "www");
  tree.put("mysql.password", "apee1uo1Eique8A.e");
  palm::mysql::Config cfg(tree);
  auto pool = cfg.open();
  {
    Poco::Data::Session db(pool->get());
    timestamp(db);
  }
}

BOOST_AUTO_TEST_CASE(sqlite3) {
  auto pool = palm::sqlite3::open("tmp/db");
  {
    Poco::Data::Session db(pool->get());
    timestamp(db);
  }
}
