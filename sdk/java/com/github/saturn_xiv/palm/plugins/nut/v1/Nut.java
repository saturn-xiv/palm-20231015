// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: nut.proto

package com.github.saturn_xiv.palm.plugins.nut.v1;

public final class Nut {
  private Nut() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_nut_v1_IdRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_nut_v1_IdRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_nut_v1_Pager_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_nut_v1_Pager_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_nut_v1_Pagination_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_nut_v1_Pagination_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_nut_v1_MediaContent_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_nut_v1_MediaContent_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\tnut.proto\022\013palm.nut.v1\032\037google/protobu" +
      "f/timestamp.proto\"\027\n\tIdRequest\022\n\n\002id\030\001 \001" +
      "(\005\"#\n\005Pager\022\014\n\004page\030\001 \001(\003\022\014\n\004size\030\002 \001(\003\"" +
      "_\n\nPagination\022\014\n\004page\030\001 \001(\003\022\014\n\004size\030\002 \001(" +
      "\003\022\r\n\005total\030\003 \001(\003\022\020\n\010has_next\030\013 \001(\010\022\024\n\014ha" +
      "s_previous\030\014 \001(\010\"\300\002\n\014MediaContent\0220\n\006edi" +
      "tor\030\001 \001(\0162 .palm.nut.v1.MediaContent.Edi" +
      "tor\022\014\n\004body\030\002 \001(\t\0220\n\006status\030\003 \001(\0162 .palm" +
      ".nut.v1.MediaContent.Status\0225\n\014published" +
      "_at\030\013 \001(\0132\032.google.protobuf.TimestampH\000\210" +
      "\001\001\"!\n\006Editor\022\014\n\010TEXTAREA\020\000\022\t\n\005QUILL\020\001\"S\n" +
      "\006Status\022\r\n\tPublished\020\000\022\t\n\005Draft\020\001\022\013\n\007Pen" +
      "ding\020\002\022\013\n\007Private\020\003\022\n\n\006Future\020\004\022\t\n\005Trash" +
      "\020cB\017\n\r_published_atB-\n)com.github.saturn" +
      "_xiv.palm.plugins.nut.v1P\001b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          com.google.protobuf.TimestampProto.getDescriptor(),
        });
    internal_static_palm_nut_v1_IdRequest_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_palm_nut_v1_IdRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_nut_v1_IdRequest_descriptor,
        new java.lang.String[] { "Id", });
    internal_static_palm_nut_v1_Pager_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_palm_nut_v1_Pager_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_nut_v1_Pager_descriptor,
        new java.lang.String[] { "Page", "Size", });
    internal_static_palm_nut_v1_Pagination_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_palm_nut_v1_Pagination_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_nut_v1_Pagination_descriptor,
        new java.lang.String[] { "Page", "Size", "Total", "HasNext", "HasPrevious", });
    internal_static_palm_nut_v1_MediaContent_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_palm_nut_v1_MediaContent_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_nut_v1_MediaContent_descriptor,
        new java.lang.String[] { "Editor", "Body", "Status", "PublishedAt", "PublishedAt", });
    com.google.protobuf.TimestampProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
