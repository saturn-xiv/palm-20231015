# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: rbac.proto

require 'google/protobuf'

require 'google/protobuf/empty_pb'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("rbac.proto", :syntax => :proto3) do
    add_message "palm.rbac.v1.UserRequest" do
      optional :id, :int32, 1
    end
    add_message "palm.rbac.v1.RolesResponse" do
      repeated :items, :string, 1
    end
    add_message "palm.rbac.v1.RoleRequest" do
      optional :name, :string, 1
    end
    add_message "palm.rbac.v1.UsersResponse" do
      repeated :items, :string, 1
    end
    add_message "palm.rbac.v1.HasRoleForUserRequest" do
      optional :user, :int32, 1
      optional :role, :string, 2
    end
    add_message "palm.rbac.v1.HasPermissionForUserRequest" do
      optional :user, :int32, 1
      optional :role, :string, 2
    end
    add_message "palm.rbac.v1.RolesForUserRequest" do
      optional :user, :int32, 1
      repeated :roles, :string, 2
    end
    add_message "palm.rbac.v1.Resource" do
      optional :type, :string, 1
      proto3_optional :id, :string, 2
    end
    add_message "palm.rbac.v1.Permission" do
      optional :object, :message, 1, "palm.rbac.v1.Resource"
      optional :action, :string, 2
      oneof :subject do
        optional :user, :int32, 11
        optional :role, :string, 12
      end
    end
    add_message "palm.rbac.v1.PermissionsResponse" do
      repeated :items, :message, 1, "palm.rbac.v1.Permission"
    end
    add_message "palm.rbac.v1.PermissionsForUserRequest" do
      optional :user, :int32, 1
      repeated :items, :message, 2, "palm.rbac.v1.Permission"
    end
    add_message "palm.rbac.v1.PermissionsForRoleRequest" do
      optional :role, :string, 1
      repeated :items, :message, 2, "palm.rbac.v1.Permission"
    end
  end
end

module Palm
  module Rbac
    module V1
      UserRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.rbac.v1.UserRequest").msgclass
      RolesResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.rbac.v1.RolesResponse").msgclass
      RoleRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.rbac.v1.RoleRequest").msgclass
      UsersResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.rbac.v1.UsersResponse").msgclass
      HasRoleForUserRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.rbac.v1.HasRoleForUserRequest").msgclass
      HasPermissionForUserRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.rbac.v1.HasPermissionForUserRequest").msgclass
      RolesForUserRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.rbac.v1.RolesForUserRequest").msgclass
      Resource = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.rbac.v1.Resource").msgclass
      Permission = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.rbac.v1.Permission").msgclass
      PermissionsResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.rbac.v1.PermissionsResponse").msgclass
      PermissionsForUserRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.rbac.v1.PermissionsForUserRequest").msgclass
      PermissionsForRoleRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.rbac.v1.PermissionsForRoleRequest").msgclass
    end
  end
end
