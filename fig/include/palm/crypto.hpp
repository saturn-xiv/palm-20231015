#pragma once

#include "palm/env.hpp"

// TODO
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#include <thrift/Thrift.h>
#pragma clang diagnostic pop

#include "Aes.h"
#include "Health.h"
#include "Hmac.h"
#include "Jwt.h"

#include <openssl/evp.h>
#include <thrift/protocol/TProtocol.h>
#include <thrift/transport/TTransport.h>
#include <nlohmann/json.hpp>

namespace palm {

std::string uuid();
// https://en.gravatar.com/site/implement/hash/
std::string gravatar(const std::string& email);
std::string md5hex(const std::string& s);

inline std::string to_code(const std::string& s) {
  std::string it = boost::algorithm::to_lower_copy(s);
  boost::algorithm::trim(it);
  return it;
}

namespace serial {
int32_t from(const std::string& s);
std::string to(const int32_t i);

inline static const std::string CHARS =
    R"RAW(abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ)RAW";
static const size_t LEN = CHARS.size();
}  // namespace serial

namespace hex {
int32_t from(const std::string& s);
std::string to(const int32_t i, const size_t w = 8);
}  // namespace hex

namespace random {
std::vector<uint8_t> bytes(const size_t len);
std::string string(const size_t len);
uint32_t uint32();
uint32_t uint32(const uint32_t bound);
}  // namespace random

namespace base64 {
std::string to(const std::vector<uint8_t>& buf);
std::vector<uint8_t> from(const std::string& str);
}  // namespace base64

namespace protobuf {
template <class T>
std::optional<std::vector<uint8_t>> to(const T* entity) {
  std::string tmp;
  if (!entity->SerializeToString(&tmp)) {
    spdlog::error("serialize {}",
                  boost::typeindex::type_id_with_cvr<T>().pretty_name());
    return std::nullopt;
  }
  std::vector<uint8_t> buf(tmp.begin(), tmp.end());
  return buf;
}
template <class T>
std::optional<T> from(const std::vector<uint8_t>& buffer) {
  std::string tmp(buffer.begin(), buffer.end());
  T it;
  if (!it.ParseFromString(tmp)) {
    spdlog::error("parse {}",
                  boost::typeindex::type_id_with_cvr<T>().pretty_name());
    return std::nullopt;
  }
  return it;
}
}  // namespace protobuf

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
    return this->sum(EVP_sha512(), plain, salt);
  }
  inline std::vector<uint8_t> sha384(const std::vector<uint8_t>& plain,
                                     const std::vector<uint8_t>& salt) const {
    return this->sum(EVP_sha384(), plain, salt);
  }
  inline std::vector<uint8_t> sha256(const std::vector<uint8_t>& plain,
                                     const std::vector<uint8_t>& salt) const {
    return this->sum(EVP_sha256(), plain, salt);
  }
  inline std::vector<uint8_t> sha224(const std::vector<uint8_t>& plain,
                                     const std::vector<uint8_t>& salt) const {
    return this->sum(EVP_sha224(), plain, salt);
  }

  inline std::vector<uint8_t> md5(const std::vector<uint8_t>& plain,
                                  const std::vector<uint8_t>& salt) const {
    return this->sum(EVP_md5(), plain, salt);
  }

 private:
  Hmac() {}
  std::vector<uint8_t> sum(const EVP_MD* engine,
                           const std::vector<uint8_t>& plain,
                           const std::vector<uint8_t>& salt) const;

  std::vector<uint8_t> key;
};

