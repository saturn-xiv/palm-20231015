# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: nut.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\tnut.proto\x12\x0bpalm.nut.v1\x1a\x1fgoogle/protobuf/timestamp.proto\"\x17\n\tIdRequest\x12\n\n\x02id\x18\x01 \x01(\x05\"#\n\x05Pager\x12\x0c\n\x04page\x18\x01 \x01(\x03\x12\x0c\n\x04size\x18\x02 \x01(\x03\"_\n\nPagination\x12\x0c\n\x04page\x18\x01 \x01(\x03\x12\x0c\n\x04size\x18\x02 \x01(\x03\x12\r\n\x05total\x18\x03 \x01(\x03\x12\x10\n\x08has_next\x18\x0b \x01(\x08\x12\x14\n\x0chas_previous\x18\x0c \x01(\x08\"\xc0\x02\n\x0cMediaContent\x12\x30\n\x06\x65\x64itor\x18\x01 \x01(\x0e\x32 .palm.nut.v1.MediaContent.Editor\x12\x0c\n\x04\x62ody\x18\x02 \x01(\t\x12\x30\n\x06status\x18\x03 \x01(\x0e\x32 .palm.nut.v1.MediaContent.Status\x12\x35\n\x0cpublished_at\x18\x0b \x01(\x0b\x32\x1a.google.protobuf.TimestampH\x00\x88\x01\x01\"!\n\x06\x45\x64itor\x12\x0c\n\x08TEXTAREA\x10\x00\x12\t\n\x05QUILL\x10\x01\"S\n\x06Status\x12\r\n\tPublished\x10\x00\x12\t\n\x05\x44raft\x10\x01\x12\x0b\n\x07Pending\x10\x02\x12\x0b\n\x07Private\x10\x03\x12\n\n\x06\x46uture\x10\x04\x12\t\n\x05Trash\x10\x63\x42\x0f\n\r_published_atB-\n)com.github.saturn_xiv.palm.plugins.nut.v1P\x01\x62\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'nut_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n)com.github.saturn_xiv.palm.plugins.nut.v1P\001'
  _globals['_IDREQUEST']._serialized_start=59
  _globals['_IDREQUEST']._serialized_end=82
  _globals['_PAGER']._serialized_start=84
  _globals['_PAGER']._serialized_end=119
  _globals['_PAGINATION']._serialized_start=121
  _globals['_PAGINATION']._serialized_end=216
  _globals['_MEDIACONTENT']._serialized_start=219
  _globals['_MEDIACONTENT']._serialized_end=539
  _globals['_MEDIACONTENT_EDITOR']._serialized_start=404
  _globals['_MEDIACONTENT_EDITOR']._serialized_end=437
  _globals['_MEDIACONTENT_STATUS']._serialized_start=439
  _globals['_MEDIACONTENT_STATUS']._serialized_end=522
# @@protoc_insertion_point(module_scope)
