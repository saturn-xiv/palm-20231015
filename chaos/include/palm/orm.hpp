#pragma once

#include "palm/utils.hpp"

#include <soci/connection-pool.h>
#include <soci/postgresql/soci-postgresql.h>
#include <soci/soci.h>
#include <soci/sqlite3/soci-sqlite3.h>

namespace palm {
/**
https://www.postgresql.org/docs/current/runtime-config-logging.html
/var/lib/postgres/data/postgresql.conf: log_statement = 'all'
sudo journalctl -u postgresql -f
*/
namespace postgresql {
class Config {
 public:
  Config(const std::string& name)
      : _host("127.0.0.1"),
        _port(5432),
        _user("postgres"),
        _name(name),
        _timeout(std::chrono::seconds(5)),
        _pool_size(1 << 5) {}
  Config(const toml::table& config);
  std::shared_ptr<soci::connection_pool> open() const;
  inline std::string host() const { return this->_host; }
  inline uint16_t port() const { return this->_port; }
  inline std::string name() const { return this->_name; }
  inline std::string user() const { return this->_user; }
  inline std::optional<std::string> password() const { return this->_password; }
  inline std::chrono::seconds timeout() const { return this->_timeout; }
  inline size_t pool_size() const { return this->_pool_size; }

 private:
  std::string _host;
  uint16_t _port;
  std::string _name;
  std::string _user;
  std::optional<std::string> _password;
  std::chrono::seconds _timeout;
  size_t _pool_size;
};

std::string version(soci::session& db);
}  // namespace postgresql
/**
use DB-NAME
show tables;
desc TABLE-NAME;
SELECT table_name FROM information_schema.tables WHERE table_schema =
'databasename' AND table_name = 'testtable'; SHOW TABLES LIKE 'tablename';
*/
namespace mysql {

class Config {
 public:
  Config(const std::string& name)
      : _host("127.0.0.1"),
        _port(3306),
        _user("root"),
        _name(name),
        _timeout(std::chrono::seconds(5)),
        _pool_size(1 << 5) {}
  Config(const toml::table& config);
  std::shared_ptr<soci::connection_pool> open() const;

 private:
  std::string _host;
  uint16_t _port;
  std::string _name;
  std::string _user;
  std::optional<std::string> _password;
  std::chrono::seconds _timeout;
  size_t _pool_size;
};

std::string version(soci::session& db);

}  // namespace mysql

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
namespace sqlite3 {

std::shared_ptr<soci::session> open(
    const std::filesystem::path& file,
    const std::chrono::seconds& timeout = std::chrono::seconds(5),
    const bool wal_mode = true);

std::string version(soci::session& db);

}  // namespace sqlite3
}  // namespace palm
