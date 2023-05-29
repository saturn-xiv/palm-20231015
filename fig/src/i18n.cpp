#include "palm/i18n.hpp"
#include "palm/nut-models.hpp"

#include <yaml-cpp/yaml.h>
#include <inja/inja.hpp>

static void loop_yaml(const std::string zone,
                      std::map<std::string, std::string>& items,
                      const YAML::Node& node) {
  const std::string POT = ".";
  switch (node.Type()) {
    case YAML::NodeType::Map:
      for (auto const& it : node) {
        loop_yaml(zone + "." + it.first.as<std::string>(), items, it.second);
      }
      break;
    case YAML::NodeType::Scalar: {
      const std::string value = node.as<std::string>();
      items[zone] = value;
      BOOST_LOG_TRIVIAL(debug) << zone << " = " << value;
    } break;
    default:
      BOOST_LOG_TRIVIAL(warning) << "ignore " << node;
      break;
  }
}

static std::map<std::string, std::string> load(
    const std::filesystem::path& file) {
  BOOST_LOG_TRIVIAL(info) << "load locale items from " << file;
  const std::string zone = file.stem().filename();
  std::map<std::string, std::string> items;

  const std::string ext = file.extension();
  if (ext == ".yml" || ext == ".yaml") {
    YAML::Node node = YAML::LoadFile(file);
    loop_yaml(zone, items, node);
  } else {
    BOOST_LOG_TRIVIAL(debug) << "unknown filetype";
  }

  return items;
}

std::map<std::string, std::map<std::string, std::string>> palm::I18n::sync(
    const std::filesystem::path& root) {
  BOOST_LOG_TRIVIAL(info) << "load locale files from " << root;

  std::map<std::string, std::map<std::string, std::string>> items;

  for (const auto& entry : std::filesystem::directory_iterator(root)) {
    const std::filesystem::path path = entry.path();
    if (std::filesystem::is_directory(path)) {
      const std::string lang = path.filename();
      BOOST_LOG_TRIVIAL(info) << "found language " << lang;
      std::map<std::string, std::string> it;
      items[lang] = it;
    }
  }

  for (const auto& entry : std::filesystem::directory_iterator(root)) {
    const std::filesystem::path path = entry.path();
    if (std::filesystem::is_regular_file(path)) {
      const auto node = load(path);
      for (const auto& [code, message] : node) {
        for (auto& [lang, items] : items) {
          items[code] = message;
        }
      }
    }
  }

  for (auto& [lang, items] : items) {
    for (const auto& entry : std::filesystem::directory_iterator(root / lang)) {
      const std::filesystem::path path = entry.path();
      if (std::filesystem::is_regular_file(path)) {
        const auto node = load(path);
        for (const auto& [code, message] : node) {
          items[code] = message;
        }
      }
    }
  }

  return items;
}

std::string palm::I18n::t(const std::string& lang, const std::string& code) {
  soci::session db(*this->_postgresql);
  const auto it = palm::nut::dao::locale::get(db, lang, code);
  if (it) {
    return it->message;
  }
  return palm::nut::dao::locale::Item::fallback(lang, code);
}

std::string palm::I18n::t(const std::string& lang, const std::string& code,
                          const nlohmann::json& args) {
  soci::session db(*this->_postgresql);
  const auto it = palm::nut::dao::locale::get(db, lang, code);
  if (it) {
    const std::string buf = inja::render(it->message, args);
    return buf;
  }
  return palm::nut::dao::locale::Item::fallback(lang, code);
}
