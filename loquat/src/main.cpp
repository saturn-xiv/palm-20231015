#include "loquat/application.hpp"
#include "loquat/service.hpp"
#include "loquat/version.hpp"

#include <tink/config/tink_config.h>
#include <tink/jwt/jwt_mac_config.h>
#include <tink/version.h>
#include <argparse/argparse.hpp>

int main(int argc, char** argv) {
  const std::string version =
      loquat::GIT_VERSION + "(" + loquat::BUILD_TIME + ")";
  argparse::ArgumentParser program(loquat::PROJECT_NAME, version);
  program.add_description(loquat::PROJECT_DESCRIPTION);
  program.add_epilog(palm::PROJECT_HOMEPAGE);
  program.add_argument("-d", "--debug")
      .default_value(false)
      .help("run on debug mode")
      .implicit_value(true);
  program.add_argument("-p", "--port").default_value(8080).scan<'i', int>();

  try {
    program.parse_args(argc, argv);
  } catch (const std::runtime_error& err) {
    spdlog::error("{}", err.what());
    std::exit(1);
  }

  {
    spdlog::set_level(program.get<bool>("--debug") ? spdlog::level::debug
                                                   : spdlog::level::info);
    spdlog::debug("run on debug mode {}", version);

    spdlog::debug("tink v{}", crypto::tink::Version::kTinkVersion);
    spdlog::debug("protobuffer v{}", google::protobuf::internal::VersionString(
                                         GOOGLE_PROTOBUF_VERSION));
  }
  {
    const auto status = crypto::tink::TinkConfig::Register();
    if (!status.ok()) {
      spdlog::error("failed to register tink");
      return EXIT_FAILURE;
    }
  }
  {
    const auto status = crypto::tink::JwtMacRegister();
    if (!status.ok()) {
      spdlog::error("failed to register tink-jwt");
      return EXIT_FAILURE;
    }
  }

  const int port = program.get<int>("--port");
  rest_rpc::rpc_service::rpc_server server(static_cast<uint16_t>(port),
                                           std::thread::hardware_concurrency());

  server.register_handler("echo", &loquat::services::echo);

  server.register_handler("aes.encrypt", &loquat::services::aes::encrypt);
  server.register_handler("aes.decrypt", &loquat::services::aes::decrypt);

  server.register_handler("jwt.sign", &loquat::services::jwt::sign);
  server.register_handler("jwt.verify", &loquat::services::jwt::verify);

  server.register_handler("hmac.sign", &loquat::services::hmac::sign);
  server.register_handler("hmac.verify", &loquat::services::hmac::verify);

  spdlog::info("listening on tcp://0.0.0.0:{}", port);
  server.run();

  return EXIT_SUCCESS;
}
