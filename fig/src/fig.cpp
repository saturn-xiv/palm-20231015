#include "palm/fig.hpp"
#include "palm/cms.hpp"
#include "palm/forum.hpp"
#include "palm/nut.hpp"
#include "palm/ops-metrics.hpp"
#include "palm/version.hpp"

#include <boost/program_options.hpp>

//

// palm::fig::application::Command palm::fig::application::Main::parse(
//     int argc, char** argv) const {
//   boost::program_options::options_description generic("Generic options");
//   generic.add_options()("version,v", "print version string")(
//       "help,h", "produce help message")("debug,d", "run on debug mode")(
//       "config,c",
//       boost::program_options::value<std::string>()->default_value(
//           "config.toml"),
//       "config file path")(
//       "command",
//       boost::program_options::value<std::string>()->default_value("web"),
//       R"(command to execute, could be user-set-password, user-apply-role,
//       i18n-sync, db-status, cache-list, cache-clear, web, rpc, worker)")(
//       "args", boost::program_options::value<std::vector<std::string>>(),
//       "arguments for command");

//   boost::program_options::positional_options_description pos;
//   pos.add("command", 1).add("args", -1);

//   boost::program_options::variables_map vm;
//   boost::program_options::parsed_options parsed =
//       boost::program_options::command_line_parser(argc, argv)
//           .options(generic)
//           .positional(pos)
//           .allow_unregistered()
//           .run();

//   boost::program_options::store(parsed, vm);

//   boost::program_options::options_description set_user_password_desc(
//       "Set user's password options");
//   set_user_password_desc.add_options()(
//       "nickname,n", boost::program_options::value<std::string>(),
//       "user's nickname")("password,p",
//                          boost::program_options::value<std::string>(),
//                          "user's password");

//   boost::program_options::options_description apply_role_to_user_desc(
//       "Apply role to user options");
//   apply_role_to_user_desc.add_options()(
//       "nickname,n", boost::program_options::value<std::string>(),
//       "user's nickname")("role,r",
//       boost::program_options::value<std::string>(),
//                          "role's nickname");

//   boost::program_options::options_description sync_i18n_desc(
//       "Sync I18N options");
//   sync_i18n_desc.add_options()(
//       "folder,f",
//       boost::program_options::value<std::filesystem::path>()->default_value(
//           "locales"),
//       "path to locales folder");

//   std::string command = vm["command"].as<std::string>();
//   if (vm.count("help")) {
//     palm::fig::application::HelpCommand it;
//     std::stringstream ss;
//     ss << generic << "\n"
//        << set_user_password_desc << "\n"
//        << apply_role_to_user_desc << "\n"
//        << sync_i18n_desc;
//     it.body = ss.str();
//     return it;
//   }
//   if (vm.count("version")) {
//     return palm::fig::application::VersionCommand{};
//   }

//   const bool debug = vm.count("debug");
//   const std::string config = vm["config"].as<std::string>();
//   if (command == "user-set-password") {
//     std::vector<std::string> opts =
//         boost::program_options::collect_unrecognized(
//             parsed.options, boost::program_options::include_positional);
//     opts.erase(opts.begin());
//     boost::program_options::store(
//         boost::program_options::command_line_parser(opts)
//             .options(set_user_password_desc)
//             .run(),
//         vm);
//     palm::fig::application::UserSetPasswordCommand it;
//     it.config = config;
//     it.debug = debug;
//     it.nickname = vm["nickname"].as<std::string>();
//     it.password = vm["password"].as<std::string>();

//     return it;
//   }
//   if (command == "user-apply-role") {
//     std::vector<std::string> opts =
//         boost::program_options::collect_unrecognized(
//             parsed.options, boost::program_options::include_positional);
//     opts.erase(opts.begin());

//     boost::program_options::store(
//         boost::program_options::command_line_parser(opts)
//             .options(apply_role_to_user_desc)
//             .run(),
//         vm);
//     palm::fig::application::UserApplyRoleCommand it;
//     it.config = config;
//     it.debug = debug;
//     it.nickname = vm["nickname"].as<std::string>();
//     it.role = vm["role"].as<std::string>();
//     return it;
//   }

//   if (command == "i18n-sync") {
//     std::vector<std::string> opts =
//         boost::program_options::collect_unrecognized(
//             parsed.options, boost::program_options::include_positional);
//     opts.erase(opts.begin());

