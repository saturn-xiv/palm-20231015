#define BOOST_TEST_MODULE crypto
#include <boost/test/unit_test.hpp>

#include "palm/crypto.hpp"

BOOST_AUTO_TEST_CASE(random_) {
  for (int i = 0; i < 10; i++) {
    std::cout << "--------- " << i << " --------" << std::endl;
    std::cout << "uuid:\t" << palm::uuid() << std::endl;
    std::cout << "bytes:\t" << palm::base64::to(palm::random::bytes(32))
              << std::endl;
    std::cout << "string:\t" << palm::random::string(16) << std::endl;
  }
}

#define PALM_TEST_SECRET_KEY "ticn2mE1i+TUZw9wIUbb2FjYzRfgaNWpijq7tqNzmAY="

BOOST_AUTO_TEST_CASE(hmac_512) {
  const palm::Hmac it(PALM_TEST_SECRET_KEY);
  for (int i = 0; i < 10; i++) {
    const auto data1 = palm::random::bytes(64);
    const auto data2 = palm::random::bytes(64);
    const auto salt1 = palm::random::bytes(8);
    const auto salt2 = palm::random::bytes(8);
    const auto hs11 = palm::base64::to(it.sha512(data1, salt1));
    const auto hs21 = palm::base64::to(it.sha512(data2, salt1));
    const auto hs12 = palm::base64::to(it.sha512(data1, salt2));
    const auto hs11_0 = palm::base64::to(it.sha512(data1, salt1));

    std::cout << "data 1: " << palm::base64::to(data1)
              << "\ndata 2: " << palm::base64::to(data2)
              << "\nsalt 1: " << palm::base64::to(salt1)
              << "\nsalt 2: " << palm::base64::to(salt2)
              << "\n sum 1 1: " << hs11 << "\n sum 2 1: " << hs21
              << "\n sum 1 2: " << hs12 << "\n sum 1 1(r): " << hs11_0
              << std::endl;

    BOOST_CHECK_NE(hs11, hs12);
    BOOST_CHECK_NE(hs21, hs12);
    BOOST_CHECK_EQUAL(hs11, hs11_0);
  }
}

BOOST_AUTO_TEST_CASE(ssha512) {
  const size_t salt_len = 16;
  for (int i = 0; i < 10; i++) {
    std::stringstream ss;
    ss << "Hello, " << i << "!";
    const std::string data = ss.str();
    {
      const auto passwd1 = palm::ssha512::sum(data, salt_len);
      const auto passwd2 = palm::ssha512::sum(data, salt_len);
      BOOST_CHECK_NE(passwd1, passwd2);
    }
    const auto passwd = palm::ssha512::sum(data, salt_len);
    BOOST_TEST(palm::ssha512::verify(passwd, data));
    BOOST_TEST(!palm::ssha512::verify(passwd, "hi"));
    std::cout << "doveadm pw -s SSHA512 -p '" << data << "'" << std::endl;
    std::cout << "doveadm pw -p '" << data << "' -t '" << passwd << "'"
              << std::endl;
  }
}

BOOST_AUTO_TEST_CASE(aes) {
  const palm::Aes aes("+2Mhl9cH4MXsMsyTbvqETFg42IQiuDobw8SkQEXkVBE=");
  for (int i = 0; i < 9; i++) {
    const auto plain = palm::random::bytes(23 + i);
    {
      const auto code1 = aes.encrypt(plain);
      const auto code2 = aes.encrypt(plain);
      BOOST_CHECK_EQUAL(code1.first.size(), code2.first.size());
      BOOST_CHECK_EQUAL(code1.second.size(), code2.second.size());
      BOOST_CHECK_NE(palm::base64::to(code1.first),
                     palm::base64::to(code2.first));
      BOOST_CHECK_NE(palm::base64::to(code1.second),
                     palm::base64::to(code2.second));
    }
    {
      const auto code = aes.encrypt(plain);
      const auto it = aes.decrypt(code.first, code.second);
      BOOST_CHECK_EQUAL(plain.size(), it.size());
      BOOST_CHECK_EQUAL(palm::base64::to(plain), palm::base64::to(it));
    }
  }
}

BOOST_AUTO_TEST_CASE(gravatar) {
  const std::string email = "MyEmailAddress@example.com ";
  std::cout << palm::gravatar(email) << std::endl;
}
