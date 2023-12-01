# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: orchid.proto

require 'google/protobuf'


descriptor_data = "\n\x0corchid.proto\x12\x0epalm.orchid.v1\"=\n\x1dWechatMiniProgramLoginRequest\x12\x0e\n\x06\x61pp_id\x18\x01 \x01(\t\x12\x0c\n\x04\x63ode\x18\x02 \x01(\t\"V\n\x1eWechatMiniProgramLoginResponse\x12\x0f\n\x07unionid\x18\x01 \x01(\t\x12\x0e\n\x06openid\x18\x02 \x01(\t\x12\x13\n\x0bsession_key\x18\x03 \x01(\t\"C\n#WechatMiniProgramPhoneNumberRequest\x12\x0e\n\x06\x61pp_id\x18\x01 \x01(\t\x12\x0c\n\x04\x63ode\x18\x02 \x01(\t\"\x81\x01\n$WechatMiniProgramPhoneNumberResponse\x12\x14\n\x0cphone_number\x18\x01 \x01(\t\x12\x19\n\x11pure_phone_number\x18\x02 \x01(\t\x12\x14\n\x0c\x63ountry_code\x18\x03 \x01(\t\x12\x12\n\nwater_mark\x18\x04 \x01(\x04\"\xc0\x01\n\x1cWechatOauth2QrConnectRequest\x12\x0e\n\x06\x61pp_id\x18\x01 \x01(\t\x12\x14\n\x0credirect_uri\x18\x02 \x01(\t\x12\r\n\x05state\x18\x03 \x01(\t\x12G\n\x08language\x18\t \x01(\x0e\x32\x35.palm.orchid.v1.WechatOauth2QrConnectRequest.Language\"\"\n\x08Language\x12\x06\n\x02\x45N\x10\x00\x12\x06\n\x02\x43N\x10\x01\x12\x06\n\x02TW\x10\x02\",\n\x1dWechatOauth2QrConnectResponse\x12\x0b\n\x03url\x18\x01 \x01(\t\"\x93\x02\n\x19WechatOauth2LoginResponse\x12\x0f\n\x07unionid\x18\x01 \x01(\t\x12\x0e\n\x06openid\x18\x02 \x01(\t\x12\x10\n\x08nickname\x18\x0b \x01(\t\x12:\n\x03sex\x18\x0c \x01(\x0e\x32-.palm.orchid.v1.WechatOauth2LoginResponse.Sex\x12\x10\n\x08province\x18\r \x01(\t\x12\x0c\n\x04\x63ity\x18\x0e \x01(\t\x12\x0f\n\x07\x63ountry\x18\x0f \x01(\t\x12\x17\n\nheadimgurl\x18\x10 \x01(\tH\x00\x88\x01\x01\x12\x11\n\tprivilege\x18\x11 \x03(\t\"\x1b\n\x03Sex\x12\x08\n\x04MALE\x10\x00\x12\n\n\x06\x46\x45MALE\x10\x01\x42\r\n\x0b_headimgurl\"\x90\x01\n\x18WechatOauth2LoginRequest\x12\x0e\n\x06\x61pp_id\x18\x01 \x01(\t\x12\x0c\n\x04\x63ode\x18\x02 \x01(\t\x12\r\n\x05state\x18\x03 \x01(\t\x12G\n\x08language\x18\t \x01(\x0e\x32\x35.palm.orchid.v1.WechatOauth2QrConnectRequest.Language2\xf9\x01\n\x11WechatMiniProgram\x12h\n\x05Login\x12-.palm.orchid.v1.WechatMiniProgramLoginRequest\x1a..palm.orchid.v1.WechatMiniProgramLoginResponse\"\x00\x12z\n\x0bPhoneNumber\x12\x33.palm.orchid.v1.WechatMiniProgramPhoneNumberRequest\x1a\x34.palm.orchid.v1.WechatMiniProgramPhoneNumberResponse\"\x00\x32\xda\x01\n\x0cWechatOauth2\x12j\n\tQrConnect\x12,.palm.orchid.v1.WechatOauth2QrConnectRequest\x1a-.palm.orchid.v1.WechatOauth2QrConnectResponse\"\x00\x12^\n\x05Login\x12(.palm.orchid.v1.WechatOauth2LoginRequest\x1a).palm.orchid.v1.WechatOauth2LoginResponse\"\x00\x42V\n,com.github.saturn_xiv.palm.plugins.orchid.v1P\x01Z$github.com/saturn_xiv/palm/orchid/v2b\x06proto3"

pool = Google::Protobuf::DescriptorPool.generated_pool

begin
  pool.add_serialized_file(descriptor_data)
rescue TypeError
  # Compatibility code: will be removed in the next major version.
  require 'google/protobuf/descriptor_pb'
  parsed = Google::Protobuf::FileDescriptorProto.decode(descriptor_data)
  parsed.clear_dependency
  serialized = parsed.class.encode(parsed)
  file = pool.add_serialized_file(serialized)
  warn "Warning: Protobuf detected an import path issue while loading generated file #{__FILE__}"
  imports = [
  ]
  imports.each do |type_name, expected_filename|
    import_file = pool.lookup(type_name).file_descriptor
    if import_file.name != expected_filename
      warn "- #{file.name} imports #{expected_filename}, but that import was loaded as #{import_file.name}"
    end
  end
  warn "Each proto file must use a consistent fully-qualified name."
  warn "This will become an error in the next major version."
end

module Palm
  module Orchid
    module V1
      WechatMiniProgramLoginRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.orchid.v1.WechatMiniProgramLoginRequest").msgclass
      WechatMiniProgramLoginResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.orchid.v1.WechatMiniProgramLoginResponse").msgclass
      WechatMiniProgramPhoneNumberRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.orchid.v1.WechatMiniProgramPhoneNumberRequest").msgclass
      WechatMiniProgramPhoneNumberResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.orchid.v1.WechatMiniProgramPhoneNumberResponse").msgclass
      WechatOauth2QrConnectRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.orchid.v1.WechatOauth2QrConnectRequest").msgclass
      WechatOauth2QrConnectRequest::Language = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.orchid.v1.WechatOauth2QrConnectRequest.Language").enummodule
      WechatOauth2QrConnectResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.orchid.v1.WechatOauth2QrConnectResponse").msgclass
      WechatOauth2LoginResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.orchid.v1.WechatOauth2LoginResponse").msgclass
      WechatOauth2LoginResponse::Sex = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.orchid.v1.WechatOauth2LoginResponse.Sex").enummodule
      WechatOauth2LoginRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.orchid.v1.WechatOauth2LoginRequest").msgclass
    end
  end
end
