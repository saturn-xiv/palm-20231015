#define BOOST_TEST_MODULE queue
#include <boost/test/unit_test.hpp>

#include "palm/queue.hpp"

namespace palm {
namespace testing {
inline const static std::string EXCHANGE = "exchange://echo";
inline const static std::string QUEUE = "queue://echo";
inline const static std::string VIRTUAL_HOST = "/demo";

}  // namespace testing
}  // namespace palm

BOOST_AUTO_TEST_CASE(rabbitmq) {
  boost::asio::io_service service(4);
  AMQP::LibBoostAsioHandler handler(service);

  const palm::rabbitmq::Config cfg(palm::testing::VIRTUAL_HOST);
  const AMQP::Address address = cfg.address();
  AMQP::TcpConnection connection(&handler, address);
  AMQP::TcpChannel channel(&connection);

  channel.declareExchange(palm::testing::EXCHANGE, AMQP::fanout);
  channel.declareQueue(palm::testing::QUEUE,
                       AMQP::durable + AMQP::autodelete + AMQP::exclusive);
  channel.bindQueue(palm::testing::EXCHANGE, palm::testing::QUEUE, "");

  {
    channel.startTransaction();
    for (int i = 1; i < 10; i++) {
      std::cout << "publish message " << i << std::endl;
      std::stringstream ss;
      ss << "hello, " << i;
      channel.publish(palm::testing::EXCHANGE, palm::testing::QUEUE, ss.str());
    }
    channel.commitTransaction()
        .onSuccess([]() { std::cout << "public message success" << std::endl; })
        .onError([](const char *message) {
          std::cout << "public message failed " << message << std::endl;
        });
  }
  {
    auto startCb = [](const std::string &consumertag) {
      std::cout << "consume operation started" << std::endl;
    };

    auto errorCb = [](const char *message) {
      std::cout << "consume operation failed" << std::endl;
    };

    auto messageCb = [&channel](const AMQP::Message &message,
                                uint64_t deliveryTag, bool redelivered) {
      std::cout << "message received" << std::endl;

      channel.ack(deliveryTag);
    };

    channel.consume(palm::testing::QUEUE)
        .onReceived(messageCb)
        .onSuccess(startCb)
        .onError(errorCb);
  }
  service.run();
}
