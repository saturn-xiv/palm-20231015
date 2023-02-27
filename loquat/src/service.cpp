#include "loquat/service.hpp"
#include "loquat/env.hpp"

#include <thrift/concurrency/ThreadFactory.h>
#include <thrift/concurrency/ThreadManager.h>
#include <thrift/processor/TMultiplexedProcessor.h>
#include <thrift/protocol/TBinaryProtocol.h>
#include <thrift/server/TThreadPoolServer.h>
#include <thrift/transport/TServerSocket.h>
#include <thrift/transport/TSocket.h>
#include <thrift/transport/TTransportUtils.h>

void loquat::launch(const uint16_t port, const size_t worker_count) {
  std::shared_ptr<AesHandler> aesHandler = std::make_shared<AesHandler>();
  std::shared_ptr<v1::AesProcessor> aesProcessor =
      std::make_shared<v1::AesProcessor>(aesHandler);

  std::shared_ptr<HmacHandler> hmacHandler = std::make_shared<HmacHandler>();
  std::shared_ptr<v1::HmacProcessor> hmacProcessor =
      std::make_shared<v1::HmacProcessor>(hmacHandler);

  std::shared_ptr<JwtHandler> jwtHandler = std::make_shared<JwtHandler>();
  std::shared_ptr<v1::JwtProcessor> jwtProcessor =
      std::make_shared<v1::JwtProcessor>(jwtHandler);

  std::shared_ptr<HealthHandler> healthHandler =
      std::make_shared<HealthHandler>();
  std::shared_ptr<v1::HealthProcessor> healthProcessor =
      std::make_shared<v1::HealthProcessor>(healthHandler);

  std::shared_ptr<apache::thrift::TMultiplexedProcessor> multiplexedProcessor =
      std::make_shared<apache::thrift::TMultiplexedProcessor>();

  {
    const auto name = typeid(AesHandler).name();
    spdlog::info("register aes service {}", name);
    multiplexedProcessor->registerProcessor(name, aesProcessor);
  }
  {
    const auto name = typeid(HmacHandler).name();
    spdlog::info("register hmac service {}", name);
    multiplexedProcessor->registerProcessor(name, hmacProcessor);
  }
  {
    const auto name = typeid(JwtHandler).name();
    spdlog::info("register jwt service {}", name);
    multiplexedProcessor->registerProcessor(name, jwtProcessor);
  }
  {
    const auto name = typeid(HealthHandler).name();
    spdlog::info("register health service {}", name);
    multiplexedProcessor->registerProcessor(name, healthProcessor);
  }

  std::shared_ptr<apache::thrift::TProcessor> processor =
      std::dynamic_pointer_cast<apache::thrift::TProcessor>(
          multiplexedProcessor);

  std::shared_ptr<apache::thrift::concurrency::ThreadFactory> threadFactory =
      std::make_shared<apache::thrift::concurrency::ThreadFactory>();
  std::shared_ptr<apache::thrift::concurrency::ThreadManager> threadManager =
      apache::thrift::concurrency::ThreadManager::newSimpleThreadManager(
          worker_count);
  threadManager->threadFactory(threadFactory);
  threadManager->start();

  std::shared_ptr<apache::thrift::transport::TServerSocket> serverSocket =
      std::make_shared<apache::thrift::transport::TServerSocket>(port);
  std::shared_ptr<apache::thrift::transport::TBufferedTransportFactory>
      transportFactory = std::make_shared<
          apache::thrift::transport::TBufferedTransportFactory>();
  std::shared_ptr<apache::thrift::protocol::TBinaryProtocolFactory>
      protocolFactory =
          std::make_shared<apache::thrift::protocol::TBinaryProtocolFactory>();

  apache::thrift::server::TThreadPoolServer server(
      processor, serverSocket, transportFactory, protocolFactory,
      threadManager);

  spdlog::info("listening on tcp://0.0.0.0:{} with {} threads", port,
               worker_count);
  server.serve();
}

void loquat::AesHandler::encrypt(std::string& code, const std::string& auth,
                                 const std::string& plain) {
  spdlog::info("call {}", __PRETTY_FUNCTION__);
  const auto zone = loquat::auth(auth);
  loquat::Aes aes(zone);
  code = aes.encrypt(plain);
}

void loquat::AesHandler::decrypt(std::string& plain, const std::string& auth,
                                 const std::string& code) {
  spdlog::info("call {}", __PRETTY_FUNCTION__);
  const auto zone = loquat::auth(auth);
  loquat::Aes aes(zone);
  plain = aes.decrypt(code);
}

void loquat::HmacHandler::sign(std::string& code, const std::string& auth,
                               const std::string& plain) {
  spdlog::info("call {}", __PRETTY_FUNCTION__);
  const auto zone = loquat::auth(auth);
  loquat::HMac mac(zone);
  code = mac.sign(plain);
}

void loquat::HmacHandler::verify(const std::string& auth,
                                 const std::string& code,
                                 const std::string& plain) {
  spdlog::info("call {}", __PRETTY_FUNCTION__);
  const auto zone = loquat::auth(auth);
  loquat::HMac mac(zone);
  mac.verify(code, plain);
}

void loquat::JwtHandler::sign(std::string& token, const std::string& auth,
                              const std::string& subject,
                              const std::string& audience, const int64_t ttl) {
  spdlog::info("call {}", __PRETTY_FUNCTION__);
  const auto zone = loquat::auth(auth);
  loquat::Jwt jwt(zone);
  token = audience.empty()
              ? jwt.sign(subject, std::chrono::seconds(ttl))
              : jwt.sign(subject, audience, std::chrono::seconds(ttl));
}

void loquat::JwtHandler::verify(std::string& subject, const std::string& auth,
                                const std::string& token,
                                const std::string& audience) {
  spdlog::info("call {}", __PRETTY_FUNCTION__);
  const auto zone = loquat::auth(auth);
  loquat::Jwt jwt(zone);
  subject = audience.empty() ? jwt.verify(token) : jwt.verify(token, audience);
}

void loquat::HealthHandler::Check() {
  spdlog::info("call {}", __PRETTY_FUNCTION__);
}
