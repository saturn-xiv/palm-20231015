#pragma once

#include "lemon/themes.hpp"

namespace lemon {

class Application {
 public:
  Application(const std::string& server, uint16_t port, const Theme& theme)
      : _server(server), _port(port), _theme(theme) {}
  void launch() const;

 private:
  std::shared_ptr<lemon::theme::Handler> handler() const;

  std::string _server;
  uint16_t _port;
  Theme _theme;
};
}  // namespace lemon
