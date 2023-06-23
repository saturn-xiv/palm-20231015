#include "lemon/application.hpp"

static std::string join_strings(const std::vector<std::string> &items,
                                const char *delim) {
  std::ostringstream imploded;
  std::copy(items.begin(), items.end(),
            std::ostream_iterator<std::string>(imploded, delim));
  return imploded.str();
}

void lemon::Application::launch() const {
  spdlog::info("listen on http://0.0.0.0:{} with theme {}", this->_port,
               magic_enum::enum_name(this->_theme));
  spdlog::debug("use remote data source {}", this->_server);
  auto channel =
      grpc::CreateChannel(this->_server, grpc::InsecureChannelCredentials());
  auto handler = this->handler();

  const std::string html_content_type = "text/html; charset=utf-8";
  const std::string text_content_type = "text/plain; charset=utf-8";
  const std::string xml_content_type = "text/xml";

  httplib::Server server;
  server.Get("/",
             [&](const httplib::Request &request, httplib::Response &response) {
               response.set_content(handler->home(), html_content_type);
             });
  server.Get("/([-a-zA-Z]){2,8}/", [&](const httplib::Request &request,
                                       httplib::Response &response) {
    const std::string lang = request.matches[1].str();
    response.set_content(handler->home_by_lang(lang), html_content_type);
  });
  server.Get(R"(/([-a-zA-Z]{2,8})/cms/articles/(\d+))",
             [&](const httplib::Request &request, httplib::Response &response) {
               auto lang = request.matches[1];
               auto id = request.matches[2];
               std::stringstream ss;
               ss << "lang=" << lang << " "
                  << "id=" << id;
               response.set_content(ss.str(), html_content_type);
             });

  {
    const std::string shared = "/usr/share/palm/";
    {
      auto ok = server.set_mount_point("/3rd",
#ifdef NDEBUG
                                       shared + "node_modules"
#else
                                       "./node_modules"
#endif
      );
      if (!ok) {
        spdlog::error("failed to bind third assets");
      }
    }
    {
      auto ok = server.set_mount_point("/assets",
#ifdef NDEBUG
                                       shared + "assets"
#else
                                       "./assets"
#endif
      );
      if (!ok) {
        spdlog::error("failed to bind local assets");
      }
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
      ss << "?" << join_strings(items, "&");
    }
#ifndef NDEBUG
    if (!request.matches.empty()) {
      std::vector<std::string> items;
      for (auto it = request.matches.begin(); it != request.matches.end();
           ++it) {
        items.push_back(*it);
      }
      ss << " [" << join_strings(items, ",") << "]";
    }
#endif
    if (response.status == 200) {
      spdlog::info("{}", ss.str());
    } else {
      spdlog::error("{}", ss.str());
    }
  });
  server.set_error_handler([&](const auto &request, auto &response) {
    // TODO
    auto fmt = "<p>Error Status: <span style='color:red;'>%d</span></p>";
    char buf[BUFSIZ];
    snprintf(buf, sizeof(buf), fmt, response.status);
    response.set_content(buf, html_content_type);
  });

  server.listen("0.0.0.0", this->_port);
}

std::shared_ptr<lemon::theme::Handler> lemon::Application::handler() const {
  switch (this->_theme) {
    case lemon::Theme::CleanWhite: {
      auto it = std::make_shared<lemon::theme::CleanWhite>(this->_server);
      return it;
    }
    case lemon::Theme::Docsy: {
      auto it = std::make_shared<lemon::theme::Docsy>(this->_server);
      return it;
    }
    case lemon::Theme::Gantry: {
      auto it = std::make_shared<lemon::theme::Gantry>(this->_server);
      return it;
    }
    case lemon::Theme::Hinode: {
      auto it = std::make_shared<lemon::theme::Hinode>(this->_server);
      return it;
    }
    case lemon::Theme::Universal: {
      auto it = std::make_shared<lemon::theme::Universal>(this->_server);
      return it;
    }
    case lemon::Theme::XCorporation: {
      auto it = std::make_shared<lemon::theme::XCorporation>(this->_server);
      return it;
    }
  }
}
