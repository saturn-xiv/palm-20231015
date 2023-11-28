// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: nut.proto

package com.github.saturn_xiv.palm.plugins.nut.v1;

/**
 * Protobuf type {@code palm.nut.v1.LocaleByLangAndCodeRequest}
 */
public final class LocaleByLangAndCodeRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.nut.v1.LocaleByLangAndCodeRequest)
    LocaleByLangAndCodeRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use LocaleByLangAndCodeRequest.newBuilder() to construct.
  private LocaleByLangAndCodeRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private LocaleByLangAndCodeRequest() {
    lang_ = "";
    code_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new LocaleByLangAndCodeRequest();
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.internal_static_palm_nut_v1_LocaleByLangAndCodeRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.internal_static_palm_nut_v1_LocaleByLangAndCodeRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest.class, com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest.Builder.class);
  }

  public static final int LANG_FIELD_NUMBER = 1;
  @SuppressWarnings("serial")
  private volatile java.lang.Object lang_ = "";
  /**
   * <code>string lang = 1;</code>
   * @return The lang.
   */
  @java.lang.Override
  public java.lang.String getLang() {
    java.lang.Object ref = lang_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      lang_ = s;
      return s;
    }
  }
  /**
   * <code>string lang = 1;</code>
   * @return The bytes for lang.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getLangBytes() {
    java.lang.Object ref = lang_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      lang_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int CODE_FIELD_NUMBER = 2;
  @SuppressWarnings("serial")
  private volatile java.lang.Object code_ = "";
  /**
   * <code>string code = 2;</code>
   * @return The code.
   */
  @java.lang.Override
  public java.lang.String getCode() {
    java.lang.Object ref = code_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      code_ = s;
      return s;
    }
  }
  /**
   * <code>string code = 2;</code>
   * @return The bytes for code.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getCodeBytes() {
    java.lang.Object ref = code_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      code_ = b;
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
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(lang_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, lang_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(code_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, code_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(lang_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, lang_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(code_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, code_);
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest other = (com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest) obj;

    if (!getLang()
        .equals(other.getLang())) return false;
    if (!getCode()
        .equals(other.getCode())) return false;
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
    hash = (37 * hash) + LANG_FIELD_NUMBER;
    hash = (53 * hash) + getLang().hashCode();
    hash = (37 * hash) + CODE_FIELD_NUMBER;
    hash = (53 * hash) + getCode().hashCode();
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest prototype) {
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
   * Protobuf type {@code palm.nut.v1.LocaleByLangAndCodeRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.nut.v1.LocaleByLangAndCodeRequest)
      com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.internal_static_palm_nut_v1_LocaleByLangAndCodeRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.internal_static_palm_nut_v1_LocaleByLangAndCodeRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest.class, com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest.newBuilder()
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
      lang_ = "";
      code_ = "";
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.nut.v1.Nut.internal_static_palm_nut_v1_LocaleByLangAndCodeRequest_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest build() {
      com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest buildPartial() {
      com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest result = new com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.lang_ = lang_;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.code_ = code_;
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
      if (other instanceof com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest other) {
      if (other == com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest.getDefaultInstance()) return this;
      if (!other.getLang().isEmpty()) {
        lang_ = other.lang_;
        bitField0_ |= 0x00000001;
        onChanged();
      }
      if (!other.getCode().isEmpty()) {
        code_ = other.code_;
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
              lang_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 18: {
              code_ = input.readStringRequireUtf8();
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

    private java.lang.Object lang_ = "";
    /**
     * <code>string lang = 1;</code>
     * @return The lang.
     */
    public java.lang.String getLang() {
      java.lang.Object ref = lang_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        lang_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string lang = 1;</code>
     * @return The bytes for lang.
     */
    public com.google.protobuf.ByteString
        getLangBytes() {
      java.lang.Object ref = lang_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        lang_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string lang = 1;</code>
     * @param value The lang to set.
     * @return This builder for chaining.
     */
    public Builder setLang(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      lang_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>string lang = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearLang() {
      lang_ = getDefaultInstance().getLang();
      bitField0_ = (bitField0_ & ~0x00000001);
      onChanged();
      return this;
    }
    /**
     * <code>string lang = 1;</code>
     * @param value The bytes for lang to set.
     * @return This builder for chaining.
     */
    public Builder setLangBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      lang_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }

    private java.lang.Object code_ = "";
    /**
     * <code>string code = 2;</code>
     * @return The code.
     */
    public java.lang.String getCode() {
      java.lang.Object ref = code_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        code_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string code = 2;</code>
     * @return The bytes for code.
     */
    public com.google.protobuf.ByteString
        getCodeBytes() {
      java.lang.Object ref = code_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        code_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string code = 2;</code>
     * @param value The code to set.
     * @return This builder for chaining.
     */
    public Builder setCode(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      code_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>string code = 2;</code>
     * @return This builder for chaining.
     */
    public Builder clearCode() {
      code_ = getDefaultInstance().getCode();
      bitField0_ = (bitField0_ & ~0x00000002);
      onChanged();
      return this;
    }
    /**
     * <code>string code = 2;</code>
     * @param value The bytes for code to set.
     * @return This builder for chaining.
     */
    public Builder setCodeBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      code_ = value;
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


    // @@protoc_insertion_point(builder_scope:palm.nut.v1.LocaleByLangAndCodeRequest)
  }

  // @@protoc_insertion_point(class_scope:palm.nut.v1.LocaleByLangAndCodeRequest)
  private static final com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest();
  }

  public static com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<LocaleByLangAndCodeRequest>
      PARSER = new com.google.protobuf.AbstractParser<LocaleByLangAndCodeRequest>() {
    @java.lang.Override
    public LocaleByLangAndCodeRequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<LocaleByLangAndCodeRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<LocaleByLangAndCodeRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.nut.v1.LocaleByLangAndCodeRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

