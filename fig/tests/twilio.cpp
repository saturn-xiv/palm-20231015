#define BOOST_TEST_MODULE twilio
#include <boost/test/unit_test.hpp>

#include "palm/twilio.hpp"

BOOST_AUTO_TEST_CASE(sms) { BOOST_TEST(1 == 1 * 1); }

BOOST_AUTO_TEST_CASE(ml) {
  const std::string hi = "hello, world!";
  {
    palm::twilio::InComingPhoneCall it;
    it.say = hi;
    std::cout << it.xml() << std::endl;
  }
  {
    palm::twilio::InComingSmsMessage it;
    it.message = hi;
    std::cout << it.xml() << std::endl;
  }
}
