#pragma once

#include "ops-router.grpc.pb.h"
#include "palm/crypto.hpp"
#include "palm/i18n.hpp"
#include "palm/orm.hpp"

namespace palm {
namespace ops {
namespace router {
//   https://netplan.readthedocs.io/en/stable/examples/
void netplan(const palm::ops::router::v1::Profile& profile);
void netplan(const std::string& device, const palm::ops::router::v1::Wan& wan);
//   https://thekelleys.org.uk/dnsmasq/docs/dnsmasq-man.html
namespace dnsmasq {
std::filesystem::path dhcpd(const palm::ops::router::v1::Dhcpd& dhcpd,
                            bool dns_sec = false);
void resolv(const google::protobuf::RepeatedPtrField<std::string>& servers);

inline static const std::filesystem::path RESOLV_CONF =
    std::filesystem::current_path().root_path() / "etc" / "resolv.dnsmasq.conf";
}  // namespace dnsmasq

std::string apply(const palm::ops::router::v1::Profile& profile);
std::string clear(const palm::ops::router::v1::Profile& profile);
}  // namespace router
}  // namespace ops
}  // namespace palm
