package models

// https://wiki.archlinux.org/title/Systemd-networkd

import _ "embed"

type Wan struct{}

//go:embed wired.network
var tpl_wired_network string

type WiredNetwork struct {
	Name    string
	Dhcp    bool
	Address string
	Gateway string
	Dns     string
}

type Lan struct{}
