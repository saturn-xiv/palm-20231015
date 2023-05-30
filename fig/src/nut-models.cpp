#include "palm/nut-models.hpp"
#include "palm/nut-sql.hpp"

// #include <boost/property_tree/xml_parser.hpp>

// std::optional<palm::nut::dao::locale::Item> palm::nut::dao::locale::get(
//     soci::session& db, const int32_t id) {
//   boost::optional<palm::nut::dao::locale::Item> it;
//   soci::indicator ind;
//   db << BY_ID, soci::use(id, palm::nut::dao::ID_COLUMN), soci::into(it, ind);
//   if (it.has_value()) {
//     return it.get();
//   }
//   return std::nullopt;
// }

// std::optional<palm::nut::dao::locale::Item> palm::nut::dao::locale::get(
//     soci::session& db, const std::string& lang, const std::string& code) {
//   boost::optional<palm::nut::dao::locale::Item> it;
//   db << BY_LANG_AND_CODE, soci::use(lang, palm::nut::dao::LANG_COLUMN),
//       soci::use(code, palm::nut::dao::CODE_COLUMN), soci::into(it);
//   if (it.has_value()) {
//     return it.get();
//   }
//   return std::nullopt;
// }

// std::vector<palm::nut::dao::locale::Item> palm::nut::dao::locale::get(
//     soci::session& db, const int32_t offset, const int32_t limit) {
//   soci::rowset<palm::nut::dao::locale::Item> rs =
//       (db.prepare << ALL, soci::use(offset, palm::nut::dao::OFFSET_COLUMN),
//        soci::use(limit, palm::nut::dao::LIMIT_COLUMN));
//   std::vector<palm::nut::dao::locale::Item> items(rs.begin(), rs.end());
//   return items;
// }

// std::vector<palm::nut::dao::locale::Item> palm::nut::dao::locale::get(
//     soci::session& db, const std::string& lang) {
//   soci::rowset<palm::nut::dao::locale::Item> rs =
//       (db.prepare << BY_LANG, soci::use(lang, palm::nut::dao::LANG_COLUMN));

//   std::vector<palm::nut::dao::locale::Item> items(rs.begin(), rs.end());
//   return items;
// }

// void palm::nut::dao::locale::create(soci::session& db, const std::string&
// lang,
//                                     const std::string& code,
//                                     const std::string& message) {
//   db << CREATE, soci::use(lang, palm::nut::dao::LANG_COLUMN),
//       soci::use(code, palm::nut::dao::CODE_COLUMN),
//       soci::use(message, palm::nut::dao::MESSAGE_COLUMN);
// }
// void palm::nut::dao::locale::update(soci::session& db, const int32_t id,
//                                     const std::string& message) {
//   db << UPDATE, soci::use(id, palm::nut::dao::ID_COLUMN),
//       soci::use(message, palm::nut::dao::MESSAGE_COLUMN);
// }

// void palm::nut::dao::locale::destroy(soci::session& db, const int32_t id) {
//   db << DELETE_BY_ID, soci::use(id, palm::nut::dao::ID_COLUMN);
// }

// int32_t palm::nut::dao::locale::total(soci::session& db) {
//   int32_t it;
//   db << TOTAL, soci::into(it);
//   return it;
// }

// std::vector<std::string> palm::nut::dao::locale::languages(soci::session& db)
// {
//   std::vector<std::string> items;
//   soci::rowset<std::string> rs = (db.prepare << LANGUAGES);
//   for (auto it = rs.begin(); it != rs.end(); ++it) {
//     const std::string& row = *it;
//     items.push_back(row);
//   }
//   return items;
// }

// void palm::nut::dao::category::append(soci::session& db,
//                                       const std::string& code,
//                                       const int32_t left) {
//   const auto it = palm::nut::dao::category::get(db, left).value();
//   db << CREATE_L, soci::use(it.right, palm::nut::dao::LEFT_COLUMN);
//   db << CREATE_R, soci::use(it.right, palm::nut::dao::RIGHT_COLUMN);
//   db << CREATE, soci::use(it.right + 1, palm::nut::dao::LEFT_COLUMN),
//       soci::use(it.right + 2, palm::nut::dao::RIGHT_COLUMN);
// }
// void palm::nut::dao::category::create(soci::session& db,
//                                       const std::string& code,
//                                       const int32_t parent) {
//   const auto it = palm::nut::dao::category::get(db, parent).value();
//   db << CREATE_L, soci::use(it.left, palm::nut::dao::LEFT_COLUMN);
//   db << CREATE_R, soci::use(it.left, palm::nut::dao::RIGHT_COLUMN);
//   db << CREATE, soci::use(it.left + 1, palm::nut::dao::LEFT_COLUMN),
//       soci::use(it.left + 2, palm::nut::dao::RIGHT_COLUMN);
// }

// void palm::nut::dao::category::update(soci::session& db, const int32_t id,
//                                       const std::string& code) {
//   const auto it = palm::nut::dao::category::get(db, id).value();
//   db << UPDATE, soci::use(it.id, palm::nut::dao::ID_COLUMN),
//       soci::use(code, palm::nut::dao::CODE_COLUMN);
// }
// void palm::nut::dao::category::destroy(soci::session& db, const int32_t id) {
//   const auto it = palm::nut::dao::category::get(db, id).value();

//   db << DESTROY, soci::use(it.left, palm::nut::dao::LEFT_COLUMN),
//       soci::use(it.right, palm::nut::dao::RIGHT_COLUMN);

