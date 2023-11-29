package main

import (
	"flag"
	"log"

	"github.com/BurntSushi/toml"
	pgadapter "github.com/casbin/casbin-pg-adapter"
	"github.com/casbin/casbin/v2"
	rediswatcher "github.com/casbin/redis-watcher/v2"
	"github.com/go-pg/pg/v10"

	"github.com/saturn_xiv/palm/metasequoia/env"
)

func updateCallback(msg string) {
	log.Println(msg)
}

func main() {

	var port int
	var config_file string

	flag.IntVar(&port, "port", 8080, "listening port")
	flag.StringVar(&config_file, "config", "config.toml", "configuration file")
	flag.Parse()

	logger := log.Default()
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

	pg_options := config.Postgresql.Options()
	pg_db := pg.Connect(&pg_options)
	defer pg_db.Close()

	adapter, err := pgadapter.NewAdapterByDB(pg_db)
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

}
