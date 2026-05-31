#!/bin/bash
# 日志监视脚本

main() {
    tail -F ./logs/nohup.log
}

main
