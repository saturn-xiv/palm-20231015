#pragma once

#include <cstdint>

namespace loquat {
class Application {
 public:
  Application(const uint16_t port) : _port(port) {}
  void launch();

 private:
  uint16_t _port;
};
}  // namespace loquat
