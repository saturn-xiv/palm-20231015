// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v4.25.0
// source: ops-router.proto

package v2

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	durationpb "google.golang.org/protobuf/types/known/durationpb"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	Router_Reboot_FullMethodName     = "/palm.ops.router.v1.Router/Reboot"
	Router_Apply_FullMethodName      = "/palm.ops.router.v1.Router/Apply"
	Router_Status_FullMethodName     = "/palm.ops.router.v1.Router/Status"
	Router_SetDns_FullMethodName     = "/palm.ops.router.v1.Router/SetDns"
	Router_SetWan_FullMethodName     = "/palm.ops.router.v1.Router/SetWan"
	Router_SetWanPool_FullMethodName = "/palm.ops.router.v1.Router/SetWanPool"
	Router_SetLan_FullMethodName     = "/palm.ops.router.v1.Router/SetLan"
	Router_SetDmz_FullMethodName     = "/palm.ops.router.v1.Router/SetDmz"
	Router_CreateRule_FullMethodName = "/palm.ops.router.v1.Router/CreateRule"
	Router_UpdateRule_FullMethodName = "/palm.ops.router.v1.Router/UpdateRule"
	Router_IndexRule_FullMethodName  = "/palm.ops.router.v1.Router/IndexRule"
	Router_UpdateHost_FullMethodName = "/palm.ops.router.v1.Router/UpdateHost"
	Router_IndexUser_FullMethodName  = "/palm.ops.router.v1.Router/IndexUser"
	Router_UpdateUser_FullMethodName = "/palm.ops.router.v1.Router/UpdateUser"
	Router_CreateUser_FullMethodName = "/palm.ops.router.v1.Router/CreateUser"
)

