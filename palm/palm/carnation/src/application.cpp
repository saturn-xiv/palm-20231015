#include "carnation/application.hpp"
#include "palm/version.hpp"

#include <absl/strings/str_format.h>
#include <grpcpp/grpcpp.h>
#include <grpcpp/health_check_service_interface.h>
#include <grpcpp/security/server_credentials.h>
#include <argparse/argparse.hpp>

static const std::string PROJECT_NAME = "carnation";

carnation::Application::Application(int argc, char** argv) {
  const std::string version = palm::GIT_VERSION + "(" + palm::BUILD_TIME + ")";
  argparse::ArgumentParser program(PROJECT_NAME, version);
  program.add_description("A carbin service.");
  program.add_epilog(palm::PROJECT_HOMEPAGE_URL);
  program.add_argument("-d", "--debug")
      .default_value(false)
      .help("run on debug mode")
      .implicit_value(true);

  program.add_argument("-p", "--port").default_value(8080).scan<'i', int>();
  program.add_argument("--cert-file")
      .default_value(PROJECT_NAME + ".crt")
      .required();
  program.add_argument("--key-file")
      .default_value(PROJECT_NAME + ".key")
      .required();
  program.add_argument("--ca-file").default_value("ca.crt").required();

  try {
    program.parse_args(argc, argv);
  } catch (const std::runtime_error& err) {
    spdlog::error("{}", err.what());
    std::exit(1);
  }

  palm::init(program.get<bool>("--debug"));

  const int port = program.get<int>("--port");
  const std::string cert_file = program.get<std::string>("--cert-file");
  const std::string key_file = program.get<std::string>("--key-file");
  const std::string ca_file = program.get<std::string>("--ca-file");
  const palm::Tls tls(key_file, cert_file, ca_file);
  this->launch(port, tls);
}

void carnation::Application::launch(uint16_t port, const palm::Tls& tls) const {
  const std::string addr = absl::StrFormat("0.0.0.0:%d", port);

  carnation::CasbinServiceImpl casbin_service;

  grpc::EnableDefaultHealthCheckService(true);
  grpc::ServerBuilder builder;
  const auto credentials_options = tls.grpc_server_ssl_credentials_options();
  auto credentials = grpc::SslServerCredentials(credentials_options);
  builder.AddListeningPort(addr, credentials);
  builder.RegisterService(&casbin_service);

  std::unique_ptr<grpc::Server> server(builder.BuildAndStart());
  spdlog::info("listening on tcps://0.0.0.0:{}", port);

  server->Wait();
}
