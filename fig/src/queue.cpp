#include "palm/queue.hpp"

#include <chrono>

#include <boost/log/trivial.hpp>

inline static void die_on_rabbitmq_code(const int code,
                                        const std::string& context) {
  if (code != AMQP_STATUS_OK) {
    std::stringstream ss;
    ss << context << "(" << code << "): " << amqp_error_string2(code);
    throw std::runtime_error(ss.str());
  }
}

inline static void die_on_rabbitmq_reply(const amqp_rpc_reply_t reply,
                                         const std::string& context) {
  std::stringstream ss;
  switch (reply.reply_type) {
    case AMQP_RESPONSE_NORMAL:
      return;
    case AMQP_RESPONSE_NONE:
      ss << context << ": missing RPC reply type!";
      break;

    case AMQP_RESPONSE_LIBRARY_EXCEPTION:
      ss << context << ": " << amqp_error_string2(reply.library_error);
      break;

    case AMQP_RESPONSE_SERVER_EXCEPTION:
      switch (reply.reply.id) {
        case AMQP_CONNECTION_CLOSE_METHOD: {
          amqp_connection_close_t* m =
              (amqp_connection_close_t*)reply.reply.decoded;
          ss << context << ": server connection error(" << m->reply_code
             << ") len(" << (int)m->reply_text.len << ") "
             << (char*)m->reply_text.bytes;
          break;
        }
        case AMQP_CHANNEL_CLOSE_METHOD: {
          amqp_channel_close_t* m = (amqp_channel_close_t*)reply.reply.decoded;
          ss << context << ": server channel error (" << m->reply_code
             << ") len(" << (int)m->reply_text.len << ")"
             << " " << (char*)m->reply_text.bytes;
          break;
        }
        default:
          ss << context << ": unknown server error, method id "
             << reply.reply.id;
          break;
      }
      break;
  }
  throw std::runtime_error(ss.str());
}

palm::rabbitmq::Config::Config(const toml::table& root) {
  this->_host = root["host"].value_or("127.0.0.1");
  this->_port = root["port"].value_or(5672);
  this->_channel_id = root["channel-id"].value_or(1);
  this->_virtual_host = root["virtual-host"].value<std::string>().value();
  this->_user = root["user"].value_or("guest");
  this->_password = root["password"].value_or("guest");
}

std::shared_ptr<palm::rabbitmq::Connection> palm::rabbitmq::Config::open()
    const {
  std::shared_ptr<palm::rabbitmq::Connection> it =
      std::make_shared<palm::rabbitmq::Connection>(
          this->_host, this->_port, this->_user, this->_password,
          this->_virtual_host, this->_channel_id);
  return it;
}

