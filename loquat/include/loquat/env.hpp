#pragma once

#include <chrono>
#include <filesystem>
#include <mutex>

#include <spdlog/spdlog.h>
#include <tink/aead/aead_key_templates.h>
#include <tink/jwt/jwt_mac.h>
#include <tink/keyset_handle.h>

namespace loquat {
namespace http {
namespace status {
constexpr int BAD_REQUEST = 400;
constexpr int INTERNAL_SERVER_ERROR = 500;
constexpr int NOT_FOUND = 404;
constexpr int OK = 200;
}  // namespace status

namespace content_type {
inline static const std::string TEXT_HTML = "text/html; charset=utf-8";
inline static const std::string TEXT_PLAIN = "text/plain; charset=utf-8";
inline static const std::string APPLICATION_JSON = "application/json";
inline static const std::string APPLICATION_OCTET_STREAM =
    "application/octet-stream";
}  // namespace content_type

}  // namespace http

class Config {
 public:
  Config(const std::filesystem::path& file);
  inline uint32_t port() const { return this->_port; }
  inline std::vector<std::string> clients() const { return this->_clients; }

 private:
  uint16_t _port;
  std::optional<std::string> _jwt_secret_key;
  std::vector<std::string> _clients;
};

class Keyset {
 public:
  Keyset(const std::string& name) : _name(name) {}

 protected:
  std::unique_ptr<crypto::tink::KeysetHandle> load(
      const google::crypto::tink::KeyTemplate& tpl);
  inline std::filesystem::path keyset() const {
    std::filesystem::path it(this->_name);
    it.replace_extension(".bin");
    return it;
  }

  template <class T>
  void check(const crypto::tink::util::StatusOr<T>& result) const {
    this->check(result.status());
  }
  inline void check(const crypto::tink::util::Status& status) const {
    const std::string_view it = status.message();
    std::string msg(it.begin(), it.end());
    if (!status.ok()) {
      spdlog::error("{}", msg);
      throw std::runtime_error("");
    }
  }

 private:
  std::string _name;
  std::mutex _locker;
};

class Jwt : public Keyset {
 public:
  Jwt(const std::string& name) : Keyset(name) {}
  std::string sign(const std::string& subject, const std::chrono::seconds& ttl);
  std::string verify(const std::string& token);

 private:
  std::unique_ptr<crypto::tink::JwtMac> load();
};

class HMac : public Keyset {
 public:
  HMac(const std::string& name) : Keyset(name) {}
  std::string sign(const std::string& plain);
  void verify(const std::string& code, const std::string& plain);
};

class Aes : public Keyset {
 public:
  Aes(const std::string& name) : Keyset(name) {}
  std::string encrypt(const std::string& plain);
  std::string decrypt(const std::string& code);

 private:
  std::unique_ptr<crypto::tink::Aead> load();
};
}  // namespace loquat
