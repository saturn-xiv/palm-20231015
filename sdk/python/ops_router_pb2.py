# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ops-router.proto
# Protobuf Python Version: 4.25.0
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from google.protobuf import duration_pb2 as google_dot_protobuf_dot_duration__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x10ops-router.proto\x12\x12palm.ops.router.v1\x1a\x1bgoogle/protobuf/empty.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x1egoogle/protobuf/duration.proto\"\xdd\n\n\x07Profile\x12\x34\n\x07network\x18\x01 \x01(\x0b\x32#.palm.ops.router.v1.Profile.Network\x12\x34\n\x07\x64nsmasq\x18\x02 \x01(\x0b\x32#.palm.ops.router.v1.Profile.Dnsmasq\x1a\x84\x07\n\x07Network\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x34\n\x03wan\x18\x0b \x01(\x0b\x32\'.palm.ops.router.v1.Profile.Network.Wan\x12\x34\n\x03lan\x18\x0c \x01(\x0b\x32\'.palm.ops.router.v1.Profile.Network.Lan\x12\x34\n\x03\x64mz\x18\r \x01(\x0b\x32\'.palm.ops.router.v1.Profile.Network.Dmz\x12\x38\n\x05guest\x18\x0e \x01(\x0b\x32).palm.ops.router.v1.Profile.Network.Guest\x1a\xd4\x02\n\x03Wan\x12\x44\n\ninterfaces\x18\x01 \x03(\x0b\x32\x30.palm.ops.router.v1.Profile.Network.Wan.Ethernet\x1a\x06\n\x04\x44hcp\x1a\x39\n\x08StaticIp\x12\x0f\n\x07\x61\x64\x64ress\x18\x01 \x01(\t\x12\x0f\n\x07gateway\x18\x02 \x01(\t\x12\x0b\n\x03\x64ns\x18\x03 \x01(\t\x1a\xc3\x01\n\x08\x45thernet\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0e\n\x06\x64\x65vice\x18\x02 \x01(\t\x12<\n\x04\x64hcp\x18\x0b \x01(\x0b\x32,.palm.ops.router.v1.Profile.Network.Wan.DhcpH\x00\x12\x45\n\tstatic_ip\x18\x0c \x01(\x0b\x32\x30.palm.ops.router.v1.Profile.Network.Wan.StaticIpH\x00\x12\x0e\n\x06metric\x18\x63 \x01(\rB\x04\n\x02ip\x1aI\n\x03\x44mz\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0e\n\x06\x64\x65vice\x18\x02 \x01(\t\x12\x0f\n\x07\x61\x64\x64ress\x18\x03 \x01(\t\x12\x13\n\x0b\x61llow_hosts\x18\t \x03(\t\x1a\x9f\x01\n\x03Lan\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0e\n\x06\x64\x65vice\x18\x02 \x01(\t\x12\x0f\n\x07\x61\x64\x64ress\x18\x03 \x01(\t\x12?\n\x07\x63lients\x18\t \x03(\x0b\x32..palm.ops.router.v1.Profile.Network.Lan.Client\x1a(\n\x06\x43lient\x12\x0c\n\x04user\x18\x01 \x01(\t\x12\x10\n\x08password\x18\x02 \x01(\t\x1aK\n\x05Guest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0e\n\x06\x64\x65vice\x18\x02 \x01(\t\x12\x0f\n\x07\x61\x64\x64ress\x18\x03 \x01(\t\x12\x13\n\x0b\x62lock_hosts\x18\t \x03(\t\x1a\xde\x02\n\x07\x44nsmasq\x12\x37\n\x05items\x18\x01 \x03(\x0b\x32(.palm.ops.router.v1.Profile.Dnsmasq.Item\x1a\x99\x02\n\x04Item\x12\x0e\n\x06\x64\x65vice\x18\x01 \x01(\t\x12\x0f\n\x07\x61\x64\x64ress\x18\x02 \x01(\t\x12\x46\n\ndhcp_range\x18\x03 \x01(\x0b\x32\x32.palm.ops.router.v1.Profile.Dnsmasq.Item.DhcpRange\x12\x45\n\nstatic_ips\x18\x04 \x03(\x0b\x32\x31.palm.ops.router.v1.Profile.Dnsmasq.Item.StaticIp\x12\x13\n\x0b\x64ns_servers\x18\x63 \x03(\t\x1a\'\n\tDhcpRange\x12\r\n\x05\x62\x65gin\x18\x01 \x01(\t\x12\x0b\n\x03\x65nd\x18\x02 \x01(\t\x1a#\n\x08StaticIp\x12\x0b\n\x03mac\x18\x01 \x01(\t\x12\n\n\x02ip\x18\x02 \x01(\t\"\x87\x01\n\x07\x43ontact\x12\x12\n\x05phone\x18\x01 \x01(\tH\x00\x88\x01\x01\x12\x13\n\x06wechat\x18\x02 \x01(\tH\x01\x88\x01\x01\x12\x12\n\x05\x65mail\x18\x03 \x01(\tH\x02\x88\x01\x01\x12\x14\n\x07\x61\x64\x64ress\x18\x63 \x01(\tH\x03\x88\x01\x01\x42\x08\n\x06_phoneB\t\n\x07_wechatB\x08\n\x06_emailB\n\n\x08_address\"O\n\x13RouterSetLanRequest\x12(\n\x07payload\x18\x01 \x01(\x0b\x32\x17.palm.ops.router.v1.Lan\x12\x0e\n\x06\x65nable\x18\x02 \x01(\x08\"O\n\x13RouterSetDmzRequest\x12(\n\x07payload\x18\x01 \x01(\x0b\x32\x17.palm.ops.router.v1.Dmz\x12\x0e\n\x06\x65nable\x18\x02 \x01(\x08\"O\n\x13RouterSetWanRequest\x12(\n\x07payload\x18\x01 \x01(\x0b\x32\x17.palm.ops.router.v1.Wan\x12\x0e\n\x06\x65nable\x18\x02 \x01(\x08\"b\n\x07WanPool\x12/\n\x05items\x18\x01 \x03(\x0b\x32 .palm.ops.router.v1.WanPool.Item\x1a&\n\x04Item\x12\x0e\n\x06\x64\x65vice\x18\x01 \x01(\t\x12\x0e\n\x06weight\x18\x02 \x01(\r\"U\n\x17RouterCreateUserRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\x12,\n\x07\x63ontact\x18\x02 \x01(\x0b\x32\x1b.palm.ops.router.v1.Contact\"\xaa\x01\n\x17RouterIndexUserResponse\x12?\n\x05items\x18\x01 \x03(\x0b\x32\x30.palm.ops.router.v1.RouterIndexUserResponse.Item\x1aN\n\x04Item\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04name\x18\x02 \x01(\t\x12,\n\x07\x63ontact\x18\x03 \x01(\x0b\x32\x1b.palm.ops.router.v1.Contact\"\x8f\x01\n\x17RouterUpdateHostRequest\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04user\x18\x02 \x01(\x05\x12\r\n\x05group\x18\x03 \x01(\t\x12\n\n\x02ip\x18\x04 \x01(\t\x12\r\n\x05\x66ixed\x18\x05 \x01(\x08\x12\x0c\n\x04zone\x18\x08 \x01(\t\x12\x15\n\x08location\x18\t \x01(\tH\x00\x88\x01\x01\x42\x0b\n\t_location\"\xa6\x02\n\x17RouterIndexRuleResponse\x12?\n\x05items\x18\x01 \x03(\x0b\x32\x30.palm.ops.router.v1.RouterIndexRuleResponse.Item\x1a\xc9\x01\n\x04Item\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\r\n\x05group\x18\x03 \x01(\t\x12.\n\x02in\x18\x0b \x01(\x0b\x32 .palm.ops.router.v1.Rule.InBoundH\x00\x12\x30\n\x03out\x18\x0c \x01(\x0b\x32!.palm.ops.router.v1.Rule.OutBoundH\x00\x12+\n\x03nat\x18\r \x01(\x0b\x32\x1c.palm.ops.router.v1.Rule.NatH\x00\x42\t\n\x07payload\"\xef\x01\n\x04Host\x12\n\n\x02id\x18\x01 \x01(\x05\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x0b\n\x03mac\x18\x03 \x01(\t\x12\n\n\x02ip\x18\x04 \x01(\t\x12\r\n\x05\x66ixed\x18\x05 \x01(\x08\x12\r\n\x05group\x18\t \x01(\t\x12\x15\n\x08location\x18\x0b \x01(\tH\x00\x88\x01\x01\x12-\n\x05owner\x18\x0c \x01(\x0b\x32\x1e.palm.ops.router.v1.Host.Owner\x1a\x43\n\x05Owner\x12\x0c\n\x04name\x18\x01 \x01(\t\x12,\n\x07\x63ontact\x18\x02 \x01(\x0b\x32\x1b.palm.ops.router.v1.ContactB\x0b\n\t_location\"\xbe\x08\n\x04Rule\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\r\n\x05group\x18\x02 \x01(\t\x12.\n\x02in\x18\x0b \x01(\x0b\x32 .palm.ops.router.v1.Rule.InBoundH\x00\x12\x30\n\x03out\x18\x0c \x01(\x0b\x32!.palm.ops.router.v1.Rule.OutBoundH\x00\x12+\n\x03nat\x18\r \x01(\x0b\x32\x1c.palm.ops.router.v1.Rule.NatH\x00\x1aT\n\x07InBound\x12\x0e\n\x06\x64\x65vice\x18\x01 \x01(\t\x12\x0b\n\x03tcp\x18\x02 \x01(\x08\x12\x0c\n\x04port\x18\x03 \x01(\r\x12\x13\n\x06source\x18\x04 \x01(\tH\x00\x88\x01\x01\x42\t\n\x07_source\x1a\xa6\x04\n\x08OutBound\x12\x36\n\x04host\x18\x01 \x01(\x0b\x32&.palm.ops.router.v1.Rule.OutBound.HostH\x00\x12\x38\n\x05speed\x18\x02 \x01(\x0b\x32\'.palm.ops.router.v1.Rule.OutBound.SpeedH\x00\x12\x36\n\x04time\x18\x03 \x01(\x0b\x32&.palm.ops.router.v1.Rule.OutBound.TimeH\x00\x1aU\n\x04Host\x12\n\n\x02to\x18\x01 \x01(\t\x12\x33\n\x08protocol\x18\x02 \x01(\x0e\x32!.palm.ops.router.v1.Rule.Protocol\x12\x0c\n\x04port\x18\x03 \x01(\r\x1a;\n\x05Speed\x12\x0f\n\x02up\x18\x01 \x01(\rH\x00\x88\x01\x01\x12\x11\n\x04\x64own\x18\x02 \x01(\rH\x01\x88\x01\x01\x42\x05\n\x03_upB\x07\n\x05_down\x1a\xd0\x01\n\x04Time\x12(\n\x04\x66rom\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12&\n\x02to\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x0e\n\x06monday\x18\x0b \x01(\x08\x12\x0f\n\x07tuesday\x18\x0c \x01(\x08\x12\x11\n\twednesday\x18\r \x01(\x08\x12\x10\n\x08thursday\x18\x0e \x01(\x08\x12\x0e\n\x06\x66riday\x18\x0f \x01(\x08\x12\x10\n\x08saturday\x18\x10 \x01(\x08\x12\x0e\n\x06sunday\x18\x11 \x01(\x08\x42\t\n\x07payload\x1a\xd7\x01\n\x03Nat\x12\x33\n\x06source\x18\x01 \x01(\x0b\x32#.palm.ops.router.v1.Rule.Nat.Source\x12\x0b\n\x03tcp\x18\x02 \x01(\x08\x12=\n\x0b\x64\x65stination\x18\x03 \x01(\x0b\x32(.palm.ops.router.v1.Rule.Nat.Destination\x1a&\n\x06Source\x12\x0e\n\x06\x64\x65vice\x18\x01 \x01(\t\x12\x0c\n\x04port\x18\x03 \x01(\r\x1a\'\n\x0b\x44\x65stination\x12\n\n\x02ip\x18\x01 \x01(\t\x12\x0c\n\x04port\x18\x03 \x01(\r\"&\n\x08Protocol\x12\x08\n\x04Icmp\x10\x00\x12\x07\n\x03Tcp\x10\x01\x12\x07\n\x03Udp\x10\x02\x42\t\n\x07payload\"\xda\x04\n\x14RouterStatusResponse\x12L\n\ninterfaces\x18\x01 \x03(\x0b\x32\x38.palm.ops.router.v1.RouterStatusResponse.InterfacesEntry\x12$\n\x03lan\x18\x0b \x01(\x0b\x32\x17.palm.ops.router.v1.Lan\x12$\n\x03\x64mz\x18\x0c \x01(\x0b\x32\x17.palm.ops.router.v1.Dmz\x12$\n\x03\x64ns\x18\r \x01(\x0b\x32\x17.palm.ops.router.v1.Dns\x12$\n\x03wan\x18\x0e \x03(\x0b\x32\x17.palm.ops.router.v1.Wan\x12-\n\x08wan_pool\x18\x0f \x01(\x0b\x32\x1b.palm.ops.router.v1.WanPool\x12\'\n\x05rules\x18\x15 \x03(\x0b\x32\x18.palm.ops.router.v1.Rule\x12\'\n\x05hosts\x18\x16 \x03(\x0b\x32\x18.palm.ops.router.v1.Host\x12\x37\n\x02ip\x18\x61 \x01(\x0b\x32+.palm.ops.router.v1.RouterStatusResponse.Ip\x12\x10\n\x08\x66irewall\x18\x62 \x01(\t\x12)\n\x06uptime\x18\x63 \x01(\x0b\x32\x19.google.protobuf.Duration\x1a\x31\n\x0fInterfacesEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\x1a\x32\n\x02Ip\x12\x0f\n\x07\x61\x64\x64ress\x18\x01 \x01(\t\x12\r\n\x05route\x18\x02 \x01(\t\x12\x0c\n\x04rule\x18\x03 \x01(\t\"C\n\x03Lan\x12\x0e\n\x06\x64\x65vice\x18\x01 \x01(\t\x12\x0b\n\x03mac\x18\x02 \x01(\t\x12\x0e\n\x06metric\x18\x03 \x01(\r\x12\x0f\n\x07\x61\x64\x64ress\x18\x0b \x01(\t\"C\n\x03\x44mz\x12\x0e\n\x06\x64\x65vice\x18\x01 \x01(\t\x12\x0b\n\x03mac\x18\x02 \x01(\t\x12\x0e\n\x06metric\x18\x03 \x01(\r\x12\x0f\n\x07\x61\x64\x64ress\x18\x0b \x01(\t\"\xae\x01\n\x03Wan\x12\x0e\n\x06\x64\x65vice\x18\x01 \x01(\t\x12\x0e\n\x06metric\x18\x02 \x01(\r\x12\x0c\n\x04name\x18\t \x01(\t\x12\x0b\n\x03mac\x18\x0b \x01(\t\x12(\n\x04\x64hcp\x18\x15 \x01(\x0b\x32\x18.palm.ops.router.v1.DhcpH\x00\x12,\n\x06static\x18\x16 \x01(\x0b\x32\x1a.palm.ops.router.v1.StaticH\x00\x12\x0e\n\x06\x65nable\x18\x63 \x01(\x08\x42\x04\n\x02ip\"\x12\n\x04\x44hcp\x12\n\n\x02v6\x18\x01 \x01(\x08\"T\n\x06Static\x12\x0f\n\x07\x61\x64\x64ress\x18\x01 \x01(\t\x12\x0f\n\x07gateway\x18\x03 \x01(\t\x12\x0c\n\x04\x64ns1\x18\x04 \x01(\t\x12\x11\n\x04\x64ns2\x18\x05 \x01(\tH\x00\x88\x01\x01\x42\x07\n\x05_dns2\"\x14\n\x03\x44ns\x12\r\n\x05items\x18\x01 \x03(\t\"1\n\x0bUserProfile\x12\x10\n\x08nickname\x18\x01 \x01(\t\x12\x10\n\x08password\x18\x02 \x01(\t\"j\n\x11UserSignInRequest\x12-\n\x04user\x18\x01 \x01(\x0b\x32\x1f.palm.ops.router.v1.UserProfile\x12&\n\x03ttl\x18\t \x01(\x0b\x32\x19.google.protobuf.Duration\"#\n\x12UserSignInResponse\x12\r\n\x05token\x18\x01 \x01(\t\"s\n\x11UserUpdateRequest\x12\x30\n\x07\x63urrent\x18\x01 \x01(\x0b\x32\x1f.palm.ops.router.v1.UserProfile\x12,\n\x03new\x18\x02 \x01(\x0b\x32\x1f.palm.ops.router.v1.UserProfile\"!\n\x10UserLogsResponse\x12\r\n\x05items\x18\x01 \x03(\t2\xfe\x08\n\x06Router\x12:\n\x06Reboot\x12\x16.google.protobuf.Empty\x1a\x16.google.protobuf.Empty\"\x00\x12\x39\n\x05\x41pply\x12\x16.google.protobuf.Empty\x1a\x16.google.protobuf.Empty\"\x00\x12L\n\x06Status\x12\x16.google.protobuf.Empty\x1a(.palm.ops.router.v1.RouterStatusResponse\"\x00\x12;\n\x06SetDns\x12\x17.palm.ops.router.v1.Dns\x1a\x16.google.protobuf.Empty\"\x00\x12K\n\x06SetWan\x12\'.palm.ops.router.v1.RouterSetWanRequest\x1a\x16.google.protobuf.Empty\"\x00\x12\x43\n\nSetWanPool\x12\x1b.palm.ops.router.v1.WanPool\x1a\x16.google.protobuf.Empty\"\x00\x12K\n\x06SetLan\x12\'.palm.ops.router.v1.RouterSetLanRequest\x1a\x16.google.protobuf.Empty\"\x00\x12K\n\x06SetDmz\x12\'.palm.ops.router.v1.RouterSetDmzRequest\x1a\x16.google.protobuf.Empty\"\x00\x12@\n\nCreateRule\x12\x18.palm.ops.router.v1.Rule\x1a\x16.google.protobuf.Empty\"\x00\x12X\n\nUpdateRule\x12\x30.palm.ops.router.v1.RouterIndexRuleResponse.Item\x1a\x16.google.protobuf.Empty\"\x00\x12R\n\tIndexRule\x12\x16.google.protobuf.Empty\x1a+.palm.ops.router.v1.RouterIndexRuleResponse\"\x00\x12S\n\nUpdateHost\x12+.palm.ops.router.v1.RouterUpdateHostRequest\x1a\x16.google.protobuf.Empty\"\x00\x12R\n\tIndexUser\x12\x16.google.protobuf.Empty\x1a+.palm.ops.router.v1.RouterIndexUserResponse\"\x00\x12X\n\nUpdateUser\x12\x30.palm.ops.router.v1.RouterIndexUserResponse.Item\x1a\x16.google.protobuf.Empty\"\x00\x12S\n\nCreateUser\x12+.palm.ops.router.v1.RouterCreateUserRequest\x1a\x16.google.protobuf.Empty\"\x00\x32\x81\x03\n\x04User\x12Y\n\x06SignIn\x12%.palm.ops.router.v1.UserSignInRequest\x1a&.palm.ops.router.v1.UserSignInResponse\"\x00\x12N\n\x07Refresh\x12\x19.google.protobuf.Duration\x1a&.palm.ops.router.v1.UserSignInResponse\"\x00\x12I\n\x06Update\x12%.palm.ops.router.v1.UserUpdateRequest\x1a\x16.google.protobuf.Empty\"\x00\x12;\n\x07SignOut\x12\x16.google.protobuf.Empty\x1a\x16.google.protobuf.Empty\"\x00\x12\x46\n\x04Logs\x12\x16.google.protobuf.Empty\x1a$.palm.ops.router.v1.UserLogsResponse\"\x00\x42^\n0com.github.saturn_xiv.palm.plugins.ops.router.v1P\x01Z(github.com/saturn_xiv/aloe/ops/router/v2b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ops_router_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  _globals['DESCRIPTOR']._options = None
  _globals['DESCRIPTOR']._serialized_options = b'\n0com.github.saturn_xiv.palm.plugins.ops.router.v1P\001Z(github.com/saturn_xiv/aloe/ops/router/v2'
  _globals['_ROUTERSTATUSRESPONSE_INTERFACESENTRY']._options = None
  _globals['_ROUTERSTATUSRESPONSE_INTERFACESENTRY']._serialized_options = b'8\001'
  _globals['_PROFILE']._serialized_start=135
  _globals['_PROFILE']._serialized_end=1508
  _globals['_PROFILE_NETWORK']._serialized_start=255
  _globals['_PROFILE_NETWORK']._serialized_end=1155
  _globals['_PROFILE_NETWORK_WAN']._serialized_start=501
  _globals['_PROFILE_NETWORK_WAN']._serialized_end=841
  _globals['_PROFILE_NETWORK_WAN_DHCP']._serialized_start=578
  _globals['_PROFILE_NETWORK_WAN_DHCP']._serialized_end=584
  _globals['_PROFILE_NETWORK_WAN_STATICIP']._serialized_start=586
  _globals['_PROFILE_NETWORK_WAN_STATICIP']._serialized_end=643
  _globals['_PROFILE_NETWORK_WAN_ETHERNET']._serialized_start=646
  _globals['_PROFILE_NETWORK_WAN_ETHERNET']._serialized_end=841
  _globals['_PROFILE_NETWORK_DMZ']._serialized_start=843
  _globals['_PROFILE_NETWORK_DMZ']._serialized_end=916
  _globals['_PROFILE_NETWORK_LAN']._serialized_start=919
  _globals['_PROFILE_NETWORK_LAN']._serialized_end=1078
  _globals['_PROFILE_NETWORK_LAN_CLIENT']._serialized_start=1038
  _globals['_PROFILE_NETWORK_LAN_CLIENT']._serialized_end=1078
  _globals['_PROFILE_NETWORK_GUEST']._serialized_start=1080
  _globals['_PROFILE_NETWORK_GUEST']._serialized_end=1155
  _globals['_PROFILE_DNSMASQ']._serialized_start=1158
  _globals['_PROFILE_DNSMASQ']._serialized_end=1508
  _globals['_PROFILE_DNSMASQ_ITEM']._serialized_start=1227
  _globals['_PROFILE_DNSMASQ_ITEM']._serialized_end=1508
  _globals['_PROFILE_DNSMASQ_ITEM_DHCPRANGE']._serialized_start=1432
  _globals['_PROFILE_DNSMASQ_ITEM_DHCPRANGE']._serialized_end=1471
  _globals['_PROFILE_DNSMASQ_ITEM_STATICIP']._serialized_start=1473
  _globals['_PROFILE_DNSMASQ_ITEM_STATICIP']._serialized_end=1508
  _globals['_CONTACT']._serialized_start=1511
  _globals['_CONTACT']._serialized_end=1646
  _globals['_ROUTERSETLANREQUEST']._serialized_start=1648
  _globals['_ROUTERSETLANREQUEST']._serialized_end=1727
  _globals['_ROUTERSETDMZREQUEST']._serialized_start=1729
  _globals['_ROUTERSETDMZREQUEST']._serialized_end=1808
  _globals['_ROUTERSETWANREQUEST']._serialized_start=1810
  _globals['_ROUTERSETWANREQUEST']._serialized_end=1889
  _globals['_WANPOOL']._serialized_start=1891
  _globals['_WANPOOL']._serialized_end=1989
  _globals['_WANPOOL_ITEM']._serialized_start=1951
  _globals['_WANPOOL_ITEM']._serialized_end=1989
  _globals['_ROUTERCREATEUSERREQUEST']._serialized_start=1991
  _globals['_ROUTERCREATEUSERREQUEST']._serialized_end=2076
  _globals['_ROUTERINDEXUSERRESPONSE']._serialized_start=2079
  _globals['_ROUTERINDEXUSERRESPONSE']._serialized_end=2249
  _globals['_ROUTERINDEXUSERRESPONSE_ITEM']._serialized_start=2171
  _globals['_ROUTERINDEXUSERRESPONSE_ITEM']._serialized_end=2249
  _globals['_ROUTERUPDATEHOSTREQUEST']._serialized_start=2252
  _globals['_ROUTERUPDATEHOSTREQUEST']._serialized_end=2395
  _globals['_ROUTERINDEXRULERESPONSE']._serialized_start=2398
  _globals['_ROUTERINDEXRULERESPONSE']._serialized_end=2692
  _globals['_ROUTERINDEXRULERESPONSE_ITEM']._serialized_start=2491
  _globals['_ROUTERINDEXRULERESPONSE_ITEM']._serialized_end=2692
  _globals['_HOST']._serialized_start=2695
  _globals['_HOST']._serialized_end=2934
  _globals['_HOST_OWNER']._serialized_start=2854
  _globals['_HOST_OWNER']._serialized_end=2921
  _globals['_RULE']._serialized_start=2937
  _globals['_RULE']._serialized_end=4023
  _globals['_RULE_INBOUND']._serialized_start=3117
  _globals['_RULE_INBOUND']._serialized_end=3201
  _globals['_RULE_OUTBOUND']._serialized_start=3204
  _globals['_RULE_OUTBOUND']._serialized_end=3754
  _globals['_RULE_OUTBOUND_HOST']._serialized_start=3386
  _globals['_RULE_OUTBOUND_HOST']._serialized_end=3471
  _globals['_RULE_OUTBOUND_SPEED']._serialized_start=3473
  _globals['_RULE_OUTBOUND_SPEED']._serialized_end=3532
  _globals['_RULE_OUTBOUND_TIME']._serialized_start=3535
  _globals['_RULE_OUTBOUND_TIME']._serialized_end=3743
  _globals['_RULE_NAT']._serialized_start=3757
  _globals['_RULE_NAT']._serialized_end=3972
  _globals['_RULE_NAT_SOURCE']._serialized_start=3893
  _globals['_RULE_NAT_SOURCE']._serialized_end=3931
  _globals['_RULE_NAT_DESTINATION']._serialized_start=3933
  _globals['_RULE_NAT_DESTINATION']._serialized_end=3972
  _globals['_RULE_PROTOCOL']._serialized_start=3974
  _globals['_RULE_PROTOCOL']._serialized_end=4012
  _globals['_ROUTERSTATUSRESPONSE']._serialized_start=4026
  _globals['_ROUTERSTATUSRESPONSE']._serialized_end=4628
  _globals['_ROUTERSTATUSRESPONSE_INTERFACESENTRY']._serialized_start=4527
  _globals['_ROUTERSTATUSRESPONSE_INTERFACESENTRY']._serialized_end=4576
  _globals['_ROUTERSTATUSRESPONSE_IP']._serialized_start=4578
  _globals['_ROUTERSTATUSRESPONSE_IP']._serialized_end=4628
  _globals['_LAN']._serialized_start=4630
  _globals['_LAN']._serialized_end=4697
  _globals['_DMZ']._serialized_start=4699
  _globals['_DMZ']._serialized_end=4766
  _globals['_WAN']._serialized_start=4769
  _globals['_WAN']._serialized_end=4943
  _globals['_DHCP']._serialized_start=4945
  _globals['_DHCP']._serialized_end=4963
  _globals['_STATIC']._serialized_start=4965
  _globals['_STATIC']._serialized_end=5049
  _globals['_DNS']._serialized_start=5051
  _globals['_DNS']._serialized_end=5071
  _globals['_USERPROFILE']._serialized_start=5073
  _globals['_USERPROFILE']._serialized_end=5122
  _globals['_USERSIGNINREQUEST']._serialized_start=5124
  _globals['_USERSIGNINREQUEST']._serialized_end=5230
  _globals['_USERSIGNINRESPONSE']._serialized_start=5232
  _globals['_USERSIGNINRESPONSE']._serialized_end=5267
  _globals['_USERUPDATEREQUEST']._serialized_start=5269
  _globals['_USERUPDATEREQUEST']._serialized_end=5384
  _globals['_USERLOGSRESPONSE']._serialized_start=5386
  _globals['_USERLOGSRESPONSE']._serialized_end=5419
  _globals['_ROUTER']._serialized_start=5422
  _globals['_ROUTER']._serialized_end=6572
  _globals['_USER']._serialized_start=6575
  _globals['_USER']._serialized_end=6960
# @@protoc_insertion_point(module_scope)
