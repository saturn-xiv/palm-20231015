#include "palm/orm.hpp"

palm::postgresql::Config::Config(const toml::table& config) {
  this->_host = config["host"].value_or("127.0.0.1");
  this->_port = config["port"].value_or(5432);
  this->_name = config["name"].value<std::string>().value();
  this->_user = config["user"].value_or("postgres");
  this->_password = config["password"].value<std::string>();
  this->_pool_size = config["pool-size"].value_or(32);
  {
    std::size_t it = config["timeout"].value_or(5);
    this->_timeout = std::chrono::seconds(it);
  }
}

std::shared_ptr<soci::connection_pool> palm::postgresql::Config::open() const {
  // https://www.postgresql.org/docs/14/libpq-connect.html#LIBPQ-CONNSTRING
  std::stringstream url;
  {
    url << "host=" << this->_host;
    url << " port=" << this->_port;
    url << " dbname=" << this->_name;
    url << " user=" << this->_user;
    if (this->_password) {
      url << " password=" << this->_password.value();
    }
    url << " sslmode=disable";
    url << " connect_timeout=" << this->_timeout.count();
  }
  soci::register_factory_postgresql();
  auto pool = std::make_shared<soci::connection_pool>(this->_pool_size);
  for (size_t i = 0; i < this->_pool_size; i++) {
    soci::session& it = pool->at(i);
    it.open(soci::postgresql, url.str());
  }
  return pool;
}

std::string palm::postgresql::version(soci::session& db) {
  std::string it;
  db << "SELECT VERSION()", soci::into(it);
  return it;
}

palm::mysql::Config::Config(const toml::table& config) {
  this->_host = config["host"].value_or("127.0.0.1");
  this->_port = config["port"].value_or(3306);
  this->_name = config["name"].value<std::string>().value();
  this->_user = config["user"].value_or("root");
  this->_password = config["password"].value<std::string>();
  this->_pool_size = config["pool-size"].value_or(32);
  {
    std::size_t it = config["timeout"].value_or(5);
    this->_timeout = std::chrono::seconds(it);
  }
}

std::shared_ptr<soci::connection_pool> palm::mysql::Config::open() const {
  // http://soci.sourceforge.net/doc/release/4.0/backends/mysql/
  std::stringstream url;
  {
    url << "host=" << this->_host;
    url << " port=" << this->_port;
    url << " dbname=" << this->_name;
    url << " user=" << this->_user;
    if (this->_password) {
      url << " password=" << this->_password.value();
    }
    url << " charset=utf8";
    url << " reconnect=1";
    url << " connect_timeout=" << this->_timeout.count();
  }
  //   TODO register mysql
  auto pool = std::make_shared<soci::connection_pool>(this->_pool_size);
  for (size_t i = 0; i <= this->_pool_size; i++) {
    soci::session& it = pool->at(i);
    // FIXME
    it.open(soci::postgresql, url.str());
  }
  return pool;
}

std::string palm::mysql::version(soci::session& db) {
  std::string it;
  db << "SELECT VERSION()", soci::into(it);
  return it;
}

std::shared_ptr<soci::session> palm::sqlite3::open(
    const std::filesystem::path& file, const std::chrono::seconds& timeout,
    const bool wal_mode) {
  std::stringstream url;
  {
    url << file.string();
    url << "db=" << file.string();
    url << " timeout=" << timeout.count();
    url << " shared_cache=true";
    url << " synchronous=off";
  }
  soci::register_factory_sqlite3();
  auto db = std::make_shared<soci::session>(soci::sqlite3, url.str());
  (*db) << "PRAGMA foreign_keys = ON";
  if (wal_mode) {
    (*db) << "PRAGMA journal_mode = WAL";
  }
  return db;
}

std::string palm::sqlite3::version(soci::session& db) {
  std::string it;
  db << "SELECT SQLITE_VERSION()", soci::into(it);
  return it;
}
