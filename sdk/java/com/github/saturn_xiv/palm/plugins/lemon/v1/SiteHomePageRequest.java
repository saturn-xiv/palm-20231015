// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: lemon.proto

package com.github.saturn_xiv.palm.plugins.lemon.v1;

/**
 * Protobuf type {@code palm.lemon.v1.SiteHomePageRequest}
 */
public final class SiteHomePageRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.lemon.v1.SiteHomePageRequest)
    SiteHomePageRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use SiteHomePageRequest.newBuilder() to construct.
  private SiteHomePageRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private SiteHomePageRequest() {
    locale_ = "";
    theme_ = 0;
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new SiteHomePageRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.lemon.v1.Lemon.internal_static_palm_lemon_v1_SiteHomePageRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.lemon.v1.Lemon.internal_static_palm_lemon_v1_SiteHomePageRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest.class, com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest.Builder.class);
  }

  public static final int LOCALE_FIELD_NUMBER = 1;
  @SuppressWarnings("serial")
  private volatile java.lang.Object locale_ = "";
  /**
   * <code>string locale = 1;</code>
   * @return The locale.
   */
  @java.lang.Override
  public java.lang.String getLocale() {
    java.lang.Object ref = locale_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      locale_ = s;
      return s;
    }
  }
  /**
   * <code>string locale = 1;</code>
   * @return The bytes for locale.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getLocaleBytes() {
    java.lang.Object ref = locale_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      locale_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int THEME_FIELD_NUMBER = 2;
  private int theme_ = 0;
  /**
   * <code>.palm.lemon.v1.Theme theme = 2;</code>
   * @return The enum numeric value on the wire for theme.
   */
  @java.lang.Override public int getThemeValue() {
    return theme_;
  }
  /**
   * <code>.palm.lemon.v1.Theme theme = 2;</code>
   * @return The theme.
   */
  @java.lang.Override public com.github.saturn_xiv.palm.plugins.lemon.v1.Theme getTheme() {
    com.github.saturn_xiv.palm.plugins.lemon.v1.Theme result = com.github.saturn_xiv.palm.plugins.lemon.v1.Theme.forNumber(theme_);
    return result == null ? com.github.saturn_xiv.palm.plugins.lemon.v1.Theme.UNRECOGNIZED : result;
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
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(locale_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, locale_);
    }
    if (theme_ != com.github.saturn_xiv.palm.plugins.lemon.v1.Theme.Universal.getNumber()) {
      output.writeEnum(2, theme_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(locale_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, locale_);
    }
    if (theme_ != com.github.saturn_xiv.palm.plugins.lemon.v1.Theme.Universal.getNumber()) {
      size += com.google.protobuf.CodedOutputStream
        .computeEnumSize(2, theme_);
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest other = (com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest) obj;

    if (!getLocale()
        .equals(other.getLocale())) return false;
    if (theme_ != other.theme_) return false;
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
    hash = (37 * hash) + LOCALE_FIELD_NUMBER;
    hash = (53 * hash) + getLocale().hashCode();
    hash = (37 * hash) + THEME_FIELD_NUMBER;
    hash = (53 * hash) + theme_;
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest prototype) {
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
   * Protobuf type {@code palm.lemon.v1.SiteHomePageRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.lemon.v1.SiteHomePageRequest)
      com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.lemon.v1.Lemon.internal_static_palm_lemon_v1_SiteHomePageRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.lemon.v1.Lemon.internal_static_palm_lemon_v1_SiteHomePageRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest.class, com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest.newBuilder()
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
      locale_ = "";
      theme_ = 0;
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.lemon.v1.Lemon.internal_static_palm_lemon_v1_SiteHomePageRequest_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest build() {
      com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest buildPartial() {
      com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest result = new com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.locale_ = locale_;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.theme_ = theme_;
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
      if (other instanceof com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest other) {
      if (other == com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest.getDefaultInstance()) return this;
      if (!other.getLocale().isEmpty()) {
        locale_ = other.locale_;
        bitField0_ |= 0x00000001;
        onChanged();
      }
      if (other.theme_ != 0) {
        setThemeValue(other.getThemeValue());
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
              locale_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 16: {
              theme_ = input.readEnum();
              bitField0_ |= 0x00000002;
              break;
            } // case 16
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

    private java.lang.Object locale_ = "";
    /**
     * <code>string locale = 1;</code>
     * @return The locale.
     */
    public java.lang.String getLocale() {
      java.lang.Object ref = locale_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        locale_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string locale = 1;</code>
     * @return The bytes for locale.
     */
    public com.google.protobuf.ByteString
        getLocaleBytes() {
      java.lang.Object ref = locale_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        locale_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string locale = 1;</code>
     * @param value The locale to set.
     * @return This builder for chaining.
     */
    public Builder setLocale(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      locale_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>string locale = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearLocale() {
      locale_ = getDefaultInstance().getLocale();
      bitField0_ = (bitField0_ & ~0x00000001);
      onChanged();
      return this;
    }
    /**
     * <code>string locale = 1;</code>
     * @param value The bytes for locale to set.
     * @return This builder for chaining.
     */
    public Builder setLocaleBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      locale_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }

    private int theme_ = 0;
    /**
     * <code>.palm.lemon.v1.Theme theme = 2;</code>
     * @return The enum numeric value on the wire for theme.
     */
    @java.lang.Override public int getThemeValue() {
      return theme_;
    }
    /**
     * <code>.palm.lemon.v1.Theme theme = 2;</code>
     * @param value The enum numeric value on the wire for theme to set.
     * @return This builder for chaining.
     */
    public Builder setThemeValue(int value) {
      theme_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>.palm.lemon.v1.Theme theme = 2;</code>
     * @return The theme.
     */
    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.lemon.v1.Theme getTheme() {
      com.github.saturn_xiv.palm.plugins.lemon.v1.Theme result = com.github.saturn_xiv.palm.plugins.lemon.v1.Theme.forNumber(theme_);
      return result == null ? com.github.saturn_xiv.palm.plugins.lemon.v1.Theme.UNRECOGNIZED : result;
    }
    /**
     * <code>.palm.lemon.v1.Theme theme = 2;</code>
     * @param value The theme to set.
     * @return This builder for chaining.
     */
    public Builder setTheme(com.github.saturn_xiv.palm.plugins.lemon.v1.Theme value) {
      if (value == null) {
        throw new NullPointerException();
      }
      bitField0_ |= 0x00000002;
      theme_ = value.getNumber();
      onChanged();
      return this;
    }
    /**
     * <code>.palm.lemon.v1.Theme theme = 2;</code>
     * @return This builder for chaining.
     */
    public Builder clearTheme() {
      bitField0_ = (bitField0_ & ~0x00000002);
      theme_ = 0;
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


    // @@protoc_insertion_point(builder_scope:palm.lemon.v1.SiteHomePageRequest)
  }

  // @@protoc_insertion_point(class_scope:palm.lemon.v1.SiteHomePageRequest)
  private static final com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest();
  }

  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<SiteHomePageRequest>
      PARSER = new com.google.protobuf.AbstractParser<SiteHomePageRequest>() {
    @java.lang.Override
    public SiteHomePageRequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<SiteHomePageRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<SiteHomePageRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.lemon.v1.SiteHomePageRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

