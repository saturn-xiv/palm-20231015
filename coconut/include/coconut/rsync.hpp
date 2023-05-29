#pragma once

#include <filesystem>

#include <toml++/toml.h>

namespace coconut {
class Rsync {
 public:
  Rsync(const toml::table& root);
  void dump(const std::filesystem::path& target, const size_t keep) const;

 private:
  std::optional<std::string> host;
  uint16_t port;
  std::string user;
  std::optional<std::string> password;
  std::optional<std::filesystem::path> key;
  std::string source;
};
}  // namespace coconut
