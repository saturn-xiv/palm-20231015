// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: lily.proto

#include "lily.pb.h"
#include "lily.grpc.pb.h"

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
namespace lily {
namespace v1 {

static const char* Excel_method_names[] = {
  "/palm.lily.v1.Excel/Parse",
  "/palm.lily.v1.Excel/Generate",
};

std::unique_ptr< Excel::Stub> Excel::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< Excel::Stub> stub(new Excel::Stub(channel, options));
  return stub;
}

Excel::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options)
  : channel_(channel), rpcmethod_Parse_(Excel_method_names[0], options.suffix_for_stats(),::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_Generate_(Excel_method_names[1], options.suffix_for_stats(),::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status Excel::Stub::Parse(::grpc::ClientContext* context, const ::palm::lily::v1::S3File& request, ::palm::lily::v1::ExcelModel* response) {
  return ::grpc::internal::BlockingUnaryCall< ::palm::lily::v1::S3File, ::palm::lily::v1::ExcelModel, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(channel_.get(), rpcmethod_Parse_, context, request, response);
}

void Excel::Stub::async::Parse(::grpc::ClientContext* context, const ::palm::lily::v1::S3File* request, ::palm::lily::v1::ExcelModel* response, std::function<void(::grpc::Status)> f) {
  ::grpc::internal::CallbackUnaryCall< ::palm::lily::v1::S3File, ::palm::lily::v1::ExcelModel, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(stub_->channel_.get(), stub_->rpcmethod_Parse_, context, request, response, std::move(f));
}

void Excel::Stub::async::Parse(::grpc::ClientContext* context, const ::palm::lily::v1::S3File* request, ::palm::lily::v1::ExcelModel* response, ::grpc::ClientUnaryReactor* reactor) {
  ::grpc::internal::ClientCallbackUnaryFactory::Create< ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(stub_->channel_.get(), stub_->rpcmethod_Parse_, context, request, response, reactor);
}

::grpc::ClientAsyncResponseReader< ::palm::lily::v1::ExcelModel>* Excel::Stub::PrepareAsyncParseRaw(::grpc::ClientContext* context, const ::palm::lily::v1::S3File& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderHelper::Create< ::palm::lily::v1::ExcelModel, ::palm::lily::v1::S3File, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(channel_.get(), cq, rpcmethod_Parse_, context, request);
}

::grpc::ClientAsyncResponseReader< ::palm::lily::v1::ExcelModel>* Excel::Stub::AsyncParseRaw(::grpc::ClientContext* context, const ::palm::lily::v1::S3File& request, ::grpc::CompletionQueue* cq) {
  auto* result =
    this->PrepareAsyncParseRaw(context, request, cq);
  result->StartCall();
  return result;
}

::grpc::Status Excel::Stub::Generate(::grpc::ClientContext* context, const ::palm::lily::v1::ExcelModel& request, ::palm::lily::v1::S3File* response) {
  return ::grpc::internal::BlockingUnaryCall< ::palm::lily::v1::ExcelModel, ::palm::lily::v1::S3File, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(channel_.get(), rpcmethod_Generate_, context, request, response);
}

void Excel::Stub::async::Generate(::grpc::ClientContext* context, const ::palm::lily::v1::ExcelModel* request, ::palm::lily::v1::S3File* response, std::function<void(::grpc::Status)> f) {
  ::grpc::internal::CallbackUnaryCall< ::palm::lily::v1::ExcelModel, ::palm::lily::v1::S3File, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(stub_->channel_.get(), stub_->rpcmethod_Generate_, context, request, response, std::move(f));
}

void Excel::Stub::async::Generate(::grpc::ClientContext* context, const ::palm::lily::v1::ExcelModel* request, ::palm::lily::v1::S3File* response, ::grpc::ClientUnaryReactor* reactor) {
  ::grpc::internal::ClientCallbackUnaryFactory::Create< ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(stub_->channel_.get(), stub_->rpcmethod_Generate_, context, request, response, reactor);
}

::grpc::ClientAsyncResponseReader< ::palm::lily::v1::S3File>* Excel::Stub::PrepareAsyncGenerateRaw(::grpc::ClientContext* context, const ::palm::lily::v1::ExcelModel& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderHelper::Create< ::palm::lily::v1::S3File, ::palm::lily::v1::ExcelModel, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(channel_.get(), cq, rpcmethod_Generate_, context, request);
}

::grpc::ClientAsyncResponseReader< ::palm::lily::v1::S3File>* Excel::Stub::AsyncGenerateRaw(::grpc::ClientContext* context, const ::palm::lily::v1::ExcelModel& request, ::grpc::CompletionQueue* cq) {
  auto* result =
    this->PrepareAsyncGenerateRaw(context, request, cq);
  result->StartCall();
  return result;
}

Excel::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      Excel_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< Excel::Service, ::palm::lily::v1::S3File, ::palm::lily::v1::ExcelModel, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(
          [](Excel::Service* service,
             ::grpc::ServerContext* ctx,
             const ::palm::lily::v1::S3File* req,
             ::palm::lily::v1::ExcelModel* resp) {
               return service->Parse(ctx, req, resp);
             }, this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      Excel_method_names[1],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< Excel::Service, ::palm::lily::v1::ExcelModel, ::palm::lily::v1::S3File, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(
          [](Excel::Service* service,
             ::grpc::ServerContext* ctx,
             const ::palm::lily::v1::ExcelModel* req,
             ::palm::lily::v1::S3File* resp) {
               return service->Generate(ctx, req, resp);
             }, this)));
}

