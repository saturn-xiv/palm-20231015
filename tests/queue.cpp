#include <catch2/catch_test_macros.hpp>

TEST_CASE("RabbitMQ", "[amqp]") { REQUIRE(1 * 1 == 1); }

TEST_CASE("Mosquitto", "[mqtt]") { REQUIRE(1 * 1 == 1); }
