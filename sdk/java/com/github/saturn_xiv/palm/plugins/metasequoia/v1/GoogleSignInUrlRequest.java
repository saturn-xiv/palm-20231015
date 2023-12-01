// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: metasequoia.proto

// Protobuf Java Version: 3.25.0
package com.github.saturn_xiv.palm.plugins.metasequoia.v1;

/**
 * Protobuf type {@code palm.metasequoia.v1.GoogleSignInUrlRequest}
 */
public final class GoogleSignInUrlRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.metasequoia.v1.GoogleSignInUrlRequest)
    GoogleSignInUrlRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use GoogleSignInUrlRequest.newBuilder() to construct.
  private GoogleSignInUrlRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private GoogleSignInUrlRequest() {
    redirectUri_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new GoogleSignInUrlRequest();
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_GoogleSignInUrlRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_GoogleSignInUrlRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest.class, com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest.Builder.class);
  }

  private int bitField0_;
  public static final int REDIRECT_URI_FIELD_NUMBER = 1;
  @SuppressWarnings("serial")
  private volatile java.lang.Object redirectUri_ = "";
  /**
   * <code>string redirect_uri = 1;</code>
   * @return The redirectUri.
   */
  @java.lang.Override
  public java.lang.String getRedirectUri() {
    java.lang.Object ref = redirectUri_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      redirectUri_ = s;
      return s;
    }
  }
  /**
   * <code>string redirect_uri = 1;</code>
   * @return The bytes for redirectUri.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getRedirectUriBytes() {
    java.lang.Object ref = redirectUri_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      redirectUri_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int STATE_FIELD_NUMBER = 2;
  private com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2State state_;
  /**
   * <code>.palm.metasequoia.v1.Oauth2State state = 2;</code>
   * @return Whether the state field is set.
   */
  @java.lang.Override
  public boolean hasState() {
    return ((bitField0_ & 0x00000001) != 0);
  }
  /**
   * <code>.palm.metasequoia.v1.Oauth2State state = 2;</code>
   * @return The state.
   */
  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2State getState() {
    return state_ == null ? com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2State.getDefaultInstance() : state_;
  }
  /**
   * <code>.palm.metasequoia.v1.Oauth2State state = 2;</code>
   */
  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2StateOrBuilder getStateOrBuilder() {
    return state_ == null ? com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2State.getDefaultInstance() : state_;
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
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(redirectUri_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, redirectUri_);
    }
    if (((bitField0_ & 0x00000001) != 0)) {
      output.writeMessage(2, getState());
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(redirectUri_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, redirectUri_);
    }
    if (((bitField0_ & 0x00000001) != 0)) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, getState());
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest other = (com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest) obj;

    if (!getRedirectUri()
        .equals(other.getRedirectUri())) return false;
    if (hasState() != other.hasState()) return false;
    if (hasState()) {
      if (!getState()
          .equals(other.getState())) return false;
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
    hash = (37 * hash) + REDIRECT_URI_FIELD_NUMBER;
    hash = (53 * hash) + getRedirectUri().hashCode();
    if (hasState()) {
      hash = (37 * hash) + STATE_FIELD_NUMBER;
      hash = (53 * hash) + getState().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest prototype) {
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
   * Protobuf type {@code palm.metasequoia.v1.GoogleSignInUrlRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.metasequoia.v1.GoogleSignInUrlRequest)
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_GoogleSignInUrlRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_GoogleSignInUrlRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest.class, com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest.newBuilder()
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
        getStateFieldBuilder();
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      bitField0_ = 0;
      redirectUri_ = "";
      state_ = null;
      if (stateBuilder_ != null) {
        stateBuilder_.dispose();
        stateBuilder_ = null;
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_GoogleSignInUrlRequest_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest build() {
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest buildPartial() {
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest result = new com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.redirectUri_ = redirectUri_;
      }
      int to_bitField0_ = 0;
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.state_ = stateBuilder_ == null
            ? state_
            : stateBuilder_.build();
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
      if (other instanceof com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest other) {
      if (other == com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest.getDefaultInstance()) return this;
      if (!other.getRedirectUri().isEmpty()) {
        redirectUri_ = other.redirectUri_;
        bitField0_ |= 0x00000001;
        onChanged();
      }
      if (other.hasState()) {
        mergeState(other.getState());
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
              redirectUri_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 18: {
              input.readMessage(
                  getStateFieldBuilder().getBuilder(),
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

    private java.lang.Object redirectUri_ = "";
    /**
     * <code>string redirect_uri = 1;</code>
     * @return The redirectUri.
     */
    public java.lang.String getRedirectUri() {
      java.lang.Object ref = redirectUri_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        redirectUri_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string redirect_uri = 1;</code>
     * @return The bytes for redirectUri.
     */
    public com.google.protobuf.ByteString
        getRedirectUriBytes() {
      java.lang.Object ref = redirectUri_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        redirectUri_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string redirect_uri = 1;</code>
     * @param value The redirectUri to set.
     * @return This builder for chaining.
     */
    public Builder setRedirectUri(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      redirectUri_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>string redirect_uri = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearRedirectUri() {
      redirectUri_ = getDefaultInstance().getRedirectUri();
      bitField0_ = (bitField0_ & ~0x00000001);
      onChanged();
      return this;
    }
    /**
     * <code>string redirect_uri = 1;</code>
     * @param value The bytes for redirectUri to set.
     * @return This builder for chaining.
     */
    public Builder setRedirectUriBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      redirectUri_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }

    private com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2State state_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2State, com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2State.Builder, com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2StateOrBuilder> stateBuilder_;
    /**
     * <code>.palm.metasequoia.v1.Oauth2State state = 2;</code>
     * @return Whether the state field is set.
     */
    public boolean hasState() {
      return ((bitField0_ & 0x00000002) != 0);
    }
    /**
     * <code>.palm.metasequoia.v1.Oauth2State state = 2;</code>
     * @return The state.
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2State getState() {
      if (stateBuilder_ == null) {
        return state_ == null ? com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2State.getDefaultInstance() : state_;
      } else {
        return stateBuilder_.getMessage();
      }
    }
    /**
     * <code>.palm.metasequoia.v1.Oauth2State state = 2;</code>
     */
    public Builder setState(com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2State value) {
      if (stateBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        state_ = value;
      } else {
        stateBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>.palm.metasequoia.v1.Oauth2State state = 2;</code>
     */
    public Builder setState(
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2State.Builder builderForValue) {
      if (stateBuilder_ == null) {
        state_ = builderForValue.build();
      } else {
        stateBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>.palm.metasequoia.v1.Oauth2State state = 2;</code>
     */
    public Builder mergeState(com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2State value) {
      if (stateBuilder_ == null) {
        if (((bitField0_ & 0x00000002) != 0) &&
          state_ != null &&
          state_ != com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2State.getDefaultInstance()) {
          getStateBuilder().mergeFrom(value);
        } else {
          state_ = value;
        }
      } else {
        stateBuilder_.mergeFrom(value);
      }
      if (state_ != null) {
        bitField0_ |= 0x00000002;
        onChanged();
      }
      return this;
    }
    /**
     * <code>.palm.metasequoia.v1.Oauth2State state = 2;</code>
     */
    public Builder clearState() {
      bitField0_ = (bitField0_ & ~0x00000002);
      state_ = null;
      if (stateBuilder_ != null) {
        stateBuilder_.dispose();
        stateBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>.palm.metasequoia.v1.Oauth2State state = 2;</code>
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2State.Builder getStateBuilder() {
      bitField0_ |= 0x00000002;
      onChanged();
      return getStateFieldBuilder().getBuilder();
    }
    /**
     * <code>.palm.metasequoia.v1.Oauth2State state = 2;</code>
     */
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2StateOrBuilder getStateOrBuilder() {
      if (stateBuilder_ != null) {
        return stateBuilder_.getMessageOrBuilder();
      } else {
        return state_ == null ?
            com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2State.getDefaultInstance() : state_;
      }
    }
    /**
     * <code>.palm.metasequoia.v1.Oauth2State state = 2;</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2State, com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2State.Builder, com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2StateOrBuilder> 
        getStateFieldBuilder() {
      if (stateBuilder_ == null) {
        stateBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2State, com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2State.Builder, com.github.saturn_xiv.palm.plugins.metasequoia.v1.Oauth2StateOrBuilder>(
                getState(),
                getParentForChildren(),
                isClean());
        state_ = null;
      }
      return stateBuilder_;
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


    // @@protoc_insertion_point(builder_scope:palm.metasequoia.v1.GoogleSignInUrlRequest)
  }

  // @@protoc_insertion_point(class_scope:palm.metasequoia.v1.GoogleSignInUrlRequest)
  private static final com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest();
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<GoogleSignInUrlRequest>
      PARSER = new com.google.protobuf.AbstractParser<GoogleSignInUrlRequest>() {
    @java.lang.Override
    public GoogleSignInUrlRequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<GoogleSignInUrlRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<GoogleSignInUrlRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.metasequoia.v1.GoogleSignInUrlRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

