/**
 * Autogenerated by Thrift Compiler (0.18.1)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */
#ifndef Jwt_H
#define Jwt_H

#include <thrift/TDispatchProcessor.h>
#include <thrift/async/TConcurrentClientSyncInfo.h>
#include <memory>
#include "loquat_types.h"

namespace loquat { namespace v1 {

#ifdef _MSC_VER
  #pragma warning( push )
  #pragma warning (disable : 4250 ) //inheriting methods via dominance 
#endif

class JwtIf {
 public:
  virtual ~JwtIf() {}
  virtual void sign(std::string& _return, const std::string& auth, const std::string& subject, const std::string& audience, const int64_t ttl) = 0;
  virtual void verify(std::string& _return, const std::string& auth, const std::string& token, const std::string& audience) = 0;
};

class JwtIfFactory {
 public:
  typedef JwtIf Handler;

  virtual ~JwtIfFactory() {}

  virtual JwtIf* getHandler(const ::apache::thrift::TConnectionInfo& connInfo) = 0;
  virtual void releaseHandler(JwtIf* /* handler */) = 0;
  };

class JwtIfSingletonFactory : virtual public JwtIfFactory {
 public:
  JwtIfSingletonFactory(const ::std::shared_ptr<JwtIf>& iface) : iface_(iface) {}
  virtual ~JwtIfSingletonFactory() {}

  virtual JwtIf* getHandler(const ::apache::thrift::TConnectionInfo&) override {
    return iface_.get();
  }
  virtual void releaseHandler(JwtIf* /* handler */) override {}

 protected:
  ::std::shared_ptr<JwtIf> iface_;
};

class JwtNull : virtual public JwtIf {
 public:
  virtual ~JwtNull() {}
  void sign(std::string& /* _return */, const std::string& /* auth */, const std::string& /* subject */, const std::string& /* audience */, const int64_t /* ttl */) override {
    return;
  }
  void verify(std::string& /* _return */, const std::string& /* auth */, const std::string& /* token */, const std::string& /* audience */) override {
    return;
  }
};

typedef struct _Jwt_sign_args__isset {
  _Jwt_sign_args__isset() : auth(false), subject(false), audience(false), ttl(false) {}
  bool auth :1;
  bool subject :1;
  bool audience :1;
  bool ttl :1;
} _Jwt_sign_args__isset;

class Jwt_sign_args {
 public:

  Jwt_sign_args(const Jwt_sign_args&);
  Jwt_sign_args& operator=(const Jwt_sign_args&);
  Jwt_sign_args() noexcept
                : auth(),
                  subject(),
                  audience(),
                  ttl(0) {
  }

  virtual ~Jwt_sign_args() noexcept;
  std::string auth;
  std::string subject;
  std::string audience;
  int64_t ttl;

  _Jwt_sign_args__isset __isset;

  void __set_auth(const std::string& val);

  void __set_subject(const std::string& val);

  void __set_audience(const std::string& val);

  void __set_ttl(const int64_t val);

  bool operator == (const Jwt_sign_args & rhs) const
  {
    if (!(auth == rhs.auth))
      return false;
    if (!(subject == rhs.subject))
      return false;
    if (!(audience == rhs.audience))
      return false;
    if (!(ttl == rhs.ttl))
      return false;
    return true;
  }
  bool operator != (const Jwt_sign_args &rhs) const {
    return !(*this == rhs);
  }

  bool operator < (const Jwt_sign_args & ) const;

  uint32_t read(::apache::thrift::protocol::TProtocol* iprot);
  uint32_t write(::apache::thrift::protocol::TProtocol* oprot) const;

};


class Jwt_sign_pargs {
 public:


  virtual ~Jwt_sign_pargs() noexcept;
  const std::string* auth;
  const std::string* subject;
  const std::string* audience;
  const int64_t* ttl;

  uint32_t write(::apache::thrift::protocol::TProtocol* oprot) const;

};

typedef struct _Jwt_sign_result__isset {
  _Jwt_sign_result__isset() : success(false) {}
  bool success :1;
} _Jwt_sign_result__isset;

class Jwt_sign_result {
 public:

  Jwt_sign_result(const Jwt_sign_result&);
  Jwt_sign_result& operator=(const Jwt_sign_result&);
  Jwt_sign_result() noexcept
                  : success() {
  }

  virtual ~Jwt_sign_result() noexcept;
  std::string success;

  _Jwt_sign_result__isset __isset;

  void __set_success(const std::string& val);

  bool operator == (const Jwt_sign_result & rhs) const
  {
    if (!(success == rhs.success))
      return false;
    return true;
  }
  bool operator != (const Jwt_sign_result &rhs) const {
    return !(*this == rhs);
  }

