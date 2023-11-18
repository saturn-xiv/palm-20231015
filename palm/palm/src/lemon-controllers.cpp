#include "palm/lemon/controllers.hpp"
#include "palm/lemon/models.hpp"
#include "palm/utils.hpp"

void palm::lemon::controllers::setup(httplib::Server& svr,
                                     inja::Environment& theme) {
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
                                                    {"/assets", "./static"},
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
    spdlog::info("{} {} [{}] {}{} {}", req.version, req.matches.str(),
                 req.method, req.path, params.str(), res.status);
  });

  svr.set_error_handler([&](const auto& req, auto& res) {
    palm::lemon::models::ErrorPage it{.status = res.status};
    const auto buf = theme.render_file("/error.html", it);
    res.set_content(buf, palm::content_types::TEXT_HTML_UTF8);
  });
}
