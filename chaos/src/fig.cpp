#include "palm/fig.hpp"
#include "palm/version.hpp"

#include <boost/program_options.hpp>

#include <grpcpp/ext/proto_server_reflection_plugin.h>
#include <grpcpp/health_check_service_interface.h>

palm::fig::Rpc::Rpc(const toml::table& config) {
  this->_port = config["port"].value_or(9999);
}
palm::fig::Http::Http(const toml::table& config) {
  this->_port = config["port"].value_or(8080);
}
palm::fig::Config::Config(const toml::table& config) {
  this->_debug_mode = config["debug-mode"].value_or(false);
  this->_secret_key =
      config["secret-key"].value_or(palm::base64::to(palm::random::bytes(32)));
  this->_http = std::make_shared<palm::fig::Http>(*(config["http"].as_table()));
  this->_rpc = std::make_shared<palm::fig::Rpc>(*(config["rpc"].as_table()));
  this->_postgresql = std::make_shared<palm::postgresql::Config>(
      *(config["postgresql"].as_table()));
  this->_redis =
      std::make_shared<palm::redis::Config>(*(config["redis"].as_table()));
  this->_rabbitmq = std::make_shared<palm::rabbitmq::Config>(
      *(config["rabbitmq"].as_table()));
  this->_opensearch = std::make_shared<palm::opensearch::Config>(
      *(config["opensearch"].as_table()));
}

void palm::fig::Application::launch(int argc, char** argv) {
  std::filesystem::path config;

  boost::program_options::options_description generic("Generic options");
  generic.add_options()("version,v", "print version string")(
      "help,h", "produce help message")(
      "config,c",
      boost::program_options::value<std::filesystem::path>(&config)
          ->default_value("config.toml"),
      "load configuration from file.");

  std::string user;
  boost::program_options::options_description users("User options");
  users.add_options()(
      "set-user-password", boost::program_options::value<std::string>(),
      "set user's password")("list-users", "list all users from database");

  boost::program_options::options_description all(PALM_PROJECT_DESCRIPTION);
  all.add(generic).add(users);

  boost::program_options::variables_map vm;
  boost::program_options::store(
      boost::program_options ::parse_command_line(argc, argv, all), vm);
  boost::program_options::notify(vm);

  if (vm.count("help")) {
    std::cout << all;
    return;
  }
  if (vm.count("version")) {
    std::cout << PALM_GIT_VERSION << "(" << PALM_BUILD_TIME << ")" << std::endl;
    return;
  }
}

void palm::fig::Application::rpc(const palm::fig::Config& config) const {
  palm::init_logger(config._debug_mode);
  std::string address = config._rpc->address();
  palm::nut::LocaleServiceImpl locale_service;

  grpc::EnableDefaultHealthCheckService(true);
  grpc::reflection::InitProtoReflectionServerBuilderPlugin();
  grpc::ServerBuilder builder;

  builder.AddListeningPort(address, grpc::InsecureServerCredentials());
  builder.RegisterService(&locale_service);

  std::unique_ptr<grpc::Server> server(builder.BuildAndStart());
  BOOST_LOG_TRIVIAL(info) << "rpc server listening on " << address;

  server->Wait();
}

void palm::fig::Application::list_user(const Config& config) const {
  // TODO
}
void palm::fig::Application::set_user_password(
    const Config& config, const std::string& user,
    const std::string& password) const {
  // TODO
}
