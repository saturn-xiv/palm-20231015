#include "palm/mint.hpp"
#include "palm/nut.hpp"
#include "palm/ops-metrics.hpp"
#include "palm/version.hpp"

// #include <filesystem>

// #include <boost/log/trivial.hpp>
// #include <boost/program_options.hpp>

// palm::mint::Application::Application(int argc, char** argv) {
//   std::filesystem::path config_file;

//   boost::program_options::options_description generic("Generic options");
//   generic.add_options()("version,v", "print version string")(
//       "help,h", "produce help message")("debug,d", "run on debug mode")(
//       "config,c",
//       boost::program_options::value<std::filesystem::path>(&config_file)
//           ->default_value("config.ini"),
//       "config file path");

//   boost::program_options::options_description crawlers("Crawlers");
//   crawlers.add_options()("journal",
//                          boost::program_options::value<std::string>(),
//                          "listen systemd journal by unit-name")(
//       "nginx-access", boost::program_options::value<std::filesystem::path>(),
//       "listen nginx.access.log")(
//       "nginx-error", boost::program_options::value<std::filesystem::path>(),
//       "listen nginx.error.log")("heartbeat", "sent a heartbeat package")(
//       "snmp", "get/walk snmp agents");

//   boost::program_options::options_description args;
//   args.add(generic).add(crawlers);

//   boost::program_options::variables_map vm;
//   boost::program_options::store(
//       boost::program_options::parse_command_line(argc, argv, args), vm);
//   boost::program_options::notify(vm);

//   if (vm.count("help")) {
//     std::cout << args << std::endl;
//     return;
//   }
//   if (vm.count("version")) {
//     std::cout << palm::GIT_VERSION << "(" << palm::BUILD_TIME << ")"
//               << std::endl;
//     return;
//   }

//   palm::init_logger(vm.count("debug"));
//   BOOST_LOG_TRIVIAL(debug) << "load config file from " << config_file;
//   boost::property_tree::ptree config;
//   boost::property_tree::read_ini(config_file, config);

//   std::stringstream address;
//   {
//     const std::string host = config.get("rpc.host", "localhost");
//     const uint16_t port = config.get("rpc.port", 9090);
//     address << "0.0.0.0:" << port;
//   }
//   // TODO
//   std::cout << args << std::endl;
// }

// void palm::mint::Application::nginx(const std::string& address) {
//   if (palm::is_stopped()) {
//     return;
//   }
//   BOOST_LOG_TRIVIAL(info) << "connect to " << address;
//   palm::ops::metrics::ReportClient cli(
//       grpc::CreateChannel(address, grpc::InsecureChannelCredentials()));
//   // TODO
//   cli.nginx_error("bla bla bla");
// }

// void palm::mint::Application::journal(const std::string& host) {
//   if (palm::is_stopped()) {
//     return;
//   }
// }

// void palm::mint::Application::heartbeat(const std::string& host) {
//   if (palm::is_stopped()) {
//     return;
//   }
// }

// void palm::mint::Application::snmp(const std::string& host,
//                                    const boost::property_tree::ptree& config) {
//   if (palm::is_stopped()) {
//     return;
//   }
// }
