#pragma once

#include "palm/cache.hpp"
#include "palm/orm.hpp"
#include "palm/queue.hpp"
#include "palm/utils.hpp"

namespace carnation {

class Config {
 public:
  Config(const toml::table& node)
      : _postgresql(*node["postgresql"].as_table()),
        _redis(*node["redis"].as_table()),
        _rabbitmq(*node["rabbitmq"].as_table()),
        _tls(*node["tls"].as_table()) {}

 private:
  palm::postgresql::Config _postgresql;
  palm::redis::Config _redis;
  palm::rabbitmq::Config _rabbitmq;
  palm::Tls _tls;
};

class Application {
 public:
  Application(int argc, char** argv);

 private:
  void launch(uint16_t port, const palm::Tls& tls) const;
};

}  // namespace carnation
