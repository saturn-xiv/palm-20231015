#pragma once

#include <filesystem>
#include <string>

namespace coconut {
std::string timestamp();
void tar(const std::filesystem::path& folder);
void xz(const std::filesystem::path& file);
std::filesystem::path home(const std::filesystem::path& file);
void keep(const std::filesystem::path& target, const size_t count);
}  // namespace coconut