//   const auto width = it.right - it.left + 1;
//   db << DESTROY_L, soci::use(width, palm::nut::dao::WIDTH_COLUMN),
//       soci::use(it.right, palm::nut::dao::RIGHT_COLUMN);
//   db << DESTROY_R, soci::use(width, palm::nut::dao::WIDTH_COLUMN),
//       soci::use(it.right, palm::nut::dao::RIGHT_COLUMN);
// }

// std::vector<palm::nut::dao::category::Item> palm::nut::dao::category::get(
//     soci::session& db) {
//   soci::rowset<palm::nut::dao::category::Item> rs = (db.prepare << ALL);
//   std::vector<palm::nut::dao::category::Item> items(rs.begin(), rs.end());
//   return items;
// }
// std::vector<palm::nut::dao::category::Item>
// palm::nut::dao::category::offsprings(soci::session& db, const int32_t id) {
//   const auto it = palm::nut::dao::category::get(db, id).value();
//   soci::rowset<palm::nut::dao::category::Item> rs =
//       (db.prepare << OFFSPRINGS,
//        soci::use(it.left, palm::nut::dao::LEFT_COLUMN),
//        soci::use(it.right, palm::nut::dao::RIGHT_COLUMN));
//   std::vector<palm::nut::dao::category::Item> items(rs.begin(), rs.end());
//   return items;
// }

// std::vector<palm::nut::dao::category::Item>
// palm::nut::dao::category::parents(
//     soci::session& db, const int32_t id) {
//   const auto it = palm::nut::dao::category::get(db, id).value();
//   soci::rowset<palm::nut::dao::category::Item> rs =
//       (db.prepare << PARENTS, soci::use(it.left,
//       palm::nut::dao::LEFT_COLUMN),
//        soci::use(it.right, palm::nut::dao::RIGHT_COLUMN));
//   std::vector<palm::nut::dao::category::Item> items(rs.begin(), rs.end());
//   return items;
// }
// std::optional<palm::nut::dao::category::Item> palm::nut::dao::category::get(
//     soci::session& db, const int32_t id) {
//   boost::optional<palm::nut::dao::category::Item> it;
//   db << BY_ID, soci::use(id, palm::nut::dao::ID_COLUMN), soci::into(it);
//   if (it.has_value()) {
//     return it.get();
//   }
//   return std::nullopt;
// }

// std::optional<palm::nut::dao::category::Item> palm::nut::dao::category::get(
//     soci::session& db, const std::string& code) {
//   boost::optional<palm::nut::dao::category::Item> it;
//   db << BY_CODE, soci::use(code, palm::nut::dao::CODE_COLUMN),
//   soci::into(it); if (it.has_value()) {
//     return it.get();
//   }
//   return std::nullopt;
// }

// void palm::nut::dao::tag::create(soci::session& db, const std::string& code,
//                                  const int32_t priority) {
//   db << CREATE, soci::use(code, palm::nut::dao::CODE_COLUMN),
//       soci::use(priority, palm::nut::dao::PRIORITY_COLUMN);
// }
// void palm::nut::dao::tag::update(soci::session& db, const int32_t id,
//                                  const std::string& code,
//                                  const int32_t priority) {
//   db << UPDATE, soci::use(id, palm::nut::dao::ID_COLUMN),
//       soci::use(code, palm::nut::dao::CODE_COLUMN),
//       soci::use(priority, palm::nut::dao::PRIORITY_COLUMN);
// }
// void palm::nut::dao::tag::destroy(soci::session& db, const int32_t id) {
//   db << DESTROY, soci::use(id, palm::nut::dao::ID_COLUMN);
// }
// std::vector<palm::nut::dao::tag::Item> palm::nut::dao::tag::get(
//     soci::session& db) {
//   soci::rowset<palm::nut::dao::tag::Item> rs = (db.prepare << ALL);
//   std::vector<palm::nut::dao::tag::Item> items(rs.begin(), rs.end());
//   return items;
// }
// std::optional<palm::nut::dao::tag::Item> palm::nut::dao::tag::get(
//     soci::session& db, const int32_t id) {
//   boost::optional<palm::nut::dao::tag::Item> it;
//   db << BY_ID, soci::use(id, palm::nut::dao::ID_COLUMN), soci::into(it);
//   if (it.has_value()) {
//     return it.get();
//   }
//   return std::nullopt;
// }
// std::optional<palm::nut::dao::tag::Item> palm::nut::dao::tag::get(
//     soci::session& db, const std::string& code) {
//   boost::optional<palm::nut::dao::tag::Item> it;
//   db << BY_CODE, soci::use(code, palm::nut::dao::CODE_COLUMN),
//   soci::into(it); if (it.has_value()) {
//     return it.get();
//   }
//   return std::nullopt;
// }

