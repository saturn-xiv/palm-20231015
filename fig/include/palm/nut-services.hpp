#pragma once

#include "palm/minio.hpp"
#include "palm/nut-models.hpp"
#include "palm/nut-session.hpp"
#include "palm/opensearch.hpp"
#include "palm/queue.hpp"
#include "palm/rss.hpp"
#include "palm/sitemap.hpp"
#include "palm/twilio.hpp"

namespace palm {

namespace nut {

namespace services {
class Category final : public v1::Category::Service {
 public:
  Category(std::shared_ptr<soci::connection_pool> postgresql,
           std::shared_ptr<palm::redis::Pool> redis,
           std::shared_ptr<palm::Jwt> jwt)
      : _postgresql(postgresql), _redis(redis), _jwt(jwt) {}

  grpc::Status Create(grpc::ServerContext* context,
                      const v1::CategoryCreateRequest* request,
                      google::protobuf::Empty* response) override;
  grpc::Status Update(grpc::ServerContext* context,
                      const v1::CategoryUpdateRequest* request,
                      google::protobuf::Empty* response) override;
  grpc::Status Destroy(grpc::ServerContext* context,
                       const v1::IdRequest* request,
                       google::protobuf::Empty* response) override;
  grpc::Status Index(grpc::ServerContext* context,
                     const google::protobuf::Empty* request,
                     v1::CategoryIndexResponse* response) override;

 private:
  std::shared_ptr<soci::connection_pool> _postgresql;
  std::shared_ptr<palm::redis::Pool> _redis;
  std::shared_ptr<palm::Jwt> _jwt;
};

class Tag final : public v1::Tag::Service {
 public:
  Tag(std::shared_ptr<soci::connection_pool> postgresql,
      std::shared_ptr<palm::redis::Pool> redis, std::shared_ptr<palm::Jwt> jwt)
      : _postgresql(postgresql), _redis(redis), _jwt(jwt) {}
  grpc::Status Create(grpc::ServerContext* context,
                      const v1::TagCreateRequest* request,
                      google::protobuf::Empty* response) override;
  grpc::Status Update(grpc::ServerContext* context,
                      const v1::TagUpdateRequest* request,
                      google::protobuf::Empty* response) override;
  grpc::Status Destroy(grpc::ServerContext* context,
                       const v1::IdRequest* request,
                       google::protobuf::Empty* response) override;
  grpc::Status Index(grpc::ServerContext* context,
                     const google::protobuf::Empty* request,
                     v1::TagIndexResponse* response) override;

 private:
  std::shared_ptr<soci::connection_pool> _postgresql;
  std::shared_ptr<palm::redis::Pool> _redis;
  std::shared_ptr<palm::Jwt> _jwt;
};

class ShorterLink final : public v1::ShorterLink::Service {
 public:
  ShorterLink(std::shared_ptr<soci::connection_pool> postgresql,
              std::shared_ptr<palm::redis::Pool> redis,
              std::shared_ptr<palm::Jwt> jwt)
      : _postgresql(postgresql), _redis(redis), _jwt(jwt) {}

  grpc::Status Create(grpc::ServerContext* context,
                      const v1::ShorterLinkCreateRequest* request,
                      google::protobuf::Empty* response) override;
  grpc::Status Update(grpc::ServerContext* context,
                      const v1::ShorterLinkUpdateRequest* request,
                      google::protobuf::Empty* response) override;
  grpc::Status Destroy(grpc::ServerContext* context,
                       const v1::IdRequest* request,
                       google::protobuf::Empty* response) override;
  grpc::Status Index(grpc::ServerContext* context, const v1::Pager* request,
                     v1::ShorterLinkIndexResponse* response) override;

 private:
  std::shared_ptr<soci::connection_pool> _postgresql;
  std::shared_ptr<palm::redis::Pool> _redis;
  std::shared_ptr<palm::Jwt> _jwt;
};

class Site final : public v1::Site::Service {
 public:
  Site(std::shared_ptr<soci::connection_pool> postgresql,
       std::shared_ptr<palm::redis::Pool> redis, std::shared_ptr<palm::Jwt> jwt,
       std::shared_ptr<palm::SecretBox> secret_box,
       std::shared_ptr<palm::I18n> i18n,
       std::shared_ptr<palm::rabbitmq::Config> rabbitmq,
       std::shared_ptr<palm::opensearch::Config> opensearch)
      : _postgresql(postgresql),
        _redis(redis),
        _jwt(jwt),
        _secret_box(secret_box),
        _i18n(i18n),
        _rabbitmq(rabbitmq),
        _opensearch(opensearch) {}

