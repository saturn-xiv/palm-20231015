package env

import (
	"fmt"

	"github.com/redis/go-redis/v9"
)

type Redis struct {
	Nodes     []RedisNode `toml:"nodes"`
	Namespace string      `toml:"namespace"`
}

func (p *Redis) Addrs() []string {
	items := make([]string, 0)
	for _, it := range p.Nodes {
		items = append(items, fmt.Sprintf("%s:%d", it.Host, it.Port))
	}
	return items
}

func (p *Redis) Options() redis.ClusterOptions {
	return redis.ClusterOptions{Addrs: p.Addrs()}
}

type RedisNode struct {
	Host string `toml:"host"`
	Port uint16 `toml:"port"`
}
