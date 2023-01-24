#pragma once

#include <chrono>
#include <filesystem>
#include <mutex>
#include <string>

#include <spdlog/spdlog.h>
#include <tink/aead/aead_key_templates.h>
#include <tink/keyset_handle.h>

namespace loquat {
namespace http {
namespace status {
constexpr int BAD_REQUEST = 400;
constexpr int INTERNAL_SERVER_ERROR = 500;
constexpr int NOT_FOUND = 404;
}  // namespace status

namespace content_type {
inline static const std::string TEXT_HTML = "text/html; charset=utf-8";
inline static const std::string TEXT_PLAIN = "text/plain; charset=utf-8";
inline static const std::string APPLICATION_JSON = "application/json";
}  // namespace content_type

}  // namespace http

class Keyset {
 public:
  Keyset(const std::string& name) : _name(name) {}
  std::string jwt_signature(const std::string& audience,
                            const std::chrono::seconds& ttl);
  std::optional<std::string> verified_jwt(const std::string& token);

 private:
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
    }
  }
  std::string _name;
  std::mutex _locker;
};

}  // namespace loquat
