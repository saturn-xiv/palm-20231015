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
#include <thread>
#include <typeinfo>
#include <unordered_map>
#include <utility>
#include <variant>
#include <vector>

#include <boost/algorithm/hex.hpp>
#include <boost/algorithm/string.hpp>
#include <boost/algorithm/string/join.hpp>
#include <boost/optional.hpp>
#include <boost/type_index.hpp>

#include <date/date.h>
#include <grpcpp/grpcpp.h>
#include <httplib.h>
#include <sodium.h>
#include <spdlog/spdlog.h>
#include <inja/inja.hpp>
#include <nlohmann/json.hpp>

#define TOML_EXCEPTIONS 1
#include <toml++/toml.h>

namespace palm {
// https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md
inline static const std::string CONTENT_TYPE_GRPC = "application/grpc";
}  // namespace palm

NLOHMANN_JSON_NAMESPACE_BEGIN
template <typename T>
struct adl_serializer<std::optional<T>> {
  static void to_json(json& j, const std::optional<T>& o) {
    if (o == std::nullopt) {
      j = nullptr;
    } else {
      j = *o;
    }
  }
  static void from_json(const json& j, std::optional<T>& o) {
    if (j.is_null()) {
      o = std::nullopt;
    } else {
      o = j.get<T>();
    }
  }
};

template <typename T>
struct adl_serializer<boost::optional<T>> {
  static void to_json(json& j, const boost::optional<T>& o) {
    if (o == boost::none) {
      j = nullptr;
    } else {
      j = *o;
    }
  }

  static void from_json(const json& j, boost::optional<T>& o) {
    if (j.is_null()) {
      o = boost::none;
    } else {
      o = j.get<T>();
    }
  }
};
NLOHMANN_JSON_NAMESPACE_END
