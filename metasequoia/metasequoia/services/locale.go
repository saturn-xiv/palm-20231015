package services

import (
	"context"

	pb "github.com/saturn_xiv/palm/metasequoia/v2"
	"google.golang.org/protobuf/types/known/emptypb"
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
