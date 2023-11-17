#pragma once

#include "palm/env.hpp"

#include <chrono>
#include <memory>
#include <optional>
#include <string>
#include <unordered_map>
#include <vector>

#include <Poco/JWT/Signer.h>
#include <Poco/JWT/Token.h>
#include <grpcpp/grpcpp.h>
#include <openssl/hmac.h>
#include <openssl/md5.h>
#include <openssl/sha.h>
#include <boost/algorithm/string.hpp>
#include <nlohmann/json.hpp>

namespace palm {
// https://en.gravatar.com/site/implement/hash/
std::string gravatar(const std::string& email);
std::string md5hex(const std::string& s);

namespace random {
std::vector<uint8_t> bytes(const size_t len);
std::string string(const size_t len);
}  // namespace random
namespace base64 {
std::string to(const std::vector<uint8_t>& buf);
std::vector<uint8_t> from(const std::string& str);
}  // namespace base64

class Hmac {
 public:
  Hmac(const std::string& key);
  Hmac(Hmac const&) = delete;
  void operator=(Hmac const&) = delete;

  void set_key(const std::string& key);

  static Hmac& instance() {
    static Hmac it;
    return it;
  }
  inline std::vector<uint8_t> sha512(const std::vector<uint8_t>& plain,
                                     const std::vector<uint8_t>& salt) const {
    return this->sum(EVP_sha512(), plain, salt, SHA512_DIGEST_LENGTH);
  }
  inline std::vector<uint8_t> sha384(const std::vector<uint8_t>& plain,
                                     const std::vector<uint8_t>& salt) const {
    return this->sum(EVP_sha384(), plain, salt, SHA384_DIGEST_LENGTH);
  }
  inline std::vector<uint8_t> sha256(const std::vector<uint8_t>& plain,
                                     const std::vector<uint8_t>& salt) const {
    return this->sum(EVP_sha256(), plain, salt, SHA256_DIGEST_LENGTH);
  }
  inline std::vector<uint8_t> sha224(const std::vector<uint8_t>& plain,
                                     const std::vector<uint8_t>& salt) const {
    return this->sum(EVP_sha224(), plain, salt, SHA224_DIGEST_LENGTH);
  }

  inline std::vector<uint8_t> md5(const std::vector<uint8_t>& plain,
                                  const std::vector<uint8_t>& salt) const {
    return this->sum(EVP_md5(), plain, salt, MD5_DIGEST_LENGTH);
  }

 private:
  Hmac() {}
  std::vector<uint8_t> sum(const EVP_MD* engine,
                           const std::vector<uint8_t>& plain,
                           const std::vector<uint8_t>& salt,
                           const size_t len) const;

  std::vector<uint8_t> key;
};
namespace ssha512 {

// https://wiki.dovecot.org/HowTo/ConvertPasswordSchemes
// https://mad9scientist.com/dovecot-password-creation-php/
std::string sum(const std::string& plain, const size_t salt_len);
std::string sum(const std::string& plain, const std::vector<uint8_t>& salt);
bool verify(const std::string& secret, const std::string& plain);
const static std::string HEADER = "{SSHA512}";
}  // namespace ssha512

class Jwt {
 public:
  Jwt(const std::string& key);
  Jwt(Jwt const&) = delete;
  void operator=(Jwt const&) = delete;

  void set_key(const std::string& key);

  static Jwt& instance() {
    static Jwt it;
    return it;
  }
  std::string encode(const std::string& audience, const std::string& subject,
                     const nlohmann::json& payload,
                     const std::chrono::seconds& ttl) const;
  std::tuple<std::string, std::chrono::seconds, nlohmann::json> decode(
      const std::string& token, const std::string& subject) const;

  inline static std::optional<std::string> token(
      const grpc::ServerContext* context) {
    const auto meta = context->client_metadata();
    for (auto it = meta.find(boost::algorithm::to_lower_copy(AUTHORIZATION));
         it != meta.end(); it++) {
      std::string val = it->second.data();
      if (val.find(BEARER) == 0) {
        return val.substr(BEARER.size());
      }
    }
    return std::nullopt;
  }
  inline static void token(grpc::ClientContext* context,
                           const std::string& token) {
    context->AddMetadata(boost::algorithm::to_lower_copy(AUTHORIZATION),
                         BEARER + token);
  }

 private:
  Jwt() {}
  std::string signature(const std::string& header,
                        const std::string& payload) const;

  inline static const std::string AUTHORIZATION = "Authorization";
  inline static const std::string BEARER = "Bearer ";
  inline static const std::string POT = ".";
  inline static const std::string AUDIENCE = "aud";
  inline static const std::string SUBJECT = "sub";
  inline static const std::string EXPIRE = "exp";
  inline static const std::string NOT_BEFORE = "nbf";
  std::vector<uint8_t> key;
};
// https://wiki.openssl.org/index.php/EVP_Symmetric_Encryption_and_Decryption
class Aes {
 public:
  Aes(const std::string& key);
  Aes(Aes const&) = delete;
  void operator=(Aes const&) = delete;

  void set_key(const std::string& key);

  static Aes& instance() {
    static Aes it;
    return it;
  }

  std::pair<std::vector<uint8_t>, std::vector<uint8_t>> encrypt(
      const std::vector<uint8_t>& plain) const;
  std::vector<uint8_t> decrypt(const std::vector<uint8_t>& code,
                               const std::vector<uint8_t>& iv) const;
  static const size_t KEY_SIZE = 256 / 8;
  static const size_t BLOCK_SIZE = 128 / 8;

 private:
  Aes() {}
  std::vector<uint8_t> key;
};
}  // namespace palm
