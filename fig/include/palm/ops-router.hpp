#pragma once

#include "ops-router.grpc.pb.h"
#include "palm/nut.hpp"

// namespace palm {
// namespace ops {
// namespace router {
// namespace dao {
// namespace setting {
// inline static const std::string INIT_TABLE =
//     R"SQL(CREATE TABLE IF NOT EXISTS settings(id INTEGER NOT NULL PRIMARY KEY, key VARCHAR(255) NOT NULL, value TEXT NOT NULL, updated_at DATETIME NOT NULL))SQL";

// inline static const std::string INIT_INDEX_KEY =
//     R"SQL(CREATE UNIQUE INDEX IF NOT EXISTS idx_settings_key ON settings(key))SQL";

// inline static const std::string UPDATE =
//     R"SQL(UPDATE settings SET value=:value, salt=:salt, updated_at=CURRENT_TIMESTAMP WHERE id=:id)SQL";
// inline static const std::string BY_KEY =
//     R"SQL(SELECT * FROM settings WHERE key=:key LIMIT 1)SQL";
// inline static const std::string CREATE =
//     R"SQL(INSERT INTO settings(key, value, updated_at) VALUES(:key, :value, CURRENT_TIMESTAMP))SQL";

// struct Item {
//   int32_t id;
//   std::string key;
//   std::string value;
//   std::tm updated_at;
// };

// std::optional<Item> by_key(soci::session& db, const std::string& key);
// void create(soci::session& db, const std::string& key,
//             const std::string& value);
// void update(soci::session& db, const int32_t id, const std::string& value);
// template <class K, class T>
// std::string key(const std::optional<K> key = std::nullopt) {
//   std::stringstream ss;
//   ss << boost::typeindex::type_id_with_cvr<T>().pretty_name();
//   if (key.has_value()) {
//     ss << key.value();
//   }
//   return ss.str();
// }
// template <class K, class T>
// void set(soci::session& db, const T& entity,
//          const std::optional<K> key = std::nullopt) {
//   const auto k = palm::ops::router::dao::setting::key<K, T>(key);
//   std::string buf;
//   if (!entity.SerializeToString(&buf)) {
//     BOOST_LOG_TRIVIAL(error) << "serialize " << k;
//     return;
//   }
//   const auto it = by_key(db, k);
//   if (it.has_value()) {
//     update(db, it->id, buf);
//   } else {
//     create(db, k, buf);
//   }
// }
// template <class K, class T>
// std::optional<T> get(soci::session& db,
//                      const std::optional<K> key = std::nullopt) {
//   const auto k = palm::ops::router::dao::setting::key<K, T>(key);
//   const auto it = by_key(db, k);
//   if (it.has_value()) {
//     T entity;
//     if (entity.ParseFromString(it->value)) {
//       return entity;
//     }
//     BOOST_LOG_TRIVIAL(error) << "parse " << k;
//   }
//   return std::nullopt;
// }

// }  // namespace setting

// namespace user {
// inline static const std::string INIT_TABLE =
//     R"SQL(CREATE TABLE IF NOT EXISTS users(id INTEGER NOT NULL PRIMARY KEY, name VARCHAR(255) NOT NULL, 'group' VARCHAR(255) NOT NULL, contact TEXT NOT NULL, updated_at DATETIME NOT NULL))SQL";

// inline static const std::string INIT_INDEX_NAME =
//     R"SQL(CREATE UNIQUE INDEX IF NOT EXISTS idx_users_name ON users(name))SQL";

// inline static const std::string INIT_INDEX_GROUP =
//     R"SQL(CREATE INDEX IF NOT EXISTS idx_users_group ON users('group'))SQL";
// }  // namespace user

// namespace host {
// inline static const std::string INIT_TABLE =
//     R"SQL(CREATE TABLE IF NOT EXISTS hosts(id INTEGER NOT NULL PRIMARY KEY, name VARCHAR(255) NOT NULL, mac VARCHAR(64) NOT NULL, ip VARCHAR(64) NOT NULL, user_id INTEGER, location VARCHAR(255), fixed BOOLEAN NOT NULL DEFAULT FALSE, confirmed_at DATETIME, updated_at DATETIME NOT NULL))SQL";

