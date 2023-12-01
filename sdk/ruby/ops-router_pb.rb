# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ops-router.proto

require 'google/protobuf'

require 'google/protobuf/empty_pb'
require 'google/protobuf/timestamp_pb'
require 'google/protobuf/duration_pb'


descriptor_data = "\n\x10ops-router.proto\x12\x12palm.ops.router.v1\x1a\x1bgoogle/protobuf/empty.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1egoogle/protobuf/duration.proto\"\x87\x01\n\x07\x43ontact\x12\x12\n\x05phone\x18\x01 \x01(\tH\x00\x88\x01\x01\x12\x13\n\x06wechat\x18\x02 \x01(\tH\x01\x88\x01\x01\x12\x12\n\x05\x65mail\x18\x03 \x01(\tH\x02\x88\x01\x01\x12\x14\n\x07\x61\x64\x64ress\x18\x63 \x01(\tH\x03\x88\x01\x01\x42\x08\n\x06_phoneB\t\n\x07_wechatB\x08\n\x06_emailB\n\n\x08_address\"O\n\x13RouterSetLanRequest\x12(\n\x07payload\x18\x01 \x01(\x0b\x32\x17.palm.ops.router.v1.Lan\x12\x0e\n\x06\x65nable\x18\x02 \x01(\x08\"O\n\x13RouterSetDmzRequest\x12(\n\x07payload\x18\x01 \x01(\x0b\x32\x17.palm.ops.router.v1.Dmz\x12\x0e\n\x06\x65nable\x18\x02 \x01(\x08\"O\n\x13RouterSetWanRequest\x12(\n\x07payload\x18\x01 \x01(\x0b\x32\x17.palm.ops.router.v1.Wan\x12\x0e\n\x06\x65nable\x18\x02 \x01(\x08\"b\n\x07WanPool\x12/\n\x05items\x18\x01 \x03(\x0b\x32 .palm.ops.router.v1.WanPool.Item\x1a&\n\x04Item\x12\x0e\n\x06\x64\x65vice\x18\x01 \x01(\t\x12\x0e\n\x06weight\x18\x02 \x01(\r\"U\n\x17RouterCreateUserRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12,\n\x07\x63ontact\x18\x02 \x01(\x0b\x32\x1b.palm.ops.router.v1.Contact\"\xaa\x01\n\x17RouterIndexUserResponse\x12?\n\x05items\x18\x01 \x03(\x0b\x32\x30.palm.ops.router.v1.RouterIndexUserResponse.Item\x1aN\n\x04Item\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04name\x18\x02 \x01(\t\x12,\n\x07\x63ontact\x18\x03 \x01(\x0b\x32\x1b.palm.ops.router.v1.Contact\"\x8f\x01\n\x17RouterUpdateHostRequest\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04user\x18\x02 \x01(\x05\x12\r\n\x05group\x18\x03 \x01(\t\x12\n\n\x02ip\x18\x04 \x01(\t\x12\r\n\x05\x66ixed\x18\x05 \x01(\x08\x12\x0c\n\x04zone\x18\x08 \x01(\t\x12\x15\n\x08location\x18\t \x01(\tH\x00\x88\x01\x01\x42\x0b\n\t_location\"\xa6\x02\n\x17RouterIndexRuleResponse\x12?\n\x05items\x18\x01 \x03(\x0b\x32\x30.palm.ops.router.v1.RouterIndexRuleResponse.Item\x1a\xc9\x01\n\x04Item\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\r\n\x05group\x18\x03 \x01(\t\x12.\n\x02in\x18\x0b \x01(\x0b\x32 .palm.ops.router.v1.Rule.InBoundH\x00\x12\x30\n\x03out\x18\x0c \x01(\x0b\x32!.palm.ops.router.v1.Rule.OutBoundH\x00\x12+\n\x03nat\x18\r \x01(\x0b\x32\x1c.palm.ops.router.v1.Rule.NatH\x00\x42\t\n\x07payload\"\xef\x01\n\x04Host\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0b\n\x03mac\x18\x03 \x01(\t\x12\n\n\x02ip\x18\x04 \x01(\t\x12\r\n\x05\x66ixed\x18\x05 \x01(\x08\x12\r\n\x05group\x18\t \x01(\t\x12\x15\n\x08location\x18\x0b \x01(\tH\x00\x88\x01\x01\x12-\n\x05owner\x18\x0c \x01(\x0b\x32\x1e.palm.ops.router.v1.Host.Owner\x1a\x43\n\x05Owner\x12\x0c\n\x04name\x18\x01 \x01(\t\x12,\n\x07\x63ontact\x18\x02 \x01(\x0b\x32\x1b.palm.ops.router.v1.ContactB\x0b\n\t_location\"\xbe\x08\n\x04Rule\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\r\n\x05group\x18\x02 \x01(\t\x12.\n\x02in\x18\x0b \x01(\x0b\x32 .palm.ops.router.v1.Rule.InBoundH\x00\x12\x30\n\x03out\x18\x0c \x01(\x0b\x32!.palm.ops.router.v1.Rule.OutBoundH\x00\x12+\n\x03nat\x18\r \x01(\x0b\x32\x1c.palm.ops.router.v1.Rule.NatH\x00\x1aT\n\x07InBound\x12\x0e\n\x06\x64\x65vice\x18\x01 \x01(\t\x12\x0b\n\x03tcp\x18\x02 \x01(\x08\x12\x0c\n\x04port\x18\x03 \x01(\r\x12\x13\n\x06source\x18\x04 \x01(\tH\x00\x88\x01\x01\x42\t\n\x07_source\x1a\xa6\x04\n\x08OutBound\x12\x36\n\x04host\x18\x01 \x01(\x0b\x32&.palm.ops.router.v1.Rule.OutBound.HostH\x00\x12\x38\n\x05speed\x18\x02 \x01(\x0b\x32\'.palm.ops.router.v1.Rule.OutBound.SpeedH\x00\x12\x36\n\x04time\x18\x03 \x01(\x0b\x32&.palm.ops.router.v1.Rule.OutBound.TimeH\x00\x1aU\n\x04Host\x12\n\n\x02to\x18\x01 \x01(\t\x12\x33\n\x08protocol\x18\x02 \x01(\x0e\x32!.palm.ops.router.v1.Rule.Protocol\x12\x0c\n\x04port\x18\x03 \x01(\r\x1a;\n\x05Speed\x12\x0f\n\x02up\x18\x01 \x01(\rH\x00\x88\x01\x01\x12\x11\n\x04\x64own\x18\x02 \x01(\rH\x01\x88\x01\x01\x42\x05\n\x03_upB\x07\n\x05_down\x1a\xd0\x01\n\x04Time\x12(\n\x04\x66rom\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12&\n\x02to\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x0e\n\x06monday\x18\x0b \x01(\x08\x12\x0f\n\x07tuesday\x18\x0c \x01(\x08\x12\x11\n\twednesday\x18\r \x01(\x08\x12\x10\n\x08thursday\x18\x0e \x01(\x08\x12\x0e\n\x06\x66riday\x18\x0f \x01(\x08\x12\x10\n\x08saturday\x18\x10 \x01(\x08\x12\x0e\n\x06sunday\x18\x11 \x01(\x08\x42\t\n\x07payload\x1a\xd7\x01\n\x03Nat\x12\x33\n\x06source\x18\x01 \x01(\x0b\x32#.palm.ops.router.v1.Rule.Nat.Source\x12\x0b\n\x03tcp\x18\x02 \x01(\x08\x12=\n\x0b\x64\x65stination\x18\x03 \x01(\x0b\x32(.palm.ops.router.v1.Rule.Nat.Destination\x1a&\n\x06Source\x12\x0e\n\x06\x64\x65vice\x18\x01 \x01(\t\x12\x0c\n\x04port\x18\x03 \x01(\r\x1a\'\n\x0b\x44\x65stination\x12\n\n\x02ip\x18\x01 \x01(\t\x12\x0c\n\x04port\x18\x03 \x01(\r\"&\n\x08Protocol\x12\x08\n\x04Icmp\x10\x00\x12\x07\n\x03Tcp\x10\x01\x12\x07\n\x03Udp\x10\x02\x42\t\n\x07payload\"\xda\x04\n\x14RouterStatusResponse\x12L\n\ninterfaces\x18\x01 \x03(\x0b\x32\x38.palm.ops.router.v1.RouterStatusResponse.InterfacesEntry\x12$\n\x03lan\x18\x0b \x01(\x0b\x32\x17.palm.ops.router.v1.Lan\x12$\n\x03\x64mz\x18\x0c \x01(\x0b\x32\x17.palm.ops.router.v1.Dmz\x12$\n\x03\x64ns\x18\r \x01(\x0b\x32\x17.palm.ops.router.v1.Dns\x12$\n\x03wan\x18\x0e \x03(\x0b\x32\x17.palm.ops.router.v1.Wan\x12-\n\x08wan_pool\x18\x0f \x01(\x0b\x32\x1b.palm.ops.router.v1.WanPool\x12\'\n\x05rules\x18\x15 \x03(\x0b\x32\x18.palm.ops.router.v1.Rule\x12\'\n\x05hosts\x18\x16 \x03(\x0b\x32\x18.palm.ops.router.v1.Host\x12\x37\n\x02ip\x18\x61 \x01(\x0b\x32+.palm.ops.router.v1.RouterStatusResponse.Ip\x12\x10\n\x08\x66irewall\x18\x62 \x01(\t\x12)\n\x06uptime\x18\x63 \x01(\x0b\x32\x19.google.protobuf.Duration\x1a\x31\n\x0fInterfacesEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\x1a\x32\n\x02Ip\x12\x0f\n\x07\x61\x64\x64ress\x18\x01 \x01(\t\x12\r\n\x05route\x18\x02 \x01(\t\x12\x0c\n\x04rule\x18\x03 \x01(\t\"C\n\x03Lan\x12\x0e\n\x06\x64\x65vice\x18\x01 \x01(\t\x12\x0b\n\x03mac\x18\x02 \x01(\t\x12\x0e\n\x06metric\x18\x03 \x01(\r\x12\x0f\n\x07\x61\x64\x64ress\x18\x0b \x01(\t\"C\n\x03\x44mz\x12\x0e\n\x06\x64\x65vice\x18\x01 \x01(\t\x12\x0b\n\x03mac\x18\x02 \x01(\t\x12\x0e\n\x06metric\x18\x03 \x01(\r\x12\x0f\n\x07\x61\x64\x64ress\x18\x0b \x01(\t\"\xae\x01\n\x03Wan\x12\x0e\n\x06\x64\x65vice\x18\x01 \x01(\t\x12\x0e\n\x06metric\x18\x02 \x01(\r\x12\x0c\n\x04name\x18\t \x01(\t\x12\x0b\n\x03mac\x18\x0b \x01(\t\x12(\n\x04\x64hcp\x18\x15 \x01(\x0b\x32\x18.palm.ops.router.v1.DhcpH\x00\x12,\n\x06static\x18\x16 \x01(\x0b\x32\x1a.palm.ops.router.v1.StaticH\x00\x12\x0e\n\x06\x65nable\x18\x63 \x01(\x08\x42\x04\n\x02ip\"\x12\n\x04\x44hcp\x12\n\n\x02v6\x18\x01 \x01(\x08\"T\n\x06Static\x12\x0f\n\x07\x61\x64\x64ress\x18\x01 \x01(\t\x12\x0f\n\x07gateway\x18\x03 \x01(\t\x12\x0c\n\x04\x64ns1\x18\x04 \x01(\t\x12\x11\n\x04\x64ns2\x18\x05 \x01(\tH\x00\x88\x01\x01\x42\x07\n\x05_dns2\"\x14\n\x03\x44ns\x12\r\n\x05items\x18\x01 \x03(\t\"1\n\x0bUserProfile\x12\x10\n\x08nickname\x18\x01 \x01(\t\x12\x10\n\x08password\x18\x02 \x01(\t\"j\n\x11UserSignInRequest\x12-\n\x04user\x18\x01 \x01(\x0b\x32\x1f.palm.ops.router.v1.UserProfile\x12&\n\x03ttl\x18\t \x01(\x0b\x32\x19.google.protobuf.Duration\"#\n\x12UserSignInResponse\x12\r\n\x05token\x18\x01 \x01(\t\"s\n\x11UserUpdateRequest\x12\x30\n\x07\x63urrent\x18\x01 \x01(\x0b\x32\x1f.palm.ops.router.v1.UserProfile\x12,\n\x03new\x18\x02 \x01(\x0b\x32\x1f.palm.ops.router.v1.UserProfile\"!\n\x10UserLogsResponse\x12\r\n\x05items\x18\x01 \x03(\t2\xfe\x08\n\x06Router\x12:\n\x06Reboot\x12\x16.google.protobuf.Empty\x1a\x16.google.protobuf.Empty\"\x00\x12\x39\n\x05\x41pply\x12\x16.google.protobuf.Empty\x1a\x16.google.protobuf.Empty\"\x00\x12L\n\x06Status\x12\x16.google.protobuf.Empty\x1a(.palm.ops.router.v1.RouterStatusResponse\"\x00\x12;\n\x06SetDns\x12\x17.palm.ops.router.v1.Dns\x1a\x16.google.protobuf.Empty\"\x00\x12K\n\x06SetWan\x12\'.palm.ops.router.v1.RouterSetWanRequest\x1a\x16.google.protobuf.Empty\"\x00\x12\x43\n\nSetWanPool\x12\x1b.palm.ops.router.v1.WanPool\x1a\x16.google.protobuf.Empty\"\x00\x12K\n\x06SetLan\x12\'.palm.ops.router.v1.RouterSetLanRequest\x1a\x16.google.protobuf.Empty\"\x00\x12K\n\x06SetDmz\x12\'.palm.ops.router.v1.RouterSetDmzRequest\x1a\x16.google.protobuf.Empty\"\x00\x12@\n\nCreateRule\x12\x18.palm.ops.router.v1.Rule\x1a\x16.google.protobuf.Empty\"\x00\x12X\n\nUpdateRule\x12\x30.palm.ops.router.v1.RouterIndexRuleResponse.Item\x1a\x16.google.protobuf.Empty\"\x00\x12R\n\tIndexRule\x12\x16.google.protobuf.Empty\x1a+.palm.ops.router.v1.RouterIndexRuleResponse\"\x00\x12S\n\nUpdateHost\x12+.palm.ops.router.v1.RouterUpdateHostRequest\x1a\x16.google.protobuf.Empty\"\x00\x12R\n\tIndexUser\x12\x16.google.protobuf.Empty\x1a+.palm.ops.router.v1.RouterIndexUserResponse\"\x00\x12X\n\nUpdateUser\x12\x30.palm.ops.router.v1.RouterIndexUserResponse.Item\x1a\x16.google.protobuf.Empty\"\x00\x12S\n\nCreateUser\x12+.palm.ops.router.v1.RouterCreateUserRequest\x1a\x16.google.protobuf.Empty\"\x00\x32\x81\x03\n\x04User\x12Y\n\x06SignIn\x12%.palm.ops.router.v1.UserSignInRequest\x1a&.palm.ops.router.v1.UserSignInResponse\"\x00\x12N\n\x07Refresh\x12\x19.google.protobuf.Duration\x1a&.palm.ops.router.v1.UserSignInResponse\"\x00\x12I\n\x06Update\x12%.palm.ops.router.v1.UserUpdateRequest\x1a\x16.google.protobuf.Empty\"\x00\x12;\n\x07SignOut\x12\x16.google.protobuf.Empty\x1a\x16.google.protobuf.Empty\"\x00\x12\x46\n\x04Logs\x12\x16.google.protobuf.Empty\x1a$.palm.ops.router.v1.UserLogsResponse\"\x00\x42^\n0com.github.saturn_xiv.palm.plugins.ops.router.v1P\x01Z(github.com/saturn_xiv/palm/ops/router/v2b\x06proto3"