  bool operator < (const Jwt_sign_result & ) const;

  uint32_t read(::apache::thrift::protocol::TProtocol* iprot);
  uint32_t write(::apache::thrift::protocol::TProtocol* oprot) const;

};

typedef struct _Jwt_sign_presult__isset {
  _Jwt_sign_presult__isset() : success(false) {}
  bool success :1;
} _Jwt_sign_presult__isset;

class Jwt_sign_presult {
 public:


  virtual ~Jwt_sign_presult() noexcept;
  std::string* success;

  _Jwt_sign_presult__isset __isset;

  uint32_t read(::apache::thrift::protocol::TProtocol* iprot);

};

typedef struct _Jwt_verify_args__isset {
  _Jwt_verify_args__isset() : auth(false), token(false), audience(false) {}
  bool auth :1;
  bool token :1;
  bool audience :1;
} _Jwt_verify_args__isset;

class Jwt_verify_args {
 public:

  Jwt_verify_args(const Jwt_verify_args&);
  Jwt_verify_args& operator=(const Jwt_verify_args&);
  Jwt_verify_args() noexcept
                  : auth(),
                    token(),
                    audience() {
  }

  virtual ~Jwt_verify_args() noexcept;
  std::string auth;
  std::string token;
  std::string audience;

  _Jwt_verify_args__isset __isset;

  void __set_auth(const std::string& val);

  void __set_token(const std::string& val);

  void __set_audience(const std::string& val);

  bool operator == (const Jwt_verify_args & rhs) const
  {
    if (!(auth == rhs.auth))
      return false;
    if (!(token == rhs.token))
      return false;
    if (!(audience == rhs.audience))
      return false;
    return true;
  }
  bool operator != (const Jwt_verify_args &rhs) const {
    return !(*this == rhs);
  }

  bool operator < (const Jwt_verify_args & ) const;

  uint32_t read(::apache::thrift::protocol::TProtocol* iprot);
  uint32_t write(::apache::thrift::protocol::TProtocol* oprot) const;

};


class Jwt_verify_pargs {
 public:


  virtual ~Jwt_verify_pargs() noexcept;
  const std::string* auth;
  const std::string* token;
  const std::string* audience;

  uint32_t write(::apache::thrift::protocol::TProtocol* oprot) const;

};

typedef struct _Jwt_verify_result__isset {
  _Jwt_verify_result__isset() : success(false) {}
  bool success :1;
} _Jwt_verify_result__isset;

class Jwt_verify_result {
 public:

  Jwt_verify_result(const Jwt_verify_result&);
  Jwt_verify_result& operator=(const Jwt_verify_result&);
  Jwt_verify_result() noexcept
                    : success() {
  }

  virtual ~Jwt_verify_result() noexcept;
  std::string success;

  _Jwt_verify_result__isset __isset;

  void __set_success(const std::string& val);

  bool operator == (const Jwt_verify_result & rhs) const
  {
    if (!(success == rhs.success))
      return false;
    return true;
  }
  bool operator != (const Jwt_verify_result &rhs) const {
    return !(*this == rhs);
  }

  bool operator < (const Jwt_verify_result & ) const;

  uint32_t read(::apache::thrift::protocol::TProtocol* iprot);
  uint32_t write(::apache::thrift::protocol::TProtocol* oprot) const;

};

typedef struct _Jwt_verify_presult__isset {
  _Jwt_verify_presult__isset() : success(false) {}
  bool success :1;
} _Jwt_verify_presult__isset;

class Jwt_verify_presult {
 public:


  virtual ~Jwt_verify_presult() noexcept;
  std::string* success;

  _Jwt_verify_presult__isset __isset;

