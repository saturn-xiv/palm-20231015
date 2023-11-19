#pragma once

#include "palm/env.hpp"

#include <filesystem>
#include <fstream>
#include <iostream>
#include <sstream>

#include <boost/core/type_name.hpp>

#include <grpcpp/security/credentials.h>
#include <grpcpp/security/server_credentials.h>

namespace palm {
std::string uuid();
std::string join(const std::vector<std::string> items, const std::string& sep);
std::chrono::system_clock::time_point to_time_point(const std::string& s);

std::string timestamp();
std::filesystem::path timestamp(const std::filesystem::path& folder,
                                const std::string& prefix,
                                std::optional<std::string> extension);
inline std::filesystem::path timestamp(const std::string& prefix,
                                       std::string extension) {
  return palm::timestamp(std::filesystem::temp_directory_path(), prefix,
                         extension);
}
inline std::filesystem::path timestamp(const std::string& prefix) {
  return palm::timestamp(std::filesystem::temp_directory_path(), prefix,
                         std::nullopt);
}

void init(bool debug);
bool is_stopped();

inline std::string read(const std::string& file) {
  std::ifstream f(file);
  std::string s((std::istreambuf_iterator<char>(f)),
                std::istreambuf_iterator<char>());
  return s;
}

class Tls {
 public:
  Tls(const std::string& key_file, const std::string& cert_file,
      const std::string& ca_file)
      : _key_file(key_file), _cert_file(cert_file), _ca_file(ca_file) {}
  Tls(const toml::table& node);

  grpc::SslServerCredentialsOptions grpc_server_ssl_credentials_options() const;
  grpc::SslCredentialsOptions grpc_client_ssl_credentials_options() const;

 private:
  std::string _key_file;
  std::string _cert_file;
  std::string _ca_file;
};

struct RpcClientConfig {
  RpcClientConfig(const toml::table& node);
  inline std::string target() const {
    std::stringstream ss;
    ss << this->host << ":" << this->port;
    return ss.str();
  }

  std::string host;
  uint16_t port;
  palm::Tls tls;
};

}  // namespace palm
