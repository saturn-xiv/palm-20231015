#include "palm/cache.hpp"

palm::redis::Config::Config(const toml::table& config) {
  this->_host = config["host"].value_or("127.0.0.1");
  this->_port = config["port"].value_or(6379);
  this->_db = config["db"].value_or(0);
  this->_pool_size = config["pool-size"].value_or(32);
  {
    std::size_t it = config["timeout"].value_or(5);
    this->_timeout = std::chrono::seconds(it);
  }
}

std::shared_ptr<sw::redis::Redis> palm::redis::Config::open() const {
  sw::redis::ConnectionOptions co;
  {
    co.host = this->_host;
    co.port = this->_port;
    co.db = this->_db;
    co.socket_timeout = this->_timeout;
  }

  sw::redis::ConnectionPoolOptions po;
  { po.size = this->_pool_size; }

  auto it = std::make_shared<sw::redis::Redis>(co, po);
  return it;
}
