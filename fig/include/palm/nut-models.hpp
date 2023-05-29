#pragma once

#include "nut.grpc.pb.h"
#include "palm/crypto.hpp"
#include "palm/email.hpp"
#include "palm/minio.hpp"
#include "palm/orm.hpp"
#include "palm/twilio.hpp"

#include <google/protobuf/util/time_util.h>

namespace palm {
namespace nut {
namespace dao {

inline static const std::string ACCESS_TOKEN_COLUMN = "access_token";
inline static const std::string ACTION_COLUMN = "action";
inline static const std::string AVATAR_COLUMN = "avatar";
inline static const std::string BUCKET_COLUMN = "bucket";
inline static const std::string BODY_COLUMN = "body_count";
inline static const std::string CODE_COLUMN = "code";
inline static const std::string CONFIRMED_AT_COLUMN = "confirmed_at";
inline static const std::string CONTENT_TYPE_COLUMN = "content_type_at";
inline static const std::string CREATED_AT_COLUMN = "created_at";
inline static const std::string CURRENT_SIGN_IN_AT_COLUMN =
    "current_sign_in_at";
inline static const std::string CURRENT_SIGN_IN_IP_COLUMN =
    "current_sign_in_ip";
inline static const std::string DETAILS_COLUMN = "details";
inline static const std::string DELETED_AT_COLUMN = "deleted_at";
inline static const std::string EDITOR_COLUMN = "editor";
inline static const std::string EMAIL_COLUMN = "email";
inline static const std::string EXPIRED_AT_COLUMN = "expired_at";
inline static const std::string ID_COLUMN = "id";
inline static const std::string IP_COLUMN = "ip";
inline static const std::string LANG_COLUMN = "lang";
inline static const std::string LAST_SIGN_IN_AT_COLUMN = "last_sign_in_at";
inline static const std::string LAST_SIGN_IN_IP_COLUMN = "last_sign_in_ip";
inline static const std::string LEFT_COLUMN = "left";
inline static const std::string LEVEL_COLUMN = "level";
inline static const std::string LIMIT_COLUMN = "limit";
inline static const std::string LOCKED_AT_COLUMN = "locked_at";
inline static const std::string KEY_COLUMN = "key";
inline static const std::string MESSAGE_COLUMN = "message";
inline static const std::string NAME_COLUMN = "name";
inline static const std::string NICKNAME_COLUMN = "nickname";
inline static const std::string NOT_BEFORE_COLUMN = "not_before";
inline static const std::string RIGHT_COLUMN = "right";
inline static const std::string WIDTH_COLUMN = "width";
inline static const std::string OFFSET_COLUMN = "offset";
inline static const std::string OPERATION_COLUMN = "operation";
inline static const std::string PASSWORD_COLUMN = "password";
inline static const std::string PRIORITY_COLUMN = "priority";
inline static const std::string PROVIDER_TYPE_COLUMN = "provider_type";
inline static const std::string PROVIDER_ID_COLUMN = "provider_id";
inline static const std::string PUBLISHED_AT_COLUMN = "published_at";
inline static const std::string REAL_NAME_COLUMN = "real_name";
inline static const std::string RESOURCE_TYPE_COLUMN = "resource_type";
inline static const std::string RESOURCE_ID_COLUMN = "resource_id";
inline static const std::string ROLE_ID_COLUMN = "role_id";
inline static const std::string SALT_COLUMN = "salt";
inline static const std::string SIGN_IN_COUNT_COLUMN = "sign_in_count";
inline static const std::string SIZE_COLUMN = "size";
inline static const std::string STATUS_COLUMN = "status";
inline static const std::string SUBJECT_TYPE_COLUMN = "subject_type";
inline static const std::string SUBJECT_ID_COLUMN = "subject_id";
inline static const std::string TIME_ZONE_COLUMN = "time_zone";
inline static const std::string TITLE_COLUMN = "title";
inline static const std::string UPDATED_AT_COLUMN = "updated_at";
inline static const std::string UID_COLUMN = "uid";
inline static const std::string URL_COLUMN = "url";
inline static const std::string USER_ID_COLUMN = "user_id";
inline static const std::string VALUE_COLUMN = "value";
inline static const std::string VERSION_COLUMN = "version";

namespace locale {
inline static const std::string SITE_TITLE = "site.title";
inline static const std::string SITE_SUBHEAD = "site.subhead";
inline static const std::string SITE_DESCRIPTION = "site.description";

struct Item {
  inline static std::string fallback(const std::string& lang,
                                     const std::string& code) {
    return lang + "." + code;
  }
  inline void set(palm::nut::v1::LocaleIndexResponse_Item* it) {
    it->set_id(this->id);
    it->set_lang(this->lang);
    it->set_code(this->code);
    it->set_message(this->message);
    *it->mutable_updated_at() =
        google::protobuf::util::TimeUtil::TimeTToTimestamp(
            std::mktime(&this->updated_at));
  }
  int32_t id;
  std::string lang;
  std::string code;
  std::string message;
  int32_t version;
  std::tm updated_at;
  std::tm created_at;
};

std::optional<Item> get(soci::session& db, const int32_t id);
std::optional<Item> get(soci::session& db, const std::string& lang,
                        const std::string& code);
std::vector<Item> get(soci::session& db, const int32_t offset,
                      const int32_t limit);
std::vector<Item> get(soci::session& db, const std::string& lang);
void create(soci::session& db, const std::string& lang, const std::string& code,
            const std::string& message);
void update(soci::session& db, const int32_t id, const std::string& message);
void destroy(soci::session& db, const int32_t id);
int32_t total(soci::session& db);
std::vector<std::string> languages(soci::session& db);

inline void set(soci::session& db, const std::string& lang,
                const std::string& code, const std::string& message) {
  const auto it = get(db, lang, code);
  if (it.has_value()) {
    update(db, it->id, message);
  } else {
    create(db, lang, code, message);
  }
}

}  // namespace locale

namespace category {
struct Item {
  inline static const std::string DEFAULT = "default";
  inline void set(palm::nut::v1::CategoryIndexResponse_Item* it) {
    it->set_id(this->id);
    it->set_code(this->code);
    it->set_left(this->left);
    it->set_right(this->right);
    *it->mutable_updated_at() =
        google::protobuf::util::TimeUtil::TimeTToTimestamp(
            std::mktime(&this->updated_at));
  }
  int32_t id;
  std::string code;
  int32_t left;
  int32_t right;
  int32_t version;
  std::tm updated_at;
  std::tm created_at;
};

void append(soci::session& db, const std::string& code, const int32_t left);
void create(soci::session& db, const std::string& code, const int32_t parent);
void update(soci::session& db, const int32_t id, const std::string& code);
void destroy(soci::session& db, const int32_t id);
std::vector<Item> get(soci::session& db);
std::vector<Item> offsprings(soci::session& db, const int32_t id);
std::vector<Item> parents(soci::session& db, const int32_t id);
std::optional<Item> get(soci::session& db, const int32_t id);
std::optional<Item> get(soci::session& db, const std::string& code);

}  // namespace category

namespace tag {

struct Item {
  inline void set(palm::nut::v1::TagIndexResponse_Item* it) {
    it->set_id(this->id);
    it->set_code(this->code);
    it->set_priority(this->priority);
    *it->mutable_updated_at() =
        google::protobuf::util::TimeUtil::TimeTToTimestamp(
            std::mktime(&this->updated_at));
  }
  int32_t id;
  std::string code;
  int32_t priority;
  int32_t version;
  std::tm updated_at;
  std::tm created_at;
};

void create(soci::session& db, const std::string& code, const int32_t priority);
void update(soci::session& db, const int32_t id, const std::string& code,
            const int32_t priority);
void destroy(soci::session& db, const int32_t id);
std::vector<Item> get(soci::session& db);
std::optional<Item> get(soci::session& db, const int32_t id);
std::optional<Item> get(soci::session& db, const std::string& code);
}  // namespace tag

namespace shorter_link {
struct Item {
  inline void set(palm::nut::v1::ShorterLinkIndexResponse_Item* it) {
    it->set_id(this->id);
    it->set_url(this->url);
    it->set_details(this->details);
    it->set_code(palm::serial::to(this->id));
    *it->mutable_updated_at() =
        google::protobuf::util::TimeUtil::TimeTToTimestamp(
            std::mktime(&this->updated_at));
  }
  int32_t id;
  std::string url;
  std::string details;
  int32_t version;
  std::tm updated_at;
  std::tm created_at;
};

void create(soci::session& db, const std::string& url,
            const std::string& details);
void update(soci::session& db, const int32_t id, const std::string& url,
            const std::string& details);
void destroy(soci::session& db, const int32_t id);
std::vector<Item> get(soci::session& db, const int32_t offset,
                      const int32_t limit);
std::optional<Item> get(soci::session& db, const int32_t id);
std::optional<Item> get(soci::session& db, const std::string& url);
int32_t total(soci::session& db);
}  // namespace shorter_link

namespace setting {

struct Item {
  int32_t id;
  std::string key;
  std::optional<int32_t> user_id;
  std::string value;
  std::optional<std::string> salt;
  int32_t version;
  std::tm updated_at;
  std::tm created_at;
};

void set(soci::session& db, const std::string& key,
         const boost::optional<int32_t> user, const std::string& value,
         const boost::optional<std::string> salt);
inline void set(soci::session& db, const std::string& key, const int32_t user,
                const std::string& value) {
  set(db, key, user, value, boost::none);
}
inline void set(soci::session& db, const std::string& key,
                const std::string& value, const std::string& salt) {
  set(db, key, boost::none, value, salt);
}
inline void set(soci::session& db, const std::string& key,
                const std::string& value) {
  set(db, key, boost::none, value, boost::none);
}

std::optional<Item> get(soci::session& db, const std::string& key,
                        const int32_t user);
std::optional<Item> get(soci::session& db, const std::string& key);

template <class T>
std::string key(const std::optional<std::string> lang = std::nullopt) {
  std::stringstream ss;
  ss << boost::typeindex::type_id_with_cvr<T>().pretty_name();
  if (lang.has_value()) {
    ss << "." << lang.value();
  }
  return ss.str();
}

template <class S, class T>
void set(soci::session& db, const S& secret_box, const std::string& key,
         const int32_t user, T* entity, bool encode = false) {
  const auto it = palm::protobuf::to(entity);
  if (encode) {
    const auto tmp = secret_box.encrypt(it.value());
    const auto value = palm::base64::to(tmp.first);
    const auto salt = palm::base64::to(tmp.second);
    set(db, key, user, value, salt);
  } else {
    const auto value = palm::base64::to(it.value());
    set(db, key, user, value);
  }
}

template <class S, class T>
void set(soci::session& db, const S& secret_box, const std::string& key,
         T* entity, bool encode = false) {
  const auto it = palm::protobuf::to(entity);
  if (encode) {
    const auto tmp = secret_box.encrypt(it.value());
    const auto value = palm::base64::to(tmp.first);
    const auto salt = palm::base64::to(tmp.second);
    set(db, key, value, salt);
  } else {
    const auto value = palm::base64::to(it.value());
    set(db, key, value);
  }
}
template <class S, class T>
std::optional<T> get(soci::session& db, const S& secret_box,
                     const std::string& key, const int32_t user) {
  const auto it = get(db, key, user);
  const auto value = palm::base64::from(it->value);
  if (!it->salt) {
    return palm::protobuf::from<T>(value);
  }
  const auto salt = palm::base64::from(it->salt.value());
  const auto buffer = secret_box.decrypt(value, salt);
  return palm::protobuf::from<T>(buffer);
}
template <class S, class T>
std::optional<T> get(soci::session& db, const S& secret_box,
                     const std::string& key) {
  const auto it = get(db, key);
  const auto value = palm::base64::from(it->value);
  if (!it->salt) {
    return palm::protobuf::from<T>(value);
  }
  const auto salt = palm::base64::from(it->salt.value());

  const auto buffer = secret_box.decrypt(value, salt);
  return palm::protobuf::from<T>(buffer);
}

}  // namespace setting

namespace log {
struct Item {
  inline void set(palm::nut::v1::UserLogsResponse_Item* it) {
    it->set_id(this->id);
    it->set_user_id(this->user_id);
    it->set_ip(this->ip);
    it->set_level(
        static_cast<palm::nut::v1::UserLogsResponse_Item_Level>(this->level));
    it->set_message(this->message);
    {
      auto iv = it->mutable_resource();
      iv->set_type(this->resource_type);
      if (this->resource_id.has_value()) {
        iv->set_id(this->resource_id.value());
      }
    }
    *it->mutable_created_at() =
        google::protobuf::util::TimeUtil::TimeTToTimestamp(
            std::mktime(&this->created_at));
  }

