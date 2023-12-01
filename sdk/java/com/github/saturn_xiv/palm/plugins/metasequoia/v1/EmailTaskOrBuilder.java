// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: metasequoia.proto

package com.github.saturn_xiv.palm.plugins.metasequoia.v1;

public interface EmailTaskOrBuilder extends
    // @@protoc_insertion_point(interface_extends:palm.metasequoia.v1.EmailTask)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.palm.metasequoia.v1.EmailTask.Address to = 1;</code>
   * @return Whether the to field is set.
   */
  boolean hasTo();
  /**
   * <code>.palm.metasequoia.v1.EmailTask.Address to = 1;</code>
   * @return The to.
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.EmailTask.Address getTo();
  /**
   * <code>.palm.metasequoia.v1.EmailTask.Address to = 1;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.EmailTask.AddressOrBuilder getToOrBuilder();

  /**
   * <code>repeated .palm.metasequoia.v1.EmailTask.Address cc = 2;</code>
   */
  java.util.List<com.github.saturn_xiv.palm.plugins.metasequoia.v1.EmailTask.Address> 
      getCcList();
  /**
   * <code>repeated .palm.metasequoia.v1.EmailTask.Address cc = 2;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.EmailTask.Address getCc(int index);
  /**
   * <code>repeated .palm.metasequoia.v1.EmailTask.Address cc = 2;</code>
   */
  int getCcCount();
  /**
   * <code>repeated .palm.metasequoia.v1.EmailTask.Address cc = 2;</code>
   */
  java.util.List<? extends com.github.saturn_xiv.palm.plugins.metasequoia.v1.EmailTask.AddressOrBuilder> 
      getCcOrBuilderList();
  /**
   * <code>repeated .palm.metasequoia.v1.EmailTask.Address cc = 2;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.EmailTask.AddressOrBuilder getCcOrBuilder(
      int index);

  /**
   * <code>repeated .palm.metasequoia.v1.EmailTask.Address bcc = 3;</code>
   */
  java.util.List<com.github.saturn_xiv.palm.plugins.metasequoia.v1.EmailTask.Address> 
      getBccList();
  /**
   * <code>repeated .palm.metasequoia.v1.EmailTask.Address bcc = 3;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.EmailTask.Address getBcc(int index);
  /**
   * <code>repeated .palm.metasequoia.v1.EmailTask.Address bcc = 3;</code>
   */
  int getBccCount();
  /**
   * <code>repeated .palm.metasequoia.v1.EmailTask.Address bcc = 3;</code>
   */
  java.util.List<? extends com.github.saturn_xiv.palm.plugins.metasequoia.v1.EmailTask.AddressOrBuilder> 
      getBccOrBuilderList();
  /**
   * <code>repeated .palm.metasequoia.v1.EmailTask.Address bcc = 3;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.EmailTask.AddressOrBuilder getBccOrBuilder(
      int index);

  /**
   * <code>string subject = 11;</code>
   * @return The subject.
   */
  java.lang.String getSubject();
  /**
   * <code>string subject = 11;</code>
   * @return The bytes for subject.
   */
  com.google.protobuf.ByteString
      getSubjectBytes();

  /**
   * <code>.palm.metasequoia.v1.EmailTask.Body body = 12;</code>
   * @return Whether the body field is set.
   */
  boolean hasBody();
  /**
   * <code>.palm.metasequoia.v1.EmailTask.Body body = 12;</code>
   * @return The body.
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.EmailTask.Body getBody();
  /**
   * <code>.palm.metasequoia.v1.EmailTask.Body body = 12;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.EmailTask.BodyOrBuilder getBodyOrBuilder();

  /**
   * <code>repeated .palm.metasequoia.v1.EmailTask.Attachment attachments = 13;</code>
   */
  java.util.List<com.github.saturn_xiv.palm.plugins.metasequoia.v1.EmailTask.Attachment> 
      getAttachmentsList();
  /**
   * <code>repeated .palm.metasequoia.v1.EmailTask.Attachment attachments = 13;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.EmailTask.Attachment getAttachments(int index);
  /**
   * <code>repeated .palm.metasequoia.v1.EmailTask.Attachment attachments = 13;</code>
   */
  int getAttachmentsCount();
  /**
   * <code>repeated .palm.metasequoia.v1.EmailTask.Attachment attachments = 13;</code>
   */
  java.util.List<? extends com.github.saturn_xiv.palm.plugins.metasequoia.v1.EmailTask.AttachmentOrBuilder> 
      getAttachmentsOrBuilderList();
  /**
   * <code>repeated .palm.metasequoia.v1.EmailTask.Attachment attachments = 13;</code>
   */
  com.github.saturn_xiv.palm.plugins.metasequoia.v1.EmailTask.AttachmentOrBuilder getAttachmentsOrBuilder(
      int index);
}