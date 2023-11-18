#include "palm/lemon.hpp"
#include "palm/lemon/controllers.hpp"
#include "palm/utils.hpp"
#include "palm/version.hpp"

#include <argparse/argparse.hpp>

static const std::string PROJECT_NAME = "lemon";

palm::lemon::Application::Application(int argc, char** argv) {
  const std::string version = palm::GIT_VERSION + "(" + palm::BUILD_TIME + ")";
  argparse::ArgumentParser program(PROJECT_NAME, version);
  program.add_description("A HTTP server.");
  program.add_epilog(palm::PROJECT_HOMEPAGE_URL);
  program.add_argument("-d", "--debug")
      .default_value(false)
      .help("run on debug mode")
      .implicit_value(true);

  program.add_argument("-p", "--port").default_value(8080).scan<'i', int>();
  program.add_argument("-c", "--config")
      .default_value("config.toml")
      .required();

  try {
    program.parse_args(argc, argv);
  } catch (const std::runtime_error& err) {
    spdlog::error("{}", err.what());
    std::exit(1);
  }

  palm::init(program.get<bool>("--debug"));
  const int port = program.get<int>("--port");
  const std::string config = program.get<std::string>("--config");
  this->launch(port, config);
}

void palm::lemon::Application::launch(uint16_t port,
                                      const std::string& config) const {
  const std::string ip = "0.0.0.0";
  httplib::Server svr;
  { palm::lemon::controllers::setup(svr); }

  spdlog::info("listening on tcp://{}:{}", ip, port);
  svr.listen(ip, port);
}
