/**
 * Autogenerated by Thrift Compiler (0.19.0)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */
package com.github.saturn_xiv.palm.plugins.loquat.v1;

@javax.annotation.Generated(value = "Autogenerated by Thrift Compiler (0.19.0)", date = "2023-11-01")
@SuppressWarnings({"cast", "rawtypes", "serial", "unchecked", "unused"})
public class Health {

  public interface Iface {

    public void check(java.lang.String auth) throws org.apache.thrift.TException;

  }

  public interface AsyncIface {

    public void check(java.lang.String auth, org.apache.thrift.async.AsyncMethodCallback<Void> resultHandler) throws org.apache.thrift.TException;

  }

  public static class Client extends org.apache.thrift.TServiceClient implements Iface {
    public static class Factory implements org.apache.thrift.TServiceClientFactory<Client> {
      public Factory() {}
      @Override
      public Client getClient(org.apache.thrift.protocol.TProtocol prot) {
        return new Client(prot);
      }
      @Override
      public Client getClient(org.apache.thrift.protocol.TProtocol iprot, org.apache.thrift.protocol.TProtocol oprot) {
        return new Client(iprot, oprot);
      }
    }

    public Client(org.apache.thrift.protocol.TProtocol prot)
    {
      super(prot, prot);
    }

    public Client(org.apache.thrift.protocol.TProtocol iprot, org.apache.thrift.protocol.TProtocol oprot) {
      super(iprot, oprot);
    }

    @Override
    public void check(java.lang.String auth) throws org.apache.thrift.TException
    {
      send_check(auth);
      recv_check();
    }

    public void send_check(java.lang.String auth) throws org.apache.thrift.TException
    {
      check_args args = new check_args();
      args.setAuth(auth);
      sendBase("check", args);
    }

    public void recv_check() throws org.apache.thrift.TException
    {
      check_result result = new check_result();
      receiveBase(result, "check");
      return;
    }

  }
  public static class AsyncClient extends org.apache.thrift.async.TAsyncClient implements AsyncIface {
    public static class Factory implements org.apache.thrift.async.TAsyncClientFactory<AsyncClient> {
      private org.apache.thrift.async.TAsyncClientManager clientManager;
      private org.apache.thrift.protocol.TProtocolFactory protocolFactory;
      public Factory(org.apache.thrift.async.TAsyncClientManager clientManager, org.apache.thrift.protocol.TProtocolFactory protocolFactory) {
        this.clientManager = clientManager;
        this.protocolFactory = protocolFactory;
      }
    @Override
      public AsyncClient getAsyncClient(org.apache.thrift.transport.TNonblockingTransport transport) {
        return new AsyncClient(protocolFactory, clientManager, transport);
      }
    }

    public AsyncClient(org.apache.thrift.protocol.TProtocolFactory protocolFactory, org.apache.thrift.async.TAsyncClientManager clientManager, org.apache.thrift.transport.TNonblockingTransport transport) {
      super(protocolFactory, clientManager, transport);
    }

    @Override
    public void check(java.lang.String auth, org.apache.thrift.async.AsyncMethodCallback<Void> resultHandler) throws org.apache.thrift.TException {
      checkReady();
      check_call method_call = new check_call(auth, resultHandler, this, ___protocolFactory, ___transport);
      this.___currentMethod = method_call;
      ___manager.call(method_call);
    }

    public static class check_call extends org.apache.thrift.async.TAsyncMethodCall<Void> {
      private java.lang.String auth;
      public check_call(java.lang.String auth, org.apache.thrift.async.AsyncMethodCallback<Void> resultHandler, org.apache.thrift.async.TAsyncClient client, org.apache.thrift.protocol.TProtocolFactory protocolFactory, org.apache.thrift.transport.TNonblockingTransport transport) throws org.apache.thrift.TException {
        super(client, protocolFactory, transport, resultHandler, false);
        this.auth = auth;
      }

      @Override
      public void write_args(org.apache.thrift.protocol.TProtocol prot) throws org.apache.thrift.TException {
        prot.writeMessageBegin(new org.apache.thrift.protocol.TMessage("check", org.apache.thrift.protocol.TMessageType.CALL, 0));
        check_args args = new check_args();
        args.setAuth(auth);
        args.write(prot);
        prot.writeMessageEnd();
      }

      @Override
      public Void getResult() throws org.apache.thrift.TException {
        if (getState() != org.apache.thrift.async.TAsyncMethodCall.State.RESPONSE_READ) {
          throw new java.lang.IllegalStateException("Method call not finished!");
        }
        org.apache.thrift.transport.TMemoryInputTransport memoryTransport = new org.apache.thrift.transport.TMemoryInputTransport(getFrameBuffer().array());
        org.apache.thrift.protocol.TProtocol prot = client.getProtocolFactory().getProtocol(memoryTransport);
        (new Client(prot)).recv_check();
        return null;
      }
    }

  }

