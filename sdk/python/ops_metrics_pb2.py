# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ops-metrics.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x11ops-metrics.proto\x12\x13palm.ops.metrics.v1\x1a\x1bgoogle/protobuf/empty.proto\x1a\x1fgoogle/protobuf/timestamp.proto\"H\n\x16ReportHeartbeatRequest\x12.\n\ncreated_at\x18\x0b \x01(\x0b\x32\x1a.google.protobuf.Timestamp\"\x97\x01\n\x14ReportJournalRequest\x12\x10\n\x08hostname\x18\x01 \x01(\t\x12\x0c\n\x04user\x18\x02 \x01(\t\x12\r\n\x05group\x18\x03 \x01(\t\x12\x0f\n\x07\x63ommand\x18\x04 \x01(\t\x12\x0f\n\x07message\x18\t \x01(\t\x12.\n\ncreated_at\x18\x0b \x01(\x0b\x32\x1a.google.protobuf.Timestamp\"\xda\x02\n\x12ReportNginxRequest\x12@\n\x06\x61\x63\x63\x65ss\x18\x01 \x01(\x0b\x32..palm.ops.metrics.v1.ReportNginxRequest.AccessH\x00\x12\x0f\n\x05\x65rror\x18\x02 \x01(\tH\x00\x12.\n\ncreated_at\x18\t \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x1a\xb5\x01\n\x06\x41\x63\x63\x65ss\x12\x11\n\tclient_ip\x18\x01 \x01(\t\x12\x0e\n\x06method\x18\x02 \x01(\t\x12\x0c\n\x04path\x18\x03 \x01(\t\x12\x0f\n\x07version\x18\x04 \x01(\x02\x12\x0e\n\x06status\x18\x05 \x01(\r\x12\x17\n\x0f\x62ody_bytes_sent\x18\x06 \x01(\x04\x12\x14\n\x0crequest_time\x18\x07 \x01(\x02\x12\x19\n\x0chttp_referer\x18\x08 \x01(\tH\x00\x88\x01\x01\x42\x0f\n\r_http_refererB\t\n\x07payload2\xf8\x01\n\x06Report\x12R\n\tHeartbeat\x12+.palm.ops.metrics.v1.ReportHeartbeatRequest\x1a\x16.google.protobuf.Empty\"\x00\x12N\n\x07Journal\x12).palm.ops.metrics.v1.ReportJournalRequest\x1a\x16.google.protobuf.Empty\"\x00\x12J\n\x05Nginx\x12\'.palm.ops.metrics.v1.ReportNginxRequest\x1a\x16.google.protobuf.Empty\"\x00\x42\x35\n1com.github.saturn_xiv.palm.plugins.ops.metrics.v1P\x01\x62\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ops_metrics_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n1com.github.saturn_xiv.palm.plugins.ops.metrics.v1P\001'
  _globals['_REPORTHEARTBEATREQUEST']._serialized_start=104
  _globals['_REPORTHEARTBEATREQUEST']._serialized_end=176
  _globals['_REPORTJOURNALREQUEST']._serialized_start=179
  _globals['_REPORTJOURNALREQUEST']._serialized_end=330
  _globals['_REPORTNGINXREQUEST']._serialized_start=333
  _globals['_REPORTNGINXREQUEST']._serialized_end=679
  _globals['_REPORTNGINXREQUEST_ACCESS']._serialized_start=487
  _globals['_REPORTNGINXREQUEST_ACCESS']._serialized_end=668
  _globals['_REPORT']._serialized_start=682
  _globals['_REPORT']._serialized_end=930
# @@protoc_insertion_point(module_scope)