namespace ssha512 {

// https://wiki.dovecot.org/HowTo/ConvertPasswordSchemes
// https://mad9scientist.com/dovecot-password-creation-php/
std::string sum(const std::string& plain, const size_t salt_len);
std::string sum(const std::string& plain, const std::vector<uint8_t>& salt);
bool verify(const std::string& secret, const std::string& plain);
inline const static std::string HEADER = "{SSHA512}";
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
                     const std::chrono::seconds& ttl =
                         std::chrono::duration_cast<std::chrono::seconds>(
                             std::chrono::days(1))) const;
  std::tuple<std::string, std::chrono::seconds, nlohmann::json> decode(
      const std::string& token, const std::string& subject) const;

  inline static std::optional<std::string> token(
      const grpc::ServerContext* context) {
    const auto meta = context->client_metadata();
    for (auto it = meta.find(boost::algorithm::to_lower_copy(AUTHORIZATION));
         it != meta.end(); it++) {
      std::string val = it->second.data();
      if (val.find(BEARER) == std::string::npos) {
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

  inline static const std::string AUTHORIZATION = "Authorization";
  inline static const std::string BEARER = "Bearer ";

 private:
  Jwt() {}
  std::string signature(const std::string& header,
                        const std::string& payload) const;

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

// https://doc.libsodium.org/password_hashing/default_phf
namespace hashing {
std::string sum(const std::string& plain);
bool verify(const std::string& plain, const std::string& code);
}  // namespace hashing

class SecretBox {
 public:
  SecretBox(const std::string& key) : _key(palm::base64::from(key)) {}
  SecretBox(const std::vector<uint8_t>& key) : _key(key) {}

  // https://doc.libsodium.org/secret-key_cryptography/secretbox
  std::pair<std::vector<uint8_t>, std::vector<uint8_t>> encrypt(
      const std::vector<uint8_t>& plain) const;
  std::vector<uint8_t> decrypt(const std::vector<uint8_t>& code,
                               const std::vector<uint8_t>& nonce) const;

  static std::vector<uint8_t> generate_key();

 private:
  std::vector<uint8_t> _key;
};

namespace loquat {

class Client {
 public:
 protected:
  Client(const std::string& host, const uint16_t port,
         const std::string& service) {
    this->open(host, port, service);
  }
  Client(const toml::table& root, const std::string& service);
  ~Client() { this->_transport->close(); }

  std::shared_ptr<apache::thrift::protocol::TProtocol> _protocol;

 private:
  void open(const std::string& host, const uint16_t port,
            const std::string& service);
  std::shared_ptr<apache::thrift::transport::TTransport> _transport;
};

class Aes : public Client {
 public:
  Aes(const std::string& host = "127.0.0.1", const uint16_t port = 8080)
      : Client(host, port, typeid(::loquat::v1::AesIf).name()) {}
  Aes(const toml::table& root)
      : Client(root, typeid(::loquat::v1::AesIf).name()) {}

  std::vector<uint8_t> encrypt(const std::vector<uint8_t>& plain) const;
  std::vector<uint8_t> decrypt(const std::vector<uint8_t>& code) const;
  std::string encrypt(const std::string& plain) const;
  std::string decrypt(const std::string& code) const;
};

class Jwt : public Client {
 public:
  Jwt(const std::string& host = "127.0.0.1", const uint16_t port = 8080)
      : Client(host, port, typeid(::loquat::v1::JwtIf).name()) {}
  Jwt(const toml::table& root)
      : Client(root, typeid(::loquat::v1::JwtIf).name()) {}

  std::string sign(const std::string& subject,
                   const std::optional<std::string> audience = std::nullopt,
                   const std::chrono::seconds& ttl =
                       std::chrono::duration_cast<std::chrono::seconds>(
                           std::chrono::days(1))) const;
  std::string verify(
      const std::string& token,
      const std::optional<std::string> audience = std::nullopt) const;
};
class Hmac : public Client {
 public:
  Hmac(const std::string& host = "127.0.0.1", const uint16_t port = 8080)
      : Client(host, port, typeid(::loquat::v1::HmacIf).name()) {}
  Hmac(const toml::table& root)
      : Client(root, typeid(::loquat::v1::HmacIf).name()) {}

  std::vector<uint8_t> sign(const std::vector<uint8_t>& plain) const;
  void verify(const std::vector<uint8_t>& code,
              const std::vector<uint8_t>& plain) const;
  std::string sign(const std::string& plain) const;
  void verify(const std::string& code, const std::string& plain) const;
};
class Health : public Client {
 public:
  Health(const std::string& host = "127.0.0.1", const uint16_t port = 8080)
      : Client(host, port, typeid(::loquat::v1::HealthIf).name()) {}
  Health(const toml::table& root)
      : Client(root, typeid(::loquat::v1::HealthIf).name()) {}

  void check() const;
};

}  // namespace loquat
}  // namespace palm
