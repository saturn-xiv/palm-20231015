#include "palm/queue.hpp"
#include "palm/utils.hpp"

#include <sstream>

#include <magic_enum.hpp>

palm::rabbitmq::Config::Config(const toml::table &node) {
  this->_host = node["host"].value_or("127.0.0.1");
  this->_port = node["port"].value_or(5672);
  this->_user = node["user"].value_or("guest");
  this->_password = node["password"].value_or("guest");
  this->_virtual_host = node["virtual-host"].value_or("/");
}

static void _die_on_error(int status, const std::string &action) {
  if (status != AMQP_STATUS_OK) {
    std::stringstream ss;
    ss << action << ": " << amqp_error_string2(status);
    throw std::runtime_error(ss.str());
  }
}

static void _die_on_amqp_error(amqp_rpc_reply_t reply,
                               const std::string &action) {
  std::stringstream ss;
  ss << action << ": ";
  switch (reply.reply_type) {
    case AMQP_RESPONSE_NORMAL:
      return;
    case AMQP_RESPONSE_NONE:
      ss << "missing RPC reply type!";
      break;

    case AMQP_RESPONSE_LIBRARY_EXCEPTION:
      ss << amqp_error_string2(reply.library_error);
      break;

    case AMQP_RESPONSE_SERVER_EXCEPTION:
      switch (reply.reply.id) {
        case AMQP_CONNECTION_CLOSE_METHOD: {
          amqp_connection_close_t *msg =
              (amqp_connection_close_t *)reply.reply.decoded;
          ss << "server connection error(" << msg->reply_code << ","
             << (int)msg->reply_text.len
             << "), message: " << (char *)msg->reply_text.bytes;
          break;
        }
        case AMQP_CHANNEL_CLOSE_METHOD: {
          amqp_channel_close_t *msg =
              (amqp_channel_close_t *)reply.reply.decoded;
          ss << "server channel error(" << msg->reply_code << ","
             << (int)msg->reply_text.len
             << "), message: " << (char *)msg->reply_text.bytes;
          break;
        }
        default:
          ss << "unknown server error, method id " << reply.reply.id;
          break;
      }
      break;
  }

  throw std::runtime_error(ss.str());
}

palm::rabbitmq::Client::Client(const palm::rabbitmq::Config &config) {
  this->_connection = amqp_new_connection();
  {
    auto socket = amqp_tcp_socket_new(this->_connection);
    if (socket == nullptr) {
      throw std::runtime_error("creating TCP socket");
    }
    {
      const auto status =
          amqp_socket_open(socket, config._host.c_str(), config._port);
      if (status != AMQP_STATUS_OK) {
        throw std::runtime_error("opening TCP socket");
      }
    }
  }
  {
    const auto reply = amqp_login(
        this->_connection, config._virtual_host.c_str(), 0, 131072, 0,
        AMQP_SASL_METHOD_PLAIN, config._user.c_str(), config._password.c_str());
    _die_on_amqp_error(reply, "login");
  }
  {
    amqp_channel_open(this->_connection, CHANNEL_ID);
    const auto reply = amqp_get_rpc_reply(this->_connection);
    _die_on_amqp_error(reply, "opening channel");
  }
}
palm::rabbitmq::Client::~Client() {
  {
    const auto reply =
        amqp_channel_close(this->_connection, CHANNEL_ID, AMQP_REPLY_SUCCESS);
    _die_on_amqp_error(reply, "closing channel");
  }
  {
    const auto reply =
        amqp_connection_close(this->_connection, AMQP_REPLY_SUCCESS);
    _die_on_amqp_error(reply, "closing connection");
  }
  {
    const auto status = amqp_destroy_connection(this->_connection);
    _die_on_error(status, "ending connection");
  }
}

void palm::rabbitmq::Client::declare_exchange(const std::string &name,
                                              const std::string &type,
                                              bool durable) {
  spdlog::info("declare exchange ({}, {})", name, type);
  amqp_exchange_declare(this->_connection, CHANNEL_ID,
                        amqp_cstring_bytes(name.c_str()),
                        amqp_cstring_bytes(type.c_str()), 0, (durable ? 1 : 0),
                        (durable ? 0 : 1), 0, amqp_empty_table);
  _die_on_amqp_error(amqp_get_rpc_reply(this->_connection),
                     "declaring exchange");
}

