#include "coconut/application.hpp"
#include "coconut/mysql.hpp"
#include "coconut/nut.hpp"
#include "coconut/oracle.hpp"
#include "coconut/postgresql.hpp"
#include "coconut/rsync.hpp"
#include "coconut/version.hpp"
#include "coconut/web-site.hpp"

#include <argparse/argparse.hpp>

coconut::Application::Application(int argc, char** argv) {
  const std::string version =
      coconut::GIT_VERSION + "(" + coconut::BUILD_TIME + ")";
  argparse::ArgumentParser program(coconut::PROJECT_NAME, version);
  program.add_description(coconut::PROJECT_DESCRIPTION);
  program.add_epilog(palm::PROJECT_HOMEPAGE);
  program.add_argument("-d", "--debug")
      .default_value(false)
      .help("run on debug mode")
      .implicit_value(true);

  const std::string target_default = "$HOME/tmp";
  const auto target_home_dir = coconut::home("backups");
  const std::string keep_help = "keep recent N backups";
  const int keep_default = 7;

  argparse::ArgumentParser mysql_command("mysql", version);
  {
    mysql_command.add_description("backup mysql database");
    mysql_command.add_argument("-H", "--host")
        .default_value(std::string("127.0.0.1"));
    mysql_command.add_argument("-u", "--user")
        .default_value(std::string("root"));
    mysql_command.add_argument("-p", "--port")
        .default_value(3306)
        .scan<'i', int>();
    mysql_command.add_argument("-P", "--password");
    mysql_command.add_argument("-n", "--name").required();

    mysql_command.add_argument("-k", "--keep")
        .default_value(7)
        .help(keep_help)
        .scan<'i', int>();
    mysql_command.add_argument("-t", "--target").default_value(target_default);

    program.add_subparser(mysql_command);
  }
  argparse::ArgumentParser postgresql_command("postgresql", version);
  {
    postgresql_command.add_description("backup postgresql database");

    postgresql_command.add_argument("-H", "--host")
        .default_value(std::string("127.0.0.1"));
    postgresql_command.add_argument("-u", "--user")
        .default_value(std::string("postgres"));
    postgresql_command.add_argument("-p", "--port")
        .default_value(5432)
        .scan<'i', int>();
    postgresql_command.add_argument("-P", "--password");
    postgresql_command.add_argument("-n", "--name").required();

    postgresql_command.add_argument("-k", "--keep")
        .default_value(7)
        .help(keep_help)
        .scan<'i', int>();
    postgresql_command.add_argument("-t", "--target")
        .default_value(target_default);

    program.add_subparser(postgresql_command);
  }

  argparse::ArgumentParser oracle_command("oracle", version);
  {
    oracle_command.add_description("backup oracle database");

    oracle_command.add_argument("-s", "--sid")
        .default_value(std::string("ORCLCDB"));
    oracle_command.add_argument("-u", "--user").required();
    oracle_command.add_argument("-P", "--password").required();
    oracle_command.add_argument("-H", "--home")
        .default_value(std::string("/opt/oracle/product/19c/dbhome_1"));
    oracle_command.add_argument("-d", "--directory-path")
        .help(
            R"RAW(please make sure: select directory_path from dba_directories where directory_name='DATA_PUMP_DIR')RAW")
        .required();

    oracle_command.add_argument("-k", "--keep")
        .default_value(7)
        .help(keep_help)
        .scan<'i', int>();
    oracle_command.add_argument("-t", "--target").default_value(target_default);

    program.add_subparser(oracle_command);
  }

  argparse::ArgumentParser rsync_command("rsync", version);
  {
    rsync_command.add_description("backup local/remote folder");
    rsync_command.add_argument("-H", "--host");
    rsync_command.add_argument("-u", "--user")
        .default_value(std::string("root"));
    rsync_command.add_argument("-p", "--port")
        .default_value(22)
        .scan<'i', int>();
    rsync_command.add_argument("-P", "--password");
    rsync_command.add_argument("-K", "--key");
    rsync_command.add_argument("-s", "--source").required();

    rsync_command.add_argument("-k", "--keep")
        .default_value(7)
        .help(keep_help)
        .scan<'i', int>();
    rsync_command.add_argument("-t", "--target").default_value(target_default);

    program.add_subparser(rsync_command);
  }

  argparse::ArgumentParser web_site_command("web-site", version);
  {
    web_site_command.add_description(
        "generate a fast and flexible static web site");
    web_site_command.add_argument("-s", "--source").required();

    web_site_command.add_argument("-k", "--keep")
        .default_value(7)
        .help(keep_help)
        .scan<'i', int>();
    web_site_command.add_argument("-t", "--target")
        .default_value(target_default);

    program.add_subparser(web_site_command);
  }

  try {
    program.parse_args(argc, argv);
  } catch (const std::runtime_error& err) {
    spdlog::error("{}", err.what());
    std::exit(1);
  }

  spdlog::set_level(program.get<bool>("--debug") ? spdlog::level::debug
                                                 : spdlog::level::info);
  spdlog::debug("run on debug mode {}", version);

  if (program.is_subcommand_used(mysql_command)) {
    const std::string host = mysql_command.get<std::string>("--host");
    const int port = mysql_command.get<int>("--port");
    const std::string user = mysql_command.get<std::string>("--user");
    const std::optional<std::string> password =
        mysql_command.present<std::string>("--password");
    const std::string name = mysql_command.get<std::string>("--name");

    const int keep = mysql_command.get<int>("--keep");
    const std::string target = mysql_command.get<std::string>("--target");

    coconut::MySql it(host, static_cast<uint16_t>(port), user, password, name);
    it.dump((target == target_default ? target_home_dir
                                      : std::filesystem::path(target)),
            static_cast<size_t>(keep));

  } else if (program.is_subcommand_used(postgresql_command)) {
    const std::string host = postgresql_command.get<std::string>("--host");
    const int port = postgresql_command.get<int>("--port");
    const std::string user = postgresql_command.get<std::string>("--user");
    const std::optional<std::string> password =
        postgresql_command.present<std::string>("--password");
    const std::string name = postgresql_command.get<std::string>("--name");
    const int keep = postgresql_command.get<int>("--keep");
    const std::string target = postgresql_command.get<std::string>("--target");

    coconut::PostgreSql it(host, static_cast<uint16_t>(port), user, password,
                           name);
    it.dump((target == target_default ? target_home_dir
                                      : std::filesystem::path(target)),
            static_cast<size_t>(keep));

  } else if (program.is_subcommand_used(oracle_command)) {
    const std::string sid = oracle_command.get<std::string>("--sid");
    const std::string home = oracle_command.get<std::string>("--home");
    const std::string directory_path =
        oracle_command.get<std::string>("--directory-path");
    const std::string user = oracle_command.get<std::string>("--user");
    const std::string password = oracle_command.get<std::string>("--password");

    const int keep = oracle_command.get<int>("--keep");
    const std::string target = oracle_command.get<std::string>("--target");

    coconut::Oracle it(sid, home, directory_path, user, password);
    it.dump((target == target_default ? target_home_dir
                                      : std::filesystem::path(target)),
            static_cast<size_t>(keep));

  } else if (program.is_subcommand_used(rsync_command)) {
    const std::optional<std::string> host =
        rsync_command.present<std::string>("--host");
    const std::string user = rsync_command.get<std::string>("--user");
    const int port = rsync_command.get<int>("--port");
    const std::string source = rsync_command.get<std::string>("--source");
    const std::optional<std::string> password =
        rsync_command.present<std::string>("--password");
    const std::optional<std::string> key =
        rsync_command.present<std::string>("--key");

    const int keep = rsync_command.get<int>("--keep");
    const std::string target = rsync_command.get<std::string>("--target");

    coconut::Rsync it(host, port, user, password, key, source);
    it.dump((target == target_default ? target_home_dir
                                      : std::filesystem::path(target)),
            static_cast<size_t>(keep));

  } else if (program.is_subcommand_used(web_site_command)) {
    const std::string source = web_site_command.get<std::string>("--source");

    const int keep = web_site_command.get<int>("--keep");
    const std::string target = web_site_command.get<std::string>("--target");

    // TODO
  }
  spdlog::info("done");
}