Excel::Service::~Service() {
}

::grpc::Status Excel::Service::Parse(::grpc::ServerContext* context, const ::palm::lily::v1::S3File* request, ::palm::lily::v1::ExcelModel* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status Excel::Service::Generate(::grpc::ServerContext* context, const ::palm::lily::v1::ExcelModel* request, ::palm::lily::v1::S3File* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


static const char* S3_method_names[] = {
  "/palm.lily.v1.S3/FileStatus",
};

std::unique_ptr< S3::Stub> S3::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< S3::Stub> stub(new S3::Stub(channel, options));
  return stub;
}

S3::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options)
  : channel_(channel), rpcmethod_FileStatus_(S3_method_names[0], options.suffix_for_stats(),::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status S3::Stub::FileStatus(::grpc::ClientContext* context, const ::palm::lily::v1::S3FileStatusRequest& request, ::palm::lily::v1::S3FileStatusResponse* response) {
  return ::grpc::internal::BlockingUnaryCall< ::palm::lily::v1::S3FileStatusRequest, ::palm::lily::v1::S3FileStatusResponse, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(channel_.get(), rpcmethod_FileStatus_, context, request, response);
}

void S3::Stub::async::FileStatus(::grpc::ClientContext* context, const ::palm::lily::v1::S3FileStatusRequest* request, ::palm::lily::v1::S3FileStatusResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc::internal::CallbackUnaryCall< ::palm::lily::v1::S3FileStatusRequest, ::palm::lily::v1::S3FileStatusResponse, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(stub_->channel_.get(), stub_->rpcmethod_FileStatus_, context, request, response, std::move(f));
}

void S3::Stub::async::FileStatus(::grpc::ClientContext* context, const ::palm::lily::v1::S3FileStatusRequest* request, ::palm::lily::v1::S3FileStatusResponse* response, ::grpc::ClientUnaryReactor* reactor) {
  ::grpc::internal::ClientCallbackUnaryFactory::Create< ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(stub_->channel_.get(), stub_->rpcmethod_FileStatus_, context, request, response, reactor);
}

::grpc::ClientAsyncResponseReader< ::palm::lily::v1::S3FileStatusResponse>* S3::Stub::PrepareAsyncFileStatusRaw(::grpc::ClientContext* context, const ::palm::lily::v1::S3FileStatusRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderHelper::Create< ::palm::lily::v1::S3FileStatusResponse, ::palm::lily::v1::S3FileStatusRequest, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(channel_.get(), cq, rpcmethod_FileStatus_, context, request);
}

::grpc::ClientAsyncResponseReader< ::palm::lily::v1::S3FileStatusResponse>* S3::Stub::AsyncFileStatusRaw(::grpc::ClientContext* context, const ::palm::lily::v1::S3FileStatusRequest& request, ::grpc::CompletionQueue* cq) {
  auto* result =
    this->PrepareAsyncFileStatusRaw(context, request, cq);
  result->StartCall();
  return result;
}

S3::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      S3_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< S3::Service, ::palm::lily::v1::S3FileStatusRequest, ::palm::lily::v1::S3FileStatusResponse, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(
          [](S3::Service* service,
             ::grpc::ServerContext* ctx,
             const ::palm::lily::v1::S3FileStatusRequest* req,
             ::palm::lily::v1::S3FileStatusResponse* resp) {
               return service->FileStatus(ctx, req, resp);
             }, this)));
}

S3::Service::~Service() {
}

