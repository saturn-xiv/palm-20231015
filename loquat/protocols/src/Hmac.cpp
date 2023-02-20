/**
 * Autogenerated by Thrift Compiler (0.18.0)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */
#include "Hmac.h"

namespace loquat { namespace v1 {


Hmac_sign_args::~Hmac_sign_args() noexcept {
}


uint32_t Hmac_sign_args::read(::apache::thrift::protocol::TProtocol* iprot) {

  ::apache::thrift::protocol::TInputRecursionTracker tracker(*iprot);
  uint32_t xfer = 0;
  std::string fname;
  ::apache::thrift::protocol::TType ftype;
  int16_t fid;

  xfer += iprot->readStructBegin(fname);

  using ::apache::thrift::protocol::TProtocolException;


  while (true)
  {
    xfer += iprot->readFieldBegin(fname, ftype, fid);
    if (ftype == ::apache::thrift::protocol::T_STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
        if (ftype == ::apache::thrift::protocol::T_STRING) {
          xfer += iprot->readString(this->auth);
          this->__isset.auth = true;
        } else {
          xfer += iprot->skip(ftype);
        }
        break;
      case 2:
        if (ftype == ::apache::thrift::protocol::T_STRING) {
          xfer += iprot->readBinary(this->plain);
          this->__isset.plain = true;
        } else {
          xfer += iprot->skip(ftype);
        }
        break;
      default:
        xfer += iprot->skip(ftype);
        break;
    }
    xfer += iprot->readFieldEnd();
  }

  xfer += iprot->readStructEnd();

  return xfer;
}

uint32_t Hmac_sign_args::write(::apache::thrift::protocol::TProtocol* oprot) const {
  uint32_t xfer = 0;
  ::apache::thrift::protocol::TOutputRecursionTracker tracker(*oprot);
  xfer += oprot->writeStructBegin("Hmac_sign_args");

  xfer += oprot->writeFieldBegin("auth", ::apache::thrift::protocol::T_STRING, 1);
  xfer += oprot->writeString(this->auth);
  xfer += oprot->writeFieldEnd();

  xfer += oprot->writeFieldBegin("plain", ::apache::thrift::protocol::T_STRING, 2);
  xfer += oprot->writeBinary(this->plain);
  xfer += oprot->writeFieldEnd();

  xfer += oprot->writeFieldStop();
  xfer += oprot->writeStructEnd();
  return xfer;
}


Hmac_sign_pargs::~Hmac_sign_pargs() noexcept {
}


uint32_t Hmac_sign_pargs::write(::apache::thrift::protocol::TProtocol* oprot) const {
  uint32_t xfer = 0;
  ::apache::thrift::protocol::TOutputRecursionTracker tracker(*oprot);
  xfer += oprot->writeStructBegin("Hmac_sign_pargs");

  xfer += oprot->writeFieldBegin("auth", ::apache::thrift::protocol::T_STRING, 1);
  xfer += oprot->writeString((*(this->auth)));
  xfer += oprot->writeFieldEnd();

  xfer += oprot->writeFieldBegin("plain", ::apache::thrift::protocol::T_STRING, 2);
  xfer += oprot->writeBinary((*(this->plain)));
  xfer += oprot->writeFieldEnd();

  xfer += oprot->writeFieldStop();
  xfer += oprot->writeStructEnd();
  return xfer;
}


Hmac_sign_result::~Hmac_sign_result() noexcept {
}


uint32_t Hmac_sign_result::read(::apache::thrift::protocol::TProtocol* iprot) {

  ::apache::thrift::protocol::TInputRecursionTracker tracker(*iprot);
  uint32_t xfer = 0;
  std::string fname;
  ::apache::thrift::protocol::TType ftype;
  int16_t fid;

  xfer += iprot->readStructBegin(fname);

  using ::apache::thrift::protocol::TProtocolException;


  while (true)
  {
    xfer += iprot->readFieldBegin(fname, ftype, fid);
    if (ftype == ::apache::thrift::protocol::T_STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
        if (ftype == ::apache::thrift::protocol::T_STRING) {
          xfer += iprot->readBinary(this->success);
          this->__isset.success = true;
        } else {
          xfer += iprot->skip(ftype);
        }
        break;
      default:
        xfer += iprot->skip(ftype);
        break;
    }
    xfer += iprot->readFieldEnd();
  }

  xfer += iprot->readStructEnd();

  return xfer;
}

uint32_t Hmac_sign_result::write(::apache::thrift::protocol::TProtocol* oprot) const {

  uint32_t xfer = 0;

  xfer += oprot->writeStructBegin("Hmac_sign_result");

  if (this->__isset.success) {
    xfer += oprot->writeFieldBegin("success", ::apache::thrift::protocol::T_STRING, 0);
    xfer += oprot->writeBinary(this->success);
    xfer += oprot->writeFieldEnd();
  }
  xfer += oprot->writeFieldStop();
  xfer += oprot->writeStructEnd();
  return xfer;
}


Hmac_sign_presult::~Hmac_sign_presult() noexcept {
}


uint32_t Hmac_sign_presult::read(::apache::thrift::protocol::TProtocol* iprot) {

  ::apache::thrift::protocol::TInputRecursionTracker tracker(*iprot);
  uint32_t xfer = 0;
  std::string fname;
  ::apache::thrift::protocol::TType ftype;
  int16_t fid;

  xfer += iprot->readStructBegin(fname);

  using ::apache::thrift::protocol::TProtocolException;


  while (true)
  {
    xfer += iprot->readFieldBegin(fname, ftype, fid);
    if (ftype == ::apache::thrift::protocol::T_STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
        if (ftype == ::apache::thrift::protocol::T_STRING) {
          xfer += iprot->readBinary((*(this->success)));
          this->__isset.success = true;
        } else {
          xfer += iprot->skip(ftype);
        }
        break;
      default:
        xfer += iprot->skip(ftype);
        break;
    }
    xfer += iprot->readFieldEnd();
  }

  xfer += iprot->readStructEnd();

  return xfer;
}


Hmac_verify_args::~Hmac_verify_args() noexcept {
}


uint32_t Hmac_verify_args::read(::apache::thrift::protocol::TProtocol* iprot) {

  ::apache::thrift::protocol::TInputRecursionTracker tracker(*iprot);
  uint32_t xfer = 0;
  std::string fname;
  ::apache::thrift::protocol::TType ftype;
  int16_t fid;

  xfer += iprot->readStructBegin(fname);

  using ::apache::thrift::protocol::TProtocolException;


  while (true)
  {
    xfer += iprot->readFieldBegin(fname, ftype, fid);
    if (ftype == ::apache::thrift::protocol::T_STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
        if (ftype == ::apache::thrift::protocol::T_STRING) {
          xfer += iprot->readString(this->auth);
          this->__isset.auth = true;
        } else {
          xfer += iprot->skip(ftype);
        }
        break;
      case 2:
        if (ftype == ::apache::thrift::protocol::T_STRING) {
          xfer += iprot->readBinary(this->code);
          this->__isset.code = true;
        } else {
          xfer += iprot->skip(ftype);
        }
        break;
      case 3:
        if (ftype == ::apache::thrift::protocol::T_STRING) {
          xfer += iprot->readBinary(this->plain);
          this->__isset.plain = true;
        } else {
          xfer += iprot->skip(ftype);
        }
        break;
      default:
        xfer += iprot->skip(ftype);
        break;
    }
    xfer += iprot->readFieldEnd();
  }

  xfer += iprot->readStructEnd();

  return xfer;
}

uint32_t Hmac_verify_args::write(::apache::thrift::protocol::TProtocol* oprot) const {
  uint32_t xfer = 0;
  ::apache::thrift::protocol::TOutputRecursionTracker tracker(*oprot);
  xfer += oprot->writeStructBegin("Hmac_verify_args");

  xfer += oprot->writeFieldBegin("auth", ::apache::thrift::protocol::T_STRING, 1);
  xfer += oprot->writeString(this->auth);
  xfer += oprot->writeFieldEnd();

  xfer += oprot->writeFieldBegin("code", ::apache::thrift::protocol::T_STRING, 2);
  xfer += oprot->writeBinary(this->code);
  xfer += oprot->writeFieldEnd();

  xfer += oprot->writeFieldBegin("plain", ::apache::thrift::protocol::T_STRING, 3);
  xfer += oprot->writeBinary(this->plain);
  xfer += oprot->writeFieldEnd();

  xfer += oprot->writeFieldStop();
  xfer += oprot->writeStructEnd();
  return xfer;
}


Hmac_verify_pargs::~Hmac_verify_pargs() noexcept {
}


uint32_t Hmac_verify_pargs::write(::apache::thrift::protocol::TProtocol* oprot) const {
  uint32_t xfer = 0;
  ::apache::thrift::protocol::TOutputRecursionTracker tracker(*oprot);
  xfer += oprot->writeStructBegin("Hmac_verify_pargs");

  xfer += oprot->writeFieldBegin("auth", ::apache::thrift::protocol::T_STRING, 1);
  xfer += oprot->writeString((*(this->auth)));
  xfer += oprot->writeFieldEnd();

  xfer += oprot->writeFieldBegin("code", ::apache::thrift::protocol::T_STRING, 2);
  xfer += oprot->writeBinary((*(this->code)));
  xfer += oprot->writeFieldEnd();

  xfer += oprot->writeFieldBegin("plain", ::apache::thrift::protocol::T_STRING, 3);
  xfer += oprot->writeBinary((*(this->plain)));
  xfer += oprot->writeFieldEnd();

  xfer += oprot->writeFieldStop();
  xfer += oprot->writeStructEnd();
  return xfer;
}


Hmac_verify_result::~Hmac_verify_result() noexcept {
}


uint32_t Hmac_verify_result::read(::apache::thrift::protocol::TProtocol* iprot) {

  ::apache::thrift::protocol::TInputRecursionTracker tracker(*iprot);
  uint32_t xfer = 0;
  std::string fname;
  ::apache::thrift::protocol::TType ftype;
  int16_t fid;

  xfer += iprot->readStructBegin(fname);

  using ::apache::thrift::protocol::TProtocolException;


  while (true)
  {
    xfer += iprot->readFieldBegin(fname, ftype, fid);
    if (ftype == ::apache::thrift::protocol::T_STOP) {
      break;
    }
    xfer += iprot->skip(ftype);
    xfer += iprot->readFieldEnd();
  }

  xfer += iprot->readStructEnd();

  return xfer;
}

uint32_t Hmac_verify_result::write(::apache::thrift::protocol::TProtocol* oprot) const {

  uint32_t xfer = 0;

  xfer += oprot->writeStructBegin("Hmac_verify_result");

  xfer += oprot->writeFieldStop();
  xfer += oprot->writeStructEnd();
  return xfer;
}


Hmac_verify_presult::~Hmac_verify_presult() noexcept {
}


uint32_t Hmac_verify_presult::read(::apache::thrift::protocol::TProtocol* iprot) {

  ::apache::thrift::protocol::TInputRecursionTracker tracker(*iprot);
  uint32_t xfer = 0;
  std::string fname;
  ::apache::thrift::protocol::TType ftype;
  int16_t fid;

  xfer += iprot->readStructBegin(fname);

  using ::apache::thrift::protocol::TProtocolException;


  while (true)
  {
    xfer += iprot->readFieldBegin(fname, ftype, fid);
    if (ftype == ::apache::thrift::protocol::T_STOP) {
      break;
    }
    xfer += iprot->skip(ftype);
    xfer += iprot->readFieldEnd();
  }

  xfer += iprot->readStructEnd();

  return xfer;
}

void HmacClient::sign(std::string& _return, const std::string& auth, const std::string& plain)
{
  send_sign(auth, plain);
  recv_sign(_return);
}

void HmacClient::send_sign(const std::string& auth, const std::string& plain)
{
  int32_t cseqid = 0;
  oprot_->writeMessageBegin("sign", ::apache::thrift::protocol::T_CALL, cseqid);

  Hmac_sign_pargs args;
  args.auth = &auth;
  args.plain = &plain;
  args.write(oprot_);

  oprot_->writeMessageEnd();
  oprot_->getTransport()->writeEnd();
  oprot_->getTransport()->flush();
}

void HmacClient::recv_sign(std::string& _return)
{

  int32_t rseqid = 0;
  std::string fname;
  ::apache::thrift::protocol::TMessageType mtype;

  iprot_->readMessageBegin(fname, mtype, rseqid);
  if (mtype == ::apache::thrift::protocol::T_EXCEPTION) {
    ::apache::thrift::TApplicationException x;
    x.read(iprot_);
    iprot_->readMessageEnd();
    iprot_->getTransport()->readEnd();
    throw x;
  }
  if (mtype != ::apache::thrift::protocol::T_REPLY) {
    iprot_->skip(::apache::thrift::protocol::T_STRUCT);
    iprot_->readMessageEnd();
    iprot_->getTransport()->readEnd();
  }
  if (fname.compare("sign") != 0) {
    iprot_->skip(::apache::thrift::protocol::T_STRUCT);
    iprot_->readMessageEnd();
    iprot_->getTransport()->readEnd();
  }
  Hmac_sign_presult result;
  result.success = &_return;
  result.read(iprot_);
  iprot_->readMessageEnd();
  iprot_->getTransport()->readEnd();

  if (result.__isset.success) {
    // _return pointer has now been filled
    return;
  }
  throw ::apache::thrift::TApplicationException(::apache::thrift::TApplicationException::MISSING_RESULT, "sign failed: unknown result");
}

void HmacClient::verify(const std::string& auth, const std::string& code, const std::string& plain)
{
  send_verify(auth, code, plain);
  recv_verify();
}

void HmacClient::send_verify(const std::string& auth, const std::string& code, const std::string& plain)
{
  int32_t cseqid = 0;
  oprot_->writeMessageBegin("verify", ::apache::thrift::protocol::T_CALL, cseqid);

  Hmac_verify_pargs args;
  args.auth = &auth;
  args.code = &code;
  args.plain = &plain;
  args.write(oprot_);

  oprot_->writeMessageEnd();
  oprot_->getTransport()->writeEnd();
  oprot_->getTransport()->flush();
}

void HmacClient::recv_verify()
{

  int32_t rseqid = 0;
  std::string fname;
  ::apache::thrift::protocol::TMessageType mtype;

  iprot_->readMessageBegin(fname, mtype, rseqid);
  if (mtype == ::apache::thrift::protocol::T_EXCEPTION) {
    ::apache::thrift::TApplicationException x;
    x.read(iprot_);
    iprot_->readMessageEnd();
    iprot_->getTransport()->readEnd();
    throw x;
  }
  if (mtype != ::apache::thrift::protocol::T_REPLY) {
    iprot_->skip(::apache::thrift::protocol::T_STRUCT);
    iprot_->readMessageEnd();
    iprot_->getTransport()->readEnd();
  }
  if (fname.compare("verify") != 0) {
    iprot_->skip(::apache::thrift::protocol::T_STRUCT);
    iprot_->readMessageEnd();
    iprot_->getTransport()->readEnd();
  }
  Hmac_verify_presult result;
  result.read(iprot_);
  iprot_->readMessageEnd();
  iprot_->getTransport()->readEnd();

  return;
}

bool HmacProcessor::dispatchCall(::apache::thrift::protocol::TProtocol* iprot, ::apache::thrift::protocol::TProtocol* oprot, const std::string& fname, int32_t seqid, void* callContext) {
  ProcessMap::iterator pfn;
  pfn = processMap_.find(fname);
  if (pfn == processMap_.end()) {
    iprot->skip(::apache::thrift::protocol::T_STRUCT);
    iprot->readMessageEnd();
    iprot->getTransport()->readEnd();
    ::apache::thrift::TApplicationException x(::apache::thrift::TApplicationException::UNKNOWN_METHOD, "Invalid method name: '"+fname+"'");
    oprot->writeMessageBegin(fname, ::apache::thrift::protocol::T_EXCEPTION, seqid);
    x.write(oprot);
    oprot->writeMessageEnd();
    oprot->getTransport()->writeEnd();
    oprot->getTransport()->flush();
    return true;
  }
  (this->*(pfn->second))(seqid, iprot, oprot, callContext);
  return true;
}

void HmacProcessor::process_sign(int32_t seqid, ::apache::thrift::protocol::TProtocol* iprot, ::apache::thrift::protocol::TProtocol* oprot, void* callContext)
{
  void* ctx = nullptr;
  if (this->eventHandler_.get() != nullptr) {
    ctx = this->eventHandler_->getContext("Hmac.sign", callContext);
  }
  ::apache::thrift::TProcessorContextFreer freer(this->eventHandler_.get(), ctx, "Hmac.sign");

  if (this->eventHandler_.get() != nullptr) {
    this->eventHandler_->preRead(ctx, "Hmac.sign");
  }

  Hmac_sign_args args;
  args.read(iprot);
  iprot->readMessageEnd();
  uint32_t bytes = iprot->getTransport()->readEnd();

  if (this->eventHandler_.get() != nullptr) {
    this->eventHandler_->postRead(ctx, "Hmac.sign", bytes);
  }

  Hmac_sign_result result;
  try {
    iface_->sign(result.success, args.auth, args.plain);
    result.__isset.success = true;
  } catch (const std::exception& e) {
    if (this->eventHandler_.get() != nullptr) {
      this->eventHandler_->handlerError(ctx, "Hmac.sign");
    }

    ::apache::thrift::TApplicationException x(e.what());
    oprot->writeMessageBegin("sign", ::apache::thrift::protocol::T_EXCEPTION, seqid);
    x.write(oprot);
    oprot->writeMessageEnd();
    oprot->getTransport()->writeEnd();
    oprot->getTransport()->flush();
    return;
  }

  if (this->eventHandler_.get() != nullptr) {
    this->eventHandler_->preWrite(ctx, "Hmac.sign");
  }

  oprot->writeMessageBegin("sign", ::apache::thrift::protocol::T_REPLY, seqid);
  result.write(oprot);
  oprot->writeMessageEnd();
  bytes = oprot->getTransport()->writeEnd();
  oprot->getTransport()->flush();

  if (this->eventHandler_.get() != nullptr) {
    this->eventHandler_->postWrite(ctx, "Hmac.sign", bytes);
  }
}

void HmacProcessor::process_verify(int32_t seqid, ::apache::thrift::protocol::TProtocol* iprot, ::apache::thrift::protocol::TProtocol* oprot, void* callContext)
{
  void* ctx = nullptr;
  if (this->eventHandler_.get() != nullptr) {
    ctx = this->eventHandler_->getContext("Hmac.verify", callContext);
  }
  ::apache::thrift::TProcessorContextFreer freer(this->eventHandler_.get(), ctx, "Hmac.verify");

  if (this->eventHandler_.get() != nullptr) {
    this->eventHandler_->preRead(ctx, "Hmac.verify");
  }

  Hmac_verify_args args;
  args.read(iprot);
  iprot->readMessageEnd();
  uint32_t bytes = iprot->getTransport()->readEnd();

  if (this->eventHandler_.get() != nullptr) {
    this->eventHandler_->postRead(ctx, "Hmac.verify", bytes);
  }

  Hmac_verify_result result;
  try {
    iface_->verify(args.auth, args.code, args.plain);
  } catch (const std::exception& e) {
    if (this->eventHandler_.get() != nullptr) {
      this->eventHandler_->handlerError(ctx, "Hmac.verify");
    }

    ::apache::thrift::TApplicationException x(e.what());
    oprot->writeMessageBegin("verify", ::apache::thrift::protocol::T_EXCEPTION, seqid);
    x.write(oprot);
    oprot->writeMessageEnd();
    oprot->getTransport()->writeEnd();
    oprot->getTransport()->flush();
    return;
  }

  if (this->eventHandler_.get() != nullptr) {
    this->eventHandler_->preWrite(ctx, "Hmac.verify");
  }

  oprot->writeMessageBegin("verify", ::apache::thrift::protocol::T_REPLY, seqid);
  result.write(oprot);
  oprot->writeMessageEnd();
  bytes = oprot->getTransport()->writeEnd();
  oprot->getTransport()->flush();

  if (this->eventHandler_.get() != nullptr) {
    this->eventHandler_->postWrite(ctx, "Hmac.verify", bytes);
  }
}

::std::shared_ptr< ::apache::thrift::TProcessor > HmacProcessorFactory::getProcessor(const ::apache::thrift::TConnectionInfo& connInfo) {
  ::apache::thrift::ReleaseHandler< HmacIfFactory > cleanup(handlerFactory_);
  ::std::shared_ptr< HmacIf > handler(handlerFactory_->getHandler(connInfo), cleanup);
  ::std::shared_ptr< ::apache::thrift::TProcessor > processor(new HmacProcessor(handler));
  return processor;
}

void HmacConcurrentClient::sign(std::string& _return, const std::string& auth, const std::string& plain)
{
  int32_t seqid = send_sign(auth, plain);
  recv_sign(_return, seqid);
}

int32_t HmacConcurrentClient::send_sign(const std::string& auth, const std::string& plain)
{
  int32_t cseqid = this->sync_->generateSeqId();
  ::apache::thrift::async::TConcurrentSendSentry sentry(this->sync_.get());
  oprot_->writeMessageBegin("sign", ::apache::thrift::protocol::T_CALL, cseqid);

  Hmac_sign_pargs args;
  args.auth = &auth;
  args.plain = &plain;
  args.write(oprot_);

  oprot_->writeMessageEnd();
  oprot_->getTransport()->writeEnd();
  oprot_->getTransport()->flush();

  sentry.commit();
  return cseqid;
}

void HmacConcurrentClient::recv_sign(std::string& _return, const int32_t seqid)
{

  int32_t rseqid = 0;
  std::string fname;
  ::apache::thrift::protocol::TMessageType mtype;

  // the read mutex gets dropped and reacquired as part of waitForWork()
  // The destructor of this sentry wakes up other clients
  ::apache::thrift::async::TConcurrentRecvSentry sentry(this->sync_.get(), seqid);

  while(true) {
    if(!this->sync_->getPending(fname, mtype, rseqid)) {
      iprot_->readMessageBegin(fname, mtype, rseqid);
    }
    if(seqid == rseqid) {
      if (mtype == ::apache::thrift::protocol::T_EXCEPTION) {
        ::apache::thrift::TApplicationException x;
        x.read(iprot_);
        iprot_->readMessageEnd();
        iprot_->getTransport()->readEnd();
        sentry.commit();
        throw x;
      }
      if (mtype != ::apache::thrift::protocol::T_REPLY) {
        iprot_->skip(::apache::thrift::protocol::T_STRUCT);
        iprot_->readMessageEnd();
        iprot_->getTransport()->readEnd();
      }
      if (fname.compare("sign") != 0) {
        iprot_->skip(::apache::thrift::protocol::T_STRUCT);
        iprot_->readMessageEnd();
        iprot_->getTransport()->readEnd();

        // in a bad state, don't commit
        using ::apache::thrift::protocol::TProtocolException;
        throw TProtocolException(TProtocolException::INVALID_DATA);
      }
      Hmac_sign_presult result;
      result.success = &_return;
      result.read(iprot_);
      iprot_->readMessageEnd();
      iprot_->getTransport()->readEnd();

      if (result.__isset.success) {
        // _return pointer has now been filled
        sentry.commit();
        return;
      }
      // in a bad state, don't commit
      throw ::apache::thrift::TApplicationException(::apache::thrift::TApplicationException::MISSING_RESULT, "sign failed: unknown result");
    }
    // seqid != rseqid
    this->sync_->updatePending(fname, mtype, rseqid);

    // this will temporarily unlock the readMutex, and let other clients get work done
    this->sync_->waitForWork(seqid);
  } // end while(true)
}

void HmacConcurrentClient::verify(const std::string& auth, const std::string& code, const std::string& plain)
{
  int32_t seqid = send_verify(auth, code, plain);
  recv_verify(seqid);
}

int32_t HmacConcurrentClient::send_verify(const std::string& auth, const std::string& code, const std::string& plain)
{
  int32_t cseqid = this->sync_->generateSeqId();
  ::apache::thrift::async::TConcurrentSendSentry sentry(this->sync_.get());
  oprot_->writeMessageBegin("verify", ::apache::thrift::protocol::T_CALL, cseqid);

  Hmac_verify_pargs args;
  args.auth = &auth;
  args.code = &code;
  args.plain = &plain;
  args.write(oprot_);

  oprot_->writeMessageEnd();
  oprot_->getTransport()->writeEnd();
  oprot_->getTransport()->flush();

  sentry.commit();
  return cseqid;
}

void HmacConcurrentClient::recv_verify(const int32_t seqid)
{

  int32_t rseqid = 0;
  std::string fname;
  ::apache::thrift::protocol::TMessageType mtype;

  // the read mutex gets dropped and reacquired as part of waitForWork()
  // The destructor of this sentry wakes up other clients
  ::apache::thrift::async::TConcurrentRecvSentry sentry(this->sync_.get(), seqid);

  while(true) {
    if(!this->sync_->getPending(fname, mtype, rseqid)) {
      iprot_->readMessageBegin(fname, mtype, rseqid);
    }
    if(seqid == rseqid) {
      if (mtype == ::apache::thrift::protocol::T_EXCEPTION) {
        ::apache::thrift::TApplicationException x;
        x.read(iprot_);
        iprot_->readMessageEnd();
        iprot_->getTransport()->readEnd();
        sentry.commit();
        throw x;
      }
      if (mtype != ::apache::thrift::protocol::T_REPLY) {
        iprot_->skip(::apache::thrift::protocol::T_STRUCT);
        iprot_->readMessageEnd();
        iprot_->getTransport()->readEnd();
      }
      if (fname.compare("verify") != 0) {
        iprot_->skip(::apache::thrift::protocol::T_STRUCT);
        iprot_->readMessageEnd();
        iprot_->getTransport()->readEnd();

        // in a bad state, don't commit
        using ::apache::thrift::protocol::TProtocolException;
        throw TProtocolException(TProtocolException::INVALID_DATA);
      }
      Hmac_verify_presult result;
      result.read(iprot_);
      iprot_->readMessageEnd();
      iprot_->getTransport()->readEnd();

      sentry.commit();
      return;
    }
    // seqid != rseqid
    this->sync_->updatePending(fname, mtype, rseqid);

    // this will temporarily unlock the readMutex, and let other clients get work done
    this->sync_->waitForWork(seqid);
  } // end while(true)
}

}} // namespace

