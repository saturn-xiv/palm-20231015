#pragma once

#include "coconut/env.hpp"

namespace coconut {
class Rsync {
 public:
  Rsync(const std::optional<std::string> host, const uint16_t port,
        const std::string& user, const std::optional<std::string> password,
        const std::optional<std::string> key, const std::string& source)
      : host(host), port(port), user(user), password(password), source(source) {
    this->set_key(key);
  }
  Rsync(const toml::table& root);
  void dump(const std::filesystem::path& target, const size_t keep) const;

 private:
  void set_key(std::optional<std::string> key);

  std::optional<std::string> host;
  uint16_t port;
  std::string user;
  std::optional<std::string> password;
  std::optional<std::filesystem::path> key;
  std::string source;
};
}  // namespace coconut
