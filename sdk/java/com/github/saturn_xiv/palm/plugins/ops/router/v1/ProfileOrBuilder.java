// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ops-router.proto

// Protobuf Java Version: 3.25.0
package com.github.saturn_xiv.palm.plugins.ops.router.v1;

public interface ProfileOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.ops.router.v1.Profile)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.palm.ops.router.v1.Profile.Network network = 1;</code>
   * @return Whether the network field is set.
   */
  boolean hasNetwork();
  /**
   * <code>.palm.ops.router.v1.Profile.Network network = 1;</code>
   * @return The network.
   */
  com.github.saturn_xiv.palm.plugins.ops.router.v1.Profile.Network getNetwork();
  /**
   * <code>.palm.ops.router.v1.Profile.Network network = 1;</code>
   */
  com.github.saturn_xiv.palm.plugins.ops.router.v1.Profile.NetworkOrBuilder getNetworkOrBuilder();

  /**
   * <code>.palm.ops.router.v1.Profile.Dnsmasq dnsmasq = 2;</code>
   * @return Whether the dnsmasq field is set.
   */
  boolean hasDnsmasq();
  /**
   * <code>.palm.ops.router.v1.Profile.Dnsmasq dnsmasq = 2;</code>
   * @return The dnsmasq.
   */
  com.github.saturn_xiv.palm.plugins.ops.router.v1.Profile.Dnsmasq getDnsmasq();
  /**
   * <code>.palm.ops.router.v1.Profile.Dnsmasq dnsmasq = 2;</code>
   */
  com.github.saturn_xiv.palm.plugins.ops.router.v1.Profile.DnsmasqOrBuilder getDnsmasqOrBuilder();
}
