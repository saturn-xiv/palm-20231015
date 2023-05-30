#include "palm/lemon.hpp"
#include "palm/version.hpp"

// #include <boost/program_options.hpp>

// palm::lemon::application::Main::Main(int argc, char** argv) {
//   boost::program_options::options_description generic("Generic options");
//   generic.add_options()("version,v", "print version string")(
//       "help,h", "produce help message")("debug,d", "run on debug mode")(
//       "config,c",
//       boost::program_options::value<std::string>()->default_value(
//           "config.toml"),
//       "config file path");

//   boost::program_options::variables_map vm;
//   boost::program_options::parsed_options parsed =
//       boost::program_options::parse_command_line(argc, argv, generic);

//   boost::program_options::store(parsed, vm);

//   if (vm.count("help")) {
//     std::cout << generic << std::endl;
//     return;
//   }
//   if (vm.count("version")) {
//     std::cout << palm::GIT_VERSION << "(" << palm::BUILD_TIME << ")"
//               << std::endl;
//     return;
//   }

//   GenericOptions it;
//   {
//     it.debug = vm.count("debug");
//     it.config = vm["config"].as<std::string>();
//   }
//   this->launch(it);
// }

// void palm::lemon::application::Main::launch(
//     const GenericOptions& options) const {
//   palm::init_logger(options.debug);
//   BOOST_LOG_TRIVIAL(debug) << "load config file from " << options.config;
//   const auto config = toml::parse_file(options.config);

//   std::stringstream address;
//   {
//     const std::string host = config["host"].value_or("127.0.0.1");
//     const uint16_t port = config["port"].value<uint16_t>().value_or(9999);
//     address << host << ":" << port;
//   }

//   palm::Sqlite3 sqlite(toml::table{});
//   std::shared_ptr<soci::session> db = sqlite.open();
//   {
//     for (const auto& it : {
//              palm::ops::router::dao::setting::INIT_TABLE,
//              palm::ops::router::dao::setting::INIT_INDEX_KEY,
//              palm::ops::router::dao::user::INIT_TABLE,
//              palm::ops::router::dao::user::INIT_INDEX_NAME,
//              palm::ops::router::dao::user::INIT_INDEX_GROUP,
//              palm::ops::router::dao::host::INIT_TABLE,
//              palm::ops::router::dao::host::INIT_INDEX_NAME,
//              palm::ops::router::dao::host::INIT_INDEX_MAC,
//              palm::ops::router::dao::host::INIT_INDEX_IP,
//              palm::ops::router::dao::rule::INIT_TABLE,
//              palm::ops::router::dao::rule::INIT_INDEX_ZONE_NAME,
//              palm::ops::router::dao::rule::INIT_INDEX_GROUP,
//          }) {
//       *db << it;
//     }
//   }
//   {
//     const auto it = palm::ops::router::dao::setting::get<
//         std::string, palm::ops::router::v1::UserProfile>(*db);
//     if (!it.has_value()) {
//       palm::ops::router::v1::UserProfile user;
//       {
//         user.set_nickname("admin");
//         const std::string password = palm::hashing::sum("123456");
//         user.set_password(password);
//       }
//       BOOST_LOG_TRIVIAL(warning) << "init administrator " << user.nickname();
//       soci::transaction tr(*db);
//       palm::ops::router::dao::setting::set<std::string,
//                                            palm::ops::router::v1::UserProfile>(
//           *db, user);
//       tr.commit();
//     }
//   }

//   const std::string secrets = config["secrets"].value<std::string>().value();
//   std::shared_ptr<palm::Jwt> jwt = std::make_shared<palm::Jwt>(secrets);

//   palm::ops::router::services::User user(db, jwt);
//   palm::ops::router::services::Router router(db, jwt);

//   grpc::EnableDefaultHealthCheckService(true);
//   grpc::ServerBuilder builder;
//   builder.AddListeningPort(address.str(), grpc::InsecureServerCredentials());

//   builder.RegisterService(&user);
//   builder.RegisterService(&router);

//   std::unique_ptr<grpc::Server> server(builder.BuildAndStart());
//   BOOST_LOG_TRIVIAL(info) << "gRPC server listening on tcp://" << address.str()
//                           << "?version=" << grpc::Version() << ","
//                           << google::protobuf::internal::VersionString(
//                                  GOOGLE_PROTOBUF_VERSION);
//   server->Wait();
// }
