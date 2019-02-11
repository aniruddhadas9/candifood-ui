#!/usr/bin/env bash
cd projects/candiman/website
npm version patch
cd ../../..
pwd
ng build @candiman/website
pwd
cd dist/candiman/website
pwd
npm publish --access public
cd ../../..
pwd
