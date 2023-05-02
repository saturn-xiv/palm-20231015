// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: auth.proto

#include "auth.pb.h"
#include "auth.grpc.pb.h"

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
namespace auth {
namespace v1 {

static const char* User_method_names[] = {
  "/palm.auth.v1.User/SignIn",
  "/palm.auth.v1.User/SignOut",
};

std::unique_ptr< User::Stub> User::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< User::Stub> stub(new User::Stub(channel, options));
  return stub;
}

User::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options)
  : channel_(channel), rpcmethod_SignIn_(User_method_names[0], options.suffix_for_stats(),::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_SignOut_(User_method_names[1], options.suffix_for_stats(),::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status User::Stub::SignIn(::grpc::ClientContext* context, const ::palm::auth::v1::UserSignInRequest& request, ::palm::auth::v1::UserSignInResponse* response) {
  return ::grpc::internal::BlockingUnaryCall< ::palm::auth::v1::UserSignInRequest, ::palm::auth::v1::UserSignInResponse, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(channel_.get(), rpcmethod_SignIn_, context, request, response);
}

void User::Stub::async::SignIn(::grpc::ClientContext* context, const ::palm::auth::v1::UserSignInRequest* request, ::palm::auth::v1::UserSignInResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc::internal::CallbackUnaryCall< ::palm::auth::v1::UserSignInRequest, ::palm::auth::v1::UserSignInResponse, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(stub_->channel_.get(), stub_->rpcmethod_SignIn_, context, request, response, std::move(f));
}

void User::Stub::async::SignIn(::grpc::ClientContext* context, const ::palm::auth::v1::UserSignInRequest* request, ::palm::auth::v1::UserSignInResponse* response, ::grpc::ClientUnaryReactor* reactor) {
  ::grpc::internal::ClientCallbackUnaryFactory::Create< ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(stub_->channel_.get(), stub_->rpcmethod_SignIn_, context, request, response, reactor);
}

::grpc::ClientAsyncResponseReader< ::palm::auth::v1::UserSignInResponse>* User::Stub::PrepareAsyncSignInRaw(::grpc::ClientContext* context, const ::palm::auth::v1::UserSignInRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderHelper::Create< ::palm::auth::v1::UserSignInResponse, ::palm::auth::v1::UserSignInRequest, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(channel_.get(), cq, rpcmethod_SignIn_, context, request);
}

::grpc::ClientAsyncResponseReader< ::palm::auth::v1::UserSignInResponse>* User::Stub::AsyncSignInRaw(::grpc::ClientContext* context, const ::palm::auth::v1::UserSignInRequest& request, ::grpc::CompletionQueue* cq) {
  auto* result =
    this->PrepareAsyncSignInRaw(context, request, cq);
  result->StartCall();
  return result;
}

::grpc::Status User::Stub::SignOut(::grpc::ClientContext* context, const ::google::protobuf::Empty& request, ::google::protobuf::Empty* response) {
  return ::grpc::internal::BlockingUnaryCall< ::google::protobuf::Empty, ::google::protobuf::Empty, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(channel_.get(), rpcmethod_SignOut_, context, request, response);
}

void User::Stub::async::SignOut(::grpc::ClientContext* context, const ::google::protobuf::Empty* request, ::google::protobuf::Empty* response, std::function<void(::grpc::Status)> f) {
  ::grpc::internal::CallbackUnaryCall< ::google::protobuf::Empty, ::google::protobuf::Empty, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(stub_->channel_.get(), stub_->rpcmethod_SignOut_, context, request, response, std::move(f));
}

void User::Stub::async::SignOut(::grpc::ClientContext* context, const ::google::protobuf::Empty* request, ::google::protobuf::Empty* response, ::grpc::ClientUnaryReactor* reactor) {
  ::grpc::internal::ClientCallbackUnaryFactory::Create< ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(stub_->channel_.get(), stub_->rpcmethod_SignOut_, context, request, response, reactor);
}

::grpc::ClientAsyncResponseReader< ::google::protobuf::Empty>* User::Stub::PrepareAsyncSignOutRaw(::grpc::ClientContext* context, const ::google::protobuf::Empty& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderHelper::Create< ::google::protobuf::Empty, ::google::protobuf::Empty, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(channel_.get(), cq, rpcmethod_SignOut_, context, request);
}

::grpc::ClientAsyncResponseReader< ::google::protobuf::Empty>* User::Stub::AsyncSignOutRaw(::grpc::ClientContext* context, const ::google::protobuf::Empty& request, ::grpc::CompletionQueue* cq) {
  auto* result =
    this->PrepareAsyncSignOutRaw(context, request, cq);
  result->StartCall();
  return result;
}

User::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      User_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< User::Service, ::palm::auth::v1::UserSignInRequest, ::palm::auth::v1::UserSignInResponse, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(
          [](User::Service* service,
             ::grpc::ServerContext* ctx,
             const ::palm::auth::v1::UserSignInRequest* req,
             ::palm::auth::v1::UserSignInResponse* resp) {
               return service->SignIn(ctx, req, resp);
             }, this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      User_method_names[1],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< User::Service, ::google::protobuf::Empty, ::google::protobuf::Empty, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(
          [](User::Service* service,
             ::grpc::ServerContext* ctx,
             const ::google::protobuf::Empty* req,
             ::google::protobuf::Empty* resp) {
               return service->SignOut(ctx, req, resp);
             }, this)));
}

User::Service::~Service() {
}

::grpc::Status User::Service::SignIn(::grpc::ServerContext* context, const ::palm::auth::v1::UserSignInRequest* request, ::palm::auth::v1::UserSignInResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status User::Service::SignOut(::grpc::ServerContext* context, const ::google::protobuf::Empty* request, ::google::protobuf::Empty* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


std::unique_ptr< WeChat::Stub> WeChat::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< WeChat::Stub> stub(new WeChat::Stub(channel, options));
  return stub;
}

WeChat::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options)
  : channel_(channel){}

WeChat::Service::Service() {
}

WeChat::Service::~Service() {
}


std::unique_ptr< Google::Stub> Google::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< Google::Stub> stub(new Google::Stub(channel, options));
  return stub;
}

Google::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options)
  : channel_(channel){}

Google::Service::Service() {
}

Google::Service::~Service() {
}


}  // namespace palm
}  // namespace auth
}  // namespace v1
