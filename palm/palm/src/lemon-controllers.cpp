#include "palm/lemon/controllers.hpp"
#include "palm/lemon/models.hpp"
#include "palm/utils.hpp"

#include <absl/strings/str_format.h>

void palm::lemon::controllers::setup(httplib::Server& svr,
                                     inja::Environment& theme) {
  svr.Get("/api/desktop", [&](const auto& req, auto& res) {
    palm::lemon::models::Desktop it{
        .siteTitle = "Hello, Lemon!",
        .favicon = "/assets/images/favicon.ico",
        .backgroundImage = "/assets/images/background/windows.png",
    };
    for (int i = 1; i < 20; i++) {
      palm::lemon::models::Icon icon{
          .url = absl::StrFormat("/articles/%d", i),
          .title = absl::StrFormat("Article %d", i),
          .image =
              "/themes/docsy/static/favicons/apple-touch-icon-180x180.png"};
      it.icons.push_back(icon);
    }
    nlohmann::json js(it);
    res.set_content(js.dump(), palm::content_types::APPLICATION_JSON_UTF8);
  });
  // ------------------------------------------------------
  svr.Get("/stop", [&](const auto& req, auto& res) {
    if (palm::is_stopped()) {
      svr.stop();
    }
  });
  svr.Get("/", [&](const auto& req, auto& res) {
    palm::lemon::models::HomePage it{};
    const auto buf = theme.render_file("/home.html", it);
    res.set_content(buf, palm::content_types::TEXT_HTML_UTF8);
  });
  {
    std::map<std::string, std::string> resources = {{"/3rd", "./node_modules"},
                                                    {"/assets", "./assets"},
                                                    {"/themes", "./themes"}};
    for (auto const& [k, v] : resources) {
      spdlog::debug("mount {} => {}", v, k);
      auto status = svr.set_mount_point(k, v);
      if (!status) {
        spdlog::error("couldn't mount {} folder", v);
      }
    }
  }

  svr.set_logger([](const auto& req, const auto& res) {
    std::stringstream params;
    for (auto it = req.params.begin(); it != req.params.end(); it++) {
      params << (it == req.params.begin() ? "?" : "&");
      params << it->first << "=" << it->second;
    }
    spdlog::info("{} {} {}{} {}", req.version, req.method, req.path,
                 params.str(), res.status);
  });

  svr.set_error_handler([&](const auto& req, auto& res) {
    palm::lemon::models::ErrorPage it{.status = res.status};
    const auto buf = theme.render_file("/error.html", it);
    res.set_content(buf, palm::content_types::TEXT_HTML_UTF8);
  });
  svr.set_exception_handler(
      [&](const auto& req, auto& res, std::exception_ptr ep) {
        try {
          std::rethrow_exception(ep);
        } catch (std::exception& e) {
          spdlog::error("{}", e.what());

        } catch (...) {
          spdlog::error("unknown exception");
        }

        {
          res.status = 500;
          res.set_content("Internal Server Error",
                          palm::content_types::TEXT_PLAIN_UTF8);
          // palm::lemon::models::ErrorPage it{.status = res.status};
          // const auto buf = theme.render_file("/error.html", it);
          // res.set_content(buf, palm::content_types::TEXT_HTML_UTF8);
        }
      });
}
