# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: lily.proto
# Protobuf Python Version: 4.25.0
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import duration_pb2 as google_dot_protobuf_dot_duration__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\nlily.proto\x12\x0cpalm.lily.v1\x1a\x1egoogle/protobuf/duration.proto\"\xb6\x01\n\nExcelModel\x12.\n\x06sheets\x18\x01 \x03(\x0b\x32\x1e.palm.lily.v1.ExcelModel.Sheet\x1ax\n\x05Sheet\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x32\n\x05\x63\x65lls\x18\x02 \x03(\x0b\x32#.palm.lily.v1.ExcelModel.Sheet.Cell\x1a-\n\x04\x43\x65ll\x12\x0b\n\x03row\x18\x01 \x01(\r\x12\x0b\n\x03\x63ol\x18\x02 \x01(\r\x12\x0b\n\x03val\x18\x03 \x01(\t\"<\n\x06S3File\x12\x0e\n\x06\x62ucket\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x14\n\x0c\x63ontent_type\x18\t \x01(\t\"X\n\x10S3GetFileRequest\x12\x0e\n\x06\x62ucket\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12&\n\x03ttl\x18\t \x01(\x0b\x32\x19.google.protobuf.Duration\" \n\x11S3GetFileResponse\x12\x0b\n\x03url\x18\x01 \x01(\t\"\xe7\x01\n\x0cTexToRequest\x12\r\n\x05title\x18\x01 \x01(\t\x12\x34\n\x05\x66iles\x18\x02 \x03(\x0b\x32%.palm.lily.v1.TexToRequest.FilesEntry\x12+\n\x03ttl\x18\x07 \x01(\x0b\x32\x19.google.protobuf.DurationH\x00\x88\x01\x01\x12\x12\n\x05owner\x18\x08 \x01(\tH\x01\x88\x01\x01\x12\x11\n\tpublished\x18\t \x01(\x08\x1a,\n\nFilesEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x0c:\x02\x38\x01\x42\x06\n\x04_ttlB\x08\n\x06_owner\"\x12\n\x10\x45pubBuildRequest2\x80\x01\n\x05\x45xcel\x12\x39\n\x05Parse\x12\x14.palm.lily.v1.S3File\x1a\x18.palm.lily.v1.ExcelModel\"\x00\x12<\n\x08Generate\x12\x18.palm.lily.v1.ExcelModel\x1a\x14.palm.lily.v1.S3File\"\x00\x32R\n\x02S3\x12L\n\x07GetFile\x12\x1e.palm.lily.v1.S3GetFileRequest\x1a\x1f.palm.lily.v1.S3GetFileResponse\"\x00\x32\x80\x01\n\x03Tex\x12;\n\x05ToPdf\x12\x1a.palm.lily.v1.TexToRequest\x1a\x14.palm.lily.v1.S3File\"\x00\x12<\n\x06ToWord\x12\x1a.palm.lily.v1.TexToRequest\x1a\x14.palm.lily.v1.S3File\"\x00\x32G\n\x04\x45pub\x12?\n\x05\x42uild\x12\x1e.palm.lily.v1.EpubBuildRequest\x1a\x14.palm.lily.v1.S3File\"\x00\x42Q\n*com.github.saturn_xiv.palm.plugins.lily.v1P\x01Z!github.com/saturn_xiv/fig/lily/v2b\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'lily_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  _globals['DESCRIPTOR']._options = None
  _globals['DESCRIPTOR']._serialized_options = b'\n*com.github.saturn_xiv.palm.plugins.lily.v1P\001Z!github.com/saturn_xiv/fig/lily/v2'
  _globals['_TEXTOREQUEST_FILESENTRY']._options = None
  _globals['_TEXTOREQUEST_FILESENTRY']._serialized_options = b'8\001'
  _globals['_EXCELMODEL']._serialized_start=61
  _globals['_EXCELMODEL']._serialized_end=243
  _globals['_EXCELMODEL_SHEET']._serialized_start=123
  _globals['_EXCELMODEL_SHEET']._serialized_end=243
  _globals['_EXCELMODEL_SHEET_CELL']._serialized_start=198
  _globals['_EXCELMODEL_SHEET_CELL']._serialized_end=243
  _globals['_S3FILE']._serialized_start=245
  _globals['_S3FILE']._serialized_end=305
  _globals['_S3GETFILEREQUEST']._serialized_start=307
  _globals['_S3GETFILEREQUEST']._serialized_end=395
  _globals['_S3GETFILERESPONSE']._serialized_start=397
  _globals['_S3GETFILERESPONSE']._serialized_end=429
  _globals['_TEXTOREQUEST']._serialized_start=432
  _globals['_TEXTOREQUEST']._serialized_end=663
  _globals['_TEXTOREQUEST_FILESENTRY']._serialized_start=601
  _globals['_TEXTOREQUEST_FILESENTRY']._serialized_end=645
  _globals['_EPUBBUILDREQUEST']._serialized_start=665
  _globals['_EPUBBUILDREQUEST']._serialized_end=683
  _globals['_EXCEL']._serialized_start=686
  _globals['_EXCEL']._serialized_end=814
  _globals['_S3']._serialized_start=816
  _globals['_S3']._serialized_end=898
  _globals['_TEX']._serialized_start=901
  _globals['_TEX']._serialized_end=1029
  _globals['_EPUB']._serialized_start=1031
  _globals['_EPUB']._serialized_end=1102
# @@protoc_insertion_point(module_scope)
