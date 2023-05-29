#pragma once

#include "nut.grpc.pb.h"
#include "palm/cache.hpp"
#include "palm/crypto.hpp"
#include "palm/i18n.hpp"
#include "palm/orm.hpp"

#include <typeinfo>

#include <httplib.h>

namespace palm {
namespace nut {
inline std::pair<int32_t, int32_t> set(const palm::nut::v1::Pager* pager,
                                       const int32_t total,
                                       palm::nut::v1::Pagination* pagination) {
  const int32_t MAX_SIZE = 1 << 12;
  const int32_t MIN_SIZE = 5;

  int32_t page = pager->page();
  if (page < 1) {
    page = 1;
  }
  int32_t size = pager->size();
  if (size < MIN_SIZE) {
    size = MIN_SIZE;
  }

  if (size > MAX_SIZE) {
    size = MAX_SIZE;
  }
  if (page * size > total) {
    page = (total / size) + 1;
  }

  {
    pagination->set_total(total);
    pagination->set_size(size);
    pagination->set_page(page);
    pagination->set_has_previous(page > 1);
    pagination->set_has_next((page * size) < total);
  }

  std::pair<int32_t, int32_t> it((page - 1) * size, size);
  return it;
}

using Permission = std::tuple<std::string, std::string, std::optional<int32_t>>;

class CurrentUser final {
 public:
  CurrentUser(soci::session& db, const palm::Jwt& jwt,
              const std::string& token);

  inline int32_t id() const { return this->_id; }
  inline std::string lang() const { return this->_lang; }
  inline std::string time_zone() const { return this->_time_zone; }
  inline std::string nickname() const { return this->_nickname; }
  inline bool is_administrator() const {
    return this->has_role(ROLE_ADMINISTRATOR);
  }
  inline bool has_role(const std::string& role) const {
    return std::find(this->_roles.begin(), this->_roles.end(), role) !=
           this->_roles.end();
  }
  inline bool can(const std::string& operation, const std::string resource_type,
                  const std::optional<int32_t> resource_id) const {
    if (this->is_administrator()) {
      return true;
    }
    for (const auto& it : this->_permissions) {
      if (std::get<0>(it) == operation && std::get<1>(it) == resource_type) {
        if (std::get<2>(it).has_value()) {
          if (resource_id.has_value() &&
              resource_id.value() == std::get<2>(it).value()) {
          }
        } else {
          return true;
        }
      }
    }
    return false;
  }

  inline static const std::string ROLE_ADMINISTRATOR = "administrator";
  inline static const std::string ROLE_ROOT = "root";

  inline static const std::string OPERATION_READ = "read";
  inline static const std::string OPERATION_EDIT = "edit";
  inline static const std::string OPERATION_REMOVE = "remove";
  inline static const std::string OPERATION_PRINT = "print";
  inline static const std::string OPERATION_DOWNLOAD = "download";

 private:
  int32_t _id;
  std::string _nickname;
  std::string _lang;
  std::string _time_zone;
  std::set<std::string> _roles;
  std::set<Permission> _permissions;
};

namespace handlers {

std::optional<std::string> locale(grpc::ServerContext* context);
std::optional<std::string> locale(const httplib::Request& request);
std::optional<std::string> token(grpc::ServerContext* context);
std::optional<std::string> token(const httplib::Request& request);
std::optional<std::string> client_ip(const httplib::Request& request);
std::optional<std::string> cookie(const httplib::Request& request,
                                  const std::string& key);
template <class T>
std::optional<CurrentUser> current_user(T request, soci::session& db,
                                        const palm::Jwt& jwt) {
  const auto token = palm::nut::handlers::token(request);
  if (token.has_value()) {
    try {
      palm::nut::CurrentUser it(db, jwt, token.value());
      return it;
    } catch (std::exception& ex) {
      BOOST_LOG_TRIVIAL(error) << ex.what();
    }
  }
  return std::nullopt;
}

template <class T>
std::string locale(T request, const std::optional<CurrentUser> user) {
  if (user.has_value()) {
    return user->lang();
  }
  const auto lang = palm::nut::handlers::locale(request);
  if (lang.has_value()) {
    return lang.value();
  }
  return "en-US";
}

inline static const std::string TOKEN = "token";

inline static const std::string LOCALE = "locale";

inline static const std::string COOKIE = "Cookie";
inline static const std::string ACCEPT_LANGUAGE = "Accept-Language";
inline static const std::string X_FORWARDED_FOR = "X-Forwarded-For";
inline static const std::string X_REAL_IP = "X-Real-Ip";
inline static const std::string X_APPENGINE_REMOTE_ADDR =
    "X-Appengine-Remote-Addr";
}  // namespace handlers
}  // namespace nut
}  // namespace palm

#define PALM_NUT_MUST_SIGN_IN(context, postgresql, jwt)         \
  soci::session db(postgresql);                                 \
  const auto current_user =                                     \
      palm::nut::handlers::current_user(context, db, jwt);      \
  if (!current_user) {                                          \
    return grpc::Status(grpc::StatusCode::UNAUTHENTICATED, ""); \
  }

#define PALM_NUT_MUST_ADMINISTRATOR(context, postgresql, jwt)     \
  PALM_NUT_MUST_SIGN_IN(context, postgresql, jwt)                 \
                                                                  \
  if (!current_user->is_administrator()) {                        \
    return grpc::Status(grpc::StatusCode::PERMISSION_DENIED, ""); \
  }