  int32_t id;
  int32_t user_id;
  int32_t level;
  std::string ip;
  std::string message;
  std::string resource_type;
  std::optional<int32_t> resource_id;
  std::tm created_at;
};

void add(soci::session& db, const int32_t user, const int32_t level,
         const std::string& ip, const std::string& message,
         const std::string& resource_type,
         const boost::optional<int32_t> resource);
inline void add(soci::session& db, const int32_t user, const int32_t level,
                const std::string& ip, const std::string& message,
                const v1::Resource& resource) {
  add(db, user, level, ip, message, resource.type(),
      (resource.has_id() ? boost::optional<int32_t>{resource.id()}
                         : boost::none));
}
inline void add(soci::session& db, const int32_t user, const std::string& ip,
                const std::string& message, const v1::Resource& resource) {
  add(db, user, palm::nut::v1::UserLogsResponse_Item_Level_INFO, ip, message,
      resource);
}

template <class T>
void add(soci::session& db, const int32_t user, const std::string& ip,
         const std::string& message,
         const boost::optional<int32_t> resource_id = boost::none) {
  add(db, user, palm::nut::v1::UserLogsResponse_Item_Level_INFO, ip, message,
      boost::typeindex::type_id_with_cvr<T>().pretty_name(), resource_id);
}

int32_t total(soci::session& db, const int32_t user);
std::vector<Item> get(soci::session& db, const int32_t user,
                      const int32_t offset, const int32_t limit);

}  // namespace log
namespace user {

struct Item {
  inline void set(palm::nut::v1::UserIndexResponse_Item* it) {
    it->set_id(this->id);
    it->set_uid(this->uid);
    it->set_email(this->email);
    it->set_nickname(this->nickname);
    it->set_real_name(this->real_name);
    it->set_provider_type(
        static_cast<palm::nut::v1::UserProvider_Type>(this->provider_type));
    *it->mutable_updated_at() =
        google::protobuf::util::TimeUtil::TimeTToTimestamp(
            std::mktime(&this->updated_at));

    if (this->last_sign_in_at) {
      *it->mutable_last_sign_in_at() =
          google::protobuf::util::TimeUtil::TimeTToTimestamp(
              std::mktime(&this->last_sign_in_at.value()));
    }
    if (this->last_sign_in_ip) {
      *it->mutable_last_sign_in_ip() = this->last_sign_in_ip.value();
    }
    if (this->current_sign_in_at) {
      *it->mutable_current_sign_in_at() =
          google::protobuf::util::TimeUtil::TimeTToTimestamp(
              std::mktime(&this->current_sign_in_at.value()));
    }
    if (this->current_sign_in_ip) {
      *it->mutable_current_sign_in_ip() = this->current_sign_in_ip.value();
    }

    it->set_sign_in_count(this->sign_in_count);
    it->set_lang(this->lang);
    it->set_time_zone(this->time_zone);
    it->set_avatar(this->avatar);
    if (this->confirmed_at) {
      *it->mutable_confirmed_at() =
          google::protobuf::util::TimeUtil::TimeTToTimestamp(
              std::mktime(&this->confirmed_at.value()));
    }
    if (this->locked_at) {
      *it->mutable_locked_at() =
          google::protobuf::util::TimeUtil::TimeTToTimestamp(
              std::mktime(&this->locked_at.value()));
    }
    if (this->deleted_at) {
      *it->mutable_deleted_at() =
          google::protobuf::util::TimeUtil::TimeTToTimestamp(
              std::mktime(&this->deleted_at.value()));
    }
  }
  inline void set(palm::nut::v1::UserDetail* it) const {
    it->set_id(this->id);
    it->set_uid(this->uid);
    it->set_nickname(this->nickname);
    it->set_real_name(this->real_name);
    it->set_email(this->email);
  }
  inline void set(palm::nut::v1::UserSignInResponse_Payload* it) const {
    it->set_nickname(this->nickname);
    it->set_real_name(this->real_name);
    it->set_email(this->email);
    it->set_lang(this->lang);
    it->set_time_zone(this->time_zone);
    it->set_avatar(this->avatar);
  }
  inline bool is_available() const {
    return this->confirmed_at.has_value() && !this->locked_at.has_value() &&
           !this->deleted_at.has_value();
  }

