#include "palm/crypto.hpp"

#include <boost/lexical_cast.hpp>
#include <boost/uuid/uuid.hpp>
#include <boost/uuid/uuid_generators.hpp>
#include <boost/uuid/uuid_io.hpp>

#include <openssl/hmac.h>
#include <openssl/md5.h>
#include <openssl/sha.h>
#include <thrift/protocol/TBinaryProtocol.h>
#include <thrift/protocol/TMultiplexedProtocol.h>
#include <thrift/transport/TSocket.h>
#include <thrift/transport/TTransportUtils.h>
#include <cppcodec/base64_rfc4648.hpp>
#include <cppcodec/base64_url_unpadded.hpp>

std::string palm::uuid() {
  boost::uuids::uuid it = boost::uuids::random_generator()();
  return boost::lexical_cast<std::string>(it);
}

std::string palm::gravatar(const std::string& email) {
  const std::string it = palm::to_code(email);
  std::stringstream ss;
  ss << "https://www.gravatar.com/avatar/" << palm::md5hex(it);
  return ss.str();
}

std::string palm::md5hex(const std::string& str) {
  std::string hash;
  {
    const EVP_MD* engine = EVP_md5();

    unsigned int digest_len = EVP_MD_size(engine);
    uint8_t* digest = (uint8_t*)OPENSSL_malloc(digest_len);

    EVP_MD_CTX* ctx = EVP_MD_CTX_new();
    EVP_DigestInit_ex(ctx, engine, NULL);
    EVP_DigestUpdate(ctx, str.c_str(), str.size());
    EVP_DigestFinal_ex(ctx, digest, &digest_len);
    EVP_MD_CTX_free(ctx);

    {
      hash.reserve(digest_len * 2);
      boost::algorithm::hex(digest, digest + digest_len,
                            std::back_inserter(hash));
      boost::algorithm::to_lower(hash);
    }

    OPENSSL_free(digest);
  }
  return hash;
}

int32_t palm::serial::from(const std::string& s) {
  std::string v = s;
  std::reverse(v.begin(), v.end());

  int32_t i = 0;
  int32_t c = 1;
  for (char& it : v) {
    i += CHARS.find(it) * c;
    c *= LEN;
  }

  return i;
}

std::string palm::serial::to(const int32_t i) {
  int32_t v = i;
  std::string s;
  do {
    s.insert(0, std::string(1, CHARS[v % LEN]));
    v /= LEN;
  } while (v > 0);
  return s;
}

int32_t palm::hex::from(const std::string& s) {
  int32_t i;
  std::stringstream ss;
  {
    ss << std::hex << s;
    ss >> i;
  }
  return i;
}

std::string palm::hex::to(const int32_t i, const size_t w) {
  std::ostringstream ss;
  ss << std::setfill('0') << std::setw(w) << std::hex << i;
  return ss.str();
}

