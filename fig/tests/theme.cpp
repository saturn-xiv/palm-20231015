#include <catch2/catch_test_macros.hpp>

#include "palm/theme.hpp"

TEST_CASE("AWS services", "[aws]") {
  const std::string home_tpl = "home.html";
  const nlohmann::json home_data = {};

  SECTION("bootstrap") {
    palm::Theme theme("./views/hugo-universal/");
    const auto tpl = theme.render(home_tpl, home_data);
    std::cout << tpl << std::endl;
    REQUIRE(!tpl.empty());
  }
}
