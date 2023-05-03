#include <catch2/catch_test_macros.hpp>

#include "palm/crypto.hpp"

TEST_CASE("By google tink", "[tink]") { REQUIRE(1 * 1 == 1); }

TEST_CASE("By openssl", "[openssl]") { REQUIRE(1 * 1 == 1); }

TEST_CASE("Random", "[rand]") {
  SECTION("timestamp") {
    std::cout << palm::timestamp() << std::endl;
    {
      const auto file = palm::timestamp("run", "sh");
      std::cout << file.string() << std::endl;
    }
    {
      const auto file = palm::timestamp("run");
      std::cout << file.string() << std::endl;
    }
    {
      const auto file = palm::timestamp("tmp", "run", "sh");
      std::cout << file.string() << std::endl;
    }
  }

  REQUIRE(1 * 1 == 1);
}
