#include "palm/ops-router.hpp"

#include <yaml-cpp/yaml.h>

void palm::ops::router::apply(const std::filesystem::path& file,
                              const palm::ops::router::v1::Profile& profile) {
  spdlog::debug("generate {}", file.string());
  //   https://netplan.readthedocs.io/en/stable/examples/
  for (auto const& [device, wan] : profile.wan()) {
    palm::ops::netplan(device, wan);
  }

  //   https://thekelleys.org.uk/dnsmasq/docs/dnsmasq-man.html
  //   json data;
  //   std::string result = env.render("Hello {{ name }}!", data)
}

void palm::ops::router::clear(const std::filesystem::path& file,
                              const palm::ops::router::v1::Profile& profile) {
  spdlog::debug("generate {}", file.string());
}

void palm::ops::netplan(const std::string& device,
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
  spdlog::debug("write {}", file.string());

#ifdef NDEBUG
  {
    std::ofstream fs;
    fs.open(file, std::ios::out | std::ios::trunc);
    fs << out.c_str();
    fs.close();
  }
#else
  spdlog::debug("\n{}", out.c_str());
#endif
}
