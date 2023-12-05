package models

// https://wiki.archlinux.org/title/Systemd-networkd

import _ "embed"

type Wan struct{}

type WiredNetwork struct {
	Name    string
	Dhcp    bool
	Address string
	Gateway string
	Dns     string
}

type Lan struct{}
