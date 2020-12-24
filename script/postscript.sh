#!/bin/bash

PIDFILE='/home/ubuntu/.board/node.pid'
LOGFILE='/home/ubuntu/.board/node.log'

export MONGO_URI='mongodb://localhost:27017/board'
export PORT='8080'

cd ~/qlqhqo2341board
yarn install
npm start & > ${LOGFILE} 2>&1 &;
echo $! > ${PIDFILE}
