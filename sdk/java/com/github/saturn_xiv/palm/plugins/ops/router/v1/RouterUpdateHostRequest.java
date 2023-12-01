// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ops-router.proto

// Protobuf Java Version: 3.25.0
package com.github.saturn_xiv.palm.plugins.ops.router.v1;

/**
 * Protobuf type {@code palm.ops.router.v1.RouterUpdateHostRequest}
 */
public final class RouterUpdateHostRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.ops.router.v1.RouterUpdateHostRequest)
    RouterUpdateHostRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use RouterUpdateHostRequest.newBuilder() to construct.
  private RouterUpdateHostRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private RouterUpdateHostRequest() {
    group_ = "";
    ip_ = "";
    zone_ = "";
    location_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new RouterUpdateHostRequest();
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.internal_static_palm_ops_router_v1_RouterUpdateHostRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.internal_static_palm_ops_router_v1_RouterUpdateHostRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest.class, com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest.Builder.class);
  }

  private int bitField0_;
  public static final int ID_FIELD_NUMBER = 1;
  private int id_ = 0;
  /**
   * <code>int32 id = 1;</code>
   * @return The id.
   */
  @java.lang.Override
  public int getId() {
    return id_;
  }

  public static final int USER_FIELD_NUMBER = 2;
  private int user_ = 0;
  /**
   * <code>int32 user = 2;</code>
   * @return The user.
   */
  @java.lang.Override
  public int getUser() {
    return user_;
  }

  public static final int GROUP_FIELD_NUMBER = 3;
  @SuppressWarnings("serial")
  private volatile java.lang.Object group_ = "";
  /**
   * <code>string group = 3;</code>
   * @return The group.
   */
  @java.lang.Override
  public java.lang.String getGroup() {
    java.lang.Object ref = group_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      group_ = s;
      return s;
    }
  }
  /**
   * <code>string group = 3;</code>
   * @return The bytes for group.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getGroupBytes() {
    java.lang.Object ref = group_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      group_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int IP_FIELD_NUMBER = 4;
  @SuppressWarnings("serial")
  private volatile java.lang.Object ip_ = "";
  /**
   * <code>string ip = 4;</code>
   * @return The ip.
   */
  @java.lang.Override
  public java.lang.String getIp() {
    java.lang.Object ref = ip_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      ip_ = s;
      return s;
    }
  }
  /**
   * <code>string ip = 4;</code>
   * @return The bytes for ip.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getIpBytes() {
    java.lang.Object ref = ip_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      ip_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int FIXED_FIELD_NUMBER = 5;
  private boolean fixed_ = false;
  /**
   * <code>bool fixed = 5;</code>
   * @return The fixed.
   */
  @java.lang.Override
  public boolean getFixed() {
    return fixed_;
  }

  public static final int ZONE_FIELD_NUMBER = 8;
  @SuppressWarnings("serial")
  private volatile java.lang.Object zone_ = "";
  /**
   * <code>string zone = 8;</code>
   * @return The zone.
   */
  @java.lang.Override
  public java.lang.String getZone() {
    java.lang.Object ref = zone_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      zone_ = s;
      return s;
    }
  }
  /**
   * <code>string zone = 8;</code>
   * @return The bytes for zone.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getZoneBytes() {
    java.lang.Object ref = zone_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      zone_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int LOCATION_FIELD_NUMBER = 9;
  @SuppressWarnings("serial")
  private volatile java.lang.Object location_ = "";
  /**
   * <code>optional string location = 9;</code>
   * @return Whether the location field is set.
   */
  @java.lang.Override
  public boolean hasLocation() {
    return ((bitField0_ & 0x00000001) != 0);
  }
  /**
   * <code>optional string location = 9;</code>
   * @return The location.
   */
  @java.lang.Override
  public java.lang.String getLocation() {
    java.lang.Object ref = location_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      location_ = s;
      return s;
    }
  }
  /**
   * <code>optional string location = 9;</code>
   * @return The bytes for location.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getLocationBytes() {
    java.lang.Object ref = location_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      location_ = b;
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
    if (id_ != 0) {
      output.writeInt32(1, id_);
    }
    if (user_ != 0) {
      output.writeInt32(2, user_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(group_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, group_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(ip_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 4, ip_);
    }
    if (fixed_ != false) {
      output.writeBool(5, fixed_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(zone_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 8, zone_);
    }
    if (((bitField0_ & 0x00000001) != 0)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 9, location_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (id_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt32Size(1, id_);
    }
    if (user_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt32Size(2, user_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(group_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, group_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(ip_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(4, ip_);
    }
    if (fixed_ != false) {
      size += com.google.protobuf.CodedOutputStream
        .computeBoolSize(5, fixed_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(zone_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(8, zone_);
    }
    if (((bitField0_ & 0x00000001) != 0)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(9, location_);
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest other = (com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest) obj;

    if (getId()
        != other.getId()) return false;
    if (getUser()
        != other.getUser()) return false;
    if (!getGroup()
        .equals(other.getGroup())) return false;
    if (!getIp()
        .equals(other.getIp())) return false;
    if (getFixed()
        != other.getFixed()) return false;
    if (!getZone()
        .equals(other.getZone())) return false;
    if (hasLocation() != other.hasLocation()) return false;
    if (hasLocation()) {
      if (!getLocation()
          .equals(other.getLocation())) return false;
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
    hash = (37 * hash) + ID_FIELD_NUMBER;
    hash = (53 * hash) + getId();
    hash = (37 * hash) + USER_FIELD_NUMBER;
    hash = (53 * hash) + getUser();
    hash = (37 * hash) + GROUP_FIELD_NUMBER;
    hash = (53 * hash) + getGroup().hashCode();
    hash = (37 * hash) + IP_FIELD_NUMBER;
    hash = (53 * hash) + getIp().hashCode();
    hash = (37 * hash) + FIXED_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashBoolean(
        getFixed());
    hash = (37 * hash) + ZONE_FIELD_NUMBER;
    hash = (53 * hash) + getZone().hashCode();
    if (hasLocation()) {
      hash = (37 * hash) + LOCATION_FIELD_NUMBER;
      hash = (53 * hash) + getLocation().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest prototype) {
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
   * Protobuf type {@code palm.ops.router.v1.RouterUpdateHostRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.ops.router.v1.RouterUpdateHostRequest)
      com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.internal_static_palm_ops_router_v1_RouterUpdateHostRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.internal_static_palm_ops_router_v1_RouterUpdateHostRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest.class, com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest.newBuilder()
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
      id_ = 0;
      user_ = 0;
      group_ = "";
      ip_ = "";
      fixed_ = false;
      zone_ = "";
      location_ = "";
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.ops.router.v1.OpsRouter.internal_static_palm_ops_router_v1_RouterUpdateHostRequest_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest build() {
      com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest buildPartial() {
      com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest result = new com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.id_ = id_;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.user_ = user_;
      }
      if (((from_bitField0_ & 0x00000004) != 0)) {
        result.group_ = group_;
      }
      if (((from_bitField0_ & 0x00000008) != 0)) {
        result.ip_ = ip_;
      }
      if (((from_bitField0_ & 0x00000010) != 0)) {
        result.fixed_ = fixed_;
      }
      if (((from_bitField0_ & 0x00000020) != 0)) {
        result.zone_ = zone_;
      }
      int to_bitField0_ = 0;
      if (((from_bitField0_ & 0x00000040) != 0)) {
        result.location_ = location_;
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
      if (other instanceof com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest other) {
      if (other == com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest.getDefaultInstance()) return this;
      if (other.getId() != 0) {
        setId(other.getId());
      }
      if (other.getUser() != 0) {
        setUser(other.getUser());
      }
      if (!other.getGroup().isEmpty()) {
        group_ = other.group_;
        bitField0_ |= 0x00000004;
        onChanged();
      }
      if (!other.getIp().isEmpty()) {
        ip_ = other.ip_;
        bitField0_ |= 0x00000008;
        onChanged();
      }
      if (other.getFixed() != false) {
        setFixed(other.getFixed());
      }
      if (!other.getZone().isEmpty()) {
        zone_ = other.zone_;
        bitField0_ |= 0x00000020;
        onChanged();
      }
      if (other.hasLocation()) {
        location_ = other.location_;
        bitField0_ |= 0x00000040;
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
            case 8: {
              id_ = input.readInt32();
              bitField0_ |= 0x00000001;
              break;
            } // case 8
            case 16: {
              user_ = input.readInt32();
              bitField0_ |= 0x00000002;
              break;
            } // case 16
            case 26: {
              group_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000004;
              break;
            } // case 26
            case 34: {
              ip_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000008;
              break;
            } // case 34
            case 40: {
              fixed_ = input.readBool();
              bitField0_ |= 0x00000010;
              break;
            } // case 40
            case 66: {
              zone_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000020;
              break;
            } // case 66
            case 74: {
              location_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000040;
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
    private int bitField0_;

    private int id_ ;
    /**
     * <code>int32 id = 1;</code>
     * @return The id.
     */
    @java.lang.Override
    public int getId() {
      return id_;
    }
    /**
     * <code>int32 id = 1;</code>
     * @param value The id to set.
     * @return This builder for chaining.
     */
    public Builder setId(int value) {

      id_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>int32 id = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearId() {
      bitField0_ = (bitField0_ & ~0x00000001);
      id_ = 0;
      onChanged();
      return this;
    }

    private int user_ ;
    /**
     * <code>int32 user = 2;</code>
     * @return The user.
     */
    @java.lang.Override
    public int getUser() {
      return user_;
    }
    /**
     * <code>int32 user = 2;</code>
     * @param value The user to set.
     * @return This builder for chaining.
     */
    public Builder setUser(int value) {

      user_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>int32 user = 2;</code>
     * @return This builder for chaining.
     */
    public Builder clearUser() {
      bitField0_ = (bitField0_ & ~0x00000002);
      user_ = 0;
      onChanged();
      return this;
    }

    private java.lang.Object group_ = "";
    /**
     * <code>string group = 3;</code>
     * @return The group.
     */
    public java.lang.String getGroup() {
      java.lang.Object ref = group_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        group_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string group = 3;</code>
     * @return The bytes for group.
     */
    public com.google.protobuf.ByteString
        getGroupBytes() {
      java.lang.Object ref = group_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        group_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string group = 3;</code>
     * @param value The group to set.
     * @return This builder for chaining.
     */
    public Builder setGroup(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      group_ = value;
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>string group = 3;</code>
     * @return This builder for chaining.
     */
    public Builder clearGroup() {
      group_ = getDefaultInstance().getGroup();
      bitField0_ = (bitField0_ & ~0x00000004);
      onChanged();
      return this;
    }
    /**
     * <code>string group = 3;</code>
     * @param value The bytes for group to set.
     * @return This builder for chaining.
     */
    public Builder setGroupBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      group_ = value;
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }

    private java.lang.Object ip_ = "";
    /**
     * <code>string ip = 4;</code>
     * @return The ip.
     */
    public java.lang.String getIp() {
      java.lang.Object ref = ip_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        ip_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string ip = 4;</code>
     * @return The bytes for ip.
     */
    public com.google.protobuf.ByteString
        getIpBytes() {
      java.lang.Object ref = ip_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        ip_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string ip = 4;</code>
     * @param value The ip to set.
     * @return This builder for chaining.
     */
    public Builder setIp(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      ip_ = value;
      bitField0_ |= 0x00000008;
      onChanged();
      return this;
    }
    /**
     * <code>string ip = 4;</code>
     * @return This builder for chaining.
     */
    public Builder clearIp() {
      ip_ = getDefaultInstance().getIp();
      bitField0_ = (bitField0_ & ~0x00000008);
      onChanged();
      return this;
    }
    /**
     * <code>string ip = 4;</code>
     * @param value The bytes for ip to set.
     * @return This builder for chaining.
     */
    public Builder setIpBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      ip_ = value;
      bitField0_ |= 0x00000008;
      onChanged();
      return this;
    }

    private boolean fixed_ ;
    /**
     * <code>bool fixed = 5;</code>
     * @return The fixed.
     */
    @java.lang.Override
    public boolean getFixed() {
      return fixed_;
    }
    /**
     * <code>bool fixed = 5;</code>
     * @param value The fixed to set.
     * @return This builder for chaining.
     */
    public Builder setFixed(boolean value) {

      fixed_ = value;
      bitField0_ |= 0x00000010;
      onChanged();
      return this;
    }
    /**
     * <code>bool fixed = 5;</code>
     * @return This builder for chaining.
     */
    public Builder clearFixed() {
      bitField0_ = (bitField0_ & ~0x00000010);
      fixed_ = false;
      onChanged();
      return this;
    }

    private java.lang.Object zone_ = "";
    /**
     * <code>string zone = 8;</code>
     * @return The zone.
     */
    public java.lang.String getZone() {
      java.lang.Object ref = zone_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        zone_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string zone = 8;</code>
     * @return The bytes for zone.
     */
    public com.google.protobuf.ByteString
        getZoneBytes() {
      java.lang.Object ref = zone_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        zone_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string zone = 8;</code>
     * @param value The zone to set.
     * @return This builder for chaining.
     */
    public Builder setZone(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      zone_ = value;
      bitField0_ |= 0x00000020;
      onChanged();
      return this;
    }
    /**
     * <code>string zone = 8;</code>
     * @return This builder for chaining.
     */
    public Builder clearZone() {
      zone_ = getDefaultInstance().getZone();
      bitField0_ = (bitField0_ & ~0x00000020);
      onChanged();
      return this;
    }
    /**
     * <code>string zone = 8;</code>
     * @param value The bytes for zone to set.
     * @return This builder for chaining.
     */
    public Builder setZoneBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      zone_ = value;
      bitField0_ |= 0x00000020;
      onChanged();
      return this;
    }

    private java.lang.Object location_ = "";
    /**
     * <code>optional string location = 9;</code>
     * @return Whether the location field is set.
     */
    public boolean hasLocation() {
      return ((bitField0_ & 0x00000040) != 0);
    }
    /**
     * <code>optional string location = 9;</code>
     * @return The location.
     */
    public java.lang.String getLocation() {
      java.lang.Object ref = location_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        location_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>optional string location = 9;</code>
     * @return The bytes for location.
     */
    public com.google.protobuf.ByteString
        getLocationBytes() {
      java.lang.Object ref = location_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        location_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>optional string location = 9;</code>
     * @param value The location to set.
     * @return This builder for chaining.
     */
    public Builder setLocation(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      location_ = value;
      bitField0_ |= 0x00000040;
      onChanged();
      return this;
    }
    /**
     * <code>optional string location = 9;</code>
     * @return This builder for chaining.
     */
    public Builder clearLocation() {
      location_ = getDefaultInstance().getLocation();
      bitField0_ = (bitField0_ & ~0x00000040);
      onChanged();
      return this;
    }
    /**
     * <code>optional string location = 9;</code>
     * @param value The bytes for location to set.
     * @return This builder for chaining.
     */
    public Builder setLocationBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      location_ = value;
      bitField0_ |= 0x00000040;
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


    // @@protoc_insertion_point(builder_scope:palm.ops.router.v1.RouterUpdateHostRequest)
  }

  // @@protoc_insertion_point(class_scope:palm.ops.router.v1.RouterUpdateHostRequest)
  private static final com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest();
  }

  public static com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<RouterUpdateHostRequest>
      PARSER = new com.google.protobuf.AbstractParser<RouterUpdateHostRequest>() {
    @java.lang.Override
    public RouterUpdateHostRequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<RouterUpdateHostRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<RouterUpdateHostRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.ops.router.v1.RouterUpdateHostRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

