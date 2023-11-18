#pragma once

#include "palm/env.hpp"

#include <httplib.h>

namespace palm {
namespace lemon {
namespace controllers {
void setup(httplib::Server& svr);
}
}  // namespace lemon
}  // namespace palm
