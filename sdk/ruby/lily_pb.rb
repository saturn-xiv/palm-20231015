# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: lily.proto

require 'google/protobuf'

require 'google/protobuf/duration_pb'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("lily.proto", :syntax => :proto3) do
    add_message "palm.lily.v1.ExcelModel" do
      repeated :sheets, :message, 1, "palm.lily.v1.ExcelModel.Sheet"
    end
    add_message "palm.lily.v1.ExcelModel.Sheet" do
      optional :name, :string, 1
      repeated :cells, :message, 2, "palm.lily.v1.ExcelModel.Sheet.Cell"
    end
    add_message "palm.lily.v1.ExcelModel.Sheet.Cell" do
      optional :row, :uint32, 1
      optional :col, :uint32, 2
      optional :val, :string, 3
    end
    add_message "palm.lily.v1.S3File" do
      optional :bucket, :string, 1
      optional :name, :string, 2
      optional :content_type, :string, 9
    end
    add_message "palm.lily.v1.S3GetFileRequest" do
      optional :bucket, :string, 1
      optional :name, :string, 2
      optional :ttl, :message, 9, "google.protobuf.Duration"
    end
    add_message "palm.lily.v1.S3GetFileResponse" do
      optional :url, :string, 1
    end
    add_message "palm.lily.v1.TexToRequest" do
      optional :title, :string, 1
      map :files, :string, :bytes, 2
      proto3_optional :ttl, :message, 7, "google.protobuf.Duration"
      proto3_optional :owner, :string, 8
      optional :published, :bool, 9
    end
    add_message "palm.lily.v1.EpubBuildRequest" do
    end
  end
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