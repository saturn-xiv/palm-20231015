// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: metasequoia.proto

package com.github.saturn_xiv.palm.plugins.metasequoia.v1;

/**
 * Protobuf type {@code palm.metasequoia.v1.UserLogsRequest}
 */
public final class UserLogsRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.metasequoia.v1.UserLogsRequest)
    UserLogsRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use UserLogsRequest.newBuilder() to construct.
  private UserLogsRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private UserLogsRequest() {
    plugin_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new UserLogsRequest();
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_UserLogsRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_UserLogsRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest.class, com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest.Builder.class);
  }

  private int bitField0_;
  public static final int PLUGIN_FIELD_NUMBER = 1;
  @SuppressWarnings("serial")
  private volatile java.lang.Object plugin_ = "";
  /**
   * <code>optional string plugin = 1;</code>
   * @return Whether the plugin field is set.
   */
  @java.lang.Override
  public boolean hasPlugin() {
    return ((bitField0_ & 0x00000001) != 0);
  }
  /**
   * <code>optional string plugin = 1;</code>
   * @return The plugin.
   */
  @java.lang.Override
  public java.lang.String getPlugin() {
    java.lang.Object ref = plugin_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      plugin_ = s;
      return s;
    }
  }
  /**
   * <code>optional string plugin = 1;</code>
   * @return The bytes for plugin.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getPluginBytes() {
    java.lang.Object ref = plugin_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      plugin_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int FROM_FIELD_NUMBER = 2;
  private com.google.protobuf.Timestamp from_;
  /**
   * <code>.google.protobuf.Timestamp from = 2;</code>
   * @return Whether the from field is set.
   */
  @java.lang.Override
  public boolean hasFrom() {
    return ((bitField0_ & 0x00000002) != 0);
  }
  /**
   * <code>.google.protobuf.Timestamp from = 2;</code>
   * @return The from.
   */
  @java.lang.Override
  public com.google.protobuf.Timestamp getFrom() {
    return from_ == null ? com.google.protobuf.Timestamp.getDefaultInstance() : from_;
  }
  /**
   * <code>.google.protobuf.Timestamp from = 2;</code>
   */
  @java.lang.Override
  public com.google.protobuf.TimestampOrBuilder getFromOrBuilder() {
    return from_ == null ? com.google.protobuf.Timestamp.getDefaultInstance() : from_;
  }

  public static final int TO_FIELD_NUMBER = 3;
  private com.google.protobuf.Timestamp to_;
  /**
   * <code>.google.protobuf.Timestamp to = 3;</code>
   * @return Whether the to field is set.
   */
  @java.lang.Override
  public boolean hasTo() {
    return ((bitField0_ & 0x00000004) != 0);
  }
  /**
   * <code>.google.protobuf.Timestamp to = 3;</code>
   * @return The to.
   */
  @java.lang.Override
  public com.google.protobuf.Timestamp getTo() {
    return to_ == null ? com.google.protobuf.Timestamp.getDefaultInstance() : to_;
  }
  /**
   * <code>.google.protobuf.Timestamp to = 3;</code>
   */
  @java.lang.Override
  public com.google.protobuf.TimestampOrBuilder getToOrBuilder() {
    return to_ == null ? com.google.protobuf.Timestamp.getDefaultInstance() : to_;
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
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, plugin_);
    }
    if (((bitField0_ & 0x00000002) != 0)) {
      output.writeMessage(2, getFrom());
    }
    if (((bitField0_ & 0x00000004) != 0)) {
      output.writeMessage(3, getTo());
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (((bitField0_ & 0x00000001) != 0)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, plugin_);
    }
    if (((bitField0_ & 0x00000002) != 0)) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, getFrom());
    }
    if (((bitField0_ & 0x00000004) != 0)) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(3, getTo());
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest other = (com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest) obj;

    if (hasPlugin() != other.hasPlugin()) return false;
    if (hasPlugin()) {
      if (!getPlugin()
          .equals(other.getPlugin())) return false;
    }
    if (hasFrom() != other.hasFrom()) return false;
    if (hasFrom()) {
      if (!getFrom()
          .equals(other.getFrom())) return false;
    }
    if (hasTo() != other.hasTo()) return false;
    if (hasTo()) {
      if (!getTo()
          .equals(other.getTo())) return false;
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
    if (hasPlugin()) {
      hash = (37 * hash) + PLUGIN_FIELD_NUMBER;
      hash = (53 * hash) + getPlugin().hashCode();
    }
    if (hasFrom()) {
      hash = (37 * hash) + FROM_FIELD_NUMBER;
      hash = (53 * hash) + getFrom().hashCode();
    }
    if (hasTo()) {
      hash = (37 * hash) + TO_FIELD_NUMBER;
      hash = (53 * hash) + getTo().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest prototype) {
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
   * Protobuf type {@code palm.metasequoia.v1.UserLogsRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.metasequoia.v1.UserLogsRequest)
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_UserLogsRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_UserLogsRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest.class, com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest.newBuilder()
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
        getFromFieldBuilder();
        getToFieldBuilder();
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      bitField0_ = 0;
      plugin_ = "";
      from_ = null;
      if (fromBuilder_ != null) {
        fromBuilder_.dispose();
        fromBuilder_ = null;
      }
      to_ = null;
      if (toBuilder_ != null) {
        toBuilder_.dispose();
        toBuilder_ = null;
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_UserLogsRequest_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest build() {
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest buildPartial() {
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest result = new com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest result) {
      int from_bitField0_ = bitField0_;
      int to_bitField0_ = 0;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.plugin_ = plugin_;
        to_bitField0_ |= 0x00000001;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.from_ = fromBuilder_ == null
            ? from_
            : fromBuilder_.build();
        to_bitField0_ |= 0x00000002;
      }
      if (((from_bitField0_ & 0x00000004) != 0)) {
        result.to_ = toBuilder_ == null
            ? to_
            : toBuilder_.build();
        to_bitField0_ |= 0x00000004;
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
      if (other instanceof com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest other) {
      if (other == com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest.getDefaultInstance()) return this;
      if (other.hasPlugin()) {
        plugin_ = other.plugin_;
        bitField0_ |= 0x00000001;
        onChanged();
      }
      if (other.hasFrom()) {
        mergeFrom(other.getFrom());
      }
      if (other.hasTo()) {
        mergeTo(other.getTo());
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
              plugin_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 18: {
              input.readMessage(
                  getFromFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000002;
              break;
            } // case 18
            case 26: {
              input.readMessage(
                  getToFieldBuilder().getBuilder(),
                  extensionRegistry);
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

    private java.lang.Object plugin_ = "";
    /**
     * <code>optional string plugin = 1;</code>
     * @return Whether the plugin field is set.
     */
    public boolean hasPlugin() {
      return ((bitField0_ & 0x00000001) != 0);
    }
    /**
     * <code>optional string plugin = 1;</code>
     * @return The plugin.
     */
    public java.lang.String getPlugin() {
      java.lang.Object ref = plugin_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        plugin_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>optional string plugin = 1;</code>
     * @return The bytes for plugin.
     */
    public com.google.protobuf.ByteString
        getPluginBytes() {
      java.lang.Object ref = plugin_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        plugin_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>optional string plugin = 1;</code>
     * @param value The plugin to set.
     * @return This builder for chaining.
     */
    public Builder setPlugin(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      plugin_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>optional string plugin = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearPlugin() {
      plugin_ = getDefaultInstance().getPlugin();
      bitField0_ = (bitField0_ & ~0x00000001);
      onChanged();
      return this;
    }
    /**
     * <code>optional string plugin = 1;</code>
     * @param value The bytes for plugin to set.
     * @return This builder for chaining.
     */
    public Builder setPluginBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      plugin_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }

    private com.google.protobuf.Timestamp from_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.google.protobuf.Timestamp, com.google.protobuf.Timestamp.Builder, com.google.protobuf.TimestampOrBuilder> fromBuilder_;
    /**
     * <code>.google.protobuf.Timestamp from = 2;</code>
     * @return Whether the from field is set.
     */
    public boolean hasFrom() {
      return ((bitField0_ & 0x00000002) != 0);
    }
    /**
     * <code>.google.protobuf.Timestamp from = 2;</code>
     * @return The from.
     */
    public com.google.protobuf.Timestamp getFrom() {
      if (fromBuilder_ == null) {
        return from_ == null ? com.google.protobuf.Timestamp.getDefaultInstance() : from_;
      } else {
        return fromBuilder_.getMessage();
      }
    }
    /**
     * <code>.google.protobuf.Timestamp from = 2;</code>
     */
    public Builder setFrom(com.google.protobuf.Timestamp value) {
      if (fromBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        from_ = value;
      } else {
        fromBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>.google.protobuf.Timestamp from = 2;</code>
     */
    public Builder setFrom(
        com.google.protobuf.Timestamp.Builder builderForValue) {
      if (fromBuilder_ == null) {
        from_ = builderForValue.build();
      } else {
        fromBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>.google.protobuf.Timestamp from = 2;</code>
     */
    public Builder mergeFrom(com.google.protobuf.Timestamp value) {
      if (fromBuilder_ == null) {
        if (((bitField0_ & 0x00000002) != 0) &&
          from_ != null &&
          from_ != com.google.protobuf.Timestamp.getDefaultInstance()) {
          getFromBuilder().mergeFrom(value);
        } else {
          from_ = value;
        }
      } else {
        fromBuilder_.mergeFrom(value);
      }
      if (from_ != null) {
        bitField0_ |= 0x00000002;
        onChanged();
      }
      return this;
    }
    /**
     * <code>.google.protobuf.Timestamp from = 2;</code>
     */
    public Builder clearFrom() {
      bitField0_ = (bitField0_ & ~0x00000002);
      from_ = null;
      if (fromBuilder_ != null) {
        fromBuilder_.dispose();
        fromBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>.google.protobuf.Timestamp from = 2;</code>
     */
    public com.google.protobuf.Timestamp.Builder getFromBuilder() {
      bitField0_ |= 0x00000002;
      onChanged();
      return getFromFieldBuilder().getBuilder();
    }
    /**
     * <code>.google.protobuf.Timestamp from = 2;</code>
     */
    public com.google.protobuf.TimestampOrBuilder getFromOrBuilder() {
      if (fromBuilder_ != null) {
        return fromBuilder_.getMessageOrBuilder();
      } else {
        return from_ == null ?
            com.google.protobuf.Timestamp.getDefaultInstance() : from_;
      }
    }
    /**
     * <code>.google.protobuf.Timestamp from = 2;</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.google.protobuf.Timestamp, com.google.protobuf.Timestamp.Builder, com.google.protobuf.TimestampOrBuilder> 
        getFromFieldBuilder() {
      if (fromBuilder_ == null) {
        fromBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.google.protobuf.Timestamp, com.google.protobuf.Timestamp.Builder, com.google.protobuf.TimestampOrBuilder>(
                getFrom(),
                getParentForChildren(),
                isClean());
        from_ = null;
      }
      return fromBuilder_;
    }

    private com.google.protobuf.Timestamp to_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.google.protobuf.Timestamp, com.google.protobuf.Timestamp.Builder, com.google.protobuf.TimestampOrBuilder> toBuilder_;
    /**
     * <code>.google.protobuf.Timestamp to = 3;</code>
     * @return Whether the to field is set.
     */
    public boolean hasTo() {
      return ((bitField0_ & 0x00000004) != 0);
    }
    /**
     * <code>.google.protobuf.Timestamp to = 3;</code>
     * @return The to.
     */
    public com.google.protobuf.Timestamp getTo() {
      if (toBuilder_ == null) {
        return to_ == null ? com.google.protobuf.Timestamp.getDefaultInstance() : to_;
      } else {
        return toBuilder_.getMessage();
      }
    }
    /**
     * <code>.google.protobuf.Timestamp to = 3;</code>
     */
    public Builder setTo(com.google.protobuf.Timestamp value) {
      if (toBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        to_ = value;
      } else {
        toBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>.google.protobuf.Timestamp to = 3;</code>
     */
    public Builder setTo(
        com.google.protobuf.Timestamp.Builder builderForValue) {
      if (toBuilder_ == null) {
        to_ = builderForValue.build();
      } else {
        toBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>.google.protobuf.Timestamp to = 3;</code>
     */
    public Builder mergeTo(com.google.protobuf.Timestamp value) {
      if (toBuilder_ == null) {
        if (((bitField0_ & 0x00000004) != 0) &&
          to_ != null &&
          to_ != com.google.protobuf.Timestamp.getDefaultInstance()) {
          getToBuilder().mergeFrom(value);
        } else {
          to_ = value;
        }
      } else {
        toBuilder_.mergeFrom(value);
      }
      if (to_ != null) {
        bitField0_ |= 0x00000004;
        onChanged();
      }
      return this;
    }
    /**
     * <code>.google.protobuf.Timestamp to = 3;</code>
     */
    public Builder clearTo() {
      bitField0_ = (bitField0_ & ~0x00000004);
      to_ = null;
      if (toBuilder_ != null) {
        toBuilder_.dispose();
        toBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>.google.protobuf.Timestamp to = 3;</code>
     */
    public com.google.protobuf.Timestamp.Builder getToBuilder() {
      bitField0_ |= 0x00000004;
      onChanged();
      return getToFieldBuilder().getBuilder();
    }
    /**
     * <code>.google.protobuf.Timestamp to = 3;</code>
     */
    public com.google.protobuf.TimestampOrBuilder getToOrBuilder() {
      if (toBuilder_ != null) {
        return toBuilder_.getMessageOrBuilder();
      } else {
        return to_ == null ?
            com.google.protobuf.Timestamp.getDefaultInstance() : to_;
      }
    }
    /**
     * <code>.google.protobuf.Timestamp to = 3;</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.google.protobuf.Timestamp, com.google.protobuf.Timestamp.Builder, com.google.protobuf.TimestampOrBuilder> 
        getToFieldBuilder() {
      if (toBuilder_ == null) {
        toBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.google.protobuf.Timestamp, com.google.protobuf.Timestamp.Builder, com.google.protobuf.TimestampOrBuilder>(
                getTo(),
                getParentForChildren(),
                isClean());
        to_ = null;
      }
      return toBuilder_;
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


    // @@protoc_insertion_point(builder_scope:palm.metasequoia.v1.UserLogsRequest)
  }

  // @@protoc_insertion_point(class_scope:palm.metasequoia.v1.UserLogsRequest)
  private static final com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest();
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<UserLogsRequest>
      PARSER = new com.google.protobuf.AbstractParser<UserLogsRequest>() {
    @java.lang.Override
    public UserLogsRequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<UserLogsRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<UserLogsRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.metasequoia.v1.UserLogsRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

