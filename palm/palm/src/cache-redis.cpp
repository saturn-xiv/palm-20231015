#include "palm/cache.hpp"

palm::redis::Config::Config(const toml::table& node) {
  this->_host = node["host"].value_or("127.0.0.1");
  this->_port = node["port"].value_or(6379);
  this->_db = node["db"].value_or(0);
  this->_namespace = node["namespace"].value<std::string>().value();
  this->_pool_size = node["pool-size"].value_or(1 << 5);
}

sw::redis::Redis palm::redis::Config::open() const {
  auto options = this->connection_options();
  auto con = sw::redis::Redis(options);
  return std::move(con);
}

sw::redis::ConnectionOptions palm::redis::Config::connection_options() const {
  sw::redis::ConnectionOptions it;
  it.host = this->_host;
  it.port = this->_port;
  it.db = this->_db;
  return std::move(it);
}

sw::redis::ConnectionPoolOptions palm::redis::Config::connection_pool_options()
    const {
  sw::redis::ConnectionPoolOptions it;
  it.size = this->_pool_size;
  it.wait_timeout = std::chrono::milliseconds(100);
  it.connection_lifetime = std::chrono::minutes(10);
  return std::move(it);
}
