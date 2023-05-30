#include "palm/cache.hpp"

palm::redis::Config::Config(const toml::table& root) {
  this->_host = root["host"].value_or("127.0.0.1");
  this->_port = root["port"].value_or(6379);
  this->_namespace = root["namespace"].value<std::string>().value();
  this->_pool_size = root["pool-size"].value_or(32);
}

std::shared_ptr<palm::redis::Pool> palm::redis::Config::open() {
  spdlog::info("open redis cluster from tcp://{}:{}", this->_host, this->_port);

  sw::redis::ConnectionOptions options;
  options.host = this->_host;
  options.port = this->_port;
  //   FIXME hiredis > v1.0.2
  //   options.resp = 3;

  sw::redis::ConnectionPoolOptions pool_options;
  pool_options.size = this->_pool_size;

  sw::redis::RedisCluster pool(options, pool_options);

  std::shared_ptr<palm::redis::Pool> it =
      std::make_unique<palm::redis::Pool>(pool, this->_namespace);
  return it;
}

std::vector<std::pair<std::string, int64_t>> palm::redis::Pool::all() {
  // FIXME not work
  std::vector<std::pair<std::string, int64_t>> items;
  const auto len = this->key("").size();

  const std::vector<std::string> keys =
      this->_pool.command<std::vector<std::string>>("KEYS", "*");

  for (const auto& key : keys) {
    const int64_t ttl = this->_pool.ttl(key);
    const std::pair<std::string, int64_t> it(key.substr(len), ttl);
    items.push_back(it);
  }
  return items;
}

void palm::redis::Pool::clear() {
  // FIXME not work
  spdlog::warn("clean database");
  this->_pool.command("FLUSHALL", "ASYNC");
}

std::string palm::redis::Pool::info() {
  return this->_pool.command<std::string>("INFO", "everything");
}
