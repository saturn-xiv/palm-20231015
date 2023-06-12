/**
 * Autogenerated by Thrift Compiler (0.18.1)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */
#ifndef Hmac_H
#define Hmac_H

#include <thrift/TDispatchProcessor.h>
#include <thrift/async/TConcurrentClientSyncInfo.h>
#include <memory>
#include "loquat_types.h"

namespace loquat { namespace v1 {

#ifdef _MSC_VER
  #pragma warning( push )
  #pragma warning (disable : 4250 ) //inheriting methods via dominance 
#endif

class HmacIf {
 public:
  virtual ~HmacIf() {}
  virtual void sign(std::string& _return, const std::string& zone, const std::string& plain) = 0;
  virtual void verify(const std::string& zone, const std::string& code, const std::string& plain) = 0;
};

class HmacIfFactory {
 public:
  typedef HmacIf Handler;

  virtual ~HmacIfFactory() {}

  virtual HmacIf* getHandler(const ::apache::thrift::TConnectionInfo& connInfo) = 0;
  virtual void releaseHandler(HmacIf* /* handler */) = 0;
  };

class HmacIfSingletonFactory : virtual public HmacIfFactory {
 public:
  HmacIfSingletonFactory(const ::std::shared_ptr<HmacIf>& iface) : iface_(iface) {}
  virtual ~HmacIfSingletonFactory() {}

  virtual HmacIf* getHandler(const ::apache::thrift::TConnectionInfo&) override {
    return iface_.get();
  }
  virtual void releaseHandler(HmacIf* /* handler */) override {}

 protected:
  ::std::shared_ptr<HmacIf> iface_;
};

class HmacNull : virtual public HmacIf {
 public:
  virtual ~HmacNull() {}
  void sign(std::string& /* _return */, const std::string& /* zone */, const std::string& /* plain */) override {
    return;
  }
  void verify(const std::string& /* zone */, const std::string& /* code */, const std::string& /* plain */) override {
    return;
  }
};

typedef struct _Hmac_sign_args__isset {
  _Hmac_sign_args__isset() : zone(false), plain(false) {}
  bool zone :1;
  bool plain :1;
} _Hmac_sign_args__isset;

class Hmac_sign_args {
 public:

  Hmac_sign_args(const Hmac_sign_args&);
  Hmac_sign_args& operator=(const Hmac_sign_args&);
  Hmac_sign_args() noexcept
                 : zone(),
                   plain() {
  }

  virtual ~Hmac_sign_args() noexcept;
  std::string zone;
  std::string plain;

  _Hmac_sign_args__isset __isset;

  void __set_zone(const std::string& val);

  void __set_plain(const std::string& val);

  bool operator == (const Hmac_sign_args & rhs) const
  {
    if (!(zone == rhs.zone))
      return false;
    if (!(plain == rhs.plain))
      return false;
    return true;
  }
  bool operator != (const Hmac_sign_args &rhs) const {
    return !(*this == rhs);
  }

  bool operator < (const Hmac_sign_args & ) const;

  uint32_t read(::apache::thrift::protocol::TProtocol* iprot);
  uint32_t write(::apache::thrift::protocol::TProtocol* oprot) const;

};


class Hmac_sign_pargs {
 public:


  virtual ~Hmac_sign_pargs() noexcept;
  const std::string* zone;
  const std::string* plain;

  uint32_t write(::apache::thrift::protocol::TProtocol* oprot) const;

};

typedef struct _Hmac_sign_result__isset {
  _Hmac_sign_result__isset() : success(false) {}
  bool success :1;
} _Hmac_sign_result__isset;

class Hmac_sign_result {
 public:

  Hmac_sign_result(const Hmac_sign_result&);
  Hmac_sign_result& operator=(const Hmac_sign_result&);
  Hmac_sign_result() noexcept
                   : success() {
  }

  virtual ~Hmac_sign_result() noexcept;
  std::string success;

  _Hmac_sign_result__isset __isset;

  void __set_success(const std::string& val);

  bool operator == (const Hmac_sign_result & rhs) const
  {
    if (!(success == rhs.success))
      return false;
    return true;
  }
  bool operator != (const Hmac_sign_result &rhs) const {
    return !(*this == rhs);
  }

  bool operator < (const Hmac_sign_result & ) const;

  uint32_t read(::apache::thrift::protocol::TProtocol* iprot);
  uint32_t write(::apache::thrift::protocol::TProtocol* oprot) const;

};

typedef struct _Hmac_sign_presult__isset {
  _Hmac_sign_presult__isset() : success(false) {}
  bool success :1;
} _Hmac_sign_presult__isset;

class Hmac_sign_presult {
 public:


  virtual ~Hmac_sign_presult() noexcept;
  std::string* success;

  _Hmac_sign_presult__isset __isset;