//     boost::program_options::store(
//         boost::program_options::command_line_parser(opts)
//             .options(sync_i18n_desc)
//             .run(),
//         vm);
//     palm::fig::application::I18nSyncCommand it;
//     it.config = config;
//     it.debug = debug;
//     it.folder = vm["folder"].as<std::filesystem::path>();
//     return it;
//   }
//   if (command == "db-status") {
//     palm::fig::application::DbStatusCommand it;
//     it.config = config;
//     it.debug = debug;
//     return it;
//   }
//   if (command == "cache-list") {
//     palm::fig::application::CacheListCommand it;
//     it.config = config;
//     it.debug = debug;
//     return it;
//   }
//   if (command == "cache-clear") {
//     palm::fig::application::CacheClearCommand it;
//     it.config = config;
//     it.debug = debug;
//     return it;
//   }
//   if (command == "web") {
//     palm::fig::application::WebCommand it;
//     it.config = config;
//     it.debug = debug;
//     return it;
//   }
//   if (command == "rpc") {
//     palm::fig::application::RpcCommand it;
//     it.config = config;
//     it.debug = debug;
//     return it;
//   }
//   if (command == "worker") {
//     palm::fig::application::WorkerCommand it;
//     it.config = config;
//     it.debug = debug;
//     return it;
//   }

//   throw boost::program_options::invalid_option_value(command);
// }

// void palm::fig::application::Main::launch(const Command& command) const {
//   struct {
//     void operator()(palm::fig::application::HelpCommand it) { it.start(); }
//     void operator()(palm::fig::application::VersionCommand it) { it.start();
//     } void operator()(palm::fig::application::UserSetPasswordCommand it) {
//       it.start();
//     }
//     void operator()(palm::fig::application::UserApplyRoleCommand it) {
//       it.start();
//     }
//     void operator()(palm::fig::application::I18nSyncCommand it) { it.start();
//     } void operator()(palm::fig::application::DbStatusCommand it) {
//     it.start(); } void operator()(palm::fig::application::CacheListCommand
//     it) { it.start(); } void
//     operator()(palm::fig::application::CacheClearCommand it) {
//       it.start();
//     }
//     void operator()(palm::fig::application::WebCommand it) { it.start(); }
//     void operator()(palm::fig::application::RpcCommand it) { it.start(); }
//     void operator()(palm::fig::application::WorkerCommand it) { it.start(); }
//   } visitor;
//   std::visit(visitor, command);
// }

// palm::fig::application::Main::Main(int argc, char** argv) {
//   const auto command = this->parse(argc, argv);
//   this->launch(command);
// }

// void palm::fig::application::I18nSyncCommand::start() const {
//   const auto config = this->open();
//   auto postgresql =
//   palm::fig::application::GenericOptions::postgresql(config);

//   const auto items = palm::I18n::sync(this->folder);
//   size_t found = 0;
//   size_t inserted = 0;

//   {
//     soci::session db(*postgresql);
//     soci::transaction tr(db);
//     for (const auto& [l, v] : items) {
//       for (const auto& [c, m] : v) {
//         found++;
//         auto it = palm::nut::dao::locale::get(db, l, c);
//         if (it) {
//           continue;
//         }
//         inserted++;
//         palm::nut::dao::locale::create(db, l, c, m);
//       }
//     }
//     tr.commit();
//   }
//   BOOST_LOG_TRIVIAL(info) << "done(" << inserted << "/" << found << ")";
// }

// void palm::fig::application::UserApplyRoleCommand::start() const {
//   // TODO
// }
// void palm::fig::application::UserSetPasswordCommand::start() const {
//   // TODO
// }
// void palm::fig::application::CacheClearCommand::start() const {
//   // TODO
// }

// void palm::fig::application::CacheListCommand::start() const {
//   // TODO
// }

// void palm::fig::application::DbStatusCommand::start() const {
//   // TODO
// }
// void palm::fig::application::HelpCommand::start() const {
//   std::cout << palm::PROJECT_DESCRIPTION << "\n\n"
//             << this->body << "\n"
//             << palm::GIT_VERSION << "(" << palm::BUILD_TIME << ")"
//             << " " << palm::PROJECT_HOMEPAGE << std::endl;
// }
// void palm::fig::application::VersionCommand::start() const {
//   std::cout << palm::GIT_VERSION << "(" << palm::BUILD_TIME << ")" <<
//   std::endl;
// }

