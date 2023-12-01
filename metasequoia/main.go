package main

import (
	"embed"
	"flag"
	"fmt"
	"html/template"
	"net"
	"net/http"
	"os"

	"github.com/BurntSushi/toml"
	"github.com/casbin/casbin/v2"
	gormadapter "github.com/casbin/gorm-adapter/v3"
	rediswatcher "github.com/casbin/redis-watcher/v2"
	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"
	"google.golang.org/grpc"
	"google.golang.org/grpc/health"
	"google.golang.org/grpc/health/grpc_health_v1"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"github.com/saturn_xiv/palm/env"
	metasequoia_controllers "github.com/saturn_xiv/palm/metasequoia/controllers"
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
	var http_server bool
	var rpc_server bool
	var config_file string

	flag.BoolVar(&debug, "debug", false, "run on debug mode")
	flag.BoolVar(&version, "version", false, "show version")
	flag.BoolVar(&rpc_server, "rpc-server", false, "start a gRPC server")
	flag.BoolVar(&http_server, "http-server", false, "start a HTTP server")
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
		gin.SetMode(gin.ReleaseMode)
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

	if http_server {
		if err = start_http(port); err != nil {
			log.Fatal(err)
			return
		}
	}
	if rpc_server {
		if err = start_rpc(port, aes, hmac, jwt); err != nil {
			log.Fatal(err)
			return
		}
	}
}

//go:embed assets/*
var gl_assets_fs embed.FS

//go:embed templates/*
var gl_templates_fs embed.FS

func start_http(port int) error {
	address := fmt.Sprintf("0.0.0.0:%d", port)
	router := gin.Default()

	tpl := template.Must(template.New("").ParseFS(gl_templates_fs, "templates/*/*.html"))
	router.SetHTMLTemplate(tpl)
	router.StaticFS("/public", http.FS(gl_assets_fs))

	router.GET("/", metasequoia_controllers.Home())

	log.Infof("listen on http://%s", address)
	return router.Run(address)
}

func start_rpc(port int, aes *env.Aes, hmac *env.HMac, jwt *env.Jwt) error {
	network := "tcp"
	address := fmt.Sprintf("0.0.0.0:%d", port)
	log.Infof("start gRPC on %s://%s", network, address)
	socket, err := net.Listen(network, address)
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
	return server.Serve(socket)
}
