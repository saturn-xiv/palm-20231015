# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: nut.proto

require 'google/protobuf'

require 'google/protobuf/timestamp_pb'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("nut.proto", :syntax => :proto3) do
    add_message "palm.nut.v1.IdRequest" do
      optional :id, :int32, 1
    end
    add_message "palm.nut.v1.Pager" do
      optional :page, :int64, 1
      optional :size, :int64, 2
    end
    add_message "palm.nut.v1.Pagination" do
      optional :page, :int64, 1
      optional :size, :int64, 2
      optional :total, :int64, 3
      optional :has_next, :bool, 11
      optional :has_previous, :bool, 12
    end
    add_message "palm.nut.v1.MediaContent" do
      optional :editor, :enum, 1, "palm.nut.v1.MediaContent.Editor"
      optional :body, :string, 2
      optional :status, :enum, 3, "palm.nut.v1.MediaContent.Status"
      proto3_optional :published_at, :message, 11, "google.protobuf.Timestamp"
    end
    add_enum "palm.nut.v1.MediaContent.Editor" do
      value :TEXTAREA, 0
      value :QUILL, 1
    end
    add_enum "palm.nut.v1.MediaContent.Status" do
      value :Published, 0
      value :Draft, 1
      value :Pending, 2
      value :Private, 3
      value :Future, 4
      value :Trash, 99
    end
  end
end

module Palm
  module Nut
    module V1
      IdRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.nut.v1.IdRequest").msgclass
      Pager = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.nut.v1.Pager").msgclass
      Pagination = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.nut.v1.Pagination").msgclass
      MediaContent = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.nut.v1.MediaContent").msgclass
      MediaContent::Editor = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.nut.v1.MediaContent.Editor").enummodule
      MediaContent::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("palm.nut.v1.MediaContent.Status").enummodule
    end
  end
end
