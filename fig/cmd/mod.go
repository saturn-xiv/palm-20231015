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
	Use:     "metasequoia",
	Short:   "Metasequoia",
	Long:    fmt.Sprintf("A total free education & translation & ops solution(%s).", repo_url),
	Version: fmt.Sprintf("%s(%s)", version, author_email),
	Run: func(cmd *cobra.Command, args []string) {
		// Do Stuff Here
	},
}

func Execute() {
	if err := root_cmd.Execute(); err != nil {
		log.Fatal(err)
	}
}
