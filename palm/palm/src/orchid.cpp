#include "palm/orchid.hpp"
#include "palm/utils.hpp"
#include "palm/version.hpp"

#include <absl/strings/str_format.h>
// #include <grpcpp/ext/proto_server_reflection_plugin.h>
#include <grpcpp/grpcpp.h>
#include <grpcpp/health_check_service_interface.h>
#include <grpcpp/security/server_credentials.h>
#include <argparse/argparse.hpp>

static const std::string PROJECT_NAME = "orchid";

palm::orchid::Application::Application(int argc, char** argv) {
  const std::string version = palm::GIT_VERSION + "(" + palm::BUILD_TIME + ")";
  argparse::ArgumentParser program(PROJECT_NAME, version);
  program.add_description("WeChat mini-program & oauth2 services.");
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

void palm::orchid::Application::launch(uint16_t port,
                                       const palm::Tls& tls) const {
  const std::string addr = absl::StrFormat("0.0.0.0:%d", port);

  palm::orchid::WechatMiniProgramServiceImpl wechat_mini_program_service;
  palm::orchid::WechatOauth2ServiceImpl wechat_oauth2_service;

  grpc::EnableDefaultHealthCheckService(true);
  //   { "name": "grpc", "features": ["codegen"] },
  //   grpc::reflection::InitProtoReflectionServerBuilderPlugin();
  grpc::ServerBuilder builder;
  const auto credentials_options = tls.grpc_server_ssl_credentials_options();
  auto credentials = grpc::SslServerCredentials(credentials_options);
  builder.AddListeningPort(addr, credentials);
  builder.RegisterService(&wechat_mini_program_service);
  builder.RegisterService(&wechat_oauth2_service);

  std::unique_ptr<grpc::Server> server(builder.BuildAndStart());
  spdlog::info("listening on tcps://0.0.0.0:{}", port);

  server->Wait();
}

grpc::Status palm::orchid::WechatMiniProgramServiceImpl::Login(
    grpc::ServerContext* context,
    const palm::orchid::v1::WechatMiniProgramLoginRequest* request,
    palm::orchid::v1::WechatMiniProgramLoginResponse* reply) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::orchid::WechatMiniProgramServiceImpl::PhoneNumber(
    grpc::ServerContext* context,
    const palm::orchid::v1::WechatMiniProgramPhoneNumberRequest* request,
    palm::orchid::v1::WechatMiniProgramPhoneNumberResponse* reply) {
  // TODO
  return grpc::Status::OK;
}

grpc::Status palm::orchid::WechatOauth2ServiceImpl::QrConnect(
    grpc::ServerContext* context,
    const palm::orchid::v1::WechatOauth2QrConnectRequest* request,
    palm::orchid::v1::WechatOauth2QrConnectResponse* reply) {
  // TODO
  return grpc::Status::OK;
}
grpc::Status palm::orchid::WechatOauth2ServiceImpl::Login(
    grpc::ServerContext* context,
    const palm::orchid::v1::WechatOauth2LoginRequest* request,
    palm::orchid::v1::WechatOauth2LoginResponse* reply) {
  // TODO
  return grpc::Status::OK;
}
