#pragma once

#include <bits/stdc++.h>
#include <sys/utsname.h>
#include <unistd.h>
#include <algorithm>
#include <chrono>
#include <climits>
#include <cstdint>
#include <cstdlib>
#include <ctime>
#include <deque>
#include <exception>
#include <filesystem>
#include <fstream>
#include <functional>
#include <iomanip>
#include <iostream>
#include <map>
#include <memory>
#include <mutex>
#include <optional>
#include <random>
#include <ranges>
#include <set>
#include <sstream>
#include <stdexcept>
#include <string>
#include <typeinfo>
#include <unordered_map>
#include <utility>
#include <variant>
#include <vector>

#define TOML_EXCEPTIONS 1
#include <toml++/toml.h>

#include <spdlog/spdlog.h>
#include <tink/aead/aead_key_templates.h>
#include <tink/jwt/jwt_mac.h>
#include <tink/keyset_handle.h>
#include <tink/mac.h>
#include <tink/mac/mac_key_templates.h>
#include <nlohmann/json.hpp>

namespace loquat {

class Config final {
 public:
  Config(const std::filesystem::path& file);
  inline uint32_t port() const { return this->_port; }
  inline std::vector<std::string> clients() const {
    const std::vector<std::string> items(this->_clients.begin(),
                                         this->_clients.end());
    return items;
  }

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
    // std::filesystem::path it(this->_name);
    // it.replace_extension(".bin");
    return this->_name + ".bin";
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

// https://github.com/google/tink/blob/master/docs/JWT-HOWTO.md
class Jwt final : public Keyset {
 public:
  Jwt(const std::string& name) : Keyset(name + ".jwt") {}
  inline std::string sign(const std::string& subject,
                          const std::chrono::seconds& ttl) {
    return this->sign(subject, std::nullopt, ttl);
  }
  std::string sign(const std::string& subject,
                   const std::optional<std::string> audience,
                   const std::chrono::seconds& ttl);
  std::string verify(const std::string& token,
                     const std::optional<std::string> audience);
  inline std::string verify(const std::string& token) {
    return this->verify(token, std::nullopt);
  }

 private:
  std::unique_ptr<crypto::tink::JwtMac> load();
};

class HMac final : public Keyset {
 public:
  HMac(const std::string& name) : Keyset(name + ".mac") {}
  std::string sign(const std::string& plain);
  void verify(const std::string& code, const std::string& plain);

 private:
  std::unique_ptr<crypto::tink::Mac> load();
};

class Aes final : public Keyset {
 public:
  Aes(const std::string& name) : Keyset(name + ".aes") {}
  std::string encrypt(const std::string& plain);
  std::string decrypt(const std::string& code);

 private:
  std::unique_ptr<crypto::tink::Aead> load();
};

std::string auth(const std::string& token);
}  // namespace loquat
