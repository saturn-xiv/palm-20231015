package cache

import "time"

type Cache interface {
	Set(key string, value string, ttl time.Duration) error
	Get(key string) (string, error)
	Fetch(key string, handle func() (string, error), ttl time.Duration) (string, error)
}
