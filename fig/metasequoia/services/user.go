package services

import (
	"context"

	"github.com/casbin/casbin/v2"
	"google.golang.org/protobuf/types/known/durationpb"
	"google.golang.org/protobuf/types/known/emptypb"

	"github.com/saturn_xiv/fig/env"
	pb "github.com/saturn_xiv/fig/metasequoia/v2"
)

type UserService struct {
	hmac     *env.HMac
	jwt      *env.Jwt
	aes      *env.Aes
	enforcer *casbin.Enforcer

	pb.UnimplementedUserServer
}

func NewUserService(aes *env.Aes, hmac *env.HMac, jwt *env.Jwt, enforcer *casbin.Enforcer) UserService {
	return UserService{hmac: hmac, jwt: jwt, aes: aes, enforcer: enforcer}
}

func (p UserService) SignInByPassword(_ctx context.Context, _in *pb.UserSignInByPasswordRequest) (*pb.UserSignInResponse, error) {
	// TODO
	return &pb.UserSignInResponse{}, nil
}

func (p UserService) SignUpByEmail(_ctx context.Context, _in *pb.UserSignUpByEmailRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p UserService) ConfirmByEmail(_ctx context.Context, _in *pb.UserQueryRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p UserService) ConfirmByToken(_ctx context.Context, _in *pb.UserTokenRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p UserService) UnlockByEmail(_ctx context.Context, _in *pb.UserQueryRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p UserService) UnlockByToken(_ctx context.Context, _in *pb.UserTokenRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p UserService) ForgotPassword(_ctx context.Context, _in *pb.UserQueryRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p UserService) ResetPassword(_ctx context.Context, _in *pb.UserResetPasswordRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p UserService) Set(_ctx context.Context, _in *pb.SettingSetRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p UserService) Refresh(_ctx context.Context, _in *durationpb.Duration) (*pb.UserSignInResponse, error) {
	// TODO
	return &pb.UserSignInResponse{}, nil
}

func (p UserService) Logs(_ctx context.Context, _in *pb.UserLogsRequest) (*pb.UserLogsResponse, error) {
	// TODO
	return &pb.UserLogsResponse{}, nil
}

func (p UserService) SetProfile(_ctx context.Context, _in *pb.UserProfile) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p UserService) GetProfile(_ctx context.Context, _in *emptypb.Empty) (*pb.UserProfile, error) {
	// TODO
	return &pb.UserProfile{}, nil
}

func (p UserService) ChangePassword(_ctx context.Context, _in *pb.UserChangePasswordRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p UserService) SignOut(_ctx context.Context, _in *emptypb.Empty) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p UserService) Index(_ctx context.Context, _in *emptypb.Empty) (*pb.UserIndexResponse, error) {
	// TODO
	return &pb.UserIndexResponse{}, nil
}

func (p UserService) Show(_ctx context.Context, _in *pb.UserQueryRequest) (*pb.UserIndexResponse_Item, error) {
	// TODO
	return &pb.UserIndexResponse_Item{}, nil
}

func (p UserService) Disable(_ctx context.Context, _in *pb.UserQueryRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p UserService) Enable(_ctx context.Context, _in *pb.UserQueryRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p UserService) Lock(_ctx context.Context, _in *pb.UserQueryRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p UserService) Unlock(_ctx context.Context, _in *pb.UserQueryRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p UserService) Confirm(_ctx context.Context, _in *pb.UserQueryRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p UserService) Delete(_ctx context.Context, _in *pb.UserQueryRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}

func (p UserService) SetPassword(_ctx context.Context, _in *pb.UserSetPasswordRequest) (*emptypb.Empty, error) {
	// TODO
	return &emptypb.Empty{}, nil
}