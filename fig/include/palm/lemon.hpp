#pragma once

#include "palm/ops-router.hpp"

namespace palm {
namespace lemon {

namespace application {

struct GenericOptions {
  toml::table open() const;
  bool debug;
  std::string config;
};

class Main {
 public:
  Main(int argc, char** argv);

 private:
  void launch(const GenericOptions& options) const;
};

}  // namespace application
}  // namespace lemon
}  // namespace palm
