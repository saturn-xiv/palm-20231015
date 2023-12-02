// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v4.25.0
// source: cms.proto

package v2

import (
	context "context"
	v2 "github.com/saturn_xiv/fig/metasequoia/v2"
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
	Article_Create_FullMethodName  = "/palm.cms.v1.Article/Create"
	Article_Update_FullMethodName  = "/palm.cms.v1.Article/Update"
	Article_Index_FullMethodName   = "/palm.cms.v1.Article/Index"
	Article_Show_FullMethodName    = "/palm.cms.v1.Article/Show"
	Article_Destory_FullMethodName = "/palm.cms.v1.Article/Destory"
)

// ArticleClient is the client API for Article service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ArticleClient interface {
	Create(ctx context.Context, in *ArticleCreateRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	Update(ctx context.Context, in *ArticleUpdateRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	Index(ctx context.Context, in *v2.Pager, opts ...grpc.CallOption) (*ArticleIndexResponse, error)
	Show(ctx context.Context, in *v2.IdRequest, opts ...grpc.CallOption) (*ArticleShowResponse, error)
	Destory(ctx context.Context, in *v2.IdRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
}

type articleClient struct {
	cc grpc.ClientConnInterface
}

func NewArticleClient(cc grpc.ClientConnInterface) ArticleClient {
	return &articleClient{cc}
}

func (c *articleClient) Create(ctx context.Context, in *ArticleCreateRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Article_Create_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *articleClient) Update(ctx context.Context, in *ArticleUpdateRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Article_Update_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *articleClient) Index(ctx context.Context, in *v2.Pager, opts ...grpc.CallOption) (*ArticleIndexResponse, error) {
	out := new(ArticleIndexResponse)
	err := c.cc.Invoke(ctx, Article_Index_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *articleClient) Show(ctx context.Context, in *v2.IdRequest, opts ...grpc.CallOption) (*ArticleShowResponse, error) {
	out := new(ArticleShowResponse)
	err := c.cc.Invoke(ctx, Article_Show_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *articleClient) Destory(ctx context.Context, in *v2.IdRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Article_Destory_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ArticleServer is the server API for Article service.
// All implementations must embed UnimplementedArticleServer
// for forward compatibility
type ArticleServer interface {
	Create(context.Context, *ArticleCreateRequest) (*emptypb.Empty, error)
	Update(context.Context, *ArticleUpdateRequest) (*emptypb.Empty, error)
	Index(context.Context, *v2.Pager) (*ArticleIndexResponse, error)
	Show(context.Context, *v2.IdRequest) (*ArticleShowResponse, error)
	Destory(context.Context, *v2.IdRequest) (*emptypb.Empty, error)
	mustEmbedUnimplementedArticleServer()
}

// UnimplementedArticleServer must be embedded to have forward compatible implementations.
type UnimplementedArticleServer struct {
}

func (UnimplementedArticleServer) Create(context.Context, *ArticleCreateRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedArticleServer) Update(context.Context, *ArticleUpdateRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedArticleServer) Index(context.Context, *v2.Pager) (*ArticleIndexResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Index not implemented")
}
func (UnimplementedArticleServer) Show(context.Context, *v2.IdRequest) (*ArticleShowResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Show not implemented")
}
func (UnimplementedArticleServer) Destory(context.Context, *v2.IdRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Destory not implemented")
}
func (UnimplementedArticleServer) mustEmbedUnimplementedArticleServer() {}

// UnsafeArticleServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ArticleServer will
// result in compilation errors.
type UnsafeArticleServer interface {
	mustEmbedUnimplementedArticleServer()
}

func RegisterArticleServer(s grpc.ServiceRegistrar, srv ArticleServer) {
	s.RegisterService(&Article_ServiceDesc, srv)
}

func _Article_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ArticleCreateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArticleServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Article_Create_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArticleServer).Create(ctx, req.(*ArticleCreateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Article_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ArticleUpdateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArticleServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Article_Update_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArticleServer).Update(ctx, req.(*ArticleUpdateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Article_Index_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v2.Pager)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArticleServer).Index(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Article_Index_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArticleServer).Index(ctx, req.(*v2.Pager))
	}
	return interceptor(ctx, in, info, handler)
}

func _Article_Show_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v2.IdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArticleServer).Show(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Article_Show_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArticleServer).Show(ctx, req.(*v2.IdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Article_Destory_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v2.IdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArticleServer).Destory(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Article_Destory_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArticleServer).Destory(ctx, req.(*v2.IdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Article_ServiceDesc is the grpc.ServiceDesc for Article service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Article_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "palm.cms.v1.Article",
	HandlerType: (*ArticleServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _Article_Create_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _Article_Update_Handler,
		},
		{
			MethodName: "Index",
			Handler:    _Article_Index_Handler,
		},
		{
			MethodName: "Show",
			Handler:    _Article_Show_Handler,
		},
		{
			MethodName: "Destory",
			Handler:    _Article_Destory_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "cms.proto",
}

const (
	Comment_Create_FullMethodName  = "/palm.cms.v1.Comment/Create"
	Comment_Update_FullMethodName  = "/palm.cms.v1.Comment/Update"
	Comment_Index_FullMethodName   = "/palm.cms.v1.Comment/Index"
	Comment_Destory_FullMethodName = "/palm.cms.v1.Comment/Destory"
)

// CommentClient is the client API for Comment service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CommentClient interface {
	Create(ctx context.Context, in *CommentCreateRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	Update(ctx context.Context, in *CommentUpdateRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	Index(ctx context.Context, in *v2.Pager, opts ...grpc.CallOption) (*CommentIndexResponse, error)
	Destory(ctx context.Context, in *v2.IdRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
}

type commentClient struct {
	cc grpc.ClientConnInterface
}

func NewCommentClient(cc grpc.ClientConnInterface) CommentClient {
	return &commentClient{cc}
}

func (c *commentClient) Create(ctx context.Context, in *CommentCreateRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Comment_Create_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *commentClient) Update(ctx context.Context, in *CommentUpdateRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Comment_Update_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *commentClient) Index(ctx context.Context, in *v2.Pager, opts ...grpc.CallOption) (*CommentIndexResponse, error) {
	out := new(CommentIndexResponse)
	err := c.cc.Invoke(ctx, Comment_Index_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *commentClient) Destory(ctx context.Context, in *v2.IdRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Comment_Destory_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CommentServer is the server API for Comment service.
// All implementations must embed UnimplementedCommentServer
// for forward compatibility
type CommentServer interface {
	Create(context.Context, *CommentCreateRequest) (*emptypb.Empty, error)
	Update(context.Context, *CommentUpdateRequest) (*emptypb.Empty, error)
	Index(context.Context, *v2.Pager) (*CommentIndexResponse, error)
	Destory(context.Context, *v2.IdRequest) (*emptypb.Empty, error)
	mustEmbedUnimplementedCommentServer()
}

// UnimplementedCommentServer must be embedded to have forward compatible implementations.
type UnimplementedCommentServer struct {
}

func (UnimplementedCommentServer) Create(context.Context, *CommentCreateRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedCommentServer) Update(context.Context, *CommentUpdateRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedCommentServer) Index(context.Context, *v2.Pager) (*CommentIndexResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Index not implemented")
}
func (UnimplementedCommentServer) Destory(context.Context, *v2.IdRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Destory not implemented")
}
func (UnimplementedCommentServer) mustEmbedUnimplementedCommentServer() {}

// UnsafeCommentServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to CommentServer will
// result in compilation errors.
type UnsafeCommentServer interface {
	mustEmbedUnimplementedCommentServer()
}

func RegisterCommentServer(s grpc.ServiceRegistrar, srv CommentServer) {
	s.RegisterService(&Comment_ServiceDesc, srv)
}

func _Comment_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CommentCreateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CommentServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Comment_Create_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CommentServer).Create(ctx, req.(*CommentCreateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Comment_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CommentUpdateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CommentServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Comment_Update_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CommentServer).Update(ctx, req.(*CommentUpdateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Comment_Index_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v2.Pager)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CommentServer).Index(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Comment_Index_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CommentServer).Index(ctx, req.(*v2.Pager))
	}
	return interceptor(ctx, in, info, handler)
}

func _Comment_Destory_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(v2.IdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CommentServer).Destory(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Comment_Destory_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CommentServer).Destory(ctx, req.(*v2.IdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Comment_ServiceDesc is the grpc.ServiceDesc for Comment service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Comment_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "palm.cms.v1.Comment",
	HandlerType: (*CommentServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _Comment_Create_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _Comment_Update_Handler,
		},
		{
			MethodName: "Index",
			Handler:    _Comment_Index_Handler,
		},
		{
			MethodName: "Destory",
			Handler:    _Comment_Destory_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "cms.proto",
}
