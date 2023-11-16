#include "palm/orm.hpp"

palm::postgresql::Config::Config(const toml::table& node) {
  this->_host = node["host"].value_or("127.0.0.1");
  this->_port = node["port"].value_or(5432);
  this->_user = node["user"].value_or("postgres");
  this->_dbname = node["dbname"].value<std::string>().value();
  this->_password = node["password"].value<std::string>();
  this->_pool_size = node["pool-size"].value_or(1 << 5);
}

pqxx::connection* palm::postgresql::Config::open() {
  std::stringstream ss;
  ss << "host=" << this->_host << " port=" << this->_port
     << " dbname=" << this->_dbname << " user=" << this->_user;
  if (this->_password) {
    ss << " password=" << this->_password.value();
  }
  ss << " sslmode=disable";
  const std::string url = ss.str();

  return this->_pool.construct(url);
}
