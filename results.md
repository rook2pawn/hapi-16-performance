# results

# important! - eliminate as much TCP bottlenecking - TCP initial configuration

	sysctl net.ipv4.tcp_tw_recycle=1
	sysctl net.ipv4.tcp_tw_reuse=1 
	sysctl net.core.somaxconn=1024

	// and results of the following line should be empty

	ss -tapo4 (t for TCP, a for all states,  p for show connected process, 4 for ipv4)

# vanilla (establishing an upper bound)

	require('http').createServer((req,res) => {
	  res.end(); 
	}).listen(3000);

Command

	ab -c 64 -n 100000 "http://127.0.0.1:3000/"

Results

	Requests per second:    21073.95 [#/sec] (mean)
	Time per request:       3.037 [ms] (mean)
	Time per request:       0.047 [ms] (mean, across all concurrent requests)
	Transfer rate:          1543.50 [Kbytes/sec] received
	Connection Times (ms)
	              min  mean[+/-sd] median   max
	Connect:        0    0   0.3      0       2
	Processing:     1    3   0.4      3       6
	Waiting:        1    3   0.5      3       6
	Total:          2    3   0.3      3       6




# hapi 14 

Command

	ab -c 64 -n 100000 "http://127.0.0.1:3000/"


Results 

	Requests per second:    4875.84 [#/sec] (mean)
	Time per request:       13.126 [ms] (mean)
	Time per request:       0.205 [ms] (mean, across all concurrent requests)
	Transfer rate:          16865.47 [Kbytes/sec] received
	Connection Times (ms)
	              min  mean[+/-sd] median   max
	Connect:        0    0   0.0      0       1
	Processing:    10   13   4.3     11      48
	Waiting:       10   13   4.3     11      48
	Total:         10   13   4.3     11      49


# hapi 16 (original)


Command

	ab -c 64 -n 100000 "http://127.0.0.1:3000/"


Results

	Requests per second:    3894.32 [#/sec] (mean)
	Time per request:       16.434 [ms] (mean)
	Time per request:       0.257 [ms] (mean, across all concurrent requests)
	Transfer rate:          13557.87 [Kbytes/sec] received
	Connection Times (ms)
	              min  mean[+/-sd] median   max
	Connect:        0    0   0.0      0       2
	Processing:    13   16   4.3     14      68
	Waiting:       13   16   4.3     14      68
	Total:         13   16   4.3     14      69


# hapi 16 (modified) 

Command

	ab -c 64 -n 100000 "http://127.0.0.1:3000/"


Results

	Requests per second:    4209.57 [#/sec] (mean)
	Time per request:       15.203 [ms] (mean)
	Time per request:       0.238 [ms] (mean, across all concurrent requests)
	Transfer rate:          14655.37 [Kbytes/sec] received
	Connection Times (ms)
	              min  mean[+/-sd] median   max
	Connect:        0    0   0.0      0       1
	Processing:     2   15   4.1     13      39
	Waiting:        1   15   4.1     13      39
	Total:          3   15   4.1     13      39
