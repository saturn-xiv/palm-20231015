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
#include <unordered_map>
#include <utility>
#include <variant>
#include <vector>

#include <google/protobuf/arena.h>
#include <spdlog/spdlog.h>
#include <nlohmann/json.hpp>

#define TOML_EXCEPTIONS 1
#include <toml++/toml.h>

namespace palm {
inline static const std::string BASH_HEADER = R"SHELL(#!/bin/bash
set -e      
)SHELL";

inline static const std::string BASH_FOOTER = R"SHELL(
echo 'done.'
exit 0
)SHELL";

namespace http {
namespace status {
constexpr int BAD_REQUEST = 400;
constexpr int INTERNAL_SERVER_ERROR = 500;
constexpr int NOT_FOUND = 404;
constexpr int FORBIDDEN = 403;
constexpr int OK = 200;
}  // namespace status

namespace header {
inline static const std::string AUTHORIZATION = "Authorization";
inline static const std::string BEARER = "Bearer ";
inline static const std::string CONTENT_TYPE = "Content-Type";
}  // namespace header
namespace content_type {
inline static const std::string TEXT_HTML = "text/html; charset=utf-8";
inline static const std::string TEXT_PLAIN = "text/plain; charset=utf-8";
inline static const std::string APPLICATION_JSON = "application/json";
inline static const std::string APPLICATION_OCTET_STREAM =
    "application/octet-stream";
inline static const std::string GRPC = "application/grpc";
}  // namespace content_type

}  // namespace http
}  // namespace palm
