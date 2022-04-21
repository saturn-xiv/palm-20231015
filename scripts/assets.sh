#!/bin/sh

set -e

npm install --save marked moment moment-timezone d3 mermaid \
    bootstrap @popperjs/core \
    mdb-ui-kit@latest \
    swagger-ui-dist \
    bulma \
    tailwindcss@latest \
    @tabler/core \
    material-components-web material-design-icons @fontsource/roboto

echo 'done.'
exit 0
