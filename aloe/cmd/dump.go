package cmd

import (
	"fmt"
	"os"
	"time"

	log "github.com/sirupsen/logrus"

	"github.com/saturn_xiv/aloe/ops/router/env"
	"github.com/saturn_xiv/aloe/ops/router/models"
)

func launch_dump(config *env.Environment) error {
	ts := time.Now().Format("20060102150405")
	it, err := config.ToProfile()
	if err != nil {
		return err
	}
	{
		buf, err := models.Apply(it)
		if err != nil {
			return err
		}
		name := fmt.Sprintf("apply-%s.sh", ts)
		log.Infof("generate file %s", name)
		file, err := os.Create(name)
		if err != nil {
			return err
		}
		defer file.Close()
		if _, err = file.WriteString(buf); err != nil {
			return err
		}
		if err = os.Chmod(name, 0500); err != nil {
			return err
		}
	}
	{
		buf, err := models.Apply(it)
		if err != nil {
			return err
		}
		name := fmt.Sprintf("flush-%s.sh", ts)
		log.Infof("generate file %s", name)
		file, err := os.Create(name)
		if err != nil {
			return err
		}
		defer file.Close()
		if _, err = file.WriteString(buf); err != nil {
			return err
		}
		if err = os.Chmod(name, 0500); err != nil {
			return err
		}
	}
	return nil
}
