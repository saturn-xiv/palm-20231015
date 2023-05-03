#pragma once

#include "palm/env.hpp"

#include <boost/algorithm/hex.hpp>
#include <boost/algorithm/string.hpp>
#include <boost/algorithm/string/join.hpp>
#include <boost/date_time/local_time/local_time.hpp>
#include <boost/lexical_cast.hpp>
#include <boost/optional.hpp>
#include <boost/range/adaptor/map.hpp>
#include <boost/range/algorithm/copy.hpp>
#include <boost/type_index.hpp>
#include <boost/uuid/detail/md5.hpp>
#include <boost/uuid/uuid.hpp>
#include <boost/uuid/uuid_generators.hpp>
#include <boost/uuid/uuid_io.hpp>

#include <cpr/cpr.h>
#include <google/protobuf/util/time_util.h>
#include <grpcpp/grpcpp.h>
#include <httplib.h>
#include <cppcodec/base64_rfc4648.hpp>
#include <cppcodec/base64_url_unpadded.hpp>
#include <inja/inja.hpp>
#include <magic_enum.hpp>

namespace palm {
class Session {
 public:
  Session(const httplib::Request& request);
  Session(grpc::ServerContext* context);

 private:
  std::string _locale;
  std::string _client_ip;
  std::string _token;
};

template <class T>
inline std::shared_ptr<T> json_response(const cpr::Response& response) {
  if (response.status_code != cpr::status::HTTP_OK) {
    spdlog::error("{} {}", response.status_code, response.text);
    return nullptr;
  }
  spdlog::debug("{}", response.text);
  auto js = nlohmann::json::parse(response.text);
  // nlohmann::json js(response.text);
  std::shared_ptr<T> it = std::make_shared<T>(js);
  return it;
}

}  // namespace palm

// https://nlohmann.github.io/json/features/arbitrary_types/#how-do-i-convert-third-party-types
NLOHMANN_JSON_NAMESPACE_BEGIN

template <typename T>
struct adl_serializer<boost::optional<T>> {
  static void to_json(json& j, const boost::optional<T>& opt) {
    if (opt == boost::none) {
      j = nullptr;
    } else {
      j = *opt;
    }
  }

  static void from_json(const json& j, boost::optional<T>& opt) {
    if (j.is_null()) {
      opt = boost::none;
    } else {
      opt = j.get<T>();
    }
  }
};

template <typename T>
struct adl_serializer<std::optional<T>> {
  static void to_json(json& j, const std::optional<T>& i) {
    if (i.has_value()) {
      j = *i;
    } else {
      j = nullptr;
    }
  }

  static void from_json(const json& j, std::optional<T>& i) {
    if (j.is_null()) {
      i = std::nullopt;
    } else {
      i = j.get<T>();
    }
  }
};

NLOHMANN_JSON_NAMESPACE_END
