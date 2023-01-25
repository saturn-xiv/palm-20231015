#include "loquat/application.hpp"
#include "loquat/env.hpp"
#include "loquat/version.hpp"

#include <algorithm>
#include <cstdlib>
#include <sstream>
#include <string>

#include <absl/flags/flag.h>
#include <absl/flags/internal/commandlineflag.h>
#include <absl/flags/parse.h>
#include <absl/flags/usage.h>
#include <absl/flags/usage_config.h>
#include <absl/status/status.h>
#include <absl/types/optional.h>
#include <tink/config/tink_config.h>
#include <tink/jwt/jwt_mac_config.h>
#include <tink/version.h>

ABSL_FLAG(bool, debug, false, "run on debug mode");
ABSL_FLAG(std::string, config, "config.toml", "load config from file");

ABSL_FLAG(bool, generate_token, false, "to generate a client token");
ABSL_FLAG(std::string, client, "", "client id");
ABSL_FLAG(uint16_t, years, 1, "years");

namespace loquat {
static std::string version() {
  std::stringstream ss;
  ss << loquat::GIT_VERSION << "(" << loquat::BUILD_TIME << ")" << std::endl;
  return ss.str();
}
static std::string normalize_file_name(absl::string_view name) {
  return std::string(name);
}
}  // namespace loquat

int main(int argc, char** argv) {
  absl::FlagsUsageConfig usage;
  usage.version_string = &loquat::version;
  usage.normalize_filename = &loquat::normalize_file_name;
  absl::SetFlagsUsageConfig(usage);
  {
    std::stringstream ss;
    ss << loquat::PROJECT_DESCRIPTION << "(" << loquat::PROJECT_HOMEPAGE << ")";
    absl::SetProgramUsageMessage(ss.str());
  }

  absl::ParseCommandLine(argc, argv);

  {
    const auto debug = absl::GetFlag(FLAGS_debug);
    if (debug) {
      spdlog::set_level(spdlog::level::debug);
      spdlog::debug("run on debug mode");
    }
  }
  spdlog::debug("tink v{}", crypto::tink::Version::kTinkVersion);
  spdlog::debug("protobuffer v{}", google::protobuf::internal::VersionString(
                                       GOOGLE_PROTOBUF_VERSION));
  {
    const auto status = crypto::tink::TinkConfig::Register();
    if (!status.ok()) {
      spdlog::error("failed to register tink");
      return EXIT_FAILURE;
    }
  }
  {
    const auto status = crypto::tink::JwtMacRegister();
    if (!status.ok()) {
      spdlog::error("failed to register tink-jwt");
      return EXIT_FAILURE;
    }
  }

  const auto config_file = absl::GetFlag(FLAGS_config);
  loquat::Config config(config_file);

  if (absl::GetFlag(FLAGS_generate_token)) {
    const auto client = absl::GetFlag(FLAGS_client);
    const auto years = absl::GetFlag(FLAGS_years);
    const auto clients = config.clients();
    if (client.empty() ||
        std::find(clients.begin(), clients.end(), client) == clients.end()) {
      spdlog::error("not a valid client id()", client);
      return EXIT_FAILURE;
    }
    spdlog::info("generate a {}-years token for {}", years, client);
    loquat::Jwt jwt(loquat::PROJECT_NAME);
    const std::chrono::years ttl(years);
    const auto token =
        jwt.sign(client, std::chrono::duration_cast<std::chrono::seconds>(ttl));
    std::cout << token << std::endl;
    spdlog::info("done.");
    return EXIT_SUCCESS;
  }

  loquat::Application app;
  app.launch(config.port(), config.clients());

  return EXIT_SUCCESS;
}