// void palm::fig::application::RpcCommand::start() const {
//   if (palm::is_stopped()) {
//     return;
//   }
//   const auto config = this->open();

//   std::stringstream address;
//   {
//     const std::string host = config["rpc"]["host"].value_or("0.0.0.0");
//     const uint16_t port = config["rpc"]["port"].value_or(9090);
//     address << host << ":" << port;
//   }

//   // FIXME rabbitmq MUST init before redis
//   auto rabbitmq = palm::fig::application::GenericOptions::rabbitmq(config);
//   { auto it = rabbitmq->open(); }
//   auto postgresql =
//   palm::fig::application::GenericOptions::postgresql(config); auto redis =
//   palm::fig::application::GenericOptions::redis(config); auto jwt =
//   palm::fig::application::GenericOptions::jwt(config); const auto secret_box
//   =
//       palm::fig::application::GenericOptions::secret_box(config);
//   auto opensearch =
//   palm::fig::application::GenericOptions::opensearch(config); {
//   opensearch->info(); } std::shared_ptr<palm::I18n> i18n =
//       std::make_shared<palm::I18n>(postgresql, redis);

//   palm::nut::services::User nut_user(postgresql, redis, jwt, secret_box,
//   i18n,
//                                      rabbitmq);
//   palm::nut::services::Attachment nut_attachment(postgresql, redis, jwt,
//                                                  secret_box);
//   palm::nut::services::Policy nut_policy(postgresql, redis, jwt);
//   palm::nut::services::Locale nut_locale(postgresql, redis, jwt);
//   palm::nut::services::Notification nut_notification(postgresql, redis, jwt);
//   palm::nut::services::LeaveWord nut_leave_word(postgresql, redis, jwt);
//   palm::nut::services::Site nut_site(postgresql, redis, jwt, secret_box,
//   i18n,
//                                      rabbitmq, opensearch);
//   palm::nut::services::ShorterLink nut_shorter_link(postgresql, redis, jwt);
//   palm::nut::services::Tag nut_tag(postgresql, redis, jwt);
//   palm::nut::services::Category nut_category(postgresql, redis, jwt);
//   palm::ops::metrics::ReportService ops_metrics_report;

//   grpc::EnableDefaultHealthCheckService(true);

//   grpc::ServerBuilder builder;
//   builder.AddListeningPort(address.str(), grpc::InsecureServerCredentials());

//   builder.RegisterService(&nut_user);
//   builder.RegisterService(&nut_attachment);
//   builder.RegisterService(&nut_policy);
//   builder.RegisterService(&nut_locale);
//   builder.RegisterService(&nut_notification);
//   builder.RegisterService(&nut_leave_word);
//   builder.RegisterService(&nut_site);
//   builder.RegisterService(&nut_shorter_link);
//   builder.RegisterService(&nut_tag);
//   builder.RegisterService(&nut_category);
//   builder.RegisterService(&ops_metrics_report);

//   std::unique_ptr<grpc::Server> server(builder.BuildAndStart());
//   BOOST_LOG_TRIVIAL(info) << "gRPC server listening on tcp://" <<
//   address.str()
//                           << "?version=" << grpc::Version() << ","
//                           << google::protobuf::internal::VersionString(
//                                  GOOGLE_PROTOBUF_VERSION);
//   server->Wait();
// }

// void palm::fig::application::WebCommand::start() const {
//   if (palm::is_stopped()) {
//     return;
//   }
//   const auto config = this->open();

//   httplib::Server server;

//   auto postgresql =
//   palm::fig::application::GenericOptions::postgresql(config); auto redis =
//   palm::fig::application::GenericOptions::redis(config); auto jwt =
//   palm::fig::application::GenericOptions::jwt(config);

//   palm::cms::controllers::mount(server, postgresql, redis);
//   palm::forum::controllers::mount(server, postgresql, redis);
//   palm::nut::controllers::mount(server, postgresql, redis, jwt);

