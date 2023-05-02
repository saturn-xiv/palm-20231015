#pragma once

#include "coconut/env.hpp"

namespace coconut {
class PostgreSql {
 public:
  PostgreSql(const std::string& host, const uint16_t port,
             const std::string& user, const std::optional<std::string> password,
             const std::string& name)
      : host(host), port(port), user(user), password(password), name(name) {}
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
