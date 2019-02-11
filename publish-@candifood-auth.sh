#!/usr/bin/env bash
cd projects/candiman/auth
npm version patch
cd ../../..
pwd
ng build @candiman/auth
pwd
cd dist/candiman/auth
pwd
npm publish --access public
cd ../../..
pwd
