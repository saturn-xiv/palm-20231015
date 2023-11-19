# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: rbac.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\nrbac.proto\x12\x0cpalm.rbac.v1\x1a\x1bgoogle/protobuf/empty.proto\"\x10\n\x0e\x43\x61sbinSyncTask\"\x88\x01\n\rUsersResponse\x12/\n\x05items\x18\x01 \x03(\x0b\x32 .palm.rbac.v1.UsersResponse.Item\x1a\x46\n\x04Item\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x10\n\x08nickname\x18\x02 \x01(\t\x12\x11\n\treal_name\x18\x03 \x01(\t\x12\r\n\x05\x65mail\x18\x04 \x01(\t\"v\n\x11ResourcesResponse\x12\x33\n\x05items\x18\x01 \x03(\x0b\x32$.palm.rbac.v1.ResourcesResponse.Item\x1a,\n\x04Item\x12\x0c\n\x04type\x18\x01 \x01(\t\x12\x0f\n\x02id\x18\x02 \x01(\x05H\x00\x88\x01\x01\x42\x05\n\x03_id\"#\n\x12OperationsResponse\x12\r\n\x05items\x18\x01 \x03(\t\"\x1e\n\rRolesResponse\x12\r\n\x05items\x18\x01 \x03(\t\"\x19\n\x0bUserRequest\x12\n\n\x02id\x18\x01 \x01(\x05\"\x1b\n\x0bRoleRequest\x12\x0c\n\x04\x63ode\x18\x01 \x01(\t\"/\n\x10UserRolesRequest\x12\x0c\n\x04user\x18\x01 \x01(\x05\x12\r\n\x05roles\x18\x02 \x03(\t\"c\n\x16UserPermissionsRequest\x12\x0c\n\x04user\x18\x01 \x01(\x05\x12;\n\x0bpermissions\x18\x02 \x03(\x0b\x32&.palm.rbac.v1.PermissionsResponse.Item\"c\n\x16RolePermissionsRequest\x12\x0c\n\x04role\x18\x01 \x01(\t\x12;\n\x0bpermissions\x18\x02 \x03(\x0b\x32&.palm.rbac.v1.PermissionsResponse.Item\"\x9f\x01\n\x13PermissionsResponse\x12\x35\n\x05items\x18\x01 \x03(\x0b\x32&.palm.rbac.v1.PermissionsResponse.Item\x1aQ\n\x04Item\x12\x11\n\toperation\x18\x01 \x01(\t\x12\x36\n\x08resource\x18\x02 \x01(\x0b\x32$.palm.rbac.v1.ResourcesResponse.Item\"3\n\x15HasRoleForUserRequest\x12\x0c\n\x04user\x18\x01 \x01(\x05\x12\x0c\n\x04role\x18\x02 \x01(\t\"v\n\x1bHasPermissionForUserRequest\x12\x0c\n\x04user\x18\x01 \x01(\x05\x12\x11\n\toperation\x18\x02 \x01(\t\x12\x36\n\x08resource\x18\x03 \x01(\x0b\x32$.palm.rbac.v1.ResourcesResponse.Item\"\x9f\x01\n\x1fUpdatePermissionsForUserRequest\x12\x0c\n\x04user\x18\x01 \x01(\x05\x12\x37\n\x07removed\x18\x02 \x03(\x0b\x32&.palm.rbac.v1.PermissionsResponse.Item\x12\x35\n\x05saved\x18\x03 \x03(\x0b\x32&.palm.rbac.v1.PermissionsResponse.Item\"\x9f\x01\n\x1fUpdatePermissionsForRoleRequest\x12\x0c\n\x04role\x18\x01 \x01(\t\x12\x37\n\x07removed\x18\x02 \x03(\x0b\x32&.palm.rbac.v1.PermissionsResponse.Item\x12\x35\n\x05saved\x18\x03 \x03(\x0b\x32&.palm.rbac.v1.PermissionsResponse.Item\"\xab\x01\n\rRulesResponse\x12/\n\x05items\x18\x01 \x03(\x0b\x32 .palm.rbac.v1.RulesResponse.Item\x1ai\n\x04Item\x12\n\n\x02id\x18\x01 \x01(\x05\x12\r\n\x05ptype\x18\x02 \x01(\t\x12\n\n\x02v0\x18\x03 \x01(\t\x12\n\n\x02v1\x18\x04 \x01(\t\x12\n\n\x02v2\x18\x05 \x01(\t\x12\n\n\x02v3\x18\x06 \x01(\t\x12\n\n\x02v4\x18\x07 \x01(\t\x12\n\n\x02v5\x18\x08 \x01(\t2\xff\x0e\n\x06Policy\x12\x44\n\x0bGetAllUsers\x12\x16.google.protobuf.Empty\x1a\x1b.palm.rbac.v1.UsersResponse\"\x00\x12L\n\x0fGetAllResources\x12\x16.google.protobuf.Empty\x1a\x1f.palm.rbac.v1.ResourcesResponse\"\x00\x12N\n\x10GetAllOperations\x12\x16.google.protobuf.Empty\x1a .palm.rbac.v1.OperationsResponse\"\x00\x12\x44\n\x0bGetAllRoles\x12\x16.google.protobuf.Empty\x1a\x1b.palm.rbac.v1.RolesResponse\"\x00\x12\x44\n\x0bGetAllRules\x12\x16.google.protobuf.Empty\x1a\x1b.palm.rbac.v1.RulesResponse\"\x00\x12K\n\x0fGetRolesForUser\x12\x19.palm.rbac.v1.UserRequest\x1a\x1b.palm.rbac.v1.RolesResponse\"\x00\x12S\n\x17GetImplicitRolesForUser\x12\x19.palm.rbac.v1.UserRequest\x1a\x1b.palm.rbac.v1.RolesResponse\"\x00\x12K\n\x0fGetUsersForRole\x12\x19.palm.rbac.v1.RoleRequest\x1a\x1b.palm.rbac.v1.UsersResponse\"\x00\x12N\n\x12\x44\x65leteRolesForUser\x12\x1e.palm.rbac.v1.UserRolesRequest\x1a\x16.google.protobuf.Empty\"\x00\x12K\n\x0f\x41\x64\x64RolesForUser\x12\x1e.palm.rbac.v1.UserRolesRequest\x1a\x16.google.protobuf.Empty\"\x00\x12\x41\n\nDeleteUser\x12\x19.palm.rbac.v1.UserRequest\x1a\x16.google.protobuf.Empty\"\x00\x12\x41\n\nDeleteRole\x12\x19.palm.rbac.v1.RoleRequest\x1a\x16.google.protobuf.Empty\"\x00\x12W\n\x15\x41\x64\x64PermissionsForRole\x12$.palm.rbac.v1.RolePermissionsRequest\x1a\x16.google.protobuf.Empty\"\x00\x12Z\n\x18\x44\x65letePermissionsForRole\x12$.palm.rbac.v1.RolePermissionsRequest\x1a\x16.google.protobuf.Empty\"\x00\x12W\n\x15\x41\x64\x64PermissionsForUser\x12$.palm.rbac.v1.UserPermissionsRequest\x1a\x16.google.protobuf.Empty\"\x00\x12Z\n\x18\x44\x65letePermissionsForUser\x12$.palm.rbac.v1.UserPermissionsRequest\x1a\x16.google.protobuf.Empty\"\x00\x12W\n\x15GetPermissionsForUser\x12\x19.palm.rbac.v1.UserRequest\x1a!.palm.rbac.v1.PermissionsResponse\"\x00\x12W\n\x15GetPermissionsForRole\x12\x19.palm.rbac.v1.RoleRequest\x1a!.palm.rbac.v1.PermissionsResponse\"\x00\x12_\n\x1dGetImplicitPermissionsForUser\x12\x19.palm.rbac.v1.UserRequest\x1a!.palm.rbac.v1.PermissionsResponse\"\x00\x12O\n\x0eHasRoleForUser\x12#.palm.rbac.v1.HasRoleForUserRequest\x1a\x16.google.protobuf.Empty\"\x00\x12[\n\x14HasPermissionForUser\x12).palm.rbac.v1.HasPermissionForUserRequest\x1a\x16.google.protobuf.Empty\"\x00\x12\x63\n\x18UpdatePermissionsForRole\x12-.palm.rbac.v1.UpdatePermissionsForRoleRequest\x1a\x16.google.protobuf.Empty\"\x00\x12\x63\n\x18UpdatePermissionsForUser\x12-.palm.rbac.v1.UpdatePermissionsForUserRequest\x1a\x16.google.protobuf.Empty\"\x00\x42.\n*com.github.saturn_xiv.palm.plugins.rbac.v1P\x01\x62\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'rbac_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n*com.github.saturn_xiv.palm.plugins.rbac.v1P\001'
  _CASBINSYNCTASK._serialized_start=57
  _CASBINSYNCTASK._serialized_end=73
  _USERSRESPONSE._serialized_start=76
  _USERSRESPONSE._serialized_end=212
  _USERSRESPONSE_ITEM._serialized_start=142
  _USERSRESPONSE_ITEM._serialized_end=212
  _RESOURCESRESPONSE._serialized_start=214
  _RESOURCESRESPONSE._serialized_end=332
  _RESOURCESRESPONSE_ITEM._serialized_start=288
  _RESOURCESRESPONSE_ITEM._serialized_end=332
  _OPERATIONSRESPONSE._serialized_start=334
  _OPERATIONSRESPONSE._serialized_end=369
  _ROLESRESPONSE._serialized_start=371
  _ROLESRESPONSE._serialized_end=401
  _USERREQUEST._serialized_start=403
  _USERREQUEST._serialized_end=428
  _ROLEREQUEST._serialized_start=430
  _ROLEREQUEST._serialized_end=457
  _USERROLESREQUEST._serialized_start=459
  _USERROLESREQUEST._serialized_end=506
  _USERPERMISSIONSREQUEST._serialized_start=508
  _USERPERMISSIONSREQUEST._serialized_end=607
  _ROLEPERMISSIONSREQUEST._serialized_start=609
  _ROLEPERMISSIONSREQUEST._serialized_end=708
  _PERMISSIONSRESPONSE._serialized_start=711
  _PERMISSIONSRESPONSE._serialized_end=870
  _PERMISSIONSRESPONSE_ITEM._serialized_start=789
  _PERMISSIONSRESPONSE_ITEM._serialized_end=870
  _HASROLEFORUSERREQUEST._serialized_start=872
  _HASROLEFORUSERREQUEST._serialized_end=923
  _HASPERMISSIONFORUSERREQUEST._serialized_start=925
  _HASPERMISSIONFORUSERREQUEST._serialized_end=1043
  _UPDATEPERMISSIONSFORUSERREQUEST._serialized_start=1046
  _UPDATEPERMISSIONSFORUSERREQUEST._serialized_end=1205
  _UPDATEPERMISSIONSFORROLEREQUEST._serialized_start=1208
  _UPDATEPERMISSIONSFORROLEREQUEST._serialized_end=1367
  _RULESRESPONSE._serialized_start=1370
  _RULESRESPONSE._serialized_end=1541
  _RULESRESPONSE_ITEM._serialized_start=1436
  _RULESRESPONSE_ITEM._serialized_end=1541
  _POLICY._serialized_start=1544
  _POLICY._serialized_end=3463
# @@protoc_insertion_point(module_scope)