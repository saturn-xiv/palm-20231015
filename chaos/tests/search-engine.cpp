#define BOOST_TEST_MODULE utils
#include <boost/test/unit_test.hpp>

#include "palm/search-engine.hpp"

namespace palm {
namespace testing {
class Item {};
}  // namespace testing
}  // namespace palm

BOOST_AUTO_TEST_CASE(opensearch) {
  const palm::opensearch::Config cfg("demo");
  {
    const auto it = cfg.info();
    {
      nlohmann::json js = it;
      std::cout << js.dump(2) << std::endl;
    }
  }
}
