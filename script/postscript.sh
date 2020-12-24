#!/bin/bash

PIDFILE='/home/ubuntu/.board/node.pid'
LOGFILE='/home/ubuntu/.board/node.log'

export MONGO_URI='mongodb://localhost:27017/board'
export PORT='8080'

source ~/.nvm/nvm.sh
nvm use --lts
cd ~/qlqhqo2341board
yarn install
node -r esm src/index.js > ${LOGFILE} 2>&1 &
echo $! > ${PIDFILE}
