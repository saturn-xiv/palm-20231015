#pragma once

#include "palm/utils.hpp"

#include <openssl/hmac.h>
#include <openssl/md5.h>
#include <openssl/sha.h>

#include <cppcodec/base64_rfc4648.hpp>
#include <cppcodec/base64_url_unpadded.hpp>

namespace palm {
std::string uuid();
// https://en.gravatar.com/site/implement/hash/
std::string gravatar(const std::string& email);
std::string md5hex(const std::string& s);

namespace random {
std::vector<uint8_t> bytes(const size_t len);
std::string string(const size_t len);
}  // namespace random

namespace base64 {
inline std::string to(const std::vector<uint8_t>& buf) {
  return cppcodec::base64_rfc4648::encode(buf);
}
inline std::vector<uint8_t> from(const std::string& str) {
  return cppcodec::base64_rfc4648::decode(str);
}
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
