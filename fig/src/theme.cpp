#include "palm/theme.hpp"

#include <boost/log/trivial.hpp>

static void load(inja::Environment& env, const std::filesystem::path& root,
                 const std::string& zone) {
  for (const auto& entry :
       std::filesystem::recursive_directory_iterator(root / zone)) {
    const auto file = entry.path();
    if (std::filesystem::is_regular_file(file)) {
      const auto it = std::filesystem::relative(file, root);
      BOOST_LOG_TRIVIAL(debug) << "register component " << it;
      inja::Template tpl = env.parse_template(it);
      env.include_template(it.string(), tpl);
    }
  }
}

palm::Theme::Theme(const std::filesystem::path& root) : _env{root} {
  BOOST_LOG_TRIVIAL(info) << "load theme from " << root;
  for (const auto& it : {"components", "layouts"}) {
    load(this->_env, root, it);
  }
}
