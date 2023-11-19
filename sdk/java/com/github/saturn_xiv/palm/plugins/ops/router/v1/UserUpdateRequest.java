// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ops-router.proto

package com.github.saturn_xiv.palm.plugins.ops.router.v1;

/**
 * Protobuf type {@code palm.ops.router.v1.UserUpdateRequest}
 */
public final class UserUpdateRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.ops.router.v1.UserUpdateRequest)
    UserUpdateRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use UserUpdateRequest.newBuilder() to construct.
  private UserUpdateRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private UserUpdateRequest() {
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new UserUpdateRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.internal_static_palm_ops_router_v1_UserUpdateRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.internal_static_palm_ops_router_v1_UserUpdateRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest.class, com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest.Builder.class);
  }

  public static final int CURRENT_FIELD_NUMBER = 1;
  private com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile current_;
  /**
   * <code>.palm.ops.router.v1.UserProfile current = 1;</code>
   * @return Whether the current field is set.
   */
  @java.lang.Override
  public boolean hasCurrent() {
    return current_ != null;
  }
  /**
   * <code>.palm.ops.router.v1.UserProfile current = 1;</code>
   * @return The current.
   */
  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile getCurrent() {
    return current_ == null ? com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile.getDefaultInstance() : current_;
  }
  /**
   * <code>.palm.ops.router.v1.UserProfile current = 1;</code>
   */
  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfileOrBuilder getCurrentOrBuilder() {
    return current_ == null ? com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile.getDefaultInstance() : current_;
  }

  public static final int NEW_FIELD_NUMBER = 2;
  private com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile new_;
  /**
   * <code>.palm.ops.router.v1.UserProfile new = 2;</code>
   * @return Whether the new field is set.
   */
  @java.lang.Override
  public boolean hasNew() {
    return new_ != null;
  }
  /**
   * <code>.palm.ops.router.v1.UserProfile new = 2;</code>
   * @return The new.
   */
  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile getNew() {
    return new_ == null ? com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile.getDefaultInstance() : new_;
  }
  /**
   * <code>.palm.ops.router.v1.UserProfile new = 2;</code>
   */
  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfileOrBuilder getNewOrBuilder() {
    return new_ == null ? com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile.getDefaultInstance() : new_;
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
    if (current_ != null) {
      output.writeMessage(1, getCurrent());
    }
    if (new_ != null) {
      output.writeMessage(2, getNew());
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (current_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getCurrent());
    }
    if (new_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, getNew());
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest other = (com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest) obj;

    if (hasCurrent() != other.hasCurrent()) return false;
    if (hasCurrent()) {
      if (!getCurrent()
          .equals(other.getCurrent())) return false;
    }
    if (hasNew() != other.hasNew()) return false;
    if (hasNew()) {
      if (!getNew()
          .equals(other.getNew())) return false;
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
    if (hasCurrent()) {
      hash = (37 * hash) + CURRENT_FIELD_NUMBER;
      hash = (53 * hash) + getCurrent().hashCode();
    }
    if (hasNew()) {
      hash = (37 * hash) + NEW_FIELD_NUMBER;
      hash = (53 * hash) + getNew().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest prototype) {
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
   * Protobuf type {@code palm.ops.router.v1.UserUpdateRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.ops.router.v1.UserUpdateRequest)
      com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.internal_static_palm_ops_router_v1_UserUpdateRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.internal_static_palm_ops_router_v1_UserUpdateRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest.class, com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest.newBuilder()
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
      current_ = null;
      if (currentBuilder_ != null) {
        currentBuilder_.dispose();
        currentBuilder_ = null;
      }
      new_ = null;
      if (newBuilder_ != null) {
        newBuilder_.dispose();
        newBuilder_ = null;
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.internal_static_palm_ops_router_v1_UserUpdateRequest_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest build() {
      com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest buildPartial() {
      com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest result = new com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.current_ = currentBuilder_ == null
            ? current_
            : currentBuilder_.build();
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.new_ = newBuilder_ == null
            ? new_
            : newBuilder_.build();
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
      if (other instanceof com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest other) {
      if (other == com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest.getDefaultInstance()) return this;
      if (other.hasCurrent()) {
        mergeCurrent(other.getCurrent());
      }
      if (other.hasNew()) {
        mergeNew(other.getNew());
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
              input.readMessage(
                  getCurrentFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 18: {
              input.readMessage(
                  getNewFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000002;
              break;
            } // case 18
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

    private com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile current_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile, com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile.Builder, com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfileOrBuilder> currentBuilder_;
    /**
     * <code>.palm.ops.router.v1.UserProfile current = 1;</code>
     * @return Whether the current field is set.
     */
    public boolean hasCurrent() {
      return ((bitField0_ & 0x00000001) != 0);
    }
    /**
     * <code>.palm.ops.router.v1.UserProfile current = 1;</code>
     * @return The current.
     */
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile getCurrent() {
      if (currentBuilder_ == null) {
        return current_ == null ? com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile.getDefaultInstance() : current_;
      } else {
        return currentBuilder_.getMessage();
      }
    }
    /**
     * <code>.palm.ops.router.v1.UserProfile current = 1;</code>
     */
    public Builder setCurrent(com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile value) {
      if (currentBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        current_ = value;
      } else {
        currentBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>.palm.ops.router.v1.UserProfile current = 1;</code>
     */
    public Builder setCurrent(
        com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile.Builder builderForValue) {
      if (currentBuilder_ == null) {
        current_ = builderForValue.build();
      } else {
        currentBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>.palm.ops.router.v1.UserProfile current = 1;</code>
     */
    public Builder mergeCurrent(com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile value) {
      if (currentBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0) &&
          current_ != null &&
          current_ != com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile.getDefaultInstance()) {
          getCurrentBuilder().mergeFrom(value);
        } else {
          current_ = value;
        }
      } else {
        currentBuilder_.mergeFrom(value);
      }
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>.palm.ops.router.v1.UserProfile current = 1;</code>
     */
    public Builder clearCurrent() {
      bitField0_ = (bitField0_ & ~0x00000001);
      current_ = null;
      if (currentBuilder_ != null) {
        currentBuilder_.dispose();
        currentBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>.palm.ops.router.v1.UserProfile current = 1;</code>
     */
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile.Builder getCurrentBuilder() {
      bitField0_ |= 0x00000001;
      onChanged();
      return getCurrentFieldBuilder().getBuilder();
    }
    /**
     * <code>.palm.ops.router.v1.UserProfile current = 1;</code>
     */
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfileOrBuilder getCurrentOrBuilder() {
      if (currentBuilder_ != null) {
        return currentBuilder_.getMessageOrBuilder();
      } else {
        return current_ == null ?
            com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile.getDefaultInstance() : current_;
      }
    }
    /**
     * <code>.palm.ops.router.v1.UserProfile current = 1;</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile, com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile.Builder, com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfileOrBuilder> 
        getCurrentFieldBuilder() {
      if (currentBuilder_ == null) {
        currentBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile, com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile.Builder, com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfileOrBuilder>(
                getCurrent(),
                getParentForChildren(),
                isClean());
        current_ = null;
      }
      return currentBuilder_;
    }

    private com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile new_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile, com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile.Builder, com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfileOrBuilder> newBuilder_;
    /**
     * <code>.palm.ops.router.v1.UserProfile new = 2;</code>
     * @return Whether the new field is set.
     */
    public boolean hasNew() {
      return ((bitField0_ & 0x00000002) != 0);
    }
    /**
     * <code>.palm.ops.router.v1.UserProfile new = 2;</code>
     * @return The new.
     */
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile getNew() {
      if (newBuilder_ == null) {
        return new_ == null ? com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile.getDefaultInstance() : new_;
      } else {
        return newBuilder_.getMessage();
      }
    }
    /**
     * <code>.palm.ops.router.v1.UserProfile new = 2;</code>
     */
    public Builder setNew(com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile value) {
      if (newBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        new_ = value;
      } else {
        newBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>.palm.ops.router.v1.UserProfile new = 2;</code>
     */
    public Builder setNew(
        com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile.Builder builderForValue) {
      if (newBuilder_ == null) {
        new_ = builderForValue.build();
      } else {
        newBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>.palm.ops.router.v1.UserProfile new = 2;</code>
     */
    public Builder mergeNew(com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile value) {
      if (newBuilder_ == null) {
        if (((bitField0_ & 0x00000002) != 0) &&
          new_ != null &&
          new_ != com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile.getDefaultInstance()) {
          getNewBuilder().mergeFrom(value);
        } else {
          new_ = value;
        }
      } else {
        newBuilder_.mergeFrom(value);
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>.palm.ops.router.v1.UserProfile new = 2;</code>
     */
    public Builder clearNew() {
      bitField0_ = (bitField0_ & ~0x00000002);
      new_ = null;
      if (newBuilder_ != null) {
        newBuilder_.dispose();
        newBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>.palm.ops.router.v1.UserProfile new = 2;</code>
     */
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile.Builder getNewBuilder() {
      bitField0_ |= 0x00000002;
      onChanged();
      return getNewFieldBuilder().getBuilder();
    }
    /**
     * <code>.palm.ops.router.v1.UserProfile new = 2;</code>
     */
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfileOrBuilder getNewOrBuilder() {
      if (newBuilder_ != null) {
        return newBuilder_.getMessageOrBuilder();
      } else {
        return new_ == null ?
            com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile.getDefaultInstance() : new_;
      }
    }
    /**
     * <code>.palm.ops.router.v1.UserProfile new = 2;</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile, com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile.Builder, com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfileOrBuilder> 
        getNewFieldBuilder() {
      if (newBuilder_ == null) {
        newBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile, com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfile.Builder, com.github.saturn_xiv.palm.plugins.ops.router.v1.UserProfileOrBuilder>(
                getNew(),
                getParentForChildren(),
                isClean());
        new_ = null;
      }
      return newBuilder_;
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


    // @@protoc_insertion_point(builder_scope:palm.ops.router.v1.UserUpdateRequest)
  }

  // @@protoc_insertion_point(class_scope:palm.ops.router.v1.UserUpdateRequest)
  private static final com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest();
  }

  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<UserUpdateRequest>
      PARSER = new com.google.protobuf.AbstractParser<UserUpdateRequest>() {
    @java.lang.Override
    public UserUpdateRequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<UserUpdateRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<UserUpdateRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.ops.router.v1.UserUpdateRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
