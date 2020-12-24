#!/bin/sh
docker rm --force board_mongo
docker run -dt --name board_mongo -p 27017:27017 -v /home/ubuntu/.board/dbdata:/data/db mongo