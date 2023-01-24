#include "loquat/application.hpp"
#include "loquat/env.hpp"
#include "loquat/service.hpp"

#include <absl/strings/numbers.h>

void loquat::Application::launch() {
  const std::string host = "0.0.0.0";
  SPDLOG_INFO("listen on http://{}:{}", host, this->_port);
  httplib::Server svr;

  svr.Post(R"(/(\w+)/jwt)", [](const httplib::Request& req,
                               httplib::Response& res) {
    if (req.is_multipart_form_data()) {
    }
    const std::string k_aud = "aud";
    const std::string k_ttl = "ttl";

    const std::string id = req.matches[1];
    if (req.has_param(k_aud) && req.has_param(k_ttl)) {
      const auto aud = req.get_param_value(k_aud);
      uint64_t ttl;
      if (absl::SimpleAtoi(req.get_param_value(k_ttl), &ttl)) {
        loquat::Keyset keyset(id);
        const auto token = keyset.jwt_signature(aud, std::chrono::seconds(ttl));
        res.set_content(token, loquat::http::content_type::TEXT_PLAIN);
        return;
      }
    }

    res.status = loquat::http::status::BAD_REQUEST;
  });
  svr.Post(R"(/(\w+)/hash)",
           [](const httplib::Request& req, httplib::Response& res) {
             res.set_content("Hello World hash!", "text/plain");
           });
  svr.Post(R"(/(\w+)/aehd)",
           [](const httplib::Request& req, httplib::Response& res) {
             res.set_content("Hello World aehd!", "text/plain");
           });
  svr.set_logger([](const auto& req, const auto& res) {
    SPDLOG_INFO("{} {} {} {} {}", req.remote_addr, req.version, res.status,
                req.method, req.path);
  });

  svr.listen(host, this->_port);
}
