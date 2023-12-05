package models

import (
	"bytes"
	_ "embed"
	"text/template"

	ops_router_v2 "github.com/saturn_xiv/aloe/ops/router/v2"
)

//go:embed flush.sh
var tpl_flush_sh string

//go:embed apply.sh
var tpl_apply_sh string

func Apply(config *ops_router_v2.Profile) (string, error) {
	return generate_script(tpl_apply_sh, config)
}

func Flush(config *ops_router_v2.Profile) (string, error) {
	return generate_script(tpl_flush_sh, config)
}

func generate_script(text string, config *ops_router_v2.Profile) (string, error) {
	tpl, err := template.New("").Parse(text)
	if err != nil {
		return "", err
	}
	var buf bytes.Buffer
	if err = tpl.Execute(&buf, config); err != nil {
		return "", err
	}
	return buf.String(), nil
}
