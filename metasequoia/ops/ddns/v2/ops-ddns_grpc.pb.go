// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v4.24.3
// source: ops-ddns.proto

package v2

import (
	grpc "google.golang.org/grpc"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const ()

// VpnClient is the client API for Vpn service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type VpnClient interface {
}

type vpnClient struct {
	cc grpc.ClientConnInterface
}

func NewVpnClient(cc grpc.ClientConnInterface) VpnClient {
	return &vpnClient{cc}
}

// VpnServer is the server API for Vpn service.
// All implementations must embed UnimplementedVpnServer
// for forward compatibility
type VpnServer interface {
	mustEmbedUnimplementedVpnServer()
}

// UnimplementedVpnServer must be embedded to have forward compatible implementations.
type UnimplementedVpnServer struct {
}

func (UnimplementedVpnServer) mustEmbedUnimplementedVpnServer() {}

// UnsafeVpnServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to VpnServer will
// result in compilation errors.
type UnsafeVpnServer interface {
	mustEmbedUnimplementedVpnServer()
}

func RegisterVpnServer(s grpc.ServiceRegistrar, srv VpnServer) {
	s.RegisterService(&Vpn_ServiceDesc, srv)
}

// Vpn_ServiceDesc is the grpc.ServiceDesc for Vpn service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Vpn_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "palm.ops.ddns.v1.Vpn",
	HandlerType: (*VpnServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams:     []grpc.StreamDesc{},
	Metadata:    "ops-ddns.proto",
}

const ()

// MetricsClient is the client API for Metrics service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MetricsClient interface {
}

type metricsClient struct {
	cc grpc.ClientConnInterface
}

func NewMetricsClient(cc grpc.ClientConnInterface) MetricsClient {
	return &metricsClient{cc}
}

// MetricsServer is the server API for Metrics service.
// All implementations must embed UnimplementedMetricsServer
// for forward compatibility
type MetricsServer interface {
	mustEmbedUnimplementedMetricsServer()
}

// UnimplementedMetricsServer must be embedded to have forward compatible implementations.
type UnimplementedMetricsServer struct {
}

func (UnimplementedMetricsServer) mustEmbedUnimplementedMetricsServer() {}

// UnsafeMetricsServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MetricsServer will
// result in compilation errors.
type UnsafeMetricsServer interface {
	mustEmbedUnimplementedMetricsServer()
}

func RegisterMetricsServer(s grpc.ServiceRegistrar, srv MetricsServer) {
	s.RegisterService(&Metrics_ServiceDesc, srv)
}

// Metrics_ServiceDesc is the grpc.ServiceDesc for Metrics service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Metrics_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "palm.ops.ddns.v1.Metrics",
	HandlerType: (*MetricsServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams:     []grpc.StreamDesc{},
	Metadata:    "ops-ddns.proto",
}

const ()

// MailClient is the client API for Mail service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MailClient interface {
}

type mailClient struct {
	cc grpc.ClientConnInterface
}

func NewMailClient(cc grpc.ClientConnInterface) MailClient {
	return &mailClient{cc}
}

// MailServer is the server API for Mail service.
// All implementations must embed UnimplementedMailServer
// for forward compatibility
type MailServer interface {
	mustEmbedUnimplementedMailServer()
}

// UnimplementedMailServer must be embedded to have forward compatible implementations.
type UnimplementedMailServer struct {
}

func (UnimplementedMailServer) mustEmbedUnimplementedMailServer() {}

// UnsafeMailServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MailServer will
// result in compilation errors.
type UnsafeMailServer interface {
	mustEmbedUnimplementedMailServer()
}

func RegisterMailServer(s grpc.ServiceRegistrar, srv MailServer) {
	s.RegisterService(&Mail_ServiceDesc, srv)
}

// Mail_ServiceDesc is the grpc.ServiceDesc for Mail service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Mail_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "palm.ops.ddns.v1.Mail",
	HandlerType: (*MailServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams:     []grpc.StreamDesc{},
	Metadata:    "ops-ddns.proto",
}
