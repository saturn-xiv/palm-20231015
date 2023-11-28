# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: nut.proto for package 'palm.nut.v1'

require 'grpc'
require 'nut_pb'

module Palm
  module Nut
    module V1
      module User
        # ----------------------------------------------------------------------------
        #
        class Service

          include ::GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'palm.nut.v1.User'

          rpc :SignIn, ::Palm::Nut::V1::UserSignInRequest, ::Palm::Nut::V1::UserSignInResponse
          rpc :SignUp, ::Palm::Nut::V1::UserSignUpRequest, ::Google::Protobuf::Empty
          rpc :ConfirmByEmail, ::Palm::Nut::V1::UserQueryRequest, ::Google::Protobuf::Empty
          rpc :ConfirmByToken, ::Palm::Nut::V1::UserTokenRequest, ::Google::Protobuf::Empty
          rpc :UnlockByEmail, ::Palm::Nut::V1::UserQueryRequest, ::Google::Protobuf::Empty
          rpc :UnlockByToken, ::Palm::Nut::V1::UserTokenRequest, ::Google::Protobuf::Empty
          rpc :ForgotPassword, ::Palm::Nut::V1::UserQueryRequest, ::Google::Protobuf::Empty
          rpc :ResetPassword, ::Palm::Nut::V1::UserResetPasswordRequest, ::Google::Protobuf::Empty
          rpc :Refresh, ::Google::Protobuf::Duration, ::Palm::Nut::V1::UserSignInResponse
          rpc :Logs, ::Palm::Nut::V1::Pager, ::Palm::Nut::V1::UserLogsResponse
          rpc :SetProfile, ::Palm::Nut::V1::UserSetProfileRequest, ::Google::Protobuf::Empty
          rpc :ChangePassword, ::Palm::Nut::V1::UserChangePasswordRequest, ::Google::Protobuf::Empty
          rpc :SignOut, ::Google::Protobuf::Empty, ::Google::Protobuf::Empty
          rpc :Index, ::Palm::Nut::V1::Pager, ::Palm::Nut::V1::UserIndexResponse
          rpc :Show, ::Palm::Nut::V1::IdRequest, ::Palm::Nut::V1::UserIndexResponse::Item
          rpc :Disable, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
          rpc :Enable, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
          rpc :Lock, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
          rpc :Unlock, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
          rpc :Confirm, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
          rpc :Delete, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
          rpc :SetPassword, ::Palm::Nut::V1::UserSetPasswordRequest, ::Google::Protobuf::Empty
        end

        Stub = Service.rpc_stub_class
      end
      module Google
        # ----------------------------------------------------------------------------
        class Service

          include ::GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'palm.nut.v1.Google'

          rpc :SignInUrl, ::Palm::Nut::V1::GoogleSignInUrlRequest, ::Palm::Nut::V1::GoogleSignInUrlResponse
          rpc :SignIn, ::Palm::Nut::V1::SignInByGoogleRequest, ::Palm::Nut::V1::UserSignInResponse
        end

        Stub = Service.rpc_stub_class
      end
      module Wechat
        # ----------------------------------------------------------------------------
        class Service

          include ::GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'palm.nut.v1.Wechat'

          rpc :Oauth2SignInState, ::Google::Protobuf::Empty, ::Palm::Nut::V1::WechatOauth2SignInStateResponse
          rpc :Oauth2SignInUrl, ::Palm::Nut::V1::WechatOauth2SignInUrlRequest, ::Palm::Orchid::V1::WechatOauth2QrConnectResponse
          rpc :SignInByOauth2, ::Palm::Nut::V1::SignInByWechatOauth2Request, ::Palm::Nut::V1::UserSignInResponse
          rpc :AllOauth2User, ::Google::Protobuf::Empty, ::Palm::Nut::V1::WechatAllOauth2UserResponse
          rpc :DestroyOauth2User, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
          rpc :BindOauth2UserById, ::Palm::Nut::V1::WechatUserBindByIdRequest, ::Google::Protobuf::Empty
          rpc :BindOauth2UserByAccount, ::Palm::Nut::V1::WechatUserBindByAccountRequest, ::Google::Protobuf::Empty
          rpc :GetOauth2UserById, ::Palm::Nut::V1::IdRequest, ::Palm::Nut::V1::WechatAllOauth2UserResponse::Item
          rpc :GetOauth2UserByOpenId, ::Palm::Nut::V1::WechatUserQueryByOpenIdRequest, ::Palm::Nut::V1::WechatAllOauth2UserResponse::Item
          rpc :GetOauth2UserByUnionId, ::Palm::Nut::V1::WechatUserQueryByUnionIdRequest, ::Palm::Nut::V1::WechatAllOauth2UserResponse
          rpc :AllMiniProgramUser, ::Google::Protobuf::Empty, ::Palm::Nut::V1::WechatAllMiniProgramUserResponse
          rpc :DestroyMiniProgramUser, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
          rpc :BindMiniProgramUserById, ::Palm::Nut::V1::WechatUserBindByIdRequest, ::Google::Protobuf::Empty
          rpc :GetMiniProgramUserById, ::Palm::Nut::V1::IdRequest, ::Palm::Nut::V1::WechatAllMiniProgramUserResponse::Item
          rpc :GetMiniProgramUserByOpenId, ::Palm::Nut::V1::WechatUserQueryByOpenIdRequest, ::Palm::Nut::V1::WechatAllMiniProgramUserResponse::Item
          rpc :GetMiniProgramUserByUnionId, ::Palm::Nut::V1::WechatUserQueryByUnionIdRequest, ::Palm::Nut::V1::WechatAllMiniProgramUserResponse
        end

        Stub = Service.rpc_stub_class
      end
      module Attachment
        # ----------------------------------------------------------------------------
        #
        class Service

          include ::GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'palm.nut.v1.Attachment'

          rpc :Index, ::Palm::Nut::V1::Pager, ::Palm::Nut::V1::AttachmentIndexResponse
          rpc :Destroy, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
          rpc :Show, ::Palm::Nut::V1::AttachmentShowRequest, ::Palm::Nut::V1::AttachmentShowResponse
        end

        Stub = Service.rpc_stub_class
      end
      module Locale
        # ----------------------------------------------------------------------------
        #
        class Service

          include ::GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'palm.nut.v1.Locale'

          rpc :Create, ::Palm::Nut::V1::LocaleCreateRequest, ::Google::Protobuf::Empty
          rpc :Update, ::Palm::Nut::V1::LocaleUpdateRequest, ::Google::Protobuf::Empty
          rpc :ByLangAndCode, ::Palm::Nut::V1::LocaleByLangAndCodeRequest, ::Palm::Nut::V1::LocaleIndexResponse::Item
          rpc :ById, ::Palm::Nut::V1::IdRequest, ::Palm::Nut::V1::LocaleIndexResponse::Item
          rpc :ByLang, ::Palm::Nut::V1::LocaleByLangRequest, ::Palm::Nut::V1::LocaleListResponse
          rpc :ByCode, ::Palm::Nut::V1::LocaleByCodeRequest, ::Palm::Nut::V1::LocaleListResponse
          rpc :Index, ::Palm::Nut::V1::Pager, ::Palm::Nut::V1::LocaleIndexResponse
          rpc :Destroy, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
        end

        Stub = Service.rpc_stub_class
      end
      module Notification
        # ----------------------------------------------------------------------------
        class Service

          include ::GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'palm.nut.v1.Notification'

          rpc :Index, ::Palm::Nut::V1::Pager, ::Palm::Nut::V1::IndexNotificationResponse
        end

        Stub = Service.rpc_stub_class
      end
      module LeaveWord
        # ----------------------------------------------------------------------------
        #
        class Service

          include ::GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'palm.nut.v1.LeaveWord'

          rpc :Create, ::Palm::Nut::V1::MediaContent, ::Google::Protobuf::Empty
          rpc :Index, ::Palm::Nut::V1::Pager, ::Palm::Nut::V1::LeaveWordIndexResponse
          rpc :Show, ::Palm::Nut::V1::IdRequest, ::Palm::Nut::V1::LeaveWordIndexResponse::Item
          rpc :Destroy, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
        end

        Stub = Service.rpc_stub_class
      end
      module Site
        # ----------------------------------------------------------------------------
        #
        class Service

          include ::GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'palm.nut.v1.Site'

          rpc :SetMaintenanceMode, ::Palm::Nut::V1::SiteMaintenanceModeRequest, ::Google::Protobuf::Empty
          rpc :Install, ::Palm::Nut::V1::SiteInstallRequest, ::Google::Protobuf::Empty
          rpc :ClearCache, ::Google::Protobuf::Empty, ::Google::Protobuf::Empty
          rpc :Layout, ::Google::Protobuf::Empty, ::Palm::Nut::V1::SiteLayoutResponse
          rpc :SetAuthor, ::Palm::Nut::V1::SiteLayoutResponse::Author, ::Google::Protobuf::Empty
          rpc :SetCopyright, ::Palm::Nut::V1::SiteSetCopyrightRequest, ::Google::Protobuf::Empty
          rpc :SetKeywords, ::Palm::Nut::V1::SiteSetKeywordsRequest, ::Google::Protobuf::Empty
          rpc :SetInfo, ::Palm::Nut::V1::SiteSetInfoRequest, ::Google::Protobuf::Empty
          rpc :SetLogo, ::Palm::Nut::V1::SiteSetLogoRequest, ::Google::Protobuf::Empty
          rpc :SetTwilio, ::Palm::Nut::V1::TwilioProfile, ::Google::Protobuf::Empty
          rpc :GetTwilio, ::Google::Protobuf::Empty, ::Palm::Nut::V1::TwilioProfile
          rpc :PingTwilio, ::Palm::Nut::V1::SiteTwilioPingRequest, ::Google::Protobuf::Empty
          rpc :SetSmtp, ::Palm::Nut::V1::SmtpProfile, ::Google::Protobuf::Empty
          rpc :GetSmtp, ::Google::Protobuf::Empty, ::Palm::Nut::V1::SmtpProfile
          rpc :PingSmtp, ::Palm::Nut::V1::SiteSmtpPingRequest, ::Google::Protobuf::Empty
          rpc :SetIndexNow, ::Palm::Nut::V1::IndexNowProfile, ::Google::Protobuf::Empty
          rpc :GetIndexNow, ::Google::Protobuf::Empty, ::Palm::Nut::V1::IndexNowProfile
          rpc :PingIndexNow, ::Palm::Nut::V1::IndexNowPingRequest, ::Google::Protobuf::Empty
          rpc :SetGoogle, ::Palm::Nut::V1::GoogleProfile, ::Google::Protobuf::Empty
          rpc :GetGoogle, ::Google::Protobuf::Empty, ::Palm::Nut::V1::GoogleProfile
          rpc :PingGoogle, ::Palm::Nut::V1::SitemapPingRequest, ::Google::Protobuf::Empty
          rpc :SetBaidu, ::Palm::Nut::V1::BaiduProfile, ::Google::Protobuf::Empty
          rpc :GetBaidu, ::Google::Protobuf::Empty, ::Palm::Nut::V1::BaiduProfile
          rpc :PingBaidu, ::Palm::Nut::V1::SitemapPingRequest, ::Google::Protobuf::Empty
          rpc :Status, ::Google::Protobuf::Empty, ::Palm::Nut::V1::SiteStatusResponse
        end

        Stub = Service.rpc_stub_class
      end
      module ShorterLink
        # ----------------------------------------------------------------------------
        #
        class Service

          include ::GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'palm.nut.v1.ShorterLink'

          rpc :Create, ::Palm::Nut::V1::ShorterLinkCreateRequest, ::Google::Protobuf::Empty
          rpc :Update, ::Palm::Nut::V1::ShorterLinkUpdateRequest, ::Google::Protobuf::Empty
          rpc :Destroy, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
          rpc :Index, ::Palm::Nut::V1::Pager, ::Palm::Nut::V1::ShorterLinkIndexResponse
        end

        Stub = Service.rpc_stub_class
      end
      module Tag
        class Service

          include ::GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'palm.nut.v1.Tag'

          rpc :Create, ::Palm::Nut::V1::TagCreateRequest, ::Google::Protobuf::Empty
          rpc :Update, ::Palm::Nut::V1::TagUpdateRequest, ::Google::Protobuf::Empty
          rpc :Destroy, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
          rpc :Index, ::Google::Protobuf::Empty, ::Palm::Nut::V1::TagIndexResponse
        end

        Stub = Service.rpc_stub_class
      end
      module Category
        class Service

          include ::GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'palm.nut.v1.Category'

          rpc :Create, ::Palm::Nut::V1::CategoryCreateRequest, ::Google::Protobuf::Empty
          rpc :Update, ::Palm::Nut::V1::CategoryUpdateRequest, ::Google::Protobuf::Empty
          rpc :Destroy, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
          rpc :Index, ::Google::Protobuf::Empty, ::Palm::Nut::V1::CategoryIndexResponse
        end

        Stub = Service.rpc_stub_class
      end
    end
  end
end
