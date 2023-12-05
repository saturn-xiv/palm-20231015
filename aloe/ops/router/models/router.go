package models

import "time"

type User struct {
	Name     string
	Password string
}

type Log struct {
	Id        int32
	Level     string
	Message   string
	CreatedAt time.Time
}

type Client struct {
	Mac       string
	Ip        string
	Username  string
	Phone     string
	Password  string
	Role      string
	UpdatedAt time.Time
	CreatedAt time.Time
}
