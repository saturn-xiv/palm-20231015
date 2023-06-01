#include <catch2/catch_test_macros.hpp>

#include "palm/orm.hpp"

#include "boost/date_time/posix_time/posix_time.hpp"

TEST_CASE("PostgreSql", "[pgsql]") {
  toml::table node;
  {
    // create database testing owner www;
    node.insert("name", "testing");
    node.insert("user", "www");
    node.insert("password", "change-me");
  }
  palm::postgresql::Config cfg(node);

  SECTION("version") {
    std::cout << "postgresql client: " << palm::postgresql::Config::version()
              << std::endl;

    auto db = cfg.connect();
    pqxx::work tx{*db};
    const auto [version, now] = tx.query1<std::string, std::string>(
        R"(SELECT VERSION(),CURRENT_TIMESTAMP)");
    // date::sys_time<std::chrono::microseconds>
    std::cout << "version: " << version << "\ncurrent timestamp: " << now
              << std::endl;
  }
  SECTION("datetime") {
    {
      // const auto now = boost::posix_time::second_clock::local_time();
      const auto now = boost::posix_time::microsec_clock::local_time();
    }
    {
        // const auto now = std::chrono::system_clock::now();
        // std::cout << std::format("{:%FT%TZ}", now) << std::endl;
    } {
      const auto now = std::chrono::system_clock::now();
      std::cout << date::format(
                       "%F %T%z",
                       std::chrono::time_point_cast<std::chrono::microseconds>(
                           now))
                << std::endl;
    }
    {
      std::chrono::system_clock::time_point tp;
      const std::string ts = "2023-06-01 02:10:34.264364+00";
      std::istringstream ss{ts};
      ss >> date::parse("%F %T%z", tp);

      std::cout << "parse(" << ts << ") => "
                << date::format(
                       "%F %T%z",
                       std::chrono::time_point_cast<std::chrono::microseconds>(
                           tp))
                << std::endl;
    }

    REQUIRE((1 + 1) == 2);
  }
  SECTION("bytea") {
    // TODO
    REQUIRE((1 + 1) == 2);
  }
}

TEST_CASE("MySql", "[mysql]") {
  toml::table node;
  {
    node.insert("name", "testing");
    node.insert("user", "www");
    node.insert("password", "change-me");
  }
  palm::mysql::Config cfg(node);
  auto db = cfg.open();

  SECTION("version") {
    std::cout << "mysql client: " << palm::mysql::Config::version()
              << std::endl;

    auto con = db->get();

    {
      const int status = mysql_query(con, "SELECT VERSION()");
      if (status != 0) {
        palm::mysql::finish_with_error(con);
      }
      REQUIRE(status == 0);
      MYSQL_RES *result = mysql_store_result(con);
      if (result == NULL) {
        palm::mysql::finish_with_error(con);
      }
      REQUIRE(result != NULL);

      const int num_fields = mysql_num_fields(result);
      MYSQL_ROW row;

      while ((row = mysql_fetch_row(result))) {
        for (int i = 0; i < num_fields; i++) {
          std::cout << (row[i] ? row[i] : "NULL") << std::endl;
        }
      }
    }
  }
}

TEST_CASE("Sqlite3", "[sqlite]") {
  toml::table node;
  { node.insert("file", "db.testing"); }
  palm::Sqlite3 cfg(node);

  auto db = cfg.open();
  SECTION("version") {
    std::cout << "sqlite3 library: " << palm::Sqlite3::version() << std::endl;

    SQLite::Statement query(*db, "SELECT SQLITE_VERSION()");
    while (query.executeStep()) {
      std::cout << query.getColumn(0) << std::endl;
    }
    query.reset();
  }
}

// BOOST_AUTO_TEST_CASE(sqlite3) {

//   cfg.open();
// }

// BOOST_AUTO_TEST_CASE(mysql) {

//   cfg.open();
// }

// BOOST_AUTO_TEST_CASE(postgresql) {

//   auto pool = cfg.open();
//   {
//     const std::string lang = "en-US." + palm::random::string(2);
//     const std::string code = "hi." + palm::random::string(8);
//     const std::string message = "hello, palm(" + palm::random::string(16) +
//     ")";

//     soci::session db(*pool);

//     palm::nut::dao::locale::create(db, lang, code, message);
//     {
//       auto langs = palm::nut::dao::locale::languages(db);
//       std::string it = boost::algorithm::join(langs, ", ");

