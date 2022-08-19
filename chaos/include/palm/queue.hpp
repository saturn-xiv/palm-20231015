#pragma once

#include "palm/utils.hpp"

#include <amqpcpp.h>
#include <amqpcpp/libboostasio.h>

namespace palm {
/**
 *
 * rabbitmq-plugins enable rabbitmq_management
 *
 */
namespace rabbitmq {
class Config {
 public:
  Config(const std::string& virtual_host)
      : _host("127.0.0.1"),
        _port(5672),
        _virtual_host(virtual_host),
        _user("guest"),
        _password("guest") {}
  Config(const toml::table& config);

  inline AMQP::Address address() const {
    std::stringstream ss;
    ss << "amqp://" << this->_user << ":" << this->_password << "@"
       << this->_host << ":" << this->_port << "/" << this->_virtual_host;
    return ss.str();
  }

  inline std::string host() const { return this->_host; }
  inline uint16_t port() const { return this->_port; }
  inline std::string virtual_host() const { return this->_virtual_host; }
  inline std::string user() const { return this->_user; }
  inline std::string password() const { return this->_password; }

 private:
  std::string _host;
  uint16_t _port;
  std::string _virtual_host;
  std::string _user;
  std::string _password;
};
}  // namespace rabbitmq
}  // namespace palm
