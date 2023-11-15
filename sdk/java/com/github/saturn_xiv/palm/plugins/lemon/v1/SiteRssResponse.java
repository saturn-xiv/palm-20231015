// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: lemon.proto

package com.github.saturn_xiv.palm.plugins.lemon.v1;

/**
 * Protobuf type {@code palm.lemon.v1.SiteRssResponse}
 */
public final class SiteRssResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.lemon.v1.SiteRssResponse)
    SiteRssResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use SiteRssResponse.newBuilder() to construct.
  private SiteRssResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private SiteRssResponse() {
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new SiteRssResponse();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.lemon.v1.Lemon.internal_static_palm_lemon_v1_SiteRssResponse_descriptor;
  }

  @SuppressWarnings({"rawtypes"})
  @java.lang.Override
  protected com.google.protobuf.MapField internalGetMapField(
      int number) {
    switch (number) {
      case 1:
        return internalGetItems();
      default:
        throw new RuntimeException(
            "Invalid map field number: " + number);
    }
  }
  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.lemon.v1.Lemon.internal_static_palm_lemon_v1_SiteRssResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse.class, com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse.Builder.class);
  }

  public static final int ITEMS_FIELD_NUMBER = 1;
  private static final class ItemsDefaultEntryHolder {
    static final com.google.protobuf.MapEntry<
        java.lang.String, com.github.saturn_xiv.palm.plugins.lemon.v1.Rss> defaultEntry =
            com.google.protobuf.MapEntry
            .<java.lang.String, com.github.saturn_xiv.palm.plugins.lemon.v1.Rss>newDefaultInstance(
                com.github.saturn_xiv.palm.plugins.lemon.v1.Lemon.internal_static_palm_lemon_v1_SiteRssResponse_ItemsEntry_descriptor, 
                com.google.protobuf.WireFormat.FieldType.STRING,
                "",
                com.google.protobuf.WireFormat.FieldType.MESSAGE,
                com.github.saturn_xiv.palm.plugins.lemon.v1.Rss.getDefaultInstance());
  }
  @SuppressWarnings("serial")
  private com.google.protobuf.MapField<
      java.lang.String, com.github.saturn_xiv.palm.plugins.lemon.v1.Rss> items_;
  private com.google.protobuf.MapField<java.lang.String, com.github.saturn_xiv.palm.plugins.lemon.v1.Rss>
  internalGetItems() {
    if (items_ == null) {
      return com.google.protobuf.MapField.emptyMapField(
          ItemsDefaultEntryHolder.defaultEntry);
    }
    return items_;
  }
  public int getItemsCount() {
    return internalGetItems().getMap().size();
  }
  /**
   * <code>map&lt;string, .palm.lemon.v1.Rss&gt; items = 1;</code>
   */
  @java.lang.Override
  public boolean containsItems(
      java.lang.String key) {
    if (key == null) { throw new NullPointerException("map key"); }
    return internalGetItems().getMap().containsKey(key);
  }
  /**
   * Use {@link #getItemsMap()} instead.
   */
  @java.lang.Override
  @java.lang.Deprecated
  public java.util.Map<java.lang.String, com.github.saturn_xiv.palm.plugins.lemon.v1.Rss> getItems() {
    return getItemsMap();
  }
  /**
   * <code>map&lt;string, .palm.lemon.v1.Rss&gt; items = 1;</code>
   */
  @java.lang.Override
  public java.util.Map<java.lang.String, com.github.saturn_xiv.palm.plugins.lemon.v1.Rss> getItemsMap() {
    return internalGetItems().getMap();
  }
  /**
   * <code>map&lt;string, .palm.lemon.v1.Rss&gt; items = 1;</code>
   */
  @java.lang.Override
  public /* nullable */
