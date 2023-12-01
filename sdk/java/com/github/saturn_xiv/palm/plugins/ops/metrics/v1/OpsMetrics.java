// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ops-metrics.proto

package com.github.saturn_xiv.palm.plugins.ops.metrics.v1;

public final class OpsMetrics {
  private OpsMetrics() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_ops_metrics_v1_ReportHeartbeatRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_ops_metrics_v1_ReportHeartbeatRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_ops_metrics_v1_ReportJournalRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_ops_metrics_v1_ReportJournalRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_ops_metrics_v1_ReportNginxRequest_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_ops_metrics_v1_ReportNginxRequest_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_palm_ops_metrics_v1_ReportNginxRequest_Access_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_palm_ops_metrics_v1_ReportNginxRequest_Access_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\021ops-metrics.proto\022\023palm.ops.metrics.v1" +
      "\032\033google/protobuf/empty.proto\032\037google/pr" +
      "otobuf/timestamp.proto\"H\n\026ReportHeartbea" +
      "tRequest\022.\n\ncreated_at\030\013 \001(\0132\032.google.pr" +
      "otobuf.Timestamp\"\227\001\n\024ReportJournalReques" +
      "t\022\020\n\010hostname\030\001 \001(\t\022\014\n\004user\030\002 \001(\t\022\r\n\005gro" +
      "up\030\003 \001(\t\022\017\n\007command\030\004 \001(\t\022\017\n\007message\030\t \001" +
      "(\t\022.\n\ncreated_at\030\013 \001(\0132\032.google.protobuf" +
      ".Timestamp\"\332\002\n\022ReportNginxRequest\022@\n\006acc" +
      "ess\030\001 \001(\0132..palm.ops.metrics.v1.ReportNg" +
      "inxRequest.AccessH\000\022\017\n\005error\030\002 \001(\tH\000\022.\n\n" +
      "created_at\030\t \001(\0132\032.google.protobuf.Times" +
      "tamp\032\265\001\n\006Access\022\021\n\tclient_ip\030\001 \001(\t\022\016\n\006me" +
      "thod\030\002 \001(\t\022\014\n\004path\030\003 \001(\t\022\017\n\007version\030\004 \001(" +
      "\002\022\016\n\006status\030\005 \001(\r\022\027\n\017body_bytes_sent\030\006 \001" +
      "(\004\022\024\n\014request_time\030\007 \001(\002\022\031\n\014http_referer" +
      "\030\010 \001(\tH\000\210\001\001B\017\n\r_http_refererB\t\n\007payload2" +
      "\370\001\n\006Report\022R\n\tHeartbeat\022+.palm.ops.metri" +
      "cs.v1.ReportHeartbeatRequest\032\026.google.pr" +
      "otobuf.Empty\"\000\022N\n\007Journal\022).palm.ops.met" +
      "rics.v1.ReportJournalRequest\032\026.google.pr" +
      "otobuf.Empty\"\000\022J\n\005Nginx\022\'.palm.ops.metri" +
      "cs.v1.ReportNginxRequest\032\026.google.protob" +
      "uf.Empty\"\000B`\n1com.github.saturn_xiv.palm" +
      ".plugins.ops.metrics.v1P\001Z)github.com/sa" +
      "turn_xiv/palm/ops/metrics/v2b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          com.google.protobuf.EmptyProto.getDescriptor(),
          com.google.protobuf.TimestampProto.getDescriptor(),
        });
    internal_static_palm_ops_metrics_v1_ReportHeartbeatRequest_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_palm_ops_metrics_v1_ReportHeartbeatRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_ops_metrics_v1_ReportHeartbeatRequest_descriptor,
        new java.lang.String[] { "CreatedAt", });
    internal_static_palm_ops_metrics_v1_ReportJournalRequest_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_palm_ops_metrics_v1_ReportJournalRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_ops_metrics_v1_ReportJournalRequest_descriptor,
        new java.lang.String[] { "Hostname", "User", "Group", "Command", "Message", "CreatedAt", });
    internal_static_palm_ops_metrics_v1_ReportNginxRequest_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_palm_ops_metrics_v1_ReportNginxRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_ops_metrics_v1_ReportNginxRequest_descriptor,
        new java.lang.String[] { "Access", "Error", "CreatedAt", "Payload", });
    internal_static_palm_ops_metrics_v1_ReportNginxRequest_Access_descriptor =
      internal_static_palm_ops_metrics_v1_ReportNginxRequest_descriptor.getNestedTypes().get(0);
    internal_static_palm_ops_metrics_v1_ReportNginxRequest_Access_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_palm_ops_metrics_v1_ReportNginxRequest_Access_descriptor,
        new java.lang.String[] { "ClientIp", "Method", "Path", "Version", "Status", "BodyBytesSent", "RequestTime", "HttpReferer", "HttpReferer", });
    com.google.protobuf.EmptyProto.getDescriptor();
    com.google.protobuf.TimestampProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