//       std::cout << "LANGUAGES(" << langs.size() << "): " << it << std::endl;
//     }
//     auto it = palm::nut::dao::locale::get(db, lang, code);
//     BOOST_TEST(it.has_value());

//     std::cout << "INSERTED: " << it->id << " " << it->lang << "." << it->code
//               << " = " << it->message << " " << std::asctime(&it->updated_at)
//               << std::endl;
//     BOOST_TEST(it->lang == lang);
//     BOOST_TEST(it->code == code);
//     BOOST_TEST(it->message == message);

//     {
//       auto items = palm::nut::dao::locale::get(db, lang);
//       for (const auto &it : items) {
//         std::cout << "BY LANG(" << items.size() << "): " << it.id << " "
//                   << it.code << " " << it.message << std::endl;
//       }
//       BOOST_TEST(items.size() > 0);
//     }
//     {
//       const int32_t offset = 2;
//       const int32_t limit = 5;
//       auto items = palm::nut::dao::locale::get(db, offset, limit);
//       for (const auto &it : items) {
//         std::cout << "ALL(" << items.size() << "): " << it.id << " " <<
//         it.code
//                   << " " << it.message << std::endl;
//       }
//       BOOST_TEST(items.size() > 0);
//       BOOST_TEST(items.size() <= limit);
//     }
//     {
//       auto iv = palm::nut::dao::locale::get(db, "bla", "what");
//       BOOST_TEST(!iv.has_value());
//     }
//     {
//       const std::string value = "hello, world!";
//       palm::nut::dao::locale::update(db, it->id, value);
//       auto iv = palm::nut::dao::locale::get(db, it->id);
//       BOOST_TEST(iv.has_value());
//       BOOST_TEST(iv->id == it->id);
//       BOOST_TEST(iv->lang == lang);
//       BOOST_TEST(iv->code == code);
//       BOOST_TEST(iv->message == value);
//       BOOST_TEST(iv->message != it->message);
//       BOOST_TEST(iv->version != it->version);
//     }
//     palm::nut::dao::locale::destroy(db, it->id);
//     {
//       auto tmp = palm::nut::dao::locale::get(db, it->id);
//       BOOST_TEST(!tmp.has_value());
//     }
//     {
//       auto tmp = palm::nut::dao::locale::get(db, code, lang);
//       BOOST_TEST(!tmp.has_value());
//     }
//     {
//       auto c = palm::nut::dao::locale::total(db);
//       BOOST_TEST(c > 0);
//     }
//   }

//   {
//     soci::session db(*pool);
//     const auto key = palm::SecretBox::generate_key();
//     const palm::SecretBox secret_box(key);

//     {
//       const std::string content = "hello, world!" + palm::random::string(16);
//       palm::nut::v1::EmailTask request;
//       request.set_content(content);
//       const std::string key = "hi." + palm::random::string(2);

//       {
//         BOOST_LOG_TRIVIAL(info) << "without user, without encode";
//         palm::nut::dao::setting::set(db, secret_box, key, &request);
//         {
//           const auto it =
//               palm::nut::dao::setting::get<palm::SecretBox,
//                                            palm::nut::v1::EmailTask>(
//                   db, secret_box, key);
//           BOOST_TEST(it->content() == content);
//         }
//       }

//       {
//         BOOST_LOG_TRIVIAL(info) << "without user, with encode";
//         palm::nut::dao::setting::set(db, secret_box, key, &request, true);
//         {
//           const auto it =
//               palm::nut::dao::setting::get<palm::SecretBox,
//                                            palm::nut::v1::EmailTask>(
//                   db, secret_box, key);
//           BOOST_TEST(it->content() == content);
//         }
//       }

//       const int32_t user = 123;
//       {
//         BOOST_LOG_TRIVIAL(info) << "with user, without encode";
//         palm::nut::dao::setting::set(db, secret_box, key, user, &request);
//         {
//           const auto it =
//               palm::nut::dao::setting::get<palm::SecretBox,
//                                            palm::nut::v1::EmailTask>(
//                   db, secret_box, key, user);
//           BOOST_TEST(it->content() == content);
//         }
//       }
//       {
//         BOOST_LOG_TRIVIAL(info) << "with user, with encode";
//         palm::nut::dao::setting::set(db, secret_box, key, user, &request,
//         true);
//         {
//           const auto it =
//               palm::nut::dao::setting::get<palm::SecretBox,
//                                            palm::nut::v1::EmailTask>(
//                   db, secret_box, key, user);
//           BOOST_TEST(it->content() == content);
//         }
//       }
//     }
//   }
// }
