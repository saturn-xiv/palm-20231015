#include "palm/queue.hpp"
#include "palm/crypt.hpp"

#include <exception>

#include <boost/log/trivial.hpp>

#define PALM_RABBITMQ_DEFAULT_CHANNEL_ID 1

void palm::rabbitmq::Factory::set(const boost::property_tree::ptree& config) {
  this->host = config.get("rabbitmq.host", "127.0.0.1");
  this->port = config.get("rabbitmq.port", 5672);
  this->user = config.get("rabbitmq.user", "guest");
  this->password = config.get("rabbitmq.password", "guest");
  this->virtual_host = config.get<std::string>("rabbitmq.virtual-host");
}
std::shared_ptr<palm::rabbitmq::Connection> palm::rabbitmq::Factory::create()
    const {
  std::shared_ptr<palm::rabbitmq::Connection> it =
      std::make_shared<palm::rabbitmq::Connection>(this->host, this->port,
                                                   this->user, this->password,
                                                   this->virtual_host);
  return it;
}

palm::rabbitmq::Connection::Connection(const std::string& host,
                                       const uint16_t port,
                                       const std::string& user,
                                       const std::string& password,
                                       const std::string& virtual_host) {
  this->con = amqp_new_connection();
  amqp_socket_t* sck = amqp_tcp_socket_new(this->con);
  if (sck == nullptr) {
    throw std::runtime_error("creating rabbitmq TCP socket");
  }
  {
    auto code = amqp_socket_open(sck, host.c_str(), port);
    if (AMQP_STATUS_OK != code) {
      std::stringstream ss;
      ss << "opening rabbitmq TCP socket";
      ss << amqp_error_string2(code);
      throw std::runtime_error(ss.str());
    }
  }
  {
    auto reply =
        amqp_login(this->con, virtual_host.c_str(), 0, (1 << 18), 0,
                   AMQP_SASL_METHOD_PLAIN, user.c_str(), password.c_str());
    if (AMQP_RESPONSE_NORMAL != reply.reply_type) {
      throw std::runtime_error("rabbitmq login");
    }
  }

  {
    amqp_channel_open(this->con, PALM_RABBITMQ_DEFAULT_CHANNEL_ID);
    auto reply = amqp_get_rpc_reply(this->con);
    if (AMQP_RESPONSE_NORMAL != reply.reply_type) {
      throw std::runtime_error("open rabbitmq channel");
    }
  }
}
palm::rabbitmq::Connection::~Connection() {
  {
    auto reply = amqp_channel_close(this->con, PALM_RABBITMQ_DEFAULT_CHANNEL_ID,
                                    AMQP_REPLY_SUCCESS);
    if (AMQP_RESPONSE_NORMAL != reply.reply_type) {
      BOOST_LOG_TRIVIAL(error) << "close rabbitmq channel";
      return;
    }
  }
  {
    auto reply = amqp_connection_close(this->con, AMQP_REPLY_SUCCESS);
    if (AMQP_RESPONSE_NORMAL != reply.reply_type) {
      BOOST_LOG_TRIVIAL(error) << "close rabbitmq connection";
      return;
    }
  }
  {
    auto code = amqp_destroy_connection(this->con);
    if (AMQP_STATUS_OK != code) {
      std::stringstream ss;
      ss << "end rabbitmq connection ";
      ss << amqp_error_string2(code);
      BOOST_LOG_TRIVIAL(error) << ss.str();
    }
  }
}

void palm::rabbitmq::Connection::publish(const std::string& queue,
                                         const std::string& content_type,
                                         const std::string& payload) {
  this->ensure_queue(queue);
  amqp_basic_properties_t props;
  props._flags = AMQP_BASIC_MESSAGE_ID_FLAG | AMQP_BASIC_CONTENT_TYPE_FLAG |
                 AMQP_BASIC_DELIVERY_MODE_FLAG;
  const auto id = palm::uuid();
  props.message_id = amqp_cstring_bytes(id.c_str());
  props.content_type = amqp_cstring_bytes(content_type.c_str());
  props.delivery_mode = 2;

  auto code = amqp_basic_publish(this->con, PALM_RABBITMQ_DEFAULT_CHANNEL_ID,
                                 amqp_cstring_bytes("amq.direct"),
                                 amqp_cstring_bytes(queue.c_str()), 0, 0,
                                 &props, amqp_cstring_bytes(payload.c_str()));
  if (AMQP_STATUS_OK != code) {
    std::stringstream ss;
    ss << "publish rabbitmq task";
    ss << amqp_error_string2(code);
    throw std::runtime_error(ss.str());
  }
}

void palm::rabbitmq::Connection::ensure_queue(const std::string& name) {
  amqp_queue_declare_ok_t* qd = amqp_queue_declare(
      this->con, PALM_RABBITMQ_DEFAULT_CHANNEL_ID,
      amqp_cstring_bytes(name.c_str()), 0, 1, 0, 0, amqp_empty_table);

  {
    auto reply = amqp_get_rpc_reply(this->con);
    if (AMQP_RESPONSE_NORMAL != reply.reply_type) {
      throw std::runtime_error("declare rabbitmq queue");
    }
  }

  auto qu = amqp_bytes_malloc_dup(qd->queue);
  if (qu.bytes == nullptr) {
    throw std::runtime_error("out of memory while copying queue name");
  }
  amqp_queue_bind(this->con, PALM_RABBITMQ_DEFAULT_CHANNEL_ID, qu,
                  amqp_cstring_bytes("amq.direct"),
                  amqp_cstring_bytes(name.c_str()), amqp_empty_table);
  {
    auto reply = amqp_get_rpc_reply(this->con);
    if (AMQP_RESPONSE_NORMAL != reply.reply_type) {
      throw std::runtime_error("bind rabbitmq queue");
    }
  }
  amqp_bytes_free(qu);
}
void palm::rabbitmq::Connection::consume(const std::string& queue,
                                         palm::rabbitmq::Handler& handler) {
  this->ensure_queue(queue);
  amqp_basic_consume(this->con, PALM_RABBITMQ_DEFAULT_CHANNEL_ID,
                     amqp_cstring_bytes(queue.c_str()), amqp_empty_bytes, 0, 1,
                     0, amqp_empty_table);
  {
    auto reply = amqp_get_rpc_reply(this->con);
    if (AMQP_RESPONSE_NORMAL != reply.reply_type) {
      throw std::runtime_error("basic consume rabbitmq");
    }
  }
  for (;;) {
    amqp_maybe_release_buffers(this->con);

    amqp_envelope_t envelope;
    auto res = amqp_consume_message(this->con, &envelope, nullptr, 0);
    if (AMQP_RESPONSE_NORMAL != res.reply_type) {
      BOOST_LOG_TRIVIAL(error) << "consume rabbitmq message";
      break;
    }

    if ((envelope.message.properties._flags & AMQP_BASIC_CONTENT_TYPE_FLAG) &&
        (envelope.message.properties._flags & AMQP_BASIC_MESSAGE_ID_FLAG)) {
      char* content_type =
          static_cast<char*>(envelope.message.properties.content_type.bytes);
      char* message_id =
          static_cast<char*>(envelope.message.properties.message_id.bytes);
      char* body = static_cast<char*>(envelope.message.body.bytes);
      handler.execute(content_type, message_id, body);
    } else {
      BOOST_LOG_TRIVIAL(error) << "bad rabbitmq message";
    }

    amqp_destroy_envelope(&envelope);
  }
}