// RouterClient is the client API for Router service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type RouterClient interface {
	Reboot(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*emptypb.Empty, error)
	Apply(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*emptypb.Empty, error)
	Status(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*RouterStatusResponse, error)
	SetDns(ctx context.Context, in *Dns, opts ...grpc.CallOption) (*emptypb.Empty, error)
	SetWan(ctx context.Context, in *RouterSetWanRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	SetWanPool(ctx context.Context, in *WanPool, opts ...grpc.CallOption) (*emptypb.Empty, error)
	SetLan(ctx context.Context, in *RouterSetLanRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	SetDmz(ctx context.Context, in *RouterSetDmzRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	CreateRule(ctx context.Context, in *Rule, opts ...grpc.CallOption) (*emptypb.Empty, error)
	UpdateRule(ctx context.Context, in *RouterIndexRuleResponse_Item, opts ...grpc.CallOption) (*emptypb.Empty, error)
	IndexRule(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*RouterIndexRuleResponse, error)
	UpdateHost(ctx context.Context, in *RouterUpdateHostRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	IndexUser(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*RouterIndexUserResponse, error)
	UpdateUser(ctx context.Context, in *RouterIndexUserResponse_Item, opts ...grpc.CallOption) (*emptypb.Empty, error)
	CreateUser(ctx context.Context, in *RouterCreateUserRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
}

type routerClient struct {
	cc grpc.ClientConnInterface
}

func NewRouterClient(cc grpc.ClientConnInterface) RouterClient {
	return &routerClient{cc}
}

func (c *routerClient) Reboot(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Router_Reboot_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *routerClient) Apply(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Router_Apply_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *routerClient) Status(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*RouterStatusResponse, error) {
	out := new(RouterStatusResponse)
	err := c.cc.Invoke(ctx, Router_Status_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *routerClient) SetDns(ctx context.Context, in *Dns, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Router_SetDns_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *routerClient) SetWan(ctx context.Context, in *RouterSetWanRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Router_SetWan_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *routerClient) SetWanPool(ctx context.Context, in *WanPool, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Router_SetWanPool_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *routerClient) SetLan(ctx context.Context, in *RouterSetLanRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Router_SetLan_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *routerClient) SetDmz(ctx context.Context, in *RouterSetDmzRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Router_SetDmz_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *routerClient) CreateRule(ctx context.Context, in *Rule, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Router_CreateRule_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *routerClient) UpdateRule(ctx context.Context, in *RouterIndexRuleResponse_Item, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Router_UpdateRule_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *routerClient) IndexRule(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*RouterIndexRuleResponse, error) {
	out := new(RouterIndexRuleResponse)
	err := c.cc.Invoke(ctx, Router_IndexRule_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *routerClient) UpdateHost(ctx context.Context, in *RouterUpdateHostRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Router_UpdateHost_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *routerClient) IndexUser(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*RouterIndexUserResponse, error) {
	out := new(RouterIndexUserResponse)
	err := c.cc.Invoke(ctx, Router_IndexUser_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *routerClient) UpdateUser(ctx context.Context, in *RouterIndexUserResponse_Item, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Router_UpdateUser_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *routerClient) CreateUser(ctx context.Context, in *RouterCreateUserRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, Router_CreateUser_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// RouterServer is the server API for Router service.
// All implementations must embed UnimplementedRouterServer
// for forward compatibility
type RouterServer interface {
	Reboot(context.Context, *emptypb.Empty) (*emptypb.Empty, error)
	Apply(context.Context, *emptypb.Empty) (*emptypb.Empty, error)
	Status(context.Context, *emptypb.Empty) (*RouterStatusResponse, error)
	SetDns(context.Context, *Dns) (*emptypb.Empty, error)
	SetWan(context.Context, *RouterSetWanRequest) (*emptypb.Empty, error)
	SetWanPool(context.Context, *WanPool) (*emptypb.Empty, error)
	SetLan(context.Context, *RouterSetLanRequest) (*emptypb.Empty, error)
	SetDmz(context.Context, *RouterSetDmzRequest) (*emptypb.Empty, error)
	CreateRule(context.Context, *Rule) (*emptypb.Empty, error)
	UpdateRule(context.Context, *RouterIndexRuleResponse_Item) (*emptypb.Empty, error)
	IndexRule(context.Context, *emptypb.Empty) (*RouterIndexRuleResponse, error)
	UpdateHost(context.Context, *RouterUpdateHostRequest) (*emptypb.Empty, error)
	IndexUser(context.Context, *emptypb.Empty) (*RouterIndexUserResponse, error)
	UpdateUser(context.Context, *RouterIndexUserResponse_Item) (*emptypb.Empty, error)
	CreateUser(context.Context, *RouterCreateUserRequest) (*emptypb.Empty, error)
	mustEmbedUnimplementedRouterServer()
}

// UnimplementedRouterServer must be embedded to have forward compatible implementations.
type UnimplementedRouterServer struct {
}

func (UnimplementedRouterServer) Reboot(context.Context, *emptypb.Empty) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Reboot not implemented")
}
func (UnimplementedRouterServer) Apply(context.Context, *emptypb.Empty) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Apply not implemented")
}
func (UnimplementedRouterServer) Status(context.Context, *emptypb.Empty) (*RouterStatusResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Status not implemented")
}
func (UnimplementedRouterServer) SetDns(context.Context, *Dns) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetDns not implemented")
}
func (UnimplementedRouterServer) SetWan(context.Context, *RouterSetWanRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetWan not implemented")
}
func (UnimplementedRouterServer) SetWanPool(context.Context, *WanPool) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetWanPool not implemented")
}
func (UnimplementedRouterServer) SetLan(context.Context, *RouterSetLanRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetLan not implemented")
}
func (UnimplementedRouterServer) SetDmz(context.Context, *RouterSetDmzRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetDmz not implemented")
}
func (UnimplementedRouterServer) CreateRule(context.Context, *Rule) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateRule not implemented")
}
func (UnimplementedRouterServer) UpdateRule(context.Context, *RouterIndexRuleResponse_Item) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateRule not implemented")
}
func (UnimplementedRouterServer) IndexRule(context.Context, *emptypb.Empty) (*RouterIndexRuleResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method IndexRule not implemented")
}
func (UnimplementedRouterServer) UpdateHost(context.Context, *RouterUpdateHostRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateHost not implemented")
}
func (UnimplementedRouterServer) IndexUser(context.Context, *emptypb.Empty) (*RouterIndexUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method IndexUser not implemented")
}
func (UnimplementedRouterServer) UpdateUser(context.Context, *RouterIndexUserResponse_Item) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateUser not implemented")
}
func (UnimplementedRouterServer) CreateUser(context.Context, *RouterCreateUserRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateUser not implemented")
}
func (UnimplementedRouterServer) mustEmbedUnimplementedRouterServer() {}

// UnsafeRouterServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to RouterServer will
// result in compilation errors.
type UnsafeRouterServer interface {
	mustEmbedUnimplementedRouterServer()
}

func RegisterRouterServer(s grpc.ServiceRegistrar, srv RouterServer) {
	s.RegisterService(&Router_ServiceDesc, srv)
}

func _Router_Reboot_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RouterServer).Reboot(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Router_Reboot_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RouterServer).Reboot(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _Router_Apply_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RouterServer).Apply(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Router_Apply_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RouterServer).Apply(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _Router_Status_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RouterServer).Status(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Router_Status_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RouterServer).Status(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _Router_SetDns_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Dns)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RouterServer).SetDns(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Router_SetDns_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RouterServer).SetDns(ctx, req.(*Dns))
	}
	return interceptor(ctx, in, info, handler)
}

