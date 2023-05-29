#pragma once

#include <filesystem>

#include <toml++/toml.h>

namespace coconut {
class PostgreSql {
 public:
  PostgreSql(const toml::table& root);
  void dump(const std::filesystem::path& target, const size_t keep) const;

 private:
  std::string host;
  uint16_t port;
  std::string user;
  std::optional<std::string> password;
  std::string name;
};

}  // namespace coconut
