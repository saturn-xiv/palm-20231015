# frozen_string_literal: true
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ops-ddns.proto

require 'google/protobuf'


descriptor_data = "\n\x0eops-ddns.proto\x12\x10palm.ops.ddns.v12\x05\n\x03Vpn2\t\n\x07Metrics2\x06\n\x04MailBY\n.com.github.saturn_xiv.palm.plugins.ops.ddns.v1P\x01Z%github.com/saturn_xiv/fig/ops/ddns/v2b\x06proto3"

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
  module Ops
    module Ddns
      module V1
      end
    end
  end
end
