# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: metasequoia.proto for package 'palm.metasequoia.v1'

require 'grpc'
require 'metasequoia_pb'

module Palm
  module Metasequoia
    module V1
      module User
        class Service

          include ::GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'palm.metasequoia.v1.User'

          rpc :SignInByPassword, ::Palm::Metasequoia::V1::UserSignInByPasswordRequest, ::Palm::Metasequoia::V1::UserSignInResponse
          rpc :SignUpByEmail, ::Palm::Metasequoia::V1::UserSignUpByEmailRequest, ::Google::Protobuf::Empty
          rpc :ConfirmByEmail, ::Palm::Metasequoia::V1::UserQueryRequest, ::Google::Protobuf::Empty
          rpc :ConfirmByToken, ::Palm::Metasequoia::V1::UserTokenRequest, ::Google::Protobuf::Empty
          rpc :UnlockByEmail, ::Palm::Metasequoia::V1::UserQueryRequest, ::Google::Protobuf::Empty
          rpc :UnlockByToken, ::Palm::Metasequoia::V1::UserTokenRequest, ::Google::Protobuf::Empty
          rpc :ForgotPassword, ::Palm::Metasequoia::V1::UserQueryRequest, ::Google::Protobuf::Empty
          rpc :ResetPassword, ::Palm::Metasequoia::V1::UserResetPasswordRequest, ::Google::Protobuf::Empty
          rpc :Refresh, ::Google::Protobuf::Duration, ::Palm::Metasequoia::V1::UserSignInResponse
          rpc :Logs, ::Palm::Metasequoia::V1::UserLogsRequest, ::Palm::Metasequoia::V1::UserLogsResponse
          rpc :SetProfile, ::Palm::Metasequoia::V1::UserProfile, ::Google::Protobuf::Empty
          rpc :GetProfile, ::Google::Protobuf::Empty, ::Palm::Metasequoia::V1::UserProfile
          rpc :ChangePassword, ::Palm::Metasequoia::V1::UserChangePasswordRequest, ::Google::Protobuf::Empty
          rpc :SignOut, ::Google::Protobuf::Empty, ::Google::Protobuf::Empty
          rpc :Index, ::Google::Protobuf::Empty, ::Palm::Metasequoia::V1::UserIndexResponse
          rpc :Show, ::Palm::Metasequoia::V1::UserQueryRequest, ::Palm::Metasequoia::V1::UserIndexResponse::Item
          rpc :Disable, ::Palm::Metasequoia::V1::UserQueryRequest, ::Google::Protobuf::Empty
          rpc :Enable, ::Palm::Metasequoia::V1::UserQueryRequest, ::Google::Protobuf::Empty
          rpc :Lock, ::Palm::Metasequoia::V1::UserQueryRequest, ::Google::Protobuf::Empty
          rpc :Unlock, ::Palm::Metasequoia::V1::UserQueryRequest, ::Google::Protobuf::Empty
          rpc :Confirm, ::Palm::Metasequoia::V1::UserQueryRequest, ::Google::Protobuf::Empty
          rpc :Delete, ::Palm::Metasequoia::V1::UserQueryRequest, ::Google::Protobuf::Empty
          rpc :SetPassword, ::Palm::Metasequoia::V1::UserSetPasswordRequest, ::Google::Protobuf::Empty
        end

        Stub = Service.rpc_stub_class
      end
      module Rbac
        class Service

          include ::GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'palm.metasequoia.v1.Rbac'

          rpc :GetRolesForUser, ::Palm::Metasequoia::V1::UserQueryRequest, ::Palm::Metasequoia::V1::RbacRolesResponse
          rpc :GetImplicitRolesForUser, ::Palm::Metasequoia::V1::UserQueryRequest, ::Palm::Metasequoia::V1::RbacRolesResponse
          rpc :AddRolesForUser, ::Palm::Metasequoia::V1::RbacRolesForUserRequest, ::Google::Protobuf::Empty
          rpc :DeleteRolesForUser, ::Palm::Metasequoia::V1::RbacRolesForUserRequest, ::Google::Protobuf::Empty
          rpc :AddPermissionsForRole, ::Palm::Metasequoia::V1::RbacPermissionsForRoleRequest, ::Google::Protobuf::Empty
          rpc :DeletePermissionsForRole, ::Palm::Metasequoia::V1::RbacPermissionsForRoleRequest, ::Google::Protobuf::Empty
          rpc :GetPermissionsForUser, ::Palm::Metasequoia::V1::UserQueryRequest, ::Palm::Metasequoia::V1::RbacPermissionsResponse
          rpc :GetImplicitPermissionsForUser, ::Palm::Metasequoia::V1::UserQueryRequest, ::Palm::Metasequoia::V1::RbacPermissionsResponse
          rpc :AddPermissionsForUser, ::Palm::Metasequoia::V1::RbacPermissionsForUserRequest, ::Google::Protobuf::Empty
          rpc :DeletePermissionsForUser, ::Palm::Metasequoia::V1::RbacPermissionsForUserRequest, ::Google::Protobuf::Empty
        end

        Stub = Service.rpc_stub_class
      end
      module Setting
        # ----------------------------------------------------------------------------
        #
        class Service

          include ::GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'palm.metasequoia.v1.Setting'

          rpc :Set, ::Palm::Metasequoia::V1::SettingSetRequest, ::Google::Protobuf::Empty
          rpc :Get, ::Palm::Metasequoia::V1::SettingGetRequest, ::Palm::Metasequoia::V1::SettingsResponse::Item
          rpc :ByUser, ::Palm::Metasequoia::V1::SettingByUserRequest, ::Palm::Metasequoia::V1::SettingsResponse
          rpc :My, ::Google::Protobuf::Empty, ::Palm::Metasequoia::V1::SettingsResponse
          rpc :Global, ::Google::Protobuf::Empty, ::Palm::Metasequoia::V1::SettingsResponse
        end

        Stub = Service.rpc_stub_class
      end
      module Locale
        class Service

          include ::GRPC::GenericService

          self.marshal_class_method = :encode
          self.unmarshal_class_method = :decode
          self.service_name = 'palm.metasequoia.v1.Locale'

          rpc :Set, ::Palm::Metasequoia::V1::LocaleSetRequest, ::Google::Protobuf::Empty
          rpc :Get, ::Palm::Metasequoia::V1::LocaleGetRequest, ::Palm::Metasequoia::V1::LocalesResponse::Item
          rpc :ByLang, ::Palm::Metasequoia::V1::LocaleByLangRequest, ::Palm::Metasequoia::V1::LocalesResponse
        end

        Stub = Service.rpc_stub_class
      end
    end
  end
end
