#pragma once

#include "loquat/env.hpp"

#include <rest_rpc.hpp>

namespace loquat {
namespace services {
std::string echo(rest_rpc::rpc_service::rpc_conn con,
                 const std::string& message);
namespace jwt {
std::string sign(rest_rpc::rpc_service::rpc_conn con, const std::string& zone,
                 const std::string& subject, const size_t ttl);
std::string verify(rest_rpc::rpc_service::rpc_conn con, const std::string& zone,
                   const std::string& token);
}  // namespace jwt
namespace hmac {
std::string sign(rest_rpc::rpc_service::rpc_conn con, const std::string& zone,
                 const std::string& plain);
void verify(rest_rpc::rpc_service::rpc_conn con, const std::string& zone,
            const std::string& code, const std::string& plain);
}  // namespace hmac
namespace aes {
std::string encrypt(rest_rpc::rpc_service::rpc_conn con,
                    const std::string& zone, const std::string& plain);
std::string decrypt(rest_rpc::rpc_service::rpc_conn con,
                    const std::string& zone, const std::string& code);
}  // namespace aes
}  // namespace services
}  // namespace loquat
