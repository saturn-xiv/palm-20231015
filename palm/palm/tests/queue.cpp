#include <catch2/catch_test_macros.hpp>

#include "palm/queue.hpp"

#include <iostream>
#include <thread>

class EchoAmqpHandler : public palm::rabbitmq::Handler {
 public:
  EchoAmqpHandler(size_t max) : _max(max), _count(0) {}
  void handle(const std::string& id, const std::string& content_type,
              const std::string& message) override {
    this->_count++;
    std::cout << "receive message " << id << "(" << content_type
              << "): " << message << std::endl;
  }
  bool is_stopped() override { return this->_count >= this->_max; }

 private:
  size_t _count;
  size_t _max;
};

TEST_CASE("RabbitMQ", "[rabbitmq]") {
  auto config = toml::parse_file("config.toml");

  auto node = config["rabbitmq"].as_table();
  const palm::rabbitmq::Config cfg(*node);
  std::cout << "connect " << cfg << std::endl;
  palm::rabbitmq::Client cli(cfg);

  const std::string queue = "q.echo";
  const std::string exchange = "ex.test";
  SECTION("setuo queue & exchange") {
    std::cout << "declare queue " << queue << std::endl;
    cli.declare_queue(queue, true);
    std::cout << "declare exchange " << exchange << std::endl;
    cli.declare_exchange(exchange, palm::rabbitmq::Client::EXCHANGE_TYPE_DIRECT,
                         true);
    std::cout << "bind exchange(" << exchange << ") to queue(" << queue
              << ") with routing-key(" << queue << ")" << std::endl;
    cli.bind_queue(queue, exchange, queue);
  }
  SECTION("publish message") {
    using namespace std::chrono_literals;
    for (int i = 0; i < 10; i++) {
      std::stringstream ss;
      ss << "hello, " << i << ".";
      cli.publish(exchange, queue, "plain-text", ss.str());
      std::this_thread::sleep_for(100ms);
    }
  }

  SECTION("consume message") {
    EchoAmqpHandler handler(10);
    cli.consume("testing", queue, handler);
  }

  REQUIRE((1 + 1) == 2);
}

TEST_CASE("ZeroMQ", "[zeromq]") { REQUIRE((1 + 1) == 2); }