// void palm::nut::dao::shorter_link::create(soci::session& db,
//                                           const std::string& url,
//                                           const std::string& details) {
//   db << CREATE, soci::use(url, palm::nut::dao::URL_COLUMN),
//       soci::use(details, palm::nut::dao::DETAILS_COLUMN);
// }
// void palm::nut::dao::shorter_link::update(soci::session& db, const int32_t
// id,
//                                           const std::string& url,
//                                           const std::string& details) {
//   db << UPDATE, soci::use(id, palm::nut::dao::ID_COLUMN),
//       soci::use(url, palm::nut::dao::URL_COLUMN),
//       soci::use(details, palm::nut::dao::DETAILS_COLUMN);
// }
// void palm::nut::dao::shorter_link::destroy(soci::session& db,
//                                            const int32_t id) {
//   db << DESTROY, soci::use(id, palm::nut::dao::ID_COLUMN);
// }
// std::vector<palm::nut::dao::shorter_link::Item>
// palm::nut::dao::shorter_link::get(soci::session& db, const int32_t offset,
//                                   const int32_t limit) {
//   soci::rowset<palm::nut::dao::shorter_link::Item> rs =
//       (db.prepare << ALL, soci::use(offset, palm::nut::dao::OFFSET_COLUMN),
//        soci::use(limit, palm::nut::dao::LIMIT_COLUMN));
//   std::vector<palm::nut::dao::shorter_link::Item> items(rs.begin(),
//   rs.end()); return items;
// }
// std::optional<palm::nut::dao::shorter_link::Item>
// palm::nut::dao::shorter_link::get(soci::session& db, const int32_t id) {
//   boost::optional<palm::nut::dao::shorter_link::Item> it;
//   db << BY_ID, soci::use(id, palm::nut::dao::ID_COLUMN), soci::into(it);
//   if (it.has_value()) {
//     return it.get();
//   }
//   return std::nullopt;
// }
// std::optional<palm::nut::dao::shorter_link::Item>
// palm::nut::dao::shorter_link::get(soci::session& db, const std::string& url)
// {
//   boost::optional<palm::nut::dao::shorter_link::Item> it;
//   db << BY_URL, soci::use(url, palm::nut::dao::URL_COLUMN), soci::into(it);
//   if (it.has_value()) {
//     return it.get();
//   }
//   return std::nullopt;
// }
// int32_t palm::nut::dao::shorter_link::total(soci::session& db) {
//   int32_t it;
//   db << TOTAL, soci::into(it);
//   return it;
// }

// void palm::nut::dao::setting::set(soci::session& db, const std::string& key,
//                                   const boost::optional<int32_t> user,
//                                   const std::string& value,
//                                   const boost::optional<std::string> salt) {
//   const auto it = user.has_value() ? get(db, key, user.get()) : get(db, key);
//   if (it) {
//     db << UPDATE, soci::use(it->id, palm::nut::dao::ID_COLUMN),
//         soci::use(value, palm::nut::dao::VALUE_COLUMN),
//         soci::use(salt, palm::nut::dao::SALT_COLUMN);
//   } else {
//     db << CREATE, soci::use(key, palm::nut::dao::KEY_COLUMN),
//         soci::use(user, palm::nut::dao::USER_ID_COLUMN),
//         soci::use(value, palm::nut::dao::VALUE_COLUMN),
//         soci::use(salt, palm::nut::dao::SALT_COLUMN);
//   }
// }

// std::optional<palm::nut::dao::setting::Item> palm::nut::dao::setting::get(
//     soci::session& db, const std::string& key, const int32_t user) {
//   boost::optional<palm::nut::dao::setting::Item> it;
//   db << BY_KEY_AND_USER, soci::use(key, palm::nut::dao::KEY_COLUMN),
//       soci::use(user, palm::nut::dao::USER_ID_COLUMN), soci::into(it);
//   if (it.has_value()) {
//     return it.get();
//   }
//   return std::nullopt;
// }
// std::optional<palm::nut::dao::setting::Item> palm::nut::dao::setting::get(
//     soci::session& db, const std::string& key) {
//   boost::optional<palm::nut::dao::setting::Item> it;
//   db << BY_KEY, soci::use(key, palm::nut::dao::KEY_COLUMN), soci::into(it);
//   if (it.has_value()) {
//     return it.get();
//   }
//   return std::nullopt;
// }

// void palm::nut::dao::log::add(soci::session& db, const int32_t user,
//                               const int32_t level, const std::string& ip,
//                               const std::string& message,
//                               const std::string& resource_type,
//                               const boost::optional<int32_t> resource_id) {
//   db << CREATE, soci::use(user, palm::nut::dao::USER_ID_COLUMN),
//       soci::use(level, palm::nut::dao::LEVEL_COLUMN),
//       soci::use(ip, palm::nut::dao::IP_COLUMN),
//       soci::use(message, palm::nut::dao::MESSAGE_COLUMN),
//       soci::use(resource_type, palm::nut::dao::RESOURCE_TYPE_COLUMN),
//       soci::use(resource_id, palm::nut::dao::RESOURCE_ID_COLUMN);
// }
// int32_t palm::nut::dao::log::total(soci::session& db, const int32_t user) {
//   int32_t it;
//   db << TOTAL, soci::into(it), soci::use(user,
//   palm::nut::dao::USER_ID_COLUMN); return it;
// }
// std::vector<palm::nut::dao::log::Item> palm::nut::dao::log::get(
//     soci::session& db, const int32_t user, const int32_t offset,
//     const int32_t limit) {
//   soci::rowset<palm::nut::dao::log::Item> rs =
//       (db.prepare << BY_USER, soci::use(user,
//       palm::nut::dao::USER_ID_COLUMN),
//        soci::use(offset, palm::nut::dao::OFFSET_COLUMN),
//        soci::use(limit, palm::nut::dao::LIMIT_COLUMN));
//   std::vector<palm::nut::dao::log::Item> items(rs.begin(), rs.end());
//   return items;
// }

