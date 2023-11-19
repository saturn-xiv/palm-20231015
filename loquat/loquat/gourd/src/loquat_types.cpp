/**
 * Autogenerated by Thrift Compiler (0.19.0)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */
#include "loquat_types.h"

#include <algorithm>
#include <ostream>

#include <thrift/TToString.h>

namespace loquat { namespace v1 {


JwtVerfifyResponse::~JwtVerfifyResponse() noexcept {
}


void JwtVerfifyResponse::__set_subject(const std::string& val) {
  this->subject = val;
}

void JwtVerfifyResponse::__set_payload(const std::string& val) {
  this->payload = val;
}
std::ostream& operator<<(std::ostream& out, const JwtVerfifyResponse& obj)
{
  obj.printTo(out);
  return out;
}


uint32_t JwtVerfifyResponse::read(::apache::thrift::protocol::TProtocol* iprot) {

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
          xfer += iprot->readString(this->subject);
          this->__isset.subject = true;
        } else {
          xfer += iprot->skip(ftype);
        }
        break;
      case 2:
        if (ftype == ::apache::thrift::protocol::T_STRING) {
          xfer += iprot->readString(this->payload);
          this->__isset.payload = true;
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

uint32_t JwtVerfifyResponse::write(::apache::thrift::protocol::TProtocol* oprot) const {
  uint32_t xfer = 0;
  ::apache::thrift::protocol::TOutputRecursionTracker tracker(*oprot);
  xfer += oprot->writeStructBegin("JwtVerfifyResponse");

  xfer += oprot->writeFieldBegin("subject", ::apache::thrift::protocol::T_STRING, 1);
  xfer += oprot->writeString(this->subject);
  xfer += oprot->writeFieldEnd();

  xfer += oprot->writeFieldBegin("payload", ::apache::thrift::protocol::T_STRING, 2);
  xfer += oprot->writeString(this->payload);
  xfer += oprot->writeFieldEnd();

  xfer += oprot->writeFieldStop();
  xfer += oprot->writeStructEnd();
  return xfer;
}

void swap(JwtVerfifyResponse &a, JwtVerfifyResponse &b) {
  using ::std::swap;
  swap(a.subject, b.subject);
  swap(a.payload, b.payload);
  swap(a.__isset, b.__isset);
}

JwtVerfifyResponse::JwtVerfifyResponse(const JwtVerfifyResponse& other0) {
  subject = other0.subject;
  payload = other0.payload;
  __isset = other0.__isset;
}
JwtVerfifyResponse& JwtVerfifyResponse::operator=(const JwtVerfifyResponse& other1) {
  subject = other1.subject;
  payload = other1.payload;
  __isset = other1.__isset;
  return *this;
}
void JwtVerfifyResponse::printTo(std::ostream& out) const {
  using ::apache::thrift::to_string;
  out << "JwtVerfifyResponse(";
  out << "subject=" << to_string(subject);
  out << ", " << "payload=" << to_string(payload);
  out << ")";
}

}} // namespace