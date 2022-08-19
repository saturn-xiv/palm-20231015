#define BOOST_TEST_MODULE jwt
#include <boost/test/unit_test.hpp>

#include "palm/jwt.hpp"

BOOST_AUTO_TEST_CASE(token) {
  const palm::Jwt jwt("wM7PfXLXdOhswHZcyNUbzBDEu6jt8FJPApt67tiY3Ko=");
  const std::string uid = "uid";
  const std::string aud = "palm";
  const std::string sub = "unit test";
  for (int i = 0; i < 3; i++) {
    nlohmann::json payload;
    std::stringstream ss;
    ss << "hello, " << i << "!";
    payload[uid] = ss.str();

    std::string token1 = jwt.encode(aud, sub, payload, std::chrono::hours(1));
    std::this_thread::sleep_for(std::chrono::seconds(2));
    {
      std::string token2 = jwt.encode(aud, sub, payload, std::chrono::hours(1));
      BOOST_CHECK_NE(token2, token1);
    }
    auto [aud1, _, payload1] = jwt.decode(token1, sub);
    BOOST_CHECK_EQUAL(aud, aud1);
    {
      const std::string uid1 = payload1[uid];
      const std::string uid0 = payload[uid];
      BOOST_CHECK_EQUAL(uid0, uid1);
    }

    std::cout << "token: " << token1 << "\n" << payload1 << std::endl;
  }
}
