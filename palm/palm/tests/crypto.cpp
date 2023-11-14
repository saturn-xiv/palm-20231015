#include <catch2/catch_test_macros.hpp>

#include "palm/crypto.hpp"

TEST_CASE("SHA512 with salt", "[ssha512]") { REQUIRE((1 + 1) == 2); }

// https://en.gravatar.com/site/implement/hash/
TEST_CASE("Gravatar", "[gravatar]") { REQUIRE((1 + 1) == 2); }
