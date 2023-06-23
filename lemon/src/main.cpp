#include "lemon/application.hpp"
#include "lemon/version.hpp"

#include <argparse/argparse.hpp>

int main(int argc, char** argv) {
  const std::string version =
      lemon::GIT_VERSION + "(" + lemon::BUILD_TIME + ")";
  argparse::ArgumentParser program(lemon::PROJECT_NAME, version);
  program.add_description(lemon::PROJECT_DESCRIPTION);
  program.add_epilog("https://github.com/saturn-xiv/palm");
  program.add_argument("-d", "--debug")
      .default_value(false)
      .help("run on debug mode")
      .implicit_value(true);

  {
    program.add_argument("-s", "--rpc-server")
        .default_value("http://localhost:9999")
        .required();
    program.add_argument("-p", "--listen-port")
        .default_value(8080)
        .scan<'i', int>();
    {
      std::stringstream ss;
      ss << "options: " << magic_enum::enum_name(lemon::Theme::CleanWhite)
         << "," << magic_enum::enum_name(lemon::Theme::Docsy) << ","
         << magic_enum::enum_name(lemon::Theme::Gantry) << ","
         << magic_enum::enum_name(lemon::Theme::Hinode) << ","
         << magic_enum::enum_name(lemon::Theme::Universal) << ","
         << magic_enum::enum_name(lemon::Theme::XCorporation);

      program.add_argument("-t", "--theme")
          .default_value(lemon::Theme::Universal)
          .help(ss.str())
          .required();
    }
  }

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

    spdlog::debug(
        "Protocol Buffers v{}",
        google::protobuf::internal::VersionString(GOOGLE_PROTOBUF_VERSION));
    spdlog::debug("gRPC v{}", grpc::Version());
  }

  const int port = program.get<int>("--listen-port");
  const std::string server = program.get<std::string>("--rpc-server");
  const lemon::Theme theme = program.get<lemon::Theme>("--theme");

  lemon::Application app(server, static_cast<uint16_t>(port), theme);
  app.launch();
  return EXIT_SUCCESS;
}