void palm::rabbitmq::Client::declare_queue(const std::string &name,
                                           bool durable) {
  spdlog::info("declare queue ({})", name);
  amqp_queue_declare(this->_connection, CHANNEL_ID,
                     amqp_cstring_bytes(name.c_str()), 0, (durable ? 1 : 0), 0,
                     (durable ? 0 : 1), amqp_empty_table);
  _die_on_amqp_error(amqp_get_rpc_reply(this->_connection), "declaring queue");
}
void palm::rabbitmq::Client::bind_queue(const std::string &queue,
                                        const std::string &exchange,
                                        const std::string &routing_key) {
  spdlog::info("bind queue({}) to exchange({}, {})", queue, exchange,
               routing_key);
  amqp_queue_bind(this->_connection, CHANNEL_ID,
                  amqp_cstring_bytes(queue.c_str()),
                  amqp_cstring_bytes(exchange.c_str()),
                  amqp_cstring_bytes(routing_key.c_str()), amqp_empty_table);
  _die_on_amqp_error(amqp_get_rpc_reply(this->_connection), "declaring queue");
}

void palm::rabbitmq::Client::publish(const std::string &exchange,
                                     const std::string &routing_key,
                                     const std::string &content_type,
                                     const std::string &message) {
  const std::string &id = palm::uuid();
  spdlog::info("send message ({}, {}) to ({}, {})", id, content_type, exchange,
               routing_key);
  amqp_basic_properties_t props;
  props._flags = AMQP_BASIC_MESSAGE_ID_FLAG | AMQP_BASIC_CONTENT_TYPE_FLAG |
                 AMQP_BASIC_DELIVERY_MODE_FLAG;
  props.message_id = amqp_cstring_bytes(id.c_str());
  props.content_type = amqp_cstring_bytes(content_type.c_str());
  props.delivery_mode = 2; /* persistent delivery mode */
  {
    const auto status = amqp_basic_publish(
        this->_connection, CHANNEL_ID, amqp_cstring_bytes(exchange.c_str()),
        amqp_cstring_bytes(routing_key.c_str()), 0, 0, &props,
        amqp_cstring_bytes(message.c_str()));
    _die_on_error(status, "send message");
  }
}

// https://github.com/alanxz/rabbitmq-c/blob/master/examples/amqp_consumer.c#L18
static void _consume_message(amqp_connection_state_t connection,
                             palm::rabbitmq::Handler &handler) {
  amqp_frame_t frame;
  for (;;) {
    amqp_maybe_release_buffers(connection);

    amqp_envelope_t envelope;
    auto res = amqp_consume_message(connection, &envelope, NULL, 0);
    if (AMQP_RESPONSE_NORMAL != res.reply_type) {
      spdlog::error("bad consumer message reply type {}",
                    magic_enum::enum_name(res.reply_type));
      break;
    }
    spdlog::info("delivery-tag {}, exchange {}({}) routing-key {}({})",
                 (unsigned)envelope.delivery_tag,
                 (char *)envelope.exchange.bytes, (int)envelope.exchange.len,
                 (char *)envelope.routing_key.bytes,
                 (int)envelope.routing_key.len);

    if ((envelope.message.properties._flags & AMQP_BASIC_CONTENT_TYPE_FLAG) &&
        (envelope.message.properties._flags & AMQP_BASIC_MESSAGE_ID_FLAG)) {
      std::string content_type(
          (char *)envelope.message.properties.content_type.bytes,
          (int)envelope.message.properties.content_type.len);
      std::string id((char *)envelope.message.properties.message_id.bytes,
                     (int)envelope.message.properties.message_id.len);
      std::string message((char *)envelope.message.body.bytes,
                          (int)envelope.message.body.len);
      spdlog::info("handle message {}()", id, content_type);
      handler.handle(id, content_type, message);
      amqp_basic_ack(connection, palm::rabbitmq::Client::CHANNEL_ID,
                     envelope.delivery_tag, false);
    }
    amqp_destroy_envelope(&envelope);

    if (handler.is_stopped()) {
      break;
    }
  }
}

void palm::rabbitmq::Client::consume(const std::string &name,
                                     const std::string &queue,
                                     palm::rabbitmq::Handler &handler) {
  amqp_basic_consume(
      this->_connection, CHANNEL_ID, amqp_cstring_bytes(queue.c_str()),
      amqp_cstring_bytes(name.c_str()), 0, 0, 0, amqp_empty_table);
  _die_on_amqp_error(amqp_get_rpc_reply(this->_connection), "consuming");
  _consume_message(this->_connection, handler);
}
