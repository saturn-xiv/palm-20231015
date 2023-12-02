package cmd

import (
	"fmt"

	log "github.com/sirupsen/logrus"
	"github.com/spf13/cobra"
)

var (
	gl_version      string
	gl_build_time   string
	gl_author_name  string
	gl_author_email string
	gl_repo_url     string
)

var root_cmd = &cobra.Command{
	Use:     "metasequoia",
	Short:   "Metasequoia",
	Long:    fmt.Sprintf("A total free education & translation & ops solution(%s).", gl_repo_url),
	Version: fmt.Sprintf("%s(%s) build by %s<%s>", gl_version, gl_build_time, gl_author_name, gl_author_email),
	Run: func(cmd *cobra.Command, args []string) {
		// Do Stuff Here
	},
}

func Execute() {
	if err := root_cmd.Execute(); err != nil {
		log.Fatal(err)
	}
}
