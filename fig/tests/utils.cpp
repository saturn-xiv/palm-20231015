#define BOOST_TEST_MODULE utils
#include <boost/test/unit_test.hpp>

#include "palm/nut-sql.hpp"
#include "palm/nut.hpp"

BOOST_AUTO_TEST_CASE(rss) {
  palm::rss::Channel ch;
  {
    ch.title = "ttt";
    ch.description = "ddd";
    ch.link = "/blabla";
    ch.copyright = "ccc";
    ch.ttl = std::chrono::days(1);

    {
      ch.pub_date.tm_year = 2022;
      ch.pub_date.tm_mon = 10;
      ch.pub_date.tm_mday = 12;
      ch.pub_date.tm_hour = 21;
      ch.pub_date.tm_min = 43;
      ch.pub_date.tm_sec = 32;
    }
    {
      ch.last_build_date.tm_year = 2022;
      ch.last_build_date.tm_mon = 11;
      ch.last_build_date.tm_mday = 14;
      ch.last_build_date.tm_hour = 12;
      ch.last_build_date.tm_min = 34;
      ch.last_build_date.tm_sec = 56;
    }

    for (int i = 1; i < 5; i++) {
      palm::rss::Item it;
      {
        std::stringstream ss;
        ss << "item t." << i;
        it.title = ss.str();
      }
      {
        std::stringstream ss;
        ss << "item d." << i;
        it.description = ss.str();
      }
      {
        std::stringstream ss;
        ss << "/items/" << i;
        it.link = ss.str();
      }
      {
        std::stringstream ss;
        ss << "item-guid." << i;
        it.guid = ss.str();
      }
      {
        it.pub_date.tm_year = 2022;
        it.pub_date.tm_mon = i % 10;
        it.pub_date.tm_mday = 12;
        it.pub_date.tm_hour = 21;
        it.pub_date.tm_min = 43;
        it.pub_date.tm_sec = 32;
      }
      ch.items.push_back(it);
    }
  }

  std::cout << ch.build("https://www.change-me.com") << std::endl;
}

BOOST_AUTO_TEST_CASE(sitemap_index) {
  palm::sitemap::SitemapIndex index;
  for (int i = 1; i < 5; i++) {
    palm::sitemap::Sitemap it;
    {
      std::stringstream ss;
      ss << "/items/" << i;
      it.loc = ss.str();
    }

    {
      std::tm now;
      now.tm_year = 2022;
      now.tm_mon = i % 10;
      now.tm_mday = 12;
      now.tm_hour = 21;
      now.tm_min = 43;
      now.tm_sec = 32;
      it.last_mod = now;
    }
    index.items.push_back(it);
  }

  std::cout << index.build("https://www.change-me.com") << std::endl;
}

BOOST_AUTO_TEST_CASE(sitemap_urlset) {
  palm::sitemap::UrlSet url_set;
  for (int i = 1; i < 5; i++) {
    palm::sitemap::Url it;
    {
      std::stringstream ss;
      ss << "/items/" << i;
      it.loc = ss.str();
    }

    it.change_freq = static_cast<palm::sitemap::ChangeFreq>(i % 7);
    it.priority = i * 0.1;
    {
      std::tm now;
      now.tm_year = 22;
      now.tm_mon = i % 10;
      now.tm_mday = 12;
      now.tm_hour = 21;
      now.tm_min = 43;
      now.tm_sec = 32;
      it.last_mod = now;
    }
    url_set.items.push_back(it);
  }

  std::cout << url_set.build("https://www.change-me.com") << std::endl;
}

BOOST_AUTO_TEST_CASE(string) {
  std::cout << palm::nut::dao::locale::CREATE << std::endl;
}

BOOST_AUTO_TEST_CASE(baidu) {
  std::cout << palm::nut::dao::baidu::ping_request_body(
                   "https://www.change-me.com", "en-US", "Hello")
            << std::endl;
}

