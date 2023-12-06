package cmd

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"

	"github.com/saturn_xiv/aloe/ops/router/env"
	"github.com/saturn_xiv/aloe/ops/router/models"
)

func launch_rpc_server(config *env.Rpc, port int) error {
	db, err := gorm.Open(sqlite.Open("tmp/db"), &gorm.Config{})
	if err != nil {
		return err
	}
	if err = db.AutoMigrate(&models.Log{}, &models.Client{}); err != nil {
		return err
	}
	return nil
}
