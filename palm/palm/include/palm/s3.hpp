#pragma once

#include "palm/env.hpp"

#include <miniocpp/client.h>

namespace palm {
namespace minio {
class Config {
 public:
  Config(const std::string& endpoint, const std::string& access_key,
         const std::string& secret_key, const std::string& namespace_)
      : _endpoint(endpoint),
        _access_key(access_key),
        _secret_key(secret_key),
        _namespace(namespace_) {}
  Config(const toml::table& node);

  friend std::ostream& operator<<(std::ostream& os, const Config& it) {
    os << it._endpoint << "/" << it._namespace;
    return os;
  }
  friend class Client;

 private:
  std::string _endpoint;
  std::string _access_key;
  std::string _secret_key;
  std::string _namespace;
};

class Client {
 public:
  Client(const Config& config)
      : _namespace(config._namespace),
        _endpoint(config._endpoint),
        _base_url(config._endpoint),
        _credential_provider(config._access_key, config._secret_key) {}

  std::vector<std::string> list_buckets();
  bool is_bucket_exists(const std::string& bucket);
  void create_bucket(const std::string& bucket,
                     const std::map<std::string, std::string> tags = {},
                     bool is_public = false);
  void remove_bucket(const std::string& bucket);
  std::map<std::string, std::string> get_bucket_tags(const std::string& bucket);

  std::vector<std::string> list_objects(const std::string& bucket);
  void remove_object(const std::string& bucket, const std::string& object);
  bool is_object_exists(const std::string& bucket, const std::string& object);
  std::string get_object_url(const std::string& bucket,
                             const std::string& object);
  std::map<std::string, std::string> get_object_tags(const std::string& bucket,
                                                     const std::string& object);
  std::string get_presigned_object_url(
      const std::string& bucket, const std::string& object,
      const std::chrono::seconds& ttl =
          std::chrono::duration_cast<std::chrono::seconds>(
              std::chrono::days(7)));
  std::string put_object(const std::string& bucket,
                         const std::filesystem::path& file,
                         const std::map<std::string, std::string> tags = {});

 private:
  inline std::string bucket(const std::string& name) {
    return this->_namespace + name;
  }

  std::string _namespace;
  std::string _endpoint;
  ::minio::creds::StaticProvider _credential_provider;
  ::minio::s3::BaseUrl _base_url;
};
}  // namespace minio
}  // namespace palm
