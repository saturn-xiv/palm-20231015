#pragma once

#include "palm/utils.hpp"

namespace palm {
namespace opensearch {
namespace responses {
struct InfoVersion {
  std::string build_hash;
  std::tm build_date;
  bool build_snapshot;
  std::string build_type;
  std::string distribution;
  std::string lucene_version;
  std::string minimum_index_compatibility_version;
  std::string minimum_wire_compatibility_version;
  std::string number;
};
NLOHMANN_DEFINE_TYPE_NON_INTRUSIVE(InfoVersion, build_date, build_hash,
                                   build_snapshot, build_type, distribution,
                                   lucene_version,
                                   minimum_index_compatibility_version,
                                   minimum_wire_compatibility_version, number)

struct Info {
  std::string cluster_name;
  std::string cluster_uuid;
  std::string name;
  std::string tagline;
  InfoVersion version;
};
NLOHMANN_DEFINE_TYPE_NON_INTRUSIVE(Info, cluster_name, cluster_uuid, name,
                                   tagline, version)

}  // namespace responses

class Config {
 public:
  Config(const std::string& index)
      : _host("127.0.0.1"),
        _port(9200),
        _index(index),
        _timeout(std::chrono::seconds(5)),
        _pool_size(1 << 5) {}
  Config(const toml::table& config);

  inline std::string host() const { return this->_host; }
  inline uint16_t port() const { return this->_port; }
  inline std::string index() const { return this->_index; }
  inline std::chrono::seconds timeout() const { return this->_timeout; }
  inline size_t pool_size() const { return this->_pool_size; }

  inline std::string url() const {
    std::stringstream ss;
    ss << "http://" << this->_host << ":" << this->_port;
    return ss.str();
  }

  responses::Info info() const;

 private:
  std::string _host;
  uint16_t _port;
  std::string _index;
  std::chrono::seconds _timeout;
  size_t _pool_size;
};
}  // namespace opensearch
}  // namespace palm
