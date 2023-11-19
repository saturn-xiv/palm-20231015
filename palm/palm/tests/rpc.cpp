#include <catch2/catch_test_macros.hpp>

#include "palm/crypto.hpp"
#include "palm/lily.hpp"
#include "palm/loquat.hpp"
#include "palm/morus.hpp"

// GRPC_DNS_RESOLVER=native ./tests/rpc-test \[morus\]
TEST_CASE("md2htm", "[morus]") {
  auto config = toml::parse_file("config.toml");
  auto node = config["morus"].as_table();
  const palm::RpcClientConfig cfg(*node);
  const auto options = cfg.tls.grpc_client_ssl_credentials_options();
  const auto credentials = grpc::SslCredentials(options);
  auto channel = grpc::CreateChannel(cfg.target(), credentials);

  SECTION("markdown service") {
    const std::string md = "- [Google](https://www.google.com)";
    palm::morus::MarkdownClient cli(channel);
    const auto htm = cli.markdown_to_html(md);
    std::cout << htm << std::endl;
  }
}

TEST_CASE("tex2pdf, tex2word", "[lily]") {
  auto config = toml::parse_file("config.toml");
  auto node = config["lily"].as_table();
  const palm::RpcClientConfig cfg(*node);
  const auto options = cfg.tls.grpc_client_ssl_credentials_options();
  const auto credentials = grpc::SslCredentials(options);
  auto channel = grpc::CreateChannel(cfg.target(), credentials);

  SECTION("lily service") {
    const palm::lily::v1::TexToRequest req;
    palm::lily::TexClient cli(channel);
    const auto res = cli.to_word(req);
    std::cout << res.content_type() << std::endl;
  }
}

TEST_CASE("tink encrypt", "[loquat]") {
  auto config = toml::parse_file("config.toml");
  auto node = config["loquat"].as_table();
  const palm::loquat::Config cfg(*node);

  SECTION("health check") {
    auto cli = cfg.health();
    cli->check();
  }

  const std::string app_id = "testing";
  SECTION("aes") {
    for (int i = 0; i < 10; i++) {
      const std::string plain = "hello, palm!";
      auto cli = cfg.aes();
      std::string code;
      cli->encrypt(code, app_id, plain);
      REQUIRE(code != plain);
      {
        std::vector<uint8_t> it(code.begin(), code.end());
        std::cout << plain << " <=> " << palm::base64::to(it) << std::endl;
      }
      {
        std::string tmp;
        cli->decrypt(tmp, app_id, code);
        REQUIRE(tmp == plain);
      }
    }
  }
}
