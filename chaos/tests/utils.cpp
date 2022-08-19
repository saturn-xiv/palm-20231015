#define BOOST_TEST_MODULE utils
#include <boost/test/unit_test.hpp>

#include "palm/utils.hpp"

BOOST_AUTO_TEST_CASE(iso8601) {
  {
    std::tm zero{};
    zero.tm_mday = 1;

    std::mktime(&zero);
    std::cout << std::asctime(&zero) << "sizeof(std::tm) = " << sizeof(std::tm)
              << std::endl;
  }
  {
    std::time_t now = std::time(nullptr);
    std::cout << "UTC: " << std::asctime(std::gmtime(&now))
              << "Local: " << std::asctime(std::localtime(&now)) << " " << now
              << " seconds since the Epoch" << std::endl;
    {
      nlohmann::json js = now;
      std::cout << js.dump(4) << std::endl;
    }
  }
  {
    std::time_t now = std::time(nullptr);
    const auto n1 = std::localtime(&now);
    nlohmann::json js = *n1;
    const auto str = js.dump(4);
    std::tm n2 = nlohmann::json::parse(str);
    std::cout << std::asctime(n1) << str << "\n"
              << std::asctime(&n2) << std::endl;
  }
}

namespace palm {
namespace testing {
class Item {};
}  // namespace testing
}  // namespace palm

BOOST_AUTO_TEST_CASE(type_name) {
  {
    int iv = 1;
    const std::string it = typeid(iv).name();
    std::cout << "int: " << it << " "
              << boost::typeindex::type_id<int>().pretty_name() << std::endl;
  }
  {
    std::string iv = "hello";
    const std::string it = typeid(iv).name();
    std::cout << "string: " << it << " "
              << boost::typeindex::type_id<std::string>().pretty_name()
              << std::endl;
  }
  {
    bool iv = false;
    const std::string it = typeid(iv).name();
    std::cout << "bool: " << it << " "
              << boost::typeindex::type_id<bool>().pretty_name() << std::endl;
  }
  {
    palm::testing::Item iv;
    const std::string it = typeid(iv).name();
    std::cout << "palm::testing::Item: " << it << " "
              << boost::typeindex::type_id<palm::testing::Item>().pretty_name()
              << std::endl;
  }
}
