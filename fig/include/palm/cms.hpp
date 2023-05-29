#pragma once

#include "palm/nut-session.hpp"
#include "palm/theme.hpp"

namespace palm {
namespace cms {
namespace controllers {

void mount(httplib::Server& server,
           std::shared_ptr<soci::connection_pool> pgsql,
           std::shared_ptr<palm::redis::Pool> redis);
}
namespace services {}
}  // namespace cms
}  // namespace palm
