#!/bin/bash
# 日志监视脚本

main() {
    tail -F ./logs/server.log | awk '
    /INFO/ {print "\033[32m" $0 "\033[39m"}
    /DEBUG/ {print $0}
    /WARN/ {print "\033[33m" $0 "\033[39m"}
    /TRACE/ {print "\033[36m" $0 "\033[39m"}
    /ERROR/ {print "\033[31m" $0 "\033[39m"}
    '
}

main