  uint32_t read(::apache::thrift::protocol::TProtocol* iprot);

};

typedef struct _Hmac_verify_args__isset {
  _Hmac_verify_args__isset() : zone(false), code(false), plain(false) {}
  bool zone :1;
  bool code :1;
  bool plain :1;
} _Hmac_verify_args__isset;

class Hmac_verify_args {
 public:

  Hmac_verify_args(const Hmac_verify_args&);
  Hmac_verify_args& operator=(const Hmac_verify_args&);
  Hmac_verify_args() noexcept
                   : zone(),
                     code(),
                     plain() {
  }

  virtual ~Hmac_verify_args() noexcept;
  std::string zone;
  std::string code;
  std::string plain;

  _Hmac_verify_args__isset __isset;

  void __set_zone(const std::string& val);

  void __set_code(const std::string& val);

  void __set_plain(const std::string& val);

  bool operator == (const Hmac_verify_args & rhs) const
  {
    if (!(zone == rhs.zone))
      return false;
    if (!(code == rhs.code))
      return false;
    if (!(plain == rhs.plain))
      return false;
    return true;
  }
  bool operator != (const Hmac_verify_args &rhs) const {
    return !(*this == rhs);
  }

  bool operator < (const Hmac_verify_args & ) const;

  uint32_t read(::apache::thrift::protocol::TProtocol* iprot);
  uint32_t write(::apache::thrift::protocol::TProtocol* oprot) const;

};


class Hmac_verify_pargs {
 public:


  virtual ~Hmac_verify_pargs() noexcept;
  const std::string* zone;
  const std::string* code;
  const std::string* plain;

  uint32_t write(::apache::thrift::protocol::TProtocol* oprot) const;

};


class Hmac_verify_result {
 public:

  Hmac_verify_result(const Hmac_verify_result&) noexcept;
  Hmac_verify_result& operator=(const Hmac_verify_result&) noexcept;
  Hmac_verify_result() noexcept {
  }

  virtual ~Hmac_verify_result() noexcept;

  bool operator == (const Hmac_verify_result & /* rhs */) const
  {
    return true;
  }
  bool operator != (const Hmac_verify_result &rhs) const {
    return !(*this == rhs);
  }

  bool operator < (const Hmac_verify_result & ) const;

  uint32_t read(::apache::thrift::protocol::TProtocol* iprot);
  uint32_t write(::apache::thrift::protocol::TProtocol* oprot) const;

};


class Hmac_verify_presult {
 public:


  virtual ~Hmac_verify_presult() noexcept;

  uint32_t read(::apache::thrift::protocol::TProtocol* iprot);

};

class HmacClient : virtual public HmacIf {
 public:
  HmacClient(std::shared_ptr< ::apache::thrift::protocol::TProtocol> prot) {
    setProtocol(prot);
  }
  HmacClient(std::shared_ptr< ::apache::thrift::protocol::TProtocol> iprot, std::shared_ptr< ::apache::thrift::protocol::TProtocol> oprot) {
    setProtocol(iprot,oprot);
  }
 private:
  void setProtocol(std::shared_ptr< ::apache::thrift::protocol::TProtocol> prot) {
  setProtocol(prot,prot);
  }
  void setProtocol(std::shared_ptr< ::apache::thrift::protocol::TProtocol> iprot, std::shared_ptr< ::apache::thrift::protocol::TProtocol> oprot) {
    piprot_=iprot;
    poprot_=oprot;
    iprot_ = iprot.get();
    oprot_ = oprot.get();
  }
 public:
  std::shared_ptr< ::apache::thrift::protocol::TProtocol> getInputProtocol() {
    return piprot_;
  }
  std::shared_ptr< ::apache::thrift::protocol::TProtocol> getOutputProtocol() {
    return poprot_;
  }
  void sign(std::string& _return, const std::string& zone, const std::string& plain) override;
  void send_sign(const std::string& zone, const std::string& plain);
  void recv_sign(std::string& _return);
  void verify(const std::string& zone, const std::string& code, const std::string& plain) override;
  void send_verify(const std::string& zone, const std::string& code, const std::string& plain);
  void recv_verify();
 protected:
  std::shared_ptr< ::apache::thrift::protocol::TProtocol> piprot_;
  std::shared_ptr< ::apache::thrift::protocol::TProtocol> poprot_;
  ::apache::thrift::protocol::TProtocol* iprot_;
  ::apache::thrift::protocol::TProtocol* oprot_;
};

class HmacProcessor : public ::apache::thrift::TDispatchProcessor {
 protected:
  ::std::shared_ptr<HmacIf> iface_;
  virtual bool dispatchCall(::apache::thrift::protocol::TProtocol* iprot, ::apache::thrift::protocol::TProtocol* oprot, const std::string& fname, int32_t seqid, void* callContext) override;
 private:
  typedef  void (HmacProcessor::*ProcessFunction)(int32_t, ::apache::thrift::protocol::TProtocol*, ::apache::thrift::protocol::TProtocol*, void*);
  typedef std::map<std::string, ProcessFunction> ProcessMap;
  ProcessMap processMap_;
  void process_sign(int32_t seqid, ::apache::thrift::protocol::TProtocol* iprot, ::apache::thrift::protocol::TProtocol* oprot, void* callContext);
  void process_verify(int32_t seqid, ::apache::thrift::protocol::TProtocol* iprot, ::apache::thrift::protocol::TProtocol* oprot, void* callContext);
 public:
  HmacProcessor(::std::shared_ptr<HmacIf> iface) :
    iface_(iface) {
    processMap_["sign"] = &HmacProcessor::process_sign;
    processMap_["verify"] = &HmacProcessor::process_verify;
  }

