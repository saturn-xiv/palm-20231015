#include "palm/orm.hpp"

#include <soci/mysql/soci-mysql.h>
#include <soci/postgresql/soci-postgresql.h>
#include <soci/sqlite3/soci-sqlite3.h>
#include <boost/property_tree/ini_parser.hpp>

std::shared_ptr<soci::session> palm::sqlite3::open(
    const std::filesystem::path& file, const std::chrono::seconds& timeout,
    const bool wal_mode) {
  std::stringstream url;
  {
    url << "db=" << file.string();
    url << " timeout=" << timeout.count();
    url << " shared_cache=true";
    url << " synchronous=off";
  }
  std::shared_ptr<soci::session> it =
      std::make_shared<soci::session>(soci::sqlite3, url.str());
  it->set_logger(new palm::orm::Logger());

  (*it) << "PRAGMA foreign_keys = ON";
  if (wal_mode) {
    (*it) << "PRAGMA journal_mode = WAL";
  }

  return it;
}

std::shared_ptr<soci::session> palm::mysql::open(
    const std::string& database, const std::string& host, const uint32_t port,
    const std::string& user, const std::optional<std::string> password,
    const std::chrono::seconds& timeout) {
  // http://soci.sourceforge.net/doc/release/4.0/backends/mysql/
  std::stringstream url;
  {
    url << "host=" << host;
    url << " port=" << port;
    url << " dbname=" << database;
    url << " user=" << user;
    if (password) {
      url << " password=" << password.value();
    }
    url << " charset=utf8";
    url << " reconnect=1";
    url << " connect_timeout=" << timeout.count();
  }

  std::shared_ptr<soci::session> it =
      std::make_shared<soci::session>(soci::mysql, url.str());
  it->set_logger(new palm::orm::Logger());
  return it;
}

std::shared_ptr<soci::session> palm::postgresql::open(
    const std::string& database, const std::string& host, const uint32_t port,
    const std::string& user, const std::optional<std::string> password,
    const std::chrono::seconds& timeout) {
  // https://www.postgresql.org/docs/14/libpq-connect.html#LIBPQ-CONNSTRING
  std::stringstream url;
  {
    url << "host=" << host;
    url << " port=" << port;
    url << " dbname=" << database;
    url << " user=" << user;
    if (password) {
      url << " password=" << password.value();
    }
    url << " sslmode=disable";
    url << " connect_timeout=" << timeout.count();
  }
  std::shared_ptr<soci::session> it =
      std::make_shared<soci::session>(soci::postgresql, url.str());
  it->set_logger(new palm::orm::Logger());
  return it;
}
