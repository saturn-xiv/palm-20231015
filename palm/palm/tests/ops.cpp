#include <catch2/catch_test_macros.hpp>

#include "palm/ops/router/models.hpp"

TEST_CASE("Smart router", "[router]") {
  auto config = toml::parse_file("router.toml");

  SECTION("generate clean.sh") {}

  SECTION("generate launch.sh") {}
}
