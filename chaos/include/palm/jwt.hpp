#pragma once

#include "palm/crypto.hpp"

#include <grpcpp/grpcpp.h>

namespace palm {

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
}  // namespace palm
