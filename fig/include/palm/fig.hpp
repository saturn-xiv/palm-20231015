#pragma once

#include "palm/cache.hpp"
#include "palm/crypto.hpp"
#include "palm/minio.hpp"
#include "palm/opensearch.hpp"
#include "palm/orm.hpp"
#include "palm/queue.hpp"
#include "palm/rss.hpp"
#include "palm/sitemap.hpp"

// namespace palm {
// namespace fig {

// namespace application {

// class Handler {
//  public:
//   virtual void start() const = 0;
// };
// struct GenericOptions {
//   toml::table open() const;

//   static std::shared_ptr<soci::connection_pool> postgresql(
//       const toml::table& config);
//   static std::shared_ptr<palm::rabbitmq::Config> rabbitmq(
//       const toml::table& config);
//   static std::shared_ptr<palm::Jwt> jwt(const toml::table& config);
//   static std::shared_ptr<palm::redis::Pool> redis(const toml::table& config);
//   static std::shared_ptr<palm::SecretBox> secret_box(const toml::table& config);
//   static std::shared_ptr<palm::opensearch::Config> opensearch(
//       const toml::table& config);
//   static std::shared_ptr<palm::Minio> minio(const toml::table& config);

//   bool debug;
//   std::string config;
// };

// struct UserSetPasswordCommand final : GenericOptions, Handler {
//   void start() const override;
//   std::string nickname;
//   std::string password;
// };

// struct UserApplyRoleCommand final : GenericOptions, Handler {
//   void start() const override;
//   std::string nickname;
//   std::string role;
// };

// struct I18nSyncCommand final : GenericOptions, Handler {
//   void start() const override;
//   std::filesystem::path folder;
// };

// struct DbStatusCommand final : GenericOptions, Handler {
//   void start() const override;
// };
// struct CacheListCommand final : GenericOptions, Handler {
//   void start() const override;
// };
// struct CacheClearCommand final : GenericOptions, Handler {
//   void start() const override;
// };
// struct WebCommand final : GenericOptions, Handler {
//   void start() const override;
// };
// struct RpcCommand final : GenericOptions, Handler {
//   void start() const override;
// };
// struct WorkerCommand final : GenericOptions, Handler {
//   void start() const override;
// };
// struct HelpCommand final : Handler {
//   void start() const override;
//   std::string body;
// };
// struct VersionCommand final : Handler {
//   void start() const override;
// };

// using Command =
//     std::variant<HelpCommand, VersionCommand, UserSetPasswordCommand,
//                  UserApplyRoleCommand, I18nSyncCommand, DbStatusCommand,
//                  CacheListCommand, CacheClearCommand, WebCommand, RpcCommand,
//                  WorkerCommand>;

// class Main {
//  public:
//   Main(int argc, char** argv);

//  private:
//   Command parse(int argc, char** argv) const;
//   void launch(const Command& command) const;
// };
// }  // namespace application

// namespace dao {
// std::vector<palm::sitemap::Url> sitemap(soci::session& db);
// std::shared_ptr<palm::rss::Channel> rss(
//     soci::session& db, const std::string& lang,
//     const std::chrono::seconds& ttl =
//         std::chrono::duration_cast<std::chrono::seconds>(std::chrono::days(1)));
// }  // namespace dao

// }  // namespace fig
// }  // namespace palm
