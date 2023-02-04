#pragma once

#include "loquat/env.hpp"

namespace loquat {
class Application {
 public:
  void launch(const uint16_t port, const std::vector<std::string>& clients);
};
}  // namespace loquat