func _Router_SetWan_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RouterSetWanRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RouterServer).SetWan(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Router_SetWan_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RouterServer).SetWan(ctx, req.(*RouterSetWanRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Router_SetWanPool_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(WanPool)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RouterServer).SetWanPool(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Router_SetWanPool_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RouterServer).SetWanPool(ctx, req.(*WanPool))
	}
	return interceptor(ctx, in, info, handler)
}

func _Router_SetLan_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RouterSetLanRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RouterServer).SetLan(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Router_SetLan_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RouterServer).SetLan(ctx, req.(*RouterSetLanRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Router_SetDmz_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RouterSetDmzRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RouterServer).SetDmz(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Router_SetDmz_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RouterServer).SetDmz(ctx, req.(*RouterSetDmzRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Router_CreateRule_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Rule)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RouterServer).CreateRule(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Router_CreateRule_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RouterServer).CreateRule(ctx, req.(*Rule))
	}
	return interceptor(ctx, in, info, handler)
}

func _Router_UpdateRule_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RouterIndexRuleResponse_Item)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RouterServer).UpdateRule(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Router_UpdateRule_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RouterServer).UpdateRule(ctx, req.(*RouterIndexRuleResponse_Item))
	}
	return interceptor(ctx, in, info, handler)
}

func _Router_IndexRule_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RouterServer).IndexRule(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Router_IndexRule_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RouterServer).IndexRule(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _Router_UpdateHost_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RouterUpdateHostRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RouterServer).UpdateHost(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Router_UpdateHost_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RouterServer).UpdateHost(ctx, req.(*RouterUpdateHostRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Router_IndexUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RouterServer).IndexUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Router_IndexUser_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RouterServer).IndexUser(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _Router_UpdateUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RouterIndexUserResponse_Item)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RouterServer).UpdateUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Router_UpdateUser_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RouterServer).UpdateUser(ctx, req.(*RouterIndexUserResponse_Item))
	}
	return interceptor(ctx, in, info, handler)
}