std::vector<uint8_t> palm::random::bytes(const size_t len) {
  std::vector<uint8_t> buf;
  buf.resize(len);
  randombytes_buf(&*buf.begin(), len);
  return buf;

  /*
    std::random_device rd;
    std::mt19937 mt(rd());
    std::uniform_int_distribution<uint8_t> dist(0, 255);

    std::vector<uint8_t> buf;
    auto gen = std::bind(dist, mt);
    buf.resize(len);
    std::generate(buf.begin(), buf.end(), gen);
    return buf;
    */
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

uint32_t palm::random::uint32() { return randombytes_random(); }
uint32_t palm::random::uint32(const uint32_t bound) {
  return randombytes_uniform(bound);
}

std::string palm::base64::to(const std::vector<uint8_t>& buf) {
  return cppcodec::base64_rfc4648::encode(buf);
}
std::vector<uint8_t> palm::base64::from(const std::string& str) {
  return cppcodec::base64_rfc4648::decode(str);
}

std::vector<uint8_t> palm::Hmac::sum(const EVP_MD* engine,
                                     const std::vector<uint8_t>& plain,
                                     const std::vector<uint8_t>& salt) const {
  std::vector<uint8_t> hash;

  {
    unsigned int digest_len = EVP_MD_size(engine);
    uint8_t* digest = (uint8_t*)OPENSSL_malloc(digest_len);

    std::vector<uint8_t> buf;
    {
      buf.insert(buf.end(), plain.begin(), plain.end());
      buf.insert(buf.end(), salt.begin(), salt.end());
    }
    HMAC(engine, &*this->key.begin(), this->key.size(), &*buf.begin(),
         buf.size(), digest, &digest_len);

    std::copy(digest, digest + digest_len, std::back_inserter(hash));

    OPENSSL_free(digest);
  }

  return hash;
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
  std::stringstream ss;

  {
    const EVP_MD* engine = EVP_sha512();
    unsigned int digest_len = EVP_MD_size(engine);
    uint8_t* digest = (uint8_t*)OPENSSL_malloc(digest_len);

    EVP_MD_CTX* ctx = EVP_MD_CTX_new();
    EVP_DigestInit_ex(ctx, engine, NULL);

    EVP_DigestUpdate(ctx, plain.c_str(), plain.size());
    EVP_DigestUpdate(ctx, &*salt.begin(), salt.size());

    EVP_DigestFinal_ex(ctx, digest, &digest_len);
    EVP_MD_CTX_free(ctx);

    std::vector<uint8_t> buf;
    {
      std::copy(digest, digest + digest_len, std::back_inserter(buf));
      buf.insert(buf.end(), salt.begin(), salt.end());
    }
    ss << HEADER << palm::base64::to(buf);

    OPENSSL_free(digest);
  }
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
  std::vector<uint8_t> hash;
  {
    const std::string data = header + POT + payload;
    std::vector<uint8_t> buf(data.begin(), data.end());

    const EVP_MD* engine = EVP_sha512();
    unsigned int digest_len = EVP_MD_size(engine);
    uint8_t* digest = (uint8_t*)OPENSSL_malloc(digest_len);

    HMAC(engine, &*this->key.begin(), this->key.size(), &*buf.begin(),
         buf.size(), digest, &digest_len);

    std::copy(digest, digest + digest_len, std::back_inserter(hash));
    OPENSSL_free(digest);
  }

  return cppcodec::base64_url_unpadded::encode(hash);
}

// https://libsodium.gitbook.io/doc/password_hashing/default_phf#key-derivation
std::string palm::hashing::sum(const std::string& plain) {
  char code[crypto_pwhash_STRBYTES];
  /*
    crypto_pwhash_OPSLIMIT_SENSITIVE
    crypto_pwhash_MEMLIMIT_SENSITIVE     12.7s
    crypto_pwhash_OPSLIMIT_MODERATE
    crypto_pwhash_MEMLIMIT_MODERATE       2.38s
    crypto_pwhash_OPSLIMIT_INTERACTIVE crypto_pwhash_MEMLIMIT_INTERACTIVE
    0.39s
  */
  if (crypto_pwhash_str(code, plain.c_str(), plain.size(),
                        crypto_pwhash_OPSLIMIT_MODERATE,
                        crypto_pwhash_MEMLIMIT_MODERATE) != 0) {
    throw std::runtime_error("password hash");
  }
  return code;
}

bool palm::hashing::verify(const std::string& plain, const std::string& code) {
  return crypto_pwhash_str_verify(code.c_str(), plain.c_str(), plain.size()) ==
         0;
}

std::vector<uint8_t> palm::SecretBox::generate_key() {
  std::vector<uint8_t> it;
  it.resize(crypto_secretbox_KEYBYTES);
  crypto_secretbox_keygen(&*it.begin());
  return it;
}
std::pair<std::vector<uint8_t>, std::vector<uint8_t>> palm::SecretBox::encrypt(
    const std::vector<uint8_t>& plain) const {
  std::vector<uint8_t> nonce;
  {
    nonce.resize(crypto_secretbox_NONCEBYTES);
    randombytes_buf(&*nonce.begin(), nonce.size());
  }
  std::vector<uint8_t> code;
  code.resize(crypto_secretbox_MACBYTES + plain.size());
  crypto_secretbox_easy(&*code.begin(), &*plain.begin(), plain.size(),
                        &*nonce.begin(), &*this->_key.begin());
  std::pair<std::vector<uint8_t>, std::vector<uint8_t>> it(code, nonce);
  return it;
}

std::vector<uint8_t> palm::SecretBox::decrypt(
    const std::vector<uint8_t>& code, const std::vector<uint8_t>& nonce) const {
  std::vector<uint8_t> plain;
  plain.resize(code.size() - crypto_secretbox_MACBYTES);
  if (crypto_secretbox_open_easy(&*plain.begin(), &*code.begin(), code.size(),
                                 &*nonce.begin(), &*this->_key.begin()) != 0) {
    throw std::runtime_error("decode encrypted message");
  }
  return plain;
}

palm::loquat::Client::Client(const toml::table& root,
                             const std::string& service) {
  const std::string host = root["host"].value_or("127.0.0.1");
  const uint16_t port = root["port"].value_or(8080);
  this->open(host, port, service);
}

void palm::loquat::Client::open(const std::string& host, const uint16_t port,
                                const std::string& service) {
  std::shared_ptr<apache::thrift::transport::TTransport> socket =
      std::make_shared<apache::thrift::transport::TSocket>(host, port);
  this->_transport =
      std::make_shared<apache::thrift::transport::TFramedTransport>(socket);
  std::shared_ptr<apache::thrift::protocol::TProtocol> protocol =
      std::make_shared<apache::thrift::protocol::TBinaryProtocol>(
          this->_transport);
  this->_protocol =
      std::make_shared<apache::thrift::protocol::TMultiplexedProtocol>(protocol,
                                                                       service);
  this->_transport->open();
}

std::vector<uint8_t> palm::loquat::Aes::encrypt(
    const std::vector<uint8_t>& plain) const {
  std::string p(plain.begin(), plain.end());
  std::string c = this->encrypt(p);
  std::vector<uint8_t> code(c.begin(), c.end());
  return code;
}
std::vector<uint8_t> palm::loquat::Aes::decrypt(
    const std::vector<uint8_t>& code) const {
  std::string c(code.begin(), code.end());
  std::string p = this->decrypt(c);
  std::vector<uint8_t> plain(p.begin(), p.end());
  return plain;
}

std::string palm::loquat::Aes::encrypt(const std::string& plain) const {
  ::loquat::v1::AesClient client(this->_protocol);
  std::string code;
  client.encrypt(code, plain);
  return code;
}
std::string palm::loquat::Aes::decrypt(const std::string& code) const {
  ::loquat::v1::AesClient client(this->_protocol);
  std::string plain;
  client.decrypt(plain, code);
  return plain;
}

std::string palm::loquat::Jwt::sign(const std::string& subject,
                                    const std::optional<std::string> audience,
                                    const std::chrono::seconds& ttl) const {
  ::loquat::v1::JwtClient client(this->_protocol);
  std::string token;
  client.sign(token, subject, audience.value_or(""), ttl.count());
  return token;
}

std::string palm::loquat::Jwt::verify(
    const std::string& token, const std::optional<std::string> audience) const {
  ::loquat::v1::JwtClient client(this->_protocol);
  std::string subject;
  client.verify(subject, token, audience.value_or(""));
  return subject;
}
std::vector<uint8_t> palm::loquat::Hmac::sign(
    const std::vector<uint8_t>& plain, const std::vector<uint8_t> salt) const {
  std::string p(plain.begin(), plain.end());
  std::string s(salt.begin(), salt.end());
  std::string c = this->sign(p, s);
  std::vector<uint8_t> code(c.begin(), c.end());
  return code;
}
void palm::loquat::Hmac::verify(const std::vector<uint8_t>& code,
                                const std::vector<uint8_t>& plain,
                                const std::vector<uint8_t> salt) const {
  std::string c(code.begin(), code.end());
  std::string p(plain.begin(), plain.end());
  std::string s(salt.begin(), salt.end());
  this->verify(c, p, s);
}

std::string palm::loquat::Hmac::sign(
    const std::string& plain, const std::optional<std::string> salt) const {
  ::loquat::v1::HmacClient client(this->_protocol);
  std::string code;
  const std::string p = plain + salt.value_or("");
  client.sign(code, p);
  return code;
}
void palm::loquat::Hmac::verify(const std::string& code,
                                const std::string& plain,
                                const std::optional<std::string> salt) const {
  ::loquat::v1::HmacClient client(this->_protocol);
  const std::string p = plain + salt.value_or("");
  client.verify(code, p);
}

void palm::loquat::Health::check() const {
  ::loquat::v1::HealthClient client(this->_protocol);
  client.check();
}
