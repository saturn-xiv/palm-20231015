// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: nut.proto

package com.github.saturn_xiv.palm.plugins.nut.v1;

/**
 * Protobuf type {@code palm.nut.v1.UserQueryRequest}
 */
public final class UserQueryRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.nut.v1.UserQueryRequest)
    UserQueryRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use UserQueryRequest.newBuilder() to construct.
  private UserQueryRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private UserQueryRequest() {
    home_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new UserQueryRequest();
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.internal_static_palm_nut_v1_UserQueryRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.internal_static_palm_nut_v1_UserQueryRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest.class, com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest.Builder.class);
  }

  private int userCase_ = 0;
  @SuppressWarnings("serial")
  private java.lang.Object user_;
  public enum UserCase
      implements com.google.protobuf.Internal.EnumLite,
          com.google.protobuf.AbstractMessage.InternalOneOfEnum {
    NICKNAME(1),
    EMAIL(2),
    USER_NOT_SET(0);
    private final int value;
    private UserCase(int value) {
      this.value = value;
    }
    /**
     * @param value The number of the enum to look for.
     * @return The enum associated with the given number.
     * @deprecated Use {@link #forNumber(int)} instead.
     */
    @java.lang.Deprecated
    public static UserCase valueOf(int value) {
      return forNumber(value);
    }

    public static UserCase forNumber(int value) {
      switch (value) {
        case 1: return NICKNAME;
        case 2: return EMAIL;
        case 0: return USER_NOT_SET;
        default: return null;
      }
    }
    public int getNumber() {
      return this.value;
    }
  };

  public UserCase
  getUserCase() {
    return UserCase.forNumber(
        userCase_);
  }

  public static final int NICKNAME_FIELD_NUMBER = 1;
  /**
   * <code>string nickname = 1;</code>
   * @return Whether the nickname field is set.
   */
  public boolean hasNickname() {
    return userCase_ == 1;
  }
  /**
   * <code>string nickname = 1;</code>
   * @return The nickname.
   */
  public java.lang.String getNickname() {
    java.lang.Object ref = "";
    if (userCase_ == 1) {
      ref = user_;
    }
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      if (userCase_ == 1) {
        user_ = s;
      }
      return s;
    }
  }
  /**
   * <code>string nickname = 1;</code>
   * @return The bytes for nickname.
   */
  public com.google.protobuf.ByteString
      getNicknameBytes() {
    java.lang.Object ref = "";
    if (userCase_ == 1) {
      ref = user_;
    }
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      if (userCase_ == 1) {
        user_ = b;
      }
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int EMAIL_FIELD_NUMBER = 2;
  /**
   * <code>string email = 2;</code>
   * @return Whether the email field is set.
   */
  public boolean hasEmail() {
    return userCase_ == 2;
  }
  /**
   * <code>string email = 2;</code>
   * @return The email.
   */
  public java.lang.String getEmail() {
    java.lang.Object ref = "";
    if (userCase_ == 2) {
      ref = user_;
    }
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      if (userCase_ == 2) {
        user_ = s;
      }
      return s;
    }
  }
  /**
   * <code>string email = 2;</code>
   * @return The bytes for email.
   */
  public com.google.protobuf.ByteString
      getEmailBytes() {
    java.lang.Object ref = "";
    if (userCase_ == 2) {
      ref = user_;
    }
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      if (userCase_ == 2) {
        user_ = b;
      }
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int HOME_FIELD_NUMBER = 9;
  @SuppressWarnings("serial")
  private volatile java.lang.Object home_ = "";
  /**
   * <code>string home = 9;</code>
   * @return The home.
   */
  @java.lang.Override
  public java.lang.String getHome() {
    java.lang.Object ref = home_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      home_ = s;
      return s;
    }
  }
  /**
   * <code>string home = 9;</code>
   * @return The bytes for home.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getHomeBytes() {
    java.lang.Object ref = home_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      home_ = b;
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
    if (userCase_ == 1) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, user_);
    }
    if (userCase_ == 2) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, user_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(home_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 9, home_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (userCase_ == 1) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, user_);
    }
    if (userCase_ == 2) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, user_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(home_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(9, home_);
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest other = (com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest) obj;

    if (!getHome()
        .equals(other.getHome())) return false;
    if (!getUserCase().equals(other.getUserCase())) return false;
    switch (userCase_) {
      case 1:
        if (!getNickname()
            .equals(other.getNickname())) return false;
        break;
      case 2:
        if (!getEmail()
            .equals(other.getEmail())) return false;
        break;
      case 0:
      default:
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
    hash = (37 * hash) + HOME_FIELD_NUMBER;
    hash = (53 * hash) + getHome().hashCode();
    switch (userCase_) {
      case 1:
        hash = (37 * hash) + NICKNAME_FIELD_NUMBER;
        hash = (53 * hash) + getNickname().hashCode();
        break;
      case 2:
        hash = (37 * hash) + EMAIL_FIELD_NUMBER;
        hash = (53 * hash) + getEmail().hashCode();
        break;
      case 0:
      default:
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest prototype) {
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
   * Protobuf type {@code palm.nut.v1.UserQueryRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.nut.v1.UserQueryRequest)
      com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.internal_static_palm_nut_v1_UserQueryRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.internal_static_palm_nut_v1_UserQueryRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest.class, com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest.newBuilder()
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
      home_ = "";
      userCase_ = 0;
      user_ = null;
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.internal_static_palm_nut_v1_UserQueryRequest_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest build() {
      com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest buildPartial() {
      com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest result = new com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      buildPartialOneofs(result);
      onBuilt();
      return result;
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000004) != 0)) {
        result.home_ = home_;
      }
    }

    private void buildPartialOneofs(com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest result) {
      result.userCase_ = userCase_;
      result.user_ = this.user_;
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
      if (other instanceof com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest other) {
      if (other == com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest.getDefaultInstance()) return this;
      if (!other.getHome().isEmpty()) {
        home_ = other.home_;
        bitField0_ |= 0x00000004;
        onChanged();
      }
      switch (other.getUserCase()) {
        case NICKNAME: {
          userCase_ = 1;
          user_ = other.user_;
          onChanged();
          break;
        }
        case EMAIL: {
          userCase_ = 2;
          user_ = other.user_;
          onChanged();
          break;
        }
        case USER_NOT_SET: {
          break;
        }
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
              java.lang.String s = input.readStringRequireUtf8();
              userCase_ = 1;
              user_ = s;
              break;
            } // case 10
            case 18: {
              java.lang.String s = input.readStringRequireUtf8();
              userCase_ = 2;
              user_ = s;
              break;
            } // case 18
            case 74: {
              home_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000004;
              break;
            } // case 74
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
    private int userCase_ = 0;
    private java.lang.Object user_;
    public UserCase
        getUserCase() {
      return UserCase.forNumber(
          userCase_);
    }

    public Builder clearUser() {
      userCase_ = 0;
      user_ = null;
      onChanged();
      return this;
    }

    private int bitField0_;

    /**
     * <code>string nickname = 1;</code>
     * @return Whether the nickname field is set.
     */
    @java.lang.Override
    public boolean hasNickname() {
      return userCase_ == 1;
    }
    /**
     * <code>string nickname = 1;</code>
     * @return The nickname.
     */
    @java.lang.Override
    public java.lang.String getNickname() {
      java.lang.Object ref = "";
      if (userCase_ == 1) {
        ref = user_;
      }
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        if (userCase_ == 1) {
          user_ = s;
        }
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string nickname = 1;</code>
     * @return The bytes for nickname.
     */
    @java.lang.Override
    public com.google.protobuf.ByteString
        getNicknameBytes() {
      java.lang.Object ref = "";
      if (userCase_ == 1) {
        ref = user_;
      }
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        if (userCase_ == 1) {
          user_ = b;
        }
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string nickname = 1;</code>
     * @param value The nickname to set.
     * @return This builder for chaining.
     */
    public Builder setNickname(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      userCase_ = 1;
      user_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string nickname = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearNickname() {
      if (userCase_ == 1) {
        userCase_ = 0;
        user_ = null;
        onChanged();
      }
      return this;
    }
    /**
     * <code>string nickname = 1;</code>
     * @param value The bytes for nickname to set.
     * @return This builder for chaining.
     */
    public Builder setNicknameBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      userCase_ = 1;
      user_ = value;
      onChanged();
      return this;
    }

    /**
     * <code>string email = 2;</code>
     * @return Whether the email field is set.
     */
    @java.lang.Override
    public boolean hasEmail() {
      return userCase_ == 2;
    }
    /**
     * <code>string email = 2;</code>
     * @return The email.
     */
    @java.lang.Override
    public java.lang.String getEmail() {
      java.lang.Object ref = "";
      if (userCase_ == 2) {
        ref = user_;
      }
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        if (userCase_ == 2) {
          user_ = s;
        }
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string email = 2;</code>
     * @return The bytes for email.
     */
    @java.lang.Override
    public com.google.protobuf.ByteString
        getEmailBytes() {
      java.lang.Object ref = "";
      if (userCase_ == 2) {
        ref = user_;
      }
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        if (userCase_ == 2) {
          user_ = b;
        }
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string email = 2;</code>
     * @param value The email to set.
     * @return This builder for chaining.
     */
    public Builder setEmail(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      userCase_ = 2;
      user_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string email = 2;</code>
     * @return This builder for chaining.
     */
    public Builder clearEmail() {
      if (userCase_ == 2) {
        userCase_ = 0;
        user_ = null;
        onChanged();
      }
      return this;
    }
    /**
     * <code>string email = 2;</code>
     * @param value The bytes for email to set.
     * @return This builder for chaining.
     */
    public Builder setEmailBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      userCase_ = 2;
      user_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object home_ = "";
    /**
     * <code>string home = 9;</code>
     * @return The home.
     */
    public java.lang.String getHome() {
      java.lang.Object ref = home_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        home_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string home = 9;</code>
     * @return The bytes for home.
     */
    public com.google.protobuf.ByteString
        getHomeBytes() {
      java.lang.Object ref = home_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        home_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string home = 9;</code>
     * @param value The home to set.
     * @return This builder for chaining.
     */
    public Builder setHome(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      home_ = value;
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>string home = 9;</code>
     * @return This builder for chaining.
     */
    public Builder clearHome() {
      home_ = getDefaultInstance().getHome();
      bitField0_ = (bitField0_ & ~0x00000004);
      onChanged();
      return this;
    }
    /**
     * <code>string home = 9;</code>
     * @param value The bytes for home to set.
     * @return This builder for chaining.
     */
    public Builder setHomeBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      home_ = value;
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


    // @@protoc_insertion_point(builder_scope:palm.nut.v1.UserQueryRequest)
  }

  // @@protoc_insertion_point(class_scope:palm.nut.v1.UserQueryRequest)
  private static final com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest();
  }

  public static com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<UserQueryRequest>
      PARSER = new com.google.protobuf.AbstractParser<UserQueryRequest>() {
    @java.lang.Override
    public UserQueryRequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<UserQueryRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<UserQueryRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.nut.v1.UserQueryRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

