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
	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"
	"google.golang.org/grpc"
	"google.golang.org/grpc/health"
	"google.golang.org/grpc/health/grpc_health_v1"

	"github.com/saturn_xiv/palm/env"
	metasequoia_controllers "github.com/saturn_xiv/palm/metasequoia/controllers"
	metasequoia_services "github.com/saturn_xiv/palm/metasequoia/services"
	metasequoia_tasks "github.com/saturn_xiv/palm/metasequoia/tasks"
	metasequoia_pb "github.com/saturn_xiv/palm/metasequoia/v2"
	"github.com/saturn_xiv/palm/queue"
)

func main() {
	var debug bool
	var version bool
	var port int
	var http_server bool
	var rpc_server bool
	var start_worker bool
	var queue string
	var config_file string

	flag.BoolVar(&debug, "debug", false, "run on debug mode")
	flag.BoolVar(&version, "version", false, "show version")
	flag.BoolVar(&rpc_server, "rpc", false, "start a gRPC server")
	flag.BoolVar(&http_server, "http", false, "start a HTTP server")
	flag.BoolVar(&start_worker, "worker", false, "start a RabbitMQ consumer")
	flag.StringVar(&queue, "queue", env.QueueName(metasequoia_pb.EmailTask{}), "RabbitMQ queue to listen")
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
		log.Fatalf("parse file: %s", err)
	}
	aes, hmac, jwt, err := config.OpenSecrets()
	if err != nil {
		log.Fatal(err)
	}

	pg_db, err := config.Postgresql.Open()
	if err != nil {
		log.Fatalf("open database: %s", err)
	}

	redis_casbin_watcher, err := config.Redis.CasbinWatcher()
	if err != nil {
		log.Fatalf("open casbin watcher: %s", err)
	}

	enforcer, err := env.OpenCasbin(pg_db, redis_casbin_watcher, "rbac_model.conf")
	if err != nil {
		log.Fatalf("open casbin enforcer: %s", err)
	}

	if http_server {
		if err = start_http(port); err != nil {
			log.Fatalf("start HTTP server: %s", err)
			return
		}
	}
	if rpc_server {
		if err = start_rpc(port, aes, hmac, jwt, enforcer); err != nil {
			log.Fatalf("start gRPC server: %s", err)
			return
		}
	}
	if start_worker {
		if err = launch_worker(config.RabbitMq.URI(), queue); err != nil {
			log.Fatal(err)
			return
		}
	}
	flag.PrintDefaults()

}

func launch_worker(rabbitmq string, queue_name string) error {
	hostname, err := os.Hostname()
	if err != nil {
		return err
	}
	consumer_name := fmt.Sprintf("%s-%d-%d", hostname, os.Getuid(), os.Getpid())
	log.Infof("start worker for %s", queue_name)
	queue := queue.NewRabbitMq(rabbitmq)
	if queue_name == env.QueueName(metasequoia_pb.EmailTask{}) {
		queue.Consume(consumer_name, queue_name, &metasequoia_tasks.EmailConsumer{})
	}
	return fmt.Errorf("unknown queue %s", queue_name)
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

func start_rpc(port int, aes *env.Aes, hmac *env.HMac, jwt *env.Jwt, enforcer *casbin.Enforcer) error {
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
