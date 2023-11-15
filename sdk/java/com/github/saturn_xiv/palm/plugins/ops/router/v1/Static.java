// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ops-router.proto

package com.github.saturn_xiv.palm.plugins.ops.router.v1;

/**
 * Protobuf type {@code palm.ops.router.v1.Static}
 */
public final class Static extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.ops.router.v1.Static)
    StaticOrBuilder {
private static final long serialVersionUID = 0L;
  // Use Static.newBuilder() to construct.
  private Static(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private Static() {
    address_ = "";
    gateway_ = "";
    dns1_ = "";
    dns2_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new Static();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.internal_static_palm_ops_router_v1_Static_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.internal_static_palm_ops_router_v1_Static_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.ops.router.v1.Static.class, com.github.saturn_xiv.palm.plugins.ops.router.v1.Static.Builder.class);
  }

  private int bitField0_;
  public static final int ADDRESS_FIELD_NUMBER = 1;
  @SuppressWarnings("serial")
  private volatile java.lang.Object address_ = "";
  /**
   * <code>string address = 1;</code>
   * @return The address.
   */
  @java.lang.Override
  public java.lang.String getAddress() {
    java.lang.Object ref = address_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      address_ = s;
      return s;
    }
  }
  /**
   * <code>string address = 1;</code>
   * @return The bytes for address.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getAddressBytes() {
    java.lang.Object ref = address_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      address_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int GATEWAY_FIELD_NUMBER = 3;
  @SuppressWarnings("serial")
  private volatile java.lang.Object gateway_ = "";
  /**
   * <code>string gateway = 3;</code>
   * @return The gateway.
   */
  @java.lang.Override
  public java.lang.String getGateway() {
    java.lang.Object ref = gateway_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      gateway_ = s;
      return s;
    }
  }
  /**
   * <code>string gateway = 3;</code>
   * @return The bytes for gateway.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getGatewayBytes() {
    java.lang.Object ref = gateway_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      gateway_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int DNS1_FIELD_NUMBER = 4;
  @SuppressWarnings("serial")
  private volatile java.lang.Object dns1_ = "";
  /**
   * <code>string dns1 = 4;</code>
   * @return The dns1.
   */
  @java.lang.Override
  public java.lang.String getDns1() {
    java.lang.Object ref = dns1_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      dns1_ = s;
      return s;
    }
  }
  /**
   * <code>string dns1 = 4;</code>
   * @return The bytes for dns1.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getDns1Bytes() {
    java.lang.Object ref = dns1_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      dns1_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int DNS2_FIELD_NUMBER = 5;
  @SuppressWarnings("serial")
  private volatile java.lang.Object dns2_ = "";
  /**
   * <code>optional string dns2 = 5;</code>
   * @return Whether the dns2 field is set.
   */
  @java.lang.Override
  public boolean hasDns2() {
    return ((bitField0_ & 0x00000001) != 0);
  }
  /**
   * <code>optional string dns2 = 5;</code>
   * @return The dns2.
   */
  @java.lang.Override
  public java.lang.String getDns2() {
    java.lang.Object ref = dns2_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      dns2_ = s;
      return s;
    }
  }
  /**
   * <code>optional string dns2 = 5;</code>
   * @return The bytes for dns2.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getDns2Bytes() {
    java.lang.Object ref = dns2_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      dns2_ = b;
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
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(address_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, address_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(gateway_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, gateway_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(dns1_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 4, dns1_);
    }
    if (((bitField0_ & 0x00000001) != 0)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 5, dns2_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(address_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, address_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(gateway_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, gateway_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(dns1_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(4, dns1_);
    }
    if (((bitField0_ & 0x00000001) != 0)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(5, dns2_);
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.ops.router.v1.Static)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.ops.router.v1.Static other = (com.github.saturn_xiv.palm.plugins.ops.router.v1.Static) obj;

    if (!getAddress()
        .equals(other.getAddress())) return false;
    if (!getGateway()
        .equals(other.getGateway())) return false;
    if (!getDns1()
        .equals(other.getDns1())) return false;
    if (hasDns2() != other.hasDns2()) return false;
    if (hasDns2()) {
      if (!getDns2()
          .equals(other.getDns2())) return false;
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
    hash = (37 * hash) + ADDRESS_FIELD_NUMBER;
    hash = (53 * hash) + getAddress().hashCode();
    hash = (37 * hash) + GATEWAY_FIELD_NUMBER;
    hash = (53 * hash) + getGateway().hashCode();
    hash = (37 * hash) + DNS1_FIELD_NUMBER;
    hash = (53 * hash) + getDns1().hashCode();
    if (hasDns2()) {
      hash = (37 * hash) + DNS2_FIELD_NUMBER;
      hash = (53 * hash) + getDns2().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.Static parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.Static parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.Static parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.Static parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.Static parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.Static parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.Static parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.Static parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.Static parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.Static parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.Static parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.Static parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.ops.router.v1.Static prototype) {
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
   * Protobuf type {@code palm.ops.router.v1.Static}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.ops.router.v1.Static)
      com.github.saturn_xiv.palm.plugins.ops.router.v1.StaticOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.internal_static_palm_ops_router_v1_Static_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.internal_static_palm_ops_router_v1_Static_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.ops.router.v1.Static.class, com.github.saturn_xiv.palm.plugins.ops.router.v1.Static.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.ops.router.v1.Static.newBuilder()
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
      address_ = "";
      gateway_ = "";
      dns1_ = "";
      dns2_ = "";
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.internal_static_palm_ops_router_v1_Static_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.Static getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.ops.router.v1.Static.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.Static build() {
      com.github.saturn_xiv.palm.plugins.ops.router.v1.Static result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.Static buildPartial() {
      com.github.saturn_xiv.palm.plugins.ops.router.v1.Static result = new com.github.saturn_xiv.palm.plugins.ops.router.v1.Static(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.ops.router.v1.Static result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.address_ = address_;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.gateway_ = gateway_;
      }
      if (((from_bitField0_ & 0x00000004) != 0)) {
        result.dns1_ = dns1_;
      }
      int to_bitField0_ = 0;
      if (((from_bitField0_ & 0x00000008) != 0)) {
        result.dns2_ = dns2_;
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
      if (other instanceof com.github.saturn_xiv.palm.plugins.ops.router.v1.Static) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.ops.router.v1.Static)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.ops.router.v1.Static other) {
      if (other == com.github.saturn_xiv.palm.plugins.ops.router.v1.Static.getDefaultInstance()) return this;
      if (!other.getAddress().isEmpty()) {
        address_ = other.address_;
        bitField0_ |= 0x00000001;
        onChanged();
      }
      if (!other.getGateway().isEmpty()) {
        gateway_ = other.gateway_;
        bitField0_ |= 0x00000002;
        onChanged();
      }
      if (!other.getDns1().isEmpty()) {
        dns1_ = other.dns1_;
        bitField0_ |= 0x00000004;
        onChanged();
      }
      if (other.hasDns2()) {
        dns2_ = other.dns2_;
        bitField0_ |= 0x00000008;
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
              address_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 26: {
              gateway_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000002;
              break;
            } // case 26
            case 34: {
              dns1_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000004;
              break;
            } // case 34
            case 42: {
              dns2_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000008;
              break;
            } // case 42
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

    private java.lang.Object address_ = "";
    /**
     * <code>string address = 1;</code>
     * @return The address.
     */
    public java.lang.String getAddress() {
      java.lang.Object ref = address_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        address_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string address = 1;</code>
     * @return The bytes for address.
     */
    public com.google.protobuf.ByteString
        getAddressBytes() {
      java.lang.Object ref = address_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        address_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string address = 1;</code>
     * @param value The address to set.
     * @return This builder for chaining.
     */
    public Builder setAddress(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      address_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>string address = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearAddress() {
      address_ = getDefaultInstance().getAddress();
      bitField0_ = (bitField0_ & ~0x00000001);
      onChanged();
      return this;
    }
    /**
     * <code>string address = 1;</code>
     * @param value The bytes for address to set.
     * @return This builder for chaining.
     */
    public Builder setAddressBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      address_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }

    private java.lang.Object gateway_ = "";
    /**
     * <code>string gateway = 3;</code>
     * @return The gateway.
     */
    public java.lang.String getGateway() {
      java.lang.Object ref = gateway_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        gateway_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string gateway = 3;</code>
     * @return The bytes for gateway.
     */
    public com.google.protobuf.ByteString
        getGatewayBytes() {
      java.lang.Object ref = gateway_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        gateway_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string gateway = 3;</code>
     * @param value The gateway to set.
     * @return This builder for chaining.
     */
    public Builder setGateway(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      gateway_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>string gateway = 3;</code>
     * @return This builder for chaining.
     */
    public Builder clearGateway() {
      gateway_ = getDefaultInstance().getGateway();
      bitField0_ = (bitField0_ & ~0x00000002);
      onChanged();
      return this;
    }
    /**
     * <code>string gateway = 3;</code>
     * @param value The bytes for gateway to set.
     * @return This builder for chaining.
     */
    public Builder setGatewayBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      gateway_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }

    private java.lang.Object dns1_ = "";
    /**
     * <code>string dns1 = 4;</code>
     * @return The dns1.
     */
    public java.lang.String getDns1() {
      java.lang.Object ref = dns1_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        dns1_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string dns1 = 4;</code>
     * @return The bytes for dns1.
     */
    public com.google.protobuf.ByteString
        getDns1Bytes() {
      java.lang.Object ref = dns1_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        dns1_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string dns1 = 4;</code>
     * @param value The dns1 to set.
     * @return This builder for chaining.
     */
    public Builder setDns1(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      dns1_ = value;
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>string dns1 = 4;</code>
     * @return This builder for chaining.
     */
    public Builder clearDns1() {
      dns1_ = getDefaultInstance().getDns1();
      bitField0_ = (bitField0_ & ~0x00000004);
      onChanged();
      return this;
    }
    /**
     * <code>string dns1 = 4;</code>
     * @param value The bytes for dns1 to set.
     * @return This builder for chaining.
     */
    public Builder setDns1Bytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      dns1_ = value;
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }

    private java.lang.Object dns2_ = "";
    /**
     * <code>optional string dns2 = 5;</code>
     * @return Whether the dns2 field is set.
     */
    public boolean hasDns2() {
      return ((bitField0_ & 0x00000008) != 0);
    }
    /**
     * <code>optional string dns2 = 5;</code>
     * @return The dns2.
     */
    public java.lang.String getDns2() {
      java.lang.Object ref = dns2_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        dns2_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>optional string dns2 = 5;</code>
     * @return The bytes for dns2.
     */
    public com.google.protobuf.ByteString
        getDns2Bytes() {
      java.lang.Object ref = dns2_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        dns2_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>optional string dns2 = 5;</code>
     * @param value The dns2 to set.
     * @return This builder for chaining.
     */
    public Builder setDns2(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      dns2_ = value;
      bitField0_ |= 0x00000008;
      onChanged();
      return this;
    }
    /**
     * <code>optional string dns2 = 5;</code>
     * @return This builder for chaining.
     */
    public Builder clearDns2() {
      dns2_ = getDefaultInstance().getDns2();
      bitField0_ = (bitField0_ & ~0x00000008);
      onChanged();
      return this;
    }
    /**
     * <code>optional string dns2 = 5;</code>
     * @param value The bytes for dns2 to set.
     * @return This builder for chaining.
     */
    public Builder setDns2Bytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      dns2_ = value;
      bitField0_ |= 0x00000008;
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


    // @@protoc_insertion_point(builder_scope:palm.ops.router.v1.Static)
  }

  // @@protoc_insertion_point(class_scope:palm.ops.router.v1.Static)
  private static final com.github.saturn_xiv.palm.plugins.ops.router.v1.Static DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.ops.router.v1.Static();
  }

  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.Static getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<Static>
      PARSER = new com.google.protobuf.AbstractParser<Static>() {
    @java.lang.Override
    public Static parsePartialFrom(
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

  public static com.google.protobuf.Parser<Static> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<Static> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.ops.router.v1.Static getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

