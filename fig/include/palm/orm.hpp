#pragma once

// #include <boost/algorithm/string/join.hpp>
// #include <boost/log/trivial.hpp>

// #include <soci/boost-fusion.h>
// #include <soci/boost-gregorian-date.h>
// #include <soci/boost-optional.h>
// #include <soci/boost-tuple.h>
// #include <soci/soci.h>
// #include <toml++/toml.h>

// namespace palm {

// namespace orm {
// class Logger final : public soci::logger_impl {
//  public:
//   void start_query(const std::string& query) {
//     BOOST_LOG_TRIVIAL(debug) << query;
//   }

//  private:
//   logger_impl* do_clone() const { return new Logger(); }
// };
// }  // namespace orm

// // https://www.postgresql.org/docs/current/runtime-config-logging.html
// // /var/lib/postgres/data/postgresql.conf: log_statement = 'all'
// class PostgreSql {
//  public:
//   PostgreSql(const toml::table& root);
//   // https://www.postgresql.org/docs/current/libpq-connect.html
//   std::shared_ptr<soci::connection_pool> open() const;

//  private:
//   std::string _host;
//   uint16_t _port;
//   std::string _name;
//   std::string _user;
//   std::optional<std::string> _password;
//   size_t _pool_size;
// };
// class MySql {
//  public:
//   MySql(const toml::table& root);
//   std::shared_ptr<soci::connection_pool> open() const;

//  private:
//   std::string _host;
//   uint16_t _port;
//   std::string _name;
//   std::string _user;
//   std::optional<std::string> _password;
//   size_t _pool_size;
// };
// /*
// .show Displays current settings for various parameters
// .databases Provides database names and files
// .quit Quit sqlite3 program
// .tables Show current tables
// .schema Display schema of table
// .header Display or hide the output table header
// .mode Select mode for the output table
// .dump Dump database in SQL text format
// pragma compile_options;
// SELECT name FROM sqlite_master WHERE type='table' AND name='TABLE_NAME'
// */
// // https://stackoverflow.com/questions/57123453/how-to-use-diesel-with-sqlite-connections-and-avoid-database-is-locked-type-of
// // https://www.sqlite.org/pragma.html#pragma_synchronous
// class Sqlite3 {
//  public:
//   Sqlite3(const toml::table& root);
//   std::shared_ptr<soci::session> open() const;

//  private:
//   std::string _file;
//   size_t _timeout;
// };
// }  // namespace palm
