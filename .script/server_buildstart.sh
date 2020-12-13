#!/bin/sh

cd fe
yarn build
cd ../
node -r esm src # start server