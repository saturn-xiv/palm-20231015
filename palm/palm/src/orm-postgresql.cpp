#include "palm/orm.hpp"

palm::postgresql::Config::Config(const toml::table& node) {
  this->_host = node["host"].value_or("127.0.0.1");
  this->_port = node["port"].value_or(5432);
  this->_user = node["user"].value_or("postgres");
  this->_dbname = node["dbname"].value<std::string>().value();
  this->_password = node["password"].value<std::string>();
  this->_pool_size = node["pool-size"].value_or(1 << 5);
}

std::shared_ptr<palm::postgresql::Pool> palm::postgresql::Config::open() {
  std::stringstream ss;
  ss << "host=" << this->_host << " port=" << this->_port
     << " dbname=" << this->_dbname << " user=" << this->_user;
  if (this->_password) {
    ss << " password=" << this->_password.value();
  }
  ss << " sslmode=disable";
  const std::string url = ss.str();
  auto pool = std::make_shared<palm::postgresql::Pool>(url, this->_pool_size);
  return pool;
}

palm::postgresql::Pool::Pool(const std::string& url, size_t pool_size) {
  for (int i = 0; i < pool_size; i++) {
    auto it = std::make_unique<pqxx::connection>(url);
    this->_queue.push(std::move(it));
  }
}
