/**
 * Autogenerated by Thrift Compiler (0.18.0)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */
#ifndef Health_H
#define Health_H

#include <thrift/TDispatchProcessor.h>
#include <thrift/async/TConcurrentClientSyncInfo.h>
#include <memory>
#include "loquat_types.h"

namespace loquat { namespace v1 {

#ifdef _MSC_VER
  #pragma warning( push )
  #pragma warning (disable : 4250 ) //inheriting methods via dominance 
#endif

class HealthIf {
 public:
  virtual ~HealthIf() {}
  virtual void Check() = 0;
};

class HealthIfFactory {
 public:
  typedef HealthIf Handler;

  virtual ~HealthIfFactory() {}

  virtual HealthIf* getHandler(const ::apache::thrift::TConnectionInfo& connInfo) = 0;
  virtual void releaseHandler(HealthIf* /* handler */) = 0;
  };

class HealthIfSingletonFactory : virtual public HealthIfFactory {
 public:
  HealthIfSingletonFactory(const ::std::shared_ptr<HealthIf>& iface) : iface_(iface) {}
  virtual ~HealthIfSingletonFactory() {}

  virtual HealthIf* getHandler(const ::apache::thrift::TConnectionInfo&) override {
    return iface_.get();
  }
  virtual void releaseHandler(HealthIf* /* handler */) override {}

 protected:
  ::std::shared_ptr<HealthIf> iface_;
};

class HealthNull : virtual public HealthIf {
 public:
  virtual ~HealthNull() {}
  void Check() override {
    return;
  }
};


class Health_Check_args {
 public:

  Health_Check_args(const Health_Check_args&) noexcept;
  Health_Check_args& operator=(const Health_Check_args&) noexcept;
  Health_Check_args() noexcept {
  }

  virtual ~Health_Check_args() noexcept;

  bool operator == (const Health_Check_args & /* rhs */) const
  {
    return true;
  }
  bool operator != (const Health_Check_args &rhs) const {
    return !(*this == rhs);
  }

  bool operator < (const Health_Check_args & ) const;

  uint32_t read(::apache::thrift::protocol::TProtocol* iprot);
  uint32_t write(::apache::thrift::protocol::TProtocol* oprot) const;

};


class Health_Check_pargs {
 public:


  virtual ~Health_Check_pargs() noexcept;

  uint32_t write(::apache::thrift::protocol::TProtocol* oprot) const;

};


class Health_Check_result {
 public:

  Health_Check_result(const Health_Check_result&) noexcept;
  Health_Check_result& operator=(const Health_Check_result&) noexcept;
  Health_Check_result() noexcept {
  }

  virtual ~Health_Check_result() noexcept;

  bool operator == (const Health_Check_result & /* rhs */) const
  {
    return true;
  }
  bool operator != (const Health_Check_result &rhs) const {
    return !(*this == rhs);
  }

  bool operator < (const Health_Check_result & ) const;

  uint32_t read(::apache::thrift::protocol::TProtocol* iprot);
  uint32_t write(::apache::thrift::protocol::TProtocol* oprot) const;

};


class Health_Check_presult {
 public:


  virtual ~Health_Check_presult() noexcept;

  uint32_t read(::apache::thrift::protocol::TProtocol* iprot);

};

class HealthClient : virtual public HealthIf {
 public:
  HealthClient(std::shared_ptr< ::apache::thrift::protocol::TProtocol> prot) {
    setProtocol(prot);
  }
  HealthClient(std::shared_ptr< ::apache::thrift::protocol::TProtocol> iprot, std::shared_ptr< ::apache::thrift::protocol::TProtocol> oprot) {
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
  void Check() override;
  void send_Check();
  void recv_Check();
 protected:
  std::shared_ptr< ::apache::thrift::protocol::TProtocol> piprot_;
  std::shared_ptr< ::apache::thrift::protocol::TProtocol> poprot_;
  ::apache::thrift::protocol::TProtocol* iprot_;
  ::apache::thrift::protocol::TProtocol* oprot_;
};

class HealthProcessor : public ::apache::thrift::TDispatchProcessor {
 protected:
  ::std::shared_ptr<HealthIf> iface_;
  virtual bool dispatchCall(::apache::thrift::protocol::TProtocol* iprot, ::apache::thrift::protocol::TProtocol* oprot, const std::string& fname, int32_t seqid, void* callContext) override;
 private:
  typedef  void (HealthProcessor::*ProcessFunction)(int32_t, ::apache::thrift::protocol::TProtocol*, ::apache::thrift::protocol::TProtocol*, void*);
  typedef std::map<std::string, ProcessFunction> ProcessMap;
  ProcessMap processMap_;
  void process_Check(int32_t seqid, ::apache::thrift::protocol::TProtocol* iprot, ::apache::thrift::protocol::TProtocol* oprot, void* callContext);
 public:
  HealthProcessor(::std::shared_ptr<HealthIf> iface) :
    iface_(iface) {
    processMap_["Check"] = &HealthProcessor::process_Check;
  }

  virtual ~HealthProcessor() {}
};

class HealthProcessorFactory : public ::apache::thrift::TProcessorFactory {
 public:
  HealthProcessorFactory(const ::std::shared_ptr< HealthIfFactory >& handlerFactory) noexcept :
      handlerFactory_(handlerFactory) {}

  ::std::shared_ptr< ::apache::thrift::TProcessor > getProcessor(const ::apache::thrift::TConnectionInfo& connInfo) override;

 protected:
  ::std::shared_ptr< HealthIfFactory > handlerFactory_;
};

class HealthMultiface : virtual public HealthIf {
 public:
  HealthMultiface(std::vector<std::shared_ptr<HealthIf> >& ifaces) : ifaces_(ifaces) {
  }
  virtual ~HealthMultiface() {}
 protected:
  std::vector<std::shared_ptr<HealthIf> > ifaces_;
  HealthMultiface() {}
  void add(::std::shared_ptr<HealthIf> iface) {
    ifaces_.push_back(iface);
  }
 public:
  void Check() override {
    size_t sz = ifaces_.size();
    size_t i = 0;
    for (; i < (sz - 1); ++i) {
      ifaces_[i]->Check();
    }
    ifaces_[i]->Check();
  }

};

// The 'concurrent' client is a thread safe client that correctly handles
// out of order responses.  It is slower than the regular client, so should
// only be used when you need to share a connection among multiple threads
class HealthConcurrentClient : virtual public HealthIf {
 public:
  HealthConcurrentClient(std::shared_ptr< ::apache::thrift::protocol::TProtocol> prot, std::shared_ptr< ::apache::thrift::async::TConcurrentClientSyncInfo> sync) : sync_(sync)
{
    setProtocol(prot);
  }
  HealthConcurrentClient(std::shared_ptr< ::apache::thrift::protocol::TProtocol> iprot, std::shared_ptr< ::apache::thrift::protocol::TProtocol> oprot, std::shared_ptr< ::apache::thrift::async::TConcurrentClientSyncInfo> sync) : sync_(sync)
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
  void Check() override;
  int32_t send_Check();
  void recv_Check(const int32_t seqid);
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
