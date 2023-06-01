#pragma once

#include "palm/env.hpp"

#include <SQLiteCpp/SQLiteCpp.h>
#include <mysql/mysql.h>
#include <pqxx/pqxx>

namespace palm {

namespace postgresql {
// https://www.postgresql.org/docs/current/runtime-config-logging.html
// /var/lib/postgres/data/postgresql.conf: log_statement = 'all'
class Config {
 public:
  Config(const toml::table& root);
  static std::string version();
  // https://www.postgresql.org/docs/current/libpq-connect.html
  std::shared_ptr<pqxx::connection> connect();

 private:
  std::string _host;
  uint16_t _port;
  std::string _name;
  std::string _user;
  std::optional<std::string> _password;
  size_t _pool_size;
};
}  // namespace postgresql

namespace mysql {
class Connection {
 public:
  Connection(MYSQL* db, my_bool reconnect) : _db(db), _reconnect(reconnect) {}
  ~Connection() {
    if (this->_db != NULL) {
      mysql_close(this->_db);
    }
    this->_db = NULL;
  }

  inline MYSQL* get() { return this->_db; }

 private:
  MYSQL* _db;
  my_bool _reconnect;
};

inline void finish_with_error(MYSQL* db) {
  spdlog::error("{}", mysql_error(db));
  mysql_close(db);
}

class Config {
 public:
  Config(const toml::table& root);
  std::shared_ptr<Connection> open() const;
  static std::string version();

 private:
  std::string _host;
  uint16_t _port;
  std::string _name;
  std::string _user;
  std::optional<std::string> _password;
  size_t _pool_size;
};
}  // namespace mysql

/*
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
// https://stackoverflow.com/questions/57123453/how-to-use-diesel-with-sqlite-connections-and-avoid-database-is-locked-type-of
// https://www.sqlite.org/pragma.html#pragma_synchronous
class Sqlite3 {
 public:
  Sqlite3(const toml::table& root);
  static std::string version();

  std::shared_ptr<SQLite::Database> open() const;

 private:
  std::string _file;
  size_t _timeout;
};

}  // namespace palm
