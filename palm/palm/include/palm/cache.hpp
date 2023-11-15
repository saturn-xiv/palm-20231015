#pragma once

#include "palm/env.hpp"

#include <sw/redis++/redis++.h>

namespace palm {
namespace redis {
class Config {
 public:
  Config(const std::string& host, uint16_t port, uint8_t db,
         const std::string& namespace_, size_t pool_size)
      : _host(host),
        _port(port),
        _db(db),
        _namespace(namespace_),
        _pool_size(pool_size) {}
  Config(const toml::table& node);
  sw::redis::Redis open() const;

  friend std::ostream& operator<<(std::ostream& os, const Config& it) {
    os << "tcp://" << it._host << ":" << it._port << "/" << it._db;
    return os;
  }

  friend class Client;

 private:
  sw::redis::ConnectionOptions connection_options() const;
  sw::redis::ConnectionPoolOptions connection_pool_options() const;

  std::string _host;
  uint16_t _port;
  uint8_t _db;
  std::string _namespace;
  size_t _pool_size;
};

class Client {
 public:
  Client(const Config& config)
      : _connection_options(config.connection_options()),
        _connection_pool_options(config.connection_pool_options()),
        _namespace(config._namespace) {}
  inline void set(const std::string& key, const std::string value,
                  const std::chrono::seconds& ttl =
                      std::chrono::duration_cast<std::chrono::seconds>(
                          std::chrono::days(1))) {
    auto con = sw::redis::Redis(this->_connection_options,
                                this->_connection_pool_options);
    con.setex(this->key(key), ttl, value);
  }
  inline std::optional<std::string> get(const std::string& key) {
    auto con = sw::redis::Redis(this->_connection_options,
                                this->_connection_pool_options);
    return con.get(this->key(key));
  }

 private:
  inline std::string key(const std::string& key) {
    return this->_namespace + key;
  }
  sw::redis::ConnectionOptions _connection_options;
  sw::redis::ConnectionPoolOptions _connection_pool_options;
  std::string _namespace;
};
}  // namespace redis
}  // namespace palm