//   {
//     const std::string host = config["http"]["host"].value_or("0.0.0.0");
//     const uint16_t port = config["http"]["port"].value_or(8080);
//     BOOST_LOG_TRIVIAL(info) << "http server listening on " << host << ":"
//                             << port << "?version=" << CPPHTTPLIB_VERSION;
//     server.listen(host, port);
//   }
// }

// void palm::fig::application::WorkerCommand::start() const {
//   if (palm::is_stopped()) {
//     return;
//   }
//   const auto config = this->open();
//   auto postgresql =
//   palm::fig::application::GenericOptions::postgresql(config); auto rabbitmq =
//   palm::fig::application::GenericOptions::rabbitmq(config); const auto
//   secret_box =
//       palm::fig::application::GenericOptions::secret_box(config);
//   // TODO
// }

// toml::table palm::fig::application::GenericOptions::open() const {
//   palm::init_logger(this->debug);
//   BOOST_LOG_TRIVIAL(debug) << "load config file from " << this->config;
//   const auto config = toml::parse_file(this->config);
//   return config;
// }

// std::shared_ptr<soci::connection_pool>
// palm::fig::application::GenericOptions::postgresql(const toml::table& config)
// {
//   auto node = config["postgresql"];
//   palm::PostgreSql cfg(*node.as_table());
//   auto it = cfg.open();
//   return it;
// }

// std::shared_ptr<palm::redis::Pool>
// palm::fig::application::GenericOptions::redis(const toml::table& config) {
//   auto node = config["redis"];
//   palm::redis::Config cfg(*node.as_table());
//   auto it = cfg.open();
//   return it;
// }

// std::shared_ptr<palm::Jwt> palm::fig::application::GenericOptions::jwt(
//     const toml::table& config) {
//   const std::string key = config["token-key"].value<std::string>().value();
//   std::shared_ptr<palm::Jwt> it = std::make_shared<palm::Jwt>(key);
//   return it;
// }

// std::shared_ptr<palm::rabbitmq::Config>
// palm::fig::application::GenericOptions::rabbitmq(const toml::table& config) {
//   auto node = config["rabbitmq"];
//   std::shared_ptr<palm::rabbitmq::Config> it =
//       std::make_shared<palm::rabbitmq::Config>(*node.as_table());
//   return it;
// }

// std::shared_ptr<palm::SecretBox>
// palm::fig::application::GenericOptions::secret_box(const toml::table& config)
// {
//   const std::string key = config["secrets-key"].value<std::string>().value();
//   std::shared_ptr<palm::SecretBox> it =
//   std::make_shared<palm::SecretBox>(key); return it;
// }
// std::shared_ptr<palm::opensearch::Config>
// palm::fig::application::GenericOptions::opensearch(const toml::table& config)
// {
//   auto node = config["opensearch"];
//   std::shared_ptr<palm::opensearch::Config> it =
//       std::make_shared<palm::opensearch::Config>(*node.as_table());
//   return it;
// }

// std::shared_ptr<palm::Minio> palm::fig::application::GenericOptions::minio(
//     const toml::table& config) {
//   auto node = config["minio"];
//   std::shared_ptr<palm::Minio> it =
//       std::make_shared<palm::Minio>(*node.as_table());
//   return it;
// }

// std::vector<palm::sitemap::Url> palm::fig::dao::sitemap(soci::session& db) {
//   std::vector<palm::sitemap::Url> items;
//   for (const auto& lang : palm::nut::dao::locale::languages(db)) {
//     palm::sitemap::Url it;
//     it.loc = "/" + lang + "/";
//     it.change_freq = palm::sitemap::ChangeFreq::Weekly;

//     items.push_back(it);
//   }
//   return items;
// }

// std::shared_ptr<palm::rss::Channel> rss(soci::session& db,
//                                         const std::string& lang,
//                                         const std::chrono::seconds& ttl) {
//   std::shared_ptr<palm::rss::Channel> ch =
//       std::make_shared<palm::rss::Channel>();
//   ch->ttl = ttl;
//   {
//     const auto it = palm::nut::dao::locale::get(
//         db, lang, palm::nut::dao::locale::SITE_TITLE);
//     ch->title = it->message;
//   }
//   {
//     const auto it = palm::nut::dao::locale::get(
//         db, lang, palm::nut::dao::locale::SITE_DESCRIPTION);
//     ch->description = it->message;
//   }
//   ch->link = "/" + lang + "/";
//   return ch;
// }
