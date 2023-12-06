package cmd

import (
	"embed"
	"fmt"
	"html/template"
	"net/http"

	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"

	"github.com/saturn_xiv/fig/env"
	metasequoia_controllers "github.com/saturn_xiv/fig/metasequoia/controllers"
)

//go:embed assets/*
var gl_assets_fs embed.FS

//go:embed templates/*
var gl_templates_fs embed.FS

func launch_http_server(port int, config *env.Config) error {
	address := fmt.Sprintf("0.0.0.0:%d", port)
	router := gin.Default()

	tpl := template.Must(template.New("").ParseFS(gl_templates_fs, "templates/*/*.html"))
	router.SetHTMLTemplate(tpl)
	router.StaticFS("/public", http.FS(gl_assets_fs))

	router.GET("/", metasequoia_controllers.Home())

	log.Infof("listen on http://%s", address)
	return router.Run(address)
}
