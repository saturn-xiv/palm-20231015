#include <catch2/catch_test_macros.hpp>

#include "palm/lily.hpp"
#include "palm/loquat.hpp"
#include "palm/morus.hpp"

#include <iostream>

TEST_CASE("md2htm", "[morus]") {}

TEST_CASE("tex2pdf, tex2word", "[lily]") {}

TEST_CASE("tink encrypt", "[loquat]") {
  auto config = toml::parse_file("config.toml");
  auto node = config["loquat"].as_table();
  const palm::loquat::Config cfg(*node);

  SECTION("health check") {
    auto cli = cfg.health();
    cli->check();
  }

  const std::string app_id = "testing";
  SECTION("aes") {
    {
      const std::string plain = "hello, palm!";
      auto cli = cfg.aes();
      std::string code;
      cli->encrypt(code, app_id, plain);
      REQUIRE(code != plain);
      std::cout << plain << " <=> " << code << std::endl;
      {
        std::string tmp;
        cli->decrypt(tmp, app_id, code);
        REQUIRE(tmp == plain);
      }
    }
  }
}
