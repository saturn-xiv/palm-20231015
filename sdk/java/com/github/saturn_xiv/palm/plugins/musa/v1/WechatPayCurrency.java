// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: musa.proto

package com.github.saturn_xiv.palm.plugins.musa.v1;

/**
 * <pre>
 * ----------------------------------------------------------------------------
 * </pre>
 *
 * Protobuf enum {@code palm.musa.v1.WechatPayCurrency}
 */
public enum WechatPayCurrency
    implements com.google.protobuf.ProtocolMessageEnum {
  /**
   * <code>CNY = 0;</code>
   */
  CNY(0),
  UNRECOGNIZED(-1),
  ;

  /**
   * <code>CNY = 0;</code>
   */
  public static final int CNY_VALUE = 0;


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
  public static WechatPayCurrency valueOf(int value) {
    return forNumber(value);
  }

  /**
   * @param value The numeric wire value of the corresponding enum entry.
   * @return The enum associated with the given numeric wire value.
   */
  public static WechatPayCurrency forNumber(int value) {
    switch (value) {
      case 0: return CNY;
      default: return null;
    }
  }

  public static com.google.protobuf.Internal.EnumLiteMap<WechatPayCurrency>
      internalGetValueMap() {
    return internalValueMap;
  }
  private static final com.google.protobuf.Internal.EnumLiteMap<
      WechatPayCurrency> internalValueMap =
        new com.google.protobuf.Internal.EnumLiteMap<WechatPayCurrency>() {
          public WechatPayCurrency findValueByNumber(int number) {
            return WechatPayCurrency.forNumber(number);
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
    return com.github.saturn_xiv.palm.plugins.musa.v1.Musa.getDescriptor().getEnumTypes().get(0);
  }

  private static final WechatPayCurrency[] VALUES = values();

  public static WechatPayCurrency valueOf(
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

  private WechatPayCurrency(int value) {
    this.value = value;
  }

  // @@protoc_insertion_point(enum_scope:palm.musa.v1.WechatPayCurrency)
}

