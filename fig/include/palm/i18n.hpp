#pragma once

#include "palm/cache.hpp"
#include "palm/env.hpp"

// #include <soci/soci.h>

// namespace palm {
// class I18n {
//  public:
//   I18n(std::shared_ptr<soci::connection_pool> postgresql,
//        std::shared_ptr<palm::redis::Pool> redis)
//       : _postgresql(postgresql), _redis(redis) {}

//   static std::map<std::string, std::map<std::string, std::string>> sync(
//       const std::filesystem::path& root);

//   std::string t(const std::string& lang, const std::string& code);
//   std::string t(const std::string& lang, const std::string& code,
//                 const nlohmann::json& args);

//  private:
//   std::shared_ptr<palm::redis::Pool> _redis;
//   std::shared_ptr<soci::connection_pool> _postgresql;
// };
// }  // namespace palm