  inline bool verify_password(const std::string& password) const {
    if (this->password.has_value()) {
      return palm::hashing::verify(password, this->password.value());
    }
    return false;
  }

  inline static const std::string CONFIRM = "confirm";
  inline static const std::string UNLOCK = "unlock";
  inline static const std::string RESET_PASSWORD = "reset-password";
  inline static const std::string SIGN_IN = "sign-in";

  int32_t id;
  std::string real_name;
  std::string nickname;
  std::string email;
  std::optional<std::string> password;
  std::string salt;
  std::string uid;
  int32_t provider_type;
  std::string provider_id;
  std::optional<std::string> access_token;
  std::string avatar;
  std::string lang;
  std::string time_zone;
  int32_t sign_in_count;
  std::optional<std::tm> current_sign_in_at;
  std::optional<std::string> current_sign_in_ip;
  std::optional<std::tm> last_sign_in_at;
  std::optional<std::string> last_sign_in_ip;
  std::optional<std::tm> confirmed_at;
  std::optional<std::tm> locked_at;
  std::optional<std::tm> deleted_at;
  int32_t version;
  std::tm updated_at;
  std::tm created_at;
};

std::optional<Item> by_id(soci::session& db, const int32_t id);
std::optional<Item> by_email(soci::session& db, const std::string& email);
std::optional<Item> by_uid(soci::session& db, const std::string& uid);
std::optional<Item> by_nickname(soci::session& db, const std::string nickname);
std::optional<Item> by_provider(soci::session& db,
                                const v1::UserProvider::Type provider_type,
                                const std::string& provider_id);
std::vector<Item> all(soci::session& db, const int32_t offset,
                      const int32_t limit);
int32_t total(soci::session& db);
void create(soci::session& db, const std::string& real_name,
            const std::string& nickname, const std::string& email,
            const std::string& password, const std::string& lang,
            const std::string& time_zone);
void confirm(soci::session& db, const int32_t id);
void lock(soci::session& db, const int32_t id);
void unlock(soci::session& db, const int32_t id);
void disable(soci::session& db, const int32_t id);
void enable(soci::session& db, const int32_t id);
void set_password(soci::session& db, const int32_t id,
                  const std::string& password);
void set_profile(soci::session& db, const int32_t id,
                 const std::string& real_name, const std::string& avatar,
                 const std::string& lang, const std::string& timezone);
void sign_in(soci::session& db, const int32_t id, const std::string& client_ip);
}  // namespace user

namespace role {
struct Item {
  inline static const std::string ROOT = "root";
  inline static const std::string ADMINISTRATOR = "administrator";

