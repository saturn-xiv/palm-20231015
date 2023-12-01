// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: metasequoia.proto

// Protobuf Java Version: 3.25.0
package com.github.saturn_xiv.palm.plugins.metasequoia.v1;

/**
 * Protobuf type {@code palm.metasequoia.v1.SiteSetKeywordsRequest}
 */
public final class SiteSetKeywordsRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.metasequoia.v1.SiteSetKeywordsRequest)
    SiteSetKeywordsRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use SiteSetKeywordsRequest.newBuilder() to construct.
  private SiteSetKeywordsRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private SiteSetKeywordsRequest() {
    items_ =
        com.google.protobuf.LazyStringArrayList.emptyList();
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new SiteSetKeywordsRequest();
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_SiteSetKeywordsRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_SiteSetKeywordsRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest.class, com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest.Builder.class);
  }

  public static final int ITEMS_FIELD_NUMBER = 1;
  @SuppressWarnings("serial")
  private com.google.protobuf.LazyStringArrayList items_ =
      com.google.protobuf.LazyStringArrayList.emptyList();
  /**
   * <code>repeated string items = 1;</code>
   * @return A list containing the items.
   */
  public com.google.protobuf.ProtocolStringList
      getItemsList() {
    return items_;
  }
  /**
   * <code>repeated string items = 1;</code>
   * @return The count of items.
   */
  public int getItemsCount() {
    return items_.size();
  }
  /**
   * <code>repeated string items = 1;</code>
   * @param index The index of the element to return.
   * @return The items at the given index.
   */
  public java.lang.String getItems(int index) {
    return items_.get(index);
  }
  /**
   * <code>repeated string items = 1;</code>
   * @param index The index of the value to return.
   * @return The bytes of the items at the given index.
   */
  public com.google.protobuf.ByteString
      getItemsBytes(int index) {
    return items_.getByteString(index);
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
    for (int i = 0; i < items_.size(); i++) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, items_.getRaw(i));
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    {
      int dataSize = 0;
      for (int i = 0; i < items_.size(); i++) {
        dataSize += computeStringSizeNoTag(items_.getRaw(i));
      }
      size += dataSize;
      size += 1 * getItemsList().size();
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest other = (com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest) obj;

    if (!getItemsList()
        .equals(other.getItemsList())) return false;
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
    if (getItemsCount() > 0) {
      hash = (37 * hash) + ITEMS_FIELD_NUMBER;
      hash = (53 * hash) + getItemsList().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest prototype) {
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
   * Protobuf type {@code palm.metasequoia.v1.SiteSetKeywordsRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.metasequoia.v1.SiteSetKeywordsRequest)
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_SiteSetKeywordsRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_SiteSetKeywordsRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest.class, com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest.newBuilder()
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
      items_ =
          com.google.protobuf.LazyStringArrayList.emptyList();
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.Metasequoia.internal_static_palm_metasequoia_v1_SiteSetKeywordsRequest_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest build() {
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest buildPartial() {
      com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest result = new com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        items_.makeImmutable();
        result.items_ = items_;
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
      if (other instanceof com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest other) {
      if (other == com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest.getDefaultInstance()) return this;
      if (!other.items_.isEmpty()) {
        if (items_.isEmpty()) {
          items_ = other.items_;
          bitField0_ |= 0x00000001;
        } else {
          ensureItemsIsMutable();
          items_.addAll(other.items_);
        }
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
              java.lang.String s = input.readStringRequireUtf8();
              ensureItemsIsMutable();
              items_.add(s);
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

    private com.google.protobuf.LazyStringArrayList items_ =
        com.google.protobuf.LazyStringArrayList.emptyList();
    private void ensureItemsIsMutable() {
      if (!items_.isModifiable()) {
        items_ = new com.google.protobuf.LazyStringArrayList(items_);
      }
      bitField0_ |= 0x00000001;
    }
    /**
     * <code>repeated string items = 1;</code>
     * @return A list containing the items.
     */
    public com.google.protobuf.ProtocolStringList
        getItemsList() {
      items_.makeImmutable();
      return items_;
    }
    /**
     * <code>repeated string items = 1;</code>
     * @return The count of items.
     */
    public int getItemsCount() {
      return items_.size();
    }
    /**
     * <code>repeated string items = 1;</code>
     * @param index The index of the element to return.
     * @return The items at the given index.
     */
    public java.lang.String getItems(int index) {
      return items_.get(index);
    }
    /**
     * <code>repeated string items = 1;</code>
     * @param index The index of the value to return.
     * @return The bytes of the items at the given index.
     */
    public com.google.protobuf.ByteString
        getItemsBytes(int index) {
      return items_.getByteString(index);
    }
    /**
     * <code>repeated string items = 1;</code>
     * @param index The index to set the value at.
     * @param value The items to set.
     * @return This builder for chaining.
     */
    public Builder setItems(
        int index, java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      ensureItemsIsMutable();
      items_.set(index, value);
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>repeated string items = 1;</code>
     * @param value The items to add.
     * @return This builder for chaining.
     */
    public Builder addItems(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      ensureItemsIsMutable();
      items_.add(value);
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>repeated string items = 1;</code>
     * @param values The items to add.
     * @return This builder for chaining.
     */
    public Builder addAllItems(
        java.lang.Iterable<java.lang.String> values) {
      ensureItemsIsMutable();
      com.google.protobuf.AbstractMessageLite.Builder.addAll(
          values, items_);
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>repeated string items = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearItems() {
      items_ =
        com.google.protobuf.LazyStringArrayList.emptyList();
      bitField0_ = (bitField0_ & ~0x00000001);;
      onChanged();
      return this;
    }
    /**
     * <code>repeated string items = 1;</code>
     * @param value The bytes of the items to add.
     * @return This builder for chaining.
     */
    public Builder addItemsBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      ensureItemsIsMutable();
      items_.add(value);
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


    // @@protoc_insertion_point(builder_scope:palm.metasequoia.v1.SiteSetKeywordsRequest)
  }

  // @@protoc_insertion_point(class_scope:palm.metasequoia.v1.SiteSetKeywordsRequest)
  private static final com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest();
  }

  public static com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<SiteSetKeywordsRequest>
      PARSER = new com.google.protobuf.AbstractParser<SiteSetKeywordsRequest>() {
    @java.lang.Override
    public SiteSetKeywordsRequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<SiteSetKeywordsRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<SiteSetKeywordsRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.metasequoia.v1.SiteSetKeywordsRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

