#define BOOST_TEST_MODULE crypt
#include <boost/test/unit_test.hpp>

#include "palm/queue.hpp"

#include <iostream>

BOOST_AUTO_TEST_CASE(amqp_pub) {
  auto& mq = palm::rabbitmq::Factory::instance();
  {
    boost::property_tree::ptree cfg;
    cfg.put("rabbitmq.virtual-host", "/demo");
    mq.set(cfg);
  }
  auto con = mq.create();
  for (int i = 0; i < 10; i++) {
    std::cout << "publish message " << i << std::endl;
    std::stringstream ss;

    ss << "Hello, palm!(" << i << ")";
    con->publish("hi", "text/plain", ss.str());
    std::this_thread::sleep_for(std::chrono::seconds(1));
  }
}

class EchoHandler : public palm::rabbitmq::Handler {
 public:
  void execute(const std::string& id, const std::string& content_type,
               const std::string& payload) override {
    std::cout << "receive message: " << id << " " << content_type << " "
              << payload << std::endl;
  }
};

BOOST_AUTO_TEST_CASE(amqp_sub) {
  auto& mq = palm::rabbitmq::Factory::instance();
  {
    boost::property_tree::ptree cfg;
    cfg.put("rabbitmq.virtual-host", "/demo");
    mq.set(cfg);
  }
  auto con = mq.create();
  EchoHandler handler;
  for (;;) {
    con->consume("hi", handler);
  }
}

BOOST_AUTO_TEST_CASE(zeromq) {
  // TODO
}

BOOST_AUTO_TEST_CASE(mqtt) {
  // TODO
}
