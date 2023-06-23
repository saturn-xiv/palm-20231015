#pragma once

#include <httplib.h>
#include <spdlog/spdlog.h>
#include <inja/inja.hpp>
#include <magic_enum.hpp>
#include <nlohmann/json.hpp>

#define TOML_EXCEPTIONS 1
#include <toml++/toml.h>

namespace lemon {

enum class Theme : int {
  CleanWhite = 11,
  Docsy = 12,
  Gantry = 13,
  Hinode = 14,
  Universal = 15,
  XCorporation = 16
};

}
