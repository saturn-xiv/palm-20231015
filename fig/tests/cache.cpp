#include <catch2/catch_test_macros.hpp>

#include "palm/cache.hpp"

TEST_CASE("Redis server", "[redis]") {
  toml::table node;
  {
    node.insert("port", 6371);
    node.insert("namespace", "testing");
  }

  std::shared_ptr<palm::redis::Config> cfg =
      std::make_shared<palm::redis::Config>(node);
  auto pool = cfg->open();

  SECTION("info") { std::cout << pool->info() << std::endl; }

  SECTION("keys") {
    const int LEN = 100;
    for (int i = 0; i < 100; i++) {
      std::stringstream sk;
      sk << "hi/" << i;
      std::stringstream sv;
      sv << "hello." << i;
      pool->set(sk.str(), sv.str());
      std::cout << sk.str() << " => " << sv.str() << std::endl;
      {
        const auto iv = pool->get(sk.str());
        REQUIRE(iv.value() == sv.str());
      }
    }

    {
      const auto items = pool->all();
      // REQUIRE(items.size() >= LEN);

      for (const auto& it : items) {
        std::cout << it.first << "\t" << it.second << std::endl;
      }
    }
  }

  SECTION("get-set") {
    {
      const std::string key = "aaa";
      const std::string val = "123";
      pool->set(key, val);
      {
        const auto tmp = pool->get(key);
        std::cout << key << "(" << val << ") <=> " << tmp.value() << std::endl;
        REQUIRE(tmp.value() == val);
      }
    }
    // {
    //   for (const auto& it : items) {
    //     std::cout << it.first << "\t" << it.second << std::endl;
    //   }
    // }
    // pool->clear();
  }
}
