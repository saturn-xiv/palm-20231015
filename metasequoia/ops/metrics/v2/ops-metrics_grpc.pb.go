// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v4.24.3
// source: ops-metrics.proto

package v2

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	Report_Heartbeat_FullMethodName = "/palm.ops.metrics.v1.Report/Heartbeat"
	Report_Journal_FullMethodName   = "/palm.ops.metrics.v1.Report/Journal"
	Report_Nginx_FullMethodName     = "/palm.ops.metrics.v1.Report/Nginx"
)

// ReportClient is the client API for Report service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ReportClient interface {
	Heartbeat(ctx context.Context, in *ReportHeartbeatRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	Journal(ctx context.Context, in *ReportJournalRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	Nginx(ctx context.Context, in *ReportNginxRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
}

type reportClient struct {
	cc grpc.ClientConnInterface
}

func NewReportClient(cc grpc.ClientConnInterface) ReportClient {
	return &reportClient{cc}
}

func (c *reportClient) Heartbeat(ctx context.Context, in *ReportHeartbeatRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Report_Heartbeat_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *reportClient) Journal(ctx context.Context, in *ReportJournalRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Report_Journal_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *reportClient) Nginx(ctx context.Context, in *ReportNginxRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Report_Nginx_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ReportServer is the server API for Report service.
// All implementations must embed UnimplementedReportServer
// for forward compatibility
type ReportServer interface {
	Heartbeat(context.Context, *ReportHeartbeatRequest) (*emptypb.Empty, error)
	Journal(context.Context, *ReportJournalRequest) (*emptypb.Empty, error)
	Nginx(context.Context, *ReportNginxRequest) (*emptypb.Empty, error)
	mustEmbedUnimplementedReportServer()
}

// UnimplementedReportServer must be embedded to have forward compatible implementations.
type UnimplementedReportServer struct {
}

func (UnimplementedReportServer) Heartbeat(context.Context, *ReportHeartbeatRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Heartbeat not implemented")
}
func (UnimplementedReportServer) Journal(context.Context, *ReportJournalRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Journal not implemented")
}
func (UnimplementedReportServer) Nginx(context.Context, *ReportNginxRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Nginx not implemented")
}
func (UnimplementedReportServer) mustEmbedUnimplementedReportServer() {}

// UnsafeReportServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ReportServer will
// result in compilation errors.
type UnsafeReportServer interface {
	mustEmbedUnimplementedReportServer()
}

func RegisterReportServer(s grpc.ServiceRegistrar, srv ReportServer) {
	s.RegisterService(&Report_ServiceDesc, srv)
}

func _Report_Heartbeat_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReportHeartbeatRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReportServer).Heartbeat(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Report_Heartbeat_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReportServer).Heartbeat(ctx, req.(*ReportHeartbeatRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Report_Journal_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReportJournalRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReportServer).Journal(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Report_Journal_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReportServer).Journal(ctx, req.(*ReportJournalRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Report_Nginx_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReportNginxRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReportServer).Nginx(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Report_Nginx_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReportServer).Nginx(ctx, req.(*ReportNginxRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Report_ServiceDesc is the grpc.ServiceDesc for Report service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Report_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "palm.ops.metrics.v1.Report",
	HandlerType: (*ReportServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Heartbeat",
			Handler:    _Report_Heartbeat_Handler,
		},
		{
			MethodName: "Journal",
			Handler:    _Report_Journal_Handler,
		},
		{
			MethodName: "Nginx",
			Handler:    _Report_Nginx_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ops-metrics.proto",
}