  inline void set(palm::nut::v1::PolicyRoleListResponse_Item* it) {
    it->set_id(this->id);
    it->set_code(this->code);
    it->set_left(this->left);
    it->set_right(this->right);
    *it->mutable_updated_at() =
        google::protobuf::util::TimeUtil::TimeTToTimestamp(
            std::mktime(&this->updated_at));
  }

  int32_t id;
  std::string code;
  int32_t left;
  int32_t right;
  int32_t version;
  std::tm updated_at;
  std::tm created_at;
};

void append(soci::session& db, const std::string& code, const int32_t left);
void create(soci::session& db, const std::string& code, const int32_t parent);
void update(soci::session& db, const int32_t id, const std::string& code);
void destroy(soci::session& db, const int32_t id);
std::vector<Item> get(soci::session& db);
std::vector<Item> offsprings(soci::session& db, const int32_t id);
std::vector<Item> parents(soci::session& db, const int32_t id);
std::optional<Item> get(soci::session& db, const int32_t id);
std::optional<Item> get(soci::session& db, const std::string& code);

namespace user {
struct Item {
  inline bool is_available() {
    const auto now = std::time(nullptr);
    const auto nbf = std::mktime(&this->not_before);
    const auto exp = std::mktime(&this->expired_at);
    return now >= nbf && now <= exp;
  }
  int32_t id;
  int32_t role_id;
  int32_t user_id;
  std::tm not_before;
  std::tm expired_at;
  int32_t version;
  std::tm updated_at;
  std::tm created_at;
};
std::optional<Item> get(soci::session& db, const int32_t role,
                        const int32_t user);
std::vector<Item> by_role(soci::session& db, const int32_t role);
std::vector<Item> by_user(soci::session& db, const int32_t user);
void associate(soci::session& db, const int32_t role, const int32_t user,
               const std::tm& not_before, const std::tm& expired_at);
void dissociate(soci::session& db, const int32_t role, const int32_t user);
}  // namespace user

inline void set(const Item& role, user::Item& item,
                palm::nut::v1::PolicyRolesForUserResponse_Item* iv) {
  iv->set_id(role.id);
  iv->set_code(role.code);
  *iv->mutable_not_before() =
      google::protobuf::util::TimeUtil::TimeTToTimestamp(
          std::mktime(&item.not_before));
  *iv->mutable_expired_at() =
      google::protobuf::util::TimeUtil::TimeTToTimestamp(
          std::mktime(&item.expired_at));
}

inline void set(const palm::nut::dao::user::Item& user, user::Item& item,
                palm::nut::v1::PolicyUsersForRoleResponse_Item* iv) {
  {
    auto it = iv->mutable_user();
    user.set(it);
  }
  *iv->mutable_not_before() =
      google::protobuf::util::TimeUtil::TimeTToTimestamp(
          std::mktime(&item.not_before));
  *iv->mutable_expired_at() =
      google::protobuf::util::TimeUtil::TimeTToTimestamp(
          std::mktime(&item.expired_at));
}

}  // namespace role

namespace permission {
struct Item {
  inline void set(palm::nut::v1::Permission* iv) const {
    iv->set_operation(this->operation);
    if (this->subject_type ==
        boost::typeindex::type_id_with_cvr<palm::nut::dao::user::Item>()
            .pretty_name()) {
      iv->set_user(this->subject_id);
    } else if (this->subject_type ==
               boost::typeindex::type_id_with_cvr<palm::nut::dao::role::Item>()
                   .pretty_name()) {
      iv->set_role(this->subject_id);
    } else {
      BOOST_LOG_TRIVIAL(error) << "unknown subject type " << this->subject_type;
    }
    {
      auto it = iv->mutable_resource();
      it->set_type(this->resource_type);
      if (this->resource_id.has_value()) {
        it->set_id(this->resource_id.value());
      }
    }
  }
  int32_t id;
  std::string subject_type;
  int32_t subject_id;
  std::string operation;
  std::string resource_type;
  std::optional<int32_t> resource_id;
  std::tm created_at;
};
std::optional<Item> get(soci::session& db, const std::string& subject_type,
                        const int32_t subject_id, const std::string& operation,
                        const std::string& resource_type,
                        const int32_t resource_id);
std::optional<Item> get(soci::session& db, const std::string& subject_type,
                        const int32_t subject_id, const std::string& operation,
                        const std::string& resource_type);
template <class S>
std::optional<Item> get(soci::session& db, const int32_t subject_id,
                        const std::string& operation,
                        const std::string& resource_type,
                        const int32_t resource_id) {
  const std::string subject_type =
      boost::typeindex::type_id_with_cvr<S>().pretty_name();
  return get(db, subject_type, subject_id, operation, resource_type,
             resource_id);
}
template <class S, class R>
std::optional<Item> get(soci::session& db, const int32_t subject_id,
                        const std::string& operation,
                        const int32_t resource_id) {
  const std::string resource_type =
      boost::typeindex::type_id_with_cvr<R>().pretty_name();
  return get<S>(db, subject_id, operation, resource_type, resource_id);
}
template <class S>
std::optional<Item> get(soci::session& db, const int32_t subject_id,
                        const std::string& resource_type,
                        const std::string& operation) {
  const std::string subject_type =
      boost::typeindex::type_id_with_cvr<S>().pretty_name();
  return get(db, subject_type, subject_id, operation, resource_type);
}
template <class S, class R>
std::optional<Item> get(soci::session& db, const int32_t subject_id,
                        const std::string& operation) {
  const std::string resource_type =
      boost::typeindex::type_id_with_cvr<R>().pretty_name();
  return get<S>(db, subject_id, operation, resource_type);
}

void create(soci::session& db, const std::string& subject_type,
            const int32_t subject_id, const std::string& operation,
            const std::string& resource_type, const int32_t resource_id);
void create(soci::session& db, const std::string& subject_type,
            const int32_t subject_id, const std::string& operation,
            const std::string& resource_type);
template <class S>
void create(soci::session& db, const int32_t subject_id,
            const std::string& operation, const std::string& resource_type,
            const int32_t resource_id) {
  const std::string subject_type =
      boost::typeindex::type_id_with_cvr<S>().pretty_name();
  create(db, subject_type, subject_id, operation, resource_type, resource_id);
}
template <class S, class R>
void create(soci::session& db, const int32_t subject_id,
            const std::string& operation, const int32_t resource_id) {
  const std::string resource_type =
      boost::typeindex::type_id_with_cvr<R>().pretty_name();
  create<S>(db, subject_id, operation, resource_type, resource_id);
}
template <class S>
void create(soci::session& db, const int32_t subject_id,
            const std::string& operation, const std::string& resource_type) {
  const std::string subject_type =
      boost::typeindex::type_id_with_cvr<S>().pretty_name();
  create(db, subject_type, subject_id, operation, resource_type);
}
template <class S, class R>
void create(soci::session& db, const int32_t subject_id,
            const std::string& operation) {
  const std::string resource_type =
      boost::typeindex::type_id_with_cvr<R>().pretty_name();
  create<S>(db, subject_id, operation, resource_type);
}
std::vector<Item> by_subject(soci::session& db, const std::string& subject_type,
                             const int32_t subject_id);
template <class S>
std::vector<Item> by_subject(soci::session& db, const int32_t subject_id) {
  const std::string subject_type =
      boost::typeindex::type_id_with_cvr<S>().pretty_name();
  return by_subject(db, subject_type, subject_id);
}
void destroy(soci::session& db, const int32_t id);

}  // namespace permission

namespace attachment {
struct Item {
  inline void set(palm::nut::v1::AttachmentIndexResponse_Item* it) {
    it->set_id(this->id);
    it->set_bucket(this->bucket);
    it->set_name(this->name);
    it->set_title(this->title);
    it->set_size(this->size);
    it->set_content_type(this->content_type);
    it->set_status(static_cast<v1::MediaContent::Status>(this->status));
    *it->mutable_updated_at() =
        google::protobuf::util::TimeUtil::TimeTToTimestamp(
            std::mktime(&this->updated_at));
  }

