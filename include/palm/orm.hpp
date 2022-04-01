#pragma once

#include <chrono>
#include <filesystem>
#include <optional>
#include <string>

#include <boost/date_time/gregorian/formatters.hpp>
#include <boost/log/trivial.hpp>
#include <boost/property_tree/ptree.hpp>

#include <soci/boost-fusion.h>
#include <soci/boost-gregorian-date.h>
#include <soci/boost-optional.h>
#include <soci/boost-tuple.h>
#include <soci/soci.h>

namespace palm {

namespace sqlite3 {

/**
 .show Displays current settings for various parameters
 .databases Provides database names and files
 .quit Quit sqlite3 program
 .tables Show current tables
 .schema Display schema of table
 .header Display or hide the output table header
 .mode Select mode for the output table
 .dump Dump database in SQL text format
 pragma compile_options;
 SELECT name FROM sqlite_master WHERE type='table' AND name='TABLE_NAME'
*/
std::shared_ptr<soci::session> open(
    const std::filesystem::path& file,
    const std::chrono::seconds& timeout = std::chrono::seconds(5),
    const bool wal_mode = true);

}  // namespace sqlite3

namespace mysql {
/**
use DB-NAME
show tables;
desc TABLE-NAME;
SELECT table_name FROM information_schema.tables WHERE table_schema =
'databasename' AND table_name = 'testtable'; SHOW TABLES LIKE 'tablename';
*/
std::shared_ptr<soci::session> open(
    const std::string& database, const std::string& host = "127.0.0.1",
    const uint32_t port = 3306, const std::string& user = "root",
    const std::optional<std::string> password = std::nullopt,
    const std::chrono::seconds& timeout = std::chrono::seconds(5));

}  // namespace mysql
namespace postgresql {
/**
https://www.postgresql.org/docs/current/runtime-config-logging.html
/var/lib/postgres/data/postgresql.conf: log_statement = 'all'
sudo journalctl -u postgresql -f
*/
std::shared_ptr<soci::session> open(
    const std::string& database, const std::string& host = "127.0.0.1",
    const uint32_t port = 5432, const std::string& user = "postgres",
    const std::optional<std::string> password = std::nullopt,
    const std::chrono::seconds& timeout = std::chrono::seconds(5));
}  // namespace postgresql

namespace orm {
class Logger : public soci::logger_impl {
 public:
  virtual void start_query(std::string const& query) {
    BOOST_LOG_TRIVIAL(debug) << query;
  }

 private:
  virtual soci::logger_impl* do_clone() const { return new Logger(); }
};
}  // namespace orm

}  // namespace palm
