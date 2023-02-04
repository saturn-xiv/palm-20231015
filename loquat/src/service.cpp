#include "loquat/service.hpp"
#include "loquat/env.hpp"

std::string loquat::services::echo(rest_rpc::rpc_service::rpc_conn con,
                                   const std::string& message) {
  spdlog::info("call {}", __PRETTY_FUNCTION__);
  return message;
}

std::string loquat::services::jwt::sign(rest_rpc::rpc_service::rpc_conn con,
                                        const std::string& zone,
                                        const std::string& subject,
                                        const size_t ttl) {
  spdlog::info("call {}", __PRETTY_FUNCTION__);
  loquat::Jwt jwt(zone);
  const auto token = jwt.sign(subject, std::chrono::seconds(ttl));
  return token;
}
std::string loquat::services::jwt::verify(rest_rpc::rpc_service::rpc_conn con,
                                          const std::string& zone,
                                          const std::string& token) {
  spdlog::info("call {}", __PRETTY_FUNCTION__);
  loquat::Jwt jwt(zone);
  const auto subject = jwt.verify(token);
  return subject;
}

std::string loquat::services::hmac::sign(rest_rpc::rpc_service::rpc_conn con,
                                         const std::string& zone,
                                         const std::string& plain) {
  spdlog::info("call {}", __PRETTY_FUNCTION__);
  loquat::HMac mac(zone);
  const auto code = mac.sign(plain);
  return code;
}
void loquat::services::hmac::verify(rest_rpc::rpc_service::rpc_conn con,
                                    const std::string& zone,
                                    const std::string& code,
                                    const std::string& plain) {
  spdlog::info("call {}", __PRETTY_FUNCTION__);
  loquat::HMac mac(zone);
  mac.verify(code, plain);
}

std::string loquat::services::aes::encrypt(rest_rpc::rpc_service::rpc_conn con,
                                           const std::string& zone,
                                           const std::string& plain) {
  spdlog::info("call {}", __PRETTY_FUNCTION__);
  loquat::Aes aes(zone);
  const auto code = aes.encrypt(plain);
  return code;
}
std::string loquat::services::aes::decrypt(rest_rpc::rpc_service::rpc_conn con,
                                           const std::string& zone,
                                           const std::string& code) {
  spdlog::info("call {}", __PRETTY_FUNCTION__);
  loquat::Aes aes(zone);
  const auto message = aes.decrypt(code);
  return message;
}
