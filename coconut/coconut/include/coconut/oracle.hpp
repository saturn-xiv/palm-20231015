#pragma once

#include "coconut/env.hpp"

namespace coconut {
class Oracle {
 public:
  Oracle(const std::string& home, const std::string& directory_path,
         const std::string& sid, const std::string& user,
         const std::string password)
      : home(home),
        directory_path(directory_path),
        sid(sid),
        user(user),
        password(password) {}
  Oracle(const toml::table& root);
  void dump(const std::filesystem::path& target, const size_t keep) const;

 private:
  std::string sid;
  std::string user;
  std::string password;
  std::string directory_path;
  std::string home;
};
}  // namespace coconut
