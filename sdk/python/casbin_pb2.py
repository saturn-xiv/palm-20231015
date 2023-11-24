# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: casbin.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0c\x63\x61sbin.proto\x12\x0epalm.casbin.v1\">\n\x12NewEnforcerRequest\x12\x11\n\tmodelText\x18\x01 \x01(\t\x12\x15\n\radapterHandle\x18\x02 \x01(\x05\"#\n\x10NewEnforcerReply\x12\x0f\n\x07handler\x18\x01 \x01(\x05\"h\n\x11NewAdapterRequest\x12\x13\n\x0b\x61\x64\x61pterName\x18\x01 \x01(\t\x12\x12\n\ndriverName\x18\x02 \x01(\t\x12\x15\n\rconnectString\x18\x03 \x01(\t\x12\x13\n\x0b\x64\x62Specified\x18\x04 \x01(\x08\"\"\n\x0fNewAdapterReply\x12\x0f\n\x07handler\x18\x01 \x01(\x05\"9\n\x0e\x45nforceRequest\x12\x17\n\x0f\x65nforcerHandler\x18\x01 \x01(\x05\x12\x0e\n\x06params\x18\x02 \x03(\t\"\x18\n\tBoolReply\x12\x0b\n\x03res\x18\x01 \x01(\x08\"\x1f\n\x0c\x45mptyRequest\x12\x0f\n\x07handler\x18\x01 \x01(\x05\"\x0c\n\nEmptyReply\"G\n\rPolicyRequest\x12\x17\n\x0f\x65nforcerHandler\x18\x01 \x01(\x05\x12\r\n\x05pType\x18\x02 \x01(\t\x12\x0e\n\x06params\x18\x03 \x03(\t\":\n\x10SimpleGetRequest\x12\x17\n\x0f\x65nforcerHandler\x18\x01 \x01(\x05\x12\r\n\x05pType\x18\x02 \x01(\t\"\x1b\n\nArrayReply\x12\r\n\x05\x61rray\x18\x01 \x03(\t\"h\n\x15\x46ilteredPolicyRequest\x12\x17\n\x0f\x65nforcerHandler\x18\x01 \x01(\x05\x12\r\n\x05pType\x18\x02 \x01(\t\x12\x12\n\nfieldIndex\x18\x03 \x01(\x05\x12\x13\n\x0b\x66ieldValues\x18\x04 \x03(\t\"V\n\x0fUserRoleRequest\x12\x17\n\x0f\x65nforcerHandler\x18\x01 \x01(\x05\x12\x0c\n\x04user\x18\x02 \x01(\t\x12\x0c\n\x04role\x18\x03 \x01(\t\x12\x0e\n\x06\x64omain\x18\x04 \x03(\t\"_\n\x11PermissionRequest\x12\x17\n\x0f\x65nforcerHandler\x18\x01 \x01(\x05\x12\x0c\n\x04user\x18\x02 \x01(\t\x12\x13\n\x0bpermissions\x18\x03 \x03(\t\x12\x0e\n\x06\x64omain\x18\x04 \x03(\t\"K\n\x0c\x41rray2DReply\x12*\n\x02\x64\x32\x18\x01 \x03(\x0b\x32\x1e.palm.casbin.v1.Array2DReply.d\x1a\x0f\n\x01\x64\x12\n\n\x02\x64\x31\x18\x01 \x03(\t2\xe1#\n\x06\x43\x61sbin\x12U\n\x0bNewEnforcer\x12\".palm.casbin.v1.NewEnforcerRequest\x1a .palm.casbin.v1.NewEnforcerReply\"\x00\x12R\n\nNewAdapter\x12!.palm.casbin.v1.NewAdapterRequest\x1a\x1f.palm.casbin.v1.NewAdapterReply\"\x00\x12\x46\n\x07\x45nforce\x12\x1e.palm.casbin.v1.EnforceRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12H\n\nLoadPolicy\x12\x1c.palm.casbin.v1.EmptyRequest\x1a\x1a.palm.casbin.v1.EmptyReply\"\x00\x12H\n\nSavePolicy\x12\x1c.palm.casbin.v1.EmptyRequest\x1a\x1a.palm.casbin.v1.EmptyReply\"\x00\x12G\n\tAddPolicy\x12\x1d.palm.casbin.v1.PolicyRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12L\n\x0e\x41\x64\x64NamedPolicy\x12\x1d.palm.casbin.v1.PolicyRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12J\n\x0cRemovePolicy\x12\x1d.palm.casbin.v1.PolicyRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12O\n\x11RemoveNamedPolicy\x12\x1d.palm.casbin.v1.PolicyRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12Z\n\x14RemoveFilteredPolicy\x12%.palm.casbin.v1.FilteredPolicyRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12_\n\x19RemoveFilteredNamedPolicy\x12%.palm.casbin.v1.FilteredPolicyRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12I\n\tGetPolicy\x12\x1c.palm.casbin.v1.EmptyRequest\x1a\x1c.palm.casbin.v1.Array2DReply\"\x00\x12O\n\x0eGetNamedPolicy\x12\x1d.palm.casbin.v1.PolicyRequest\x1a\x1c.palm.casbin.v1.Array2DReply\"\x00\x12Z\n\x11GetFilteredPolicy\x12%.palm.casbin.v1.FilteredPolicyRequest\x1a\x1c.palm.casbin.v1.Array2DReply\"\x00\x12_\n\x16GetFilteredNamedPolicy\x12%.palm.casbin.v1.FilteredPolicyRequest\x1a\x1c.palm.casbin.v1.Array2DReply\"\x00\x12O\n\x11\x41\x64\x64GroupingPolicy\x12\x1d.palm.casbin.v1.PolicyRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12T\n\x16\x41\x64\x64NamedGroupingPolicy\x12\x1d.palm.casbin.v1.PolicyRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12R\n\x14RemoveGroupingPolicy\x12\x1d.palm.casbin.v1.PolicyRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12W\n\x19RemoveNamedGroupingPolicy\x12\x1d.palm.casbin.v1.PolicyRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12\x62\n\x1cRemoveFilteredGroupingPolicy\x12%.palm.casbin.v1.FilteredPolicyRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12g\n!RemoveFilteredNamedGroupingPolicy\x12%.palm.casbin.v1.FilteredPolicyRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12Q\n\x11GetGroupingPolicy\x12\x1c.palm.casbin.v1.EmptyRequest\x1a\x1c.palm.casbin.v1.Array2DReply\"\x00\x12W\n\x16GetNamedGroupingPolicy\x12\x1d.palm.casbin.v1.PolicyRequest\x1a\x1c.palm.casbin.v1.Array2DReply\"\x00\x12\x62\n\x19GetFilteredGroupingPolicy\x12%.palm.casbin.v1.FilteredPolicyRequest\x1a\x1c.palm.casbin.v1.Array2DReply\"\x00\x12g\n\x1eGetFilteredNamedGroupingPolicy\x12%.palm.casbin.v1.FilteredPolicyRequest\x1a\x1c.palm.casbin.v1.Array2DReply\"\x00\x12L\n\x0eGetAllSubjects\x12\x1c.palm.casbin.v1.EmptyRequest\x1a\x1a.palm.casbin.v1.ArrayReply\"\x00\x12U\n\x13GetAllNamedSubjects\x12 .palm.casbin.v1.SimpleGetRequest\x1a\x1a.palm.casbin.v1.ArrayReply\"\x00\x12K\n\rGetAllObjects\x12\x1c.palm.casbin.v1.EmptyRequest\x1a\x1a.palm.casbin.v1.ArrayReply\"\x00\x12T\n\x12GetAllNamedObjects\x12 .palm.casbin.v1.SimpleGetRequest\x1a\x1a.palm.casbin.v1.ArrayReply\"\x00\x12K\n\rGetAllActions\x12\x1c.palm.casbin.v1.EmptyRequest\x1a\x1a.palm.casbin.v1.ArrayReply\"\x00\x12T\n\x12GetAllNamedActions\x12 .palm.casbin.v1.SimpleGetRequest\x1a\x1a.palm.casbin.v1.ArrayReply\"\x00\x12I\n\x0bGetAllRoles\x12\x1c.palm.casbin.v1.EmptyRequest\x1a\x1a.palm.casbin.v1.ArrayReply\"\x00\x12R\n\x10GetAllNamedRoles\x12 .palm.casbin.v1.SimpleGetRequest\x1a\x1a.palm.casbin.v1.ArrayReply\"\x00\x12G\n\tHasPolicy\x12\x1d.palm.casbin.v1.PolicyRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12L\n\x0eHasNamedPolicy\x12\x1d.palm.casbin.v1.PolicyRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12O\n\x11HasGroupingPolicy\x12\x1d.palm.casbin.v1.PolicyRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12T\n\x16HasNamedGroupingPolicy\x12\x1d.palm.casbin.v1.PolicyRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12K\n\nGetDomains\x12\x1f.palm.casbin.v1.UserRoleRequest\x1a\x1a.palm.casbin.v1.ArrayReply\"\x00\x12P\n\x0fGetRolesForUser\x12\x1f.palm.casbin.v1.UserRoleRequest\x1a\x1a.palm.casbin.v1.ArrayReply\"\x00\x12X\n\x17GetImplicitRolesForUser\x12\x1f.palm.casbin.v1.UserRoleRequest\x1a\x1a.palm.casbin.v1.ArrayReply\"\x00\x12P\n\x0fGetUsersForRole\x12\x1f.palm.casbin.v1.UserRoleRequest\x1a\x1a.palm.casbin.v1.ArrayReply\"\x00\x12N\n\x0eHasRoleForUser\x12\x1f.palm.casbin.v1.UserRoleRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12N\n\x0e\x41\x64\x64RoleForUser\x12\x1f.palm.casbin.v1.UserRoleRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12Q\n\x11\x44\x65leteRoleForUser\x12\x1f.palm.casbin.v1.UserRoleRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12R\n\x12\x44\x65leteRolesForUser\x12\x1f.palm.casbin.v1.UserRoleRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12J\n\nDeleteUser\x12\x1f.palm.casbin.v1.UserRoleRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12K\n\nDeleteRole\x12\x1f.palm.casbin.v1.UserRoleRequest\x1a\x1a.palm.casbin.v1.EmptyReply\"\x00\x12Z\n\x15GetPermissionsForUser\x12!.palm.casbin.v1.PermissionRequest\x1a\x1c.palm.casbin.v1.Array2DReply\"\x00\x12\x62\n\x1dGetImplicitPermissionsForUser\x12!.palm.casbin.v1.PermissionRequest\x1a\x1c.palm.casbin.v1.Array2DReply\"\x00\x12R\n\x10\x44\x65letePermission\x12!.palm.casbin.v1.PermissionRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12V\n\x14\x41\x64\x64PermissionForUser\x12!.palm.casbin.v1.PermissionRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12Y\n\x17\x44\x65letePermissionForUser\x12!.palm.casbin.v1.PermissionRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12Z\n\x18\x44\x65letePermissionsForUser\x12!.palm.casbin.v1.PermissionRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x12V\n\x14HasPermissionForUser\x12!.palm.casbin.v1.PermissionRequest\x1a\x19.palm.casbin.v1.BoolReply\"\x00\x42\x30\n,com.github.saturn_xiv.palm.plugins.casbin.v1P\x01\x62\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'casbin_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n,com.github.saturn_xiv.palm.plugins.casbin.v1P\001'
  _NEWENFORCERREQUEST._serialized_start=32
  _NEWENFORCERREQUEST._serialized_end=94
  _NEWENFORCERREPLY._serialized_start=96
  _NEWENFORCERREPLY._serialized_end=131
  _NEWADAPTERREQUEST._serialized_start=133
  _NEWADAPTERREQUEST._serialized_end=237
  _NEWADAPTERREPLY._serialized_start=239
  _NEWADAPTERREPLY._serialized_end=273
  _ENFORCEREQUEST._serialized_start=275
  _ENFORCEREQUEST._serialized_end=332
  _BOOLREPLY._serialized_start=334
  _BOOLREPLY._serialized_end=358
  _EMPTYREQUEST._serialized_start=360
  _EMPTYREQUEST._serialized_end=391
  _EMPTYREPLY._serialized_start=393
  _EMPTYREPLY._serialized_end=405
  _POLICYREQUEST._serialized_start=407
  _POLICYREQUEST._serialized_end=478
  _SIMPLEGETREQUEST._serialized_start=480
  _SIMPLEGETREQUEST._serialized_end=538
  _ARRAYREPLY._serialized_start=540
  _ARRAYREPLY._serialized_end=567
  _FILTEREDPOLICYREQUEST._serialized_start=569
  _FILTEREDPOLICYREQUEST._serialized_end=673
  _USERROLEREQUEST._serialized_start=675
  _USERROLEREQUEST._serialized_end=761
  _PERMISSIONREQUEST._serialized_start=763
  _PERMISSIONREQUEST._serialized_end=858
  _ARRAY2DREPLY._serialized_start=860
  _ARRAY2DREPLY._serialized_end=935
  _ARRAY2DREPLY_D._serialized_start=920
  _ARRAY2DREPLY_D._serialized_end=935
  _CASBIN._serialized_start=938
  _CASBIN._serialized_end=5515
# @@protoc_insertion_point(module_scope)