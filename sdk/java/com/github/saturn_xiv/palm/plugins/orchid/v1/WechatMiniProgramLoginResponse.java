// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: orchid.proto

// Protobuf Java Version: 3.25.0
package com.github.saturn_xiv.palm.plugins.orchid.v1;

/**
 * Protobuf type {@code palm.orchid.v1.WechatMiniProgramLoginResponse}
 */
public final class WechatMiniProgramLoginResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.orchid.v1.WechatMiniProgramLoginResponse)
    WechatMiniProgramLoginResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use WechatMiniProgramLoginResponse.newBuilder() to construct.
  private WechatMiniProgramLoginResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private WechatMiniProgramLoginResponse() {
    unionid_ = "";
    openid_ = "";
    sessionKey_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new WechatMiniProgramLoginResponse();
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.orchid.v1.Orchid.internal_static_palm_orchid_v1_WechatMiniProgramLoginResponse_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.orchid.v1.Orchid.internal_static_palm_orchid_v1_WechatMiniProgramLoginResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse.class, com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse.Builder.class);
  }

  public static final int UNIONID_FIELD_NUMBER = 1;
  @SuppressWarnings("serial")
  private volatile java.lang.Object unionid_ = "";
  /**
   * <code>string unionid = 1;</code>
   * @return The unionid.
   */
  @java.lang.Override
  public java.lang.String getUnionid() {
    java.lang.Object ref = unionid_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      unionid_ = s;
      return s;
    }
  }
  /**
   * <code>string unionid = 1;</code>
   * @return The bytes for unionid.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getUnionidBytes() {
    java.lang.Object ref = unionid_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      unionid_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int OPENID_FIELD_NUMBER = 2;
  @SuppressWarnings("serial")
  private volatile java.lang.Object openid_ = "";
  /**
   * <code>string openid = 2;</code>
   * @return The openid.
   */
  @java.lang.Override
  public java.lang.String getOpenid() {
    java.lang.Object ref = openid_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      openid_ = s;
      return s;
    }
  }
  /**
   * <code>string openid = 2;</code>
   * @return The bytes for openid.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getOpenidBytes() {
    java.lang.Object ref = openid_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      openid_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int SESSION_KEY_FIELD_NUMBER = 3;
  @SuppressWarnings("serial")
  private volatile java.lang.Object sessionKey_ = "";
  /**
   * <code>string session_key = 3;</code>
   * @return The sessionKey.
   */
  @java.lang.Override
  public java.lang.String getSessionKey() {
    java.lang.Object ref = sessionKey_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      sessionKey_ = s;
      return s;
    }
  }
  /**
   * <code>string session_key = 3;</code>
   * @return The bytes for sessionKey.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getSessionKeyBytes() {
    java.lang.Object ref = sessionKey_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      sessionKey_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  private byte memoizedIsInitialized = -1;
  @java.lang.Override
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  @java.lang.Override
  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(unionid_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, unionid_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(openid_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, openid_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(sessionKey_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, sessionKey_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(unionid_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, unionid_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(openid_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, openid_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(sessionKey_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, sessionKey_);
    }
    size += getUnknownFields().getSerializedSize();
    memoizedSize = size;
    return size;
  }

  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse other = (com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse) obj;

    if (!getUnionid()
        .equals(other.getUnionid())) return false;
    if (!getOpenid()
        .equals(other.getOpenid())) return false;
    if (!getSessionKey()
        .equals(other.getSessionKey())) return false;
    if (!getUnknownFields().equals(other.getUnknownFields())) return false;
    return true;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + UNIONID_FIELD_NUMBER;
    hash = (53 * hash) + getUnionid().hashCode();
    hash = (37 * hash) + OPENID_FIELD_NUMBER;
    hash = (53 * hash) + getOpenid().hashCode();
    hash = (37 * hash) + SESSION_KEY_FIELD_NUMBER;
    hash = (53 * hash) + getSessionKey().hashCode();
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  @java.lang.Override
  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  @java.lang.Override
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * Protobuf type {@code palm.orchid.v1.WechatMiniProgramLoginResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.orchid.v1.WechatMiniProgramLoginResponse)
      com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.orchid.v1.Orchid.internal_static_palm_orchid_v1_WechatMiniProgramLoginResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.orchid.v1.Orchid.internal_static_palm_orchid_v1_WechatMiniProgramLoginResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse.class, com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse.newBuilder()
    private Builder() {

    }

    private Builder(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      super(parent);

    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      bitField0_ = 0;
      unionid_ = "";
      openid_ = "";
      sessionKey_ = "";
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.orchid.v1.Orchid.internal_static_palm_orchid_v1_WechatMiniProgramLoginResponse_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse build() {
      com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse buildPartial() {
      com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse result = new com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.unionid_ = unionid_;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.openid_ = openid_;
      }
      if (((from_bitField0_ & 0x00000004) != 0)) {
        result.sessionKey_ = sessionKey_;
      }
    }

    @java.lang.Override
    public Builder clone() {
      return super.clone();
    }
    @java.lang.Override
    public Builder setField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.setField(field, value);
    }
    @java.lang.Override
    public Builder clearField(
        com.google.protobuf.Descriptors.FieldDescriptor field) {
      return super.clearField(field);
    }
    @java.lang.Override
    public Builder clearOneof(
        com.google.protobuf.Descriptors.OneofDescriptor oneof) {
      return super.clearOneof(oneof);
    }
    @java.lang.Override
    public Builder setRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        int index, java.lang.Object value) {
      return super.setRepeatedField(field, index, value);
    }
    @java.lang.Override
    public Builder addRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.addRepeatedField(field, value);
    }
    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse other) {
      if (other == com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse.getDefaultInstance()) return this;
      if (!other.getUnionid().isEmpty()) {
        unionid_ = other.unionid_;
        bitField0_ |= 0x00000001;
        onChanged();
      }
      if (!other.getOpenid().isEmpty()) {
        openid_ = other.openid_;
        bitField0_ |= 0x00000002;
        onChanged();
      }
      if (!other.getSessionKey().isEmpty()) {
        sessionKey_ = other.sessionKey_;
        bitField0_ |= 0x00000004;
        onChanged();
      }
      this.mergeUnknownFields(other.getUnknownFields());
      onChanged();
      return this;
    }

    @java.lang.Override
    public final boolean isInitialized() {
      return true;
    }

    @java.lang.Override
    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      if (extensionRegistry == null) {
        throw new java.lang.NullPointerException();
      }
      try {
        boolean done = false;
        while (!done) {
          int tag = input.readTag();
          switch (tag) {
            case 0:
              done = true;
              break;
            case 10: {
              unionid_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 18: {
              openid_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000002;
              break;
            } // case 18
            case 26: {
              sessionKey_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000004;
              break;
            } // case 26
            default: {
              if (!super.parseUnknownField(input, extensionRegistry, tag)) {
                done = true; // was an endgroup tag
              }
              break;
            } // default:
          } // switch (tag)
        } // while (!done)
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.unwrapIOException();
      } finally {
        onChanged();
      } // finally
      return this;
    }
    private int bitField0_;

    private java.lang.Object unionid_ = "";
    /**
     * <code>string unionid = 1;</code>
     * @return The unionid.
     */
    public java.lang.String getUnionid() {
      java.lang.Object ref = unionid_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        unionid_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string unionid = 1;</code>
     * @return The bytes for unionid.
     */
    public com.google.protobuf.ByteString
        getUnionidBytes() {
      java.lang.Object ref = unionid_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        unionid_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string unionid = 1;</code>
     * @param value The unionid to set.
     * @return This builder for chaining.
     */
    public Builder setUnionid(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      unionid_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>string unionid = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearUnionid() {
      unionid_ = getDefaultInstance().getUnionid();
      bitField0_ = (bitField0_ & ~0x00000001);
      onChanged();
      return this;
    }
    /**
     * <code>string unionid = 1;</code>
     * @param value The bytes for unionid to set.
     * @return This builder for chaining.
     */
    public Builder setUnionidBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      unionid_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }

    private java.lang.Object openid_ = "";
    /**
     * <code>string openid = 2;</code>
     * @return The openid.
     */
    public java.lang.String getOpenid() {
      java.lang.Object ref = openid_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        openid_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string openid = 2;</code>
     * @return The bytes for openid.
     */
    public com.google.protobuf.ByteString
        getOpenidBytes() {
      java.lang.Object ref = openid_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        openid_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string openid = 2;</code>
     * @param value The openid to set.
     * @return This builder for chaining.
     */
    public Builder setOpenid(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      openid_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>string openid = 2;</code>
     * @return This builder for chaining.
     */
    public Builder clearOpenid() {
      openid_ = getDefaultInstance().getOpenid();
      bitField0_ = (bitField0_ & ~0x00000002);
      onChanged();
      return this;
    }
    /**
     * <code>string openid = 2;</code>
     * @param value The bytes for openid to set.
     * @return This builder for chaining.
     */
    public Builder setOpenidBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      openid_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }

    private java.lang.Object sessionKey_ = "";
    /**
     * <code>string session_key = 3;</code>
     * @return The sessionKey.
     */
    public java.lang.String getSessionKey() {
      java.lang.Object ref = sessionKey_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        sessionKey_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string session_key = 3;</code>
     * @return The bytes for sessionKey.
     */
    public com.google.protobuf.ByteString
        getSessionKeyBytes() {
      java.lang.Object ref = sessionKey_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        sessionKey_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string session_key = 3;</code>
     * @param value The sessionKey to set.
     * @return This builder for chaining.
     */
    public Builder setSessionKey(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      sessionKey_ = value;
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>string session_key = 3;</code>
     * @return This builder for chaining.
     */
    public Builder clearSessionKey() {
      sessionKey_ = getDefaultInstance().getSessionKey();
      bitField0_ = (bitField0_ & ~0x00000004);
      onChanged();
      return this;
    }
    /**
     * <code>string session_key = 3;</code>
     * @param value The bytes for sessionKey to set.
     * @return This builder for chaining.
     */
    public Builder setSessionKeyBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      sessionKey_ = value;
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    @java.lang.Override
    public final Builder setUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.setUnknownFields(unknownFields);
    }

    @java.lang.Override
    public final Builder mergeUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.mergeUnknownFields(unknownFields);
    }


    // @@protoc_insertion_point(builder_scope:palm.orchid.v1.WechatMiniProgramLoginResponse)
  }

  // @@protoc_insertion_point(class_scope:palm.orchid.v1.WechatMiniProgramLoginResponse)
  private static final com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse();
  }

  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<WechatMiniProgramLoginResponse>
      PARSER = new com.google.protobuf.AbstractParser<WechatMiniProgramLoginResponse>() {
    @java.lang.Override
    public WechatMiniProgramLoginResponse parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      Builder builder = newBuilder();
      try {
        builder.mergeFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.setUnfinishedMessage(builder.buildPartial());
      } catch (com.google.protobuf.UninitializedMessageException e) {
        throw e.asInvalidProtocolBufferException().setUnfinishedMessage(builder.buildPartial());
      } catch (java.io.IOException e) {
        throw new com.google.protobuf.InvalidProtocolBufferException(e)
            .setUnfinishedMessage(builder.buildPartial());
      }
      return builder.buildPartial();
    }
  };

  public static com.google.protobuf.Parser<WechatMiniProgramLoginResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<WechatMiniProgramLoginResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.orchid.v1.WechatMiniProgramLoginResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