  int32_t id;
  int32_t user_id;
  std::string bucket;
  std::string name;
  std::string title;
  int64_t size;
  std::string content_type;
  int32_t status;
  int32_t version;
  std::tm updated_at;
  std::tm created_at;
};
void create(soci::session& db, const int32_t user, const std::string& bucket,
            const std::string& name, const std::string& title,
            const int64_t size, const std::string& content_type);
int32_t total(soci::session& db);
int32_t total(soci::session& db, const int32_t user);
std::optional<Item> get(soci::session& db, const int32_t id);
std::vector<Item> get(soci::session& db, const int32_t offset,
                      const int32_t limit);
std::vector<Item> get(soci::session& db, const int32_t user,
                      const int32_t offset, const int32_t limit);
void destroy(soci::session& db, const int32_t id);
}  // namespace attachment

namespace leave_word {
struct Item {
  inline void set(palm::nut::v1::LeaveWordIndexResponse_Item* it) {
    it->set_id(this->id);
    it->set_lang(this->lang);
    it->set_ip(this->ip);
    {
      auto content = it->mutable_content();
      content->set_body(this->body);
      content->set_editor(static_cast<v1::MediaContent::Editor>(this->editor));
      content->set_status(static_cast<v1::MediaContent::Status>(this->status));
      if (this->published_at.has_value()) {
        *content->mutable_published_at() =
            google::protobuf::util::TimeUtil::TimeTToTimestamp(
                std::mktime(&this->published_at.value()));
      }
    }
    *it->mutable_updated_at() =
        google::protobuf::util::TimeUtil::TimeTToTimestamp(
            std::mktime(&this->updated_at));
    *it->mutable_created_at() =
        google::protobuf::util::TimeUtil::TimeTToTimestamp(
            std::mktime(&this->created_at));
  }

