// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: lemon.proto

package com.github.saturn_xiv.palm.plugins.lemon.v1;

public interface SiteHomePageRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.lemon.v1.SiteHomePageRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string locale = 1;</code>
   * @return The locale.
   */
  java.lang.String getLocale();
  /**
   * <code>string locale = 1;</code>
   * @return The bytes for locale.
   */
  com.google.protobuf.ByteString
      getLocaleBytes();

  /**
   * <code>.palm.lemon.v1.Theme theme = 2;</code>
   * @return The enum numeric value on the wire for theme.
   */
  int getThemeValue();
  /**
   * <code>.palm.lemon.v1.Theme theme = 2;</code>
   * @return The theme.
   */
  com.github.saturn_xiv.palm.plugins.lemon.v1.Theme getTheme();
}