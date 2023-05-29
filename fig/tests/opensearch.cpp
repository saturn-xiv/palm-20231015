#define BOOST_TEST_MODULE opensearch
#include <boost/test/unit_test.hpp>

#include "palm/opensearch.hpp"

BOOST_AUTO_TEST_CASE(info) {
  toml::table node;
  { node.insert("namespace", "testing"); }

  palm::opensearch::Config cfg(node);
  {
    const auto it = cfg.info();
    BOOST_TEST(it.has_value());
  }
  {
    const auto items = cfg.plugins();
    BOOST_TEST(!items.empty());
    for (const auto& it : items) {
      std::cout << it.name << ": " << it.version << std::endl;
    }
  }
}
