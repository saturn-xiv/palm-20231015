package env

import (
	"os"

	"github.com/pelletier/go-toml/v2"
)

type Rpc struct {
	Secrets string
}

func NewRpc(name string) (*Rpc, error) {
	file, err := os.Open(name)
	if err != nil {
		return nil, err
	}
	defer file.Close()
	decoder := toml.NewDecoder(file)
	var it Rpc
	if err = decoder.Decode(&it); err != nil {
		return nil, err
	}
	return &it, err
}
