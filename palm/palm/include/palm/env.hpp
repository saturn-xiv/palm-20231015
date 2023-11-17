#pragma once

#include <spdlog/spdlog.h>

#define TOML_EXCEPTIONS 1
#include <toml++/toml.hpp>

namespace palm {
struct Tls {
  std::string key_file;
  std::string cert_file;
  std::string ca_file;
};
}  // namespace palm
