#include "coconut/web-site.hpp"

#include <fstream>

#include <spdlog/spdlog.h>
#include <inja/inja.hpp>

coconut::web::Config::Config(const toml::table& root) {
  std::optional<std::string_view> theme =
      root["theme"].value<std::string_view>();

  nlohmann::json data;
  data["theme"] = theme.value();

  inja::render("Hello {{ theme }}!", data);
}

void coconut::web::Config::dump(const std::filesystem::path& target,
                                const size_t keep) const {
  // TODO
}