// std::optional<palm::nut::dao::user::Item> palm::nut::dao::user::by_id(
//     soci::session& db, const int32_t id) {
//   boost::optional<palm::nut::dao::user::Item> it;
//   db << BY_ID, soci::use(id, palm::nut::dao::ID_COLUMN), soci::into(it);
//   if (it.has_value()) {
//     return it.get();
//   }
//   return std::nullopt;
// }
// std::optional<palm::nut::dao::user::Item> palm::nut::dao::user::by_email(
//     soci::session& db, const std::string& email) {
//   boost::optional<palm::nut::dao::user::Item> it;
//   db << BY_EMAIL, soci::use(email, palm::nut::dao::EMAIL_COLUMN),
//       soci::into(it);
//   if (it.has_value()) {
//     return it.get();
//   }
//   return std::nullopt;
// }
// std::optional<palm::nut::dao::user::Item> palm::nut::dao::user::by_uid(
//     soci::session& db, const std::string& uid) {
//   boost::optional<palm::nut::dao::user::Item> it;
//   db << BY_UID, soci::use(uid, palm::nut::dao::UID_COLUMN), soci::into(it);
//   if (it.has_value()) {
//     return it.get();
//   }
//   return std::nullopt;
// }
// std::optional<palm::nut::dao::user::Item> palm::nut::dao::user::by_nickname(
//     soci::session& db, const std::string nickname) {
//   boost::optional<palm::nut::dao::user::Item> it;
//   db << BY_NICKNAME, soci::use(nickname, palm::nut::dao::NICKNAME_COLUMN),
//       soci::into(it);
//   if (it.has_value()) {
//     return it.get();
//   }
//   return std::nullopt;
// }
// std::optional<palm::nut::dao::user::Item> palm::nut::dao::user::by_provider(
//     soci::session& db, const v1::UserProvider::Type provider_type,
//     const std::string& provider_id) {
//   const int32_t p_type = static_cast<int32_t>(provider_type);
//   boost::optional<palm::nut::dao::user::Item> it;
//   db << BY_PROVIDER, soci::use(p_type, palm::nut::dao::PROVIDER_TYPE_COLUMN),
//       soci::use(provider_id, palm::nut::dao::PROVIDER_ID_COLUMN),
//       soci::into(it);
//   if (it.has_value()) {
//     return it.get();
//   }
//   return std::nullopt;
// }
// int32_t palm::nut::dao::user::total(soci::session& db) {
//   int32_t it;
//   db << TOTAL, soci::into(it);
//   return it;
// }
// std::vector<palm::nut::dao::user::Item> palm::nut::dao::user::all(
//     soci::session& db, const int32_t offset, const int32_t limit) {
//   soci::rowset<palm::nut::dao::user::Item> rs =
//       (db.prepare << ALL, soci::use(offset, palm::nut::dao::OFFSET_COLUMN),
//        soci::use(limit, palm::nut::dao::LIMIT_COLUMN));
//   std::vector<palm::nut::dao::user::Item> items(rs.begin(), rs.end());
//   return items;
// }
// void palm::nut::dao::user::create(soci::session& db,
//                                   const std::string& real_name,
//                                   const std::string& nickname,
//                                   const std::string& email,
//                                   const std::string& password,
//                                   const std::string& lang,
//                                   const std::string& time_zone) {
//   const auto salt = palm::base64::to(palm::random::bytes(32));
//   const auto uid = palm::uuid();
//   const auto passwd = palm::hashing::sum(password);
//   const auto avatar = palm::gravatar(email);
//   const boost::optional<std::string> access_token = boost::none;
//   db << CREATE, soci::use(real_name, palm::nut::dao::REAL_NAME_COLUMN),
//       soci::use(nickname, palm::nut::dao::NICKNAME_COLUMN),
//       soci::use(email, palm::nut::dao::EMAIL_COLUMN),
//       soci::use(passwd, palm::nut::dao::PASSWORD_COLUMN),
//       soci::use(salt, palm::nut::dao::SALT_COLUMN),
//       soci::use(uid, palm::nut::dao::UID_COLUMN),
//       soci::use(static_cast<int32_t>(palm::nut::v1::UserProvider_Type_EMAIL),
//                 palm::nut::dao::PROVIDER_TYPE_COLUMN),
//       soci::use(email, palm::nut::dao::PROVIDER_ID_COLUMN),
//       soci::use(access_token, palm::nut::dao::ACCESS_TOKEN_COLUMN),
//       soci::use(avatar, palm::nut::dao::AVATAR_COLUMN),
//       soci::use(lang, palm::nut::dao::LANG_COLUMN),
//       soci::use(time_zone, palm::nut::dao::TIME_ZONE_COLUMN);
// }
// void palm::nut::dao::user::set_profile(soci::session& db, const int32_t id,
//                                        const std::string& real_name,
//                                        const std::string& avatar,
//                                        const std::string& lang,
//                                        const std::string& time_zone) {
//   db << SET_PROFILE, soci::use(id, palm::nut::dao::ID_COLUMN),
//       soci::use(real_name, palm::nut::dao::REAL_NAME_COLUMN),
//       soci::use(avatar, palm::nut::dao::AVATAR_COLUMN),
//       soci::use(lang, palm::nut::dao::LANG_COLUMN),
//       soci::use(time_zone, palm::nut::dao::TIME_ZONE_COLUMN);
// }
// void palm::nut::dao::user::sign_in(soci::session& db, const int32_t id,
//                                    const std::string& client_ip) {
//   db << SIGN_IN, soci::use(id, palm::nut::dao::ID_COLUMN),
//       soci::use(client_ip, palm::nut::dao::CURRENT_SIGN_IN_IP_COLUMN);
// }
// void palm::nut::dao::user::confirm(soci::session& db, const int32_t id) {
//   db << CONFIRM, soci::use(id, palm::nut::dao::ID_COLUMN);
// }
// void palm::nut::dao::user::lock(soci::session& db, const int32_t id) {
//   db << LOCK, soci::use(id, palm::nut::dao::ID_COLUMN);
// }
// void palm::nut::dao::user::unlock(soci::session& db, const int32_t id) {
//   db << UNLOCK, soci::use(id, palm::nut::dao::ID_COLUMN);
// }
// void palm::nut::dao::user::disable(soci::session& db, const int32_t id) {
//   db << DISABLE, soci::use(id, palm::nut::dao::ID_COLUMN);
// }
// void palm::nut::dao::user::enable(soci::session& db, const int32_t id) {
//   db << ENABLE, soci::use(id, palm::nut::dao::ID_COLUMN);
// }
// void palm::nut::dao::user::set_password(soci::session& db, const int32_t id,
//                                         const std::string& password) {
//   const auto passwd = palm::hashing::sum(password);
//   db << SET_PASSWORD, soci::use(id, palm::nut::dao::ID_COLUMN),
//       soci::use(passwd, palm::nut::dao::PASSWORD_COLUMN);
// }

