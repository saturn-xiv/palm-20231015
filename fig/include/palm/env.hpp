#pragma once

#include <nlohmann/json.hpp>

namespace palm {
inline static const std::string CONTENT_TYPE_GRPC = "application/grpc";
}

namespace nlohmann {
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
}  // namespace nlohmann
