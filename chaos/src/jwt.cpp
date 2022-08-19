#include "palm/jwt.hpp"

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