// void palm::nut::dao::role::append(soci::session& db, const std::string& code,
//                                   const int32_t left) {
//   const auto it = palm::nut::dao::role::get(db, left).value();
//   db << CREATE_L, soci::use(it.right, palm::nut::dao::LEFT_COLUMN);
//   db << CREATE_R, soci::use(it.right, palm::nut::dao::RIGHT_COLUMN);
//   db << CREATE, soci::use(it.right + 1, palm::nut::dao::LEFT_COLUMN),
//       soci::use(it.right + 2, palm::nut::dao::RIGHT_COLUMN);
// }
// void palm::nut::dao::role::create(soci::session& db, const std::string& code,
//                                   const int32_t parent) {
//   const auto it = palm::nut::dao::role::get(db, parent).value();
//   db << CREATE_L, soci::use(it.left, palm::nut::dao::LEFT_COLUMN);
//   db << CREATE_R, soci::use(it.left, palm::nut::dao::RIGHT_COLUMN);
//   db << CREATE, soci::use(it.left + 1, palm::nut::dao::LEFT_COLUMN),
//       soci::use(it.left + 2, palm::nut::dao::RIGHT_COLUMN);
// }

// void palm::nut::dao::role::update(soci::session& db, const int32_t id,
//                                   const std::string& code) {
//   const auto it = palm::nut::dao::role::get(db, id).value();
//   db << UPDATE, soci::use(it.id, palm::nut::dao::ID_COLUMN),
//       soci::use(code, palm::nut::dao::CODE_COLUMN);
// }
// void palm::nut::dao::role::destroy(soci::session& db, const int32_t id) {
//   const auto it = palm::nut::dao::role::get(db, id).value();

//   db << DESTROY, soci::use(it.left, palm::nut::dao::LEFT_COLUMN),
//       soci::use(it.right, palm::nut::dao::RIGHT_COLUMN);

//   const auto width = it.right - it.left + 1;
//   db << DESTROY_L, soci::use(width, palm::nut::dao::WIDTH_COLUMN),
//       soci::use(it.right, palm::nut::dao::RIGHT_COLUMN);
//   db << DESTROY_R, soci::use(width, palm::nut::dao::WIDTH_COLUMN),
//       soci::use(it.right, palm::nut::dao::RIGHT_COLUMN);
// }

// std::vector<palm::nut::dao::role::Item> palm::nut::dao::role::get(
//     soci::session& db) {
//   soci::rowset<palm::nut::dao::role::Item> rs = (db.prepare << ALL);
//   std::vector<palm::nut::dao::role::Item> items(rs.begin(), rs.end());
//   return items;
// }
// std::vector<palm::nut::dao::role::Item> palm::nut::dao::role::offsprings(
//     soci::session& db, const int32_t id) {
//   const auto it = palm::nut::dao::role::get(db, id).value();
//   soci::rowset<palm::nut::dao::role::Item> rs =
//       (db.prepare << OFFSPRINGS,
//        soci::use(it.left, palm::nut::dao::LEFT_COLUMN),
//        soci::use(it.right, palm::nut::dao::RIGHT_COLUMN));
//   std::vector<palm::nut::dao::role::Item> items(rs.begin(), rs.end());
//   return items;
// }

// std::vector<palm::nut::dao::role::Item> palm::nut::dao::role::parents(
//     soci::session& db, const int32_t id) {
//   const auto it = palm::nut::dao::role::get(db, id).value();
//   soci::rowset<palm::nut::dao::role::Item> rs =
//       (db.prepare << PARENTS, soci::use(it.left,
//       palm::nut::dao::LEFT_COLUMN),
//        soci::use(it.right, palm::nut::dao::RIGHT_COLUMN));
//   std::vector<palm::nut::dao::role::Item> items(rs.begin(), rs.end());
//   return items;
// }
// std::optional<palm::nut::dao::role::Item> palm::nut::dao::role::get(
//     soci::session& db, const int32_t id) {
//   boost::optional<palm::nut::dao::role::Item> it;
//   db << BY_ID, soci::use(id, palm::nut::dao::ID_COLUMN), soci::into(it);
//   if (it.has_value()) {
//     return it.get();
//   }
//   return std::nullopt;
// }

// std::optional<palm::nut::dao::role::Item> palm::nut::dao::role::get(
//     soci::session& db, const std::string& code) {
//   boost::optional<palm::nut::dao::role::Item> it;
//   db << BY_CODE, soci::use(code, palm::nut::dao::CODE_COLUMN),
//   soci::into(it); if (it.has_value()) {
//     return it.get();
//   }
//   return std::nullopt;
// }

