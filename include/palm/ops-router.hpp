#pragma once

#include "ops-router.grpc.pb.h"
#include "palm/crypto.hpp"
#include "palm/i18n.hpp"
#include "palm/orm.hpp"

namespace palm {
namespace ops {
namespace router {

//   https://netplan.readthedocs.io/en/stable/examples/
namespace netplan {
void conf(const palm::ops::router::v1::Profile& profile);
void conf(const std::string& device, const palm::ops::router::v1::Wan& wan);
}  // namespace netplan

//   https://thekelleys.org.uk/dnsmasq/docs/dnsmasq-man.html
namespace dnsmasq {
std::filesystem::path dhcpd(const palm::ops::router::v1::Dhcpd& dhcpd,
                            bool dns_sec = false);
void resolv(const google::protobuf::RepeatedPtrField<std::string>& servers);

inline static const std::filesystem::path RESOLV_CONF =
    std::filesystem::current_path().root_path() / "etc" / "resolv.dnsmasq.conf";
}  // namespace dnsmasq

// https://www.digitalocean.com/community/tutorials/iptables-essentials-common-firewall-rules-and-commands
namespace iptables {
void apply(std::ostream& out, const palm::ops::router::v1::Profile& profile);
void clear(std::ostream& out, bool input = false, bool output = true,
           bool forward = false);

void accept(std::ostream& out, const palm::ops::router::v1::Profile_Nat& rule);
void accept(std::ostream& out, const palm::ops::router::v1::Profile_In& rule);

inline std::string protocol(bool tcp) { return tcp ? "tcp" : "udp"; }
inline std::string accept(bool enable) { return enable ? "ACCEPT" : "REJECT"; }
}  // namespace iptables
std::string apply(const palm::ops::router::v1::Profile& profile);
std::string clear(const palm::ops::router::v1::Profile& profile);
}  // namespace router
}  // namespace ops
}  // namespace palm