::grpc::Status S3::Service::FileStatus(::grpc::ServerContext* context, const ::palm::lily::v1::S3FileStatusRequest* request, ::palm::lily::v1::S3FileStatusResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


static const char* Tex_method_names[] = {
  "/palm.lily.v1.Tex/ToPdf",
  "/palm.lily.v1.Tex/ToWord",
};

std::unique_ptr< Tex::Stub> Tex::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< Tex::Stub> stub(new Tex::Stub(channel, options));
  return stub;
}

Tex::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options)
  : channel_(channel), rpcmethod_ToPdf_(Tex_method_names[0], options.suffix_for_stats(),::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_ToWord_(Tex_method_names[1], options.suffix_for_stats(),::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status Tex::Stub::ToPdf(::grpc::ClientContext* context, const ::palm::lily::v1::TexToRequest& request, ::palm::lily::v1::S3File* response) {
  return ::grpc::internal::BlockingUnaryCall< ::palm::lily::v1::TexToRequest, ::palm::lily::v1::S3File, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(channel_.get(), rpcmethod_ToPdf_, context, request, response);
}

void Tex::Stub::async::ToPdf(::grpc::ClientContext* context, const ::palm::lily::v1::TexToRequest* request, ::palm::lily::v1::S3File* response, std::function<void(::grpc::Status)> f) {
  ::grpc::internal::CallbackUnaryCall< ::palm::lily::v1::TexToRequest, ::palm::lily::v1::S3File, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(stub_->channel_.get(), stub_->rpcmethod_ToPdf_, context, request, response, std::move(f));
}

void Tex::Stub::async::ToPdf(::grpc::ClientContext* context, const ::palm::lily::v1::TexToRequest* request, ::palm::lily::v1::S3File* response, ::grpc::ClientUnaryReactor* reactor) {
  ::grpc::internal::ClientCallbackUnaryFactory::Create< ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(stub_->channel_.get(), stub_->rpcmethod_ToPdf_, context, request, response, reactor);
}

::grpc::ClientAsyncResponseReader< ::palm::lily::v1::S3File>* Tex::Stub::PrepareAsyncToPdfRaw(::grpc::ClientContext* context, const ::palm::lily::v1::TexToRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderHelper::Create< ::palm::lily::v1::S3File, ::palm::lily::v1::TexToRequest, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(channel_.get(), cq, rpcmethod_ToPdf_, context, request);
}

::grpc::ClientAsyncResponseReader< ::palm::lily::v1::S3File>* Tex::Stub::AsyncToPdfRaw(::grpc::ClientContext* context, const ::palm::lily::v1::TexToRequest& request, ::grpc::CompletionQueue* cq) {
  auto* result =
    this->PrepareAsyncToPdfRaw(context, request, cq);
  result->StartCall();
  return result;
}

::grpc::Status Tex::Stub::ToWord(::grpc::ClientContext* context, const ::palm::lily::v1::TexToRequest& request, ::palm::lily::v1::S3File* response) {
  return ::grpc::internal::BlockingUnaryCall< ::palm::lily::v1::TexToRequest, ::palm::lily::v1::S3File, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(channel_.get(), rpcmethod_ToWord_, context, request, response);
}

void Tex::Stub::async::ToWord(::grpc::ClientContext* context, const ::palm::lily::v1::TexToRequest* request, ::palm::lily::v1::S3File* response, std::function<void(::grpc::Status)> f) {
  ::grpc::internal::CallbackUnaryCall< ::palm::lily::v1::TexToRequest, ::palm::lily::v1::S3File, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(stub_->channel_.get(), stub_->rpcmethod_ToWord_, context, request, response, std::move(f));
}

void Tex::Stub::async::ToWord(::grpc::ClientContext* context, const ::palm::lily::v1::TexToRequest* request, ::palm::lily::v1::S3File* response, ::grpc::ClientUnaryReactor* reactor) {
  ::grpc::internal::ClientCallbackUnaryFactory::Create< ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(stub_->channel_.get(), stub_->rpcmethod_ToWord_, context, request, response, reactor);
}

::grpc::ClientAsyncResponseReader< ::palm::lily::v1::S3File>* Tex::Stub::PrepareAsyncToWordRaw(::grpc::ClientContext* context, const ::palm::lily::v1::TexToRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderHelper::Create< ::palm::lily::v1::S3File, ::palm::lily::v1::TexToRequest, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(channel_.get(), cq, rpcmethod_ToWord_, context, request);
}

::grpc::ClientAsyncResponseReader< ::palm::lily::v1::S3File>* Tex::Stub::AsyncToWordRaw(::grpc::ClientContext* context, const ::palm::lily::v1::TexToRequest& request, ::grpc::CompletionQueue* cq) {
  auto* result =
    this->PrepareAsyncToWordRaw(context, request, cq);
  result->StartCall();
  return result;
}

Tex::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      Tex_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< Tex::Service, ::palm::lily::v1::TexToRequest, ::palm::lily::v1::S3File, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(
          [](Tex::Service* service,
             ::grpc::ServerContext* ctx,
             const ::palm::lily::v1::TexToRequest* req,
             ::palm::lily::v1::S3File* resp) {
               return service->ToPdf(ctx, req, resp);
             }, this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      Tex_method_names[1],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< Tex::Service, ::palm::lily::v1::TexToRequest, ::palm::lily::v1::S3File, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(
          [](Tex::Service* service,
             ::grpc::ServerContext* ctx,
             const ::palm::lily::v1::TexToRequest* req,
             ::palm::lily::v1::S3File* resp) {
               return service->ToWord(ctx, req, resp);
             }, this)));
}

