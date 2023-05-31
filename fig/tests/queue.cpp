#include <catch2/catch_test_macros.hpp>

#include "palm/queue.hpp"

#define PALM_EXCHANGE_NAME "ex-echo"
#define PALM_QUEUE_NAME "qu-echo"
#define PALM_CONTENT_TYPE "plain"

class EchoHandler : public palm::queue::Handler {
 public:
  void execute(const std::string& id, const std::string& content_type,
               const std::string& payload) override {
    std::cout << "receive message: " << id << " " << content_type << " "
              << payload << std::endl;
  }
};

TEST_CASE("RabbitMQ", "[amqp]") {
  toml::table node;
  node.insert("virtual-host", "testing");

  palm::rabbitmq::Config cfg(node);
  auto con = cfg.open();

  SECTION("publisher") {
    con->declare_queue(PALM_EXCHANGE_NAME, PALM_QUEUE_NAME);

    for (int i = 0; i < 10; i++) {
      std::stringstream id;
      id << "exchange: hello " << PALM_EXCHANGE_NAME << "." << PALM_QUEUE_NAME
         << " " << i;
      std::stringstream message;
      message << "world " << i;
      con->publish(PALM_EXCHANGE_NAME, id.str(), PALM_CONTENT_TYPE,
                   message.str());
      std::this_thread::sleep_for(std::chrono::seconds(1));
    }
  }

  SECTION("producer") {
    con->declare_queue(PALM_QUEUE_NAME);
    for (int i = 0; i < 10; i++) {
      std::stringstream id;
      id << "queue: hello " << PALM_QUEUE_NAME << " " << i;
      std::stringstream message;
      message << "world " << i;
      con->produce(PALM_QUEUE_NAME, id.str(), PALM_CONTENT_TYPE, message.str());
      std::this_thread::sleep_for(std::chrono::seconds(1));
    }
  }

  SECTION("subscriber") {
    con->declare_queue(PALM_QUEUE_NAME);

    EchoHandler handler;
    for (;;) {
      con->consume(PALM_QUEUE_NAME, handler);
    }
  }

  SECTION("consumer") {
    con->declare_queue(PALM_QUEUE_NAME);

    EchoHandler handler;
    for (;;) {
      con->consume(PALM_QUEUE_NAME, handler);
    }
  }
}
