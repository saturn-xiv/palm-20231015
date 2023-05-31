#pragma once

#include "palm/env.hpp"

#include <google/protobuf/util/json_util.h>

namespace palm {

class Theme {
 public:
  Theme(const std::filesystem::path& folder);
  inline std::string render(const std::filesystem::path& tpl,
                            const nlohmann::json& js) {
    return this->_env.render_file("pages" / tpl, js);
  }
  template <class M>
  std::optional<std::string> render(const std::filesystem::path& tpl,
                                    const M& args) {
    std::string buf;
    const auto status = google::protobuf::util::MessageToJsonString(args, buf);
    if (!status) {
      spdlog::error("serial to json string");
      return std::nullopt;
    }
    const nlohmann::json js = buf;
    return this->render(tpl, js);
  }

 private:
  inja::Environment _env;
  std::string _host;
  uint16_t _port;
};

}  // namespace palm
