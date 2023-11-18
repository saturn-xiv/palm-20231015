#include "palm/theme.hpp"

inja::Environment palm::themes::load(const std::string& name) {
  const auto root = std::filesystem::path("./views") / name;
  spdlog::info("load themes from {}", root.string());
  inja::Environment it(root);
  return std::move(it);
}
