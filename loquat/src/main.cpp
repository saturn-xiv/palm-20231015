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
  program.add_epilog("https://github.com/saturn-xiv/palm");
  program.add_argument("-d", "--debug")
      .default_value(false)
      .help("run on debug mode")
      .implicit_value(true);

  argparse::ArgumentParser generate_token_command("generate-key");
  {
    generate_token_command.add_argument("-y", "--years")
        .default_value(10)
        .scan<'i', int>();
    generate_token_command.add_argument("-i", "--id").required();
  }

  argparse::ArgumentParser rpc_command("rpc");
  {
    rpc_command.add_argument("-p", "--port")
        .default_value(8080)
        .scan<'i', int>();
    rpc_command.add_argument("-w", "--worker-count")
        .default_value(8)
        .scan<'i', int>();
  }

  program.add_subparser(rpc_command);
  program.add_subparser(generate_token_command);

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

  if (program.is_subcommand_used(rpc_command)) {
    const int port = rpc_command.get<int>("--port");
    const int worker_count = rpc_command.get<int>("--worker-count");
    loquat::launch(static_cast<uint16_t>(port),
                   static_cast<size_t>(worker_count));
  } else if (program.is_subcommand_used(generate_token_command)) {
    const int years = generate_token_command.get<int>("--years");
    const std::string id = generate_token_command.get<std::string>("--id");
    spdlog::warn("generate token to {} for {}-years", id, years);

    loquat::Jwt jwt(loquat::PROJECT_NAME);
    const auto token =
        jwt.sign(id, std::chrono::duration_cast<std::chrono::seconds>(
                         std::chrono::years(years)));
    std::cout << token << std::endl;
  }

  return EXIT_SUCCESS;
}