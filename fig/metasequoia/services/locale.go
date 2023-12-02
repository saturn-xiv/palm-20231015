package services

import (
	"context"

	"google.golang.org/protobuf/types/known/emptypb"

	pb "github.com/saturn_xiv/fig/metasequoia/v2"
)

type LocaleService struct {
	pb.UnimplementedLocaleServer
}

func (p LocaleService) Set(_ctx context.Context, _in *pb.LocaleSetRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p LocaleService) Get(_ctx context.Context, _in *pb.LocaleGetRequest) (*pb.LocalesResponse_Item, error) {
	// TODO
	return &pb.LocalesResponse_Item{}, nil
}

func (p LocaleService) ByLang(_ctx context.Context, _in *pb.LocaleByLangRequest) (*pb.LocalesResponse, error) {
	// TODO
	return &pb.LocalesResponse{}, nil
}