palm::rabbitmq::Connection::Connection(const std::string& host,
                                       const uint16_t port,
                                       const std::string& user,
                                       const std::string& password,
                                       const std::string& virtual_host,
                                       const uint16_t channel_id) {
  BOOST_LOG_TRIVIAL(debug) << "open rabbitmq amqp://" << user << "@" << host
                           << ":" << port << "/" << virtual_host
                           << "?channel=" << channel_id
                           << "&version=" << AMQP_VERSION_STRING;
  this->_con = amqp_new_connection();
  amqp_socket_t* sck = amqp_tcp_socket_new(this->_con);
  if (sck == nullptr) {
    throw std::runtime_error("creating rabbitmq TCP socket");
  }
  {
    const auto code = amqp_socket_open(sck, host.c_str(), port);
    die_on_rabbitmq_code(code, "opening rabbitmq TCP socket");
  }
  {
    const auto reply =
        amqp_login(this->_con, virtual_host.c_str(), 0, (1 << 18), 0,
                   AMQP_SASL_METHOD_PLAIN, user.c_str(), password.c_str());

    die_on_rabbitmq_reply(reply, "rabbitmq login");
  }

  {
    amqp_channel_open(this->_con, this->_channel_id);
    const auto reply = amqp_get_rpc_reply(this->_con);
    die_on_rabbitmq_reply(reply, "open rabbitmq channel");
  }
}
palm::rabbitmq::Connection::~Connection() {
  {
    const auto reply =
        amqp_channel_close(this->_con, this->_channel_id, AMQP_REPLY_SUCCESS);
    die_on_rabbitmq_reply(reply, "close rabbitmq channel");
  }
  {
    const auto reply = amqp_connection_close(this->_con, AMQP_REPLY_SUCCESS);
    die_on_rabbitmq_reply(reply, "close rabbitmq connection");
  }
  {
    const auto code = amqp_destroy_connection(this->_con);
    die_on_rabbitmq_code(code, "end rabbitmq connection ");
  }
}
void palm::rabbitmq::Connection::consume(const std::string& queue,
                                         palm::queue::Handler& handler) {
  amqp_basic_consume(this->_con, this->_channel_id,
                     amqp_cstring_bytes(queue.c_str()), amqp_empty_bytes, 0, 1,
                     0, amqp_empty_table);
  {
    const auto reply = amqp_get_rpc_reply(this->_con);
    die_on_rabbitmq_reply(reply, "basic consume rabbitmq");
  }
  for (;;) {
    amqp_maybe_release_buffers(this->_con);

    amqp_envelope_t envelope;
    {
      const auto reply =
          amqp_consume_message(this->_con, &envelope, nullptr, 0);
      die_on_rabbitmq_reply(reply, "consume rabbitmq message");
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

void palm::rabbitmq::Connection::declare_queue(const std::string& exchange_name,
                                               const std::string& exchange_type,
                                               const std::string& queue,
                                               const std::string& routing_key) {
  BOOST_LOG_TRIVIAL(debug) << "declare rabbitmq exchange (" << exchange_name
                           << ") with type(" << exchange_type << ")";
  amqp_exchange_declare(
      this->_con, this->_channel_id, amqp_cstring_bytes(exchange_name.c_str()),
      amqp_cstring_bytes(exchange_type.c_str()), 0, 1, 0, 0, amqp_empty_table);
  {
    const auto reply = amqp_get_rpc_reply(this->_con);
    die_on_rabbitmq_reply(reply, "declare rabbitmq exchange(" + exchange_name +
                                     ") with type(" + exchange_type + ")");
  }

  BOOST_LOG_TRIVIAL(debug) << "declare rabbitmq queue " << queue;
  amqp_queue_declare(this->_con, this->_channel_id,
                     amqp_cstring_bytes(queue.c_str()), 0, 1, 0, 0,
                     amqp_empty_table);

  {
    const auto reply = amqp_get_rpc_reply(this->_con);
    die_on_rabbitmq_reply(reply, "declare rabbitmq queue " + queue);
  }

  BOOST_LOG_TRIVIAL(debug) << "bind rabbitmq queue(" << queue
                           << ") with routing-key(" << routing_key
                           << ") to exchange(" << exchange_name << ")";
  amqp_queue_bind(this->_con, this->_channel_id,
                  amqp_cstring_bytes(queue.c_str()),
                  amqp_cstring_bytes(exchange_name.c_str()),
                  amqp_cstring_bytes(routing_key.c_str()), amqp_empty_table);
  {
    const auto reply = amqp_get_rpc_reply(this->_con);
    die_on_rabbitmq_reply(reply, "bind rabbitmq queue(" + queue +
                                     ") with routing-key(" + routing_key +
                                     ") to exchange(" + exchange_name + ")");
  }
}

void palm::rabbitmq::Connection::declare_queue(const std::string& queue) {
  BOOST_LOG_TRIVIAL(debug) << "declare rabbitmq queue " << queue;
  amqp_queue_declare_ok_t* qd = amqp_queue_declare(
      this->_con, this->_channel_id, amqp_cstring_bytes(queue.c_str()), 0, 1, 0,
      0, amqp_empty_table);

  {
    const auto reply = amqp_get_rpc_reply(this->_con);
    die_on_rabbitmq_reply(reply, "declare rabbitmq queue " + queue);
  }
}
void palm::rabbitmq::Connection::publish(const std::string& exchange,
                                         const std::string& routing_key,
                                         const std::string& id,
                                         const std::string& content_type,
                                         const std::string& payload) {
  BOOST_LOG_TRIVIAL(info) << "publish message " << id << " into (" << exchange
                          << "," << routing_key << ")";
  amqp_basic_properties_t props;
  props._flags = AMQP_BASIC_MESSAGE_ID_FLAG | AMQP_BASIC_CONTENT_TYPE_FLAG |
                 AMQP_BASIC_DELIVERY_MODE_FLAG | AMQP_BASIC_TIMESTAMP_FLAG;

  props.message_id = amqp_cstring_bytes(id.c_str());
  props.content_type = amqp_cstring_bytes(content_type.c_str());
  props.delivery_mode = 2;
  {
    const auto now = std::chrono::system_clock::now();
    props.timestamp =
        std::chrono::duration_cast<std::chrono::seconds>(now.time_since_epoch())
            .count();
  }
  const auto code = amqp_basic_publish(
      this->_con, this->_channel_id, amqp_cstring_bytes(exchange.c_str()),
      amqp_cstring_bytes(routing_key.c_str()), 0, 0, &props,
      amqp_cstring_bytes(payload.c_str()));
  die_on_rabbitmq_code(code, "publish rabbitmq task");
}
