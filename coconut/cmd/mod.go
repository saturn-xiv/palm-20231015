package cmd

import (
	"fmt"

	log "github.com/sirupsen/logrus"
	"github.com/spf13/cobra"
)

var (
	version      string
	author_email string
	repo_url     string
)

var root_cmd = &cobra.Command{
	Use:     "coconut",
	Short:   "Coconut",
	Long:    fmt.Sprintf("A collection of ops tools.(%s).", repo_url),
	Version: fmt.Sprintf("%s(%s)", version, author_email),
	Run: func(cmd *cobra.Command, args []string) {
		if gl_debug {
			log.SetLevel(log.DebugLevel)
		}
		log.Debugf("run on debug mode")
		log.Debugf("load config from %s", gl_config)
	},
}

func Execute() {
	if err := root_cmd.Execute(); err != nil {
		log.Fatal(err)
	}
}

var gl_debug bool
var gl_config string

func init() {
	root_cmd.PersistentFlags().BoolVarP(&gl_debug, "debug", "d", false, "run on debug mode")
	root_cmd.PersistentFlags().StringVarP(&gl_config, "config", "c", "config.toml", "load configuration file")
}
