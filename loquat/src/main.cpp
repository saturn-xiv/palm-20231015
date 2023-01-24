#include "loquat/application.hpp"
#include "loquat/version.hpp"

#include <cstdlib>
#include <sstream>

#include <absl/flags/flag.h>
#include <absl/flags/internal/commandlineflag.h>
#include <absl/flags/parse.h>
#include <absl/flags/usage_config.h>
#include <absl/status/status.h>
#include <spdlog/spdlog.h>

ABSL_FLAG(bool, debug, false, "run on debug mode");
ABSL_FLAG(uint16_t, port, 8080, "listen port");

namespace loquat {
std::string version() {
  std::stringstream ss;
  ss << loquat::GIT_VERSION << "(" << loquat::BUILD_TIME << ")" << std::endl;
  return ss.str();
}
}  // namespace loquat

int main(int argc, char** argv) {
  absl::FlagsUsageConfig usage;
  usage.version_string = &loquat::version;
  absl::SetFlagsUsageConfig(usage);

  absl::ParseCommandLine(argc, argv);

  const bool debug = absl::GetFlag(FLAGS_debug);
  if (debug) {
    spdlog::set_level(spdlog::level::debug);
    spdlog::debug("run on debug mode");
  }
  const uint16_t port = absl::GetFlag(FLAGS_port);

  loquat::Application app(port);
  app.launch();

  return EXIT_SUCCESS;
}
