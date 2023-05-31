#include <catch2/catch_test_macros.hpp>

#include "palm/twilio.hpp"

TEST_CASE("twilio api", "[twilio]") {
  const auto root = toml::parse_file("config.toml");
  auto node = root["twilio"];
  palm::twilio::Config config(*node.as_table());

  SECTION("xml") {
    const std::string hi = "hello, world!";
    {
      palm::twilio::InComingPhoneCall it;
      it.say = hi;
      std::cout << it.xml() << std::endl;
    }
    {
      palm::twilio::InComingSmsMessage it;
      it.message = hi;
      std::cout << it.xml() << std::endl;
    }
  }

  SECTION("sms") {
    const auto to = std::getenv("TWILIO_TO");
    const std::string message = "Hello, palm!";
    std::cout << "send '" << message << "' to " << to << std::endl;
    const auto response = config.sms(to, message);
    REQUIRE(response.has_value());
    std::cout << "status: " << response->status << std::endl;
  }
}
