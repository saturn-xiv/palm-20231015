// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: auth.proto

package com.github.saturn_xiv.palm.plugins.auth.v1;

/**
 * Protobuf type {@code palm.auth.v1.AttachmentShowResponse}
 */
public final class AttachmentShowResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.auth.v1.AttachmentShowResponse)
    AttachmentShowResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use AttachmentShowResponse.newBuilder() to construct.
  private AttachmentShowResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private AttachmentShowResponse() {
    url_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new AttachmentShowResponse();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.auth.v1.Auth.internal_static_palm_auth_v1_AttachmentShowResponse_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.auth.v1.Auth.internal_static_palm_auth_v1_AttachmentShowResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse.class, com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse.Builder.class);
  }

  public static final int ITEM_FIELD_NUMBER = 1;
  private com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.Item item_;
  /**
   * <code>.palm.auth.v1.AttachmentIndexResponse.Item item = 1;</code>
   * @return Whether the item field is set.
   */
  @java.lang.Override
  public boolean hasItem() {
    return item_ != null;
  }
  /**
   * <code>.palm.auth.v1.AttachmentIndexResponse.Item item = 1;</code>
   * @return The item.
   */
  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.Item getItem() {
    return item_ == null ? com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.Item.getDefaultInstance() : item_;
  }
  /**
   * <code>.palm.auth.v1.AttachmentIndexResponse.Item item = 1;</code>
   */
  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.ItemOrBuilder getItemOrBuilder() {
    return item_ == null ? com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.Item.getDefaultInstance() : item_;
  }

  public static final int URL_FIELD_NUMBER = 2;
  @SuppressWarnings("serial")
  private volatile java.lang.Object url_ = "";
  /**
   * <code>string url = 2;</code>
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
   * <code>string url = 2;</code>
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
    if (item_ != null) {
      output.writeMessage(1, getItem());
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(url_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, url_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (item_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getItem());
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(url_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, url_);
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse other = (com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse) obj;

    if (hasItem() != other.hasItem()) return false;
    if (hasItem()) {
      if (!getItem()
          .equals(other.getItem())) return false;
    }
    if (!getUrl()
        .equals(other.getUrl())) return false;
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
    if (hasItem()) {
      hash = (37 * hash) + ITEM_FIELD_NUMBER;
      hash = (53 * hash) + getItem().hashCode();
    }
    hash = (37 * hash) + URL_FIELD_NUMBER;
    hash = (53 * hash) + getUrl().hashCode();
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse prototype) {
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
   * Protobuf type {@code palm.auth.v1.AttachmentShowResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.auth.v1.AttachmentShowResponse)
      com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.auth.v1.Auth.internal_static_palm_auth_v1_AttachmentShowResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.auth.v1.Auth.internal_static_palm_auth_v1_AttachmentShowResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse.class, com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse.newBuilder()
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
      item_ = null;
      if (itemBuilder_ != null) {
        itemBuilder_.dispose();
        itemBuilder_ = null;
      }
      url_ = "";
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.auth.v1.Auth.internal_static_palm_auth_v1_AttachmentShowResponse_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse build() {
      com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse buildPartial() {
      com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse result = new com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.item_ = itemBuilder_ == null
            ? item_
            : itemBuilder_.build();
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.url_ = url_;
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
      if (other instanceof com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse other) {
      if (other == com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse.getDefaultInstance()) return this;
      if (other.hasItem()) {
        mergeItem(other.getItem());
      }
      if (!other.getUrl().isEmpty()) {
        url_ = other.url_;
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
              input.readMessage(
                  getItemFieldBuilder().getBuilder(),
                  extensionRegistry);
              bitField0_ |= 0x00000001;
              break;
            } // case 10
            case 18: {
              url_ = input.readStringRequireUtf8();
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

    private com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.Item item_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.Item, com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.Item.Builder, com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.ItemOrBuilder> itemBuilder_;
    /**
     * <code>.palm.auth.v1.AttachmentIndexResponse.Item item = 1;</code>
     * @return Whether the item field is set.
     */
    public boolean hasItem() {
      return ((bitField0_ & 0x00000001) != 0);
    }
    /**
     * <code>.palm.auth.v1.AttachmentIndexResponse.Item item = 1;</code>
     * @return The item.
     */
    public com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.Item getItem() {
      if (itemBuilder_ == null) {
        return item_ == null ? com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.Item.getDefaultInstance() : item_;
      } else {
        return itemBuilder_.getMessage();
      }
    }
    /**
     * <code>.palm.auth.v1.AttachmentIndexResponse.Item item = 1;</code>
     */
    public Builder setItem(com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.Item value) {
      if (itemBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        item_ = value;
      } else {
        itemBuilder_.setMessage(value);
      }
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>.palm.auth.v1.AttachmentIndexResponse.Item item = 1;</code>
     */
    public Builder setItem(
        com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.Item.Builder builderForValue) {
      if (itemBuilder_ == null) {
        item_ = builderForValue.build();
      } else {
        itemBuilder_.setMessage(builderForValue.build());
      }
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>.palm.auth.v1.AttachmentIndexResponse.Item item = 1;</code>
     */
    public Builder mergeItem(com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.Item value) {
      if (itemBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0) &&
          item_ != null &&
          item_ != com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.Item.getDefaultInstance()) {
          getItemBuilder().mergeFrom(value);
        } else {
          item_ = value;
        }
      } else {
        itemBuilder_.mergeFrom(value);
      }
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>.palm.auth.v1.AttachmentIndexResponse.Item item = 1;</code>
     */
    public Builder clearItem() {
      bitField0_ = (bitField0_ & ~0x00000001);
      item_ = null;
      if (itemBuilder_ != null) {
        itemBuilder_.dispose();
        itemBuilder_ = null;
      }
      onChanged();
      return this;
    }
    /**
     * <code>.palm.auth.v1.AttachmentIndexResponse.Item item = 1;</code>
     */
    public com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.Item.Builder getItemBuilder() {
      bitField0_ |= 0x00000001;
      onChanged();
      return getItemFieldBuilder().getBuilder();
    }
    /**
     * <code>.palm.auth.v1.AttachmentIndexResponse.Item item = 1;</code>
     */
    public com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.ItemOrBuilder getItemOrBuilder() {
      if (itemBuilder_ != null) {
        return itemBuilder_.getMessageOrBuilder();
      } else {
        return item_ == null ?
            com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.Item.getDefaultInstance() : item_;
      }
    }
    /**
     * <code>.palm.auth.v1.AttachmentIndexResponse.Item item = 1;</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.Item, com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.Item.Builder, com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.ItemOrBuilder> 
        getItemFieldBuilder() {
      if (itemBuilder_ == null) {
        itemBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.Item, com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.Item.Builder, com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentIndexResponse.ItemOrBuilder>(
                getItem(),
                getParentForChildren(),
                isClean());
        item_ = null;
      }
      return itemBuilder_;
    }

    private java.lang.Object url_ = "";
    /**
     * <code>string url = 2;</code>
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
     * <code>string url = 2;</code>
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
     * <code>string url = 2;</code>
     * @param value The url to set.
     * @return This builder for chaining.
     */
    public Builder setUrl(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      url_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>string url = 2;</code>
     * @return This builder for chaining.
     */
    public Builder clearUrl() {
      url_ = getDefaultInstance().getUrl();
      bitField0_ = (bitField0_ & ~0x00000002);
      onChanged();
      return this;
    }
    /**
     * <code>string url = 2;</code>
     * @param value The bytes for url to set.
     * @return This builder for chaining.
     */
    public Builder setUrlBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      url_ = value;
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


    // @@protoc_insertion_point(builder_scope:palm.auth.v1.AttachmentShowResponse)
  }

  // @@protoc_insertion_point(class_scope:palm.auth.v1.AttachmentShowResponse)
  private static final com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse();
  }

  public static com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<AttachmentShowResponse>
      PARSER = new com.google.protobuf.AbstractParser<AttachmentShowResponse>() {
    @java.lang.Override
    public AttachmentShowResponse parsePartialFrom(
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

  public static com.google.protobuf.Parser<AttachmentShowResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<AttachmentShowResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.auth.v1.AttachmentShowResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

