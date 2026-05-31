docker compose -f self/docker-compose.postgres.yml up -d
docker compose -f self/docker-compose.redis.yml up -d

curl -fsSL https://bun.sh/install | bash

# 默认前端
cd web/default && bun install && bun run build && cd ../..
# 经典前端
cd web/classic && bun install && bun run build && cd ../..

export SQL_DSN="postgresql://postgres:postgres@127.0.0.1:5532/newtoapi"
export REDIS_CONN_STRING="redis://127.0.0.1:6679"
export TZ="Asia/Shanghai"

go build -o server . && ./server