  int32_t id;
  std::string lang;
  std::string ip;
  std::string body;
  int32_t editor;
  int32_t status;
  std::optional<std::tm> published_at;
  int32_t version;
  std::tm updated_at;
  std::tm created_at;
};
void create(soci::session& db, const std::string& lang, const std::string& ip,
            const v1::MediaContent::Editor editor, const std::string& body);
int32_t total(soci::session& db);
void set_status(soci::session& db, const int32_t id,
                const v1::MediaContent::Status status);
std::vector<Item> get(soci::session& db, const int32_t offset,
                      const int32_t limit);
void destroy(soci::session& db, const int32_t id);
}  // namespace leave_word

std::vector<palm::nut::dao::role::Item> implicit_roles_for_user(
    soci::session& db, const int32_t id);
std::vector<palm::nut::dao::user::Item> implicit_users_for_role(
    soci::session& db, const int32_t id);
std::vector<palm::nut::dao::permission::Item> implicit_permissions_for_user(
    soci::session& db, const int32_t id);
std::vector<palm::nut::dao::permission::Item> implicit_permissions_for_role(
    soci::session& db, const int32_t id);

namespace baidu {
std::string ping_request_body(const std::string& home, const std::string& lang,
                              const std::string& title);
std::map<std::string, std::string> ping_request_body(soci::session& db,
                                                     const std::string& home);

}  // namespace baidu

}  // namespace dao
}  // namespace nut
}  // namespace palm

namespace soci {

template <>
struct type_conversion<palm::nut::dao::locale::Item> {
  typedef values base_type;

  static void from_base(const values& v, indicator i,
                        palm::nut::dao::locale::Item& o) {
    o.id = v.get<int32_t>(palm::nut::dao::ID_COLUMN);
    o.lang = v.get<std::string>(palm::nut::dao::LANG_COLUMN);
    o.code = v.get<std::string>(palm::nut::dao::CODE_COLUMN);
    o.message = v.get<std::string>(palm::nut::dao::MESSAGE_COLUMN);
    o.version = v.get<int32_t>(palm::nut::dao::VERSION_COLUMN);
    o.updated_at = v.get<std::tm>(palm::nut::dao::UPDATED_AT_COLUMN);
    o.created_at = v.get<std::tm>(palm::nut::dao::CREATED_AT_COLUMN);
  }
};

template <>
struct type_conversion<palm::nut::dao::category::Item> {
  typedef values base_type;

  static void from_base(const values& v, indicator i,
                        palm::nut::dao::category::Item& o) {
    o.id = v.get<int32_t>(palm::nut::dao::ID_COLUMN);
    o.code = v.get<std::string>(palm::nut::dao::CODE_COLUMN);
    o.left = v.get<int32_t>(palm::nut::dao::LEFT_COLUMN);
    o.right = v.get<int32_t>(palm::nut::dao::RIGHT_COLUMN);
    o.version = v.get<int32_t>(palm::nut::dao::VERSION_COLUMN);
    o.updated_at = v.get<std::tm>(palm::nut::dao::UPDATED_AT_COLUMN);
    o.created_at = v.get<std::tm>(palm::nut::dao::CREATED_AT_COLUMN);
  }
};

template <>
struct type_conversion<palm::nut::dao::tag::Item> {
  typedef values base_type;

  static void from_base(const values& v, indicator i,
                        palm::nut::dao::tag::Item& o) {
    o.id = v.get<int32_t>(palm::nut::dao::ID_COLUMN);
    o.code = v.get<std::string>(palm::nut::dao::CODE_COLUMN);
    o.priority = v.get<int32_t>(palm::nut::dao::PRIORITY_COLUMN);
    o.version = v.get<int32_t>(palm::nut::dao::VERSION_COLUMN);
    o.updated_at = v.get<std::tm>(palm::nut::dao::UPDATED_AT_COLUMN);
    o.created_at = v.get<std::tm>(palm::nut::dao::CREATED_AT_COLUMN);
  }
};

template <>
struct type_conversion<palm::nut::dao::shorter_link::Item> {
  typedef values base_type;

  static void from_base(const values& v, indicator i,
                        palm::nut::dao::shorter_link::Item& o) {
    o.id = v.get<int32_t>(palm::nut::dao::ID_COLUMN);
    o.url = v.get<std::string>(palm::nut::dao::URL_COLUMN);
    o.details = v.get<std::string>(palm::nut::dao::DETAILS_COLUMN);
    o.version = v.get<int32_t>(palm::nut::dao::VERSION_COLUMN);
    o.updated_at = v.get<std::tm>(palm::nut::dao::UPDATED_AT_COLUMN);
    o.created_at = v.get<std::tm>(palm::nut::dao::CREATED_AT_COLUMN);
  }
};

template <>
struct type_conversion<palm::nut::dao::log::Item> {
  typedef values base_type;

