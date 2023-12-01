package main

import (
	"flag"
	"fmt"
	"net"
	"os"

	"github.com/BurntSushi/toml"
	"github.com/casbin/casbin/v2"
	gormadapter "github.com/casbin/gorm-adapter/v3"
	rediswatcher "github.com/casbin/redis-watcher/v2"
	log "github.com/sirupsen/logrus"
	"google.golang.org/grpc"
	"google.golang.org/grpc/health"
	"google.golang.org/grpc/health/grpc_health_v1"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"github.com/saturn_xiv/palm/env"
	metasequoia_services "github.com/saturn_xiv/palm/metasequoia/services"
	metasequoia_pb "github.com/saturn_xiv/palm/metasequoia/v2"
)

func updateCallback(msg string) {
	log.Info(msg)
}

func main() {
	var debug bool
	var version bool
	var port int
	var config_file string

	flag.BoolVar(&debug, "debug", false, "run on debug mode")
	flag.BoolVar(&version, "version", false, "show version")
	flag.IntVar(&port, "port", 8080, "listening port")
	flag.StringVar(&config_file, "config", "config.toml", "configuration file")
	flag.Parse()

	if version {
		fmt.Println("v2023.11.29")
		os.Exit(0)
	}

	if debug {
		log.SetLevel(log.DebugLevel)
	} else {
		log.SetLevel(log.InfoLevel)
	}

	if _, err := os.Stat(".stop"); err == nil {
		log.Warn(".stop file exists, exiting...")
		os.Exit(0)
	}

	log.Debugf("load configuration from %s", config_file)

	var config env.Config
	if _, err := toml.DecodeFile(config_file, &config); err != nil {
		log.Fatal("parse file", err)
	}
	aes, hmac, jwt, err := config.OpenSecrets()
	if err != nil {
		log.Fatal(err)
	}

	watcher, err := rediswatcher.NewWatcher(config.Redis.Addr(), rediswatcher.WatcherOptions{
		Options:    config.Redis.Options(),
		Channel:    "/casbin",
		IgnoreSelf: false,
	})
	if err != nil {
		log.Fatal("create casbin watcher", err)
	}

	pg_db, err := gorm.Open(postgres.Open(config.Postgresql.Url()), &gorm.Config{})
	if err != nil {
		log.Fatal("open database", err)
	}
	adapter, err := gormadapter.NewAdapterByDB(pg_db)
	if err != nil {
		log.Fatal("create casbin adapter", err)
	}
	enforcer, err := casbin.NewEnforcer("rbac_model.conf", adapter)
	if err != nil {
		log.Fatal("create casbin enforcer", err)
	}
	err = enforcer.SetWatcher(watcher)
	if err != nil {
		log.Fatal("set casbin watcher", err)
	}
	err = watcher.SetUpdateCallback(updateCallback)
	if err != nil {
		log.Fatal("set casbin update callback", err)
	}

	err = enforcer.LoadPolicy()
	if err != nil {
		log.Fatal("load casbin policy", err)
	}

	address := fmt.Sprintf("0.0.0.0:%d", port)
	log.Infof("start gRPC on http://%s", address)
	socket, err := net.Listen("tcp", address)
	if err != nil {
		log.Fatalln(err)
	}
	var opts []grpc.ServerOption

	server := grpc.NewServer(opts...)
	metasequoia_pb.RegisterUserServer(server, metasequoia_services.NewUserService(aes, hmac, jwt))
	metasequoia_pb.RegisterRbacServer(server, metasequoia_services.RbacService{})
	metasequoia_pb.RegisterSettingServer(server, metasequoia_services.SettingService{})
	metasequoia_pb.RegisterLocaleServer(server, metasequoia_services.LocaleService{})

	grpc_health_v1.RegisterHealthServer(server, health.NewServer())
	server.Serve(socket)
}
