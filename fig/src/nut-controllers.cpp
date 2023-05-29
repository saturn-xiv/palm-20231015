#include "palm/nut-controllers.hpp"
#include "palm/nut-models.hpp"

void palm::nut::controllers::mount(
    httplib::Server &server, std::shared_ptr<soci::connection_pool> postgresql,
    std::shared_ptr<palm::redis::Pool> redis, std::shared_ptr<palm::Jwt> jwt) {
  server.Get("/",
             [&](const httplib::Request &request, httplib::Response &response) {
               // TODO
               response.set_content("home", "text/plain");
             });
  server.Post("/api/attachments", [&](const httplib::Request &request,
                                      httplib::Response &response) {
    // TODO
    response.set_content("upload attachments", "text/plain");
  });
  server.Get(R"(/([-a-zA-Z]{2,7})/)",
             [&](const httplib::Request &request, httplib::Response &response) {
               // TODO
               soci::session db(*postgresql);
               const auto total = palm::nut::dao::locale::total(db);
               std::stringstream ss;
               ss << "home by lang " << total << " " << request.matches[1];
               response.set_content(ss.str(), "text/plain");
             });
  server.Get("/robots.txt",
             [&](const httplib::Request &request, httplib::Response &response) {
               // TODO
               response.set_content("robots txt", "text/plain");
             });
  server.Get(R"(/google([0-9a-z]+).txt)",
             [&](const httplib::Request &request, httplib::Response &response) {
               // TODO
               response.set_content("index now txt", "text/plain");
             });
  server.Get("/sitemap.xml",
             [&](const httplib::Request &request, httplib::Response &response) {
               // TODO
               response.set_content("site map", "text/plain");
             });
  server.Get(R"(/google([\w]+).html)",
             [&](const httplib::Request &request, httplib::Response &response) {
               // TODO
               response.set_content("google verify html", "text/plain");
             });
  server.Get(R"(/baidu_verify_code-([\w]+).html)",
             [&](const httplib::Request &request, httplib::Response &response) {
               // TODO
               response.set_content("google verify html", "text/plain");
             });
  server.Get(R"(/([-a-zA-Z]{2,7})/rss.xml)",
             [&](const httplib::Request &request, httplib::Response &response) {
               // TODO
               auto numbers = request.matches[1];
               response.set_content(numbers, "text/plain");
             });
  server.Get(R"(/([-a-zA-Z]{2,7})/sitemap.xml)",
             [&](const httplib::Request &request, httplib::Response &response) {
               // TODO
               auto numbers = request.matches[1];
               response.set_content(numbers, "text/plain");
             });
  server.Get(R"(/([-a-zA-Z]{2,7})/leave-words/)",
             [&](const httplib::Request &request, httplib::Response &response) {
               // TODO
               response.set_content("leave-words", "text/plain");
             });
  server.Get(R"(/([-a-zA-Z]{2,7})/tags/)",
             [&](const httplib::Request &request, httplib::Response &response) {
               // TODO
               response.set_content("tags", "text/plain");
             });
  server.Get(R"(/([-a-zA-Z]{2,7})/tags/(\d+))",
             [&](const httplib::Request &request, httplib::Response &response) {
               // TODO
               auto numbers = request.matches[1];
               response.set_content(numbers, "text/plain");
             });
  server.Get(R"(/([-a-zA-Z]{2,7})/categories/)",
             [&](const httplib::Request &request, httplib::Response &response) {
               // TODO
               response.set_content("categories", "text/plain");
             });
  server.Get(R"(/([-a-zA-Z]{2,7})/categories/(\d+))",
             [&](const httplib::Request &request, httplib::Response &response) {
               // TODO
               auto numbers = request.matches[1];
               response.set_content(numbers, "text/plain");
             });
  {
    auto ok = server.set_mount_point("/3rd", "./node_modules");
    if (!ok) {
      BOOST_LOG_TRIVIAL(error) << "mount third assets folder";
    }
  }
  {
    auto ok = server.set_mount_point("/assets", "./assets");
    if (!ok) {
      BOOST_LOG_TRIVIAL(error) << "mount local assets folder";
    }
  }

  server.set_logger([&](const auto &request, const auto &response) {
    std::stringstream ss;
    ss << request.remote_addr << " " << request.version << " " << request.method
       << " " << response.status << " " << request.path;

    if (!request.params.empty()) {
      std::vector<std::string> items;
      for (const auto &[k, v] : request.params) {
        items.push_back(k + "=" + v);
      }
      ss << "?" << boost::algorithm::join(items, "&");
    }
#ifndef NDEBUG
    if (!request.matches.empty()) {
      std::vector<std::string> items;
      for (auto it = request.matches.begin(); it != request.matches.end();
           ++it) {
        items.push_back(*it);
      }
      ss << " [" << boost::algorithm::join(items, ",") << "]";
    }
#endif
    if (response.status == 200) {
      BOOST_LOG_TRIVIAL(info) << ss.str();
    } else {
      BOOST_LOG_TRIVIAL(error) << ss.str();
    }
  });
  server.set_error_handler([&](const auto &request, auto &response) {
    auto fmt = "<p>Error Status: <span style='color:red;'>%d</span></p>";
    char buf[BUFSIZ];
    snprintf(buf, sizeof(buf), fmt, response.status);
    response.set_content(buf, "text/html");
  });
}
