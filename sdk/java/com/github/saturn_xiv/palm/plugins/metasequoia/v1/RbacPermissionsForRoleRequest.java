// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: metasequoia.proto

package com.github.saturn_xiv.palm.plugins.metasequoia.v1;

/**
 * Protobuf type {@code palm.metasequoia.v1.RbacPermissionsForRoleRequest}
 */
public final class RbacPermissionsForRoleRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.metasequoia.v1.RbacPermissionsForRoleRequest)
    RbacPermissionsForRoleRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use RbacPermissionsForRoleRequest.newBuilder() to construct.
  private RbacPermissionsForRoleRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private RbacPermissionsForRoleRequest() {
    permissions_ = java.util.Collections.emptyList();
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new RbacPermissionsForRoleRequest();
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_RbacPermissionsForRoleRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_RbacPermissionsForRoleRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest.class, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest.Builder.class);
  }

  private int bitField0_;
  public static final int ROLE_FIELD_NUMBER = 1;
  private com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role role_;
  /**
   * <code>.palm.metasequoia.v1.Role role = 1;</code>
   * @return Whether the role field is set.
   */
  @java.lang.Override
  public boolean hasRole() {
    return ((bitField0_ & 0x00000001) != 0);
  }
  /**
   * <code>.palm.metasequoia.v1.Role role = 1;</code>
   * @return The role.
   */
  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role getRole() {
    return role_ == null ? com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.getDefaultInstance() : role_;
  }
  /**
   * <code>.palm.metasequoia.v1.Role role = 1;</code>
   */
  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RoleOrBuilder getRoleOrBuilder() {
    return role_ == null ? com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.getDefaultInstance() : role_;
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
    if (((bitField0_ & 0x00000001) != 0)) {
      output.writeMessage(1, getRole());
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
    if (((bitField0_ & 0x00000001) != 0)) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getRole());
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest other = (com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest) obj;

    if (hasRole() != other.hasRole()) return false;
    if (hasRole()) {
      if (!getRole()
          .equals(other.getRole())) return false;
    }
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
    if (hasRole()) {
      hash = (37 * hash) + ROLE_FIELD_NUMBER;
      hash = (53 * hash) + getRole().hashCode();
    }
    if (getPermissionsCount() > 0) {
      hash = (37 * hash) + PERMISSIONS_FIELD_NUMBER;
      hash = (53 * hash) + getPermissionsList().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest prototype) {
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
   * Protobuf type {@code palm.metasequoia.v1.RbacPermissionsForRoleRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.metasequoia.v1.RbacPermissionsForRoleRequest)
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_RbacPermissionsForRoleRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_RbacPermissionsForRoleRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest.class, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest.newBuilder()
    private Builder() {
      maybeForceBuilderInitialization();
    }

    private Builder(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      super(parent);
      maybeForceBuilderInitialization();
    }
    private void maybeForceBuilderInitialization() {
      if (com.google.protobuf.GeneratedMessageV3
              .alwaysUseFieldBuilders) {
        getRoleFieldBuilder();
        getPermissionsFieldBuilder();
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      bitField0_ = 0;
      role_ = null;
      if (roleBuilder_ != null) {
        roleBuilder_.dispose();
        roleBuilder_ = null;
      }
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
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_RbacPermissionsForRoleRequest_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest build() {
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest buildPartial() {
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest result = new com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest(this);
      buildPartialRepeatedFields(result);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartialRepeatedFields(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest result) {
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

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest result) {
      int from_bitField0_ = bitField0_;
      int to_bitField0_ = 0;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.role_ = roleBuilder_ == null
            ? role_
            : roleBuilder_.build();
        to_bitField0_ |= 0x00000001;
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
      if (other instanceof com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest other) {
      if (other == com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest.getDefaultInstance()) return this;
      if (other.hasRole()) {
        mergeRole(other.getRole());
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
            case 10: {
              input.readMessage(
                  getRoleFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000001;
              break;
            } // case 10
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

    private com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role role_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role, com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.Builder, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RoleOrBuilder> roleBuilder_;
    /**
     * <code>.palm.metasequoia.v1.Role role = 1;</code>
     * @return Whether the role field is set.
     */
    public boolean hasRole() {
      return ((bitField0_ & 0x00000001) != 0);
    }
    /**
     * <code>.palm.metasequoia.v1.Role role = 1;</code>
     * @return The role.
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role getRole() {
      if (roleBuilder_ == null) {
        return role_ == null ? com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.getDefaultInstance() : role_;
      } else {
        return roleBuilder_.getMessage();
      }
    }
    /**
     * <code>.palm.metasequoia.v1.Role role = 1;</code>
     */
    public Builder setRole(com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role value) {
      if (roleBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        role_ = value;
      } else {
        roleBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>.palm.metasequoia.v1.Role role = 1;</code>
     */
    public Builder setRole(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.Builder builderForValue) {
      if (roleBuilder_ == null) {
        role_ = builderForValue.build();
      } else {
        roleBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>.palm.metasequoia.v1.Role role = 1;</code>
     */
    public Builder mergeRole(com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role value) {
      if (roleBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0) &&
          role_ != null &&
          role_ != com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.getDefaultInstance()) {
          getRoleBuilder().mergeFrom(value);
        } else {
          role_ = value;
        }
      } else {
        roleBuilder_.mergeFrom(value);
      }
      if (role_ != null) {
        bitField0_ |= 0x00000001;
        onChanged();
      }
      return this;
    }
    /**
     * <code>.palm.metasequoia.v1.Role role = 1;</code>
     */
    public Builder clearRole() {
      bitField0_ = (bitField0_ & ~0x00000001);
      role_ = null;
      if (roleBuilder_ != null) {
        roleBuilder_.dispose();
        roleBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>.palm.metasequoia.v1.Role role = 1;</code>
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.Builder getRoleBuilder() {
      bitField0_ |= 0x00000001;
      onChanged();
      return getRoleFieldBuilder().getBuilder();
    }
    /**
     * <code>.palm.metasequoia.v1.Role role = 1;</code>
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RoleOrBuilder getRoleOrBuilder() {
      if (roleBuilder_ != null) {
        return roleBuilder_.getMessageOrBuilder();
      } else {
        return role_ == null ?
            com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.getDefaultInstance() : role_;
      }
    }
    /**
     * <code>.palm.metasequoia.v1.Role role = 1;</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role, com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.Builder, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RoleOrBuilder> 
        getRoleFieldBuilder() {
      if (roleBuilder_ == null) {
        roleBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role, com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.Builder, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RoleOrBuilder>(
                getRole(),
                getParentForChildren(),
                isClean());
        role_ = null;
      }
      return roleBuilder_;
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


    // @@protoc_insertion_point(builder_scope:palm.metasequoia.v1.RbacPermissionsForRoleRequest)
  }

  // @@protoc_insertion_point(class_scope:palm.metasequoia.v1.RbacPermissionsForRoleRequest)
  private static final com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest();
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<RbacPermissionsForRoleRequest>
      PARSER = new com.google.protobuf.AbstractParser<RbacPermissionsForRoleRequest>() {
    @java.lang.Override
    public RbacPermissionsForRoleRequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<RbacPermissionsForRoleRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<RbacPermissionsForRoleRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacPermissionsForRoleRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