  static void from_base(const values& v, indicator i,
                        palm::nut::dao::log::Item& o) {
    o.id = v.get<int32_t>(palm::nut::dao::ID_COLUMN);
    o.user_id = v.get<int32_t>(palm::nut::dao::USER_ID_COLUMN);
    o.level = v.get<int32_t>(palm::nut::dao::LEVEL_COLUMN);
    o.ip = v.get<std::string>(palm::nut::dao::IP_COLUMN);
    o.resource_type = v.get<std::string>(palm::nut::dao::RESOURCE_TYPE_COLUMN);
    {
      const auto it =
          v.get<boost::optional<int32_t>>(palm::nut::dao::RESOURCE_ID_COLUMN);
      if (it.has_value()) {
        o.resource_id = it.get();
      }
    }
    o.message = v.get<std::string>(palm::nut::dao::MESSAGE_COLUMN);
    o.created_at = v.get<std::tm>(palm::nut::dao::CREATED_AT_COLUMN);
  }
};

template <>
struct type_conversion<palm::nut::dao::setting::Item> {
  typedef values base_type;

  static void from_base(const values& v, indicator i,
                        palm::nut::dao::setting::Item& o) {
    o.id = v.get<int32_t>(palm::nut::dao::ID_COLUMN);
    o.key = v.get<std::string>(palm::nut::dao::KEY_COLUMN);
    {
      const auto it =
          v.get<boost::optional<int32_t>>(palm::nut::dao::USER_ID_COLUMN);
      if (it.has_value()) {
        o.user_id = it.get();
      }
    }
    o.value = v.get<std::string>(palm::nut::dao::VALUE_COLUMN);
    {
      const auto it =
          v.get<boost::optional<std::string>>(palm::nut::dao::SALT_COLUMN);
      if (it.has_value()) {
        o.salt = it.get();
      }
    }
    o.version = v.get<int32_t>(palm::nut::dao::VERSION_COLUMN);
    o.updated_at = v.get<std::tm>(palm::nut::dao::UPDATED_AT_COLUMN);
    o.created_at = v.get<std::tm>(palm::nut::dao::CREATED_AT_COLUMN);
  }
};

template <>
struct type_conversion<palm::nut::dao::user::Item> {
  typedef values base_type;

  static void from_base(const values& v, indicator i,
                        palm::nut::dao::user::Item& o) {
    o.id = v.get<int32_t>(palm::nut::dao::ID_COLUMN);
    o.real_name = v.get<std::string>(palm::nut::dao::REAL_NAME_COLUMN);
    o.nickname = v.get<std::string>(palm::nut::dao::NICKNAME_COLUMN);
    o.email = v.get<std::string>(palm::nut::dao::EMAIL_COLUMN);
    {
      const auto it =
          v.get<boost::optional<std::string>>(palm::nut::dao::PASSWORD_COLUMN);
      if (it.has_value()) {
        o.password = it.get();
      }
    }
    o.salt = v.get<std::string>(palm::nut::dao::SALT_COLUMN);
    o.uid = v.get<std::string>(palm::nut::dao::UID_COLUMN);
    o.provider_type = v.get<int32_t>(palm::nut::dao::PROVIDER_TYPE_COLUMN);
    o.provider_id = v.get<std::string>(palm::nut::dao::PROVIDER_ID_COLUMN);
    {
      const auto it = v.get<boost::optional<std::string>>(
          palm::nut::dao::ACCESS_TOKEN_COLUMN);
      if (it.has_value()) {
        o.access_token = it.get();
      }
    }
    o.avatar = v.get<std::string>(palm::nut::dao::AVATAR_COLUMN);
    o.lang = v.get<std::string>(palm::nut::dao::LANG_COLUMN);
    o.time_zone = v.get<std::string>(palm::nut::dao::TIME_ZONE_COLUMN);
    o.sign_in_count = v.get<int32_t>(palm::nut::dao::SIGN_IN_COUNT_COLUMN);
    {
      const auto it = v.get<boost::optional<std::tm>>(
          palm::nut::dao::CURRENT_SIGN_IN_AT_COLUMN);
      if (it.has_value()) {
        o.current_sign_in_at = it.get();
      }
    }
    {
      const auto it = v.get<boost::optional<std::string>>(
          palm::nut::dao::CURRENT_SIGN_IN_IP_COLUMN);
      if (it.has_value()) {
        o.current_sign_in_ip = it.get();
      }
    }
    {
      const auto it = v.get<boost::optional<std::tm>>(
          palm::nut::dao::LAST_SIGN_IN_AT_COLUMN);
      if (it.has_value()) {
        o.last_sign_in_at = it.get();
      }
    }
    {
      const auto it = v.get<boost::optional<std::string>>(
          palm::nut::dao::LAST_SIGN_IN_IP_COLUMN);
      if (it.has_value()) {
        o.last_sign_in_ip = it.get();
      }
    }
    {
      const auto it =
          v.get<boost::optional<std::tm>>(palm::nut::dao::CONFIRMED_AT_COLUMN);
      if (it.has_value()) {
        o.confirmed_at = it.get();
      }
    }
    {
      const auto it =
          v.get<boost::optional<std::tm>>(palm::nut::dao::LOCKED_AT_COLUMN);
      if (it.has_value()) {
        o.locked_at = it.get();
      }
    }
    {
      const auto it =
          v.get<boost::optional<std::tm>>(palm::nut::dao::DELETED_AT_COLUMN);
      if (it.has_value()) {
        o.deleted_at = it.get();
      }
    }

    o.version = v.get<int32_t>(palm::nut::dao::VERSION_COLUMN);
    o.updated_at = v.get<std::tm>(palm::nut::dao::UPDATED_AT_COLUMN);
    o.created_at = v.get<std::tm>(palm::nut::dao::CREATED_AT_COLUMN);
  }
};

template <>
struct type_conversion<palm::nut::dao::role::Item> {
  typedef values base_type;

