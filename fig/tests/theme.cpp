#include <catch2/catch_test_macros.hpp>

TEST_CASE("AWS services", "[aws]") {
  SECTION("sqs") {
    // TODO
    REQUIRE((1 + 1) == 2);
  }
}

// #define BOOST_TEST_MODULE theme
// #include <boost/test/unit_test.hpp>

// #include "palm/theme.hpp"

// BOOST_AUTO_TEST_CASE(tpl) {
//   palm::Theme theme("./views/bootstrap/");
//   const auto tpl = theme.render("cms/articles/show.html", {});
//   std::cout << tpl << std::endl;
//   BOOST_TEST(!tpl.empty());
// }
