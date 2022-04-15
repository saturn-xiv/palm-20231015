#include "palm/fig.hpp"
#include "palm/auth.hpp"
#include "palm/cms.hpp"
#include "palm/forum.hpp"
#include "palm/mall.hpp"
#include "palm/nut.hpp"
#include "palm/orm.hpp"
#include "palm/version.hpp"

#include <grpcpp/ext/proto_server_reflection_plugin.h>
#include <grpcpp/health_check_service_interface.h>
#include <grpcpp/security/server_credentials.h>
#include <grpcpp/server.h>
#include <grpcpp/server_builder.h>
#include <grpcpp/server_context.h>
#include <boost/program_options.hpp>
#include <boost/property_tree/ini_parser.hpp>

palm::fig::Application::Application(int argc, char** argv) {
  std::filesystem::path config_file;

  boost::program_options::options_description generic("Generic options");
  generic.add_options()("version,v", "print version string")(
      "help,h", "produce help message")("debug,d", "run on debug mode")(
      "config,c",
      boost::program_options::value<std::filesystem::path>(&config_file)
          ->default_value("config.ini"),
      "config file path");

  boost::program_options::options_description db("PostgreSql");
  db.add_options()("db-migrate", "runs all pending migrations")(
      "db-rollback", "reverts the latest run migration")(
      "db-list", "lists all available migrations");

  boost::program_options::options_description cache("Redis");
  cache.add_options()("cache-list", "lists all available cache items")(
      "cache-clear", "clear cache items");

  boost::program_options::options_description services("Services");
  services.add_options()("rpc", "start rpc server")("web", "start web server")(
      "worker", "start worker cosumer");

  boost::program_options::options_description args;
  args.add(generic).add(db).add(cache).add(services);

  boost::program_options::variables_map vm;
  boost::program_options::store(
      boost::program_options::parse_command_line(argc, argv, args), vm);
  boost::program_options::notify(vm);

  if (vm.count("help")) {
    std::cout << args << std::endl;
    return;
  }
  if (vm.count("version")) {
    std::cout << PALM_GIT_VERSION << "(" << PALM_BUILD_TIME << ")" << std::endl;
    return;
  }

  palm::init_logger(vm.count("debug"));
  BOOST_LOG_TRIVIAL(debug) << "load config file from " << config_file;
  boost::property_tree::ptree config;
  boost::property_tree::read_ini(config_file, config);

  BOOST_LOG_TRIVIAL(debug) << "connect postgresql server";
  std::shared_ptr<palm::postgresql::Config> pgsql_config =
      std::make_shared<palm::postgresql::Config>(config);
  auto pgsql = pgsql_config->open();
  BOOST_LOG_TRIVIAL(debug) << "connect mysql server";
  std::shared_ptr<palm::mysql::Config> mysql_config =
      std::make_shared<palm::mysql::Config>(config);
  auto mysql = mysql_config->open();
  BOOST_LOG_TRIVIAL(debug) << "connect redis server";
  // TODO
  BOOST_LOG_TRIVIAL(debug) << "connect rabbitmq server";
  // TODO
  BOOST_LOG_TRIVIAL(debug) << "connect elasticsearch server";
  // TODO

  {
    if (vm.count("db-migrate")) {
      // TODO
      return;
    }
    if (vm.count("db-rollback")) {
      //  TODO
      return;
    }
    if (vm.count("db-list")) {
      // TODO
      return;
    }
  }
  {
    std::shared_ptr<palm::redis::Factory> factory =
        std::make_shared<palm::redis::Factory>(config);
    palm::redis::Pool::instance().open(factory);
    palm::redis::PooledConnection db;
    if (vm.count("cache-list")) {
      const auto flags = std::cout.flags();
      std::cout << std::setiosflags(std::ios::left);
      std::cout << std::setw(12) << "TTL"
                << " "
                << "KEY" << std::endl;
      // TODO
      // for (const auto& it : db.all()) {
      //   std::cout << std::setw(12) << it.second << " " << it.first <<
      //   std::endl;
      // }
      return;
    }
    if (vm.count("cache-clear")) {
      db.clear();
      return;
    }
  }

  {
    const std::string secrets = config.get<std::string>("secrets");
    palm::Jwt::instance().set_key(secrets);
    palm::Aes::instance().set_key(secrets);
    palm::Hmac::instance().set_key(secrets);
  }

  if (vm.count("rpc")) {
    this->rpc(config);
    return;
  }
  if (vm.count("web")) {
    this->web(config);
    return;
  }
  if (vm.count("worker")) {
    this->worker(config);
    return;
  }
  std::cout << args << std::endl;
}

void palm::fig::Application::rpc(
    const boost::property_tree::ptree& config) const {
  uint16_t port = config.get("rpc.port", 9999);
  std::stringstream address;
  address << "0.0.0.0:" << port;

  // TODO
  std::shared_ptr<Poco::Data::SessionPool> pgsql =
      std::make_shared<Poco::Data::SessionPool>("", "");
  // TODO
  std::shared_ptr<Poco::Data::SessionPool> mysql =
      std::make_shared<Poco::Data::SessionPool>("", "");

  palm::auth::UserService auth_user(pgsql);
  palm::auth::AttachmentService auth_attachment(pgsql);
  palm::nut::SiteService nut_site(pgsql, mysql);
  palm::nut::LocaleService nut_locale(pgsql);
  palm::nut::SmtpService nut_smtp(pgsql);
  palm::nut::TwilioService nut_twilio(pgsql);
  palm::nut::GoogleService nut_google(pgsql);
  palm::nut::BaiduService nut_baidu(pgsql);
  palm::nut::AliPayService nut_ali_pay(pgsql);
  palm::nut::WechatPayService nut_wechat_pay(pgsql);

  grpc::EnableDefaultHealthCheckService(true);
  grpc::reflection::InitProtoReflectionServerBuilderPlugin();

  grpc::ServerBuilder builder;
  builder.AddListeningPort(address.str(), grpc::InsecureServerCredentials());
  builder.RegisterService(&auth_user);
  builder.RegisterService(&auth_attachment);
  builder.RegisterService(&nut_site);
  builder.RegisterService(&nut_locale);
  builder.RegisterService(&nut_smtp);
  builder.RegisterService(&nut_twilio);
  builder.RegisterService(&nut_google);
  builder.RegisterService(&nut_baidu);
  builder.RegisterService(&nut_ali_pay);
  builder.RegisterService(&nut_wechat_pay);
  std::unique_ptr<grpc::Server> server(builder.BuildAndStart());
  BOOST_LOG_TRIVIAL(info) << "server listening on " << address.str();
  server->Wait();
}

void palm::fig::Application::web(
    const boost::property_tree::ptree& tree) const {
  // TODO
}
void palm::fig::Application::worker(
    const boost::property_tree::ptree& tree) const {
  // TODO
}