  public static class Processor<I extends Iface> extends org.apache.thrift.TBaseProcessor<I> implements org.apache.thrift.TProcessor {
    private static final org.slf4j.Logger _LOGGER = org.slf4j.LoggerFactory.getLogger(Processor.class.getName());
    public Processor(I iface) {
      super(iface, getProcessMap(new java.util.HashMap<java.lang.String, org.apache.thrift.ProcessFunction<I, ? extends org.apache.thrift.TBase>>()));
    }

    protected Processor(I iface, java.util.Map<java.lang.String, org.apache.thrift.ProcessFunction<I, ? extends org.apache.thrift.TBase>> processMap) {
      super(iface, getProcessMap(processMap));
    }

    private static <I extends Iface> java.util.Map<java.lang.String,  org.apache.thrift.ProcessFunction<I, ? extends org.apache.thrift.TBase>> getProcessMap(java.util.Map<java.lang.String, org.apache.thrift.ProcessFunction<I, ? extends  org.apache.thrift.TBase>> processMap) {
      processMap.put("check", new check());
      return processMap;
    }

    public static class check<I extends Iface> extends org.apache.thrift.ProcessFunction<I, check_args> {
      public check() {
        super("check");
      }

      @Override
      public check_args getEmptyArgsInstance() {
        return new check_args();
      }

      @Override
      protected boolean isOneway() {
        return false;
      }

      @Override
      protected boolean rethrowUnhandledExceptions() {
        return false;
      }

      @Override
      public check_result getResult(I iface, check_args args) throws org.apache.thrift.TException {
        check_result result = new check_result();
        iface.check(args.auth);
        return result;
      }
    }

  }

  public static class AsyncProcessor<I extends AsyncIface> extends org.apache.thrift.TBaseAsyncProcessor<I> {
    private static final org.slf4j.Logger _LOGGER = org.slf4j.LoggerFactory.getLogger(AsyncProcessor.class.getName());
    public AsyncProcessor(I iface) {
      super(iface, getProcessMap(new java.util.HashMap<java.lang.String, org.apache.thrift.AsyncProcessFunction<I, ? extends org.apache.thrift.TBase, ?>>()));
    }

    protected AsyncProcessor(I iface, java.util.Map<java.lang.String,  org.apache.thrift.AsyncProcessFunction<I, ? extends  org.apache.thrift.TBase, ?>> processMap) {
      super(iface, getProcessMap(processMap));
    }

    private static <I extends AsyncIface> java.util.Map<java.lang.String,  org.apache.thrift.AsyncProcessFunction<I, ? extends  org.apache.thrift.TBase,?>> getProcessMap(java.util.Map<java.lang.String,  org.apache.thrift.AsyncProcessFunction<I, ? extends  org.apache.thrift.TBase, ?>> processMap) {
      processMap.put("check", new check());
      return processMap;
    }

    public static class check<I extends AsyncIface> extends org.apache.thrift.AsyncProcessFunction<I, check_args, Void> {
      public check() {
        super("check");
      }

      @Override
      public check_args getEmptyArgsInstance() {
        return new check_args();
      }

      @Override
      public org.apache.thrift.async.AsyncMethodCallback<Void> getResultHandler(final org.apache.thrift.server.AbstractNonblockingServer.AsyncFrameBuffer fb, final int seqid) {
        final org.apache.thrift.AsyncProcessFunction fcall = this;
        return new org.apache.thrift.async.AsyncMethodCallback<Void>() { 
          @Override
          public void onComplete(Void o) {
            check_result result = new check_result();
            try {
              fcall.sendResponse(fb, result, org.apache.thrift.protocol.TMessageType.REPLY,seqid);
            } catch (org.apache.thrift.transport.TTransportException e) {
              _LOGGER.error("TTransportException writing to internal frame buffer", e);
              fb.close();
            } catch (java.lang.Exception e) {
              _LOGGER.error("Exception writing to internal frame buffer", e);
              onError(e);
            }
          }
          @Override
          public void onError(java.lang.Exception e) {
            byte msgType = org.apache.thrift.protocol.TMessageType.REPLY;
            org.apache.thrift.TSerializable msg;
            check_result result = new check_result();
            if (e instanceof org.apache.thrift.transport.TTransportException) {
              _LOGGER.error("TTransportException inside handler", e);
              fb.close();
              return;
            } else if (e instanceof org.apache.thrift.TApplicationException) {
              _LOGGER.error("TApplicationException inside handler", e);
              msgType = org.apache.thrift.protocol.TMessageType.EXCEPTION;
              msg = (org.apache.thrift.TApplicationException)e;
            } else {
              _LOGGER.error("Exception inside handler", e);
              msgType = org.apache.thrift.protocol.TMessageType.EXCEPTION;
              msg = new org.apache.thrift.TApplicationException(org.apache.thrift.TApplicationException.INTERNAL_ERROR, e.getMessage());
            }
            try {
              fcall.sendResponse(fb,msg,msgType,seqid);
            } catch (java.lang.Exception ex) {
              _LOGGER.error("Exception writing to internal frame buffer", ex);
              fb.close();
            }
          }
        };
      }