  grpc::Status SetMaintenanceMode(grpc::ServerContext* context,
                                  const v1::SiteMaintenanceModeRequest* request,
                                  google::protobuf::Empty* response) override;
  grpc::Status Install(grpc::ServerContext* context,
                       const v1::SiteInstallRequest* request,
                       google::protobuf::Empty* response) override;
  grpc::Status ClearCache(grpc::ServerContext* context,
                          const google::protobuf::Empty* request,
                          google::protobuf::Empty* response) override;
  grpc::Status Layout(grpc::ServerContext* context,
                      const google::protobuf::Empty* request,
                      v1::SiteLayoutResponse* response) override;
  grpc::Status SetAuthor(grpc::ServerContext* context,
                         const v1::SiteLayoutResponse::Author* request,
                         google::protobuf::Empty* response) override;
  grpc::Status SetCopyright(grpc::ServerContext* context,
                            const v1::SiteSetCopyrightRequest* request,
                            google::protobuf::Empty* response) override;
  grpc::Status SetKeywords(grpc::ServerContext* context,
                           const v1::SiteSetKeywordsRequest* request,
                           google::protobuf::Empty* response) override;
  grpc::Status SetInfo(grpc::ServerContext* context,
                       const v1::SiteSetInfoRequest* request,
                       google::protobuf::Empty* response) override;
  grpc::Status SetLogo(grpc::ServerContext* context,
                       const v1::SiteSetLogoRequest* request,
                       google::protobuf::Empty* response) override;
  grpc::Status SetMinio(grpc::ServerContext* context,
                        const v1::MinioProfile* request,
                        google::protobuf::Empty* response) override;
  grpc::Status GetMinio(grpc::ServerContext* context,
                        const google::protobuf::Empty* request,
                        v1::MinioProfile* response) override;
  grpc::Status TestMinio(grpc::ServerContext* context,
                         const v1::MinioProfile* request,
                         v1::SiteMinioTestResponse* response) override;
  grpc::Status SetTwilio(grpc::ServerContext* context,
                         const v1::TwilioProfile* request,
                         google::protobuf::Empty* response) override;
  grpc::Status GetTwilio(grpc::ServerContext* context,
                         const google::protobuf::Empty* request,
                         v1::TwilioProfile* response) override;
  grpc::Status TestTwilio(grpc::ServerContext* context,
                          const v1::SiteTwilioTestRequest* request,
                          google::protobuf::Empty* response) override;
  grpc::Status SetSmtp(grpc::ServerContext* context,
                       const v1::SmtpProfile* request,
                       google::protobuf::Empty* response) override;
  grpc::Status GetSmtp(grpc::ServerContext* context,
                       const google::protobuf::Empty* request,
                       v1::SmtpProfile* response) override;
  grpc::Status TestSmtp(grpc::ServerContext* context,
                        const v1::SiteSmtpTestRequest* request,
                        google::protobuf::Empty* response) override;
  grpc::Status SetBing(grpc::ServerContext* context,
                       const v1::BingProfile* request,
                       google::protobuf::Empty* response) override;
  grpc::Status GetBing(grpc::ServerContext* context,
                       const google::protobuf::Empty* request,
                       v1::BingProfile* response) override;
  grpc::Status SetIndexNow(grpc::ServerContext* context,
                           const v1::IndexNowProfile* request,
                           google::protobuf::Empty* response) override;
  grpc::Status GetIndexNow(grpc::ServerContext* context,
                           const google::protobuf::Empty* request,
                           v1::IndexNowProfile* response) override;
  grpc::Status PingIndexNow(grpc::ServerContext* context,
                            const v1::IndexNowPingRequest* request,
                            google::protobuf::Empty* response) override;
  grpc::Status SetGoogle(grpc::ServerContext* context,
                         const v1::GoogleProfile* request,
                         google::protobuf::Empty* response) override;
  grpc::Status GetGoogle(grpc::ServerContext* context,
                         const google::protobuf::Empty* request,
                         v1::GoogleProfile* response) override;
  grpc::Status PingGoogle(grpc::ServerContext* context,
                          const v1::SitemapPingRequest* request,
                          google::protobuf::Empty* response) override;
  grpc::Status SetBaidu(grpc::ServerContext* context,
                        const v1::BaiduProfile* request,
                        google::protobuf::Empty* response) override;
  grpc::Status GetBaidu(grpc::ServerContext* context,
                        const google::protobuf::Empty* request,
                        v1::BaiduProfile* response) override;
  grpc::Status PingBaidu(grpc::ServerContext* context,
                         const v1::SitemapPingRequest* request,
                         google::protobuf::Empty* response) override;
  grpc::Status Status(grpc::ServerContext* context,
                      const google::protobuf::Empty* request,
                      v1::SiteStatusResponse* response) override;

