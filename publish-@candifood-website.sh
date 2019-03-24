#!/usr/bin/env bash

TAG=0
if [ -n "$1" ]; then
  $TAG=${1}
  echo $TAG
  echo $1
fi


cd projects/candiman/website
npm version patch
cd ../../..
pwd
ng build @candiman/website
pwd
cd dist/candiman/website
pwd

if [ $TAG -nt 0 ];
then
  npm publish --access public --tag $TAG
else
  npm publish --access public
fi

cd ../../..
pwd
