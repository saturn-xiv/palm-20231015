#pragma once

#include "palm/env.hpp"

#include <inja/inja.hpp>

namespace palm {
namespace themes {

class Theme {
 public:
  Theme(const std::string& name);

 private:
};

class Bootstrap5 {};
class CleanWhite {};
class Docsy {};
class Gantry5 {};
class Hinode {};
class Universal {};
class XCorporation {};
}  // namespace themes
}  // namespace palm
