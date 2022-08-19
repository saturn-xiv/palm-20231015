// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: ops.proto

#include "ops.pb.h"
#include "ops.grpc.pb.h"

#include <functional>
#include <grpcpp/impl/codegen/async_stream.h>
#include <grpcpp/impl/codegen/async_unary_call.h>
#include <grpcpp/impl/codegen/channel_interface.h>
#include <grpcpp/impl/codegen/client_unary_call.h>
#include <grpcpp/impl/codegen/client_callback.h>
#include <grpcpp/impl/codegen/message_allocator.h>
#include <grpcpp/impl/codegen/method_handler.h>
#include <grpcpp/impl/codegen/rpc_service_method.h>
#include <grpcpp/impl/codegen/server_callback.h>
#include <grpcpp/impl/codegen/server_callback_handlers.h>
#include <grpcpp/impl/codegen/server_context.h>
#include <grpcpp/impl/codegen/service_type.h>
#include <grpcpp/impl/codegen/sync_stream.h>
namespace palm {
namespace plugins {
namespace ops {
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
}  // namespace plugins
}  // namespace ops
}  // namespace v1

