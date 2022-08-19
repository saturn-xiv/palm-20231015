#include "palm/search-engine.hpp"

#include <cpr/cpr.h>

palm::opensearch::Config::Config(const toml::table& config) {
  this->_host = config["host"].value_or("127.0.0.1");
  this->_port = config["port"].value_or(9200);
  this->_index = config["index"].value<std::string>().value();
  this->_pool_size = config["pool-size"].value_or(32);
  {
    std::size_t it = config["timeout"].value_or(5);
    this->_timeout = std::chrono::seconds(it);
  }
}

palm::opensearch::responses::Info palm::opensearch::Config::info() const {
  cpr::Response res = cpr::Get(cpr::Url{this->url()});
  if (res.status_code != 200) {
    throw std::invalid_argument(res.text);
  }
  return nlohmann::json::parse(res.text);
}
