#include <catch2/catch_test_macros.hpp>

#include "palm/queue.hpp"

TEST_CASE("RabbitMQ", "[rabbitmq]") { REQUIRE((1 + 1) == 2); }

TEST_CASE("ZeroMQ", "[zeromq]") { REQUIRE((1 + 1) == 2); }
