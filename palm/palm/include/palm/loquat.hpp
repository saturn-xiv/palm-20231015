#pragma once

// TODO
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wdeprecated-declarations"
#include <thrift/Thrift.h>
#pragma GCC diagnostic pop

#include "Aes.h"
#include "Hmac.h"
#include "Jwt.h"
#include "palm/env.hpp"

namespace palm {
namespace loquat {
class Client {
 private:
  std::string host;
  uint16_t port;
  std::string ca_file;
  std::string key_file;
  std::string cert_file;
};
}  // namespace loquat
}  // namespace palm
