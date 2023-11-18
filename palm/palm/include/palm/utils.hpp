#pragma once
#include "palm/env.hpp"

#include "palm/env.hpp"

#include <filesystem>

#include <boost/core/type_name.hpp>

namespace palm {
std::string uuid();
std::string join(const std::vector<std::string> items, const std::string& sep);
std::chrono::system_clock::time_point to_time_point(const std::string& s);

std::string timestamp();
std::filesystem::path timestamp(const std::filesystem::path& folder,
                                const std::string& prefix,
                                std::optional<std::string> extension);
inline std::filesystem::path timestamp(const std::string& prefix,
                                       std::string extension) {
  return palm::timestamp(std::filesystem::temp_directory_path(), prefix,
                         extension);
}
inline std::filesystem::path timestamp(const std::string& prefix) {
  return palm::timestamp(std::filesystem::temp_directory_path(), prefix,
                         std::nullopt);
}

void init(bool debug);
bool is_stopped();

}  // namespace palm
