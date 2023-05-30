#include <catch2/catch_test_macros.hpp>

TEST_CASE("AWS services", "[aws]") {
  SECTION("sqs") {
    // TODO
    REQUIRE((1 + 1) == 2);
  }
}

// #define BOOST_TEST_MODULE queue
// #include <boost/test/unit_test.hpp>

// #include "palm/queue.hpp"

// #include <iostream>
// #include <thread>

// #define PALM_EXCHANGE_NAME "ex-echo"
// #define PALM_QUEUE_NAME "qu-echo"
// #define PALM_CONTENT_TYPE "plain"

// class EchoHandler : public palm::queue::Handler {
//  public:
//   void execute(const std::string& id, const std::string& content_type,
//                const std::string& payload) override {
//     std::cout << "receive message: " << id << " " << content_type << " "
//               << payload << std::endl;
//   }
// };

// std::shared_ptr<palm::rabbitmq::Connection> open_rabbitmq_connection() {
//   toml::table node;
//   node.insert("virtual-host", "testing");

//   palm::rabbitmq::Config cfg(node);
//   auto it = cfg.open();
//   return it;
// }

// BOOST_AUTO_TEST_CASE(rabbitmq_publisher) {
//   auto con = open_rabbitmq_connection();

//   con->declare_queue(PALM_EXCHANGE_NAME, PALM_QUEUE_NAME);

//   for (int i = 0; i < 10; i++) {
//     std::stringstream id;
//     id << "exchange: hello " << PALM_EXCHANGE_NAME << "." << PALM_QUEUE_NAME
//        << " " << i;
//     std::stringstream message;
//     message << "world " << i;
//     con->publish(PALM_EXCHANGE_NAME, id.str(), PALM_CONTENT_TYPE,
//                  message.str());
//     std::this_thread::sleep_for(std::chrono::seconds(1));
//   }
// }

// BOOST_AUTO_TEST_CASE(rabbitmq_producer) {
//   auto con = open_rabbitmq_connection();

//   con->declare_queue(PALM_QUEUE_NAME);
//   for (int i = 0; i < 10; i++) {
//     std::stringstream id;
//     id << "queue: hello " << PALM_QUEUE_NAME << " " << i;
//     std::stringstream message;
//     message << "world " << i;
//     con->produce(PALM_QUEUE_NAME, id.str(), PALM_CONTENT_TYPE, message.str());
//     std::this_thread::sleep_for(std::chrono::seconds(1));
//   }
// }

// BOOST_AUTO_TEST_CASE(rabbitmq_subscriber) {
//   auto con = open_rabbitmq_connection();
//   con->declare_queue(PALM_QUEUE_NAME);

//   EchoHandler handler;
//   for (;;) {
//     con->consume(PALM_QUEUE_NAME, handler);
//   }
// }

// BOOST_AUTO_TEST_CASE(zeromq) { BOOST_TEST(4 == (2 * 2)); }

// BOOST_AUTO_TEST_CASE(paho) { BOOST_TEST(4 == (2 * 2)); }
