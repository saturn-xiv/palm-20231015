#pragma once

#include "loquat/env.hpp"

// TODO
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wdeprecated-declarations"
#include <thrift/Thrift.h>
#pragma GCC diagnostic pop

#include "Aes.h"
#include "Health.h"
#include "Hmac.h"
#include "Jwt.h"

namespace loquat {

namespace application {

struct Tls {
  Tls(const std::string& cert_file, const std::string& key_file,
      const std::string& ca_file)
      : cert_file(cert_file), key_file(key_file), ca_file(ca_file) {}
  std::string cert_file;
  std::string key_file;
  std::string ca_file;
};

void launch(const uint16_t port, const Tls& tls);
}  // namespace application

class AesHandler final : public v1::AesIf {
 public:
  AesHandler() = default;

  void encrypt(std::string& code, const std::string& app_id,
               const std::string& plain) override;
  void decrypt(std::string& plain, const std::string& app_id,
               const std::string& code) override;
};

class HmacHandler final : public v1::HmacIf {
 public:
  HmacHandler() = default;

  void sign(std::string& code, const std::string& app_id,
            const std::string& plain) override;
  void verify(const std::string& app_id, const std::string& code,
              const std::string& plain) override;
};

class JwtHandler final : public v1::JwtIf {
 public:
  JwtHandler() = default;

  void sign(std::string& token, const std::string& app_id,
            const std::string& issuer, const std::string& subject,
            const std::string& audience, const int64_t ttl,
            const std::string& payload) override;
  void verify(v1::JwtVerfifyResponse& response, const std::string& app_id,
              const std::string& token, const std::string& issuer,
              const std::string& audience) override;
};

class HealthHandler final : public v1::HealthIf {
 public:
  HealthHandler() = default;

  void check() override;
};
}  // namespace loquat
