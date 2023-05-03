#include <catch2/catch_test_macros.hpp>

#include "palm/aloe.hpp"

TEST_CASE("Smart Router", "[yun-tai]") {
  spdlog::set_level(spdlog::level::debug);

  const std::string ext = "sh";

  google::protobuf::Arena arena;
  auto profile =
      google::protobuf::Arena::CreateMessage<palm::ops::router::v1::Profile>(
          &arena);

  {
    auto it =
        google::protobuf::Arena::CreateMessage<palm::ops::router::v1::Wan>(
            &arena);
    it->mutable_dhcp();
    it->set_route_metric(101);

    auto wan = profile->mutable_wan();
    wan->insert({"enp2s0f0", *it});
  }
  {
    auto it =
        google::protobuf::Arena::CreateMessage<palm::ops::router::v1::Wan>(
            &arena);
    it->mutable_dhcp();
    it->set_route_metric(102);

    auto wan = profile->mutable_wan();
    wan->insert({"enp2s0f1", *it});
  }
  {
    auto dns = profile->mutable_dns();
    dns->add_servers("223.5.5.5");
    dns->add_servers("223.6.6.6");
    dns->add_servers("8.8.8.8");
    dns->add_servers("8.8.4.4");
  }

  {
    auto lan = profile->mutable_lan();

    lan->set_device("enp2s0f3");
    lan->set_address("192.168.23.1");
    lan->set_netmask("255.255.255.0");
    lan->set_start_addr("192.168.23.2");
    lan->set_end_addr("192.168.23.254");

    {
      auto hosts = lan->mutable_hosts();

      hosts->insert({"14:16:8c:dc:19:ad", "192.168.23.101"});
      hosts->insert({"9e:b7:c9:df:ba:d6", "192.168.23.102"});
      hosts->insert({"a5:dd:52:03:c3:f2", "192.168.23.103"});
    }
  }
  {
    auto dmz = profile->mutable_dmz();
    dmz->set_device("enp2s0f2");
    dmz->set_address("192.168.22.1");
    dmz->set_netmask("255.255.255.0");
    dmz->set_start_addr("192.168.22.2");
    dmz->set_end_addr("192.168.22.254");

    {
      auto hosts = dmz->mutable_hosts();

      hosts->insert({"a8:0f:b4:51:4c:eb", "192.168.22.101"});
      hosts->insert({"0e:33:76:bf:9a:f1", "192.168.22.102"});
      hosts->insert({"7a:c7:66:5e:47:61", "192.168.22.103"});
    }
  }

  SECTION("generate router apply.sh") {
    const auto body = palm::ops::router::apply(*profile);
    std::cout << "--- apply.sh ---\n" << body << std::endl;
  }

  SECTION("generate router clear.sh") {
    const auto body = palm::ops::router::clear(*profile);
    std::cout << "--- clear.sh ---\n" << body << std::endl;
  }
}
