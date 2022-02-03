#!/bin/sh

set -e

yarn add marked moment moment-timezone d3 mermaid \
    bootstrap @popperjs/core \
    mdb-ui-kit \
    bulma \
    material-components-web material-design-icons @fontsource/roboto

echo 'done.'
exit 0
