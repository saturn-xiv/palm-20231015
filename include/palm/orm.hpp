#pragma once

#include <chrono>
#include <filesystem>
#include <optional>
#include <string>

#include <boost/date_time/gregorian/formatters.hpp>
#include <boost/log/trivial.hpp>
#include <boost/property_tree/ptree.hpp>

#include <Poco/Data/MySQL/Connector.h>
#include <Poco/Data/PostgreSQL/Connector.h>
#include <Poco/Data/SQLite/Connector.h>
#include <Poco/Data/Session.h>
#include <soci/boost-fusion.h>
#include <soci/boost-gregorian-date.h>
#include <soci/boost-optional.h>
#include <soci/boost-tuple.h>
#include <soci/soci.h>

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
std::shared_ptr<soci::session> open(
    const std::filesystem::path& file,
    const std::chrono::seconds& timeout = std::chrono::seconds(5),
    const bool wal_mode = true);

}  // namespace sqlite3

namespace orm {
class Logger : public soci::logger_impl {
 public:
  virtual void start_query(std::string const& query) {
    BOOST_LOG_TRIVIAL(debug) << query;
  }

 private:
  virtual soci::logger_impl* do_clone() const { return new Logger(); }
};

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
  Schema(const std::filesystem::path& root, std::shared_ptr<soci::session> db);
  void migrate();
  void rollback();
  void status(std::ostream& out);

 private:
  std::vector<Migration> migrations;
  std::shared_ptr<soci::session> db;
};

class Factory {
 public:
  virtual std::shared_ptr<soci::session> create() const = 0;
  virtual size_t size() const = 0;
};

class Pool {
 public:
  Pool(Pool const&) = delete;
  void operator=(Pool const&) = delete;

  static Pool& instance() {
    static Pool it;
    return it;
  }
  inline std::shared_ptr<soci::session> borrow() {
    const std::lock_guard<std::mutex> lock(this->locker);

    if (this->pool.size() == 0) {
      for (auto& it : this->borrowed) {
        if (it.unique()) {
          BOOST_LOG_TRIVIAL(warning)
              << R"(creating new database connection to replace discarded connection)";
          std::shared_ptr con = this->factory->create();
          this->borrowed.erase(it);
          this->borrowed.insert(con);
          return con;
        }
      }

      throw std::runtime_error("no available connection in database pool");
    }

    std::shared_ptr<soci::session> it = this->pool.front();
    this->pool.pop_front();
    this->borrowed.insert(it);
    return it;
  }

  inline void release(std::shared_ptr<soci::session> it) {
    const std::lock_guard<std::mutex> lock(this->locker);
    this->pool.push_back(it);
    this->borrowed.erase(it);
  }

  void open(std::shared_ptr<Factory> factory) {
    const std::lock_guard<std::mutex> lock(this->locker);

    while (this->pool.size() < factory->size()) {
      this->pool.push_back(factory->create());
    }
    this->factory = factory;
  }
  size_t idle() {
    const std::lock_guard<std::mutex> lock(this->locker);
    return this->pool.size();
  }

 private:
  Pool() {}

  std::deque<std::shared_ptr<soci::session>> pool;
  std::set<std::shared_ptr<soci::session>> borrowed;
  std::shared_ptr<Factory> factory;
  std::mutex locker;
};

class PooledConnection {
 public:
  PooledConnection() { this->db = Pool::instance().borrow(); }
  ~PooledConnection() { Pool::instance().release(this->db); }
  std::shared_ptr<soci::session> get() { return this->db; }

 private:
  std::shared_ptr<soci::session> db;
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

class Factory : public palm::orm::Factory {
 public:
  Factory(const boost::property_tree::ptree& config);
  std::shared_ptr<soci::session> create() const override;

  inline size_t size() const override { return this->pool_size; }

 private:
  std::string host;
  uint16_t port;
  std::string database;
  std::string user;
  std::optional<std::string> password;
  std::chrono::seconds timeout;
  size_t pool_size;
};
std::shared_ptr<soci::session> open(
    const std::string& database, const std::string& host = "127.0.0.1",
    const uint32_t port = 3306, const std::string& user = "root",
    const std::optional<std::string> password = std::nullopt,
    const std::chrono::seconds& timeout = std::chrono::seconds(5));

}  // namespace mysql
namespace postgresql {
/**
https://www.postgresql.org/docs/current/runtime-config-logging.html
/var/lib/postgres/data/postgresql.conf: log_statement = 'all'
sudo journalctl -u postgresql -f
*/
class Factory : public palm::orm::Factory {
 public:
  Factory(const boost::property_tree::ptree& config);
  std::shared_ptr<soci::session> create() const override;

  inline size_t size() const override { return this->pool_size; }

 private:
  std::string host;
  uint16_t port;
  std::string database;
  std::string user;
  std::optional<std::string> password;
  std::chrono::seconds timeout;
  size_t pool_size;
};
std::shared_ptr<soci::session> open(
    const std::string& database, const std::string& host = "127.0.0.1",
    const uint32_t port = 5432, const std::string& user = "postgres",
    const std::optional<std::string> password = std::nullopt,
    const std::chrono::seconds& timeout = std::chrono::seconds(5));
}  // namespace postgresql
}  // namespace palm

namespace soci {
template <>
struct type_conversion<palm::orm::Migration> {
  typedef soci::values base_type;

  static void from_base(const soci::values& v, soci::indicator i,
                        palm::orm::Migration& o) {
    o.version = v.get<long long>("version");
    o.name = v.get<std::string>("name");
    o.up = v.get<std::string>("up");
    o.down = v.get<std::string>("down");
    o.run_on = v.get<boost::optional<std::tm>>("run_on");
    o.created_at = v.get<std::tm>("created_at");
  }

  static void to_base(const palm::orm::Migration& o, soci::values& v,
                      soci::indicator& i) {
    v.set("version", o.version);
    v.set("name", o.name);
    v.set("up", o.up);
    v.set("down", o.down);
    v.set("run_on", o.run_on,
          o.run_on.is_initialized() ? soci::i_ok : soci::i_null);
    v.set("created_at", o.created_at);

    i = soci::i_ok;
  }
};
}  // namespace soci
