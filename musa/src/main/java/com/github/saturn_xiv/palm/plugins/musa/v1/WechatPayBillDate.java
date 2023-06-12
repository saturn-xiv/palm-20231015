// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: musa.proto

package com.github.saturn_xiv.palm.plugins.musa.v1;

/**
 * Protobuf type {@code palm.musa.v1.WechatPayBillDate}
 */
public final class WechatPayBillDate extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.musa.v1.WechatPayBillDate)
    WechatPayBillDateOrBuilder {
private static final long serialVersionUID = 0L;
  // Use WechatPayBillDate.newBuilder() to construct.
  private WechatPayBillDate(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private WechatPayBillDate() {
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new WechatPayBillDate();
  }

  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.musa.v1.Musa.internal_static_palm_musa_v1_WechatPayBillDate_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.musa.v1.Musa.internal_static_palm_musa_v1_WechatPayBillDate_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate.class, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate.Builder.class);
  }

  public static final int YEAR_FIELD_NUMBER = 1;
  private int year_ = 0;
  /**
   * <code>int32 year = 1;</code>
   * @return The year.
   */
  @java.lang.Override
  public int getYear() {
    return year_;
  }

  public static final int MONTH_FIELD_NUMBER = 2;
  private int month_ = 0;
  /**
   * <code>int32 month = 2;</code>
   * @return The month.
   */
  @java.lang.Override
  public int getMonth() {
    return month_;
  }

  public static final int DAY_FIELD_NUMBER = 3;
  private int day_ = 0;
  /**
   * <code>int32 day = 3;</code>
   * @return The day.
   */
  @java.lang.Override
  public int getDay() {
    return day_;
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
    if (year_ != 0) {
      output.writeInt32(1, year_);
    }
    if (month_ != 0) {
      output.writeInt32(2, month_);
    }
    if (day_ != 0) {
      output.writeInt32(3, day_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (year_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt32Size(1, year_);
    }
    if (month_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt32Size(2, month_);
    }
    if (day_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt32Size(3, day_);
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate other = (com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate) obj;

    if (getYear()
        != other.getYear()) return false;
    if (getMonth()
        != other.getMonth()) return false;
    if (getDay()
        != other.getDay()) return false;
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
    hash = (37 * hash) + YEAR_FIELD_NUMBER;
    hash = (53 * hash) + getYear();
    hash = (37 * hash) + MONTH_FIELD_NUMBER;
    hash = (53 * hash) + getMonth();
    hash = (37 * hash) + DAY_FIELD_NUMBER;
    hash = (53 * hash) + getDay();
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }

  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate prototype) {
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
   * Protobuf type {@code palm.musa.v1.WechatPayBillDate}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.musa.v1.WechatPayBillDate)
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDateOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.musa.v1.Musa.internal_static_palm_musa_v1_WechatPayBillDate_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.musa.v1.Musa.internal_static_palm_musa_v1_WechatPayBillDate_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate.class, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate.newBuilder()
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
      year_ = 0;
      month_ = 0;
      day_ = 0;
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.musa.v1.Musa.internal_static_palm_musa_v1_WechatPayBillDate_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate build() {
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate buildPartial() {
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate result = new com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.year_ = year_;
      }
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.month_ = month_;
      }
      if (((from_bitField0_ & 0x00000004) != 0)) {
        result.day_ = day_;
      }
    }

    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate other) {
      if (other == com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate.getDefaultInstance()) return this;
      if (other.getYear() != 0) {
        setYear(other.getYear());
      }
      if (other.getMonth() != 0) {
        setMonth(other.getMonth());
      }
      if (other.getDay() != 0) {
        setDay(other.getDay());
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
              year_ = input.readInt32();
              bitField0_ |= 0x00000001;
              break;
            } // case 8
            case 16: {
              month_ = input.readInt32();
              bitField0_ |= 0x00000002;
              break;
            } // case 16
            case 24: {
              day_ = input.readInt32();
              bitField0_ |= 0x00000004;
              break;
            } // case 24
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

    private int year_ ;
    /**
     * <code>int32 year = 1;</code>
     * @return The year.
     */
    @java.lang.Override
    public int getYear() {
      return year_;
    }
    /**
     * <code>int32 year = 1;</code>
     * @param value The year to set.
     * @return This builder for chaining.
     */
    public Builder setYear(int value) {

      year_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>int32 year = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearYear() {
      bitField0_ = (bitField0_ & ~0x00000001);
      year_ = 0;
      onChanged();
      return this;
    }

    private int month_ ;
    /**
     * <code>int32 month = 2;</code>
     * @return The month.
     */
    @java.lang.Override
    public int getMonth() {
      return month_;
    }
    /**
     * <code>int32 month = 2;</code>
     * @param value The month to set.
     * @return This builder for chaining.
     */
    public Builder setMonth(int value) {

      month_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>int32 month = 2;</code>
     * @return This builder for chaining.
     */
    public Builder clearMonth() {
      bitField0_ = (bitField0_ & ~0x00000002);
      month_ = 0;
      onChanged();
      return this;
    }

    private int day_ ;
    /**
     * <code>int32 day = 3;</code>
     * @return The day.
     */
    @java.lang.Override
    public int getDay() {
      return day_;
    }
    /**
     * <code>int32 day = 3;</code>
     * @param value The day to set.
     * @return This builder for chaining.
     */
    public Builder setDay(int value) {

      day_ = value;
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>int32 day = 3;</code>
     * @return This builder for chaining.
     */
    public Builder clearDay() {
      bitField0_ = (bitField0_ & ~0x00000004);
      day_ = 0;
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


    // @@protoc_insertion_point(builder_scope:palm.musa.v1.WechatPayBillDate)
  }

  // @@protoc_insertion_point(class_scope:palm.musa.v1.WechatPayBillDate)
  private static final com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate();
  }

  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<WechatPayBillDate>
      PARSER = new com.google.protobuf.AbstractParser<WechatPayBillDate>() {
    @java.lang.Override
    public WechatPayBillDate parsePartialFrom(
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

  public static com.google.protobuf.Parser<WechatPayBillDate> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<WechatPayBillDate> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayBillDate getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

