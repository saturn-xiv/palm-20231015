package models

import "time"

type Log struct {
	Id        int32
	Message   string
	CreatedAt time.Time
}
