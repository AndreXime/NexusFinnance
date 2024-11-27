#!/bin/bash

docker compose start database

cd Server
npm run build
npm run start

cd ..
cd Client
npm run dev