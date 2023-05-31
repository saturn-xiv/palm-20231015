#include <catch2/catch_test_macros.hpp>

#include "palm/opensearch.hpp"

/*
sudo pacman -S opensearch opensearch-security-plugin
*/

TEST_CASE("OpenSearch", "[opensearch]") {
  toml::table node;
  { node.insert("namespace", "testing"); }

  palm::opensearch::Config cfg(node);
  SECTION("info") {
    {
      const auto it = cfg.info();
      REQUIRE(it.has_value());
      std::cout << "tagline: " << it->tagline << std::endl;
    }
    {
      const auto items = cfg.plugins();
      REQUIRE(!items.empty());
      for (const auto& it : items) {
        std::cout << it.name << ": " << it.version << std::endl;
      }
    }
  }
}