  static void from_base(const values& v, indicator i,
                        palm::nut::dao::role::Item& o) {
    o.id = v.get<int32_t>(palm::nut::dao::ID_COLUMN);
    o.code = v.get<std::string>(palm::nut::dao::CODE_COLUMN);
    o.left = v.get<int32_t>(palm::nut::dao::LEFT_COLUMN);
    o.right = v.get<int32_t>(palm::nut::dao::RIGHT_COLUMN);
    o.version = v.get<int32_t>(palm::nut::dao::VERSION_COLUMN);
    o.updated_at = v.get<std::tm>(palm::nut::dao::UPDATED_AT_COLUMN);
    o.created_at = v.get<std::tm>(palm::nut::dao::CREATED_AT_COLUMN);
  }
};

template <>
struct type_conversion<palm::nut::dao::permission::Item> {
  typedef values base_type;

  static void from_base(const values& v, indicator i,
                        palm::nut::dao::permission::Item& o) {
    o.id = v.get<int32_t>(palm::nut::dao::ID_COLUMN);
    o.subject_type = v.get<std::string>(palm::nut::dao::SUBJECT_TYPE_COLUMN);
    o.subject_id = v.get<int32_t>(palm::nut::dao::SUBJECT_ID_COLUMN);
    o.operation = v.get<std::string>(palm::nut::dao::OPERATION_COLUMN);
    o.resource_type = v.get<std::string>(palm::nut::dao::RESOURCE_TYPE_COLUMN);
    {
      const auto it =
          v.get<boost::optional<int32_t>>(palm::nut::dao::RESOURCE_ID_COLUMN);
      if (it.has_value()) {
        o.resource_id = it.get();
      }
    }
    o.created_at = v.get<std::tm>(palm::nut::dao::CREATED_AT_COLUMN);
  }
};

template <>
struct type_conversion<palm::nut::dao::role::user::Item> {
  typedef values base_type;

  static void from_base(const values& v, indicator i,
                        palm::nut::dao::role::user::Item& o) {
    o.id = v.get<int32_t>(palm::nut::dao::ID_COLUMN);
    o.role_id = v.get<int32_t>(palm::nut::dao::ROLE_ID_COLUMN);
    o.user_id = v.get<int32_t>(palm::nut::dao::USER_ID_COLUMN);
    o.not_before = v.get<std::tm>(palm::nut::dao::NOT_BEFORE_COLUMN);
    o.expired_at = v.get<std::tm>(palm::nut::dao::EXPIRED_AT_COLUMN);
    o.version = v.get<int32_t>(palm::nut::dao::VERSION_COLUMN);
    o.updated_at = v.get<std::tm>(palm::nut::dao::UPDATED_AT_COLUMN);
    o.created_at = v.get<std::tm>(palm::nut::dao::CREATED_AT_COLUMN);
  }
};

template <>
struct type_conversion<palm::nut::dao::attachment::Item> {
  typedef values base_type;

  static void from_base(const values& v, indicator i,
                        palm::nut::dao::attachment::Item& o) {
    o.id = v.get<int32_t>(palm::nut::dao::ID_COLUMN);
    o.user_id = v.get<int32_t>(palm::nut::dao::USER_ID_COLUMN);
    o.bucket = v.get<std::string>(palm::nut::dao::BUCKET_COLUMN);
    o.name = v.get<std::string>(palm::nut::dao::NAME_COLUMN);
    o.title = v.get<std::string>(palm::nut::dao::TITLE_COLUMN);
    o.size = v.get<int64_t>(palm::nut::dao::SIZE_COLUMN);
    o.content_type = v.get<std::string>(palm::nut::dao::CONTENT_TYPE_COLUMN);
    o.status = v.get<int32_t>(palm::nut::dao::STATUS_COLUMN);
    o.version = v.get<int32_t>(palm::nut::dao::VERSION_COLUMN);
    o.updated_at = v.get<std::tm>(palm::nut::dao::UPDATED_AT_COLUMN);
    o.created_at = v.get<std::tm>(palm::nut::dao::CREATED_AT_COLUMN);
  }
};

template <>
struct type_conversion<palm::nut::dao::leave_word::Item> {
  typedef values base_type;

  static void from_base(const values& v, indicator i,
                        palm::nut::dao::leave_word::Item& o) {
    o.id = v.get<int32_t>(palm::nut::dao::ID_COLUMN);
    o.lang = v.get<std::string>(palm::nut::dao::LANG_COLUMN);
    o.ip = v.get<std::string>(palm::nut::dao::IP_COLUMN);
    o.body = v.get<std::string>(palm::nut::dao::BODY_COLUMN);
    o.editor = v.get<int32_t>(palm::nut::dao::EDITOR_COLUMN);
    o.status = v.get<int32_t>(palm::nut::dao::STATUS_COLUMN);
    {
      const auto it =
          v.get<boost::optional<std::tm>>(palm::nut::dao::PUBLISHED_AT_COLUMN);
      if (it.has_value()) {
        o.published_at = it.get();
      }
    }
    o.version = v.get<int32_t>(palm::nut::dao::VERSION_COLUMN);
    o.updated_at = v.get<std::tm>(palm::nut::dao::UPDATED_AT_COLUMN);
    o.created_at = v.get<std::tm>(palm::nut::dao::CREATED_AT_COLUMN);
  }
};

}  // namespace soci
