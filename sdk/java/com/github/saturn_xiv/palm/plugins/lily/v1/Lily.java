// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: lily.proto

package com.github.saturn_xiv.palm.plugins.lily.v1;

public final class Lily {
  private Lily() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_lily_v1_ExcelModel_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_lily_v1_ExcelModel_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_lily_v1_ExcelModel_Sheet_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_lily_v1_ExcelModel_Sheet_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_lily_v1_ExcelModel_Sheet_Cell_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_lily_v1_ExcelModel_Sheet_Cell_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_lily_v1_S3File_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_lily_v1_S3File_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_lily_v1_S3GetFileRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_lily_v1_S3GetFileRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_lily_v1_S3GetFileResponse_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_lily_v1_S3GetFileResponse_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_lily_v1_TexToRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_lily_v1_TexToRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_lily_v1_TexToRequest_FilesEntry_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_lily_v1_TexToRequest_FilesEntry_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_lily_v1_EpubBuildRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_lily_v1_EpubBuildRequest_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\nlily.proto\022\014palm.lily.v1\032\036google/proto" +
      "buf/duration.proto\"\266\001\n\nExcelModel\022.\n\006she" +
      "ets\030\001 \003(\0132\036.palm.lily.v1.ExcelModel.Shee" +
      "t\032x\n\005Sheet\022\014\n\004name\030\001 \001(\t\0222\n\005cells\030\002 \003(\0132" +
      "#.palm.lily.v1.ExcelModel.Sheet.Cell\032-\n\004" +
      "Cell\022\013\n\003row\030\001 \001(\r\022\013\n\003col\030\002 \001(\r\022\013\n\003val\030\003 " +
      "\001(\t\"<\n\006S3File\022\016\n\006bucket\030\001 \001(\t\022\014\n\004name\030\002 " +
      "\001(\t\022\024\n\014content_type\030\t \001(\t\"X\n\020S3GetFileRe" +
      "quest\022\016\n\006bucket\030\001 \001(\t\022\014\n\004name\030\002 \001(\t\022&\n\003t" +
      "tl\030\t \001(\0132\031.google.protobuf.Duration\" \n\021S" +
      "3GetFileResponse\022\013\n\003url\030\001 \001(\t\"\347\001\n\014TexToR" +
      "equest\022\r\n\005title\030\001 \001(\t\0224\n\005files\030\002 \003(\0132%.p" +
      "alm.lily.v1.TexToRequest.FilesEntry\022+\n\003t" +
      "tl\030\007 \001(\0132\031.google.protobuf.DurationH\000\210\001\001" +
      "\022\022\n\005owner\030\010 \001(\tH\001\210\001\001\022\021\n\tpublished\030\t \001(\010\032" +
      ",\n\nFilesEntry\022\013\n\003key\030\001 \001(\t\022\r\n\005value\030\002 \001(" +
      "\014:\0028\001B\006\n\004_ttlB\010\n\006_owner\"\022\n\020EpubBuildRequ" +
      "est2\200\001\n\005Excel\0229\n\005Parse\022\024.palm.lily.v1.S3" +
      "File\032\030.palm.lily.v1.ExcelModel\"\000\022<\n\010Gene" +
      "rate\022\030.palm.lily.v1.ExcelModel\032\024.palm.li" +
      "ly.v1.S3File\"\0002R\n\002S3\022L\n\007GetFile\022\036.palm.l" +
      "ily.v1.S3GetFileRequest\032\037.palm.lily.v1.S" +
      "3GetFileResponse\"\0002\200\001\n\003Tex\022;\n\005ToPdf\022\032.pa" +
      "lm.lily.v1.TexToRequest\032\024.palm.lily.v1.S" +
      "3File\"\000\022<\n\006ToWord\022\032.palm.lily.v1.TexToRe" +
      "quest\032\024.palm.lily.v1.S3File\"\0002G\n\004Epub\022?\n" +
      "\005Build\022\036.palm.lily.v1.EpubBuildRequest\032\024" +
      ".palm.lily.v1.S3File\"\000BR\n*com.github.sat" +
      "urn_xiv.palm.plugins.lily.v1P\001Z\"github.c" +
      "om/saturn_xiv/palm/lily/v2b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          com.google.protobuf.DurationProto.getDescriptor(),
        });
    internal_static_palm_lily_v1_ExcelModel_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_palm_lily_v1_ExcelModel_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_lily_v1_ExcelModel_descriptor,
        new java.lang.String[] { "Sheets", });
    internal_static_palm_lily_v1_ExcelModel_Sheet_descriptor =
      internal_static_palm_lily_v1_ExcelModel_descriptor.getNestedTypes().get(0);
    internal_static_palm_lily_v1_ExcelModel_Sheet_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_lily_v1_ExcelModel_Sheet_descriptor,
        new java.lang.String[] { "Name", "Cells", });
    internal_static_palm_lily_v1_ExcelModel_Sheet_Cell_descriptor =
      internal_static_palm_lily_v1_ExcelModel_Sheet_descriptor.getNestedTypes().get(0);
    internal_static_palm_lily_v1_ExcelModel_Sheet_Cell_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_lily_v1_ExcelModel_Sheet_Cell_descriptor,
        new java.lang.String[] { "Row", "Col", "Val", });
    internal_static_palm_lily_v1_S3File_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_palm_lily_v1_S3File_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_lily_v1_S3File_descriptor,
        new java.lang.String[] { "Bucket", "Name", "ContentType", });
    internal_static_palm_lily_v1_S3GetFileRequest_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_palm_lily_v1_S3GetFileRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_lily_v1_S3GetFileRequest_descriptor,
        new java.lang.String[] { "Bucket", "Name", "Ttl", });
    internal_static_palm_lily_v1_S3GetFileResponse_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_palm_lily_v1_S3GetFileResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_lily_v1_S3GetFileResponse_descriptor,
        new java.lang.String[] { "Url", });
    internal_static_palm_lily_v1_TexToRequest_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_palm_lily_v1_TexToRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_lily_v1_TexToRequest_descriptor,
        new java.lang.String[] { "Title", "Files", "Ttl", "Owner", "Published", "Ttl", "Owner", });
    internal_static_palm_lily_v1_TexToRequest_FilesEntry_descriptor =
      internal_static_palm_lily_v1_TexToRequest_descriptor.getNestedTypes().get(0);
    internal_static_palm_lily_v1_TexToRequest_FilesEntry_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_lily_v1_TexToRequest_FilesEntry_descriptor,
        new java.lang.String[] { "Key", "Value", });
    internal_static_palm_lily_v1_EpubBuildRequest_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_palm_lily_v1_EpubBuildRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_lily_v1_EpubBuildRequest_descriptor,
        new java.lang.String[] { });
    com.google.protobuf.DurationProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
