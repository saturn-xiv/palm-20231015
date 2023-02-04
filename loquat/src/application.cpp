#include "loquat/application.hpp"
#include "loquat/version.hpp"

#include <absl/strings/numbers.h>
#include <httplib.h>

void loquat::Application::launch(const uint16_t port,
                                 const std::vector<std::string>& clients) {
  const std::string host = "0.0.0.0";
  SPDLOG_INFO("listen on http://{}:{}", host, port);
  httplib::Server svr;

  svr.Post(R"(/(\w+)/jwt/sign)", [](const httplib::Request& req,
                                    httplib::Response& res) {
    const std::string k_subject = "subject";
    const std::string k_ttl = "ttl";
    const std::string id = req.matches[1];

    if (req.has_param(k_subject) && req.has_param(k_ttl)) {
      const auto subject = req.get_param_value(k_subject);
      uint64_t ttl;
      if (absl::SimpleAtoi(req.get_param_value(k_ttl), &ttl)) {
        loquat::Jwt jwt(id);
        const auto token = jwt.sign(subject, std::chrono::seconds(ttl));
        res.set_content(token, palm::http::content_type::TEXT_PLAIN);
        return;
      }
    }
    res.status = palm::http::status::BAD_REQUEST;
  });
  svr.Post(R"(/(\w+)/jwt/verify)",
           [](const httplib::Request& req, httplib::Response& res) {
             const std::string k_token = "token";
             const std::string id = req.matches[1];

             if (req.has_param(k_token)) {
               const auto token = req.get_param_value(k_token);
               loquat::Jwt jwt(id);
               const auto subject = jwt.verify(token);
               res.set_content(subject, palm::http::content_type::TEXT_PLAIN);
               return;
             }

             res.status = palm::http::status::BAD_REQUEST;
           });
  svr.Post(R"(/(\w+)/hmac/sign)", [](const httplib::Request& req,
                                     httplib::Response& res) {
    const std::string k_message = "message";
    const std::string id = req.matches[1];

    if (req.has_param(k_message)) {
      const auto message = req.get_param_value(k_message);

      loquat::HMac mac(id);
      const auto code = mac.sign(message);
      res.set_content(code, palm::http::content_type::APPLICATION_OCTET_STREAM);
      return;
    }

    res.status = palm::http::status::BAD_REQUEST;
  });
  svr.Post(R"(/(\w+)/hmac/verify)",
           [](const httplib::Request& req, httplib::Response& res) {
             const std::string k_code = "code";
             const std::string k_message = "message";
             const std::string id = req.matches[1];

             if (req.has_param(k_code) && req.has_param(k_message)) {
               const auto code = req.get_param_value(k_code);
               const auto message = req.get_param_value(k_message);

               loquat::HMac mac(id);
               mac.verify(code, message);
               res.status = palm::http::status::OK;
               return;
             }

             res.status = palm::http::status::BAD_REQUEST;
           });

  svr.Post(R"(/(\w+)/aes/encrypt)", [](const httplib::Request& req,
                                       httplib::Response& res) {
    const std::string k_message = "message";
    const std::string id = req.matches[1];

    if (req.has_param(k_message)) {
      const auto message = req.get_param_value(k_message);

      loquat::Aes aes(id);
      const auto code = aes.encrypt(message);
      res.set_content(code, palm::http::content_type::APPLICATION_OCTET_STREAM);
      return;
    }

    res.status = palm::http::status::BAD_REQUEST;
  });
  svr.Post(R"(/(\w+)/aes/decrypt)",
           [](const httplib::Request& req, httplib::Response& res) {
             const std::string k_code = "code";
             const std::string id = req.matches[1];

             if (req.has_param(k_code)) {
               const auto code = req.get_param_value(k_code);

               loquat::Aes aes(id);
               const auto message = aes.decrypt(code);
               res.set_content(
                   message, palm::http::content_type::APPLICATION_OCTET_STREAM);
               return;
             }

             res.status = palm::http::status::BAD_REQUEST;
           });

  svr.set_pre_routing_handler([clients](const auto& req, auto& res) {
    if (req.has_header(palm::http::header::AUTHORIZATION)) {
      auto auth = req.get_header_value(palm::http::header::AUTHORIZATION);
      if (auth.starts_with(palm::http::header::BEARER)) {
        const auto token = auth.substr(palm::http::header::BEARER.size());
        loquat::Jwt jwt(palm::PROJECT_NAME);
        const auto subject = jwt.verify(token);
        if (std::find(clients.begin(), clients.end(), subject) !=
            clients.end()) {
          return httplib::Server::HandlerResponse::Unhandled;
        }
        spdlog::error("unknown client {}", subject);
      }
    }
    res.status = palm::http::status::FORBIDDEN;
    return httplib::Server::HandlerResponse::Handled;
  });

  svr.set_logger([](const auto& req, const auto& res) {
    spdlog::info("{} {} {} {} {}", req.remote_addr, req.version, res.status,
                 req.method, req.path);
  });

  svr.listen(host, port);
}