func _Router_CreateUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RouterCreateUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RouterServer).CreateUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Router_CreateUser_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RouterServer).CreateUser(ctx, req.(*RouterCreateUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Router_ServiceDesc is the grpc.ServiceDesc for Router service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Router_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "palm.ops.router.v1.Router",
	HandlerType: (*RouterServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Reboot",
			Handler:    _Router_Reboot_Handler,
		},
		{
			MethodName: "Apply",
			Handler:    _Router_Apply_Handler,
		},
		{
			MethodName: "Status",
			Handler:    _Router_Status_Handler,
		},
		{
			MethodName: "SetDns",
			Handler:    _Router_SetDns_Handler,
		},
		{
			MethodName: "SetWan",
			Handler:    _Router_SetWan_Handler,
		},
		{
			MethodName: "SetWanPool",
			Handler:    _Router_SetWanPool_Handler,
		},
		{
			MethodName: "SetLan",
			Handler:    _Router_SetLan_Handler,
		},
		{
			MethodName: "SetDmz",
			Handler:    _Router_SetDmz_Handler,
		},
		{
			MethodName: "CreateRule",
			Handler:    _Router_CreateRule_Handler,
		},
		{
			MethodName: "UpdateRule",
			Handler:    _Router_UpdateRule_Handler,
		},
		{
			MethodName: "IndexRule",
			Handler:    _Router_IndexRule_Handler,
		},
		{
			MethodName: "UpdateHost",
			Handler:    _Router_UpdateHost_Handler,
		},
		{
			MethodName: "IndexUser",
			Handler:    _Router_IndexUser_Handler,
		},
		{
			MethodName: "UpdateUser",
			Handler:    _Router_UpdateUser_Handler,
		},
		{
			MethodName: "CreateUser",
			Handler:    _Router_CreateUser_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ops-router.proto",
}

const (
	User_SignIn_FullMethodName  = "/palm.ops.router.v1.User/SignIn"
	User_Refresh_FullMethodName = "/palm.ops.router.v1.User/Refresh"
	User_Update_FullMethodName  = "/palm.ops.router.v1.User/Update"
	User_SignOut_FullMethodName = "/palm.ops.router.v1.User/SignOut"
	User_Logs_FullMethodName    = "/palm.ops.router.v1.User/Logs"
)

// UserClient is the client API for User service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type UserClient interface {
	SignIn(ctx context.Context, in *UserSignInRequest, opts ...grpc.CallOption) (*UserSignInResponse, error)
	Refresh(ctx context.Context, in *durationpb.Duration, opts ...grpc.CallOption) (*UserSignInResponse, error)
	Update(ctx context.Context, in *UserUpdateRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	SignOut(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*emptypb.Empty, error)
	Logs(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*UserLogsResponse, error)
}

type userClient struct {
	cc grpc.ClientConnInterface
}

func NewUserClient(cc grpc.ClientConnInterface) UserClient {
	return &userClient{cc}
}

func (c *userClient) SignIn(ctx context.Context, in *UserSignInRequest, opts ...grpc.CallOption) (*UserSignInResponse, error) {
	out := new(UserSignInResponse)
	err := c.cc.Invoke(ctx, User_SignIn_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userClient) Refresh(ctx context.Context, in *durationpb.Duration, opts ...grpc.CallOption) (*UserSignInResponse, error) {
	out := new(UserSignInResponse)
	err := c.cc.Invoke(ctx, User_Refresh_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userClient) Update(ctx context.Context, in *UserUpdateRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, User_Update_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userClient) SignOut(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, User_SignOut_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userClient) Logs(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*UserLogsResponse, error) {
	out := new(UserLogsResponse)
	err := c.cc.Invoke(ctx, User_Logs_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// UserServer is the server API for User service.
// All implementations must embed UnimplementedUserServer
// for forward compatibility
type UserServer interface {
	SignIn(context.Context, *UserSignInRequest) (*UserSignInResponse, error)
	Refresh(context.Context, *durationpb.Duration) (*UserSignInResponse, error)
	Update(context.Context, *UserUpdateRequest) (*emptypb.Empty, error)
	SignOut(context.Context, *emptypb.Empty) (*emptypb.Empty, error)
	Logs(context.Context, *emptypb.Empty) (*UserLogsResponse, error)
	mustEmbedUnimplementedUserServer()
}

// UnimplementedUserServer must be embedded to have forward compatible implementations.
type UnimplementedUserServer struct {
}

func (UnimplementedUserServer) SignIn(context.Context, *UserSignInRequest) (*UserSignInResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SignIn not implemented")
}
func (UnimplementedUserServer) Refresh(context.Context, *durationpb.Duration) (*UserSignInResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Refresh not implemented")
}
func (UnimplementedUserServer) Update(context.Context, *UserUpdateRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedUserServer) SignOut(context.Context, *emptypb.Empty) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SignOut not implemented")
}
func (UnimplementedUserServer) Logs(context.Context, *emptypb.Empty) (*UserLogsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Logs not implemented")
}
func (UnimplementedUserServer) mustEmbedUnimplementedUserServer() {}

// UnsafeUserServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to UserServer will
// result in compilation errors.
type UnsafeUserServer interface {
	mustEmbedUnimplementedUserServer()
}

func RegisterUserServer(s grpc.ServiceRegistrar, srv UserServer) {
	s.RegisterService(&User_ServiceDesc, srv)
}

func _User_SignIn_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserSignInRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServer).SignIn(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: User_SignIn_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServer).SignIn(ctx, req.(*UserSignInRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _User_Refresh_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(durationpb.Duration)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServer).Refresh(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: User_Refresh_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServer).Refresh(ctx, req.(*durationpb.Duration))
	}
	return interceptor(ctx, in, info, handler)
}

func _User_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserUpdateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: User_Update_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServer).Update(ctx, req.(*UserUpdateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _User_SignOut_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServer).SignOut(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: User_SignOut_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServer).SignOut(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _User_Logs_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserServer).Logs(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: User_Logs_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserServer).Logs(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

// User_ServiceDesc is the grpc.ServiceDesc for User service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var User_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "palm.ops.router.v1.User",
	HandlerType: (*UserServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SignIn",
			Handler:    _User_SignIn_Handler,
		},
		{
			MethodName: "Refresh",
			Handler:    _User_Refresh_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _User_Update_Handler,
		},
		{
			MethodName: "SignOut",
			Handler:    _User_SignOut_Handler,
		},
		{
			MethodName: "Logs",
			Handler:    _User_Logs_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ops-router.proto",
}