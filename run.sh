#!/bin/sh

dowork()
{
	startpt
	startss
}
startss()
{
	while true
	do
		pid=`ps x |grep $PWD/server | sed -e '/grep/d' | gawk '{print $1}'`
		if [ "$pid" = "" ]; then
			echo "server stop complete"
			break
		else
			echo "waiting server stop"
		fi
		sleep 1
	done
	echo "starting server"
	current_time=$(date "+%Y-%m-%d%H:%M:%S")
	nohup chmod u+x $PWD/server
	# nohup $PWD/server > logs/nohup.log.$current_time 2>&1 &
	nohup $PWD/server > logs/nohup.log 2>&1 &
	sleep 1
	ps x|grep "server"|sed -e '/grep/d'
}
stopss()
{
	ps x |grep $PWD/server | sed -e '/grep/d' | gawk '{print "panic."$1}' | xargs rm -v
	ps x |grep $PWD/server | sed -e '/grep/d' | gawk '{print $1}' | xargs kill
	echo "stop server"
	while true
	do
		pid=`ps x |grep $PWD/server | sed -e '/grep/d' | gawk '{print $1}'`
		if [ "$pid" = "" ]; then
			echo "server stop complete"
			break
		else
			echo "waiting server stop"
		fi
		sleep 1
	done
}

echo "--------------------------------------------------"
echo "--------------------START-------------------------"
echo "--------------------------------------------------"
#pkill -9 watch.sh -u `whoami`
#nohup ./watch.sh &
case $1 in
    stop)
        stopss
        ;;
    start)
        stopss
        sleep 1
        startss
        ;;
    restart)
        stopss
        sleep 1
        startss
        ;;

    *)
        echo "Usage: run.sh {start|stop|restart}"
        ;;
esac
echo "--------------------------------------------------"
echo "----------------------DONE------------------------"
echo "--------------------------------------------------"