// std::optional<palm::nut::dao::role::user::Item>
// palm::nut::dao::role::user::get(
//     soci::session& db, const int32_t role, const int32_t user) {
//   boost::optional<palm::nut::dao::role::user::Item> it;
//   db << GET, soci::use(role, palm::nut::dao::ROLE_ID_COLUMN),
//       soci::use(user, palm::nut::dao::USER_ID_COLUMN), soci::into(it);
//   if (it.has_value()) {
//     return it.get();
//   }
//   return std::nullopt;
// }
// std::vector<palm::nut::dao::role::user::Item>
// palm::nut::dao::role::user::by_role(soci::session& db, const int32_t role) {
//   soci::rowset<palm::nut::dao::role::user::Item> rs =
//       (db.prepare << BY_ROLE, soci::use(role,
//       palm::nut::dao::ROLE_ID_COLUMN));
//   std::vector<palm::nut::dao::role::user::Item> items(rs.begin(), rs.end());
//   return items;
// }
// std::vector<palm::nut::dao::role::user::Item>
// palm::nut::dao::role::user::by_user(soci::session& db, const int32_t user) {
//   soci::rowset<palm::nut::dao::role::user::Item> rs =
//       (db.prepare << BY_USER, soci::use(user,
//       palm::nut::dao::USER_ID_COLUMN));
//   std::vector<palm::nut::dao::role::user::Item> items(rs.begin(), rs.end());
//   return items;
// }
// void palm::nut::dao::role::user::associate(soci::session& db,
//                                            const int32_t role,
//                                            const int32_t user,
//                                            const std::tm& not_before,
//                                            const std::tm& expired_at) {
//   db << CREATE, soci::use(role, palm::nut::dao::ROLE_ID_COLUMN),
//       soci::use(user, palm::nut::dao::USER_ID_COLUMN),
//       soci::use(not_before, palm::nut::dao::NOT_BEFORE_COLUMN),
//       soci::use(expired_at, palm::nut::dao::EXPIRED_AT_COLUMN);
// }
// void palm::nut::dao::role::user::dissociate(soci::session& db,
//                                             const int32_t role,
//                                             const int32_t user) {
//   db << DESTROY, soci::use(role, palm::nut::dao::ROLE_ID_COLUMN),
//       soci::use(user, palm::nut::dao::USER_ID_COLUMN);
// }

// void palm::nut::dao::leave_word::create(soci::session& db,
//                                         const std::string& lang,
//                                         const std::string& ip,
//                                         const v1::MediaContent::Editor
//                                         editor, const std::string& body) {
//   const int32_t editor_ = static_cast<int32_t>(editor);
//   const int32_t status = static_cast<int32_t>(v1::MediaContent_Status_Draft);
//   db << CREATE, soci::use(lang, palm::nut::dao::LANG_COLUMN),
//       soci::use(ip, palm::nut::dao::IP_COLUMN),
//       soci::use(editor_, palm::nut::dao::EDITOR_COLUMN),
//       soci::use(body, palm::nut::dao::BODY_COLUMN),
//       soci::use(status, palm::nut::dao::STATUS_COLUMN);
// }
// int32_t palm::nut::dao::leave_word::total(soci::session& db) {
//   int32_t c;
//   db << TOTAL, soci::into(c);
//   return c;
// }
// void palm::nut::dao::leave_word::set_status(
//     soci::session& db, const int32_t id,
//     const v1::MediaContent::Status status) {
//   const int32_t status_ = static_cast<int32_t>(status);
//   const auto sql =
//       status == v1::MediaContent_Status_Published ? PUBLISH : SET_STATUS;
//   db << sql, soci::use(id, palm::nut::dao::ID_COLUMN),
//       soci::use(status_, palm::nut::dao::STATUS_COLUMN);
// }
// std::vector<palm::nut::dao::leave_word::Item>
// palm::nut::dao::leave_word::get(
//     soci::session& db, const int32_t offset, const int32_t limit) {
//   soci::rowset<palm::nut::dao::leave_word::Item> rs =
//       (db.prepare << ALL, soci::use(offset, palm::nut::dao::OFFSET_COLUMN),
//        soci::use(limit, palm::nut::dao::LIMIT_COLUMN));
//   std::vector<palm::nut::dao::leave_word::Item> items(rs.begin(), rs.end());
//   return items;
// }

// void palm::nut::dao::leave_word::destroy(soci::session& db, const int32_t id)
// {
//   db << DESTROY, soci::use(id, palm::nut::dao::ID_COLUMN);
// }

