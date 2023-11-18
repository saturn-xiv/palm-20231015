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

struct Icon {
  std::string url;
  std::string title;
  std::string image;
};
NLOHMANN_DEFINE_TYPE_NON_INTRUSIVE(Icon, url, title, image)
struct Desktop {
  std::vector<Icon> icons;
  std::string background;
};
NLOHMANN_DEFINE_TYPE_NON_INTRUSIVE(Desktop, background, icons)
}  // namespace models
}  // namespace lemon
}  // namespace palm
