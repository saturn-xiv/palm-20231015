#pragma once

#include "loquat/env.hpp"

#include "Aes.h"
#include "Hmac.h"
#include "Jwt.h"

namespace loquat {
void launch(const uint16_t port, const size_t worker_count);

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

}  // namespace loquat