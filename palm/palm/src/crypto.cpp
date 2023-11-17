#include "palm/crypto.hpp"

#include <algorithm>
#include <climits>
#include <functional>
#include <iomanip>
#include <random>
#include <sstream>

#include <boost/algorithm/hex.hpp>
#include <boost/lexical_cast.hpp>
#include <boost/uuid/uuid.hpp>
#include <boost/uuid/uuid_generators.hpp>
#include <boost/uuid/uuid_io.hpp>
#include <cppcodec/base64_rfc4648.hpp>
#include <cppcodec/base64_url_unpadded.hpp>

std::string palm::gravatar(const std::string& email) {
  std::string it = boost::algorithm::to_lower_copy(email);
  boost::algorithm::trim(it);
  std::stringstream ss;
  ss << "https://www.gravatar.com/avatar/" << palm::md5hex(it);
  return ss.str();
}

std::string palm::md5hex(const std::string& str) {
  uint8_t buf[MD5_DIGEST_LENGTH];
  {
    MD5_CTX ctx;
    MD5_Init(&ctx);
    MD5_Update(&ctx, str.c_str(), str.size());
    MD5_Final(buf, &ctx);
  }
  std::string hash;
  {
    hash.reserve(MD5_DIGEST_LENGTH * 2);
    boost::algorithm::hex(buf, buf + MD5_DIGEST_LENGTH,
                          std::back_inserter(hash));
    boost::algorithm::to_lower(hash);
  }
  return hash;
}

std::vector<uint8_t> palm::random::bytes(const size_t len) {
  std::random_device rd;
  std::mt19937 mt(rd());
  std::uniform_int_distribution<uint8_t> dist(0, 255);

  std::vector<unsigned char> buf;
  auto gen = std::bind(dist, mt);
  buf.resize(len);
  std::generate(buf.begin(), buf.end(), gen);
  return std::move(buf);
}

std::string palm::random::string(const size_t len) {
  const std::string chars = "0123456789abcdefghijklmnopqrstuvwxyz";
  std::random_device rd;
  std::mt19937 mt(rd());
  std::uniform_int_distribution<uint8_t> dist(0, chars.size() - 1);
  std::stringstream ss;
  for (auto i = 0; i < len; i++) {
    ss << chars[dist(mt)];
  }
  return ss.str();
}

std::string palm::base64::to(const std::vector<uint8_t>& buf) {
  return cppcodec::base64_rfc4648::encode(buf);
}
std::vector<uint8_t> palm::base64::from(const std::string& str) {
  return cppcodec::base64_rfc4648::decode(str);
}

std::vector<uint8_t> palm::Hmac::sum(const EVP_MD* engine,
                                     const std::vector<uint8_t>& plain,
                                     const std::vector<uint8_t>& salt,
                                     const size_t len) const {
  uint8_t it[len];

  // std::vector<uint8_t> buf;
  // {
  //   buf.insert(buf.end(), plain.begin(), plain.end());
  //   buf.insert(buf.end(), salt.begin(), salt.end());
  // }
  HMAC_CTX* hmac = HMAC_CTX_new();
  HMAC_Init_ex(hmac, &*this->key.begin(), this->key.size(), engine, NULL);
  HMAC_Update(hmac, &*plain.begin(), plain.size());
  HMAC_Update(hmac, &*salt.begin(), salt.size());

  unsigned int l = len;
  HMAC_Final(hmac, it, &l);
  HMAC_CTX_free(hmac);

  std::vector<uint8_t> tmp(it, it + len);
  return tmp;
}

palm::Hmac::Hmac(const std::string& key) { this->set_key(key); }

void palm::Hmac::set_key(const std::string& key) {
  this->key = palm::base64::from(key);
}

bool palm::ssha512::verify(const std::string& secret,
                           const std::string& plain) {
  if (secret.size() <= HEADER.size()) {
    return false;
  }

  const auto buf = palm::base64::from(secret.substr(HEADER.size()));
  if (buf.size() <= SHA512_DIGEST_LENGTH) {
    return false;
  }
  const std::vector<uint8_t> salt = {buf.begin() + SHA512_DIGEST_LENGTH,
                                     buf.end()};
  return palm::ssha512::sum(plain, salt) == secret;
}

std::string palm::ssha512::sum(const std::string& plain,
                               const std::vector<uint8_t>& salt) {
  uint8_t hash[SHA512_DIGEST_LENGTH];
  {
    SHA512_CTX ctx;
    SHA512_Init(&ctx);
    SHA512_Update(&ctx, plain.c_str(), plain.size());
    SHA512_Update(&ctx, &*salt.begin(), salt.size());
    SHA512_Final(hash, &ctx);
  }

  std::vector<uint8_t> buf;
  {
    std::copy(hash, hash + SHA512_DIGEST_LENGTH, std::back_inserter(buf));
    buf.insert(buf.end(), salt.begin(), salt.end());
  }
  std::stringstream ss;
  ss << HEADER << palm::base64::to(buf);

  return ss.str();
}
std::string palm::ssha512::sum(const std::string& plain,
                               const size_t salt_len) {
  std::vector<uint8_t> salt = palm::random::bytes(salt_len);
  return palm::ssha512::sum(plain, salt);
}

palm::Aes::Aes(const std::string& key) { this->set_key(key); }

void palm::Aes::set_key(const std::string& key) {
  EVP_add_cipher(EVP_aes_256_cbc());
  this->key = palm::base64::from(key);
  if (this->key.size() != KEY_SIZE) {
    throw std::runtime_error("bad aes key");
  }
}

