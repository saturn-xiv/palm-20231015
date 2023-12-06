package env

import (
	"net"
	"os"

	"github.com/pelletier/go-toml/v2"
	ops_router_v2 "github.com/saturn_xiv/aloe/ops/router/v2"
)

type Environment struct {
	Hostname string `toml:"hostname"`
	Wan      []Wan  `toml:"wan"`
	Dmz      Dmz    `toml:"dmz"`
	Lan      Lan    `toml:"lan"`
	Guest    Guest  `toml:"guest"`
}

func NewEnvironment(name string) (*Environment, error) {
	file, err := os.Open(name)
	if err != nil {
		return nil, err
	}
	defer file.Close()
	decoder := toml.NewDecoder(file)
	var it Environment
	if err = decoder.Decode(&it); err != nil {
		return nil, err
	}
	return &it, err
}

func (p *Environment) ToProfile() (*ops_router_v2.Profile, error) {
	var it ops_router_v2.Profile
	it.Hostname = p.Hostname
	for _, _wan := range p.Wan {
		it.Network.Wan = append(it.Network.Wan, &ops_router_v2.Profile_Network_Wan{})
	}
	return &it, nil
}

type Wan struct {
	Device  string  `toml:"device"`
	Metric  uint    `toml:"metric"`
	Network Network `toml:"network"`
}

type Network struct {
	Dhcp    bool   `toml:"dhcp"`
	Address string `toml:"address"`
	Gateway string `toml:"gateway"`
	DNS     string `toml:"dns"`
}

func (p *Network) CIDR() (net.IP, *net.IPNet, error) {
	return net.ParseCIDR(p.Address)
}

type Lan struct {
	Device  string `toml:"device"`
	Address string `toml:"address"`
}

type Dmz struct {
	Device  string `toml:"device"`
	Address string `toml:"address"`
}

type Guest struct {
	Device  string `toml:"device"`
	Address string `toml:"address"`
}