Tex::Service::~Service() {
}

::grpc::Status Tex::Service::ToPdf(::grpc::ServerContext* context, const ::palm::lily::v1::TexToRequest* request, ::palm::lily::v1::S3File* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status Tex::Service::ToWord(::grpc::ServerContext* context, const ::palm::lily::v1::TexToRequest* request, ::palm::lily::v1::S3File* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


static const char* Epub_method_names[] = {
  "/palm.lily.v1.Epub/Build",
};

std::unique_ptr< Epub::Stub> Epub::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< Epub::Stub> stub(new Epub::Stub(channel, options));
  return stub;
}

Epub::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options)
  : channel_(channel), rpcmethod_Build_(Epub_method_names[0], options.suffix_for_stats(),::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status Epub::Stub::Build(::grpc::ClientContext* context, const ::palm::lily::v1::EpubBuildRequest& request, ::palm::lily::v1::S3File* response) {
  return ::grpc::internal::BlockingUnaryCall< ::palm::lily::v1::EpubBuildRequest, ::palm::lily::v1::S3File, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(channel_.get(), rpcmethod_Build_, context, request, response);
}

void Epub::Stub::async::Build(::grpc::ClientContext* context, const ::palm::lily::v1::EpubBuildRequest* request, ::palm::lily::v1::S3File* response, std::function<void(::grpc::Status)> f) {
  ::grpc::internal::CallbackUnaryCall< ::palm::lily::v1::EpubBuildRequest, ::palm::lily::v1::S3File, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(stub_->channel_.get(), stub_->rpcmethod_Build_, context, request, response, std::move(f));
}

void Epub::Stub::async::Build(::grpc::ClientContext* context, const ::palm::lily::v1::EpubBuildRequest* request, ::palm::lily::v1::S3File* response, ::grpc::ClientUnaryReactor* reactor) {
  ::grpc::internal::ClientCallbackUnaryFactory::Create< ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(stub_->channel_.get(), stub_->rpcmethod_Build_, context, request, response, reactor);
}

::grpc::ClientAsyncResponseReader< ::palm::lily::v1::S3File>* Epub::Stub::PrepareAsyncBuildRaw(::grpc::ClientContext* context, const ::palm::lily::v1::EpubBuildRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderHelper::Create< ::palm::lily::v1::S3File, ::palm::lily::v1::EpubBuildRequest, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(channel_.get(), cq, rpcmethod_Build_, context, request);
}

::grpc::ClientAsyncResponseReader< ::palm::lily::v1::S3File>* Epub::Stub::AsyncBuildRaw(::grpc::ClientContext* context, const ::palm::lily::v1::EpubBuildRequest& request, ::grpc::CompletionQueue* cq) {
  auto* result =
    this->PrepareAsyncBuildRaw(context, request, cq);
  result->StartCall();
  return result;
}

Epub::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      Epub_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< Epub::Service, ::palm::lily::v1::EpubBuildRequest, ::palm::lily::v1::S3File, ::grpc::protobuf::MessageLite, ::grpc::protobuf::MessageLite>(
          [](Epub::Service* service,
             ::grpc::ServerContext* ctx,
             const ::palm::lily::v1::EpubBuildRequest* req,
             ::palm::lily::v1::S3File* resp) {
               return service->Build(ctx, req, resp);
             }, this)));
}

Epub::Service::~Service() {
}

::grpc::Status Epub::Service::Build(::grpc::ServerContext* context, const ::palm::lily::v1::EpubBuildRequest* request, ::palm::lily::v1::S3File* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace palm
}  // namespace lily
}  // namespace v1

