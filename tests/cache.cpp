#define BOOST_TEST_MODULE crypt
#include <boost/test/unit_test.hpp>

#include "palm/cache.hpp"

#include <iostream>

BOOST_AUTO_TEST_CASE(redis) {
  {
    boost::property_tree::ptree cfg;
    std::shared_ptr<palm::redis::Factory> factory =
        std::make_shared<palm::redis::Factory>(cfg);
    palm::redis::Pool::instance().open(factory);
  }

  palm::redis::PooledConnection con;
  const std::string key = "aaa";
  const std::string val = "123";
  con.set(key, val);
  {
    const auto tmp = con.get(key);
    BOOST_TEST(tmp.value() == val);
  }

  for (const auto& it : con.all()) {
    std::cout << it.first << "\t" << it.second << std::endl;
  }

  con.clear();
}
