#pragma once

#include "palm/env.hpp"

namespace palm {
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
}  // namespace palm
