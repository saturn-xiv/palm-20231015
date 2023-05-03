#pragma once

#include <algorithm>
#include <chrono>
#include <cstdlib>
#include <ctime>
#include <filesystem>
#include <fstream>
#include <iomanip>
#include <iostream>
#include <memory>
#include <optional>
#include <ranges>
#include <sstream>
#include <string>
#include <vector>

#include <google/protobuf/arena.h>
#include <spdlog/spdlog.h>

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
}  // namespace palm
