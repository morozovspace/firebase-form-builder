#!/bin/bash
docker system prune -a -f --volumes
docker system df