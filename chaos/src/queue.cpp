#include "palm/queue.hpp"

palm::rabbitmq::Config::Config(const toml::table& config) {
  this->_host = config["host"].value_or("127.0.0.1");
  this->_port = config["port"].value_or(5672);
  this->_virtual_host = config["virtual-host"].value<std::string>().value();
  this->_user = config["user"].value_or("guest");
  this->_password = config["password"].value_or("guest");
}
