// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: nut.proto

package com.github.saturn_xiv.palm.plugins.nut.v1;

/**
 * Protobuf type {@code palm.nut.v1.GoogleSignInUrlResponse}
 */
public final class GoogleSignInUrlResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.nut.v1.GoogleSignInUrlResponse)
    GoogleSignInUrlResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use GoogleSignInUrlResponse.newBuilder() to construct.
  private GoogleSignInUrlResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private GoogleSignInUrlResponse() {
    url_ = "";
    nonce_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new GoogleSignInUrlResponse();
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.internal_static_palm_nut_v1_GoogleSignInUrlResponse_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.internal_static_palm_nut_v1_GoogleSignInUrlResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse.class, com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse.Builder.class);
  }

  public static final int URL_FIELD_NUMBER = 1;
  @SuppressWarnings("serial")
  private volatile java.lang.Object url_ = "";
  /**
   * <code>string url = 1;</code>
   * @return The url.
   */
  @java.lang.Override
  public java.lang.String getUrl() {
    java.lang.Object ref = url_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      url_ = s;
      return s;
    }
  }
  /**
   * <code>string url = 1;</code>
   * @return The bytes for url.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getUrlBytes() {
    java.lang.Object ref = url_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      url_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int NONCE_FIELD_NUMBER = 2;
  @SuppressWarnings("serial")
  private volatile java.lang.Object nonce_ = "";
  /**
   * <code>string nonce = 2;</code>
   * @return The nonce.
   */
  @java.lang.Override
  public java.lang.String getNonce() {
    java.lang.Object ref = nonce_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      nonce_ = s;
      return s;
    }
  }
  /**
   * <code>string nonce = 2;</code>
   * @return The bytes for nonce.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getNonceBytes() {
    java.lang.Object ref = nonce_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      nonce_ = b;
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
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(url_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, url_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(nonce_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, nonce_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(url_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, url_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(nonce_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, nonce_);
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse other = (com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse) obj;

    if (!getUrl()
        .equals(other.getUrl())) return false;
    if (!getNonce()
        .equals(other.getNonce())) return false;
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
    hash = (37 * hash) + URL_FIELD_NUMBER;
    hash = (53 * hash) + getUrl().hashCode();
    hash = (37 * hash) + NONCE_FIELD_NUMBER;
    hash = (53 * hash) + getNonce().hashCode();
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse prototype) {
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
   * Protobuf type {@code palm.nut.v1.GoogleSignInUrlResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.nut.v1.GoogleSignInUrlResponse)
      com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.internal_static_palm_nut_v1_GoogleSignInUrlResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.internal_static_palm_nut_v1_GoogleSignInUrlResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse.class, com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse.newBuilder()
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
      url_ = "";
      nonce_ = "";
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.internal_static_palm_nut_v1_GoogleSignInUrlResponse_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse build() {
      com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse buildPartial() {
      com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse result = new com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.url_ = url_;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.nonce_ = nonce_;
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
      if (other instanceof com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse other) {
      if (other == com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse.getDefaultInstance()) return this;
      if (!other.getUrl().isEmpty()) {
        url_ = other.url_;
        bitField0_ |= 0x00000001;
        onChanged();
      }
      if (!other.getNonce().isEmpty()) {
        nonce_ = other.nonce_;
        bitField0_ |= 0x00000002;
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
              url_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 18: {
              nonce_ = input.readStringRequireUtf8();
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

    private java.lang.Object url_ = "";
    /**
     * <code>string url = 1;</code>
     * @return The url.
     */
    public java.lang.String getUrl() {
      java.lang.Object ref = url_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        url_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string url = 1;</code>
     * @return The bytes for url.
     */
    public com.google.protobuf.ByteString
        getUrlBytes() {
      java.lang.Object ref = url_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        url_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string url = 1;</code>
     * @param value The url to set.
     * @return This builder for chaining.
     */
    public Builder setUrl(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      url_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>string url = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearUrl() {
      url_ = getDefaultInstance().getUrl();
      bitField0_ = (bitField0_ & ~0x00000001);
      onChanged();
      return this;
    }
    /**
     * <code>string url = 1;</code>
     * @param value The bytes for url to set.
     * @return This builder for chaining.
     */
    public Builder setUrlBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      url_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }

    private java.lang.Object nonce_ = "";
    /**
     * <code>string nonce = 2;</code>
     * @return The nonce.
     */
    public java.lang.String getNonce() {
      java.lang.Object ref = nonce_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        nonce_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string nonce = 2;</code>
     * @return The bytes for nonce.
     */
    public com.google.protobuf.ByteString
        getNonceBytes() {
      java.lang.Object ref = nonce_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        nonce_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string nonce = 2;</code>
     * @param value The nonce to set.
     * @return This builder for chaining.
     */
    public Builder setNonce(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      nonce_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>string nonce = 2;</code>
     * @return This builder for chaining.
     */
    public Builder clearNonce() {
      nonce_ = getDefaultInstance().getNonce();
      bitField0_ = (bitField0_ & ~0x00000002);
      onChanged();
      return this;
    }
    /**
     * <code>string nonce = 2;</code>
     * @param value The bytes for nonce to set.
     * @return This builder for chaining.
     */
    public Builder setNonceBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      nonce_ = value;
      bitField0_ |= 0x00000002;
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


    // @@protoc_insertion_point(builder_scope:palm.nut.v1.GoogleSignInUrlResponse)
  }

  // @@protoc_insertion_point(class_scope:palm.nut.v1.GoogleSignInUrlResponse)
  private static final com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse();
  }

  public static com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<GoogleSignInUrlResponse>
      PARSER = new com.google.protobuf.AbstractParser<GoogleSignInUrlResponse>() {
    @java.lang.Override
    public GoogleSignInUrlResponse parsePartialFrom(
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

  public static com.google.protobuf.Parser<GoogleSignInUrlResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<GoogleSignInUrlResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.nut.v1.GoogleSignInUrlResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

