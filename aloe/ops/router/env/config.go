package env

import "net"

type Config struct{}

type Wan struct {
	Device string
	Mac    string
	Metric uint
}

type Network struct {
	Address string
	Gateway string
	DNS     string
}

func (p *Network) CIDR() (net.IP, *net.IPNet, error) {
	return net.ParseCIDR(p.Address)
}

type Lan struct {
	Device  string
	Address string
}

func (p *Lan) CIDR() (net.IP, *net.IPNet, error) {
	return net.ParseCIDR(p.Address)
}

type Dmz struct {
	Device  string
	Address string
}

func (p *Dmz) CIDR() (net.IP, *net.IPNet, error) {
	return net.ParseCIDR(p.Address)
}

type Guest struct {
	Device  string
	Address string
}

func (p *Dmz) Guest() (net.IP, *net.IPNet, error) {
	return net.ParseCIDR(p.Address)
}
