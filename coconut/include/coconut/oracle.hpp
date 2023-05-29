#pragma once

#include <filesystem>

#include <toml++/toml.h>

namespace coconut {
class Oracle {
 public:
  Oracle(const toml::table& root);
  void dump(const std::filesystem::path& target, const size_t keep) const;

 private:
  std::string sid;
  std::string user;
  std::string password;
  std::string directory_path;
};
}  // namespace coconut
