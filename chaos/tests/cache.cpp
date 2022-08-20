#define BOOST_TEST_MODULE cache
#include <boost/test/unit_test.hpp>

#include "palm/cache.hpp"

BOOST_AUTO_TEST_CASE(redis_toml) {
  const char* str = R"TOML(
    host = "192.168.0.10"
    port = 63790
    db = 2
    timeout = 8
    pool-size = 16
)TOML";
  std::cout << "=======\n" << str << "\n======" << std::endl;
  const auto node = toml::parse(str);
  const palm::redis::Config cfg(node);

  BOOST_CHECK_EQUAL(cfg.host(), "192.168.0.10");
  BOOST_CHECK_EQUAL(cfg.port(), 63790);
  BOOST_CHECK_EQUAL(cfg.db(), 2);
  BOOST_CHECK_EQUAL(cfg.timeout().count(), 8);
  BOOST_CHECK_NE(cfg.pool_size(), 32);
}

BOOST_AUTO_TEST_CASE(redis_pool) {
  const palm::redis::Config cfg;
  auto pool = cfg.open();

  {
    const auto it = pool->info();
    std::cout << it << std::endl;
  }
  {
    const auto k1 = "hello, 1";
    const auto k2 = "hello, 2";
    const auto v = "hi";
    pool->set(k1, v);
    pool->setex(k2, std::chrono::days(1), v);

    const auto v1 = pool->get(k1);
    const auto v2 = pool->get(k2);
    BOOST_CHECK_EQUAL(v1.value(), v);
    BOOST_CHECK_EQUAL(v2.value(), v);
  }
}
