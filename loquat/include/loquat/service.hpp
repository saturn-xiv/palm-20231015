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

struct Ssl {
  Ssl(const std::string& cert_file, const std::string& key_file,
      const std::string& ca_file)
      : cert_file(cert_file), key_file(key_file), ca_file(ca_file) {}
  std::string cert_file;
  std::string key_file;
  std::string ca_file;
};

void launch(const uint16_t port, std::optional<Ssl> ssl);
}  // namespace application

class AesHandler final : public v1::AesIf {
 public:
  AesHandler() = default;

  void encrypt(std::string& code, const std::string& auth,
               const std::string& plain) override;
  void decrypt(std::string& plain, const std::string& auth,
               const std::string& code) override;
};

class HmacHandler final : public v1::HmacIf {
 public:
  HmacHandler() = default;

  void sign(std::string& code, const std::string& auth,
            const std::string& plain) override;
  void verify(const std::string& auth, const std::string& code,
              const std::string& plain) override;
};

class JwtHandler final : public v1::JwtIf {
 public:
  JwtHandler() = default;

  void sign(std::string& token, const std::string& auth,
            const std::string& subject, const std::string& action,
            const int64_t ttl) override;
  void verify(std::string& subject, const std::string& auth,
              const std::string& token, const std::string& action) override;
};

class HealthHandler final : public v1::HealthIf {
 public:
  HealthHandler() = default;

  void check(const std::string& auth) override;
};
}  // namespace loquat
