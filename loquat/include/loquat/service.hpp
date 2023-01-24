#pragma once

#include <httplib.h>
#include <nlohmann/json.hpp>

namespace loquat {
namespace jwt {

class Request {
 private:
  std::string _id;
  std::string _aud;

 public:
  NLOHMANN_DEFINE_TYPE_INTRUSIVE(Request, _id, _aud)
};

}  // namespace jwt
}  // namespace loquat
