#!/usr/bin/env bash

TAG=0
BASEDIR=$(dirname "$0")
echo "BASEDIR=$BASEDIR"
SRC_SCHEMATICS="project/candiman/website/src/schematics"
DIST_SCHEMATICS="dist/candiman/website/schematics"


if [ -n "$1" ]; then
  $TAG=${1}
  echo $TAG
  echo $1
fi

# version increase
cd projects/candiman/website
npm version patch
cd ../../..
pwd


ng build @candiman/website
echo "Angular module build done..."
npm run @candiman/website-schematics
echo "Schematics module build done..."
echo "==== Moving JSON files ====="


pwd
cp projects/candiman/website/src/schematics/collection.json dist/candiman/website/schematics/collection.json
cp projects/candiman/website/src/schematics/migration.json dist/candiman/website/schematics/migration.json
cp projects/candiman/website/src/schematics/website/schema.json dist/candiman/website/schematics/website/schema.json
cp -R projects/candiman/website/src/schematics/website/files dist/candiman/website/schematics/website/files
pwd


echo "----------"
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


echo "DONE..."
