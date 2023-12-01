// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: metasequoia.proto

// Protobuf Java Version: 3.25.0
package com.github.saturn_xiv.palm.plugins.metasequoia.v1;

/**
 * Protobuf type {@code palm.metasequoia.v1.RbacRolesForUserRequest}
 */
public final class RbacRolesForUserRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.metasequoia.v1.RbacRolesForUserRequest)
    RbacRolesForUserRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use RbacRolesForUserRequest.newBuilder() to construct.
  private RbacRolesForUserRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private RbacRolesForUserRequest() {
    roles_ = java.util.Collections.emptyList();
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new RbacRolesForUserRequest();
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_RbacRolesForUserRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_RbacRolesForUserRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest.class, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest.Builder.class);
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

  public static final int ROLES_FIELD_NUMBER = 2;
  @SuppressWarnings("serial")
  private java.util.List<com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role> roles_;
  /**
   * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
   */
  @java.lang.Override
  public java.util.List<com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role> getRolesList() {
    return roles_;
  }
  /**
   * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
   */
  @java.lang.Override
  public java.util.List<? extends com.github.saturn_xiv.palm.plugins.metasequoia.v1.RoleOrBuilder> 
      getRolesOrBuilderList() {
    return roles_;
  }
  /**
   * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
   */
  @java.lang.Override
  public int getRolesCount() {
    return roles_.size();
  }
  /**
   * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
   */
  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role getRoles(int index) {
    return roles_.get(index);
  }
  /**
   * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
   */
  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RoleOrBuilder getRolesOrBuilder(
      int index) {
    return roles_.get(index);
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
    for (int i = 0; i < roles_.size(); i++) {
      output.writeMessage(2, roles_.get(i));
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
    for (int i = 0; i < roles_.size(); i++) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, roles_.get(i));
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest other = (com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest) obj;

    if (getUser()
        != other.getUser()) return false;
    if (!getRolesList()
        .equals(other.getRolesList())) return false;
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
    if (getRolesCount() > 0) {
      hash = (37 * hash) + ROLES_FIELD_NUMBER;
      hash = (53 * hash) + getRolesList().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest prototype) {
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
   * Protobuf type {@code palm.metasequoia.v1.RbacRolesForUserRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.metasequoia.v1.RbacRolesForUserRequest)
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_RbacRolesForUserRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_RbacRolesForUserRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest.class, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest.newBuilder()
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
      if (rolesBuilder_ == null) {
        roles_ = java.util.Collections.emptyList();
      } else {
        roles_ = null;
        rolesBuilder_.clear();
      }
      bitField0_ = (bitField0_ & ~0x00000002);
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_RbacRolesForUserRequest_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest build() {
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest buildPartial() {
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest result = new com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest(this);
      buildPartialRepeatedFields(result);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartialRepeatedFields(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest result) {
      if (rolesBuilder_ == null) {
        if (((bitField0_ & 0x00000002) != 0)) {
          roles_ = java.util.Collections.unmodifiableList(roles_);
          bitField0_ = (bitField0_ & ~0x00000002);
        }
        result.roles_ = roles_;
      } else {
        result.roles_ = rolesBuilder_.build();
      }
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest result) {
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
      if (other instanceof com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest other) {
      if (other == com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest.getDefaultInstance()) return this;
      if (other.getUser() != 0) {
        setUser(other.getUser());
      }
      if (rolesBuilder_ == null) {
        if (!other.roles_.isEmpty()) {
          if (roles_.isEmpty()) {
            roles_ = other.roles_;
            bitField0_ = (bitField0_ & ~0x00000002);
          } else {
            ensureRolesIsMutable();
            roles_.addAll(other.roles_);
          }
          onChanged();
        }
      } else {
        if (!other.roles_.isEmpty()) {
          if (rolesBuilder_.isEmpty()) {
            rolesBuilder_.dispose();
            rolesBuilder_ = null;
            roles_ = other.roles_;
            bitField0_ = (bitField0_ & ~0x00000002);
            rolesBuilder_ = 
              com.google.protobuf.GeneratedMessageV3.alwaysUseFieldBuilders ?
                 getRolesFieldBuilder() : null;
          } else {
            rolesBuilder_.addAllMessages(other.roles_);
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
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role m =
                  input.readMessage(
                      com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.parser(),
                      extensionRegistry);
              if (rolesBuilder_ == null) {
                ensureRolesIsMutable();
                roles_.add(m);
              } else {
                rolesBuilder_.addMessage(m);
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

    private java.util.List<com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role> roles_ =
      java.util.Collections.emptyList();
    private void ensureRolesIsMutable() {
      if (!((bitField0_ & 0x00000002) != 0)) {
        roles_ = new java.util.ArrayList<com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role>(roles_);
        bitField0_ |= 0x00000002;
       }
    }

    private com.google.protobuf.RepeatedFieldBuilderV3<
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role, com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.Builder, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RoleOrBuilder> rolesBuilder_;

    /**
     * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
     */
    public java.util.List<com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role> getRolesList() {
      if (rolesBuilder_ == null) {
        return java.util.Collections.unmodifiableList(roles_);
      } else {
        return rolesBuilder_.getMessageList();
      }
    }
    /**
     * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
     */
    public int getRolesCount() {
      if (rolesBuilder_ == null) {
        return roles_.size();
      } else {
        return rolesBuilder_.getCount();
      }
    }
    /**
     * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role getRoles(int index) {
      if (rolesBuilder_ == null) {
        return roles_.get(index);
      } else {
        return rolesBuilder_.getMessage(index);
      }
    }
    /**
     * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
     */
    public Builder setRoles(
        int index, com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role value) {
      if (rolesBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureRolesIsMutable();
        roles_.set(index, value);
        onChanged();
      } else {
        rolesBuilder_.setMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
     */
    public Builder setRoles(
        int index, com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.Builder builderForValue) {
      if (rolesBuilder_ == null) {
        ensureRolesIsMutable();
        roles_.set(index, builderForValue.build());
        onChanged();
      } else {
        rolesBuilder_.setMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
     */
    public Builder addRoles(com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role value) {
      if (rolesBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureRolesIsMutable();
        roles_.add(value);
        onChanged();
      } else {
        rolesBuilder_.addMessage(value);
      }
      return this;
    }
    /**
     * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
     */
    public Builder addRoles(
        int index, com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role value) {
      if (rolesBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureRolesIsMutable();
        roles_.add(index, value);
        onChanged();
      } else {
        rolesBuilder_.addMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
     */
    public Builder addRoles(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.Builder builderForValue) {
      if (rolesBuilder_ == null) {
        ensureRolesIsMutable();
        roles_.add(builderForValue.build());
        onChanged();
      } else {
        rolesBuilder_.addMessage(builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
     */
    public Builder addRoles(
        int index, com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.Builder builderForValue) {
      if (rolesBuilder_ == null) {
        ensureRolesIsMutable();
        roles_.add(index, builderForValue.build());
        onChanged();
      } else {
        rolesBuilder_.addMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
     */
    public Builder addAllRoles(
        java.lang.Iterable<? extends com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role> values) {
      if (rolesBuilder_ == null) {
        ensureRolesIsMutable();
        com.google.protobuf.AbstractMessageLite.Builder.addAll(
            values, roles_);
        onChanged();
      } else {
        rolesBuilder_.addAllMessages(values);
      }
      return this;
    }
    /**
     * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
     */
    public Builder clearRoles() {
      if (rolesBuilder_ == null) {
        roles_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000002);
        onChanged();
      } else {
        rolesBuilder_.clear();
      }
      return this;
    }
    /**
     * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
     */
    public Builder removeRoles(int index) {
      if (rolesBuilder_ == null) {
        ensureRolesIsMutable();
        roles_.remove(index);
        onChanged();
      } else {
        rolesBuilder_.remove(index);
      }
      return this;
    }
    /**
     * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.Builder getRolesBuilder(
        int index) {
      return getRolesFieldBuilder().getBuilder(index);
    }
    /**
     * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RoleOrBuilder getRolesOrBuilder(
        int index) {
      if (rolesBuilder_ == null) {
        return roles_.get(index);  } else {
        return rolesBuilder_.getMessageOrBuilder(index);
      }
    }
    /**
     * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
     */
    public java.util.List<? extends com.github.saturn_xiv.palm.plugins.metasequoia.v1.RoleOrBuilder> 
         getRolesOrBuilderList() {
      if (rolesBuilder_ != null) {
        return rolesBuilder_.getMessageOrBuilderList();
      } else {
        return java.util.Collections.unmodifiableList(roles_);
      }
    }
    /**
     * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.Builder addRolesBuilder() {
      return getRolesFieldBuilder().addBuilder(
          com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.getDefaultInstance());
    }
    /**
     * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.Builder addRolesBuilder(
        int index) {
      return getRolesFieldBuilder().addBuilder(
          index, com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.getDefaultInstance());
    }
    /**
     * <code>repeated .palm.metasequoia.v1.Role roles = 2;</code>
     */
    public java.util.List<com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.Builder> 
         getRolesBuilderList() {
      return getRolesFieldBuilder().getBuilderList();
    }
    private com.google.protobuf.RepeatedFieldBuilderV3<
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role, com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.Builder, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RoleOrBuilder> 
        getRolesFieldBuilder() {
      if (rolesBuilder_ == null) {
        rolesBuilder_ = new com.google.protobuf.RepeatedFieldBuilderV3<
            com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role, com.github.saturn_xiv.palm.plugins.metasequoia.v1.Role.Builder, com.github.saturn_xiv.palm.plugins.metasequoia.v1.RoleOrBuilder>(
                roles_,
                ((bitField0_ & 0x00000002) != 0),
                getParentForChildren(),
                isClean());
        roles_ = null;
      }
      return rolesBuilder_;
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


    // @@protoc_insertion_point(builder_scope:palm.metasequoia.v1.RbacRolesForUserRequest)
  }

  // @@protoc_insertion_point(class_scope:palm.metasequoia.v1.RbacRolesForUserRequest)
  private static final com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest();
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<RbacRolesForUserRequest>
      PARSER = new com.google.protobuf.AbstractParser<RbacRolesForUserRequest>() {
    @java.lang.Override
    public RbacRolesForUserRequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<RbacRolesForUserRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<RbacRolesForUserRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.metasequoia.v1.RbacRolesForUserRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

