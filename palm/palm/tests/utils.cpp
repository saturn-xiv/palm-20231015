#include <catch2/catch_test_macros.hpp>

#include "palm/orm.hpp"
#include "palm/utils.hpp"

#include <iostream>

TEST_CASE("Get package name", "[name]") {
  SECTION("type id") {
    std::cout << "std type of postgresql pool: "
              << typeid(palm::postgresql::Pool).name() << std::endl;
    std::cout << "boost type of postgresql::Pool: "
              << boost::core::type_name<palm::postgresql::Pool>() << std::endl;
  }
  SECTION("versions") {
    std::cout << "libstdc++ version: " << _GLIBCXX_RELEASE << std::endl;
  }
}
