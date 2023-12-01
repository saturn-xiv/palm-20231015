// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: metasequoia.proto

// Protobuf Java Version: 3.25.0
package com.github.saturn_xiv.palm.plugins.metasequoia.v1;

/**
 * Protobuf type {@code palm.metasequoia.v1.RbacPermissionsForUserRequest}
 */
public final class RbacPermissionsForUserRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.metasequoia.v1.RbacPermissionsForUserRequest)
    RbacPermissionsForUserRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use RbacPermissionsForUserRequest.newBuilder() to construct.
  private RbacPermissionsForUserRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private RbacPermissionsForUserRequest() {
    permissions_ = java.util.Collections.emptyList();
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new RbacPermissionsForUserRequest();
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_RbacPermissionsForUserRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_RbacPermissionsForUserRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest.class, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest.Builder.class);
  }

  public static final int USER_FIELD_NUMBER = 1;
  private int user_ = 0;
  /**
   * <code>int32 user = 1;</code>
   * @return The user.
   */
  @java.lang.Override
  public int getUser() {
    return user_;
  }

  public static final int PERMISSIONS_FIELD_NUMBER = 2;
  @SuppressWarnings("serial")
  private java.util.List<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem> permissions_;
  /**
   * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
   */
  @java.lang.Override
  public java.util.List<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem> getPermissionsList() {
    return permissions_;
  }
  /**
   * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
   */
  @java.lang.Override
  public java.util.List<? extends com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItemOrBuilder> 
      getPermissionsOrBuilderList() {
    return permissions_;
  }
  /**
   * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
   */
  @java.lang.Override
  public int getPermissionsCount() {
    return permissions_.size();
  }
  /**
   * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
   */
  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem getPermissions(int index) {
    return permissions_.get(index);
  }
  /**
   * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
   */
  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItemOrBuilder getPermissionsOrBuilder(
      int index) {
    return permissions_.get(index);
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
    if (user_ != 0) {
      output.writeInt32(1, user_);
    }
    for (int i = 0; i < permissions_.size(); i++) {
      output.writeMessage(2, permissions_.get(i));
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (user_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt32Size(1, user_);
    }
    for (int i = 0; i < permissions_.size(); i++) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, permissions_.get(i));
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest other = (com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest) obj;

    if (getUser()
        != other.getUser()) return false;
    if (!getPermissionsList()
        .equals(other.getPermissionsList())) return false;
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
    hash = (37 * hash) + USER_FIELD_NUMBER;
    hash = (53 * hash) + getUser();
    if (getPermissionsCount() > 0) {
      hash = (37 * hash) + PERMISSIONS_FIELD_NUMBER;
      hash = (53 * hash) + getPermissionsList().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest prototype) {
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
   * Protobuf type {@code palm.metasequoia.v1.RbacPermissionsForUserRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.metasequoia.v1.RbacPermissionsForUserRequest)
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_RbacPermissionsForUserRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_RbacPermissionsForUserRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest.class, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest.newBuilder()
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
      user_ = 0;
      if (permissionsBuilder_ == null) {
        permissions_ = java.util.Collections.emptyList();
      } else {
        permissions_ = null;
        permissionsBuilder_.clear();
      }
      bitField0_ = (bitField0_ & ~0x00000002);
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_RbacPermissionsForUserRequest_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest build() {
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest buildPartial() {
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest result = new com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest(this);
      buildPartialRepeatedFields(result);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartialRepeatedFields(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest result) {
      if (permissionsBuilder_ == null) {
        if (((bitField0_ & 0x00000002) != 0)) {
          permissions_ = java.util.Collections.unmodifiableList(permissions_);
          bitField0_ = (bitField0_ & ~0x00000002);
        }
        result.permissions_ = permissions_;
      } else {
        result.permissions_ = permissionsBuilder_.build();
      }
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.user_ = user_;
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
      if (other instanceof com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest other) {
      if (other == com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest.getDefaultInstance()) return this;
      if (other.getUser() != 0) {
        setUser(other.getUser());
      }
      if (permissionsBuilder_ == null) {
        if (!other.permissions_.isEmpty()) {
          if (permissions_.isEmpty()) {
            permissions_ = other.permissions_;
            bitField0_ = (bitField0_ & ~0x00000002);
          } else {
            ensurePermissionsIsMutable();
            permissions_.addAll(other.permissions_);
          }
          onChanged();
        }
      } else {
        if (!other.permissions_.isEmpty()) {
          if (permissionsBuilder_.isEmpty()) {
            permissionsBuilder_.dispose();
            permissionsBuilder_ = null;
            permissions_ = other.permissions_;
            bitField0_ = (bitField0_ & ~0x00000002);
            permissionsBuilder_ = 
              com.google.protobuf.GeneratedMessageV3.alwaysUseFieldBuilders ?
                 getPermissionsFieldBuilder() : null;
          } else {
            permissionsBuilder_.addAllMessages(other.permissions_);
          }
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
            case 8: {
              user_ = input.readInt32();
              bitField0_ |= 0x00000001;
              break;
            } // case 8
            case 18: {
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem m =
                  input.readMessage(
                      com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem.parser(),
                      extensionRegistry);
              if (permissionsBuilder_ == null) {
                ensurePermissionsIsMutable();
                permissions_.add(m);
              } else {
                permissionsBuilder_.addMessage(m);
              }
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

    private int user_ ;
    /**
     * <code>int32 user = 1;</code>
     * @return The user.
     */
    @java.lang.Override
    public int getUser() {
      return user_;
    }
    /**
     * <code>int32 user = 1;</code>
     * @param value The user to set.
     * @return This builder for chaining.
     */
    public Builder setUser(int value) {

      user_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>int32 user = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearUser() {
      bitField0_ = (bitField0_ & ~0x00000001);
      user_ = 0;
      onChanged();
      return this;
    }

    private java.util.List<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem> permissions_ =
      java.util.Collections.emptyList();
    private void ensurePermissionsIsMutable() {
      if (!((bitField0_ & 0x00000002) != 0)) {
        permissions_ = new java.util.ArrayList<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem>(permissions_);
        bitField0_ |= 0x00000002;
       }
    }

    private com.google.protobuf.RepeatedFieldBuilderV3<
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem.Builder, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItemOrBuilder> permissionsBuilder_;

    /**
     * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
     */
    public java.util.List<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem> getPermissionsList() {
      if (permissionsBuilder_ == null) {
        return java.util.Collections.unmodifiableList(permissions_);
      } else {
        return permissionsBuilder_.getMessageList();
      }
    }
    /**
     * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
     */
    public int getPermissionsCount() {
      if (permissionsBuilder_ == null) {
        return permissions_.size();
      } else {
        return permissionsBuilder_.getCount();
      }
    }
    /**
     * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem getPermissions(int index) {
      if (permissionsBuilder_ == null) {
        return permissions_.get(index);
      } else {
        return permissionsBuilder_.getMessage(index);
      }
    }
    /**
     * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
     */
    public Builder setPermissions(
        int index, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem value) {
      if (permissionsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensurePermissionsIsMutable();
        permissions_.set(index, value);
        onChanged();
      } else {
        permissionsBuilder_.setMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
     */
    public Builder setPermissions(
        int index, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem.Builder builderForValue) {
      if (permissionsBuilder_ == null) {
        ensurePermissionsIsMutable();
        permissions_.set(index, builderForValue.build());
        onChanged();
      } else {
        permissionsBuilder_.setMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
     */
    public Builder addPermissions(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem value) {
      if (permissionsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensurePermissionsIsMutable();
        permissions_.add(value);
        onChanged();
      } else {
        permissionsBuilder_.addMessage(value);
      }
      return this;
    }
    /**
     * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
     */
    public Builder addPermissions(
        int index, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem value) {
      if (permissionsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensurePermissionsIsMutable();
        permissions_.add(index, value);
        onChanged();
      } else {
        permissionsBuilder_.addMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
     */
    public Builder addPermissions(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem.Builder builderForValue) {
      if (permissionsBuilder_ == null) {
        ensurePermissionsIsMutable();
        permissions_.add(builderForValue.build());
        onChanged();
      } else {
        permissionsBuilder_.addMessage(builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
     */
    public Builder addPermissions(
        int index, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem.Builder builderForValue) {
      if (permissionsBuilder_ == null) {
        ensurePermissionsIsMutable();
        permissions_.add(index, builderForValue.build());
        onChanged();
      } else {
        permissionsBuilder_.addMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
     */
    public Builder addAllPermissions(
        java.lang.Iterable<? extends com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem> values) {
      if (permissionsBuilder_ == null) {
        ensurePermissionsIsMutable();
        com.google.protobuf.AbstractMessageLite.Builder.addAll(
            values, permissions_);
        onChanged();
      } else {
        permissionsBuilder_.addAllMessages(values);
      }
      return this;
    }
    /**
     * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
     */
    public Builder clearPermissions() {
      if (permissionsBuilder_ == null) {
        permissions_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000002);
        onChanged();
      } else {
        permissionsBuilder_.clear();
      }
      return this;
    }
    /**
     * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
     */
    public Builder removePermissions(int index) {
      if (permissionsBuilder_ == null) {
        ensurePermissionsIsMutable();
        permissions_.remove(index);
        onChanged();
      } else {
        permissionsBuilder_.remove(index);
      }
      return this;
    }
    /**
     * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem.Builder getPermissionsBuilder(
        int index) {
      return getPermissionsFieldBuilder().getBuilder(index);
    }
    /**
     * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItemOrBuilder getPermissionsOrBuilder(
        int index) {
      if (permissionsBuilder_ == null) {
        return permissions_.get(index);  } else {
        return permissionsBuilder_.getMessageOrBuilder(index);
      }
    }
    /**
     * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
     */
    public java.util.List<? extends com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItemOrBuilder> 
         getPermissionsOrBuilderList() {
      if (permissionsBuilder_ != null) {
        return permissionsBuilder_.getMessageOrBuilderList();
      } else {
        return java.util.Collections.unmodifiableList(permissions_);
      }
    }
    /**
     * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem.Builder addPermissionsBuilder() {
      return getPermissionsFieldBuilder().addBuilder(
          com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem.getDefaultInstance());
    }
    /**
     * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem.Builder addPermissionsBuilder(
        int index) {
      return getPermissionsFieldBuilder().addBuilder(
          index, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem.getDefaultInstance());
    }
    /**
     * <code>repeated .palm.metasequoia.v1.RbacPermissionItem permissions = 2;</code>
     */
    public java.util.List<com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem.Builder> 
         getPermissionsBuilderList() {
      return getPermissionsFieldBuilder().getBuilderList();
    }
    private com.google.protobuf.RepeatedFieldBuilderV3<
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem.Builder, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItemOrBuilder> 
        getPermissionsFieldBuilder() {
      if (permissionsBuilder_ == null) {
        permissionsBuilder_ = new com.google.protobuf.RepeatedFieldBuilderV3<
            com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItem.Builder, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionItemOrBuilder>(
                permissions_,
                ((bitField0_ & 0x00000002) != 0),
                getParentForChildren(),
                isClean());
        permissions_ = null;
      }
      return permissionsBuilder_;
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


    // @@protoc_insertion_point(builder_scope:palm.metasequoia.v1.RbacPermissionsForUserRequest)
  }

  // @@protoc_insertion_point(class_scope:palm.metasequoia.v1.RbacPermissionsForUserRequest)
  private static final com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest();
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<RbacPermissionsForUserRequest>
      PARSER = new com.google.protobuf.AbstractParser<RbacPermissionsForUserRequest>() {
    @java.lang.Override
    public RbacPermissionsForUserRequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<RbacPermissionsForUserRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<RbacPermissionsForUserRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForUserRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

