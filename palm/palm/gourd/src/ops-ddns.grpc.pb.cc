// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: ops-ddns.proto

#include "ops-ddns.pb.h"
#include "ops-ddns.grpc.pb.h"

#include <functional>
#include <grpcpp/support/async_stream.h>
#include <grpcpp/support/async_unary_call.h>
#include <grpcpp/impl/channel_interface.h>
#include <grpcpp/impl/client_unary_call.h>
#include <grpcpp/support/client_callback.h>
#include <grpcpp/support/message_allocator.h>
#include <grpcpp/support/method_handler.h>
#include <grpcpp/impl/rpc_service_method.h>
#include <grpcpp/support/server_callback.h>
#include <grpcpp/impl/codegen/server_callback_handlers.h>
#include <grpcpp/server_context.h>
#include <grpcpp/impl/service_type.h>
#include <grpcpp/support/sync_stream.h>
namespace palm {
namespace ops {
namespace ddns {
namespace v1 {

std::unique_ptr< Vpn::Stub> Vpn::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< Vpn::Stub> stub(new Vpn::Stub(channel, options));
  return stub;
}

Vpn::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options)
  : channel_(channel){}

Vpn::Service::Service() {
}

Vpn::Service::~Service() {
}


std::unique_ptr< Metrics::Stub> Metrics::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< Metrics::Stub> stub(new Metrics::Stub(channel, options));
  return stub;
}

Metrics::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options)
  : channel_(channel){}

Metrics::Service::Service() {
}

Metrics::Service::~Service() {
}


std::unique_ptr< Mail::Stub> Mail::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< Mail::Stub> stub(new Mail::Stub(channel, options));
  return stub;
}

Mail::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options)
  : channel_(channel){}

Mail::Service::Service() {
}

Mail::Service::~Service() {
}


}  // namespace palm
}  // namespace ops
}  // namespace ddns
}  // namespace v1

