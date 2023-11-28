/**
 * Autogenerated by Thrift Compiler (0.19.0)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */
package com.github.saturn_xiv.palm.plugins.loquat.v1;

@SuppressWarnings({"cast", "rawtypes", "serial", "unchecked", "unused"})
@javax.annotation.Generated(value = "Autogenerated by Thrift Compiler (0.19.0)", date = "2023-11-28")
public class JwtVerfifyResponse implements org.apache.thrift.TBase<JwtVerfifyResponse, JwtVerfifyResponse._Fields>, java.io.Serializable, Cloneable, Comparable<JwtVerfifyResponse> {
  private static final org.apache.thrift.protocol.TStruct STRUCT_DESC = new org.apache.thrift.protocol.TStruct("JwtVerfifyResponse");

  private static final org.apache.thrift.protocol.TField SUBJECT_FIELD_DESC = new org.apache.thrift.protocol.TField("subject", org.apache.thrift.protocol.TType.STRING, (short)1);
  private static final org.apache.thrift.protocol.TField PAYLOAD_FIELD_DESC = new org.apache.thrift.protocol.TField("payload", org.apache.thrift.protocol.TType.STRING, (short)2);

  private static final org.apache.thrift.scheme.SchemeFactory STANDARD_SCHEME_FACTORY = new JwtVerfifyResponseStandardSchemeFactory();
  private static final org.apache.thrift.scheme.SchemeFactory TUPLE_SCHEME_FACTORY = new JwtVerfifyResponseTupleSchemeFactory();

  public @org.apache.thrift.annotation.Nullable java.lang.String subject; // required
  public @org.apache.thrift.annotation.Nullable java.lang.String payload; // required

  /** The set of fields this struct contains, along with convenience methods for finding and manipulating them. */
  public enum _Fields implements org.apache.thrift.TFieldIdEnum {
    SUBJECT((short)1, "subject"),
    PAYLOAD((short)2, "payload");

    private static final java.util.Map<java.lang.String, _Fields> byName = new java.util.HashMap<java.lang.String, _Fields>();

    static {
      for (_Fields field : java.util.EnumSet.allOf(_Fields.class)) {
        byName.put(field.getFieldName(), field);
      }
    }

    /**
     * Find the _Fields constant that matches fieldId, or null if its not found.
     */
    @org.apache.thrift.annotation.Nullable
    public static _Fields findByThriftId(int fieldId) {
      switch(fieldId) {
        case 1: // SUBJECT
          return SUBJECT;
        case 2: // PAYLOAD
          return PAYLOAD;
        default:
          return null;
      }
    }

    /**
     * Find the _Fields constant that matches fieldId, throwing an exception
     * if it is not found.
     */
    public static _Fields findByThriftIdOrThrow(int fieldId) {
      _Fields fields = findByThriftId(fieldId);
      if (fields == null) throw new java.lang.IllegalArgumentException("Field " + fieldId + " doesn't exist!");
      return fields;
    }

    /**
     * Find the _Fields constant that matches name, or null if its not found.
     */
    @org.apache.thrift.annotation.Nullable
    public static _Fields findByName(java.lang.String name) {
      return byName.get(name);
    }

    private final short _thriftId;
    private final java.lang.String _fieldName;

    _Fields(short thriftId, java.lang.String fieldName) {
      _thriftId = thriftId;
      _fieldName = fieldName;
    }

    @Override
    public short getThriftFieldId() {
      return _thriftId;
    }

    @Override
    public java.lang.String getFieldName() {
      return _fieldName;
    }
  }