  virtual ~HmacProcessor() {}
};

class HmacProcessorFactory : public ::apache::thrift::TProcessorFactory {
 public:
  HmacProcessorFactory(const ::std::shared_ptr< HmacIfFactory >& handlerFactory) noexcept :
      handlerFactory_(handlerFactory) {}

  ::std::shared_ptr< ::apache::thrift::TProcessor > getProcessor(const ::apache::thrift::TConnectionInfo& connInfo) override;

 protected:
  ::std::shared_ptr< HmacIfFactory > handlerFactory_;
};

class HmacMultiface : virtual public HmacIf {
 public:
  HmacMultiface(std::vector<std::shared_ptr<HmacIf> >& ifaces) : ifaces_(ifaces) {
  }
  virtual ~HmacMultiface() {}
 protected:
  std::vector<std::shared_ptr<HmacIf> > ifaces_;
  HmacMultiface() {}
  void add(::std::shared_ptr<HmacIf> iface) {
    ifaces_.push_back(iface);
  }
 public:
  void sign(std::string& _return, const std::string& zone, const std::string& plain) override {
    size_t sz = ifaces_.size();
    size_t i = 0;
    for (; i < (sz - 1); ++i) {
      ifaces_[i]->sign(_return, zone, plain);
    }
    ifaces_[i]->sign(_return, zone, plain);
    return;
  }

  void verify(const std::string& zone, const std::string& code, const std::string& plain) override {
    size_t sz = ifaces_.size();
    size_t i = 0;
    for (; i < (sz - 1); ++i) {
      ifaces_[i]->verify(zone, code, plain);
    }
    ifaces_[i]->verify(zone, code, plain);
  }

};

// The 'concurrent' client is a thread safe client that correctly handles
// out of order responses.  It is slower than the regular client, so should
// only be used when you need to share a connection among multiple threads
class HmacConcurrentClient : virtual public HmacIf {
 public:
  HmacConcurrentClient(std::shared_ptr< ::apache::thrift::protocol::TProtocol> prot, std::shared_ptr< ::apache::thrift::async::TConcurrentClientSyncInfo> sync) : sync_(sync)
{
    setProtocol(prot);
  }
  HmacConcurrentClient(std::shared_ptr< ::apache::thrift::protocol::TProtocol> iprot, std::shared_ptr< ::apache::thrift::protocol::TProtocol> oprot, std::shared_ptr< ::apache::thrift::async::TConcurrentClientSyncInfo> sync) : sync_(sync)
{
    setProtocol(iprot,oprot);
  }
 private:
  void setProtocol(std::shared_ptr< ::apache::thrift::protocol::TProtocol> prot) {
  setProtocol(prot,prot);
  }
  void setProtocol(std::shared_ptr< ::apache::thrift::protocol::TProtocol> iprot, std::shared_ptr< ::apache::thrift::protocol::TProtocol> oprot) {
    piprot_=iprot;
    poprot_=oprot;
    iprot_ = iprot.get();
    oprot_ = oprot.get();
  }
 public:
  std::shared_ptr< ::apache::thrift::protocol::TProtocol> getInputProtocol() {
    return piprot_;
  }
  std::shared_ptr< ::apache::thrift::protocol::TProtocol> getOutputProtocol() {
    return poprot_;
  }
  void sign(std::string& _return, const std::string& zone, const std::string& plain) override;
  int32_t send_sign(const std::string& zone, const std::string& plain);
  void recv_sign(std::string& _return, const int32_t seqid);
  void verify(const std::string& zone, const std::string& code, const std::string& plain) override;
  int32_t send_verify(const std::string& zone, const std::string& code, const std::string& plain);
  void recv_verify(const int32_t seqid);
 protected:
  std::shared_ptr< ::apache::thrift::protocol::TProtocol> piprot_;
  std::shared_ptr< ::apache::thrift::protocol::TProtocol> poprot_;
  ::apache::thrift::protocol::TProtocol* iprot_;
  ::apache::thrift::protocol::TProtocol* oprot_;
  std::shared_ptr< ::apache::thrift::async::TConcurrentClientSyncInfo> sync_;
};

#ifdef _MSC_VER
  #pragma warning( pop )
#endif

}} // namespace

#endif
