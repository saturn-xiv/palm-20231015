#include "palm/opensearch.hpp"

#include <boost/algorithm/string.hpp>

palm::opensearch::Config::Config(const toml::table& root) {
  this->_host = root["host"].value_or("http://localhost:9200");
  this->_user = root["user"].value_or("admin");
  this->_password = root["password"].value_or("admin");
  this->_namespace = root["namespace"].value<std::string>().value();
}

std::vector<palm::opensearch::Plugin> palm::opensearch::Config::plugins()
    const {
  std::vector<palm::opensearch::Plugin> items;

  {
    const auto body = this->get_text("/_cat/plugins");
    std::vector<std::string> lines;
    boost::split(lines, body.value(), boost::is_any_of("\n"));
    for (auto& line : lines) {
      boost::algorithm::trim(line);
      if (!line.empty()) {
        std::vector<std::string> args;
        boost::split(args, line, boost::is_any_of(" "));
        if (args.size() > 2) {
          palm::opensearch::Plugin it;
          it.node = args.front();
          it.name = args[1];
          it.version = args.back();
          items.push_back(it);
        }
      }
    }
  }
  return items;
}
