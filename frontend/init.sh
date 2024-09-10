#! /bin/sh

yarn json -I -f package.json -e 'this.scripts.fleek="yarn fleek"'

yarn json -I -f package.json -e 'this.scripts.fleek="fleek"'
yarn json -I -f package.json -e 'this.scripts["fleek:login"]="fleek login"'
yarn json -I -f package.json -e 'this.scripts["fleek:deploy"]="NEXT_PUBLIC_PROD=true next build && fleek sites deploy"'