// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: orchid.proto

package com.github.saturn_xiv.palm.plugins.orchid.v1;

/**
 * Protobuf type {@code palm.orchid.v1.WechatOauth2QrConnectRequest}
 */
public final class WechatOauth2QrConnectRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.orchid.v1.WechatOauth2QrConnectRequest)
    WechatOauth2QrConnectRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use WechatOauth2QrConnectRequest.newBuilder() to construct.
  private WechatOauth2QrConnectRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private WechatOauth2QrConnectRequest() {
    appId_ = "";
    redirectUri_ = "";
    state_ = "";
    language_ = 0;
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new WechatOauth2QrConnectRequest();
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.orchid.v1.Orchid.internal_static_palm_orchid_v1_WechatOauth2QrConnectRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.orchid.v1.Orchid.internal_static_palm_orchid_v1_WechatOauth2QrConnectRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest.class, com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest.Builder.class);
  }

  /**
   * Protobuf enum {@code palm.orchid.v1.WechatOauth2QrConnectRequest.Language}
   */
  public enum Language
      implements com.google.protobuf.ProtocolMessageEnum {
    /**
     * <code>EN = 0;</code>
     */
    EN(0),
    /**
     * <code>CN = 1;</code>
     */
    CN(1),
    /**
     * <code>TW = 2;</code>
     */
    TW(2),
    UNRECOGNIZED(-1),
    ;

    /**
     * <code>EN = 0;</code>
     */
    public static final int EN_VALUE = 0;
    /**
     * <code>CN = 1;</code>
     */
    public static final int CN_VALUE = 1;
    /**
     * <code>TW = 2;</code>
     */
    public static final int TW_VALUE = 2;


    public final int getNumber() {
      if (this == UNRECOGNIZED) {
        throw new java.lang.IllegalArgumentException(
            "Can't get the number of an unknown enum value.");
      }
      return value;
    }

    /**
     * @param value The numeric wire value of the corresponding enum entry.
     * @return The enum associated with the given numeric wire value.
     * @deprecated Use {@link #forNumber(int)} instead.
     */
    @java.lang.Deprecated
    public static Language valueOf(int value) {
      return forNumber(value);
    }

    /**
     * @param value The numeric wire value of the corresponding enum entry.
     * @return The enum associated with the given numeric wire value.
     */
    public static Language forNumber(int value) {
      switch (value) {
        case 0: return EN;
        case 1: return CN;
        case 2: return TW;
        default: return null;
      }
    }

    public static com.google.protobuf.Internal.EnumLiteMap<Language>
        internalGetValueMap() {
      return internalValueMap;
    }
    private static final com.google.protobuf.Internal.EnumLiteMap<
        Language> internalValueMap =
          new com.google.protobuf.Internal.EnumLiteMap<Language>() {
            public Language findValueByNumber(int number) {
              return Language.forNumber(number);
            }
          };

    public final com.google.protobuf.Descriptors.EnumValueDescriptor
        getValueDescriptor() {
      if (this == UNRECOGNIZED) {
        throw new java.lang.IllegalStateException(
            "Can't get the descriptor of an unrecognized enum value.");
      }
      return getDescriptor().getValues().get(ordinal());
    }
    public final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptorForType() {
      return getDescriptor();
    }
    public static final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest.getDescriptor().getEnumTypes().get(0);
    }

    private static final Language[] VALUES = values();

    public static Language valueOf(
        com.google.protobuf.Descriptors.EnumValueDescriptor desc) {
      if (desc.getType() != getDescriptor()) {
        throw new java.lang.IllegalArgumentException(
          "EnumValueDescriptor is not for this type.");
      }
      if (desc.getIndex() == -1) {
        return UNRECOGNIZED;
      }
      return VALUES[desc.getIndex()];
    }

    private final int value;

    private Language(int value) {
      this.value = value;
    }

    // @@protoc_insertion_point(enum_scope:palm.orchid.v1.WechatOauth2QrConnectRequest.Language)
  }

  public static final int APP_ID_FIELD_NUMBER = 1;
  @SuppressWarnings("serial")
  private volatile java.lang.Object appId_ = "";
  /**
   * <code>string app_id = 1;</code>
   * @return The appId.
   */
  @java.lang.Override
  public java.lang.String getAppId() {
    java.lang.Object ref = appId_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      appId_ = s;
      return s;
    }
  }
  /**
   * <code>string app_id = 1;</code>
   * @return The bytes for appId.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getAppIdBytes() {
    java.lang.Object ref = appId_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      appId_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int REDIRECT_URI_FIELD_NUMBER = 2;
  @SuppressWarnings("serial")
  private volatile java.lang.Object redirectUri_ = "";
  /**
   * <code>string redirect_uri = 2;</code>
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
   * <code>string redirect_uri = 2;</code>
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

  public static final int STATE_FIELD_NUMBER = 3;
  @SuppressWarnings("serial")
  private volatile java.lang.Object state_ = "";
  /**
   * <code>string state = 3;</code>
   * @return The state.
   */
  @java.lang.Override
  public java.lang.String getState() {
    java.lang.Object ref = state_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      state_ = s;
      return s;
    }
  }
  /**
   * <code>string state = 3;</code>
   * @return The bytes for state.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getStateBytes() {
    java.lang.Object ref = state_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      state_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int LANGUAGE_FIELD_NUMBER = 9;
  private int language_ = 0;
  /**
   * <code>.palm.orchid.v1.WechatOauth2QrConnectRequest.Language language = 9;</code>
   * @return The enum numeric value on the wire for language.
   */
  @java.lang.Override public int getLanguageValue() {
    return language_;
  }
  /**
   * <code>.palm.orchid.v1.WechatOauth2QrConnectRequest.Language language = 9;</code>
   * @return The language.
   */
  @java.lang.Override public com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest.Language getLanguage() {
    com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest.Language result = com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest.Language.forNumber(language_);
    return result == null ? com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest.Language.UNRECOGNIZED : result;
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
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(appId_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, appId_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(redirectUri_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, redirectUri_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(state_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, state_);
    }
    if (language_ != com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest.Language.EN.getNumber()) {
      output.writeEnum(9, language_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(appId_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, appId_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(redirectUri_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, redirectUri_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(state_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, state_);
    }
    if (language_ != com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest.Language.EN.getNumber()) {
      size += com.google.protobuf.CodedOutputStream
        .computeEnumSize(9, language_);
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest other = (com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest) obj;

    if (!getAppId()
        .equals(other.getAppId())) return false;
    if (!getRedirectUri()
        .equals(other.getRedirectUri())) return false;
    if (!getState()
        .equals(other.getState())) return false;
    if (language_ != other.language_) return false;
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
    hash = (37 * hash) + APP_ID_FIELD_NUMBER;
    hash = (53 * hash) + getAppId().hashCode();
    hash = (37 * hash) + REDIRECT_URI_FIELD_NUMBER;
    hash = (53 * hash) + getRedirectUri().hashCode();
    hash = (37 * hash) + STATE_FIELD_NUMBER;
    hash = (53 * hash) + getState().hashCode();
    hash = (37 * hash) + LANGUAGE_FIELD_NUMBER;
    hash = (53 * hash) + language_;
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest prototype) {
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
   * Protobuf type {@code palm.orchid.v1.WechatOauth2QrConnectRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.orchid.v1.WechatOauth2QrConnectRequest)
      com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.orchid.v1.Orchid.internal_static_palm_orchid_v1_WechatOauth2QrConnectRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.orchid.v1.Orchid.internal_static_palm_orchid_v1_WechatOauth2QrConnectRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest.class, com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest.newBuilder()
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
      appId_ = "";
      redirectUri_ = "";
      state_ = "";
      language_ = 0;
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.orchid.v1.Orchid.internal_static_palm_orchid_v1_WechatOauth2QrConnectRequest_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest build() {
      com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest buildPartial() {
      com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest result = new com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.appId_ = appId_;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.redirectUri_ = redirectUri_;
      }
      if (((from_bitField0_ & 0x00000004) != 0)) {
        result.state_ = state_;
      }
      if (((from_bitField0_ & 0x00000008) != 0)) {
        result.language_ = language_;
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
      if (other instanceof com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest other) {
      if (other == com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest.getDefaultInstance()) return this;
      if (!other.getAppId().isEmpty()) {
        appId_ = other.appId_;
        bitField0_ |= 0x00000001;
        onChanged();
      }
      if (!other.getRedirectUri().isEmpty()) {
        redirectUri_ = other.redirectUri_;
        bitField0_ |= 0x00000002;
        onChanged();
      }
      if (!other.getState().isEmpty()) {
        state_ = other.state_;
        bitField0_ |= 0x00000004;
        onChanged();
      }
      if (other.language_ != 0) {
        setLanguageValue(other.getLanguageValue());
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
              appId_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 18: {
              redirectUri_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000002;
              break;
            } // case 18
            case 26: {
              state_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000004;
              break;
            } // case 26
            case 72: {
              language_ = input.readEnum();
              bitField0_ |= 0x00000008;
              break;
            } // case 72
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

    private java.lang.Object appId_ = "";
    /**
     * <code>string app_id = 1;</code>
     * @return The appId.
     */
    public java.lang.String getAppId() {
      java.lang.Object ref = appId_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        appId_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string app_id = 1;</code>
     * @return The bytes for appId.
     */
    public com.google.protobuf.ByteString
        getAppIdBytes() {
      java.lang.Object ref = appId_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        appId_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string app_id = 1;</code>
     * @param value The appId to set.
     * @return This builder for chaining.
     */
    public Builder setAppId(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      appId_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>string app_id = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearAppId() {
      appId_ = getDefaultInstance().getAppId();
      bitField0_ = (bitField0_ & ~0x00000001);
      onChanged();
      return this;
    }
    /**
     * <code>string app_id = 1;</code>
     * @param value The bytes for appId to set.
     * @return This builder for chaining.
     */
    public Builder setAppIdBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      appId_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }

    private java.lang.Object redirectUri_ = "";
    /**
     * <code>string redirect_uri = 2;</code>
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
     * <code>string redirect_uri = 2;</code>
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
     * <code>string redirect_uri = 2;</code>
     * @param value The redirectUri to set.
     * @return This builder for chaining.
     */
    public Builder setRedirectUri(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      redirectUri_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>string redirect_uri = 2;</code>
     * @return This builder for chaining.
     */
    public Builder clearRedirectUri() {
      redirectUri_ = getDefaultInstance().getRedirectUri();
      bitField0_ = (bitField0_ & ~0x00000002);
      onChanged();
      return this;
    }
    /**
     * <code>string redirect_uri = 2;</code>
     * @param value The bytes for redirectUri to set.
     * @return This builder for chaining.
     */
    public Builder setRedirectUriBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      redirectUri_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }

    private java.lang.Object state_ = "";
    /**
     * <code>string state = 3;</code>
     * @return The state.
     */
    public java.lang.String getState() {
      java.lang.Object ref = state_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        state_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string state = 3;</code>
     * @return The bytes for state.
     */
    public com.google.protobuf.ByteString
        getStateBytes() {
      java.lang.Object ref = state_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        state_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string state = 3;</code>
     * @param value The state to set.
     * @return This builder for chaining.
     */
    public Builder setState(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      state_ = value;
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>string state = 3;</code>
     * @return This builder for chaining.
     */
    public Builder clearState() {
      state_ = getDefaultInstance().getState();
      bitField0_ = (bitField0_ & ~0x00000004);
      onChanged();
      return this;
    }
    /**
     * <code>string state = 3;</code>
     * @param value The bytes for state to set.
     * @return This builder for chaining.
     */
    public Builder setStateBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      state_ = value;
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }

    private int language_ = 0;
    /**
     * <code>.palm.orchid.v1.WechatOauth2QrConnectRequest.Language language = 9;</code>
     * @return The enum numeric value on the wire for language.
     */
    @java.lang.Override public int getLanguageValue() {
      return language_;
    }
    /**
     * <code>.palm.orchid.v1.WechatOauth2QrConnectRequest.Language language = 9;</code>
     * @param value The enum numeric value on the wire for language to set.
     * @return This builder for chaining.
     */
    public Builder setLanguageValue(int value) {
      language_ = value;
      bitField0_ |= 0x00000008;
      onChanged();
      return this;
    }
    /**
     * <code>.palm.orchid.v1.WechatOauth2QrConnectRequest.Language language = 9;</code>
     * @return The language.
     */
    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest.Language getLanguage() {
      com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest.Language result = com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest.Language.forNumber(language_);
      return result == null ? com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest.Language.UNRECOGNIZED : result;
    }
    /**
     * <code>.palm.orchid.v1.WechatOauth2QrConnectRequest.Language language = 9;</code>
     * @param value The language to set.
     * @return This builder for chaining.
     */
    public Builder setLanguage(com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest.Language value) {
      if (value == null) {
        throw new NullPointerException();
      }
      bitField0_ |= 0x00000008;
      language_ = value.getNumber();
      onChanged();
      return this;
    }
    /**
     * <code>.palm.orchid.v1.WechatOauth2QrConnectRequest.Language language = 9;</code>
     * @return This builder for chaining.
     */
    public Builder clearLanguage() {
      bitField0_ = (bitField0_ & ~0x00000008);
      language_ = 0;
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


    // @@protoc_insertion_point(builder_scope:palm.orchid.v1.WechatOauth2QrConnectRequest)
  }

  // @@protoc_insertion_point(class_scope:palm.orchid.v1.WechatOauth2QrConnectRequest)
  private static final com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest();
  }

  public static com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<WechatOauth2QrConnectRequest>
      PARSER = new com.google.protobuf.AbstractParser<WechatOauth2QrConnectRequest>() {
    @java.lang.Override
    public WechatOauth2QrConnectRequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<WechatOauth2QrConnectRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<WechatOauth2QrConnectRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.orchid.v1.WechatOauth2QrConnectRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

