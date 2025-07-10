#!/bin/bash

cd "$(dirname "$0")/queue-infra"

case "$1" in
  up)
    docker-compose up -d
    ;;
  down)
    docker-compose down
    ;;
  logs)
    docker-compose logs -f
    ;;
  ps)
    docker-compose ps
    ;;
  build)
    docker-compose up --build -d
    ;;
  *)
    echo "Uso: $0 {up|down|logs|ps|build}"
    exit 1
    ;;
esac 