#!/usr/bin/env bash
cd projects/candifood/core
npm version patch
cd ../../..
pwd
ng build @candifood/core --prod
pwd
cd dist/lib
pwd
npm publish --access public
cd ../../..
pwd
