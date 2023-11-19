#pragma once

#include "carnation/casbin.hpp"
#include "palm/utils.hpp"

namespace carnation {

class Config {
 private:
  palm::postgresql::Config _postgresql;
  palm::redis::Config _redis;
  palm::Tls _tls;
};

class Application {
 public:
  Application(int argc, char** argv);

 private:
  void launch(uint16_t port, const palm::Tls& tls) const;
};

}  // namespace carnation
