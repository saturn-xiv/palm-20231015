#pragma once

#include "palm/env.hpp"

#include <pqxx/pqxx>

namespace palm {

namespace postgresql {
// https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-PARAMKEYWORDS
class Config {
 public:
  Config(const toml::table& node);
  pqxx::connection open() const;

  friend std::ostream& operator<<(std::ostream& os, const Config& it) {
    os << "postgresql://" << it._user << "@" << it._host << ":" << it._port
       << "/" << it._dbname;
    return os;
  }

 private:
  std::string _host;
  uint16_t _port;
  std::string _dbname;
  std::string _user;
  std::optional<std::string> _password;
  size_t _pool_size;
};

}  // namespace postgresql

namespace mysql {}

namespace sqlite3 {}

}  // namespace palm
