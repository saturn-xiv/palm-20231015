#pragma once

#include <chrono>
#include <filesystem>
#include <optional>
#include <string>

#include <boost/date_time/gregorian/formatters.hpp>
#include <boost/log/trivial.hpp>
#include <boost/property_tree/ptree.hpp>

// #include <Poco/Data/MySQL/Connector.h>
#include <Poco/Data/PostgreSQL/Connector.h>
#include <Poco/Data/SQLite/Connector.h>
#include <Poco/Data/SessionPool.h>
// #include <mariadb/conncpp.hpp>

namespace palm {

namespace sqlite3 {

/**
 .show Displays current settings for various parameters
 .databases Provides database names and files
 .quit Quit sqlite3 program
 .tables Show current tables
 .schema Display schema of table
 .header Display or hide the output table header
 .mode Select mode for the output table
 .dump Dump database in SQL text format
 pragma compile_options;
 SELECT name FROM sqlite_master WHERE type='table' AND name='TABLE_NAME'
*/
std::shared_ptr<Poco::Data::SessionPool> open(
    const std::filesystem::path& file,
    const std::chrono::seconds& timeout = std::chrono::seconds(5),
    const bool wal_mode = true);

}  // namespace sqlite3

namespace orm {

class Query {
 public:
  Query(Query const&) = delete;
  void operator=(Query const&) = delete;

  static Query& instance() {
    static Query it;
    return it;
  }
  inline std::string get(const std::string& key) const {
    for (const auto& [_, tree] : this->trees) {
      const auto it = tree.get_optional<std::string>(key);
      if (it) {
        return it.value();
      }
    }
    {
      std::stringstream ss;
      ss << "can't find query " << key;
      throw std::runtime_error(ss.str());
    }
  }

  void load(const std::filesystem::path& file);

 private:
  Query() {}
  std::mutex locker;
  std::unordered_map<std::string, boost::property_tree::ptree> trees;
};

struct Migration {
  friend std::ostream& operator<<(std::ostream& out, const Migration& it) {
    out << it.version << "\t" << it.name;
    return out;
  }

  std::string up;
  std::string down;
  // LANG=C date +%Y%m%d%H%M%S
  long long version;
  std::string name;
  boost::optional<std::tm> run_on;
  std::tm created_at;
};
class Schema {
 public:
  Schema(const std::filesystem::path& root, Poco::Data::Session& db);
  void migrate();
  void rollback();
  void status(std::ostream& out);

 private:
  std::vector<Migration> migrations;
  Poco::Data::Session db;
};

}  // namespace orm
namespace mysql {
/**
use DB-NAME
show tables;
desc TABLE-NAME;
SELECT table_name FROM information_schema.tables WHERE table_schema =
'databasename' AND table_name = 'testtable'; SHOW TABLES LIKE 'tablename';
*/

class Config {
 public:
  Config(const boost::property_tree::ptree& config);
  std::shared_ptr<Poco::Data::SessionPool> open() const;

 private:
  std::string host;
  uint16_t port;
  std::string database;
  std::string user;
  std::optional<std::string> password;
  std::chrono::seconds timeout;
  size_t pool_size;
};

}  // namespace mysql
namespace postgresql {
/**
https://www.postgresql.org/docs/current/runtime-config-logging.html
/var/lib/postgres/data/postgresql.conf: log_statement = 'all'
sudo journalctl -u postgresql -f
*/
class Config {
 public:
  Config(const boost::property_tree::ptree& config);
  std::shared_ptr<Poco::Data::SessionPool> open() const;

 private:
  std::string host;
  uint16_t port;
  std::string database;
  std::string user;
  std::optional<std::string> password;
  std::chrono::seconds timeout;
  size_t pool_size;
};

}  // namespace postgresql
}  // namespace palm
