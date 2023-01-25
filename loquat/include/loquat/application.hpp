#pragma once

#include <cstdint>
#include <string>
#include <vector>

namespace loquat {
class Application {
 public:
  void launch(const uint16_t port, const std::vector<std::string>& clients);
};
}  // namespace loquat
