// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: auth.proto

package com.github.saturn_xiv.palm.plugins.auth.v1;

/**
 * Protobuf type {@code palm.auth.v1.WechatMiniProgramUser}
 */
public final class WechatMiniProgramUser extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.auth.v1.WechatMiniProgramUser)
    WechatMiniProgramUserOrBuilder {
private static final long serialVersionUID = 0L;
  // Use WechatMiniProgramUser.newBuilder() to construct.
  private WechatMiniProgramUser(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private WechatMiniProgramUser() {
    appId_ = "";
    openId_ = "";
    unionId_ = "";
    nickname_ = "";
    avatarUrl_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new WechatMiniProgramUser();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.auth.v1.Auth.internal_static_palm_auth_v1_WechatMiniProgramUser_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.auth.v1.Auth.internal_static_palm_auth_v1_WechatMiniProgramUser_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser.class, com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser.Builder.class);
  }

  private int bitField0_;
  public static final int APP_ID_FIELD_NUMBER = 11;
  @SuppressWarnings("serial")
  private volatile java.lang.Object appId_ = "";
  /**
   * <code>string app_id = 11;</code>
   * @return The appId.
   */
  @java.lang.Override
  public java.lang.String getAppId() {
    java.lang.Object ref = appId_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      appId_ = s;
      return s;
    }
  }
  /**
   * <code>string app_id = 11;</code>
   * @return The bytes for appId.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getAppIdBytes() {
    java.lang.Object ref = appId_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      appId_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int OPEN_ID_FIELD_NUMBER = 12;
  @SuppressWarnings("serial")
  private volatile java.lang.Object openId_ = "";
  /**
   * <code>string open_id = 12;</code>
   * @return The openId.
   */
  @java.lang.Override
  public java.lang.String getOpenId() {
    java.lang.Object ref = openId_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      openId_ = s;
      return s;
    }
  }
  /**
   * <code>string open_id = 12;</code>
   * @return The bytes for openId.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getOpenIdBytes() {
    java.lang.Object ref = openId_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      openId_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int UNION_ID_FIELD_NUMBER = 13;
  @SuppressWarnings("serial")
  private volatile java.lang.Object unionId_ = "";
  /**
   * <code>string union_id = 13;</code>
   * @return The unionId.
   */
  @java.lang.Override
  public java.lang.String getUnionId() {
    java.lang.Object ref = unionId_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      unionId_ = s;
      return s;
    }
  }
  /**
   * <code>string union_id = 13;</code>
   * @return The bytes for unionId.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getUnionIdBytes() {
    java.lang.Object ref = unionId_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      unionId_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int NICKNAME_FIELD_NUMBER = 21;
  @SuppressWarnings("serial")
  private volatile java.lang.Object nickname_ = "";
  /**
   * <code>optional string nickname = 21;</code>
   * @return Whether the nickname field is set.
   */
  @java.lang.Override
  public boolean hasNickname() {
    return ((bitField0_ & 0x00000001) != 0);
  }
  /**
   * <code>optional string nickname = 21;</code>
   * @return The nickname.
   */
  @java.lang.Override
  public java.lang.String getNickname() {
    java.lang.Object ref = nickname_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      nickname_ = s;
      return s;
    }
  }
  /**
   * <code>optional string nickname = 21;</code>
   * @return The bytes for nickname.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getNicknameBytes() {
    java.lang.Object ref = nickname_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      nickname_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int AVATAR_URL_FIELD_NUMBER = 22;
  @SuppressWarnings("serial")
  private volatile java.lang.Object avatarUrl_ = "";
  /**
   * <code>optional string avatar_url = 22;</code>
   * @return Whether the avatarUrl field is set.
   */
  @java.lang.Override
  public boolean hasAvatarUrl() {
    return ((bitField0_ & 0x00000002) != 0);
  }
  /**
   * <code>optional string avatar_url = 22;</code>
   * @return The avatarUrl.
   */
  @java.lang.Override
  public java.lang.String getAvatarUrl() {
    java.lang.Object ref = avatarUrl_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      avatarUrl_ = s;
      return s;
    }
  }
  /**
   * <code>optional string avatar_url = 22;</code>
   * @return The bytes for avatarUrl.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getAvatarUrlBytes() {
    java.lang.Object ref = avatarUrl_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      avatarUrl_ = b;
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
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(appId_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 11, appId_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(openId_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 12, openId_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(unionId_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 13, unionId_);
    }
    if (((bitField0_ & 0x00000001) != 0)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 21, nickname_);
    }
    if (((bitField0_ & 0x00000002) != 0)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 22, avatarUrl_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(appId_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(11, appId_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(openId_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(12, openId_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(unionId_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(13, unionId_);
    }
    if (((bitField0_ & 0x00000001) != 0)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(21, nickname_);
    }
    if (((bitField0_ & 0x00000002) != 0)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(22, avatarUrl_);
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser other = (com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser) obj;

    if (!getAppId()
        .equals(other.getAppId())) return false;
    if (!getOpenId()
        .equals(other.getOpenId())) return false;
    if (!getUnionId()
        .equals(other.getUnionId())) return false;
    if (hasNickname() != other.hasNickname()) return false;
    if (hasNickname()) {
      if (!getNickname()
          .equals(other.getNickname())) return false;
    }
    if (hasAvatarUrl() != other.hasAvatarUrl()) return false;
    if (hasAvatarUrl()) {
      if (!getAvatarUrl()
          .equals(other.getAvatarUrl())) return false;
    }
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
    hash = (37 * hash) + APP_ID_FIELD_NUMBER;
    hash = (53 * hash) + getAppId().hashCode();
    hash = (37 * hash) + OPEN_ID_FIELD_NUMBER;
    hash = (53 * hash) + getOpenId().hashCode();
    hash = (37 * hash) + UNION_ID_FIELD_NUMBER;
    hash = (53 * hash) + getUnionId().hashCode();
    if (hasNickname()) {
      hash = (37 * hash) + NICKNAME_FIELD_NUMBER;
      hash = (53 * hash) + getNickname().hashCode();
    }
    if (hasAvatarUrl()) {
      hash = (37 * hash) + AVATAR_URL_FIELD_NUMBER;
      hash = (53 * hash) + getAvatarUrl().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser prototype) {
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
   * Protobuf type {@code palm.auth.v1.WechatMiniProgramUser}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.auth.v1.WechatMiniProgramUser)
      com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUserOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.auth.v1.Auth.internal_static_palm_auth_v1_WechatMiniProgramUser_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.auth.v1.Auth.internal_static_palm_auth_v1_WechatMiniProgramUser_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser.class, com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser.newBuilder()
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
      appId_ = "";
      openId_ = "";
      unionId_ = "";
      nickname_ = "";
      avatarUrl_ = "";
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.auth.v1.Auth.internal_static_palm_auth_v1_WechatMiniProgramUser_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser build() {
      com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser buildPartial() {
      com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser result = new com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.appId_ = appId_;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.openId_ = openId_;
      }
      if (((from_bitField0_ & 0x00000004) != 0)) {
        result.unionId_ = unionId_;
      }
      int to_bitField0_ = 0;
      if (((from_bitField0_ & 0x00000008) != 0)) {
        result.nickname_ = nickname_;
        to_bitField0_ |= 0x00000001;
      }
      if (((from_bitField0_ & 0x00000010) != 0)) {
        result.avatarUrl_ = avatarUrl_;
        to_bitField0_ |= 0x00000002;
      }
      result.bitField0_ |= to_bitField0_;
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
      if (other instanceof com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser other) {
      if (other == com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser.getDefaultInstance()) return this;
      if (!other.getAppId().isEmpty()) {
        appId_ = other.appId_;
        bitField0_ |= 0x00000001;
        onChanged();
      }
      if (!other.getOpenId().isEmpty()) {
        openId_ = other.openId_;
        bitField0_ |= 0x00000002;
        onChanged();
      }
      if (!other.getUnionId().isEmpty()) {
        unionId_ = other.unionId_;
        bitField0_ |= 0x00000004;
        onChanged();
      }
      if (other.hasNickname()) {
        nickname_ = other.nickname_;
        bitField0_ |= 0x00000008;
        onChanged();
      }
      if (other.hasAvatarUrl()) {
        avatarUrl_ = other.avatarUrl_;
        bitField0_ |= 0x00000010;
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
            case 90: {
              appId_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000001;
              break;
            } // case 90
            case 98: {
              openId_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000002;
              break;
            } // case 98
            case 106: {
              unionId_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000004;
              break;
            } // case 106
            case 170: {
              nickname_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000008;
              break;
            } // case 170
            case 178: {
              avatarUrl_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000010;
              break;
            } // case 178
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

    private java.lang.Object appId_ = "";
    /**
     * <code>string app_id = 11;</code>
     * @return The appId.
     */
    public java.lang.String getAppId() {
      java.lang.Object ref = appId_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        appId_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string app_id = 11;</code>
     * @return The bytes for appId.
     */
    public com.google.protobuf.ByteString
        getAppIdBytes() {
      java.lang.Object ref = appId_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        appId_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string app_id = 11;</code>
     * @param value The appId to set.
     * @return This builder for chaining.
     */
    public Builder setAppId(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      appId_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>string app_id = 11;</code>
     * @return This builder for chaining.
     */
    public Builder clearAppId() {
      appId_ = getDefaultInstance().getAppId();
      bitField0_ = (bitField0_ & ~0x00000001);
      onChanged();
      return this;
    }
    /**
     * <code>string app_id = 11;</code>
     * @param value The bytes for appId to set.
     * @return This builder for chaining.
     */
    public Builder setAppIdBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      appId_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }

    private java.lang.Object openId_ = "";
    /**
     * <code>string open_id = 12;</code>
     * @return The openId.
     */
    public java.lang.String getOpenId() {
      java.lang.Object ref = openId_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        openId_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string open_id = 12;</code>
     * @return The bytes for openId.
     */
    public com.google.protobuf.ByteString
        getOpenIdBytes() {
      java.lang.Object ref = openId_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        openId_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string open_id = 12;</code>
     * @param value The openId to set.
     * @return This builder for chaining.
     */
    public Builder setOpenId(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      openId_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>string open_id = 12;</code>
     * @return This builder for chaining.
     */
    public Builder clearOpenId() {
      openId_ = getDefaultInstance().getOpenId();
      bitField0_ = (bitField0_ & ~0x00000002);
      onChanged();
      return this;
    }
    /**
     * <code>string open_id = 12;</code>
     * @param value The bytes for openId to set.
     * @return This builder for chaining.
     */
    public Builder setOpenIdBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      openId_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }

    private java.lang.Object unionId_ = "";
    /**
     * <code>string union_id = 13;</code>
     * @return The unionId.
     */
    public java.lang.String getUnionId() {
      java.lang.Object ref = unionId_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        unionId_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string union_id = 13;</code>
     * @return The bytes for unionId.
     */
    public com.google.protobuf.ByteString
        getUnionIdBytes() {
      java.lang.Object ref = unionId_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        unionId_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string union_id = 13;</code>
     * @param value The unionId to set.
     * @return This builder for chaining.
     */
    public Builder setUnionId(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      unionId_ = value;
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>string union_id = 13;</code>
     * @return This builder for chaining.
     */
    public Builder clearUnionId() {
      unionId_ = getDefaultInstance().getUnionId();
      bitField0_ = (bitField0_ & ~0x00000004);
      onChanged();
      return this;
    }
    /**
     * <code>string union_id = 13;</code>
     * @param value The bytes for unionId to set.
     * @return This builder for chaining.
     */
    public Builder setUnionIdBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      unionId_ = value;
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }

    private java.lang.Object nickname_ = "";
    /**
     * <code>optional string nickname = 21;</code>
     * @return Whether the nickname field is set.
     */
    public boolean hasNickname() {
      return ((bitField0_ & 0x00000008) != 0);
    }
    /**
     * <code>optional string nickname = 21;</code>
     * @return The nickname.
     */
    public java.lang.String getNickname() {
      java.lang.Object ref = nickname_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        nickname_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>optional string nickname = 21;</code>
     * @return The bytes for nickname.
     */
    public com.google.protobuf.ByteString
        getNicknameBytes() {
      java.lang.Object ref = nickname_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        nickname_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>optional string nickname = 21;</code>
     * @param value The nickname to set.
     * @return This builder for chaining.
     */
    public Builder setNickname(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      nickname_ = value;
      bitField0_ |= 0x00000008;
      onChanged();
      return this;
    }
    /**
     * <code>optional string nickname = 21;</code>
     * @return This builder for chaining.
     */
    public Builder clearNickname() {
      nickname_ = getDefaultInstance().getNickname();
      bitField0_ = (bitField0_ & ~0x00000008);
      onChanged();
      return this;
    }
    /**
     * <code>optional string nickname = 21;</code>
     * @param value The bytes for nickname to set.
     * @return This builder for chaining.
     */
    public Builder setNicknameBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      nickname_ = value;
      bitField0_ |= 0x00000008;
      onChanged();
      return this;
    }

    private java.lang.Object avatarUrl_ = "";
    /**
     * <code>optional string avatar_url = 22;</code>
     * @return Whether the avatarUrl field is set.
     */
    public boolean hasAvatarUrl() {
      return ((bitField0_ & 0x00000010) != 0);
    }
    /**
     * <code>optional string avatar_url = 22;</code>
     * @return The avatarUrl.
     */
    public java.lang.String getAvatarUrl() {
      java.lang.Object ref = avatarUrl_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        avatarUrl_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>optional string avatar_url = 22;</code>
     * @return The bytes for avatarUrl.
     */
    public com.google.protobuf.ByteString
        getAvatarUrlBytes() {
      java.lang.Object ref = avatarUrl_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        avatarUrl_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>optional string avatar_url = 22;</code>
     * @param value The avatarUrl to set.
     * @return This builder for chaining.
     */
    public Builder setAvatarUrl(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      avatarUrl_ = value;
      bitField0_ |= 0x00000010;
      onChanged();
      return this;
    }
    /**
     * <code>optional string avatar_url = 22;</code>
     * @return This builder for chaining.
     */
    public Builder clearAvatarUrl() {
      avatarUrl_ = getDefaultInstance().getAvatarUrl();
      bitField0_ = (bitField0_ & ~0x00000010);
      onChanged();
      return this;
    }
    /**
     * <code>optional string avatar_url = 22;</code>
     * @param value The bytes for avatarUrl to set.
     * @return This builder for chaining.
     */
    public Builder setAvatarUrlBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      avatarUrl_ = value;
      bitField0_ |= 0x00000010;
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


    // @@protoc_insertion_point(builder_scope:palm.auth.v1.WechatMiniProgramUser)
  }

  // @@protoc_insertion_point(class_scope:palm.auth.v1.WechatMiniProgramUser)
  private static final com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser();
  }

  public static com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<WechatMiniProgramUser>
      PARSER = new com.google.protobuf.AbstractParser<WechatMiniProgramUser>() {
    @java.lang.Override
    public WechatMiniProgramUser parsePartialFrom(
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

  public static com.google.protobuf.Parser<WechatMiniProgramUser> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<WechatMiniProgramUser> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.auth.v1.WechatMiniProgramUser getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
