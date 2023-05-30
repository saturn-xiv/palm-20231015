#include <catch2/catch_test_macros.hpp>

TEST_CASE("AWS services", "[aws]") {
  SECTION("sqs") {
    // TODO
    REQUIRE((1 + 1) == 2);
  }
}

// #define BOOST_TEST_MODULE aws
// #include <boost/test/unit_test.hpp>

// #include "palm/minio.hpp"

// #include <iostream>

// BOOST_AUTO_TEST_CASE(bucket) {
//   std::cout << palm::Minio::year_month() << std::endl;
// }

// BOOST_AUTO_TEST_CASE(s3_json) {
//   palm::Minio cfg("credentials.json");
//   {
//     const auto items = cfg.buckets();
//     BOOST_TEST(!items.empty());
//     for (const auto& it : items) {
//       std::cout << it << std::endl;
//     }
//   }
// }

// BOOST_AUTO_TEST_CASE(s3_minio) {
//   toml::table node;
//   {
//     node.insert("access-key", std::getenv("MINIO_ACCESS_KEY"));
//     node.insert("secret-key", std::getenv("MINIO_SECRET_KEY"));
//   }
//   palm::Minio cfg(node);
//   const std::string bucket = "testing";

//   {
//     if (!cfg.is_bucket_exist(bucket)) {
//       cfg.create_bucket(bucket);
//     }
//     BOOST_TEST(cfg.is_bucket_exist(bucket));
//   }

//   {
//     const auto items = cfg.buckets();
//     BOOST_TEST(!items.empty());
//     for (const auto& it : items) {
//       std::cout << it << std::endl;
//     }
//   }

//   {
//     const auto name = cfg.upload(bucket, "demo.png");
//     const auto url = cfg.get(bucket, name);
//     std::cout << url << std::endl;
//   }
// }