std::pair<std::vector<uint8_t>, std::vector<uint8_t>> palm::Aes::encrypt(
    const std::vector<uint8_t>& plain) const {
  const auto iv = palm::random::bytes(BLOCK_SIZE);
  EVP_CIPHER_CTX* ctx = EVP_CIPHER_CTX_new();
  if (ctx == nullptr) {
    throw std::runtime_error("init cipher context");
  }
  if (1 != EVP_EncryptInit_ex(ctx, EVP_aes_256_cbc(), nullptr,
                              &*this->key.begin(), &*iv.begin())) {
    throw std::runtime_error("init encrypt");
  }

  std::vector<uint8_t> secret;
  secret.resize(plain.size() + BLOCK_SIZE);
  int len1 = secret.size();
  if (1 != EVP_EncryptUpdate(ctx, &*secret.begin(), &len1, &*plain.begin(),
                             plain.size())) {
    throw std::runtime_error("update encrypt");
  }
  int len2 = secret.size() - len1;

  if (1 != EVP_EncryptFinal_ex(ctx, &*secret.begin() + len1, &len2)) {
    throw std::runtime_error("final encrypt");
  }
  EVP_CIPHER_CTX_free(ctx);
  secret.resize(len1 + len2);
  return std::make_pair(secret, iv);
}
std::vector<uint8_t> palm::Aes::decrypt(const std::vector<uint8_t>& code,
                                        const std::vector<uint8_t>& iv) const {
  if (iv.size() != BLOCK_SIZE) {
    throw std::runtime_error("bad aes iv");
  }

  EVP_CIPHER_CTX* ctx = EVP_CIPHER_CTX_new();
  if (ctx == nullptr) {
    throw std::runtime_error("init cipher context");
  }
  if (1 != EVP_DecryptInit_ex(ctx, EVP_aes_256_cbc(), nullptr,
                              &*this->key.begin(), &*iv.begin())) {
    throw std::runtime_error("init decrypt");
  }

  std::vector<uint8_t> plain;
  plain.resize(code.size());
  int len1 = plain.size();
  if (1 != EVP_DecryptUpdate(ctx, &*plain.begin(), &len1, &*code.begin(),
                             code.size())) {
    throw std::runtime_error("update decrypt");
  }
  int len2 = plain.size() - len1;

  if (1 != EVP_DecryptFinal_ex(ctx, &*plain.begin() + len1, &len2)) {
    throw std::runtime_error("final decrypt");
  }
  EVP_CIPHER_CTX_free(ctx);
  plain.resize(len1 + len2);
  return plain;
}

palm::Jwt::Jwt(const std::string& key) { this->set_key(key); }

void palm::Jwt::set_key(const std::string& key) {
  this->key = palm::base64::from(key);
}

std::tuple<std::string, std::chrono::seconds, nlohmann::json> palm::Jwt::decode(
    const std::string& token, const std::string& subject) const {
  std::vector<std::string> lines;
  boost::split(lines, token, boost::is_any_of(POT));
  if (lines.size() != 3) {
    throw std::runtime_error("bad token");
  }
  const std::string payload = lines.at(1);
  if (lines.at(2) != this->signature(lines.at(0), payload)) {
    throw std::runtime_error("token signature failed");
  }

  const nlohmann::json p =
      nlohmann::json::parse(cppcodec::base64_url_unpadded::decode(payload));
  {
    const std::string it = p[SUBJECT];
    if (it != subject) {
      throw std::runtime_error("bad subject");
    }
  }

  const int64_t now = std::chrono::duration_cast<std::chrono::seconds>(
                          std::chrono::system_clock::now().time_since_epoch())
                          .count();
  const int64_t exp = p[EXPIRE];
  {
    const int64_t nbf = p[NOT_BEFORE];

    if (now < nbf) {
      throw std::runtime_error("token isn't available");
    }

    if (now > exp) {
      throw std::runtime_error("token expired");
    }
  }

  const std::string audience = p[AUDIENCE];
  return std::make_tuple(audience, std::chrono::seconds{(exp - now)}, p);
}

std::string palm::Jwt::encode(const std::string& audience,
                              const std::string& subject,
                              const nlohmann::json& payload,
                              const std::chrono::seconds& ttl) const {
  nlohmann::json h;
  h["alg"] = "HS512";
  h["typ"] = "JWT";
  nlohmann::json p = payload;
  p[SUBJECT] = subject;
  p[AUDIENCE] = audience;

  const auto now = std::chrono::system_clock::now();
  const auto iat =
      std::chrono::duration_cast<std::chrono::seconds>(now.time_since_epoch())
          .count();
  p["iat"] = iat;
  p[NOT_BEFORE] = iat - 1;
  p[EXPIRE] = std::chrono::duration_cast<std::chrono::seconds>(
                  (now + ttl).time_since_epoch())
                  .count();

  std::stringstream ss;
  const std::string hs = cppcodec::base64_url_unpadded::encode(h.dump());
  const std::string ps = cppcodec::base64_url_unpadded::encode(p.dump());
  return hs + POT + ps + POT + this->signature(hs, ps);
}

std::string palm::Jwt::signature(const std::string& header,
                                 const std::string& payload) const {
  const std::string data = header + POT + payload;
  uint8_t it[SHA512_DIGEST_LENGTH];

  {
    std::vector<uint8_t> buf(data.begin(), data.end());

    HMAC_CTX* hmac = HMAC_CTX_new();
    HMAC_Init_ex(hmac, &*this->key.begin(), this->key.size(), EVP_sha512(),
                 NULL);
    HMAC_Update(hmac, &*buf.begin(), buf.size());

    unsigned int l = SHA512_DIGEST_LENGTH;
    HMAC_Final(hmac, it, &l);
    HMAC_CTX_free(hmac);
  }
  std::vector<uint8_t> signature(it, it + SHA512_DIGEST_LENGTH);

  return cppcodec::base64_url_unpadded::encode(signature);
}
