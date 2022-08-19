#pragma once

#include "palm/babel-chinese.hpp"
#include "palm/babel-pali.hpp"
#include "palm/babel-sanskrit.hpp"
#include "palm/babel-tibetan.hpp"
#include "palm/cbeta.hpp"
#include "palm/cms.hpp"
#include "palm/courses.hpp"
#include "palm/cscd.hpp"
#include "palm/forum.hpp"
#include "palm/mall.hpp"
#include "palm/ops-mail.hpp"
#include "palm/ops-metrics.hpp"
#include "palm/ops-vpn.hpp"

namespace palm {
namespace fig {

class Rpc {
 public:
  Rpc() : _port(9999) {}
  Rpc(const toml::table& config);

  inline std::string address() {
    std::stringstream ss;
    ss << ":" << this->_port;
    return ss.str();
  }

 private:
  uint16_t _port;
};
class Http {
 public:
  Http() : _port(8080) {}
  Http(const toml::table& config);

  inline std::string address() {
    std::stringstream ss;
    ss << ":" << this->_port;
    return ss.str();
  }

 private:
  uint16_t _port;
};
class Config {
 public:
  Config(const toml::table& config);

  friend class Application;

 private:
  bool _debug_mode;
  // openssl rand -base64 32
  std::string _secret_key;
  std::shared_ptr<Rpc> _rpc;
  std::shared_ptr<Http> _http;
  std::shared_ptr<palm::postgresql::Config> _postgresql;
  std::shared_ptr<palm::rabbitmq::Config> _rabbitmq;
  std::shared_ptr<palm::redis::Config> _redis;
  std::shared_ptr<palm::opensearch::Config> _opensearch;
};
class Application {
 public:
  Application() {}
  void launch(int argc, char** argv);

 private:
  void rpc(const Config& config) const;
  void list_user(const Config& config) const;
  void set_user_password(const Config& config, const std::string& user,
                         const std::string& password) const;
};
}  // namespace fig
}  // namespace palm
