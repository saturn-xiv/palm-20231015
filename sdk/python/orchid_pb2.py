# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: orchid.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0corchid.proto\x12\x0epalm.orchid.v1\"=\n\x1dWechatMiniProgramLoginRequest\x12\x0e\n\x06\x61pp_id\x18\x01 \x01(\t\x12\x0c\n\x04\x63ode\x18\x02 \x01(\t\"V\n\x1eWechatMiniProgramLoginResponse\x12\x0f\n\x07unionid\x18\x01 \x01(\t\x12\x0e\n\x06openid\x18\x02 \x01(\t\x12\x13\n\x0bsession_key\x18\x03 \x01(\t\"C\n#WechatMiniProgramPhoneNumberRequest\x12\x0e\n\x06\x61pp_id\x18\x01 \x01(\t\x12\x0c\n\x04\x63ode\x18\x02 \x01(\t\"\x81\x01\n$WechatMiniProgramPhoneNumberResponse\x12\x14\n\x0cphone_number\x18\x01 \x01(\t\x12\x19\n\x11pure_phone_number\x18\x02 \x01(\t\x12\x14\n\x0c\x63ountry_code\x18\x03 \x01(\t\x12\x12\n\nwater_mark\x18\x04 \x01(\x04\"\xc0\x01\n\x1cWechatOauth2QrConnectRequest\x12\x0e\n\x06\x61pp_id\x18\x01 \x01(\t\x12\x14\n\x0credirect_uri\x18\x02 \x01(\t\x12\r\n\x05state\x18\x03 \x01(\t\x12G\n\x08language\x18\t \x01(\x0e\x32\x35.palm.orchid.v1.WechatOauth2QrConnectRequest.Language\"\"\n\x08Language\x12\x06\n\x02\x45N\x10\x00\x12\x06\n\x02\x43N\x10\x01\x12\x06\n\x02TW\x10\x02\",\n\x1dWechatOauth2QrConnectResponse\x12\x0b\n\x03url\x18\x01 \x01(\t\"\x93\x02\n\x19WechatOauth2LoginResponse\x12\x0f\n\x07unionid\x18\x01 \x01(\t\x12\x0e\n\x06openid\x18\x02 \x01(\t\x12\x10\n\x08nickname\x18\x0b \x01(\t\x12:\n\x03sex\x18\x0c \x01(\x0e\x32-.palm.orchid.v1.WechatOauth2LoginResponse.Sex\x12\x10\n\x08province\x18\r \x01(\t\x12\x0c\n\x04\x63ity\x18\x0e \x01(\t\x12\x0f\n\x07\x63ountry\x18\x0f \x01(\t\x12\x17\n\nheadimgurl\x18\x10 \x01(\tH\x00\x88\x01\x01\x12\x11\n\tprivilege\x18\x11 \x03(\t\"\x1b\n\x03Sex\x12\x08\n\x04MALE\x10\x00\x12\n\n\x06\x46\x45MALE\x10\x01\x42\r\n\x0b_headimgurl\"\x90\x01\n\x18WechatOauth2LoginRequest\x12\x0e\n\x06\x61pp_id\x18\x01 \x01(\t\x12\x0c\n\x04\x63ode\x18\x02 \x01(\t\x12\r\n\x05state\x18\x03 \x01(\t\x12G\n\x08language\x18\t \x01(\x0e\x32\x35.palm.orchid.v1.WechatOauth2QrConnectRequest.Language2\xf9\x01\n\x11WechatMiniProgram\x12h\n\x05Login\x12-.palm.orchid.v1.WechatMiniProgramLoginRequest\x1a..palm.orchid.v1.WechatMiniProgramLoginResponse\"\x00\x12z\n\x0bPhoneNumber\x12\x33.palm.orchid.v1.WechatMiniProgramPhoneNumberRequest\x1a\x34.palm.orchid.v1.WechatMiniProgramPhoneNumberResponse\"\x00\x32\xda\x01\n\x0cWechatOauth2\x12j\n\tQrConnect\x12,.palm.orchid.v1.WechatOauth2QrConnectRequest\x1a-.palm.orchid.v1.WechatOauth2QrConnectResponse\"\x00\x12^\n\x05Login\x12(.palm.orchid.v1.WechatOauth2LoginRequest\x1a).palm.orchid.v1.WechatOauth2LoginResponse\"\x00\x42V\n,com.github.saturn_xiv.palm.plugins.orchid.v1P\x01Z$github.com/saturn_xiv/palm/orchid/v2b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'orchid_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n,com.github.saturn_xiv.palm.plugins.orchid.v1P\001Z$github.com/saturn_xiv/palm/orchid/v2'
  _globals['_WECHATMINIPROGRAMLOGINREQUEST']._serialized_start=32
  _globals['_WECHATMINIPROGRAMLOGINREQUEST']._serialized_end=93
  _globals['_WECHATMINIPROGRAMLOGINRESPONSE']._serialized_start=95
  _globals['_WECHATMINIPROGRAMLOGINRESPONSE']._serialized_end=181
  _globals['_WECHATMINIPROGRAMPHONENUMBERREQUEST']._serialized_start=183
  _globals['_WECHATMINIPROGRAMPHONENUMBERREQUEST']._serialized_end=250
  _globals['_WECHATMINIPROGRAMPHONENUMBERRESPONSE']._serialized_start=253
  _globals['_WECHATMINIPROGRAMPHONENUMBERRESPONSE']._serialized_end=382
  _globals['_WECHATOAUTH2QRCONNECTREQUEST']._serialized_start=385
  _globals['_WECHATOAUTH2QRCONNECTREQUEST']._serialized_end=577
  _globals['_WECHATOAUTH2QRCONNECTREQUEST_LANGUAGE']._serialized_start=543
  _globals['_WECHATOAUTH2QRCONNECTREQUEST_LANGUAGE']._serialized_end=577
  _globals['_WECHATOAUTH2QRCONNECTRESPONSE']._serialized_start=579
  _globals['_WECHATOAUTH2QRCONNECTRESPONSE']._serialized_end=623
  _globals['_WECHATOAUTH2LOGINRESPONSE']._serialized_start=626
  _globals['_WECHATOAUTH2LOGINRESPONSE']._serialized_end=901
  _globals['_WECHATOAUTH2LOGINRESPONSE_SEX']._serialized_start=859
  _globals['_WECHATOAUTH2LOGINRESPONSE_SEX']._serialized_end=886
  _globals['_WECHATOAUTH2LOGINREQUEST']._serialized_start=904
  _globals['_WECHATOAUTH2LOGINREQUEST']._serialized_end=1048
  _globals['_WECHATMINIPROGRAM']._serialized_start=1051
  _globals['_WECHATMINIPROGRAM']._serialized_end=1300
  _globals['_WECHATOAUTH2']._serialized_start=1303
  _globals['_WECHATOAUTH2']._serialized_end=1521
# @@protoc_insertion_point(module_scope)
