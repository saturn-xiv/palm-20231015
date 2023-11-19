# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: auth.proto for package 'palm.auth.v1'

require 'grpc'
require 'auth_pb'

module Palm
  module Auth
    module V1
      module User
        # ----------------------------------------------------------------------------
        #
        class Service

          include ::GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'palm.auth.v1.User'

          rpc :SignIn, ::Palm::Auth::V1::UserSignInRequest, ::Palm::Auth::V1::UserSignInResponse
          rpc :SignUp, ::Palm::Auth::V1::UserSignUpRequest, ::Google::Protobuf::Empty
          rpc :ConfirmByEmail, ::Palm::Auth::V1::UserQueryRequest, ::Google::Protobuf::Empty
          rpc :ConfirmByToken, ::Palm::Auth::V1::UserTokenRequest, ::Google::Protobuf::Empty
          rpc :UnlockByEmail, ::Palm::Auth::V1::UserQueryRequest, ::Google::Protobuf::Empty
          rpc :UnlockByToken, ::Palm::Auth::V1::UserTokenRequest, ::Google::Protobuf::Empty
          rpc :ForgotPassword, ::Palm::Auth::V1::UserQueryRequest, ::Google::Protobuf::Empty
          rpc :ResetPassword, ::Palm::Auth::V1::UserResetPasswordRequest, ::Google::Protobuf::Empty
          rpc :Refresh, ::Google::Protobuf::Duration, ::Palm::Auth::V1::UserSignInResponse
          rpc :Logs, ::Palm::Nut::V1::Pager, ::Palm::Auth::V1::UserLogsResponse
          rpc :SetProfile, ::Palm::Auth::V1::UserSetProfileRequest, ::Google::Protobuf::Empty
          rpc :ChangePassword, ::Palm::Auth::V1::UserChangePasswordRequest, ::Google::Protobuf::Empty
          rpc :SignOut, ::Google::Protobuf::Empty, ::Google::Protobuf::Empty
          rpc :Index, ::Palm::Nut::V1::Pager, ::Palm::Auth::V1::UserIndexResponse
          rpc :Show, ::Palm::Nut::V1::IdRequest, ::Palm::Auth::V1::UserIndexResponse::Item
          rpc :Disable, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
          rpc :Enable, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
          rpc :Lock, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
          rpc :Unlock, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
          rpc :Confirm, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
          rpc :Delete, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
          rpc :SetPassword, ::Palm::Auth::V1::UserSetPasswordRequest, ::Google::Protobuf::Empty
        end

        Stub = Service.rpc_stub_class
      end
      module Google
        # ----------------------------------------------------------------------------
        class Service

          include ::GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'palm.auth.v1.Google'

          rpc :SignInUrl, ::Palm::Auth::V1::GoogleSignInUrlRequest, ::Palm::Auth::V1::GoogleSignInUrlResponse
          rpc :SignIn, ::Palm::Auth::V1::SignInByGoogleRequest, ::Palm::Auth::V1::UserSignInResponse
        end

        Stub = Service.rpc_stub_class
      end
      module Wechat
        # ----------------------------------------------------------------------------
        class Service

          include ::GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'palm.auth.v1.Wechat'

          rpc :Oauth2SignInState, ::Google::Protobuf::Empty, ::Palm::Auth::V1::WechatOauth2SignInStateResponse
          rpc :Oauth2SignInUrl, ::Palm::Auth::V1::WechatOauth2SignInUrlRequest, ::Palm::Orchid::V1::WechatOauth2QrConnectResponse
          rpc :SignInByOauth2, ::Palm::Auth::V1::SignInByWechatOauth2Request, ::Palm::Auth::V1::UserSignInResponse
          rpc :AllOauth2User, ::Google::Protobuf::Empty, ::Palm::Auth::V1::WechatAllOauth2UserResponse
          rpc :DestroyOauth2User, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
          rpc :BindOauth2UserById, ::Palm::Auth::V1::WechatUserBindByIdRequest, ::Google::Protobuf::Empty
          rpc :BindOauth2UserByAccount, ::Palm::Auth::V1::WechatUserBindByAccountRequest, ::Google::Protobuf::Empty
          rpc :GetOauth2UserById, ::Palm::Nut::V1::IdRequest, ::Palm::Auth::V1::WechatAllOauth2UserResponse::Item
          rpc :GetOauth2UserByOpenId, ::Palm::Auth::V1::WechatUserQueryByOpenIdRequest, ::Palm::Auth::V1::WechatAllOauth2UserResponse::Item
          rpc :GetOauth2UserByUnionId, ::Palm::Auth::V1::WechatUserQueryByUnionIdRequest, ::Palm::Auth::V1::WechatAllOauth2UserResponse
          rpc :AllMiniProgramUser, ::Google::Protobuf::Empty, ::Palm::Auth::V1::WechatAllMiniProgramUserResponse
          rpc :DestroyMiniProgramUser, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
          rpc :BindMiniProgramUserById, ::Palm::Auth::V1::WechatUserBindByIdRequest, ::Google::Protobuf::Empty
          rpc :GetMiniProgramUserById, ::Palm::Nut::V1::IdRequest, ::Palm::Auth::V1::WechatAllMiniProgramUserResponse::Item
          rpc :GetMiniProgramUserByOpenId, ::Palm::Auth::V1::WechatUserQueryByOpenIdRequest, ::Palm::Auth::V1::WechatAllMiniProgramUserResponse::Item
          rpc :GetMiniProgramUserByUnionId, ::Palm::Auth::V1::WechatUserQueryByUnionIdRequest, ::Palm::Auth::V1::WechatAllMiniProgramUserResponse
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
          self.service_name = 'palm.auth.v1.Attachment'

          rpc :Index, ::Palm::Nut::V1::Pager, ::Palm::Auth::V1::AttachmentIndexResponse
          rpc :Destroy, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
          rpc :Show, ::Palm::Auth::V1::AttachmentShowRequest, ::Palm::Auth::V1::AttachmentShowResponse
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
          self.service_name = 'palm.auth.v1.Locale'

          rpc :Create, ::Palm::Auth::V1::LocaleCreateRequest, ::Google::Protobuf::Empty
          rpc :Update, ::Palm::Auth::V1::LocaleUpdateRequest, ::Google::Protobuf::Empty
          rpc :ByLangAndCode, ::Palm::Auth::V1::LocaleByLangAndCodeRequest, ::Palm::Auth::V1::LocaleIndexResponse::Item
          rpc :ById, ::Palm::Nut::V1::IdRequest, ::Palm::Auth::V1::LocaleIndexResponse::Item
          rpc :ByLang, ::Palm::Auth::V1::LocaleByLangRequest, ::Palm::Auth::V1::LocaleListResponse
          rpc :ByCode, ::Palm::Auth::V1::LocaleByCodeRequest, ::Palm::Auth::V1::LocaleListResponse
          rpc :Index, ::Palm::Nut::V1::Pager, ::Palm::Auth::V1::LocaleIndexResponse
          rpc :Destroy, ::Palm::Nut::V1::IdRequest, ::Google::Protobuf::Empty
        end

        Stub = Service.rpc_stub_class
      end
    end
  end
end