#pragma once

#include <string>
#include <vector>

namespace palm {
std::string uuid();
std::string join(const std::vector<std::string> items, const std::string& sep);
}  // namespace palm
