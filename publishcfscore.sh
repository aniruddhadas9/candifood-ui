#!/usr/bin/env bash
cd projects/candifood/core
npm version patch
cd ../../..
echo "should be /"
pwd
ng build @candifood/core --prod
echo 'should be /'
pwd
cd dist/@candifood/core
echo 'should be dist/@candifood/core'
pwd
npm publish --access public --tag beta
cd ../../..
echo 'should be /'
pwd
