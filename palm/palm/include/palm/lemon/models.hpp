#pragma once

#include "palm/theme.hpp"

namespace palm {
namespace lemon {
namespace models {
struct Layout {
  std::string locale;
  std::vector<std::string> languages;
};
NLOHMANN_DEFINE_TYPE_NON_INTRUSIVE(Layout, locale, languages)

struct ErrorPage {
  int status;
  Layout layout;
};
NLOHMANN_DEFINE_TYPE_NON_INTRUSIVE(ErrorPage, layout, status)

struct HomePage {
  Layout layout;
};
NLOHMANN_DEFINE_TYPE_NON_INTRUSIVE(HomePage, layout)

}  // namespace models
}  // namespace lemon
}  // namespace palm
