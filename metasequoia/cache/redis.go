package cache

import (
	"context"
	"time"

	"github.com/redis/go-redis/v9"
)

type Redis struct {
	client    *redis.ClusterClient
	namespace string
}

func (p *Redis) Set(key string, value string, ttl time.Duration) error {
	ctx := context.Background()
	_, err := p.client.SetEx(ctx, key, value, ttl).Result()
	return err
}

func (p *Redis) Fetch(key string, handle func() (string, error), ttl time.Duration) (string, error) {
	ctx := context.Background()
	if val, err := p.client.Get(ctx, p.key(key)).Result(); err == nil {
		return val, nil
	}
	val, err := handle()
	if err != nil {
		return "", err
	}
	if _, err = p.client.SetEx(ctx, key, val, ttl).Result(); err != nil {
		return "", err
	}
	return val, nil
}

func (p *Redis) Get(key string) (string, error) {
	ctx := context.Background()
	return p.client.Get(ctx, p.key(key)).Result()
}

func (p *Redis) key(k string) string {
	return p.namespace + k
}

func NewRedisCache(options *redis.ClusterOptions, namespace string) (*Redis, error) {
	client := redis.NewClusterClient(options)
	{
		ctx := context.Background()
		if _, err := client.Ping(ctx).Result(); err != nil {
			return nil, err
		}
	}
	return &Redis{client: client, namespace: namespace}, nil
}
