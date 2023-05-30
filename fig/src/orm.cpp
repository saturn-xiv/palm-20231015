#include "palm/orm.hpp"

// #include <chrono>

// #include <soci/postgresql/soci-postgresql.h>
// #include <soci/sqlite3/soci-sqlite3.h>

// palm::PostgreSql::PostgreSql(const toml::table& root) {
//   this->_host = root["host"].value_or("127.0.0.1");
//   this->_port = root["port"].value_or(5432);
//   this->_user = root["user"].value_or("postgres");
//   this->_name = root["name"].value<std::string>().value();
//   this->_password = root["password"].value<std::string>();
//   this->_pool_size = root["pool-size"].value_or(32);
// }

// std::shared_ptr<soci::connection_pool> palm::PostgreSql::open() const {
//   BOOST_LOG_TRIVIAL(info) << "open postgresql://" << this->_user << "@"
//                           << this->_host << ":" << this->_port << "/"
//                           << this->_name << "?version=" << PQlibVersion();
//   soci::register_factory_postgresql();
//   std::shared_ptr<soci::connection_pool> pool =
//       std::make_shared<soci::connection_pool>(this->_pool_size);

//   std::stringstream ss;
//   {
//     ss << "postgresql://host=" << this->_host << " port=" << this->_port
//        << " dbname=" << this->_name << " user=" << this->_user;
//     if (this->_password) {
//       ss << " password=" << this->_password.value();
//     }
//     ss << " sslmode=disable connect_timeout=10";
//   }

//   const std::string url = ss.str();

//   for (size_t i = 0; i < this->_pool_size; i++) {
//     soci::session& db = pool->at(i);
//     db.open(url);
//     db.set_logger(new palm::orm::Logger());
//   }
//   {
//     soci::session db(*pool);
//     std::string version;
//     db << "SELECT VERSION()", soci::into(version);
//     BOOST_LOG_TRIVIAL(info) << "version: " << version;
//   }

//   return pool;
// }

// palm::MySql::MySql(const toml::table& root) {
//   this->_host = root["host"].value_or("127.0.0.1");
//   this->_port = root["port"].value_or(5432);
//   this->_user = root["user"].value_or("postgres");
//   this->_name = root["name"].value<std::string>().value();
//   this->_password = root["password"].value<std::string>();
//   this->_pool_size = root["pool-size"].value_or(32);
// }

// std::shared_ptr<soci::connection_pool> palm::MySql::open() const {
//   BOOST_LOG_TRIVIAL(info) << "open mysql://" << this->_user << "@"
//                           << this->_host << ":" << this->_port << "/"
//                           << this->_name;
//   //   FIXME
//   //   soci::register_factory_mysql();
//   std::shared_ptr<soci::connection_pool> pool =
//       std::make_shared<soci::connection_pool>(this->_pool_size);

//   std::stringstream ss;
//   {
//     ss << "mysql://host=" << this->_host << " port=" << this->_port
//        << " dbname=" << this->_name << " user=" << this->_user;
//     if (this->_password) {
//       ss << " password=" << this->_password.value();
//     }
//     ss << " reconnect=1 connect_timeout=10";
//   }
//   const std::string url = ss.str();

//   for (size_t i = 0; i < this->_pool_size; i++) {
//     soci::session& db = pool->at(i);
//     db.open(url);
//     db.set_logger(new palm::orm::Logger());
//   }
//   {
//     soci::session db(*pool);
//     std::string version;
//     db << "SELECT VERSION()", soci::into(version);
//     BOOST_LOG_TRIVIAL(info) << "version: " << version;
//   }

//   return pool;
// }

// palm::Sqlite3::Sqlite3(const toml::table& root) {
//   this->_file = root["file"].value_or("db");
//   this->_timeout = root["timeout"].value_or(5);
// }

// std::shared_ptr<soci::session> palm::Sqlite3::open() const {
//   BOOST_LOG_TRIVIAL(info) << "open sqlite3 " << this->_file;

//   std::stringstream ss;
//   ss << "db=" << this->_file << " timeout=" << this->_timeout
//      << " shared_cache=true";

//   std::shared_ptr<soci::session> db =
//       std::make_shared<soci::session>(soci::sqlite3, ss.str());
//   db->set_logger(new palm::orm::Logger());
//   {
//     *db << "PRAGMA synchronous = OFF";
//     *db << "PRAGMA journal_mode = WAL";
//     *db << "PRAGMA foreign_keys = ON";
//     *db << "PRAGMA busy_timeout = "
//         << std::chrono::duration_cast<std::chrono::milliseconds>(
//                std::chrono::seconds(this->_timeout))
//                .count();
//   }
//   {
//     std::string version;
//     *db << "SELECT SQLITE_VERSION()", soci::into(version);
//     BOOST_LOG_TRIVIAL(info) << "version: " << version;
//   }

//   return db;
// }
