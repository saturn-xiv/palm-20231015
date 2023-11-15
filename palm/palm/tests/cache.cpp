#include <catch2/catch_test_macros.hpp>

#include "palm/cache.hpp"

TEST_CASE("Redis", "[set-get]") {
  auto config = toml::parse_file("config.toml");
  auto node = config["redis"].as_table();
  palm::redis::Config cfg(*node);

  const std::string key = "hello";
  const std::string val = "Hi, Palm!";
  palm::redis::Client cli(cfg);
  {
    cli.set(key, val, std::chrono::hours(1));
    const auto tmp = cli.get(key);
    REQUIRE(tmp.value() == val);
  }
}