// std::optional<palm::nut::dao::permission::Item>
// palm::nut::dao::permission::get(
//     soci::session& db, const std::string& subject_type,
//     const int32_t subject_id, const std::string& operation,
//     const std::string& resource_type, const int32_t resource_id) {
//   boost::optional<palm::nut::dao::permission::Item> it;
//   db << BY_SUBJECT_OPERATION_RESOURCE_WITH_ID,
//       soci::use(subject_type, palm::nut::dao::SUBJECT_TYPE_COLUMN),
//       soci::use(subject_id, palm::nut::dao::SUBJECT_ID_COLUMN),
//       soci::use(operation, palm::nut::dao::OPERATION_COLUMN),
//       soci::use(resource_type, palm::nut::dao::RESOURCE_TYPE_COLUMN),
//       soci::use(resource_id, palm::nut::dao::RESOURCE_ID_COLUMN),
//       soci::into(it);
//   if (it.has_value()) {
//     return it.get();
//   }
//   return std::nullopt;
// }
// std::optional<palm::nut::dao::permission::Item>
// palm::nut::dao::permission::get(
//     soci::session& db, const std::string& subject_type,
//     const int32_t subject_id, const std::string& operation,
//     const std::string& resource_type) {
//   boost::optional<palm::nut::dao::permission::Item> it;
//   db << BY_SUBJECT_OPERATION_RESOURCE_WITHOUT_ID,
//       soci::use(subject_type, palm::nut::dao::SUBJECT_TYPE_COLUMN),
//       soci::use(subject_id, palm::nut::dao::SUBJECT_ID_COLUMN),
//       soci::use(operation, palm::nut::dao::OPERATION_COLUMN),
//       soci::use(resource_type, palm::nut::dao::RESOURCE_TYPE_COLUMN),
//       soci::into(it);
//   if (it.has_value()) {
//     return it.get();
//   }
//   return std::nullopt;
// }

// void palm::nut::dao::permission::create(soci::session& db,
//                                         const std::string& subject_type,
//                                         const int32_t subject_id,
//                                         const std::string& operation,
//                                         const std::string& resource_type,
//                                         const int32_t resource_id) {
//   db << CREATE, soci::use(subject_type, palm::nut::dao::SUBJECT_TYPE_COLUMN),
//       soci::use(subject_id, palm::nut::dao::SUBJECT_ID_COLUMN),
//       soci::use(operation, palm::nut::dao::OPERATION_COLUMN),
//       soci::use(resource_type, palm::nut::dao::RESOURCE_TYPE_COLUMN),
//       soci::use(resource_id, palm::nut::dao::RESOURCE_ID_COLUMN);
// }
// void palm::nut::dao::permission::create(soci::session& db,
//                                         const std::string& subject_type,
//                                         const int32_t subject_id,
//                                         const std::string& operation,
//                                         const std::string& resource_type) {
//   const boost::optional<int32_t> resource_id = boost::none;
//   db << CREATE, soci::use(subject_type, palm::nut::dao::SUBJECT_TYPE_COLUMN),
//       soci::use(subject_id, palm::nut::dao::SUBJECT_ID_COLUMN),
//       soci::use(operation, palm::nut::dao::OPERATION_COLUMN),
//       soci::use(resource_type, palm::nut::dao::RESOURCE_TYPE_COLUMN),
//       soci::use(resource_id, palm::nut::dao::RESOURCE_ID_COLUMN);
// }
// std::vector<palm::nut::dao::permission::Item>
// palm::nut::dao::permission::by_subject(soci::session& db,
//                                        const std::string& subject_type,
//                                        const int32_t subject_id) {
//   soci::rowset<palm::nut::dao::permission::Item> rs =
//       (db.prepare << BY_SUBJECT,
//        soci::use(subject_type, palm::nut::dao::SUBJECT_TYPE_COLUMN),
//        soci::use(subject_id, palm::nut::dao::SUBJECT_ID_COLUMN));
//   std::vector<palm::nut::dao::permission::Item> items(rs.begin(), rs.end());
//   return items;
// }
// void palm::nut::dao::permission::destroy(soci::session& db, const int32_t id)
// {
//   db << DESTROY, soci::use(id, palm::nut::dao::ID_COLUMN);
// }

// void palm::nut::dao::attachment::create(soci::session& db, const int32_t
// user,
//                                         const std::string& bucket,
//                                         const std::string& name,
//                                         const std::string& title,
//                                         const int64_t size,
//                                         const std::string& content_type) {
//   const int32_t status =
//       static_cast<int32_t>(v1::MediaContent_Status_Published);
//   db << CREATE, soci::use(user, palm::nut::dao::USER_ID_COLUMN),
//       soci::use(bucket, palm::nut::dao::BUCKET_COLUMN),
//       soci::use(name, palm::nut::dao::NAME_COLUMN),
//       soci::use(title, palm::nut::dao::TITLE_COLUMN),
//       soci::use(size, palm::nut::dao::SIZE_COLUMN),
//       soci::use(content_type, palm::nut::dao::CONTENT_TYPE_COLUMN),
//       soci::use(status, palm::nut::dao::STATUS_COLUMN);
// }
// int32_t palm::nut::dao::attachment::total(soci::session& db) {
//   int32_t c;
//   db << TOTAL, soci::into(c);
//   return c;
// }
// int32_t palm::nut::dao::attachment::total(soci::session& db,
//                                           const int32_t user) {
//   int c;
//   db << TOTAL_BY_USER, soci::use(user, palm::nut::dao::USER_ID_COLUMN),
//       soci::into(c);
//   return c;
// }
// std::optional<palm::nut::dao::attachment::Item>
// palm::nut::dao::attachment::get(
//     soci::session& db, const int32_t id) {
//   boost::optional<palm::nut::dao::attachment::Item> it;
//   db << BY_ID, soci::use(id, palm::nut::dao::ID_COLUMN), soci::into(it);
//   if (it.has_value()) {
//     return it.get();
//   }
//   return std::nullopt;
// }
// std::vector<palm::nut::dao::attachment::Item>
// palm::nut::dao::attachment::get(
//     soci::session& db, const int32_t offset, const int32_t limit) {
//   soci::rowset<palm::nut::dao::attachment::Item> rs = (db.prepare <<
//   BY_USER); std::vector<palm::nut::dao::attachment::Item> items(rs.begin(),
//   rs.end()); return items;
// }
// std::vector<palm::nut::dao::attachment::Item>
// palm::nut::dao::attachment::get(
//     soci::session& db, const int32_t user, const int32_t offset,
//     const int32_t limit) {
//   soci::rowset<palm::nut::dao::attachment::Item> rs =
//       (db.prepare << BY_USER, soci::use(user,
//       palm::nut::dao::USER_ID_COLUMN));
//   std::vector<palm::nut::dao::attachment::Item> items(rs.begin(), rs.end());
//   return items;
// }
// void palm::nut::dao::attachment::destroy(soci::session& db, const int32_t id)
// {
//   db << DESTROY, soci::use(id, palm::nut::dao::ID_COLUMN);
// }

