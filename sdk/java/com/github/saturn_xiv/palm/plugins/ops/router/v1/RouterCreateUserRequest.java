// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ops-router.proto

package com.github.saturn_xiv.palm.plugins.ops.router.v1;

/**
 * Protobuf type {@code palm.ops.router.v1.RouterCreateUserRequest}
 */
public final class RouterCreateUserRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.ops.router.v1.RouterCreateUserRequest)
    RouterCreateUserRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use RouterCreateUserRequest.newBuilder() to construct.
  private RouterCreateUserRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private RouterCreateUserRequest() {
    name_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new RouterCreateUserRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.internal_static_palm_ops_router_v1_RouterCreateUserRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.internal_static_palm_ops_router_v1_RouterCreateUserRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest.class, com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest.Builder.class);
  }

  public static final int NAME_FIELD_NUMBER = 1;
  @SuppressWarnings("serial")
  private volatile java.lang.Object name_ = "";
  /**
   * <code>string name = 1;</code>
   * @return The name.
   */
  @java.lang.Override
  public java.lang.String getName() {
    java.lang.Object ref = name_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      name_ = s;
      return s;
    }
  }
  /**
   * <code>string name = 1;</code>
   * @return The bytes for name.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getNameBytes() {
    java.lang.Object ref = name_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      name_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int CONTACT_FIELD_NUMBER = 2;
  private com.github.saturn_xiv.palm.plugins.ops.router.v1.Contact contact_;
  /**
   * <code>.palm.ops.router.v1.Contact contact = 2;</code>
   * @return Whether the contact field is set.
   */
  @java.lang.Override
  public boolean hasContact() {
    return contact_ != null;
  }
  /**
   * <code>.palm.ops.router.v1.Contact contact = 2;</code>
   * @return The contact.
   */
  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.ops.router.v1.Contact getContact() {
    return contact_ == null ? com.github.saturn_xiv.palm.plugins.ops.router.v1.Contact.getDefaultInstance() : contact_;
  }
  /**
   * <code>.palm.ops.router.v1.Contact contact = 2;</code>
   */
  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.ops.router.v1.ContactOrBuilder getContactOrBuilder() {
    return contact_ == null ? com.github.saturn_xiv.palm.plugins.ops.router.v1.Contact.getDefaultInstance() : contact_;
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
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(name_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, name_);
    }
    if (contact_ != null) {
      output.writeMessage(2, getContact());
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(name_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, name_);
    }
    if (contact_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, getContact());
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest other = (com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest) obj;

    if (!getName()
        .equals(other.getName())) return false;
    if (hasContact() != other.hasContact()) return false;
    if (hasContact()) {
      if (!getContact()
          .equals(other.getContact())) return false;
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
    hash = (37 * hash) + NAME_FIELD_NUMBER;
    hash = (53 * hash) + getName().hashCode();
    if (hasContact()) {
      hash = (37 * hash) + CONTACT_FIELD_NUMBER;
      hash = (53 * hash) + getContact().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest prototype) {
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
   * Protobuf type {@code palm.ops.router.v1.RouterCreateUserRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.ops.router.v1.RouterCreateUserRequest)
      com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.internal_static_palm_ops_router_v1_RouterCreateUserRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.internal_static_palm_ops_router_v1_RouterCreateUserRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest.class, com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest.newBuilder()
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
      name_ = "";
      contact_ = null;
      if (contactBuilder_ != null) {
        contactBuilder_.dispose();
        contactBuilder_ = null;
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.internal_static_palm_ops_router_v1_RouterCreateUserRequest_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest build() {
      com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest buildPartial() {
      com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest result = new com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.name_ = name_;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.contact_ = contactBuilder_ == null
            ? contact_
            : contactBuilder_.build();
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
      if (other instanceof com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest other) {
      if (other == com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest.getDefaultInstance()) return this;
      if (!other.getName().isEmpty()) {
        name_ = other.name_;
        bitField0_ |= 0x00000001;
        onChanged();
      }
      if (other.hasContact()) {
        mergeContact(other.getContact());
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
              name_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 18: {
              input.readMessage(
                  getContactFieldBuilder().getBuilder(),
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

    private java.lang.Object name_ = "";
    /**
     * <code>string name = 1;</code>
     * @return The name.
     */
    public java.lang.String getName() {
      java.lang.Object ref = name_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        name_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string name = 1;</code>
     * @return The bytes for name.
     */
    public com.google.protobuf.ByteString
        getNameBytes() {
      java.lang.Object ref = name_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        name_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string name = 1;</code>
     * @param value The name to set.
     * @return This builder for chaining.
     */
    public Builder setName(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      name_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>string name = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearName() {
      name_ = getDefaultInstance().getName();
      bitField0_ = (bitField0_ & ~0x00000001);
      onChanged();
      return this;
    }
    /**
     * <code>string name = 1;</code>
     * @param value The bytes for name to set.
     * @return This builder for chaining.
     */
    public Builder setNameBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      name_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }

    private com.github.saturn_xiv.palm.plugins.ops.router.v1.Contact contact_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.github.saturn_xiv.palm.plugins.ops.router.v1.Contact, com.github.saturn_xiv.palm.plugins.ops.router.v1.Contact.Builder, com.github.saturn_xiv.palm.plugins.ops.router.v1.ContactOrBuilder> contactBuilder_;
    /**
     * <code>.palm.ops.router.v1.Contact contact = 2;</code>
     * @return Whether the contact field is set.
     */
    public boolean hasContact() {
      return ((bitField0_ & 0x00000002) != 0);
    }
    /**
     * <code>.palm.ops.router.v1.Contact contact = 2;</code>
     * @return The contact.
     */
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.Contact getContact() {
      if (contactBuilder_ == null) {
        return contact_ == null ? com.github.saturn_xiv.palm.plugins.ops.router.v1.Contact.getDefaultInstance() : contact_;
      } else {
        return contactBuilder_.getMessage();
      }
    }
    /**
     * <code>.palm.ops.router.v1.Contact contact = 2;</code>
     */
    public Builder setContact(com.github.saturn_xiv.palm.plugins.ops.router.v1.Contact value) {
      if (contactBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        contact_ = value;
      } else {
        contactBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>.palm.ops.router.v1.Contact contact = 2;</code>
     */
    public Builder setContact(
        com.github.saturn_xiv.palm.plugins.ops.router.v1.Contact.Builder builderForValue) {
      if (contactBuilder_ == null) {
        contact_ = builderForValue.build();
      } else {
        contactBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>.palm.ops.router.v1.Contact contact = 2;</code>
     */
    public Builder mergeContact(com.github.saturn_xiv.palm.plugins.ops.router.v1.Contact value) {
      if (contactBuilder_ == null) {
        if (((bitField0_ & 0x00000002) != 0) &&
          contact_ != null &&
          contact_ != com.github.saturn_xiv.palm.plugins.ops.router.v1.Contact.getDefaultInstance()) {
          getContactBuilder().mergeFrom(value);
        } else {
          contact_ = value;
        }
      } else {
        contactBuilder_.mergeFrom(value);
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>.palm.ops.router.v1.Contact contact = 2;</code>
     */
    public Builder clearContact() {
      bitField0_ = (bitField0_ & ~0x00000002);
      contact_ = null;
      if (contactBuilder_ != null) {
        contactBuilder_.dispose();
        contactBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>.palm.ops.router.v1.Contact contact = 2;</code>
     */
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.Contact.Builder getContactBuilder() {
      bitField0_ |= 0x00000002;
      onChanged();
      return getContactFieldBuilder().getBuilder();
    }
    /**
     * <code>.palm.ops.router.v1.Contact contact = 2;</code>
     */
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.ContactOrBuilder getContactOrBuilder() {
      if (contactBuilder_ != null) {
        return contactBuilder_.getMessageOrBuilder();
      } else {
        return contact_ == null ?
            com.github.saturn_xiv.palm.plugins.ops.router.v1.Contact.getDefaultInstance() : contact_;
      }
    }
    /**
     * <code>.palm.ops.router.v1.Contact contact = 2;</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.github.saturn_xiv.palm.plugins.ops.router.v1.Contact, com.github.saturn_xiv.palm.plugins.ops.router.v1.Contact.Builder, com.github.saturn_xiv.palm.plugins.ops.router.v1.ContactOrBuilder> 
        getContactFieldBuilder() {
      if (contactBuilder_ == null) {
        contactBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.github.saturn_xiv.palm.plugins.ops.router.v1.Contact, com.github.saturn_xiv.palm.plugins.ops.router.v1.Contact.Builder, com.github.saturn_xiv.palm.plugins.ops.router.v1.ContactOrBuilder>(
                getContact(),
                getParentForChildren(),
                isClean());
        contact_ = null;
      }
      return contactBuilder_;
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


    // @@protoc_insertion_point(builder_scope:palm.ops.router.v1.RouterCreateUserRequest)
  }

  // @@protoc_insertion_point(class_scope:palm.ops.router.v1.RouterCreateUserRequest)
  private static final com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest();
  }

  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<RouterCreateUserRequest>
      PARSER = new com.google.protobuf.AbstractParser<RouterCreateUserRequest>() {
    @java.lang.Override
    public RouterCreateUserRequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<RouterCreateUserRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<RouterCreateUserRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterCreateUserRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

