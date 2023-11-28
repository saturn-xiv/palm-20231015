package main

import (
	"log"
	"os"

	"github.com/BurntSushi/toml"
	pgadapter "github.com/casbin/casbin-pg-adapter"
	"github.com/casbin/casbin/v2"
	rediswatcher "github.com/casbin/redis-watcher/v2"
	"github.com/redis/go-redis/v9"
)

type Config struct {
	IP string
}

func updateCallback(msg string) {
	log.Println(msg)
}

func main() {
	f := "example.toml"
	if _, err := os.Stat(f); err != nil {
		f = "_example/example.toml"
	}
	var config Config
	_, err := toml.DecodeFile(f, &config)
	if err != nil {
		os.Exit(1)
	}

	w, _ := rediswatcher.NewWatcher("localhost:6379", rediswatcher.WatcherOptions{
		Options: redis.Options{
			Network:  "tcp",
			Password: "",
		},
		Channel: "/casbin",
		// Only exists in test, generally be true
		IgnoreSelf: false,
	})
	// Initialize a Go-pg adapter and use it in a Casbin enforcer:
	// The adapter will use the Postgres database named "casbin".
	// If it doesn't exist, the adapter will create it automatically.
	a, _ := pgadapter.NewAdapter("postgresql://username:password@postgres:5432/database?sslmode=disable") // Your driver and data source.
	// Alternatively, you can construct an adapter instance with *pg.Options:
	// a, _ := pgadapter.NewAdapter(&pg.Options{
	//     Database: "...",
	//     User: "...",
	//     Password: "...",
	// })

	// The adapter will use the table named "casbin_rule".
	// If it doesn't exist, the adapter will create it automatically.

	// Or you can use an existing DB by adding a second string parameter with your database name to the NewAdapter(), like this:
	// a, _ := pgadapter.NewAdapter("postgresql://username:password@postgres:5432/database?sslmode=disable", "your_database_name")

	e, _ := casbin.NewEnforcer("examples/rbac_model.conf", a)
	// Set the watcher for the enforcer.
	_ = e.SetWatcher(w)

	// Set callback to local example
	_ = w.SetUpdateCallback(updateCallback)

	// Load the policy from DB.
	e.LoadPolicy()

	// Check the permission.
	e.Enforce("alice", "data1", "read")

	// Modify the policy.
	// e.AddPolicy(...)
	// e.RemovePolicy(...)

	// Save the policy back to DB.
	e.SavePolicy()
}