BOOST_AUTO_TEST_CASE(datetime) {
  {
    const std::time_t now_t = std::time(nullptr);
    const auto now = std::localtime(&now_t);
    std::tm nbf{};
    {
      nbf.tm_year = now->tm_year;
      nbf.tm_mon = now->tm_mon;
      nbf.tm_mday = now->tm_mday;
    }
    std::tm exp{};
    {
      exp.tm_year = now->tm_year + 1000;
      exp.tm_mon = now->tm_mon;
      exp.tm_mday = now->tm_mday;
    }
    std::cout << std::asctime(&nbf) << std::asctime(&exp) << std::endl;
  }
  {
    const std::time_t nbf_t = std::time(nullptr);
    std::tm* nbf = std::localtime(&nbf_t);
    nbf->tm_year += 1;
    std::cout << nbf_t << "\t" << nbf->tm_year << "\t" << std::asctime(nbf)
              << std::endl;

    const std::time_t exp_t = std::time(nullptr);
    std::tm* exp = std::localtime(&exp_t);
    exp->tm_year += 1000;
    std::cout << nbf_t << "\t" << nbf->tm_year << "\t" << exp->tm_year
              << std::endl;
    std::cout << nbf_t << "\t" << std::asctime(nbf) << exp_t << "\t"
              << std::asctime(exp) << std::endl;
  }
  {
    const auto now = std::chrono::system_clock::now();
    std::time_t nbf_t = std::chrono::system_clock::to_time_t(now);
    std::tm* nbf = std::localtime(&nbf_t);
    nbf->tm_year += 1;
    std::cout << nbf_t << "\t" << std::put_time(nbf, "%c %Z") << "\t"
              << std::asctime(nbf) << std::endl;

    std::time_t exp_t = std::chrono::system_clock::to_time_t(now);
    std::tm* exp = std::localtime(&exp_t);
    exp->tm_year += 1000;
    std::cout << nbf_t << "\t" << std::put_time(nbf, "%c %Z") << "\t"
              << std::asctime(nbf) << exp_t << "\t"
              << std::put_time(exp, "%c %Z") << "\t" << std::asctime(exp)
              << std::endl;
  }
}

BOOST_AUTO_TEST_CASE(type_name) {
  int32_t i32 = 1;
  float f = 1.0;
  double d = 2.0;
  std::optional<size_t> opt_sz;

  toml::table tt;
  {
    tt.insert("name", "testing");
    tt.insert("virtual-host", "testing");
  }
  palm::MySql my(tt);
  std::optional<palm::rabbitmq::Config> opt_pr;
  palm::rabbitmq::Config opt(tt);

  std::cout << "int32_t: " << typeid(i32).name() << "\t"
            << boost::typeindex::type_id_with_cvr<int32_t>().pretty_name()
            << "\nfloat: " << typeid(f).name() << "\t"
            << boost::typeindex::type_id_with_cvr<float>().pretty_name()
            << "\ndouble: " << typeid(d).name() << "\t"
            << boost::typeindex::type_id_with_cvr<double>().pretty_name()
            << "\nstd::optional<size_t>: " << typeid(opt_sz).name() << "\t"
            << boost::typeindex::type_id_with_cvr<size_t>().pretty_name()
            << "\ntoml::table: " << typeid(tt).name() << "\t"
            << boost::typeindex::type_id_with_cvr<toml::table>().pretty_name()
            << "\npalm::MySql: " << typeid(my).name() << "\t"
            << boost::typeindex::type_id_with_cvr<palm::MySql>().pretty_name()
            << "\nstd::optional<palm::rabbitmq::Config>: "
            << typeid(opt_pr).name() << "\t"
            << boost::typeindex::type_id_with_cvr<
                   std::optional<palm::rabbitmq::Config>>()
                   .pretty_name()
            << "\npalm::rabbitmq::Config: " << typeid(opt).name() << "\t"
            << boost::typeindex::type_id_with_cvr<palm::rabbitmq::Config>()
                   .pretty_name()
            << "\t"
            << boost::typeindex::type_id_with_cvr<palm::rabbitmq::Config*>()
                   .pretty_name()
            << std::endl;
}

BOOST_AUTO_TEST_CASE(command) {
  {
    std::cout << "ls aaa" << std::endl;
    const auto ok = std::system("cd /tmp && ls -l > aaa.log");
    BOOST_TEST(ok == 0);
  }
  {
    std::cout << "cd" << std::endl;
    const auto ok = chdir("/tmp");
    BOOST_TEST(ok == 0);
  }

  {
    std::cout << "ls bbb" << std::endl;
    const auto ok = std::system("ls -l > bbb.log");
    BOOST_TEST(ok == 0);
  }

  {
    std::cout << "echo" << std::endl;
    const auto ok = std::system("echo 'hello' | wc >> tmp.log");
    BOOST_TEST(ok == 0);
  }
}

BOOST_AUTO_TEST_CASE(path) {
  {
    std::filesystem::path nginx("/var/logs/nginx");

    {
      auto access_log = nginx / "access.log";
      std::cout << access_log.string() << std::endl;

      for (const auto& ext : {"sql", "ini", "tar.xz"}) {
        access_log.replace_extension(ext);
        std::cout << ext << ": " << access_log << std::endl;
      }
    }
  }
}