com.github.saturn_xiv.palm.plugins.lemon.v1.Rss getItemsOrDefault(
      java.lang.String key,
      /* nullable */
com.github.saturn_xiv.palm.plugins.lemon.v1.Rss defaultValue) {
    if (key == null) { throw new NullPointerException("map key"); }
    java.util.Map<java.lang.String, com.github.saturn_xiv.palm.plugins.lemon.v1.Rss> map =
        internalGetItems().getMap();
    return map.containsKey(key) ? map.get(key) : defaultValue;
  }
  /**
   * <code>map&lt;string, .palm.lemon.v1.Rss&gt; items = 1;</code>
   */
  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.lemon.v1.Rss getItemsOrThrow(
      java.lang.String key) {
    if (key == null) { throw new NullPointerException("map key"); }
    java.util.Map<java.lang.String, com.github.saturn_xiv.palm.plugins.lemon.v1.Rss> map =
        internalGetItems().getMap();
    if (!map.containsKey(key)) {
      throw new java.lang.IllegalArgumentException();
    }
    return map.get(key);
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
    com.google.protobuf.GeneratedMessageV3
      .serializeStringMapTo(
        output,
        internalGetItems(),
        ItemsDefaultEntryHolder.defaultEntry,
        1);
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    for (java.util.Map.Entry<java.lang.String, com.github.saturn_xiv.palm.plugins.lemon.v1.Rss> entry
         : internalGetItems().getMap().entrySet()) {
      com.google.protobuf.MapEntry<java.lang.String, com.github.saturn_xiv.palm.plugins.lemon.v1.Rss>
      items__ = ItemsDefaultEntryHolder.defaultEntry.newBuilderForType()
          .setKey(entry.getKey())
          .setValue(entry.getValue())
          .build();
      size += com.google.protobuf.CodedOutputStream
          .computeMessageSize(1, items__);
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse other = (com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse) obj;

    if (!internalGetItems().equals(
        other.internalGetItems())) return false;
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
    if (!internalGetItems().getMap().isEmpty()) {
      hash = (37 * hash) + ITEMS_FIELD_NUMBER;
      hash = (53 * hash) + internalGetItems().hashCode();
    }
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse prototype) {
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
   * Protobuf type {@code palm.lemon.v1.SiteRssResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.lemon.v1.SiteRssResponse)
      com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.lemon.v1.Lemon.internal_static_palm_lemon_v1_SiteRssResponse_descriptor;
    }

    @SuppressWarnings({"rawtypes"})
    protected com.google.protobuf.MapField internalGetMapField(
        int number) {
      switch (number) {
        case 1:
          return internalGetItems();
        default:
          throw new RuntimeException(
              "Invalid map field number: " + number);
      }
    }
    @SuppressWarnings({"rawtypes"})
    protected com.google.protobuf.MapField internalGetMutableMapField(
        int number) {
      switch (number) {
        case 1:
          return internalGetMutableItems();
        default:
          throw new RuntimeException(
              "Invalid map field number: " + number);
      }
    }
    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.lemon.v1.Lemon.internal_static_palm_lemon_v1_SiteRssResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse.class, com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse.newBuilder()
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
      internalGetMutableItems().clear();
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.lemon.v1.Lemon.internal_static_palm_lemon_v1_SiteRssResponse_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse build() {
      com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse buildPartial() {
      com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse result = new com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.items_ = internalGetItems();
        result.items_.makeImmutable();
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
      if (other instanceof com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse other) {
      if (other == com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse.getDefaultInstance()) return this;
      internalGetMutableItems().mergeFrom(
          other.internalGetItems());
      bitField0_ |= 0x00000001;
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
              com.google.protobuf.MapEntry<java.lang.String, com.github.saturn_xiv.palm.plugins.lemon.v1.Rss>
              items__ = input.readMessage(
                  ItemsDefaultEntryHolder.defaultEntry.getParserForType(), extensionRegistry);
              internalGetMutableItems().getMutableMap().put(
                  items__.getKey(), items__.getValue());
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

    private com.google.protobuf.MapField<
        java.lang.String, com.github.saturn_xiv.palm.plugins.lemon.v1.Rss> items_;
    private com.google.protobuf.MapField<java.lang.String, com.github.saturn_xiv.palm.plugins.lemon.v1.Rss>
        internalGetItems() {
      if (items_ == null) {
        return com.google.protobuf.MapField.emptyMapField(
            ItemsDefaultEntryHolder.defaultEntry);
      }
      return items_;
    }
    private com.google.protobuf.MapField<java.lang.String, com.github.saturn_xiv.palm.plugins.lemon.v1.Rss>
        internalGetMutableItems() {
      if (items_ == null) {
        items_ = com.google.protobuf.MapField.newMapField(
            ItemsDefaultEntryHolder.defaultEntry);
      }
      if (!items_.isMutable()) {
        items_ = items_.copy();
      }
      bitField0_ |= 0x00000001;
      onChanged();
      return items_;
    }
    public int getItemsCount() {
      return internalGetItems().getMap().size();
    }
    /**
     * <code>map&lt;string, .palm.lemon.v1.Rss&gt; items = 1;</code>
     */
    @java.lang.Override
    public boolean containsItems(
        java.lang.String key) {
      if (key == null) { throw new NullPointerException("map key"); }
      return internalGetItems().getMap().containsKey(key);
    }
    /**
     * Use {@link #getItemsMap()} instead.
     */
    @java.lang.Override
    @java.lang.Deprecated
    public java.util.Map<java.lang.String, com.github.saturn_xiv.palm.plugins.lemon.v1.Rss> getItems() {
      return getItemsMap();
    }
    /**
     * <code>map&lt;string, .palm.lemon.v1.Rss&gt; items = 1;</code>
     */
    @java.lang.Override
    public java.util.Map<java.lang.String, com.github.saturn_xiv.palm.plugins.lemon.v1.Rss> getItemsMap() {
      return internalGetItems().getMap();
    }
    /**
     * <code>map&lt;string, .palm.lemon.v1.Rss&gt; items = 1;</code>
     */
    @java.lang.Override
    public /* nullable */
com.github.saturn_xiv.palm.plugins.lemon.v1.Rss getItemsOrDefault(
        java.lang.String key,
        /* nullable */
com.github.saturn_xiv.palm.plugins.lemon.v1.Rss defaultValue) {
      if (key == null) { throw new NullPointerException("map key"); }
      java.util.Map<java.lang.String, com.github.saturn_xiv.palm.plugins.lemon.v1.Rss> map =
          internalGetItems().getMap();
      return map.containsKey(key) ? map.get(key) : defaultValue;
    }
    /**
     * <code>map&lt;string, .palm.lemon.v1.Rss&gt; items = 1;</code>
     */
    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.lemon.v1.Rss getItemsOrThrow(
        java.lang.String key) {
      if (key == null) { throw new NullPointerException("map key"); }
      java.util.Map<java.lang.String, com.github.saturn_xiv.palm.plugins.lemon.v1.Rss> map =
          internalGetItems().getMap();
      if (!map.containsKey(key)) {
        throw new java.lang.IllegalArgumentException();
      }
      return map.get(key);
    }
    public Builder clearItems() {
      bitField0_ = (bitField0_ & ~0x00000001);
      internalGetMutableItems().getMutableMap()
          .clear();
      return this;
    }
    /**
     * <code>map&lt;string, .palm.lemon.v1.Rss&gt; items = 1;</code>
     */
    public Builder removeItems(
        java.lang.String key) {
      if (key == null) { throw new NullPointerException("map key"); }
      internalGetMutableItems().getMutableMap()
          .remove(key);
      return this;
    }
    /**
     * Use alternate mutation accessors instead.
     */
    @java.lang.Deprecated
    public java.util.Map<java.lang.String, com.github.saturn_xiv.palm.plugins.lemon.v1.Rss>
        getMutableItems() {
      bitField0_ |= 0x00000001;
      return internalGetMutableItems().getMutableMap();
    }
    /**
     * <code>map&lt;string, .palm.lemon.v1.Rss&gt; items = 1;</code>
     */
    public Builder putItems(
        java.lang.String key,
        com.github.saturn_xiv.palm.plugins.lemon.v1.Rss value) {
      if (key == null) { throw new NullPointerException("map key"); }
      if (value == null) { throw new NullPointerException("map value"); }
      internalGetMutableItems().getMutableMap()
          .put(key, value);
      bitField0_ |= 0x00000001;
      return this;
    }
    /**
     * <code>map&lt;string, .palm.lemon.v1.Rss&gt; items = 1;</code>
     */
    public Builder putAllItems(
        java.util.Map<java.lang.String, com.github.saturn_xiv.palm.plugins.lemon.v1.Rss> values) {
      internalGetMutableItems().getMutableMap()
          .putAll(values);
      bitField0_ |= 0x00000001;
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


    // @@protoc_insertion_point(builder_scope:palm.lemon.v1.SiteRssResponse)
  }

  // @@protoc_insertion_point(class_scope:palm.lemon.v1.SiteRssResponse)
  private static final com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse();
  }

  public static com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<SiteRssResponse>
      PARSER = new com.google.protobuf.AbstractParser<SiteRssResponse>() {
    @java.lang.Override
    public SiteRssResponse parsePartialFrom(
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

  public static com.google.protobuf.Parser<SiteRssResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<SiteRssResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.lemon.v1.SiteRssResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

