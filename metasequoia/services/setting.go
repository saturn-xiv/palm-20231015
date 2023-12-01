package services

import (
	"context"

	pb "github.com/saturn_xiv/palm/metasequoia/v2"
	"google.golang.org/protobuf/types/known/emptypb"
)

type SettingService struct {
	pb.UnimplementedSettingServer
}

func (p SettingService) Set(_ctx context.Context, _in *pb.SettingSetRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p SettingService) Get(_ctx context.Context, _in *pb.SettingGetRequest) (*pb.SettingsResponse_Item, error) {
	// TODO
	return &pb.SettingsResponse_Item{}, nil
}

func (p SettingService) ByUser(_ctx context.Context, _in *pb.SettingByUserRequest) (*pb.SettingsResponse, error) {
	// TODO
	return &pb.SettingsResponse{}, nil
}

func (p SettingService) My(_ctx context.Context, _in *emptypb.Empty) (*pb.SettingsResponse, error) {
	// TODO
	return &pb.SettingsResponse{}, nil
}

func (p SettingService) Global(_ctx context.Context, _in *emptypb.Empty) (*pb.SettingsResponse, error) {
	// TODO
	return &pb.SettingsResponse{}, nil
}
