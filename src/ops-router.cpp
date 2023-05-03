#include "palm/ops-router.hpp"

#include <yaml-cpp/yaml.h>

std::string palm::ops::router::apply(
    const palm::ops::router::v1::Profile& profile) {
  std::stringstream ss;
  ss << palm::BASH_HEADER;

  //   netplan
  {
    palm::ops::router::netplan::conf(profile);
    ss << "netplan apply\n";
  }

  // lan
  {
    {
      const auto servers = profile.dns().servers();
      palm::ops::router::dnsmasq::resolv(servers);
    }
    {
      const auto it = profile.lan();
      const auto file =
          palm::ops::router::dnsmasq::dhcpd(it, profile.dns().sec());
      ss << "dnsmasq --conf-file=" << file.string() << "\n";
    }

    //   dmz
    if (profile.has_dmz()) {
      const auto it = profile.dmz();
      const auto file =
          palm::ops::router::dnsmasq::dhcpd(it, profile.dns().sec());
      ss << "dnsmasq --conf-file=" << file.string() << "\n";
    }
  }

  //   iptables
  palm::ops::router::iptables::clear(ss, false, true, false);
  palm::ops::router::iptables::apply(ss, profile);

  ss << palm::BASH_FOOTER;
  return ss.str();
}

void palm::ops::router::iptables::apply(
    std::ostream& out, const palm::ops::router::v1::Profile& profile) {
  google::protobuf::Arena arena;

  out << "iptables -A INPUT -i lo -j ACCEPT"
      << "\n";
  out << "iptables -A OUTPUT -o lo -j ACCEPT"
      << "\n";
  out << "iptables -A INPUT -p icmp --icmp-type echo-request -j REJECT"
      << "\n";
  out << R"SH(iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT)SH"
      << "\n";
  out << "iptables -A INPUT -m conntrack --ctstate INVALID -j DROP"
      << "\n";

  {
    const auto device = profile.lan().device();
    {
      auto rule = google::protobuf::Arena::CreateMessage<
          palm::ops::router::v1::Profile_In>(&arena);
      rule->set_tcp(true);
      rule->set_device(device);
      rule->set_port(22);
      palm::ops::router::iptables::accept(out, *rule);
    }
    {
      auto rule = google::protobuf::Arena::CreateMessage<
          palm::ops::router::v1::Profile_In>(&arena);
      rule->set_tcp(true);
      rule->set_device(device);
      rule->set_port(80);
      palm::ops::router::iptables::accept(out, *rule);
    }

    for (const auto& it : profile.wan()) {
      out << "iptables -A FORWARD -i " << device << " -o " << it.first
          << " -j ACCEPT"
          << "\n";
    }

    // palm::ops::router::iptables::accept(out, device, 22);
  }

  if (profile.has_dmz()) {
    const auto device = profile.dmz().device();
    {
      auto rule = google::protobuf::Arena::CreateMessage<
          palm::ops::router::v1::Profile_In>(&arena);
      rule->set_tcp(true);
      rule->set_device(device);
      rule->set_port(22);
      palm::ops::router::iptables::accept(out, *rule);
    }
    {
      auto rule = google::protobuf::Arena::CreateMessage<
          palm::ops::router::v1::Profile_In>(&arena);
      rule->set_tcp(true);
      rule->set_device(device);
      rule->set_port(80);
      palm::ops::router::iptables::accept(out, *rule);
    }
    for (const auto& it : profile.wan()) {
      out << "iptables -A FORWARD -i " << device << " -o " << it.first
          << " -j ACCEPT"
          << "\n";
    }
  }

  out << "netfilter-persistent save\n";
}
void palm::ops::router::iptables::clear(std::ostream& out, bool input,
                                        bool output, bool forward) {
  out << "echo 1 > /proc/sys/net/ipv4/ip_forward"
      << "\n";

  out << "iptables -P INPUT " << palm::ops::router::iptables::accept(input)
      << "\n";
  out << "iptables -P FORWARD " << palm::ops::router::iptables::accept(forward)
      << "\n";
  out << "iptables -P OUTPUT " << palm::ops::router::iptables::accept(output)
      << "\n";

  //   flush all chains/firewall rules
  out << "iptables -F"
      << "\n";
  //   delete all chains
  out << "iptables -X"
      << "\n";
  //   flash all counters
  out << "iptables -Z"
      << "\n";
  //   flush and delete all nat
  out << "iptables -t nat -F"
      << "\n";
  out << "iptables -t nat -X"
      << "\n";
  //   flush and delete all mangle
  out << "iptables -t mangle -F"
      << "\n";
  out << "iptables -t mangle -X"
      << "\n";
  //   flush and delete all raw
  out << "iptables -t raw -F"
      << "\n";
  out << "iptables -t raw -X"
      << "\n";
}

void palm::ops::router::iptables::accept(
    std::ostream& out, const palm::ops::router::v1::Profile_Nat& rule) {
  // FIXME
  const auto protocol = palm::ops::router::iptables::protocol(rule.tcp());
  out << "iptables -t nat -A PREROUTING -i " << rule.source().device() << " -p "
      << protocol << " --dport " << rule.destination().port()
      << " -j DNAT --to-destination " << rule.destination().ip();
  out << "iptables -t nat -A POSTROUTING -o " << rule.destination().device()
      << " -p tcp --dport " << rule.destination().port() << " -d "
      << rule.destination().ip() << " -j SNAT --to-source "
      << rule.source().ip();
}
void palm::ops::router::iptables::accept(
    std::ostream& out, const palm::ops::router::v1::Profile_In& rule) {
  const auto protocol = palm::ops::router::iptables::protocol(rule.tcp());
  out << "iptables -A INPUT -i " << rule.device() << " -p " << protocol
      << " --dport " << rule.port()
      << " -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT"
      << "\n";
  out << "iptables -A OUTPUT -o " << rule.device() << " -p " << protocol
      << " --sport " << rule.port()
      << " -m conntrack --ctstate ESTABLISHED -j ACCEPT"
      << "\n";
}

std::string palm::ops::router::clear(
    const palm::ops::router::v1::Profile& profile) {
  std::stringstream ss;
  ss << palm::BASH_HEADER;
  palm::ops::router::iptables::clear(ss, true, true, true);
  ss << palm::BASH_FOOTER;
  return ss.str();
}

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

void palm::ops::router::netplan::conf(
    const palm::ops::router::v1::Profile& profile) {
  for (auto const& [device, wan] : profile.wan()) {
    palm::ops::router::netplan::conf(device, wan);
  }
}
void palm::ops::router::netplan::conf(const std::string& device,
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
