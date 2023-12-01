# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: lily.proto

require 'google/protobuf'

require 'google/protobuf/duration_pb'


descriptor_data = "\n\nlily.proto\x12\x0cpalm.lily.v1\x1a\x1egoogle/protobuf/duration.proto\"\xb6\x01\n\nExcelModel\x12.\n\x06sheets\x18\x01 \x03(\x0b\x32\x1e.palm.lily.v1.ExcelModel.Sheet\x1ax\n\x05Sheet\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x32\n\x05\x63\x65lls\x18\x02 \x03(\x0b\x32#.palm.lily.v1.ExcelModel.Sheet.Cell\x1a-\n\x04\x43\x65ll\x12\x0b\n\x03row\x18\x01 \x01(\r\x12\x0b\n\x03\x63ol\x18\x02 \x01(\r\x12\x0b\n\x03val\x18\x03 \x01(\t\"<\n\x06S3File\x12\x0e\n\x06\x62ucket\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x14\n\x0c\x63ontent_type\x18\t \x01(\t\"X\n\x10S3GetFileRequest\x12\x0e\n\x06\x62ucket\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12&\n\x03ttl\x18\t \x01(\x0b\x32\x19.google.protobuf.Duration\" \n\x11S3GetFileResponse\x12\x0b\n\x03url\x18\x01 \x01(\t\"\xe7\x01\n\x0cTexToRequest\x12\r\n\x05title\x18\x01 \x01(\t\x12\x34\n\x05\x66iles\x18\x02 \x03(\x0b\x32%.palm.lily.v1.TexToRequest.FilesEntry\x12+\n\x03ttl\x18\x07 \x01(\x0b\x32\x19.google.protobuf.DurationH\x00\x88\x01\x01\x12\x12\n\x05owner\x18\x08 \x01(\tH\x01\x88\x01\x01\x12\x11\n\tpublished\x18\t \x01(\x08\x1a,\n\nFilesEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x0c:\x02\x38\x01\x42\x06\n\x04_ttlB\x08\n\x06_owner\"\x12\n\x10\x45pubBuildRequest2\x80\x01\n\x05\x45xcel\x12\x39\n\x05Parse\x12\x14.palm.lily.v1.S3File\x1a\x18.palm.lily.v1.ExcelModel\"\x00\x12<\n\x08Generate\x12\x18.palm.lily.v1.ExcelModel\x1a\x14.palm.lily.v1.S3File\"\x00\x32R\n\x02S3\x12L\n\x07GetFile\x12\x1e.palm.lily.v1.S3GetFileRequest\x1a\x1f.palm.lily.v1.S3GetFileResponse\"\x00\x32\x80\x01\n\x03Tex\x12;\n\x05ToPdf\x12\x1a.palm.lily.v1.TexToRequest\x1a\x14.palm.lily.v1.S3File\"\x00\x12<\n\x06ToWord\x12\x1a.palm.lily.v1.TexToRequest\x1a\x14.palm.lily.v1.S3File\"\x00\x32G\n\x04\x45pub\x12?\n\x05\x42uild\x12\x1e.palm.lily.v1.EpubBuildRequest\x1a\x14.palm.lily.v1.S3File\"\x00\x42R\n*com.github.saturn_xiv.palm.plugins.lily.v1P\x01Z\"github.com/saturn_xiv/palm/lily/v2b\x06proto3"

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
  module Lily
    module V1
      ExcelModel = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lily.v1.ExcelModel").msgclass
      ExcelModel::Sheet = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lily.v1.ExcelModel.Sheet").msgclass
      ExcelModel::Sheet::Cell = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lily.v1.ExcelModel.Sheet.Cell").msgclass
      S3File = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lily.v1.S3File").msgclass
      S3GetFileRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lily.v1.S3GetFileRequest").msgclass
      S3GetFileResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lily.v1.S3GetFileResponse").msgclass
      TexToRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lily.v1.TexToRequest").msgclass
      EpubBuildRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.lily.v1.EpubBuildRequest").msgclass
    end
  end
end
