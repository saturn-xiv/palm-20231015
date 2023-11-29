package main

import (
	"flag"
	"fmt"
	"log"
	"net"
	"os"

	"github.com/BurntSushi/toml"
	"github.com/casbin/casbin/v2"
	gormadapter "github.com/casbin/gorm-adapter/v3"
	rediswatcher "github.com/casbin/redis-watcher/v2"
	"google.golang.org/grpc"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"github.com/saturn_xiv/palm/metasequoia/env"
	"github.com/saturn_xiv/palm/metasequoia/services"
	pb "github.com/saturn_xiv/palm/metasequoia/v2"
)

func updateCallback(msg string) {
	log.Println(msg)
}

func main() {
	var version bool
	var port int
	var config_file string

	flag.BoolVar(&version, "version", false, "show version")
	flag.IntVar(&port, "port", 8080, "listening port")
	flag.StringVar(&config_file, "config", "config.toml", "configuration file")
	flag.Parse()

	if version {
		fmt.Println("v2023.11.29")
		os.Exit(0)
	}

	logger := log.Default()
	if _, err := os.Stat(".stop"); err == nil {
		logger.Println(".stop file exists, exiting...")
		os.Exit(0)
	}

	logger.Println("load configuration from", config_file)

	var config env.Config
	_, err := toml.DecodeFile(config_file, &config)
	if err != nil {
		logger.Fatalln("parse file", err)
	}

	watcher, err := rediswatcher.NewWatcher(config.Redis.Addr(), rediswatcher.WatcherOptions{
		Options:    config.Redis.Options(),
		Channel:    "/casbin",
		IgnoreSelf: false,
	})
	if err != nil {
		logger.Fatalln("create casbin watcher", err)
	}

	pg_db, err := gorm.Open(postgres.Open(config.Postgresql.Url()), &gorm.Config{})
	if err != nil {
		logger.Fatalln("open database", err)
	}
	adapter, err := gormadapter.NewAdapterByDB(pg_db)
	if err != nil {
		logger.Fatalln("create casbin adapter", err)
	}
	enforcer, err := casbin.NewEnforcer("rbac_model.conf", adapter)
	if err != nil {
		logger.Fatalln("create casbin enforcer", err)
	}
	err = enforcer.SetWatcher(watcher)
	if err != nil {
		logger.Fatalln("set casbin watcher", err)
	}
	err = watcher.SetUpdateCallback(updateCallback)
	if err != nil {
		logger.Fatalln("set casbin update callback", err)
	}

	err = enforcer.LoadPolicy()
	if err != nil {
		logger.Fatalln("load casbin policy", err)
	}

	address := fmt.Sprintf("0.0.0.0:%d", port)
	logger.Printf("start gRPC on http://%s", address)
	socket, err := net.Listen("tcp", address)
	if err != nil {
		log.Fatalln(err)
	}
	var opts []grpc.ServerOption

	server := grpc.NewServer(opts...)
	pb.RegisterLocaleServer(server, services.LocaleService{})
	server.Serve(socket)
}
