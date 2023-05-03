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
    auto lan = profile->mutable_lan();

    lan->set_device("enp2s0f3");
    lan->set_network("192.168.23.0");
    lan->set_subnet_prefix_length(24);
    lan->set_begin("192.168.23.2");
    lan->set_end("192.168.23.254");

    {
      auto clients = lan->mutable_fixed_clients();

      clients->insert({"14:16:8c:dc:19:ad", "192.168.23.101"});
      clients->insert({"9e:b7:c9:df:ba:d6", "192.168.23.102"});
      clients->insert({"a5:dd:52:03:c3:f2", "192.168.23.103"});
    }
  }
  {
    auto dmz = profile->mutable_lan();
    dmz->set_device("enp2s0f2");
    dmz->set_network("192.168.22.0");
    dmz->set_subnet_prefix_length(24);
    dmz->set_begin("192.168.22.2");
    dmz->set_end("192.168.22.254");

    {
      auto clients = dmz->mutable_fixed_clients();

      clients->insert({"a8:0f:b4:51:4c:eb", "192.168.22.101"});
      clients->insert({"0e:33:76:bf:9a:f1", "192.168.22.102"});
      clients->insert({"7a:c7:66:5e:47:61", "192.168.22.103"});
    }
  }

  SECTION("generate run.sh") {
    const auto file = palm::timestamp("run", ext);
    palm::ops::router::apply(file, *profile);
  }

  SECTION("generate clear.sh") {
    const auto file = palm::timestamp("clear", ext);
    palm::ops::router::clear(file, *profile);
  }
}
