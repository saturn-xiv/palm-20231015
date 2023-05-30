#pragma once

#include "palm/env.hpp"

#include <sw/redis++/redis++.h>

namespace palm {
namespace redis {
class Pool {
 public:
  Pool(sw::redis::RedisCluster& pool, const std::string& namespace_)
      : _pool(std::move(pool)), _namespace(namespace_) {}

  inline std::optional<std::string> get(const std::string& key) {
    return this->_pool.get(this->key(key));
  }
  template <class K, class V>
  bool get(const K& key, V* entity) {
    std::stringstream ks;
    ks << boost::typeindex::type_id_with_cvr<V>().pretty_name() << "." << key;
    const std::string k = ks.str();
    const auto buf = this->get(k);
    if (buf.has_value()) {
      if (entity->ParseFromString(buf.value())) {
        return true;
      }
      spdlog::error("parse from {}", k);
    }
    return false;
  }
  template <class K, class V>
  std::optional<V> get(const K& key) {
    std::stringstream ks;
    ks << boost::typeindex::type_id_with_cvr<V>().pretty_name() << "." << key;
    const std::string k = ks.str();
    const auto buf = this->get(k);
    if (buf.has_value()) {
      std::optional<V> it = std::make_shared<V>();
      if (it->ParseFromString(buf)) {
        return it;
      }
      spdlog::error("parse from {}", k);
    }
    return std::nullopt;
  }
  inline void set(const std::string& key, const std::string& value,
                  const std::chrono::milliseconds& ttl =
                      std::chrono::duration_cast<std::chrono::milliseconds>(
                          std::chrono::days(1))) {
    this->_pool.set(this->key(key), value, ttl);
  }
  template <class K, class V>
  inline bool set(const K& key, const V& entity,
                  const std::chrono::milliseconds& ttl =
                      std::chrono::duration_cast<std::chrono::milliseconds>(
                          std::chrono::days(1))) {
    std::stringstream ks;
    ks << boost::typeindex::type_id_with_cvr<V>().pretty_name() << "." << key;
    const std::string k = ks.str();
    std::string buf;
    if (entity.SerializeToString(&buf)) {
      this->set(k, buf, ttl);
      return true;
    }
    spdlog::error("serial to {}", k);
    return false;
  }

  std::vector<std::pair<std::string, int64_t>> all();
  void clear();
  std::string info();

 private:
  inline std::string key(const std::string& s) {
    return this->_namespace + "://" + s;
  }

 private:
  std::string _namespace;
  sw::redis::RedisCluster _pool;
};

class Config {
 public:
  Config(const toml::table& root);
  std::shared_ptr<Pool> open();

 private:
  std::string _host;
  uint16_t _port;
  std::string _namespace;
  size_t _pool_size;
};
}  // namespace redis

}  // namespace palm
