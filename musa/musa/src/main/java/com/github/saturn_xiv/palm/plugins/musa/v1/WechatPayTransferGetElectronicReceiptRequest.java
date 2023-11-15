// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: musa.proto

package com.github.saturn_xiv.palm.plugins.musa.v1;

/**
 * Protobuf type {@code palm.musa.v1.WechatPayTransferGetElectronicReceiptRequest}
 */
public final class WechatPayTransferGetElectronicReceiptRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:palm.musa.v1.WechatPayTransferGetElectronicReceiptRequest)
    WechatPayTransferGetElectronicReceiptRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use WechatPayTransferGetElectronicReceiptRequest.newBuilder() to construct.
  private WechatPayTransferGetElectronicReceiptRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private WechatPayTransferGetElectronicReceiptRequest() {
    acceptType_ = 0;
    outBatchNo_ = "";
    outDetailNo_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new WechatPayTransferGetElectronicReceiptRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.github.saturn_xiv.palm.plugins.musa.v1.Musa.internal_static_palm_musa_v1_WechatPayTransferGetElectronicReceiptRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.github.saturn_xiv.palm.plugins.musa.v1.Musa.internal_static_palm_musa_v1_WechatPayTransferGetElectronicReceiptRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.class, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.Builder.class);
  }

  /**
   * Protobuf enum {@code palm.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType}
   */
  public enum AcceptType
      implements com.google.protobuf.ProtocolMessageEnum {
    /**
     * <code>BATCH_TRANSFER = 0;</code>
     */
    BATCH_TRANSFER(0),
    /**
     * <code>TRANSFER_TO_POCKET = 1;</code>
     */
    TRANSFER_TO_POCKET(1),
    /**
     * <code>TRANSFER_TO_BANK = 2;</code>
     */
    TRANSFER_TO_BANK(2),
    UNRECOGNIZED(-1),
    ;

    /**
     * <code>BATCH_TRANSFER = 0;</code>
     */
    public static final int BATCH_TRANSFER_VALUE = 0;
    /**
     * <code>TRANSFER_TO_POCKET = 1;</code>
     */
    public static final int TRANSFER_TO_POCKET_VALUE = 1;
    /**
     * <code>TRANSFER_TO_BANK = 2;</code>
     */
    public static final int TRANSFER_TO_BANK_VALUE = 2;


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
    public static AcceptType valueOf(int value) {
      return forNumber(value);
    }

    /**
     * @param value The numeric wire value of the corresponding enum entry.
     * @return The enum associated with the given numeric wire value.
     */
    public static AcceptType forNumber(int value) {
      switch (value) {
        case 0: return BATCH_TRANSFER;
        case 1: return TRANSFER_TO_POCKET;
        case 2: return TRANSFER_TO_BANK;
        default: return null;
      }
    }

    public static com.google.protobuf.Internal.EnumLiteMap<AcceptType>
        internalGetValueMap() {
      return internalValueMap;
    }
    private static final com.google.protobuf.Internal.EnumLiteMap<
        AcceptType> internalValueMap =
          new com.google.protobuf.Internal.EnumLiteMap<AcceptType>() {
            public AcceptType findValueByNumber(int number) {
              return AcceptType.forNumber(number);
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
      return com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.getDescriptor().getEnumTypes().get(0);
    }

    private static final AcceptType[] VALUES = values();

    public static AcceptType valueOf(
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

    private AcceptType(int value) {
      this.value = value;
    }

    // @@protoc_insertion_point(enum_scope:palm.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType)
  }

  private int bitField0_;
  public static final int ACCEPT_TYPE_FIELD_NUMBER = 1;
  private int acceptType_ = 0;
  /**
   * <code>.palm.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType accept_type = 1;</code>
   * @return The enum numeric value on the wire for acceptType.
   */
  @java.lang.Override public int getAcceptTypeValue() {
    return acceptType_;
  }
  /**
   * <code>.palm.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType accept_type = 1;</code>
   * @return The acceptType.
   */
  @java.lang.Override public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType getAcceptType() {
    com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType result = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType.forNumber(acceptType_);
    return result == null ? com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType.UNRECOGNIZED : result;
  }

  public static final int OUT_BATCH_NO_FIELD_NUMBER = 2;
  @SuppressWarnings("serial")
  private volatile java.lang.Object outBatchNo_ = "";
  /**
   * <code>optional string out_batch_no = 2;</code>
   * @return Whether the outBatchNo field is set.
   */
  @java.lang.Override
  public boolean hasOutBatchNo() {
    return ((bitField0_ & 0x00000001) != 0);
  }
  /**
   * <code>optional string out_batch_no = 2;</code>
   * @return The outBatchNo.
   */
  @java.lang.Override
  public java.lang.String getOutBatchNo() {
    java.lang.Object ref = outBatchNo_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      outBatchNo_ = s;
      return s;
    }
  }
  /**
   * <code>optional string out_batch_no = 2;</code>
   * @return The bytes for outBatchNo.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getOutBatchNoBytes() {
    java.lang.Object ref = outBatchNo_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      outBatchNo_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int OUT_DETAIL_NO_FIELD_NUMBER = 3;
  @SuppressWarnings("serial")
  private volatile java.lang.Object outDetailNo_ = "";
  /**
   * <code>string out_detail_no = 3;</code>
   * @return The outDetailNo.
   */
  @java.lang.Override
  public java.lang.String getOutDetailNo() {
    java.lang.Object ref = outDetailNo_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      outDetailNo_ = s;
      return s;
    }
  }
  /**
   * <code>string out_detail_no = 3;</code>
   * @return The bytes for outDetailNo.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getOutDetailNoBytes() {
    java.lang.Object ref = outDetailNo_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      outDetailNo_ = b;
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
    if (acceptType_ != com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType.BATCH_TRANSFER.getNumber()) {
      output.writeEnum(1, acceptType_);
    }
    if (((bitField0_ & 0x00000001) != 0)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, outBatchNo_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(outDetailNo_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, outDetailNo_);
    }
    getUnknownFields().writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (acceptType_ != com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType.BATCH_TRANSFER.getNumber()) {
      size += com.google.protobuf.CodedOutputStream
        .computeEnumSize(1, acceptType_);
    }
    if (((bitField0_ & 0x00000001) != 0)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, outBatchNo_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(outDetailNo_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, outDetailNo_);
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
    if (!(obj instanceof com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest)) {
      return super.equals(obj);
    }
    com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest other = (com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest) obj;

    if (acceptType_ != other.acceptType_) return false;
    if (hasOutBatchNo() != other.hasOutBatchNo()) return false;
    if (hasOutBatchNo()) {
      if (!getOutBatchNo()
          .equals(other.getOutBatchNo())) return false;
    }
    if (!getOutDetailNo()
        .equals(other.getOutDetailNo())) return false;
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
    hash = (37 * hash) + ACCEPT_TYPE_FIELD_NUMBER;
    hash = (53 * hash) + acceptType_;
    if (hasOutBatchNo()) {
      hash = (37 * hash) + OUT_BATCH_NO_FIELD_NUMBER;
      hash = (53 * hash) + getOutBatchNo().hashCode();
    }
    hash = (37 * hash) + OUT_DETAIL_NO_FIELD_NUMBER;
    hash = (53 * hash) + getOutDetailNo().hashCode();
    hash = (29 * hash) + getUnknownFields().hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest parseFrom(
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
  public static Builder newBuilder(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest prototype) {
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
   * Protobuf type {@code palm.musa.v1.WechatPayTransferGetElectronicReceiptRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:palm.musa.v1.WechatPayTransferGetElectronicReceiptRequest)
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.github.saturn_xiv.palm.plugins.musa.v1.Musa.internal_static_palm_musa_v1_WechatPayTransferGetElectronicReceiptRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.github.saturn_xiv.palm.plugins.musa.v1.Musa.internal_static_palm_musa_v1_WechatPayTransferGetElectronicReceiptRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.class, com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.Builder.class);
    }

    // Construct using com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.newBuilder()
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
      acceptType_ = 0;
      outBatchNo_ = "";
      outDetailNo_ = "";
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.github.saturn_xiv.palm.plugins.musa.v1.Musa.internal_static_palm_musa_v1_WechatPayTransferGetElectronicReceiptRequest_descriptor;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest getDefaultInstanceForType() {
      return com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.getDefaultInstance();
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest build() {
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest buildPartial() {
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest result = new com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest(this);
      if (bitField0_ != 0) { buildPartial0(result); }
      onBuilt();
      return result;
    }

    private void buildPartial0(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest result) {
      int from_bitField0_ = bitField0_;
      if (((from_bitField0_ & 0x00000001) != 0)) {
        result.acceptType_ = acceptType_;
      }
      int to_bitField0_ = 0;
      if (((from_bitField0_ & 0x00000002) != 0)) {
        result.outBatchNo_ = outBatchNo_;
        to_bitField0_ |= 0x00000001;
      }
      if (((from_bitField0_ & 0x00000004) != 0)) {
        result.outDetailNo_ = outDetailNo_;
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
      if (other instanceof com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest) {
        return mergeFrom((com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest other) {
      if (other == com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.getDefaultInstance()) return this;
      if (other.acceptType_ != 0) {
        setAcceptTypeValue(other.getAcceptTypeValue());
      }
      if (other.hasOutBatchNo()) {
        outBatchNo_ = other.outBatchNo_;
        bitField0_ |= 0x00000002;
        onChanged();
      }
      if (!other.getOutDetailNo().isEmpty()) {
        outDetailNo_ = other.outDetailNo_;
        bitField0_ |= 0x00000004;
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
              acceptType_ = input.readEnum();
              bitField0_ |= 0x00000001;
              break;
            } // case 8
            case 18: {
              outBatchNo_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000002;
              break;
            } // case 18
            case 26: {
              outDetailNo_ = input.readStringRequireUtf8();
              bitField0_ |= 0x00000004;
              break;
            } // case 26
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

    private int acceptType_ = 0;
    /**
     * <code>.palm.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType accept_type = 1;</code>
     * @return The enum numeric value on the wire for acceptType.
     */
    @java.lang.Override public int getAcceptTypeValue() {
      return acceptType_;
    }
    /**
     * <code>.palm.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType accept_type = 1;</code>
     * @param value The enum numeric value on the wire for acceptType to set.
     * @return This builder for chaining.
     */
    public Builder setAcceptTypeValue(int value) {
      acceptType_ = value;
      bitField0_ |= 0x00000001;
      onChanged();
      return this;
    }
    /**
     * <code>.palm.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType accept_type = 1;</code>
     * @return The acceptType.
     */
    @java.lang.Override
    public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType getAcceptType() {
      com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType result = com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType.forNumber(acceptType_);
      return result == null ? com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType.UNRECOGNIZED : result;
    }
    /**
     * <code>.palm.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType accept_type = 1;</code>
     * @param value The acceptType to set.
     * @return This builder for chaining.
     */
    public Builder setAcceptType(com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType value) {
      if (value == null) {
        throw new NullPointerException();
      }
      bitField0_ |= 0x00000001;
      acceptType_ = value.getNumber();
      onChanged();
      return this;
    }
    /**
     * <code>.palm.musa.v1.WechatPayTransferGetElectronicReceiptRequest.AcceptType accept_type = 1;</code>
     * @return This builder for chaining.
     */
    public Builder clearAcceptType() {
      bitField0_ = (bitField0_ & ~0x00000001);
      acceptType_ = 0;
      onChanged();
      return this;
    }

    private java.lang.Object outBatchNo_ = "";
    /**
     * <code>optional string out_batch_no = 2;</code>
     * @return Whether the outBatchNo field is set.
     */
    public boolean hasOutBatchNo() {
      return ((bitField0_ & 0x00000002) != 0);
    }
    /**
     * <code>optional string out_batch_no = 2;</code>
     * @return The outBatchNo.
     */
    public java.lang.String getOutBatchNo() {
      java.lang.Object ref = outBatchNo_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        outBatchNo_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>optional string out_batch_no = 2;</code>
     * @return The bytes for outBatchNo.
     */
    public com.google.protobuf.ByteString
        getOutBatchNoBytes() {
      java.lang.Object ref = outBatchNo_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        outBatchNo_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>optional string out_batch_no = 2;</code>
     * @param value The outBatchNo to set.
     * @return This builder for chaining.
     */
    public Builder setOutBatchNo(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      outBatchNo_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }
    /**
     * <code>optional string out_batch_no = 2;</code>
     * @return This builder for chaining.
     */
    public Builder clearOutBatchNo() {
      outBatchNo_ = getDefaultInstance().getOutBatchNo();
      bitField0_ = (bitField0_ & ~0x00000002);
      onChanged();
      return this;
    }
    /**
     * <code>optional string out_batch_no = 2;</code>
     * @param value The bytes for outBatchNo to set.
     * @return This builder for chaining.
     */
    public Builder setOutBatchNoBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      outBatchNo_ = value;
      bitField0_ |= 0x00000002;
      onChanged();
      return this;
    }

    private java.lang.Object outDetailNo_ = "";
    /**
     * <code>string out_detail_no = 3;</code>
     * @return The outDetailNo.
     */
    public java.lang.String getOutDetailNo() {
      java.lang.Object ref = outDetailNo_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        outDetailNo_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string out_detail_no = 3;</code>
     * @return The bytes for outDetailNo.
     */
    public com.google.protobuf.ByteString
        getOutDetailNoBytes() {
      java.lang.Object ref = outDetailNo_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        outDetailNo_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string out_detail_no = 3;</code>
     * @param value The outDetailNo to set.
     * @return This builder for chaining.
     */
    public Builder setOutDetailNo(
        java.lang.String value) {
      if (value == null) { throw new NullPointerException(); }
      outDetailNo_ = value;
      bitField0_ |= 0x00000004;
      onChanged();
      return this;
    }
    /**
     * <code>string out_detail_no = 3;</code>
     * @return This builder for chaining.
     */
    public Builder clearOutDetailNo() {
      outDetailNo_ = getDefaultInstance().getOutDetailNo();
      bitField0_ = (bitField0_ & ~0x00000004);
      onChanged();
      return this;
    }
    /**
     * <code>string out_detail_no = 3;</code>
     * @param value The bytes for outDetailNo to set.
     * @return This builder for chaining.
     */
    public Builder setOutDetailNoBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) { throw new NullPointerException(); }
      checkByteStringIsUtf8(value);
      outDetailNo_ = value;
      bitField0_ |= 0x00000004;
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


    // @@protoc_insertion_point(builder_scope:palm.musa.v1.WechatPayTransferGetElectronicReceiptRequest)
  }

  // @@protoc_insertion_point(class_scope:palm.musa.v1.WechatPayTransferGetElectronicReceiptRequest)
  private static final com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest();
  }

  public static com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<WechatPayTransferGetElectronicReceiptRequest>
      PARSER = new com.google.protobuf.AbstractParser<WechatPayTransferGetElectronicReceiptRequest>() {
    @java.lang.Override
    public WechatPayTransferGetElectronicReceiptRequest parsePartialFrom(
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

  public static com.google.protobuf.Parser<WechatPayTransferGetElectronicReceiptRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<WechatPayTransferGetElectronicReceiptRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.github.saturn_xiv.palm.plugins.musa.v1.WechatPayTransferGetElectronicReceiptRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

