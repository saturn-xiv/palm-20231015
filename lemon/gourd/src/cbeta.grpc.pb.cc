// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: cbeta.proto

#include "cbeta.pb.h"
#include "cbeta.grpc.pb.h"

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
#include <grpcpp/impl/server_callback_handlers.h>
#include <grpcpp/server_context.h>
#include <grpcpp/impl/service_type.h>
#include <grpcpp/support/sync_stream.h>
namespace palm {
namespace cbeta {
namespace v1 {

std::unique_ptr< Section::Stub> Section::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< Section::Stub> stub(new Section::Stub(channel, options));
  return stub;
}

Section::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options)
  : channel_(channel){}

Section::Service::Service() {
}

Section::Service::~Service() {
}


std::unique_ptr< Book::Stub> Book::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< Book::Stub> stub(new Book::Stub(channel, options));
  return stub;
}

Book::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options)
  : channel_(channel){}

Book::Service::Service() {
}

Book::Service::~Service() {
}


}  // namespace palm
}  // namespace cbeta
}  // namespace v1

