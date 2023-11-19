#pragma once

#include "carnation/rbac.hpp"
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
};

}  // namespace carnation
