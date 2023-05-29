#define BOOST_TEST_MODULE cache
#include <boost/test/unit_test.hpp>

#include "palm/cache.hpp"

#include <iostream>

std::shared_ptr<palm::redis::Config> open_redis() {
  toml::table node;
  {
    node.insert("port", 6371);
    node.insert("namespace", "testing");
  }
  std::shared_ptr<palm::redis::Config> it =
      std::make_shared<palm::redis::Config>(node);
  return it;
}

BOOST_AUTO_TEST_CASE(redis_info) {
  auto cfg = open_redis();
  auto pool = cfg->open();
  std::cout << pool->info() << std::endl;
}

BOOST_AUTO_TEST_CASE(redis_keys) {
  auto cfg = open_redis();
  auto pool = cfg->open();
  const int LEN = 100;
  for (int i = 0; i < 100; i++) {
    std::stringstream sk;
    sk << "hi/" << i;
    std::stringstream sv;
    sv << "hello." << i;
    pool->set(sk.str(), sv.str());
  }

  {
    const auto items = pool->all();
    BOOST_TEST(items.size() >= LEN);

    for (const auto& it : items) {
      std::cout << it.first << "\t" << it.second << std::endl;
    }
  }
}

BOOST_AUTO_TEST_CASE(redis_get_set) {
  auto cfg = open_redis();
  auto pool = cfg->open();

  {
    const std::string key = "aaa";
    const std::string val = "123";
    pool->set(key, val);
    {
      const auto tmp = pool->get(key);
      std::cout << key << "(" << val << ") <=> " << tmp.value() << std::endl;
      BOOST_TEST(tmp.value() == val);
    }
  }
  // {

  //   for (const auto& it : items) {
  //     std::cout << it.first << "\t" << it.second << std::endl;
  //   }
  // }
  // pool->clear();
}
