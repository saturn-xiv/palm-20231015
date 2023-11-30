package services

import (
	"context"

	pb "github.com/saturn_xiv/palm/metasequoia/v2"
	"google.golang.org/protobuf/types/known/emptypb"
)

type RbacService struct {
	pb.UnimplementedRbacServer
}

func (p RbacService) GetRolesForUser(_ctx context.Context, _in *pb.UserQueryRequest) (*pb.RbacRolesResponse, error) {
	// TODO
	return &pb.RbacRolesResponse{}, nil
}

func (p RbacService) GetImplicitRolesForUser(_ctx context.Context, _in *pb.UserQueryRequest) (*pb.RbacRolesResponse, error) {
	// TODO
	return &pb.RbacRolesResponse{}, nil
}

func (p RbacService) AddRolesForUser(_ctx context.Context, _in *pb.RbacRolesForUserRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p RbacService) DeleteRolesForUser(_ctx context.Context, _in *pb.RbacRolesForUserRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p RbacService) AddPermissionsForRole(_ctx context.Context, _in *pb.RbacPermissionsForRoleRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p RbacService) DeletePermissionsForRole(_ctx context.Context, _in *pb.RbacPermissionsForRoleRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p RbacService) GetPermissionsForUser(_ctx context.Context, _in *pb.UserQueryRequest) (*pb.RbacPermissionsResponse, error) {
	// TODO
	return &pb.RbacPermissionsResponse{}, nil
}

func (p RbacService) GetImplicitPermissionsForUser(_ctx context.Context, _in *pb.UserQueryRequest) (*pb.RbacPermissionsResponse, error) {
	// TODO
	return &pb.RbacPermissionsResponse{}, nil
}

func (p RbacService) AddPermissionsForUser(_ctx context.Context, _in *pb.RbacPermissionsForUserRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p RbacService) DeletePermissionsForUser(_ctx context.Context, _in *pb.RbacPermissionsForUserRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}