// std::vector<palm::nut::dao::role::Item>
// palm::nut::dao::implicit_roles_for_user(
//     soci::session& db, const int32_t id) {
//   std::vector<palm::nut::dao::role::Item> items;

//   const auto user = palm::nut::dao::user::by_id(db, id);
//   if (user->is_available()) {
//     for (auto& iru : palm::nut::dao::role::user::by_user(db, id)) {
//       if (iru.is_available()) {
//         const auto role = palm::nut::dao::role::get(db, iru.role_id);
//         items.push_back(role.value());
//         {
//           const auto children = palm::nut::dao::role::offsprings(db,
//           role->id); items.insert(std::end(items), std::begin(children),
//                        std::end(children));
//         }
//       }
//     }
//   }

//   return items;
// }
// std::vector<palm::nut::dao::user::Item>
// palm::nut::dao::implicit_users_for_role(
//     soci::session& db, const int32_t id) {
//   std::vector<palm::nut::dao::user::Item> items;
//   {
//     auto role = palm::nut::dao::role::get(db, id);
//     auto roles = palm::nut::dao::role::offsprings(db, role->id);
//     roles.push_back(role.value());

//     for (auto& ir : roles) {
//       for (auto& iru : palm::nut::dao::role::user::by_role(db, ir.id)) {
//         if (iru.is_available()) {
//           const auto iu = palm::nut::dao::user::by_id(db, iru.user_id);
//           if (iu->is_available()) {
//             items.push_back(iu.value());
//           }
//         }
//       }
//     }
//   }

//   return items;
// }
// std::vector<palm::nut::dao::permission::Item>
// palm::nut::dao::implicit_permissions_for_user(soci::session& db,
//                                               const int32_t id) {
//   std::vector<palm::nut::dao::permission::Item> items;
//   auto user = palm::nut::dao::user::by_id(db, id);
//   if (user->is_available()) {
//     {
//       auto tmp =
//           palm::nut::dao::permission::by_subject<palm::nut::dao::user::Item>(
//               db, user->id);
//       items.insert(std::end(items), std::begin(tmp), std::end(tmp));
//     }

//     for (auto& iru : palm::nut::dao::role::user::by_user(db, user->id)) {
//       if (iru.is_available()) {
//         auto tmp =
//             palm::nut::dao::permission::by_subject<palm::nut::dao::role::Item>(
//                 db, iru.id);
//         items.insert(std::end(items), std::begin(tmp), std::end(tmp));
//       }
//     }
//   }
//   return items;
// }
// std::vector<palm::nut::dao::permission::Item>
// palm::nut::dao::implicit_permissions_for_role(soci::session& db,
//                                               const int32_t id) {
//   std::vector<palm::nut::dao::permission::Item> items;

//   auto role = palm::nut::dao::role::get(db, id);
//   auto roles = palm::nut::dao::role::offsprings(db, role->id);
//   roles.push_back(role.value());

//   for (auto& ir : roles) {
//     auto tmp =
//         palm::nut::dao::permission::by_subject<palm::nut::dao::role::Item>(
//             db, ir.id);
//     items.insert(std::end(items), std::begin(tmp), std::end(tmp));
//   }
//   return items;
// }

// std::string palm::nut::dao::baidu::ping_request_body(const std::string& home,
//                                                      const std::string& lang,
//                                                      const std::string&
//                                                      title) {
//   boost::property_tree::ptree tree;
//   {
//     boost::property_tree::ptree root;
//     root.put("methodName", "weblogUpdates.extendedPing");
//     {
//       boost::property_tree::ptree params;

//       const std::string pk = "param";
//       const std::string vk = "value.string";
//       {
//         boost::property_tree::ptree it;
//         it.put(vk, title);
//         params.add_child(pk, it);
//       }
//       {
//         boost::property_tree::ptree it;
//         it.put(vk, home + "/" + lang + "/");
//         params.add_child(pk, it);
//       }
//       {
//         boost::property_tree::ptree it;
//         it.put(vk, home + "/" + lang + "/rss.xml");
//         params.add_child(pk, it);
//       }

//       root.put_child("params", params);
//     }

//     tree.put_child("methodCall", root);
//   }
//   std::stringstream ss;
//   boost::property_tree::xml_parser::write_xml(ss, tree);
//   return ss.str();
// }
// std::map<std::string, std::string> palm::nut::dao::baidu::ping_request_body(
//     soci::session& db, const std::string& home) {
//   std::map<std::string, std::string> items;
//   for (const auto& lang : palm::nut::dao::locale::languages(db)) {
//     const auto title = palm::nut::dao::locale::get(
//         db, lang, palm::nut::dao::locale::SITE_TITLE);
//     const auto body = ping_request_body(home, lang, title->message);
//     items.insert({lang, body});
//   }
//   return items;
// }