// inline static const std::string INIT_INDEX_MAC =
//     R"SQL(CREATE UNIQUE INDEX IF NOT EXISTS idx_hosts_mac ON hosts(mac))SQL";

// inline static const std::string INIT_INDEX_NAME =
//     R"SQL(CREATE INDEX IF NOT EXISTS idx_hosts_name ON hosts(name))SQL";

// inline static const std::string INIT_INDEX_IP =
//     R"SQL(CREATE INDEX IF NOT EXISTS idx_hosts_ip ON hosts(ip))SQL";

// }  // namespace host

// namespace rule {
// inline static const std::string INIT_TABLE =
//     R"SQL(CREATE TABLE IF NOT EXISTS rules(id INTEGER NOT NULL PRIMARY KEY, zone VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, 'group' VARCHAR(255) NOT NULL, content TEXT NOT NULL, updated_at DATETIME NOT NULL))SQL";

// inline static const std::string INIT_INDEX_ZONE_NAME =
//     R"SQL(CREATE UNIQUE INDEX IF NOT EXISTS idx_rules_zone_name ON rules(zone, name))SQL";

// inline static const std::string INIT_INDEX_GROUP =
//     R"SQL(CREATE INDEX IF NOT EXISTS idx_rules_group ON rules('group'))SQL";

// }  // namespace rule

// }  // namespace  dao
// namespace services {
// class User final : public v1::User::Service {
//  public:
//   User(std::shared_ptr<soci::session> db, std::shared_ptr<palm::Jwt> jwt)
//       : _db(db), _jwt(jwt) {}
//   grpc::Status SignIn(grpc::ServerContext* context,
//                       const v1::UserSignInRequest* request,
//                       v1::UserSignInResponse* response) override;
//   grpc::Status Refresh(grpc::ServerContext* context,
//                        const google::protobuf::Duration* request,
//                        v1::UserSignInResponse* response) override;
//   grpc::Status Update(grpc::ServerContext* context,
//                       const v1::UserUpdateRequest* request,
//                       google::protobuf::Empty* response) override;
//   grpc::Status SignOut(grpc::ServerContext* context,
//                        const google::protobuf::Empty* request,
//                        google::protobuf::Empty* response) override;
//   grpc::Status Logs(grpc::ServerContext* context,
//                     const google::protobuf::Duration* request,
//                     v1::UserLogsResponse* response) override;

//  private:
//   std::optional<v1::UserProfile> current_user(grpc::ServerContext* context);

//   std::shared_ptr<soci::session> _db;
//   std::shared_ptr<palm::Jwt> _jwt;
// };

// class Router final : public v1::Router::Service {
//  public:
//   Router(std::shared_ptr<soci::session> db, std::shared_ptr<palm::Jwt> jwt)
//       : _db(db), _jwt(jwt) {}

//  private:
//   std::shared_ptr<soci::session> _db;
//   std::shared_ptr<palm::Jwt> _jwt;
// };

// }  // namespace services

// }  // namespace router
// }  // namespace ops
// }  // namespace palm

// namespace soci {

// template <>
// struct type_conversion<palm::ops::router::dao::setting::Item> {
//   typedef values base_type;

//   static void from_base(const values& v, indicator i,
//                         palm::ops::router::dao::setting::Item& o) {
//     o.id = v.get<int32_t>(palm::nut::dao::ID_COLUMN);
//     o.key = v.get<std::string>(palm::nut::dao::KEY_COLUMN);
//     o.value = v.get<std::string>(palm::nut::dao::VALUE_COLUMN);
//     o.updated_at = v.get<std::tm>(palm::nut::dao::UPDATED_AT_COLUMN);
//   }
// };
// }  // namespace soci
