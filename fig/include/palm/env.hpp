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
#include <boost/type_index.hpp>

#include <grpcpp/grpcpp.h>
#include <httplib.h>
#include <sodium.h>
#include <spdlog/spdlog.h>
#include <inja/inja.hpp>
#include <nlohmann/json.hpp>

#define TOML_EXCEPTIONS 1
#include <toml++/toml.h>

// namespace palm {
// inline static const std::string CONTENT_TYPE_GRPC = "application/grpc";
// }

// namespace nlohmann {
// template <typename T>
// struct adl_serializer<std::optional<T>> {
//   static void to_json(json& j, const std::optional<T>& i) {
//     if (i.has_value()) {
//       j = *i;
//     } else {
//       j = nullptr;
//     }
//   }

//   static void from_json(const json& j, std::optional<T>& i) {
//     if (j.is_null()) {
//       i = std::nullopt;
//     } else {
//       i = j.get<T>();
//     }
//   }
// };
// }  // namespace nlohmann
