#pragma once

#include "coconut/env.hpp"

namespace coconut {
std::string timestamp();
void tar(const std::filesystem::path& folder);
void xz(const std::filesystem::path& file);
std::filesystem::path home(const std::filesystem::path& file);
void keep(const std::filesystem::path& target, const size_t count);
}  // namespace coconut
