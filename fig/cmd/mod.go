package cmd

import (
	"fmt"
	"os"

	"github.com/BurntSushi/toml"
	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"
	"github.com/spf13/cobra"

	"github.com/saturn_xiv/palm/env"
	metasequoia_pb "github.com/saturn_xiv/palm/metasequoia/v2"
)

var (
	version      string
	author_email string
	repo_url     string
)

var root_cmd = &cobra.Command{
	Use:     "fig",
	Short:   "Fig",
	Long:    fmt.Sprintf("A total free education & translation & ops solution(%s).", repo_url),
	Version: fmt.Sprintf("%s(%s)", version, author_email),
	Run: func(cmd *cobra.Command, args []string) {
		if gl_debug {
			log.SetLevel(log.DebugLevel)
		} else {
			log.SetLevel(log.InfoLevel)
			gin.SetMode(gin.ReleaseMode)
		}
		is_stopped()

		log.Debugf("run on debug mode")
		log.Debugf("load configuration from %s", gl_config)
	},
}

func Execute() {
	if err := root_cmd.Execute(); err != nil {
		log.Fatal(err)
	}
}

var (
	gl_debug             bool
	gl_config            string
	gl_http_port         int
	gl_rpc_port          int
	gl_worker_queue_name string
)

func init() {
	root_cmd.PersistentFlags().BoolVarP(&gl_debug, "debug", "d", false, "run on debug mode")
	root_cmd.PersistentFlags().StringVarP(&gl_config, "config", "c", "config.toml", "load configuration file")

	var worker_cmd = &cobra.Command{
		Use:   "worker",
		Short: "Start a RabbitMQ consumer job",
		Run: func(cmd *cobra.Command, args []string) {
			if gl_debug {
				log.SetLevel(log.DebugLevel)
			} else {
				log.SetLevel(log.InfoLevel)
			}
			is_stopped()

			log.Debugf("run on debug mode")
			log.Debugf("load configuration from %s", gl_config)
			var config env.Config
			if _, err := toml.DecodeFile(gl_config, &config); err != nil {
				log.Fatalf("parse file: %s", err)
			}
			if err := launch_worker(config.RabbitMq.URI(), gl_worker_queue_name); err != nil {
				log.Fatal(err)
				return
			}
		},
	}
	worker_cmd.Flags().StringVarP(&gl_worker_queue_name, "queue", "q", env.QueueName(metasequoia_pb.EmailTask{}), "queue name")
	root_cmd.AddCommand(worker_cmd)

	var rpc_cmd = &cobra.Command{
		Use:   "rpc",
		Short: "Start a gRPC server",
		Run: func(cmd *cobra.Command, args []string) {
			if gl_debug {
				log.SetLevel(log.DebugLevel)
			} else {
				log.SetLevel(log.InfoLevel)
			}
			is_stopped()

			log.Debugf("run on debug mode")
			log.Debugf("load configuration from %s", gl_config)
			var config env.Config
			if _, err := toml.DecodeFile(gl_config, &config); err != nil {
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

			if err = launch_rpc_server(gl_rpc_port, aes, hmac, jwt, enforcer); err != nil {
				log.Fatalf("start gRPC server: %s", err)
			}
		},
	}
	rpc_cmd.Flags().IntVarP(&gl_rpc_port, "port", "p", 8080, "listen port")
	root_cmd.AddCommand(rpc_cmd)

	var http_cmd = &cobra.Command{
		Use:   "web",
		Short: "Start a HTTP server",
		Run: func(cmd *cobra.Command, args []string) {
			if gl_debug {
				log.SetLevel(log.DebugLevel)
			} else {
				log.SetLevel(log.InfoLevel)
			}
			is_stopped()

			log.Debugf("run on debug mode")
			log.Debugf("load configuration from %s", gl_config)
			var config env.Config
			if _, err := toml.DecodeFile(gl_config, &config); err != nil {
				log.Fatalf("parse file: %s", err)
			}
			if err := launch_http_server(gl_http_port); err != nil {
				log.Fatalf("start HTTP server: %s", err)
			}
		},
	}
	http_cmd.Flags().IntVarP(&gl_http_port, "port", "p", 8080, "listening port")
	root_cmd.AddCommand(http_cmd)
}

func is_stopped() {
	if _, err := os.Stat(".stop"); err == nil {
		log.Warn(".stop file exists, exiting...")
		os.Exit(0)
	}
}
