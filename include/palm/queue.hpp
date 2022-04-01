#pragma once

#include <chrono>
#include <optional>
#include <string>
#include <thread>

#include <amqp.h>
#include <amqp_tcp_socket.h>
#include <boost/property_tree/ptree.hpp>

namespace palm {
/**
 * rabbitmq-plugins enable rabbitmq_management
 *
 */
namespace rabbitmq {
class Handler {
 public:
  virtual void execute(const std::string& id, const std::string& content_type,
                       const std::string& payload) = 0;
};

class Connection {
 public:
  Connection(const std::string& host, const uint16_t port,
             const std::string& user, const std::string& password,
             const std::string& virtual_host);
  ~Connection();
  void publish(const std::string& queue, const std::string& content_type,
               const std::string& payload);
  void consume(const std::string& queue, Handler& handler);

 private:
  void ensure_queue(const std::string& name);
  amqp_connection_state_t con;
};
class Factory {
 public:
  Factory(Factory const&) = delete;
  void operator=(Factory const&) = delete;

  static Factory& instance() {
    static Factory it;
    return it;
  }

  void set(const boost::property_tree::ptree& config);
  std::shared_ptr<Connection> create() const;

 private:
  Factory() {}

  std::string host;
  uint16_t port;
  std::string user;
  std::string password;
  std::string virtual_host;
};
}  // namespace rabbitmq
}  // namespace palm
