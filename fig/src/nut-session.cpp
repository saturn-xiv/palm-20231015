#include "palm/nut-session.hpp"
#include "palm/nut-models.hpp"
#include "palm/version.hpp"

// #include <boost/algorithm/string/predicate.hpp>

// palm::nut::CurrentUser::CurrentUser(soci::session& db, const palm::Jwt& jwt,
//                                     const std::string& token) {
//   const auto it = jwt.decode(token, palm::PROJECT_NAME);
//   {
//     const auto payload = std::get<2>(it);
//     if (payload[palm::nut::dao::ACTION_COLUMN] !=
//         palm::nut::dao::user::Item::SIGN_IN) {
//       throw std::invalid_argument("not a valid token");
//     }
//   }
//   const auto user = palm::nut::dao::user::by_uid(db, std::get<0>(it));
//   if (!user->is_available()) {
//     throw std::invalid_argument("bad status");
//   }
//   this->_id = user->id;
//   this->_nickname = user->nickname;
//   this->_lang = user->lang;
//   this->_time_zone = user->time_zone;

//   for (const auto& it : palm::nut::dao::implicit_roles_for_user(db, user->id)) {
//     this->_roles.insert(it.code);
//   }
//   for (const auto& it :
//        palm::nut::dao::implicit_permissions_for_user(db, user->id)) {
//     Permission iv{it.operation, it.resource_type, it.resource_id};
//     this->_permissions.insert(iv);
//   }
// }
// std::optional<std::string> palm::nut::handlers::token(
//     grpc::ServerContext* context) {
//   return palm::Jwt::token(context);
// }
// std::optional<std::string> palm::nut::handlers::token(
//     const httplib::Request& request) {
//   if (request.has_header(palm::Jwt::AUTHORIZATION)) {
//     const std::string auth = request.get_header_value(palm::Jwt::AUTHORIZATION);
//     if (boost::starts_with(auth, palm::Jwt::BEARER)) {
//       std::string it = auth.substr(palm::Jwt::BEARER.size());
//       boost::algorithm::trim(it);
//       if (!it.empty()) {
//         return it;
//       }
//     }
//   }
//   if (request.has_param(TOKEN)) {
//     std::string it = request.get_param_value(TOKEN);
//     boost::algorithm::trim(it);
//     if (!it.empty()) {
//       return it;
//     }
//   }

//   return palm::nut::handlers::cookie(request, TOKEN);
// }

// std::optional<std::string> palm::nut::handlers::locale(
//     grpc::ServerContext* context) {
//   const auto meta = context->client_metadata();

//   for (auto iter = meta.find(boost::algorithm::to_lower_copy(ACCEPT_LANGUAGE));
//        iter != meta.end(); iter++) {
//     const std::string line = iter->second.data();
//     size_t found = line.find(",");
//     std::string it = found == std::string::npos ? line : line.substr(0, found);
//     boost::algorithm::trim(it);
//     if (!it.empty()) {
//       return it;
//     }
//   }

//   for (auto it = meta.find(boost::algorithm::to_lower_copy(COOKIE));
//        it != meta.end(); it++) {
//     std::string line = it->second.data();
//     std::vector<std::string> args;
//     boost::split(args, line, boost::is_any_of("; "));
//     for (const auto& arg : args) {
//       std::vector<std::string> items;
//       boost::split(items, arg, boost::is_any_of("="));
//       if (items.size() == 2 && items.front() == LOCALE) {
//         std::string it = items.back();
//         boost::algorithm::trim(it);
//         if (!it.empty()) {
//           return it;
//         }
//       }
//     }
//   }
//   return std::nullopt;
// }
// std::optional<std::string> palm::nut::handlers::locale(
//     const httplib::Request& request) {
//   if (request.has_param(LOCALE)) {
//     std::string it = request.get_param_value(LOCALE);
//     boost::algorithm::trim(it);
//     if (!it.empty()) {
//       return it;
//     }
//   }
//   {
//     const auto it = palm::nut::handlers::cookie(request, LOCALE);
//     if (it.has_value()) {
//       return it;
//     }
//   }
//   // Get language information from 'Accept-Language'.
//   //  https://www.w3.org/International/questions/qa-accept-lang-locales
//   //  https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.4
//   if (request.has_header(ACCEPT_LANGUAGE)) {
//     const std::string line = request.get_header_value(ACCEPT_LANGUAGE);
//     size_t found = line.find(",");
//     std::string it = found == std::string::npos ? line : line.substr(0, found);
//     boost::algorithm::trim(it);
//     if (!it.empty()) {
//       return it;
//     }
//   }
//   return std::nullopt;
// }

// // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For
// // https://github.com/gin-gonic/gin/blob/893c6cae07ef564cbdd2796589c449dd2ac87d21/context.go#L651
// std::optional<std::string> palm::nut::handlers::client_ip(
//     const httplib::Request& request) {
//   if (request.has_header(X_FORWARDED_FOR)) {
//     const std::string line = request.get_header_value(X_FORWARDED_FOR);
//     std::vector<std::string> args;
//     boost::split(args, line, boost::is_any_of(","));
//     if (!args.empty()) {
//       std::string it = args.front();
//       boost::algorithm::trim(it);
//       if (!it.empty()) {
//         return it;
//       }
//     }
//   }
//   if (request.has_header(X_REAL_IP)) {
//     std::string it = request.get_header_value(X_REAL_IP);
//     boost::algorithm::trim(it);
//     if (!it.empty()) {
//       return it;
//     }
//   }
//   if (request.has_header(X_APPENGINE_REMOTE_ADDR)) {
//     std::string it = request.get_header_value(X_APPENGINE_REMOTE_ADDR);
//     boost::algorithm::trim(it);
//     if (!it.empty()) {
//       return it;
//     }
//   }
//   return std::nullopt;
// }

// // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie
// std::optional<std::string> palm::nut::handlers::cookie(
//     const httplib::Request& request, const std::string& key) {
//   const size_t count = request.get_header_value_count(COOKIE);
//   for (size_t i = 0; i < count; i++) {
//     const std::string line = request.get_header_value(COOKIE, i);
//     std::vector<std::string> args;
//     boost::split(args, line, boost::is_any_of("; "));
//     for (const auto& arg : args) {
//       std::vector<std::string> items;
//       boost::split(items, arg, boost::is_any_of("="));
//       if (items.size() == 2 && items.front() == key) {
//         std::string it = items.back();
//         boost::algorithm::trim(it);
//         if (!it.empty()) {
//           return it;
//         }
//       }
//     }
//   }
//   return std::nullopt;
// }
