package env

import "fmt"

type RabbitMq struct {
	Host        string `toml:"host"`
	Port        uint16 `toml:"port"`
	User        string `toml:"user"`
	Password    string `toml:"password"`
	VirtualHost string `toml:"virtual-host"`
}

func (p *RabbitMq) URI() string {
	return fmt.Sprintf("amqp://%s:%s@%s:%d/%s", p.User, p.Password, p.Host, p.Port, p.VirtualHost)
}
