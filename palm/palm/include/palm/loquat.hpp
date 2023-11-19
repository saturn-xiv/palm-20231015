#pragma once

// TODO
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wdeprecated-declarations"
#include <thrift/Thrift.h>
#pragma GCC diagnostic pop

#include <thrift/protocol/TMultiplexedProtocol.h>

#include "Aes.h"
#include "Health.h"
#include "Hmac.h"
#include "Jwt.h"
#include "palm/utils.hpp"

namespace palm {
namespace loquat {
class Config {
 public:
  Config(const toml::table& node);

  inline std::shared_ptr<::loquat::v1::HealthClient> health() const {
    auto protocol = this->open("N6loquat2v18HealthIfE");
    auto it = std::make_shared<::loquat::v1::HealthClient>(protocol);
    return it;
  }
  inline std::shared_ptr<::loquat::v1::AesClient> aes() const {
    auto protocol = this->open("N6loquat2v15AesIfE");
    auto it = std::make_shared<::loquat::v1::AesClient>(protocol);
    return it;
  }
  inline std::shared_ptr<::loquat::v1::HmacClient> hmac() const {
    auto protocol = this->open("N6loquat2v16HmacIfE");
    auto it = std::make_shared<::loquat::v1::HmacClient>(protocol);
    return it;
  }
  inline std::shared_ptr<::loquat::v1::JwtClient> jwt() const {
    auto protocol = this->open("N6loquat2v15JwtIfE");
    auto it = std::make_shared<::loquat::v1::JwtClient>(protocol);
    return it;
  }

 private:
  std::shared_ptr<apache::thrift::protocol::TMultiplexedProtocol> open(
      const std::string& name) const;
  std::string _host;
  uint16_t _port;
  std::string _ca_file;
  std::string _key_file;
  std::string _cert_file;
};
}  // namespace loquat
}  // namespace palm
