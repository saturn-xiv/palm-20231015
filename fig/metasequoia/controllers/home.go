package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Home() gin.HandlerFunc {
	return func(c *gin.Context) {
		// TODO
		c.HTML(http.StatusOK, "home.html", gin.H{
			"title": "Hello palm",
		})
	}
}
