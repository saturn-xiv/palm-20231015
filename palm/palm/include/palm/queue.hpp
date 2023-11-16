#pragma once

#include "palm/env.hpp"

#include <amqp.h>
#include <amqp_tcp_socket.h>

namespace palm {
namespace rabbitmq {
class Config {
 public:
  Config(const std::string& host, uint16_t port, const std::string& user,
         const std::string& password, const std::string& virtual_host)
      : _host(host),
        _port(port),
        _user(user),
        _password(password),
        _virtual_host(virtual_host) {}
  Config(const toml::table& node);

  friend std::ostream& operator<<(std::ostream& os, const Config& it) {
    os << "amqp://" << it._user << "@" << it._host << ":" << it._port << "/"
       << it._virtual_host;
    return os;
  }

  friend class Client;

 private:
  std::string _host;
  uint16_t _port;
  std::string _user;
  std::string _password;
  std::string _virtual_host;
};

struct Handler {
  virtual void handle(const std::string& id, const std::string& content_type,
                      const std::string& message) = 0;
  virtual bool is_stopped() = 0;
};

class Client {
 public:
  Client(const Config& config);
  ~Client();
  void publish(const std::string& exchange, const std::string& routing_key,
               const std::string& content_type, const std::string& message);
  void consume(const std::string& name, const std::string& queue,
               Handler& handler);

  void declare_exchange(const std::string& name, const std::string& type,
                        bool durable = true);
  void declare_queue(const std::string& name, bool durable = true);
  void bind_queue(const std::string& queue, const std::string& exchange,
                  const std::string& routing_key);

  static const int CHANNEL_ID = 1;
  inline static const std::string EXCHANGE_TYPE_DIRECT = "direct";
  inline static const std::string EXCHANGE_TYPE_FANOUT = "fanout";
  inline static const std::string EXCHANGE_TYPE_TOPIC = "topic";

 private:
  amqp_connection_state_t _connection;
};
}  // namespace rabbitmq
}  // namespace palm
