#pragma once

#include "palm/cache.hpp"
#include "palm/orm.hpp"

namespace palm {
namespace lemon {

class Config {
 public:
  Config(const toml::table& node);

 private:
  palm::redis::Config redis;
  palm::postgresql::Config postgresql;
};

class Application {
 public:
  Application(int argc, char** argv);

 private:
  void launch(uint16_t port, const std::string& config) const;
};
}  // namespace lemon
}  // namespace palm
