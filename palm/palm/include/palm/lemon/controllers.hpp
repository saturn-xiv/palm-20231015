#pragma once

#include "palm/theme.hpp"

#include <httplib.h>

namespace palm {
namespace lemon {
namespace controllers {
void setup(httplib::Server& svr, inja::Environment& theme);
}
}  // namespace lemon
}  // namespace palm