pool = Google::Protobuf::DescriptorPool.generated_pool

begin
  pool.add_serialized_file(descriptor_data)
rescue TypeError => e
  # Compatibility code: will be removed in the next major version.
  require 'google/protobuf/descriptor_pb'
  parsed = Google::Protobuf::FileDescriptorProto.decode(descriptor_data)
  parsed.clear_dependency
  serialized = parsed.class.encode(parsed)
  file = pool.add_serialized_file(serialized)
  warn "Warning: Protobuf detected an import path issue while loading generated file #{__FILE__}"
  imports = [
    ["google.protobuf.Timestamp", "google/protobuf/timestamp.proto"],
    ["google.protobuf.Duration", "google/protobuf/duration.proto"],
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
  module Ops
    module Router
      module V1
        Contact = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Contact").msgclass
        RouterSetLanRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterSetLanRequest").msgclass
        RouterSetDmzRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterSetDmzRequest").msgclass
        RouterSetWanRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterSetWanRequest").msgclass
        WanPool = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.WanPool").msgclass
        WanPool::Item = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.WanPool.Item").msgclass
        RouterCreateUserRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterCreateUserRequest").msgclass
        RouterIndexUserResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterIndexUserResponse").msgclass
        RouterIndexUserResponse::Item = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterIndexUserResponse.Item").msgclass
        RouterUpdateHostRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterUpdateHostRequest").msgclass
        RouterIndexRuleResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterIndexRuleResponse").msgclass
        RouterIndexRuleResponse::Item = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterIndexRuleResponse.Item").msgclass
        Host = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Host").msgclass
        Host::Owner = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Host.Owner").msgclass
        Rule = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Rule").msgclass
        Rule::InBound = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Rule.InBound").msgclass
        Rule::OutBound = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Rule.OutBound").msgclass
        Rule::OutBound::Host = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Rule.OutBound.Host").msgclass
        Rule::OutBound::Speed = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Rule.OutBound.Speed").msgclass
        Rule::OutBound::Time = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Rule.OutBound.Time").msgclass
        Rule::Nat = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Rule.Nat").msgclass
        Rule::Nat::Source = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Rule.Nat.Source").msgclass
        Rule::Nat::Destination = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Rule.Nat.Destination").msgclass
        Rule::Protocol = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Rule.Protocol").enummodule
        RouterStatusResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterStatusResponse").msgclass
        RouterStatusResponse::Ip = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.RouterStatusResponse.Ip").msgclass
        Lan = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Lan").msgclass
        Dmz = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Dmz").msgclass
        Wan = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Wan").msgclass
        Dhcp = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Dhcp").msgclass
        Static = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Static").msgclass
        Dns = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.Dns").msgclass
        UserProfile = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.UserProfile").msgclass
        UserSignInRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.UserSignInRequest").msgclass
        UserSignInResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.UserSignInResponse").msgclass
        UserUpdateRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.UserUpdateRequest").msgclass
        UserLogsResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.ops.router.v1.UserLogsResponse").msgclass
      end
    end
  end
end
