#include "palm/orm.hpp"

#include <libpq-fe.h>
#include <sqlite3.h>

palm::postgresql::Config::Config(const toml::table& root) {
  this->_host = root["host"].value_or("127.0.0.1");
  this->_port = root["port"].value_or(5432);
  this->_user = root["user"].value_or("postgres");
  this->_name = root["name"].value<std::string>().value();
  this->_password = root["password"].value<std::string>();
  this->_pool_size = root["pool-size"].value_or(32);
}

std::shared_ptr<pqxx::connection> palm::postgresql::Config::connect() {
  std::stringstream ss;
  {
    ss << "host=" << this->_host << " port=" << this->_port
       << " dbname=" << this->_name << " user=" << this->_user;
    if (this->_password) {
      ss << " password=" << this->_password.value();
    }
    ss << " sslmode=disable connect_timeout=10";
  }
  std::shared_ptr<pqxx::connection> it =
      std::make_shared<pqxx::connection>(ss.str());
  return it;
}

std::string palm::postgresql::Config::version() {
  const auto v = PQlibVersion();
  std::stringstream ss;
  ss << v / 10000 << "." << (v / 100) % 100 << "." << v % 100;
  return ss.str();
}

palm::mysql::Config::Config(const toml::table& root) {
  this->_host = root["host"].value_or("127.0.0.1");
  this->_port = root["port"].value_or(3306);
  this->_user = root["user"].value_or("root");
  this->_name = root["name"].value<std::string>().value();
  this->_password = root["password"].value<std::string>();
  this->_pool_size = root["pool-size"].value_or(32);
}

std::shared_ptr<palm::mysql::Connection> palm::mysql::Config::open() const {
  my_bool reconnect = 1;
  auto db = mysql_init(NULL);
  mysql_options(db, MYSQL_OPT_RECONNECT, &reconnect);
  if (mysql_real_connect(db, this->_host.c_str(), this->_user.c_str(),
                         this->_password.value_or("").c_str(),
                         this->_name.c_str(), this->_port, NULL, 0) == NULL) {
    finish_with_error(db);
    return nullptr;
  }
  return std::make_shared<palm::mysql::Connection>(db, reconnect);
}

std::string palm::mysql::Config::version() { return mysql_get_client_info(); }

palm::Sqlite3::Sqlite3(const toml::table& root) {
  this->_file = root["file"].value_or("db");
  this->_timeout = root["timeout"].value_or(5);
}

std::string palm::Sqlite3::version() { return sqlite3_libversion(); }

std::shared_ptr<SQLite::Database> palm::Sqlite3::open() const {
  std::shared_ptr<SQLite::Database> db = std::make_shared<SQLite::Database>(
      this->_file, SQLite::OPEN_READWRITE | SQLite::OPEN_CREATE);

  {
    db->exec("PRAGMA synchronous = OFF");
    db->exec("PRAGMA journal_mode = WAL");
    db->exec("PRAGMA foreign_keys = ON");
    {
      std::stringstream ss;
      ss << "PRAGMA busy_timeout = "
         << std::chrono::duration_cast<std::chrono::milliseconds>(
                std::chrono::seconds(this->_timeout))
                .count();
      db->exec(ss.str());
    }
  }
  return db;
}
// std::shared_ptr<soci::connection_pool> palm::PostgreSql::open() const {

//   soci::register_factory_postgresql();
//   std::shared_ptr<soci::connection_pool> pool =
//       std::make_shared<soci::connection_pool>(this->_pool_size);

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

// std::shared_ptr<soci::session> palm::Sqlite3::open() const {
//   BOOST_LOG_TRIVIAL(info) << "open sqlite3 " << this->_file;

//   std::stringstream ss;
//   ss << "db=" << this->_file << " timeout=" << this->_timeout
//      << " shared_cache=true";

//   std::shared_ptr<soci::session> db =
//       std::make_shared<soci::session>(soci::sqlite3, ss.str());
//   db->set_logger(new palm::orm::Logger());

//   {
//     std::string version;
//     *db << "SELECT SQLITE_VERSION()", soci::into(version);
//     BOOST_LOG_TRIVIAL(info) << "version: " << version;
//   }

//   return db;
// }