 private:
  std::shared_ptr<soci::connection_pool> _postgresql;
  std::shared_ptr<palm::redis::Pool> _redis;
  std::shared_ptr<palm::Jwt> _jwt;
  std::shared_ptr<palm::SecretBox> _secret_box;
  std::shared_ptr<palm::I18n> _i18n;
  std::shared_ptr<palm::rabbitmq::Config> _rabbitmq;
  std::shared_ptr<palm::opensearch::Config> _opensearch;
};

class LeaveWord final : public v1::LeaveWord::Service {
 public:
  LeaveWord(std::shared_ptr<soci::connection_pool> postgresql,
            std::shared_ptr<palm::redis::Pool> redis,
            std::shared_ptr<palm::Jwt> jwt)
      : _postgresql(postgresql), _redis(redis), _jwt(jwt) {}

  grpc::Status Create(grpc::ServerContext* context,
                      const v1::MediaContent* request,
                      google::protobuf::Empty* response) override;
  grpc::Status Destroy(grpc::ServerContext* context,
                       const v1::IdRequest* request,
                       google::protobuf::Empty* response) override;
  grpc::Status Index(grpc::ServerContext* context, const v1::Pager* request,
                     v1::LeaveWordIndexResponse* response) override;

 private:
  std::shared_ptr<soci::connection_pool> _postgresql;
  std::shared_ptr<palm::redis::Pool> _redis;
  std::shared_ptr<palm::Jwt> _jwt;
};

class Notification final : public v1::Notification::Service {
 public:
  Notification(std::shared_ptr<soci::connection_pool> postgresql,
               std::shared_ptr<palm::redis::Pool> redis,
               std::shared_ptr<palm::Jwt> jwt)
      : _postgresql(postgresql), _redis(redis), _jwt(jwt) {}

  grpc::Status Index(grpc::ServerContext* context, const v1::Pager* request,
                     v1::IndexNotificationResponse* response) override;

 private:
  std::shared_ptr<soci::connection_pool> _postgresql;
  std::shared_ptr<palm::redis::Pool> _redis;
  std::shared_ptr<palm::Jwt> _jwt;
};

class Policy final : public v1::Policy::Service {
 public:
  Policy(std::shared_ptr<soci::connection_pool> postgresql,
         std::shared_ptr<palm::redis::Pool> redis,
         std::shared_ptr<palm::Jwt> jwt)
      : _postgresql(postgresql), _redis(redis), _jwt(jwt) {}

  grpc::Status AddRole(grpc::ServerContext* context,
                       const v1::PolicyAddRoleRequest* request,
                       google::protobuf::Empty* response) override;
  grpc::Status GetAllRoles(grpc::ServerContext* context,
                           const google::protobuf::Empty* request,
                           v1::PolicyRoleListResponse* response) override;
  grpc::Status DeleteRole(grpc::ServerContext* context,
                          const v1::IdRequest* request,
                          google::protobuf::Empty* response) override;
  grpc::Status GetRolesForUser(
      grpc::ServerContext* context, const v1::IdRequest* request,
      v1::PolicyRolesForUserResponse* response) override;
  grpc::Status GetUsersForRole(
      grpc::ServerContext* context, const v1::IdRequest* request,
      v1::PolicyUsersForRoleResponse* response) override;
  grpc::Status AddRolesForUser(grpc::ServerContext* context,
                               const v1::PolicyAddRolesForUserRequest* request,
                               google::protobuf::Empty* response) override;
  grpc::Status DeleteRolesForUser(
      grpc::ServerContext* context,
      const v1::PolicyDeleteRolesForUserRequest* request,
      google::protobuf::Empty* response) override;
  grpc::Status GetImplicitRolesForUser(
      grpc::ServerContext* context, const v1::IdRequest* request,
      v1::PolicyImplicitRolesForUserResponse* response) override;
  grpc::Status GetImplicitUsersForRole(
      grpc::ServerContext* context, const v1::IdRequest* request,
      v1::PolicyImplicitUsersForRoleResponse* response) override;
  grpc::Status GetPermissionsForUser(
      grpc::ServerContext* context, const v1::IdRequest* request,
      v1::PolicyPermissionList* response) override;
  grpc::Status GetPermissionsForRole(
      grpc::ServerContext* context, const v1::IdRequest* request,
      v1::PolicyPermissionList* response) override;
  grpc::Status GetImplicitPermissionsForUser(
      grpc::ServerContext* context, const v1::IdRequest* request,
      v1::PolicyPermissionList* response) override;
  grpc::Status GetImplicitPermissionsForRole(
      grpc::ServerContext* context, const v1::IdRequest* request,
      v1::PolicyPermissionList* response) override;
  grpc::Status AddPermissions(grpc::ServerContext* context,
                              const v1::PolicyPermissionList* request,
                              google::protobuf::Empty* response) override;
  grpc::Status DeletePermissions(grpc::ServerContext* context,
                                 const v1::PolicyPermissionList* request,
                                 google::protobuf::Empty* response) override;

