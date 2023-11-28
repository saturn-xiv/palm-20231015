// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: nut.proto

package com.github.saturn_xiv.palm.plugins.nut.v1;

/**
 * Protobuf type {@code palm.nut.v1.SiteSetCopyrightRequest}
 */
public final class SiteSetCopyrightRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.nut.v1.SiteSetCopyrightRequest)
    SiteSetCopyrightRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use SiteSetCopyrightRequest.newBuilder() to construct.
  private SiteSetCopyrightRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private SiteSetCopyrightRequest() {
    payload_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new SiteSetCopyrightRequest();
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.internal_static_palm_nut_v1_SiteSetCopyrightRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.internal_static_palm_nut_v1_SiteSetCopyrightRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest.class, com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest.Builder.class);
  }

  public static final int PAYLOAD_FIELD_NUMBER = 1;
  @SuppressWarnings("serial")
  private volatile java.lang.Object payload_ = "";
  /**
   * <code>string payload = 1;</code>
   * @return The payload.
   */
  @java.lang.Override
  public java.lang.String getPayload() {
    java.lang.Object ref = payload_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      payload_ = s;
      return s;
    }
  }
  /**
   * <code>string payload = 1;</code>
   * @return The bytes for payload.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getPayloadBytes() {
    java.lang.Object ref = payload_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      payload_ = b;
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
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(payload_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, payload_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(payload_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, payload_);
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest other = (com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest) obj;

    if (!getPayload()
        .equals(other.getPayload())) return false;
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
    hash = (37 * hash) + PAYLOAD_FIELD_NUMBER;
    hash = (53 * hash) + getPayload().hashCode();
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest prototype) {
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
   * Protobuf type {@code palm.nut.v1.SiteSetCopyrightRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.nut.v1.SiteSetCopyrightRequest)
      com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.internal_static_palm_nut_v1_SiteSetCopyrightRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.internal_static_palm_nut_v1_SiteSetCopyrightRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest.class, com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest.newBuilder()
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
      payload_ = "";
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.internal_static_palm_nut_v1_SiteSetCopyrightRequest_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest build() {
      com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest buildPartial() {
      com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest result = new com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.payload_ = payload_;
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
      if (other instanceof com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest other) {
      if (other == com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest.getDefaultInstance()) return this;
      if (!other.getPayload().isEmpty()) {
        payload_ = other.payload_;
        bitField0_ |= 0x00000001;
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
              payload_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000001;
              break;
            } // case 10
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

    private java.lang.Object payload_ = "";
    /**
     * <code>string payload = 1;</code>
     * @return The payload.
     */
    public java.lang.String getPayload() {
      java.lang.Object ref = payload_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        payload_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string payload = 1;</code>
     * @return The bytes for payload.
     */
    public com.google.protobuf.ByteString
        getPayloadBytes() {
      java.lang.Object ref = payload_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        payload_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string payload = 1;</code>
     * @param value The payload to set.
     * @return This builder for chaining.
     */
    public Builder setPayload(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      payload_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>string payload = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearPayload() {
      payload_ = getDefaultInstance().getPayload();
      bitField0_ = (bitField0_ & ~0x00000001);
      onChanged();
      return this;
    }
    /**
     * <code>string payload = 1;</code>
     * @param value The bytes for payload to set.
     * @return This builder for chaining.
     */
    public Builder setPayloadBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      payload_ = value;
      bitField0_ |= 0x00000001;
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


    // @@protoc_insertion_point(builder_scope:palm.nut.v1.SiteSetCopyrightRequest)
  }

  // @@protoc_insertion_point(class_scope:palm.nut.v1.SiteSetCopyrightRequest)
  private static final com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest();
  }

  public static com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<SiteSetCopyrightRequest>
      PARSER = new com.google.protobuf.AbstractParser<SiteSetCopyrightRequest>() {
    @java.lang.Override
    public SiteSetCopyrightRequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<SiteSetCopyrightRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<SiteSetCopyrightRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.nut.v1.SiteSetCopyrightRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

