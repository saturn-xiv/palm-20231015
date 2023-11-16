#pragma once

#include <chrono>
#include <string>
#include <vector>

namespace palm {
std::string uuid();
std::string join(const std::vector<std::string> items, const std::string& sep);
std::chrono::system_clock::time_point to_time_point(const std::string& s);
}  // namespace palm