  uint32_t read(::apache::thrift::protocol::TProtocol* iprot);

};

class JwtClient : virtual public JwtIf {
 public:
  JwtClient(std::shared_ptr< ::apache::thrift::protocol::TProtocol> prot) {
    setProtocol(prot);
  }
  JwtClient(std::shared_ptr< ::apache::thrift::protocol::TProtocol> iprot, std::shared_ptr< ::apache::thrift::protocol::TProtocol> oprot) {
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
  void sign(std::string& _return, const std::string& auth, const std::string& subject, const std::string& audience, const int64_t ttl) override;
  void send_sign(const std::string& auth, const std::string& subject, const std::string& audience, const int64_t ttl);
  void recv_sign(std::string& _return);
  void verify(std::string& _return, const std::string& auth, const std::string& token, const std::string& audience) override;
  void send_verify(const std::string& auth, const std::string& token, const std::string& audience);
  void recv_verify(std::string& _return);
 protected:
  std::shared_ptr< ::apache::thrift::protocol::TProtocol> piprot_;
  std::shared_ptr< ::apache::thrift::protocol::TProtocol> poprot_;
  ::apache::thrift::protocol::TProtocol* iprot_;
  ::apache::thrift::protocol::TProtocol* oprot_;
};

class JwtProcessor : public ::apache::thrift::TDispatchProcessor {
 protected:
  ::std::shared_ptr<JwtIf> iface_;
  virtual bool dispatchCall(::apache::thrift::protocol::TProtocol* iprot, ::apache::thrift::protocol::TProtocol* oprot, const std::string& fname, int32_t seqid, void* callContext) override;
 private:
  typedef  void (JwtProcessor::*ProcessFunction)(int32_t, ::apache::thrift::protocol::TProtocol*, ::apache::thrift::protocol::TProtocol*, void*);
  typedef std::map<std::string, ProcessFunction> ProcessMap;
  ProcessMap processMap_;
  void process_sign(int32_t seqid, ::apache::thrift::protocol::TProtocol* iprot, ::apache::thrift::protocol::TProtocol* oprot, void* callContext);
  void process_verify(int32_t seqid, ::apache::thrift::protocol::TProtocol* iprot, ::apache::thrift::protocol::TProtocol* oprot, void* callContext);
 public:
  JwtProcessor(::std::shared_ptr<JwtIf> iface) :
    iface_(iface) {
    processMap_["sign"] = &JwtProcessor::process_sign;
    processMap_["verify"] = &JwtProcessor::process_verify;
  }

  virtual ~JwtProcessor() {}
};

class JwtProcessorFactory : public ::apache::thrift::TProcessorFactory {
 public:
  JwtProcessorFactory(const ::std::shared_ptr< JwtIfFactory >& handlerFactory) noexcept :
      handlerFactory_(handlerFactory) {}

  ::std::shared_ptr< ::apache::thrift::TProcessor > getProcessor(const ::apache::thrift::TConnectionInfo& connInfo) override;

 protected:
  ::std::shared_ptr< JwtIfFactory > handlerFactory_;
};

class JwtMultiface : virtual public JwtIf {
 public:
  JwtMultiface(std::vector<std::shared_ptr<JwtIf> >& ifaces) : ifaces_(ifaces) {
  }
  virtual ~JwtMultiface() {}
 protected:
  std::vector<std::shared_ptr<JwtIf> > ifaces_;
  JwtMultiface() {}
  void add(::std::shared_ptr<JwtIf> iface) {
    ifaces_.push_back(iface);
  }
 public:
  void sign(std::string& _return, const std::string& auth, const std::string& subject, const std::string& audience, const int64_t ttl) override {
    size_t sz = ifaces_.size();
    size_t i = 0;
    for (; i < (sz - 1); ++i) {
      ifaces_[i]->sign(_return, auth, subject, audience, ttl);
    }
    ifaces_[i]->sign(_return, auth, subject, audience, ttl);
    return;
  }

  void verify(std::string& _return, const std::string& auth, const std::string& token, const std::string& audience) override {
    size_t sz = ifaces_.size();
    size_t i = 0;
    for (; i < (sz - 1); ++i) {
      ifaces_[i]->verify(_return, auth, token, audience);
    }
    ifaces_[i]->verify(_return, auth, token, audience);
    return;
  }

};

// The 'concurrent' client is a thread safe client that correctly handles
// out of order responses.  It is slower than the regular client, so should
// only be used when you need to share a connection among multiple threads
class JwtConcurrentClient : virtual public JwtIf {
 public:
  JwtConcurrentClient(std::shared_ptr< ::apache::thrift::protocol::TProtocol> prot, std::shared_ptr< ::apache::thrift::async::TConcurrentClientSyncInfo> sync) : sync_(sync)
{
    setProtocol(prot);
  }
  JwtConcurrentClient(std::shared_ptr< ::apache::thrift::protocol::TProtocol> iprot, std::shared_ptr< ::apache::thrift::protocol::TProtocol> oprot, std::shared_ptr< ::apache::thrift::async::TConcurrentClientSyncInfo> sync) : sync_(sync)
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
  void sign(std::string& _return, const std::string& auth, const std::string& subject, const std::string& audience, const int64_t ttl) override;
  int32_t send_sign(const std::string& auth, const std::string& subject, const std::string& audience, const int64_t ttl);
  void recv_sign(std::string& _return, const int32_t seqid);
  void verify(std::string& _return, const std::string& auth, const std::string& token, const std::string& audience) override;
  int32_t send_verify(const std::string& auth, const std::string& token, const std::string& audience);
  void recv_verify(std::string& _return, const int32_t seqid);
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
