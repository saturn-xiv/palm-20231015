// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: metasequoia.proto

// Protobuf Java Version: 3.25.0
package com.github.saturn_xiv.palm.plugins.metasequoia.v1;

public interface GoogleProfileOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.metasequoia.v1.GoogleProfile)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>optional string site_verify_id = 1;</code>
   * @return Whether the siteVerifyId field is set.
   */
  boolean hasSiteVerifyId();
  /**
   * <code>optional string site_verify_id = 1;</code>
   * @return The siteVerifyId.
   */
  java.lang.String getSiteVerifyId();
  /**
   * <code>optional string site_verify_id = 1;</code>
   * @return The bytes for siteVerifyId.
   */
  com.google.protobuf.ByteString
      getSiteVerifyIdBytes();

  /**
   * <code>optional .palm.metasequoia.v1.GoogleProfile.ReCaptcha re_captcha = 2;</code>
   * @return Whether the reCaptcha field is set.
   */
  boolean hasReCaptcha();
  /**
   * <code>optional .palm.metasequoia.v1.GoogleProfile.ReCaptcha re_captcha = 2;</code>
   * @return The reCaptcha.
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleProfile.ReCaptcha getReCaptcha();
  /**
   * <code>optional .palm.metasequoia.v1.GoogleProfile.ReCaptcha re_captcha = 2;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleProfile.ReCaptchaOrBuilder getReCaptchaOrBuilder();
}
