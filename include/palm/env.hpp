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
#include <sstream>
#include <string>
#include <vector>

#include <google/protobuf/arena.h>
#include <spdlog/spdlog.h>

#define TOML_EXCEPTIONS 1
#include <toml++/toml.h>
