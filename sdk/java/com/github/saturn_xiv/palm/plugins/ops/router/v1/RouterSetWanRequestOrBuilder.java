// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ops-router.proto

// Protobuf Java Version: 3.25.0
package com.github.saturn_xiv.palm.plugins.ops.router.v1;

public interface RouterSetWanRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.ops.router.v1.RouterSetWanRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.palm.ops.router.v1.Wan payload = 1;</code>
   * @return Whether the payload field is set.
   */
  boolean hasPayload();
  /**
   * <code>.palm.ops.router.v1.Wan payload = 1;</code>
   * @return The payload.
   */
  com.github.saturn_xiv.palm.plugins.ops.router.v1.Wan getPayload();
  /**
   * <code>.palm.ops.router.v1.Wan payload = 1;</code>
   */
  com.github.saturn_xiv.palm.plugins.ops.router.v1.WanOrBuilder getPayloadOrBuilder();

  /**
   * <code>bool enable = 2;</code>
   * @return The enable.
   */
  boolean getEnable();
}
