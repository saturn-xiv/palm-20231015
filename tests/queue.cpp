#include <catch2/catch_test_macros.hpp>

#include "palm/queue.hpp"

#define PALM_EXCHANGE_NAME "ex-echo"
#define PALM_QUEUE_NAME "qu-echo"
#define PALM_CONTENT_TYPE "plain"

class EchoHandler : public palm::queue::Handler {
 public:
  void execute(const std::string& id, const std::string& content_type,
               const std::string& payload) override {
    std::cout << "receive message [" << id << "]@(" << content_type
              << "): " << payload << std::endl;
  }
};

TEST_CASE("RabbitMQ", "[rabbitmq]") {
  toml::table node;
  node.insert("virtual-host", "testing");

  palm::rabbitmq::Config cfg(node);

  SECTION("producer") {
    auto con = cfg.open();

    con->declare_queue(PALM_QUEUE_NAME);
    for (int i = 0; i < 10; i++) {
      std::stringstream ids;
      ids << "queue: hello " << PALM_QUEUE_NAME << " " << i;
      const auto id = ids.str();
      std::stringstream mss;
      mss << "by producer - world " << i;
      const auto msg = mss.str();
      std::cout << "[" << id << "]: " << msg << std::endl;
      con->produce(PALM_QUEUE_NAME, id, PALM_CONTENT_TYPE, msg);
      std::this_thread::sleep_for(std::chrono::seconds(1));
    }
  }

  SECTION("publisher") {
    auto con = cfg.open();

    std::cout << "start publisher " << std::endl;
    con->declare_queue(PALM_EXCHANGE_NAME, PALM_QUEUE_NAME);

    for (int i = 0; i < 10; i++) {
      std::stringstream ids;
      ids << "exchange: hello " << PALM_EXCHANGE_NAME << "." << PALM_QUEUE_NAME
          << " " << i;
      const auto id = ids.str();
      std::stringstream mss;
      mss << "by publisher - world " << i;
      const auto msg = mss.str();
      std::cout << "[" << id << "]: " << msg << std::endl;
      con->publish(PALM_EXCHANGE_NAME, id, PALM_CONTENT_TYPE, msg);
      std::this_thread::sleep_for(std::chrono::seconds(1));
    }
  }

  SECTION("consumer") {
    auto con = cfg.open();
    con->declare_queue(PALM_QUEUE_NAME);

    EchoHandler handler;
    for (;;) {
      con->consume(PALM_QUEUE_NAME, handler);
    }
  }
}

TEST_CASE("Mosquitto", "[mqtt]") { REQUIRE(1 * 1 == 1); }
