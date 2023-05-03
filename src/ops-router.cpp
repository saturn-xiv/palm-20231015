#include "palm/ops-router.hpp"

#include <yaml-cpp/yaml.h>

std::string palm::ops::router::apply(
    const palm::ops::router::v1::Profile& profile) {
  palm::ops::router::netplan(profile);
  {
    const auto servers = profile.dns().servers();
    palm::ops::router::dnsmasq::resolv(servers);
  }

  std::stringstream ss;
  ss << palm::BASH_HEADER;
  ss << "netplan apply\n";

  // LAN
  {
    const auto it = profile.lan();
    const auto file =
        palm::ops::router::dnsmasq::dhcpd(it, profile.dns().sec());
    ss << "dnsmasq --conf-file=" << file.string() << "\n";
  }
  //   DMZ
  if (profile.has_dmz()) {
    const auto it = profile.dmz();
    const auto file =
        palm::ops::router::dnsmasq::dhcpd(it, profile.dns().sec());
    ss << "dnsmasq --conf-file=" << file.string() << "\n";
  }

  //   json data;
  //   std::string result = env.render("Hello {{ name }}!", data)

  ss << palm::BASH_FOOTER;
  return ss.str();
}

std::string palm::ops::router::clear(
    const palm::ops::router::v1::Profile& profile) {
  std::stringstream ss;
  ss << palm::BASH_HEADER;
  //   TODO
  ss << palm::BASH_FOOTER;
  return ss.str();
}

// void palm::ops::router::dnsmasq(const palm::ops::router::v1::Profile&
// profile) {
//   std::stringstream ss;
//   //   DNS
//   {
//     const auto dns = profile.dns();

//     {

//       }
//
//     }
//   }
// }

void palm::ops::router::dnsmasq::resolv(
    const google::protobuf::RepeatedPtrField<std::string>& servers) {
  std::stringstream ss;
  for (const auto& it : servers) {
    ss << "nameserver " << it << "\n";
  }

  spdlog::warn("write {}", RESOLV_CONF.string());
#ifdef NDEBUG
  {
    std::ofstream fs;
    fs.exceptions(std::ofstream::failbit | std::ofstream::badbit);
    fs.open(RESOLV_CONF, std::ios::out | std::ios::trunc);
    fs << ss.str();
    fs.close();
  }
#else
  spdlog::debug("\n{}", ss.str());
#endif
}

std::filesystem::path palm::ops::router::dnsmasq::dhcpd(
    const palm::ops::router::v1::Dhcpd& dhcpd, bool dns_sec) {
  std::stringstream ss;
  if (dns_sec) {
    ss << "conf-file=/usr/share/dnsmasq/trust-anchors.conf\n";
    ss << "dnssec\n";
  }
  ss << "resolv-file=" << RESOLV_CONF.string() << "\n";

  ss << "interface=" << dhcpd.device() << "\n";
  ss << "bind-interfaces\n";
  if (dhcpd.v6()) {
    // TODO
  } else {
    ss << "dhcp-range=" << dhcpd.start_addr() << "," << dhcpd.end_addr() << ","
       << dhcpd.netmask() << ",2h\n";
    ss << "dhcp-option=option:ntp-server," << dhcpd.address() << "\n";
    ss << "dhcp-option=option:dns-server," << dhcpd.address() << "\n";
  }

  for (const auto& [mac, ip] : dhcpd.hosts()) {
    ss << "dhcp-host=" << dhcpd.device() << "," << mac << "," << ip << "\n";
  }

  const auto file = std::filesystem::current_path().root_path() / "etc" /
                    ("dnsmasq-" + dhcpd.device() + ".conf");
  spdlog::warn("write {}", file.string());
#ifdef NDEBUG
  {
    std::ofstream fs;
    fs.exceptions(std::ofstream::failbit | std::ofstream::badbit);
    fs.open(file, std::ios::out | std::ios::trunc);
    fs << ss.str();
    fs.close();
  }
#else
  spdlog::debug("\n{}", ss.str());
#endif
  return file;
}

void palm::ops::router::netplan(const palm::ops::router::v1::Profile& profile) {
  for (auto const& [device, wan] : profile.wan()) {
    palm::ops::router::netplan(device, wan);
  }
}
void palm::ops::router::netplan(const std::string& device,
                                const palm::ops::router::v1::Wan& wan) {
  YAML::Emitter out;
  out << YAML::BeginMap;
  {
    out << YAML::Key << "network";
    {
      out << YAML::BeginMap;
      out << YAML::Key << "version" << YAML::Value << "2";
      out << YAML::Key << "renderer" << YAML::Value << "networkd";
      {
        out << YAML::Key << "ethernets";
        out << YAML::BeginMap;
        out << YAML::Key << device;
        {
          out << YAML::BeginMap;
          if (wan.has_dhcp()) {
            if (wan.v6()) {
              // TODO
            } else {
              out << YAML::Key << "dhcp4" << YAML::Value << "yes";
              out << YAML::Key << "dhcp4-overrides";
              {
                out << YAML::BeginMap;
                out << YAML::Key << "route-metric" << YAML::Value
                    << wan.route_metric();
                out << YAML::EndMap;
              }
            }
          }
          if (wan.has_static_()) {
            // TODO
          }

          out << YAML::EndMap;
        }
        out << YAML::EndMap;
      }
      out << YAML::EndMap;
    }
  }
  out << YAML::EndMap;

  auto file =
      std::filesystem::current_path().root_path() / "etc" / "netplan" / device;
  file.replace_extension("yaml");
  spdlog::warn("write {}", file.string());

#ifdef NDEBUG
  {
    std::ofstream fs;
    fs.exceptions(std::ofstream::failbit | std::ofstream::badbit);
    fs.open(file, std::ios::out | std::ios::trunc);
    fs << out.c_str();
    fs.close();
  }
#else
  spdlog::debug("\n{}", out.c_str());
#endif
}
