#include "loquat/application.hpp"

#include <spdlog/spdlog.h>

void loquat::Application::launch() {
  SPDLOG_INFO("listen on http://0.0.0.0:{}", this->_port);
}
