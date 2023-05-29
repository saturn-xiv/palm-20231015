#pragma once

#include "palm/nut-controllers.hpp"
#include "palm/nut-models.hpp"
#include "palm/nut-services.hpp"

namespace palm {

bool is_stopped();
void init_logger(bool debug = false);
std::string shell(const std::string& command);

}  // namespace palm
