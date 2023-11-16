#include <catch2/catch_test_macros.hpp>

#include "palm/email.hpp"

#include <filesystem>
#include <fstream>
#include <iostream>

TEST_CASE("Send email", "[smtp]") {
  auto config = toml::parse_file("config.toml");

  auto node = config["smtp"].as_table();
  const palm::smtp::Config cfg(*node);
  std::cout << "connect " << cfg << std::endl;

  //   palm::smtp::Address to = {.username = std::getenv("SMTP_TO_USERNAME"),
  //                             .email = "SMTP_TO_EMAIL"};
  palm::smtp::Address to;
  {
    to.username = std::getenv("SMTP_TO_USERNAME");
    to.email = std::getenv("SMTP_TO_EMAIL");
  }
  {
    std::vector<std::pair<std::string, std::string>> attachments;
    for (const auto& file : {"vcpkg-manifest-install.log", "CMakeCache.txt",
                             "/usr/share/pixmaps/idea.png"}) {
      std::ifstream ifs(file);
      std::ostringstream ofs;
      ofs << ifs.rdbuf();

      auto it = std::make_pair<std::string, std::string>(
          std::filesystem::path(file).filename(), ofs.str());
      attachments.push_back(it);
    }
    cfg.send(to, {}, {}, "This is a test email", "<h1>hello </h1>", true,
             attachments);
  }

  REQUIRE((1 + 1) == 2);
}