  // isset id assignments
  public static final java.util.Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> metaDataMap;
  static {
    java.util.Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> tmpMap = new java.util.EnumMap<_Fields, org.apache.thrift.meta_data.FieldMetaData>(_Fields.class);
    tmpMap.put(_Fields.SUBJECT, new org.apache.thrift.meta_data.FieldMetaData("subject", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    tmpMap.put(_Fields.PAYLOAD, new org.apache.thrift.meta_data.FieldMetaData("payload", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    metaDataMap = java.util.Collections.unmodifiableMap(tmpMap);
    org.apache.thrift.meta_data.FieldMetaData.addStructMetaDataMap(JwtVerfifyResponse.class, metaDataMap);
  }

  public JwtVerfifyResponse() {
  }

  public JwtVerfifyResponse(
    java.lang.String subject,
    java.lang.String payload)
  {
    this();
    this.subject = subject;
    this.payload = payload;
  }

  /**
   * Performs a deep copy on <i>other</i>.
   */
  public JwtVerfifyResponse(JwtVerfifyResponse other) {
    if (other.isSetSubject()) {
      this.subject = other.subject;
    }
    if (other.isSetPayload()) {
      this.payload = other.payload;
    }
  }

  @Override
  public JwtVerfifyResponse deepCopy() {
    return new JwtVerfifyResponse(this);
  }

  @Override
  public void clear() {
    this.subject = null;
    this.payload = null;
  }

  @org.apache.thrift.annotation.Nullable
  public java.lang.String getSubject() {
    return this.subject;
  }

  public JwtVerfifyResponse setSubject(@org.apache.thrift.annotation.Nullable java.lang.String subject) {
    this.subject = subject;
    return this;
  }

  public void unsetSubject() {
    this.subject = null;
  }

  /** Returns true if field subject is set (has been assigned a value) and false otherwise */
  public boolean isSetSubject() {
    return this.subject != null;
  }

  public void setSubjectIsSet(boolean value) {
    if (!value) {
      this.subject = null;
    }
  }

  @org.apache.thrift.annotation.Nullable
  public java.lang.String getPayload() {
    return this.payload;
  }

  public JwtVerfifyResponse setPayload(@org.apache.thrift.annotation.Nullable java.lang.String payload) {
    this.payload = payload;
    return this;
  }

  public void unsetPayload() {
    this.payload = null;
  }

  /** Returns true if field payload is set (has been assigned a value) and false otherwise */
  public boolean isSetPayload() {
    return this.payload != null;
  }

  public void setPayloadIsSet(boolean value) {
    if (!value) {
      this.payload = null;
    }
  }

  @Override
  public void setFieldValue(_Fields field, @org.apache.thrift.annotation.Nullable java.lang.Object value) {
    switch (field) {
    case SUBJECT:
      if (value == null) {
        unsetSubject();
      } else {
        setSubject((java.lang.String)value);
      }
      break;

    case PAYLOAD:
      if (value == null) {
        unsetPayload();
      } else {
        setPayload((java.lang.String)value);
      }
      break;

    }
  }

  @org.apache.thrift.annotation.Nullable
  @Override
  public java.lang.Object getFieldValue(_Fields field) {
    switch (field) {
    case SUBJECT:
      return getSubject();

    case PAYLOAD:
      return getPayload();

    }
    throw new java.lang.IllegalStateException();
  }

  /** Returns true if field corresponding to fieldID is set (has been assigned a value) and false otherwise */
  @Override
  public boolean isSet(_Fields field) {
    if (field == null) {
      throw new java.lang.IllegalArgumentException();
    }

    switch (field) {
    case SUBJECT:
      return isSetSubject();
    case PAYLOAD:
      return isSetPayload();
    }
    throw new java.lang.IllegalStateException();
  }

  @Override
  public boolean equals(java.lang.Object that) {
    if (that instanceof JwtVerfifyResponse)
      return this.equals((JwtVerfifyResponse)that);
    return false;
  }

  public boolean equals(JwtVerfifyResponse that) {
    if (that == null)
      return false;
    if (this == that)
      return true;

    boolean this_present_subject = true && this.isSetSubject();
    boolean that_present_subject = true && that.isSetSubject();
    if (this_present_subject || that_present_subject) {
      if (!(this_present_subject && that_present_subject))
        return false;
      if (!this.subject.equals(that.subject))
        return false;
    }

    boolean this_present_payload = true && this.isSetPayload();
    boolean that_present_payload = true && that.isSetPayload();
    if (this_present_payload || that_present_payload) {
      if (!(this_present_payload && that_present_payload))
        return false;
      if (!this.payload.equals(that.payload))
        return false;
    }

    return true;
  }

  @Override
  public int hashCode() {
    int hashCode = 1;

    hashCode = hashCode * 8191 + ((isSetSubject()) ? 131071 : 524287);
    if (isSetSubject())
      hashCode = hashCode * 8191 + subject.hashCode();

    hashCode = hashCode * 8191 + ((isSetPayload()) ? 131071 : 524287);
    if (isSetPayload())
      hashCode = hashCode * 8191 + payload.hashCode();

    return hashCode;
  }

  @Override
  public int compareTo(JwtVerfifyResponse other) {
    if (!getClass().equals(other.getClass())) {
      return getClass().getName().compareTo(other.getClass().getName());
    }

    int lastComparison = 0;

    lastComparison = java.lang.Boolean.compare(isSetSubject(), other.isSetSubject());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetSubject()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.subject, other.subject);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = java.lang.Boolean.compare(isSetPayload(), other.isSetPayload());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetPayload()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.payload, other.payload);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    return 0;
  }

  @org.apache.thrift.annotation.Nullable
  @Override
  public _Fields fieldForId(int fieldId) {
    return _Fields.findByThriftId(fieldId);
  }

  @Override
  public void read(org.apache.thrift.protocol.TProtocol iprot) throws org.apache.thrift.TException {
    scheme(iprot).read(iprot, this);
  }

  @Override
  public void write(org.apache.thrift.protocol.TProtocol oprot) throws org.apache.thrift.TException {
    scheme(oprot).write(oprot, this);
  }

  @Override
  public java.lang.String toString() {
    java.lang.StringBuilder sb = new java.lang.StringBuilder("JwtVerfifyResponse(");
    boolean first = true;

    sb.append("subject:");
    if (this.subject == null) {
      sb.append("null");
    } else {
      sb.append(this.subject);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("payload:");
    if (this.payload == null) {
      sb.append("null");
    } else {
      sb.append(this.payload);
    }
    first = false;
    sb.append(")");
    return sb.toString();
  }

  public void validate() throws org.apache.thrift.TException {
    // check for required fields
    // check for sub-struct validity
  }

  private void writeObject(java.io.ObjectOutputStream out) throws java.io.IOException {
    try {
      write(new org.apache.thrift.protocol.TCompactProtocol(new org.apache.thrift.transport.TIOStreamTransport(out)));
    } catch (org.apache.thrift.TException te) {
      throw new java.io.IOException(te);
    }
  }

  private void readObject(java.io.ObjectInputStream in) throws java.io.IOException, java.lang.ClassNotFoundException {
    try {
      read(new org.apache.thrift.protocol.TCompactProtocol(new org.apache.thrift.transport.TIOStreamTransport(in)));
    } catch (org.apache.thrift.TException te) {
      throw new java.io.IOException(te);
    }
  }

  private static class JwtVerfifyResponseStandardSchemeFactory implements org.apache.thrift.scheme.SchemeFactory {
    @Override
    public JwtVerfifyResponseStandardScheme getScheme() {
      return new JwtVerfifyResponseStandardScheme();
    }
  }

  private static class JwtVerfifyResponseStandardScheme extends org.apache.thrift.scheme.StandardScheme<JwtVerfifyResponse> {

    @Override
    public void read(org.apache.thrift.protocol.TProtocol iprot, JwtVerfifyResponse struct) throws org.apache.thrift.TException {
      org.apache.thrift.protocol.TField schemeField;
      iprot.readStructBegin();
      while (true)
      {
        schemeField = iprot.readFieldBegin();
        if (schemeField.type == org.apache.thrift.protocol.TType.STOP) { 
          break;
        }
        switch (schemeField.id) {
          case 1: // SUBJECT
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.subject = iprot.readString();
              struct.setSubjectIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 2: // PAYLOAD
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.payload = iprot.readString();
              struct.setPayloadIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          default:
            org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
        }
        iprot.readFieldEnd();
      }
      iprot.readStructEnd();

      // check for required fields of primitive type, which can't be checked in the validate method
      struct.validate();
    }

    @Override
    public void write(org.apache.thrift.protocol.TProtocol oprot, JwtVerfifyResponse struct) throws org.apache.thrift.TException {
      struct.validate();

      oprot.writeStructBegin(STRUCT_DESC);
      if (struct.subject != null) {
        oprot.writeFieldBegin(SUBJECT_FIELD_DESC);
        oprot.writeString(struct.subject);
        oprot.writeFieldEnd();
      }
      if (struct.payload != null) {
        oprot.writeFieldBegin(PAYLOAD_FIELD_DESC);
        oprot.writeString(struct.payload);
        oprot.writeFieldEnd();
      }
      oprot.writeFieldStop();
      oprot.writeStructEnd();
    }

  }

  private static class JwtVerfifyResponseTupleSchemeFactory implements org.apache.thrift.scheme.SchemeFactory {
    @Override
    public JwtVerfifyResponseTupleScheme getScheme() {
      return new JwtVerfifyResponseTupleScheme();
    }
  }

  private static class JwtVerfifyResponseTupleScheme extends org.apache.thrift.scheme.TupleScheme<JwtVerfifyResponse> {

    @Override
    public void write(org.apache.thrift.protocol.TProtocol prot, JwtVerfifyResponse struct) throws org.apache.thrift.TException {
      org.apache.thrift.protocol.TTupleProtocol oprot = (org.apache.thrift.protocol.TTupleProtocol) prot;
      java.util.BitSet optionals = new java.util.BitSet();
      if (struct.isSetSubject()) {
        optionals.set(0);
      }
      if (struct.isSetPayload()) {
        optionals.set(1);
      }
      oprot.writeBitSet(optionals, 2);
      if (struct.isSetSubject()) {
        oprot.writeString(struct.subject);
      }
      if (struct.isSetPayload()) {
        oprot.writeString(struct.payload);
      }
    }

    @Override
    public void read(org.apache.thrift.protocol.TProtocol prot, JwtVerfifyResponse struct) throws org.apache.thrift.TException {
      org.apache.thrift.protocol.TTupleProtocol iprot = (org.apache.thrift.protocol.TTupleProtocol) prot;
      java.util.BitSet incoming = iprot.readBitSet(2);
      if (incoming.get(0)) {
        struct.subject = iprot.readString();
        struct.setSubjectIsSet(true);
      }
      if (incoming.get(1)) {
        struct.payload = iprot.readString();
        struct.setPayloadIsSet(true);
      }
    }
  }

  private static <S extends org.apache.thrift.scheme.IScheme> S scheme(org.apache.thrift.protocol.TProtocol proto) {
    return (org.apache.thrift.scheme.StandardScheme.class.equals(proto.getScheme()) ? STANDARD_SCHEME_FACTORY : TUPLE_SCHEME_FACTORY).getScheme();
  }
}

