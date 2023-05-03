#include <catch2/catch_test_macros.hpp>

#include "palm/crypto.hpp"

TEST_CASE("By google tink", "[tink]") { REQUIRE(1 * 1 == 1); }

TEST_CASE("By openssl", "[openssl]") { REQUIRE(1 * 1 == 1); }
