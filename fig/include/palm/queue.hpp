#pragma once

#include "palm/env.hpp"

#include <boost/type_index.hpp>
#include <boost/uuid/uuid.hpp>
#include <boost/uuid/uuid_generators.hpp>
#include <boost/uuid/uuid_io.hpp>

#include <amqp.h>
#include <amqp_tcp_socket.h>
#include <toml++/toml.h>

namespace palm {

namespace queue {
class Handler {
 public:
  virtual void execute(const std::string& id, const std::string& content_type,
                       const std::string& payload) = 0;
};
}  // namespace queue

namespace rabbitmq {

class Connection {
 public:
  Connection(const std::string& host, const uint16_t port,
             const std::string& user, const std::string& password,
             const std::string& virtual_host, const uint16_t channel_id = 1);
  ~Connection();
  void consume(const std::string& queue, queue::Handler& handler);

  static inline std::string random_id() {
    boost::uuids::uuid uid = boost::uuids::random_generator()();
    return boost::uuids::to_string(uid);
  }

  inline void produce(const std::string& queue, const std::string& id,
                      const std::string& content_type,
                      const std::string& payload) {
    this->publish("", queue, id, content_type, payload);
  }
  template <class T>
  void produce(const T& payload) {
    const std::string id = random_id();
    const std::string queue =
        boost::typeindex::type_id_with_cvr<T>().pretty_name();

    std::string buf;
    if (!payload.SerializeToString(&buf)) {
      throw std::invalid_argument("serial queue task " + queue);
    }
    this->produce(queue, id, palm::CONTENT_TYPE_GRPC, buf);
  }

  inline void publish(const std::string& exchange, const std::string& id,
                      const std::string& content_type,
                      const std::string& payload) {
    this->publish(exchange, "", id, content_type, payload);
  }
  template <class T>
  void publish(const T& payload) {
    const std::string id = random_id();
    const std::string queue =
        boost::typeindex::type_id_with_cvr<T>().pretty_name();

    std::string buf;
    if (!payload.SerializeToString(&buf)) {
      throw std::invalid_argument("serial queue task " + queue);
    }
    this->publish(queue, id, palm::CONTENT_TYPE_GRPC, buf);
  }

  inline void declare_queue(const std::string& exchange,
                            const std::string& queue) {
    this->declare_queue(exchange, "fanout", queue, "");
  }
  void declare_queue(const std::string& queue);

 private:
  void declare_queue(const std::string& exchange_name,
                     const std::string& exchange_type, const std::string& queue,
                     const std::string& routing_key);
  void publish(const std::string& exchange, const std::string& routing_key,
               const std::string& id, const std::string& content_type,
               const std::string& payload);

  amqp_connection_state_t _con;
  uint16_t _channel_id;
};

class Config {
 public:
  Config(const toml::table& root);
  std::shared_ptr<Connection> open() const;

 private:
  std::string _host;
  uint16_t _port;
  std::string _virtual_host;
  std::string _user;
  std::string _password;
  uint16_t _channel_id;
};
}  // namespace rabbitmq
}  // namespace palm
