#pragma once

#include "palm/utils.hpp"

#include <sw/redis++/redis++.h>

namespace palm {
namespace redis {
class Config {
 public:
  Config()
      : _host("127.0.0.1"),
        _port(6379),
        _db(0),
        _timeout(std::chrono::seconds(5)),
        _pool_size(1 << 5) {}
  Config(const toml::table& config);
  std::shared_ptr<sw::redis::Redis> open() const;
  inline std::string host() const { return this->_host; }
  inline uint16_t port() const { return this->_port; }
  inline uint8_t db() const { return this->_db; }
  inline std::chrono::seconds timeout() const { return this->_timeout; }
  inline size_t pool_size() const { return this->_pool_size; }

 private:
  std::string _host;
  uint16_t _port;
  uint8_t _db;
  std::chrono::seconds _timeout;
  size_t _pool_size;
};

}  // namespace redis
}  // namespace palm
