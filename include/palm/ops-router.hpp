#pragma once

#include "ops-router.grpc.pb.h"
#include "palm/crypto.hpp"
#include "palm/i18n.hpp"
#include "palm/orm.hpp"

namespace palm {
namespace ops {

void netplan(const std::string& device, const palm::ops::router::v1::Wan& wan);

namespace router {
void apply(const std::filesystem::path& file,
           const palm::ops::router::v1::Profile& profile);
void clear(const std::filesystem::path& file,
           const palm::ops::router::v1::Profile& profile);
}  // namespace router
}  // namespace ops
}  // namespace palm
