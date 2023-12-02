package cmd

import (
	"fmt"
	"net"

	casbin "github.com/casbin/casbin/v2"
	log "github.com/sirupsen/logrus"
	"google.golang.org/grpc"
	"google.golang.org/grpc/health"
	"google.golang.org/grpc/health/grpc_health_v1"

	"github.com/saturn_xiv/palm/env"
	metasequoia_services "github.com/saturn_xiv/palm/metasequoia/services"
	metasequoia_pb "github.com/saturn_xiv/palm/metasequoia/v2"
)

func launch_rpc_server(port int, aes *env.Aes, hmac *env.HMac, jwt *env.Jwt, enforcer *casbin.Enforcer) error {
	network := "tcp"
	address := fmt.Sprintf("0.0.0.0:%d", port)
	log.Infof("start gRPC on %s://%s", network, address)
	socket, err := net.Listen(network, address)
	if err != nil {
		log.Fatalln(err)
	}
	var opts []grpc.ServerOption

	server := grpc.NewServer(opts...)
	metasequoia_pb.RegisterUserServer(server, metasequoia_services.NewUserService(aes, hmac, jwt, enforcer))
	metasequoia_pb.RegisterRbacServer(server, metasequoia_services.RbacService{})
	metasequoia_pb.RegisterSettingServer(server, metasequoia_services.SettingService{})
	metasequoia_pb.RegisterLocaleServer(server, metasequoia_services.LocaleService{})

	grpc_health_v1.RegisterHealthServer(server, health.NewServer())
	return server.Serve(socket)
}