      @Override
      protected boolean isOneway() {
        return false;
      }

      @Override
      public void start(I iface, check_args args, org.apache.thrift.async.AsyncMethodCallback<Void> resultHandler) throws org.apache.thrift.TException {
        iface.check(args.auth,resultHandler);
      }
    }

  }

  @SuppressWarnings({"cast", "rawtypes", "serial", "unchecked", "unused"})
  public static class check_args implements org.apache.thrift.TBase<check_args, check_args._Fields>, java.io.Serializable, Cloneable, Comparable<check_args>   {
    private static final org.apache.thrift.protocol.TStruct STRUCT_DESC = new org.apache.thrift.protocol.TStruct("check_args");

    private static final org.apache.thrift.protocol.TField AUTH_FIELD_DESC = new org.apache.thrift.protocol.TField("auth", org.apache.thrift.protocol.TType.STRING, (short)1);

    private static final org.apache.thrift.scheme.SchemeFactory STANDARD_SCHEME_FACTORY = new check_argsStandardSchemeFactory();
    private static final org.apache.thrift.scheme.SchemeFactory TUPLE_SCHEME_FACTORY = new check_argsTupleSchemeFactory();

    public @org.apache.thrift.annotation.Nullable java.lang.String auth; // required

    /** The set of fields this struct contains, along with convenience methods for finding and manipulating them. */
    public enum _Fields implements org.apache.thrift.TFieldIdEnum {
      AUTH((short)1, "auth");

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
          case 1: // AUTH
            return AUTH;
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
      tmpMap.put(_Fields.AUTH, new org.apache.thrift.meta_data.FieldMetaData("auth", org.apache.thrift.TFieldRequirementType.DEFAULT, 
          new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
      metaDataMap = java.util.Collections.unmodifiableMap(tmpMap);
      org.apache.thrift.meta_data.FieldMetaData.addStructMetaDataMap(check_args.class, metaDataMap);
    }

    public check_args() {
    }

    public check_args(
      java.lang.String auth)
    {
      this();
      this.auth = auth;
    }

    /**
     * Performs a deep copy on <i>other</i>.
     */
    public check_args(check_args other) {
      if (other.isSetAuth()) {
        this.auth = other.auth;
      }
    }

    @Override
    public check_args deepCopy() {
      return new check_args(this);
    }

    @Override
    public void clear() {
      this.auth = null;
    }

    @org.apache.thrift.annotation.Nullable
    public java.lang.String getAuth() {
      return this.auth;
    }

    public check_args setAuth(@org.apache.thrift.annotation.Nullable java.lang.String auth) {
      this.auth = auth;
      return this;
    }

    public void unsetAuth() {
      this.auth = null;
    }

    /** Returns true if field auth is set (has been assigned a value) and false otherwise */
    public boolean isSetAuth() {
      return this.auth != null;
    }

    public void setAuthIsSet(boolean value) {
      if (!value) {
        this.auth = null;
      }
    }

    @Override
    public void setFieldValue(_Fields field, @org.apache.thrift.annotation.Nullable java.lang.Object value) {
      switch (field) {
      case AUTH:
        if (value == null) {
          unsetAuth();
        } else {
          setAuth((java.lang.String)value);
        }
        break;

      }
    }

    @org.apache.thrift.annotation.Nullable
    @Override
    public java.lang.Object getFieldValue(_Fields field) {
      switch (field) {
      case AUTH:
        return getAuth();

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
      case AUTH:
        return isSetAuth();
      }
      throw new java.lang.IllegalStateException();
    }

    @Override
    public boolean equals(java.lang.Object that) {
      if (that instanceof check_args)
        return this.equals((check_args)that);
      return false;
    }

    public boolean equals(check_args that) {
      if (that == null)
        return false;
      if (this == that)
        return true;

      boolean this_present_auth = true && this.isSetAuth();
      boolean that_present_auth = true && that.isSetAuth();
      if (this_present_auth || that_present_auth) {
        if (!(this_present_auth && that_present_auth))
          return false;
        if (!this.auth.equals(that.auth))
          return false;
      }

      return true;
    }

    @Override
    public int hashCode() {
      int hashCode = 1;

      hashCode = hashCode * 8191 + ((isSetAuth()) ? 131071 : 524287);
      if (isSetAuth())
        hashCode = hashCode * 8191 + auth.hashCode();

      return hashCode;
    }

    @Override
    public int compareTo(check_args other) {
      if (!getClass().equals(other.getClass())) {
        return getClass().getName().compareTo(other.getClass().getName());
      }

      int lastComparison = 0;

      lastComparison = java.lang.Boolean.compare(isSetAuth(), other.isSetAuth());
      if (lastComparison != 0) {
        return lastComparison;
      }
      if (isSetAuth()) {
        lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.auth, other.auth);
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
      java.lang.StringBuilder sb = new java.lang.StringBuilder("check_args(");
      boolean first = true;

      sb.append("auth:");
      if (this.auth == null) {
        sb.append("null");
      } else {
        sb.append(this.auth);
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

    private static class check_argsStandardSchemeFactory implements org.apache.thrift.scheme.SchemeFactory {
      @Override
      public check_argsStandardScheme getScheme() {
        return new check_argsStandardScheme();
      }
    }

    private static class check_argsStandardScheme extends org.apache.thrift.scheme.StandardScheme<check_args> {

      @Override
      public void read(org.apache.thrift.protocol.TProtocol iprot, check_args struct) throws org.apache.thrift.TException {
        org.apache.thrift.protocol.TField schemeField;
        iprot.readStructBegin();
        while (true)
        {
          schemeField = iprot.readFieldBegin();
          if (schemeField.type == org.apache.thrift.protocol.TType.STOP) { 
            break;
          }
          switch (schemeField.id) {
            case 1: // AUTH
              if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
                struct.auth = iprot.readString();
                struct.setAuthIsSet(true);
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
      public void write(org.apache.thrift.protocol.TProtocol oprot, check_args struct) throws org.apache.thrift.TException {
        struct.validate();

        oprot.writeStructBegin(STRUCT_DESC);
        if (struct.auth != null) {
          oprot.writeFieldBegin(AUTH_FIELD_DESC);
          oprot.writeString(struct.auth);
          oprot.writeFieldEnd();
        }
        oprot.writeFieldStop();
        oprot.writeStructEnd();
      }

    }

    private static class check_argsTupleSchemeFactory implements org.apache.thrift.scheme.SchemeFactory {
      @Override
      public check_argsTupleScheme getScheme() {
        return new check_argsTupleScheme();
      }
    }

    private static class check_argsTupleScheme extends org.apache.thrift.scheme.TupleScheme<check_args> {

      @Override
      public void write(org.apache.thrift.protocol.TProtocol prot, check_args struct) throws org.apache.thrift.TException {
        org.apache.thrift.protocol.TTupleProtocol oprot = (org.apache.thrift.protocol.TTupleProtocol) prot;
        java.util.BitSet optionals = new java.util.BitSet();
        if (struct.isSetAuth()) {
          optionals.set(0);
        }
        oprot.writeBitSet(optionals, 1);
        if (struct.isSetAuth()) {
          oprot.writeString(struct.auth);
        }
      }

      @Override
      public void read(org.apache.thrift.protocol.TProtocol prot, check_args struct) throws org.apache.thrift.TException {
        org.apache.thrift.protocol.TTupleProtocol iprot = (org.apache.thrift.protocol.TTupleProtocol) prot;
        java.util.BitSet incoming = iprot.readBitSet(1);
        if (incoming.get(0)) {
          struct.auth = iprot.readString();
          struct.setAuthIsSet(true);
        }
      }
    }

    private static <S extends org.apache.thrift.scheme.IScheme> S scheme(org.apache.thrift.protocol.TProtocol proto) {
      return (org.apache.thrift.scheme.StandardScheme.class.equals(proto.getScheme()) ? STANDARD_SCHEME_FACTORY : TUPLE_SCHEME_FACTORY).getScheme();
    }
  }

  @SuppressWarnings({"cast", "rawtypes", "serial", "unchecked", "unused"})
  public static class check_result implements org.apache.thrift.TBase<check_result, check_result._Fields>, java.io.Serializable, Cloneable, Comparable<check_result>   {
    private static final org.apache.thrift.protocol.TStruct STRUCT_DESC = new org.apache.thrift.protocol.TStruct("check_result");


    private static final org.apache.thrift.scheme.SchemeFactory STANDARD_SCHEME_FACTORY = new check_resultStandardSchemeFactory();
    private static final org.apache.thrift.scheme.SchemeFactory TUPLE_SCHEME_FACTORY = new check_resultTupleSchemeFactory();


    /** The set of fields this struct contains, along with convenience methods for finding and manipulating them. */
    public enum _Fields implements org.apache.thrift.TFieldIdEnum {
;

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
    public static final java.util.Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> metaDataMap;
    static {
      java.util.Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> tmpMap = new java.util.EnumMap<_Fields, org.apache.thrift.meta_data.FieldMetaData>(_Fields.class);
      metaDataMap = java.util.Collections.unmodifiableMap(tmpMap);
      org.apache.thrift.meta_data.FieldMetaData.addStructMetaDataMap(check_result.class, metaDataMap);
    }

    public check_result() {
    }

    /**
     * Performs a deep copy on <i>other</i>.
     */
    public check_result(check_result other) {
    }

    @Override
    public check_result deepCopy() {
      return new check_result(this);
    }

    @Override
    public void clear() {
    }

    @Override
    public void setFieldValue(_Fields field, @org.apache.thrift.annotation.Nullable java.lang.Object value) {
      switch (field) {
      }
    }

    @org.apache.thrift.annotation.Nullable
    @Override
    public java.lang.Object getFieldValue(_Fields field) {
      switch (field) {
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
      }
      throw new java.lang.IllegalStateException();
    }

    @Override
    public boolean equals(java.lang.Object that) {
      if (that instanceof check_result)
        return this.equals((check_result)that);
      return false;
    }

    public boolean equals(check_result that) {
      if (that == null)
        return false;
      if (this == that)
        return true;

      return true;
    }

    @Override
    public int hashCode() {
      int hashCode = 1;

      return hashCode;
    }

    @Override
    public int compareTo(check_result other) {
      if (!getClass().equals(other.getClass())) {
        return getClass().getName().compareTo(other.getClass().getName());
      }

      int lastComparison = 0;

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

    public void write(org.apache.thrift.protocol.TProtocol oprot) throws org.apache.thrift.TException {
      scheme(oprot).write(oprot, this);
      }

    @Override
    public java.lang.String toString() {
      java.lang.StringBuilder sb = new java.lang.StringBuilder("check_result(");
      boolean first = true;

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

    private static class check_resultStandardSchemeFactory implements org.apache.thrift.scheme.SchemeFactory {
      @Override
      public check_resultStandardScheme getScheme() {
        return new check_resultStandardScheme();
      }
    }

    private static class check_resultStandardScheme extends org.apache.thrift.scheme.StandardScheme<check_result> {

      @Override
      public void read(org.apache.thrift.protocol.TProtocol iprot, check_result struct) throws org.apache.thrift.TException {
        org.apache.thrift.protocol.TField schemeField;
        iprot.readStructBegin();
        while (true)
        {
          schemeField = iprot.readFieldBegin();
          if (schemeField.type == org.apache.thrift.protocol.TType.STOP) { 
            break;
          }
          switch (schemeField.id) {
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
      public void write(org.apache.thrift.protocol.TProtocol oprot, check_result struct) throws org.apache.thrift.TException {
        struct.validate();

        oprot.writeStructBegin(STRUCT_DESC);
        oprot.writeFieldStop();
        oprot.writeStructEnd();
      }

    }

    private static class check_resultTupleSchemeFactory implements org.apache.thrift.scheme.SchemeFactory {
      @Override
      public check_resultTupleScheme getScheme() {
        return new check_resultTupleScheme();
      }
    }

    private static class check_resultTupleScheme extends org.apache.thrift.scheme.TupleScheme<check_result> {

      @Override
      public void write(org.apache.thrift.protocol.TProtocol prot, check_result struct) throws org.apache.thrift.TException {
        org.apache.thrift.protocol.TTupleProtocol oprot = (org.apache.thrift.protocol.TTupleProtocol) prot;
      }

      @Override
      public void read(org.apache.thrift.protocol.TProtocol prot, check_result struct) throws org.apache.thrift.TException {
        org.apache.thrift.protocol.TTupleProtocol iprot = (org.apache.thrift.protocol.TTupleProtocol) prot;
      }
    }

    private static <S extends org.apache.thrift.scheme.IScheme> S scheme(org.apache.thrift.protocol.TProtocol proto) {
      return (org.apache.thrift.scheme.StandardScheme.class.equals(proto.getScheme()) ? STANDARD_SCHEME_FACTORY : TUPLE_SCHEME_FACTORY).getScheme();
    }
  }

}