 private:
  std::shared_ptr<soci::connection_pool> _postgresql;
  std::shared_ptr<palm::redis::Pool> _redis;
  std::shared_ptr<palm::Jwt> _jwt;
};

class Attachment final : public v1::Attachment::Service {
 public:
  Attachment(std::shared_ptr<soci::connection_pool> postgresql,
             std::shared_ptr<palm::redis::Pool> redis,
             std::shared_ptr<palm::Jwt> jwt,
             std::shared_ptr<palm::SecretBox> secret_box)
      : _postgresql(postgresql),
        _redis(redis),
        _jwt(jwt),
        _secret_box(secret_box) {}

  grpc::Status Destroy(grpc::ServerContext* context,
                       const v1::IdRequest* request,
                       google::protobuf::Empty* response) override;
  grpc::Status Index(grpc::ServerContext* context, const v1::Pager* request,
                     v1::AttachmentIndexResponse* response) override;
  grpc::Status Show(grpc::ServerContext* context,
                    const v1::AttachmentShowRequest* request,
                    v1::AttachmentShowResponse* response) override;

 private:
  std::shared_ptr<soci::connection_pool> _postgresql;
  std::shared_ptr<palm::redis::Pool> _redis;
  std::shared_ptr<palm::Jwt> _jwt;
  std::shared_ptr<palm::SecretBox> _secret_box;
};

class User final : public v1::User::Service {
 public:
  User(std::shared_ptr<soci::connection_pool> postgresql,
       std::shared_ptr<palm::redis::Pool> redis, std::shared_ptr<palm::Jwt> jwt,
       std::shared_ptr<palm::SecretBox> secret_box,
       std::shared_ptr<palm::I18n> i18n,
       std::shared_ptr<palm::rabbitmq::Config> rabbitmq)
      : _postgresql(postgresql),
        _redis(redis),
        _jwt(jwt),
        _secret_box(secret_box),
        _i18n(i18n),
        _rabbitmq(rabbitmq) {}

