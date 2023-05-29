#pragma once

#include "palm/env.hpp"

#include <cpr/cpr.h>
#include <miniocpp/client.h>
#include <toml++/toml.h>

namespace palm {

class Minio {
 public:
  Minio(const toml::table& root);
  Minio(const std::filesystem::path& file);
  Minio(const std::string& host, const uint16_t port, const bool https,
        const std::string& access_key, const std::string& secret_key,
        const std::optional<std::string> region = std::nullopt)
      : _host(host),
        _port(port),
        _https(https),
        _access_key(access_key),
        _secret_key(secret_key),
        _region(region) {}

  // https://github.com/minio/minio/issues/7936
  std::string get(const std::string& bucket, const std::string& name,
                  const std::chrono::seconds& ttl =
                      std::chrono::duration_cast<std::chrono::seconds>(
                          std::chrono::days(7))) const;
  std::vector<std::string> buckets() const;
  void remove(const std::string& bucket, const std::string& name) const;
  bool is_bucket_exist(const std::string& name) const;
  void create_bucket(const std::string& name) const;
  std::string upload(const std::string& bucket,
                     const std::filesystem::path& file) const;

  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
  static std::pair<std::string, std::string> content_type(
      const std::filesystem::path& file);

  static std::string year_month();

 private:
  std::optional<std::string> _region;
  std::string _host;
  uint16_t _port;
  bool _https;
  std::string _access_key;
  std::string _secret_key;
};
}  // namespace palm
