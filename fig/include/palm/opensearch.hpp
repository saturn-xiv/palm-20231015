#pragma once

#include "palm/env.hpp"

#include <boost/log/trivial.hpp>

#include <cpr/cpr.h>
#include <toml++/toml.h>

namespace palm {
namespace opensearch {

namespace info_response {
struct Version {
  std::string distribution;
  std::string number;
  std::string build_type;
  std::string build_hash;
  std::string build_date;
  bool build_snapshot;
  std::string lucene_version;
  std::string minimum_wire_compatibility_version;
  std::string minimum_index_compatibility_version;
};
NLOHMANN_DEFINE_TYPE_NON_INTRUSIVE(Version, distribution, number, build_type,
                                   build_hash, build_date, build_snapshot,
                                   lucene_version,
                                   minimum_wire_compatibility_version,
                                   minimum_index_compatibility_version)

struct Item {
  std::string name;
  std::string cluster_name;
  std::string cluster_uuid;
  Version version;
  std::string tagline;
};
NLOHMANN_DEFINE_TYPE_NON_INTRUSIVE(Item, name, cluster_name, cluster_uuid,
                                   version, tagline)

}  // namespace info_response

struct Plugin {
  std::string node;
  std::string name;
  std::string version;
};
NLOHMANN_DEFINE_TYPE_NON_INTRUSIVE(Plugin, node, name, version)

class Config {
 public:
  Config(const toml::table& root);
  std::vector<Plugin> plugins() const;
  inline std::optional<std::string> get_text(
      const std::string& path, const cpr::Parameters& parameters = {}) const {
    BOOST_LOG_TRIVIAL(debug) << "opensearch GET " << path;
    cpr::Response response =
        cpr::Get(this->url(path), this->authentication(), parameters);
    if (response.status_code != cpr::status::HTTP_OK) {
      BOOST_LOG_TRIVIAL(error) << response.text;
      return std::nullopt;
    }
    BOOST_LOG_TRIVIAL(debug) << response.text;
    return response.text;
  }

  inline std::optional<info_response::Item> info() const {
    return this->get_json<info_response::Item>("/");
  }

  template <class T>
  inline std::optional<T> get_json(
      const std::string& path, const cpr::Parameters& parameters = {}) const {
    BOOST_LOG_TRIVIAL(debug)
        << "opensearch GET("
        << boost::typeindex::type_id_with_cvr<T>().pretty_name() << ") "
        << path;
    cpr::Response response =
        cpr::Get(this->url(path), this->authentication(), parameters);
    if (response.status_code != cpr::status::HTTP_OK) {
      BOOST_LOG_TRIVIAL(error) << response.text;
      return std::nullopt;
    }
    BOOST_LOG_TRIVIAL(debug) << response.text;
    auto js = nlohmann::json::parse(response.text);

    T it;
    nlohmann::from_json(js, it);

    return it;
  }

 private:
  inline cpr::Url url(const std::string& path) const {
    return cpr::Url{this->_host + path};
  }
  inline cpr::Authentication authentication() const {
    return cpr::Authentication{this->_user, this->_password,
                               cpr::AuthMode::BASIC};
  }
  std::string _host;
  std::string _user;
  std::string _password;
  std::string _namespace;
};
}  // namespace opensearch
}  // namespace palm