  grpc::Status SignIn(grpc::ServerContext* context,
                      const v1::UserSignInRequest* request,
                      v1::UserSignInResponse* response) override;
  grpc::Status SignUp(grpc::ServerContext* context,
                      const v1::UserSignUpRequest* request,
                      google::protobuf::Empty* response) override;
  grpc::Status ConfirmByEmail(grpc::ServerContext* context,
                              const v1::UserQueryRequest* request,
                              google::protobuf::Empty* response) override;
  grpc::Status ConfirmByToken(grpc::ServerContext* context,
                              const v1::UserTokenRequest* request,
                              google::protobuf::Empty* response) override;
  grpc::Status UnlockByEmail(grpc::ServerContext* context,
                             const v1::UserQueryRequest* request,
                             google::protobuf::Empty* response) override;
  grpc::Status UnlockByToken(grpc::ServerContext* context,
                             const v1::UserTokenRequest* request,
                             google::protobuf::Empty* response) override;
  grpc::Status ForgotPassword(grpc::ServerContext* context,
                              const v1::UserQueryRequest* request,
                              google::protobuf::Empty* response) override;
  grpc::Status ResetPassword(grpc::ServerContext* context,
                             const v1::UserResetPasswordRequest* request,
                             google::protobuf::Empty* response) override;
  grpc::Status Refresh(grpc::ServerContext* context,
                       const google::protobuf::Duration* request,
                       v1::UserSignInResponse* response) override;
  grpc::Status SetProfile(grpc::ServerContext* context,
                          const v1::UserSetProfileRequest* request,
                          google::protobuf::Empty* response) override;
  grpc::Status ChangePassword(grpc::ServerContext* context,
                              const v1::UserChangePasswordRequest* request,
                              google::protobuf::Empty* response) override;
  grpc::Status Logs(grpc::ServerContext* context, const v1::Pager* request,
                    v1::UserLogsResponse* response) override;
  grpc::Status SignOut(grpc::ServerContext* context,
                       const google::protobuf::Empty* request,
                       google::protobuf::Empty* response) override;
  grpc::Status Index(grpc::ServerContext* context, const v1::Pager* request,
                     v1::UserIndexResponse* response) override;
  grpc::Status Show(grpc::ServerContext* context, const v1::IdRequest* request,
                    v1::UserIndexResponse::Item* response) override;
  grpc::Status Disable(grpc::ServerContext* context,
                       const v1::IdRequest* request,
                       google::protobuf::Empty* response) override;
  grpc::Status Enable(grpc::ServerContext* context,
                      const v1::IdRequest* request,
                      google::protobuf::Empty* response) override;
  grpc::Status Lock(grpc::ServerContext* context, const v1::IdRequest* request,
                    google::protobuf::Empty* response) override;
  grpc::Status Unlock(grpc::ServerContext* context,
                      const v1::IdRequest* request,
                      google::protobuf::Empty* response) override;
  grpc::Status Confirm(grpc::ServerContext* context,
                       const v1::IdRequest* request,
                       google::protobuf::Empty* response) override;
  grpc::Status SetPassword(grpc::ServerContext* context,
                           const v1::UserSetPasswordRequest* request,
                           google::protobuf::Empty* response) override;

 private:
  void send_email(const std::optional<palm::nut::dao::user::Item> user,
                  const std::string& action);
  std::optional<palm::nut::dao::user::Item> get_user(
      soci::session& db, const palm::nut::v1::UserQueryRequest* request);
  std::string sum_token(const std::optional<palm::nut::dao::user::Item> user,
                        const std::string& action,
                        const std::chrono::seconds& ttl);
  void build_sign_in_response(
      soci::session& db, const std::optional<palm::nut::dao::user::Item> user,
      const google::protobuf::Duration* ttl,
      palm::nut::v1::UserSignInResponse* response);

  std::shared_ptr<soci::connection_pool> _postgresql;
  std::shared_ptr<palm::redis::Pool> _redis;
  std::shared_ptr<palm::Jwt> _jwt;
  std::shared_ptr<palm::SecretBox> _secret_box;
  std::shared_ptr<palm::rabbitmq::Config> _rabbitmq;
  std::shared_ptr<palm::I18n> _i18n;
};

class Locale final : public v1::Locale::Service {
 public:
  Locale(std::shared_ptr<soci::connection_pool> postgresql,
         std::shared_ptr<palm::redis::Pool> redis,
         std::shared_ptr<palm::Jwt> jwt)
      : _postgresql(postgresql), _redis(redis), _jwt(jwt) {}
  grpc::Status Set(grpc::ServerContext* context,
                   const v1::LocaleSetRequest* request,
                   google::protobuf::Empty* response) override;
  grpc::Status Get(grpc::ServerContext* context,
                   const v1::LocaleGetRequest* request,
                   v1::LocaleIndexResponse_Item* response) override;
  grpc::Status ByLang(grpc::ServerContext* context,
                      const v1::LocaleByLangRequest* request,
                      v1::LocaleByLangResponse* response) override;
  grpc::Status Index(grpc::ServerContext* context, const v1::Pager* request,
                     v1::LocaleIndexResponse* response) override;
  grpc::Status Destroy(grpc::ServerContext* context,
                       const v1::IdRequest* request,
                       google::protobuf::Empty* response) override;

 private:
  std::shared_ptr<soci::connection_pool> _postgresql;
  std::shared_ptr<palm::redis::Pool> _redis;
  std::shared_ptr<palm::Jwt> _jwt;
};

}  // namespace services

std::shared_ptr<palm::Minio> open(const palm::nut::v1::MinioProfile& profile);
std::shared_ptr<palm::twilio::Config> open(
    const palm::nut::v1::TwilioProfile& profile);
std::shared_ptr<palm::smtp::Config> open(
    const palm::nut::v1::SmtpProfile& profile);
}  // namespace nut
}  // namespace palm
