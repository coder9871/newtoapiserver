#!/usr/bin/env bash
#
# build_self.sh
# 构建极简前端主题 web/minimal，覆盖到 classic 通道（web/classic/dist），并编译后端。
#
# 设计说明：
#   后端通过 //go:embed web/classic/dist 加载前端产物，并按数据库 theme.frontend=classic
#   选择 classic 通道。本脚本把 web/minimal 的构建产物覆盖写入 web/classic/dist，
#   因此后端无需任何改动，theme.frontend 保持 classic 即可加载极简前端。
#
# 用法：
#   bash build_self.sh
#   # 或赋予可执行权限后直接运行：
#   chmod +x build_self.sh && ./build_self.sh
#
set -euo pipefail

# 定位项目根目录（脚本所在目录），使脚本可从任意位置调用
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

echo "==> [1/4] 安装 web/minimal 依赖"
cd "$ROOT_DIR/web/minimal"
bun install

echo "==> [2/4] 构建 web/minimal 前端"
if [ -f "$ROOT_DIR/VERSION" ]; then
  VITE_REACT_APP_VERSION="$(cat "$ROOT_DIR/VERSION")" bun run build
else
  bun run build
fi

echo "==> [3/4] 覆盖产物到 web/classic/dist（后端走 classic 通道加载）"
cd "$ROOT_DIR"
rm -rf web/classic/dist
cp -r web/minimal/dist web/classic/dist

echo "==> [4/4] 编译后端"
go build -o server

chmod u+x server

echo "ALL_DONE"
