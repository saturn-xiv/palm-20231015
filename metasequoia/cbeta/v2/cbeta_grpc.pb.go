// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v4.24.3
// source: cbeta.proto

package v2

import (
	grpc "google.golang.org/grpc"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const ()

// SectionClient is the client API for Section service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type SectionClient interface {
}

type sectionClient struct {
	cc grpc.ClientConnInterface
}

func NewSectionClient(cc grpc.ClientConnInterface) SectionClient {
	return &sectionClient{cc}
}

// SectionServer is the server API for Section service.
// All implementations must embed UnimplementedSectionServer
// for forward compatibility
type SectionServer interface {
	mustEmbedUnimplementedSectionServer()
}

// UnimplementedSectionServer must be embedded to have forward compatible implementations.
type UnimplementedSectionServer struct {
}

func (UnimplementedSectionServer) mustEmbedUnimplementedSectionServer() {}

// UnsafeSectionServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to SectionServer will
// result in compilation errors.
type UnsafeSectionServer interface {
	mustEmbedUnimplementedSectionServer()
}

func RegisterSectionServer(s grpc.ServiceRegistrar, srv SectionServer) {
	s.RegisterService(&Section_ServiceDesc, srv)
}

// Section_ServiceDesc is the grpc.ServiceDesc for Section service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Section_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "palm.cbeta.v1.Section",
	HandlerType: (*SectionServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams:     []grpc.StreamDesc{},
	Metadata:    "cbeta.proto",
}

const ()

// BookClient is the client API for Book service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type BookClient interface {
}

type bookClient struct {
	cc grpc.ClientConnInterface
}

func NewBookClient(cc grpc.ClientConnInterface) BookClient {
	return &bookClient{cc}
}

// BookServer is the server API for Book service.
// All implementations must embed UnimplementedBookServer
// for forward compatibility
type BookServer interface {
	mustEmbedUnimplementedBookServer()
}

// UnimplementedBookServer must be embedded to have forward compatible implementations.
type UnimplementedBookServer struct {
}

func (UnimplementedBookServer) mustEmbedUnimplementedBookServer() {}

// UnsafeBookServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to BookServer will
// result in compilation errors.
type UnsafeBookServer interface {
	mustEmbedUnimplementedBookServer()
}

func RegisterBookServer(s grpc.ServiceRegistrar, srv BookServer) {
	s.RegisterService(&Book_ServiceDesc, srv)
}

// Book_ServiceDesc is the grpc.ServiceDesc for Book service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Book_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "palm.cbeta.v1.Book",
	HandlerType: (*BookServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams:     []grpc.StreamDesc{},
	Metadata:    "cbeta.proto",
}
