#include "coconut/application.hpp"
#include "coconut/mysql.hpp"
#include "coconut/nut.hpp"
#include "coconut/oracle.hpp"
#include "coconut/postgresql.hpp"
#include "coconut/rsync.hpp"
#include "coconut/version.hpp"
#include "coconut/web-site.hpp"

#include <spdlog/spdlog.h>
#include <args.hxx>

coconut::Application::Application(int argc, char** argv) {
  args::ArgumentParser parser(coconut::PROJECT_DESCRIPTION,
                              coconut::PROJECT_HOMEPAGE);
  args::HelpFlag help(parser, "help", "print help information", {'h', "help"});
  args::Flag debug(parser, "debug", "run on debug mode", {'d', "debug"});

  args::ValueFlag<std::string> config(parser, "config",
                                      "config file(config.toml)", {"config"});
  args::ValueFlag<size_t> keep(parser, "keep", "keep recent N backups(7)",
                               {"keep"});
  args::ValueFlag<std::string> target(parser, "target",
                                      "target folder($HOME/tmp)", {"target"});

  args::Group commands(parser, "commands");
  args::Command version(commands, "version", "print version info");
  args::Command postgresql(commands, "postgresql",
                           "backup postgresql database");
  args::Command mysql(commands, "mysql", "backup mysql database");
  args::Command oracle(commands, "oracle", "backup oracle database");
  args::Command rsync(commands, "rsync", "backup remote folder to local");
  args::Command web_site(commands, "web-site",
                         "generate a fast and flexible static web site");

  try {
    parser.ParseCLI(argc, argv);
  } catch (const args::Help&) {
    std::cout << parser;
    return;
  } catch (const args::ParseError& e) {
    spdlog::error("{}", e.what());
    return;
  } catch (args::ValidationError e) {
    spdlog::error("{}", e.what());
    std::cout << parser;
    return;
  }
  if (version) {
    std::cout << coconut::GIT_VERSION << "(" << coconut::BUILD_TIME << ")"
              << std::endl;
    return;
  }

  spdlog::set_level(debug ? spdlog::level::debug : spdlog::level::info);
  spdlog::debug("run on debug mode");
  spdlog::info("version {}({})", coconut::GIT_VERSION, coconut::BUILD_TIME);

  const std::string config_file = config ? args::get(config) : "config.toml";
  const size_t keep_count = keep ? args::get(keep) : 7;
  const std::filesystem::path target_dir =
      target ? std::filesystem::path(args::get(target)) : coconut::home("tmp");
  spdlog::debug("load config from {}", config_file);
  if (!std::filesystem::exists(target_dir)) {
    spdlog::info("folder {} is not exist, try create it.", target_dir.string());
    std::filesystem::create_directories(target_dir);
  }
  const auto cfg = toml::parse_file(config_file);

  if (postgresql) {
    coconut::PostgreSql it(cfg);
    it.dump(target_dir, keep_count);
  } else if (mysql) {
    coconut::MySql it(cfg);
    it.dump(target_dir, keep_count);
  } else if (oracle) {
    coconut::Oracle it(cfg);
    it.dump(target_dir, keep_count);
  } else if (rsync) {
    coconut::Rsync it(cfg);
    it.dump(target_dir, keep_count);
  } else if (web_site) {
    coconut::web::Config it(cfg);
    it.dump(target_dir, keep_count);
  }
  spdlog::info("done");
}
