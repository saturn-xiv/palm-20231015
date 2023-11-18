#include "palm/lemon/controllers.hpp"
#include "palm/utils.hpp"

void palm::lemon::controllers::setup(httplib::Server& svr) {
  svr.Get("/stop", [&](const auto& req, auto& res) {
    if (palm::is_stopped()) {
      svr.stop();
    }
  });
  {
    std::map<std::string, std::string> resources = {{"/3rd", "./node_modules"},
                                                    {"/assets", "./static"}};
    for (auto const& [k, v] : resources) {
      spdlog::debug("mount {} => {}", v, k);
      auto status = svr.set_mount_point(k, v);
      if (!status) {
        spdlog::error("couldn't mount {} folder", v);
      }
    }
  }

  svr.set_logger([](const auto& req, const auto& res) {
    // TODO
    spdlog::info("{} {} {} {}", req.version, req.method, req.path, res.status);
  });

  svr.set_error_handler([](const auto& req, auto& res) {
    auto fmt = "<p>Error Status: <span style='color:red;'>%d</span></p>";
    char buf[BUFSIZ];
    snprintf(buf, sizeof(buf), fmt, res.status);
    res.set_content(buf, "text/html");
  });
}
