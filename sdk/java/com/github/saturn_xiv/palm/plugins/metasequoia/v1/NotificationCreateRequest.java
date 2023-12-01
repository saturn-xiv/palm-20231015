// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: metasequoia.proto

package com.github.saturn_xiv.palm.plugins.metasequoia.v1;

/**
 * Protobuf type {@code palm.metasequoia.v1.NotificationCreateRequest}
 */
public final class NotificationCreateRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.metasequoia.v1.NotificationCreateRequest)
    NotificationCreateRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use NotificationCreateRequest.newBuilder() to construct.
  private NotificationCreateRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private NotificationCreateRequest() {
    level_ = 0;
    title_ = "";
    url_ = "";
    lang_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new NotificationCreateRequest();
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_NotificationCreateRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_NotificationCreateRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest.class, com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest.Builder.class);
  }

  public static final int LEVEL_FIELD_NUMBER = 1;
  private int level_ = 0;
  /**
   * <code>.palm.metasequoia.v1.NotificationIndexResponse.Item.Level level = 1;</code>
   * @return The enum numeric value on the wire for level.
   */
  @java.lang.Override public int getLevelValue() {
    return level_;
  }
  /**
   * <code>.palm.metasequoia.v1.NotificationIndexResponse.Item.Level level = 1;</code>
   * @return The level.
   */
  @java.lang.Override public com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationIndexResponse.Item.Level getLevel() {
    com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationIndexResponse.Item.Level result = com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationIndexResponse.Item.Level.forNumber(level_);
    return result == null ? com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationIndexResponse.Item.Level.UNRECOGNIZED : result;
  }

  public static final int TITLE_FIELD_NUMBER = 2;
  @SuppressWarnings("serial")
  private volatile java.lang.Object title_ = "";
  /**
   * <code>string title = 2;</code>
   * @return The title.
   */
  @java.lang.Override
  public java.lang.String getTitle() {
    java.lang.Object ref = title_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      title_ = s;
      return s;
    }
  }
  /**
   * <code>string title = 2;</code>
   * @return The bytes for title.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getTitleBytes() {
    java.lang.Object ref = title_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      title_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int URL_FIELD_NUMBER = 3;
  @SuppressWarnings("serial")
  private volatile java.lang.Object url_ = "";
  /**
   * <code>string url = 3;</code>
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
   * <code>string url = 3;</code>
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

  public static final int LANG_FIELD_NUMBER = 9;
  @SuppressWarnings("serial")
  private volatile java.lang.Object lang_ = "";
  /**
   * <code>string lang = 9;</code>
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
   * <code>string lang = 9;</code>
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
    if (level_ != com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationIndexResponse.Item.Level.NOTE.getNumber()) {
      output.writeEnum(1, level_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(title_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, title_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(url_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, url_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(lang_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 9, lang_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (level_ != com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationIndexResponse.Item.Level.NOTE.getNumber()) {
      size += com.google.protobuf.CodedOutputStream
        .computeEnumSize(1, level_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(title_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, title_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(url_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, url_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(lang_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(9, lang_);
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest other = (com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest) obj;

    if (level_ != other.level_) return false;
    if (!getTitle()
        .equals(other.getTitle())) return false;
    if (!getUrl()
        .equals(other.getUrl())) return false;
    if (!getLang()
        .equals(other.getLang())) return false;
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
    hash = (37 * hash) + LEVEL_FIELD_NUMBER;
    hash = (53 * hash) + level_;
    hash = (37 * hash) + TITLE_FIELD_NUMBER;
    hash = (53 * hash) + getTitle().hashCode();
    hash = (37 * hash) + URL_FIELD_NUMBER;
    hash = (53 * hash) + getUrl().hashCode();
    hash = (37 * hash) + LANG_FIELD_NUMBER;
    hash = (53 * hash) + getLang().hashCode();
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest prototype) {
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
   * Protobuf type {@code palm.metasequoia.v1.NotificationCreateRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.metasequoia.v1.NotificationCreateRequest)
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_NotificationCreateRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_NotificationCreateRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest.class, com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest.newBuilder()
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
      level_ = 0;
      title_ = "";
      url_ = "";
      lang_ = "";
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_NotificationCreateRequest_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest build() {
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest buildPartial() {
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest result = new com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.level_ = level_;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.title_ = title_;
      }
      if (((from_bitField0_ & 0x00000004) != 0)) {
        result.url_ = url_;
      }
      if (((from_bitField0_ & 0x00000008) != 0)) {
        result.lang_ = lang_;
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
      if (other instanceof com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest other) {
      if (other == com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest.getDefaultInstance()) return this;
      if (other.level_ != 0) {
        setLevelValue(other.getLevelValue());
      }
      if (!other.getTitle().isEmpty()) {
        title_ = other.title_;
        bitField0_ |= 0x00000002;
        onChanged();
      }
      if (!other.getUrl().isEmpty()) {
        url_ = other.url_;
        bitField0_ |= 0x00000004;
        onChanged();
      }
      if (!other.getLang().isEmpty()) {
        lang_ = other.lang_;
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
            case 8: {
              level_ = input.readEnum();
              bitField0_ |= 0x00000001;
              break;
            } // case 8
            case 18: {
              title_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000002;
              break;
            } // case 18
            case 26: {
              url_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000004;
              break;
            } // case 26
            case 74: {
              lang_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000008;
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

    private int level_ = 0;
    /**
     * <code>.palm.metasequoia.v1.NotificationIndexResponse.Item.Level level = 1;</code>
     * @return The enum numeric value on the wire for level.
     */
    @java.lang.Override public int getLevelValue() {
      return level_;
    }
    /**
     * <code>.palm.metasequoia.v1.NotificationIndexResponse.Item.Level level = 1;</code>
     * @param value The enum numeric value on the wire for level to set.
     * @return This builder for chaining.
     */
    public Builder setLevelValue(int value) {
      level_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>.palm.metasequoia.v1.NotificationIndexResponse.Item.Level level = 1;</code>
     * @return The level.
     */
    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationIndexResponse.Item.Level getLevel() {
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationIndexResponse.Item.Level result = com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationIndexResponse.Item.Level.forNumber(level_);
      return result == null ? com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationIndexResponse.Item.Level.UNRECOGNIZED : result;
    }
    /**
     * <code>.palm.metasequoia.v1.NotificationIndexResponse.Item.Level level = 1;</code>
     * @param value The level to set.
     * @return This builder for chaining.
     */
    public Builder setLevel(com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationIndexResponse.Item.Level value) {
      if (value == null) {
        throw new NullPointerException();
      }
      bitField0_ |= 0x00000001;
      level_ = value.getNumber();
      onChanged();
      return this;
    }
    /**
     * <code>.palm.metasequoia.v1.NotificationIndexResponse.Item.Level level = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearLevel() {
      bitField0_ = (bitField0_ & ~0x00000001);
      level_ = 0;
      onChanged();
      return this;
    }

    private java.lang.Object title_ = "";
    /**
     * <code>string title = 2;</code>
     * @return The title.
     */
    public java.lang.String getTitle() {
      java.lang.Object ref = title_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        title_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string title = 2;</code>
     * @return The bytes for title.
     */
    public com.google.protobuf.ByteString
        getTitleBytes() {
      java.lang.Object ref = title_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        title_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string title = 2;</code>
     * @param value The title to set.
     * @return This builder for chaining.
     */
    public Builder setTitle(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      title_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>string title = 2;</code>
     * @return This builder for chaining.
     */
    public Builder clearTitle() {
      title_ = getDefaultInstance().getTitle();
      bitField0_ = (bitField0_ & ~0x00000002);
      onChanged();
      return this;
    }
    /**
     * <code>string title = 2;</code>
     * @param value The bytes for title to set.
     * @return This builder for chaining.
     */
    public Builder setTitleBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      title_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }

    private java.lang.Object url_ = "";
    /**
     * <code>string url = 3;</code>
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
     * <code>string url = 3;</code>
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
     * <code>string url = 3;</code>
     * @param value The url to set.
     * @return This builder for chaining.
     */
    public Builder setUrl(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      url_ = value;
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>string url = 3;</code>
     * @return This builder for chaining.
     */
    public Builder clearUrl() {
      url_ = getDefaultInstance().getUrl();
      bitField0_ = (bitField0_ & ~0x00000004);
      onChanged();
      return this;
    }
    /**
     * <code>string url = 3;</code>
     * @param value The bytes for url to set.
     * @return This builder for chaining.
     */
    public Builder setUrlBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      url_ = value;
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }

    private java.lang.Object lang_ = "";
    /**
     * <code>string lang = 9;</code>
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
     * <code>string lang = 9;</code>
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
     * <code>string lang = 9;</code>
     * @param value The lang to set.
     * @return This builder for chaining.
     */
    public Builder setLang(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      lang_ = value;
      bitField0_ |= 0x00000008;
      onChanged();
      return this;
    }
    /**
     * <code>string lang = 9;</code>
     * @return This builder for chaining.
     */
    public Builder clearLang() {
      lang_ = getDefaultInstance().getLang();
      bitField0_ = (bitField0_ & ~0x00000008);
      onChanged();
      return this;
    }
    /**
     * <code>string lang = 9;</code>
     * @param value The bytes for lang to set.
     * @return This builder for chaining.
     */
    public Builder setLangBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      lang_ = value;
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


    // @@protoc_insertion_point(builder_scope:palm.metasequoia.v1.NotificationCreateRequest)
  }

  // @@protoc_insertion_point(class_scope:palm.metasequoia.v1.NotificationCreateRequest)
  private static final com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest();
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<NotificationCreateRequest>
      PARSER = new com.google.protobuf.AbstractParser<NotificationCreateRequest>() {
    @java.lang.Override
    public NotificationCreateRequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<NotificationCreateRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<NotificationCreateRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.metasequoia.v1.NotificationCreateRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

