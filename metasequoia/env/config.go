package env

import (
	"fmt"

	"github.com/go-pg/pg/v10"
	"github.com/redis/go-redis/v9"
)

type Config struct {
	Redis      Redis      `toml:"redis"`
	Postgresql PostgreSql `toml:"postgresql"`
	RabbitMq   RabbitMq   `toml:"rabbitmq"`
}

type Redis struct {
	Host string `toml:"host"`
	Port uint16 `toml:"port"`
	Db   int    `toml:"db"`
}

func (p *Redis) Addr() string {
	return fmt.Sprintf("%s:%d", p.Host, p.Port)
}

func (p *Redis) Options() redis.Options {
	return redis.Options{
		Network:  "tcp",
		Password: "",
		Addr:     p.Addr(),
		DB:       p.Db,
	}
}

type PostgreSql struct {
	Host     string `toml:"host"`
	Port     uint16 `toml:"port"`
	DbName   string `toml:"dbname"`
	User     string `toml:"user"`
	Password string `toml:"password"`
}

func (p *PostgreSql) Options() pg.Options {
	return pg.Options{
		Network:   "tcp",
		Database:  p.DbName,
		User:      p.User,
		Password:  p.Password,
		Addr:      fmt.Sprintf("%s:%d", p.Host, p.Port),
		TLSConfig: nil,
	}
}

type RabbitMq struct {
	Host        string `toml:"host"`
	Port        uint16 `toml:"port"`
	User        string `toml:"user"`
	Password    string `toml:"password"`
	VirtualHost string `toml:"virtual-host"`
}
