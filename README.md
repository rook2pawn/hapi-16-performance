# install

    npm install

# run original

    npm run original

    // then in separate terminal

    ab -c 64 -n 100000 "http://127.0.0.1:3000/"


# run faster

    npm run faster 

    // then in separate terminal

    ab -c 64 -n 100000 "http://127.0.0.1:3000/"

# important! 

## benchmarking is useless if you are bottlenecked by your TCP configurations!

we want to amplify the basic behavior of the responding code so that means our new benchmark is 

	ab -c 64 -n 100000 "http://127.0.0.1:3000/"

## how do i know if my system is TCP bottlenecked?


** node server.js **

	var http = require('http');
	http.createServer((req,res) => { res.end(); }).listen(3000)

** then run this ** 

	ab -c 64 -n 100000 "http://127.0.0.1:3000/"

If it starts to choke up somewhere early on, you're bottlenecked!

## background TCP information

For instance, on a *4.11.0-1-amd64 #1 SMP Debian 4.11.6-1 (2017-06-19) x86_64 GNU/Linux* box, all the information about your TCP is in 

	/proc/sys/net/ipv4

This can be accessed through a tool like *sysctl* which generalizes this location and allows read/update of these values

## local port range and fin_timeout, max sustainable sockets per seconds


	sysctl net.ipv4.ip_local_port_range // 32768	60999
	sysctl net.ipv4.tcp_fin_timeout // 60


You can see all the open ports through the *ss* tool

	ss -tapo4  // t for TCP, a for all, p for show process connected, 4 for ipv4


Calculating your max sustainable sockets per second  is

	local port range / tcp timeout. 

So on my machine, i have (60999-32768) / 60 = 28231 / 60 = 470 sockets per second

We can improve this.


## recycle, reuse

Additionally, these values

	sysctl net.ipv4.tcp_tw_recycle  // 0
	sysctl net.ipv4.tcp_tw_reuse  // 0 

These do not allow a connection from a "used" socket (in wait state) and force the sockets to last the complete time_wait cycle.
Not what we want.


	sysctl net.ipv4.tcp_tw_recycle=1
	sysctl net.ipv4.tcp_tw_reuse=1 

This allows fast cycling of sockets in time_wait state and re-using them. 


## maxconn

sysctl net.core.somaxconn=1024

// defaults 128


