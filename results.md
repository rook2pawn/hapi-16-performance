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




# hapi 14 (original)

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

# hapi 14 (no domains)

Results

	Requests per second:    6188.22 [#/sec] (mean)
	Time per request:       10.342 [ms] (mean)
	Time per request:       0.162 [ms] (mean, across all concurrent requests)
	Transfer rate:          21404.97 [Kbytes/sec] received
	Connection Times (ms)
	              min  mean[+/-sd] median   max
	Connect:        0    0   0.0      0       1
	Processing:     1   10   3.7      9      36
	Waiting:        1   10   3.7      9      36
	Total:          3   10   3.7      9      36


# hapi 16 (original)


Command

	ab -c 64 -n 100000 "http://127.0.0.1:3000/"


Results

	Requests per second:    4075.37 [#/sec] (mean)
	Time per request:       15.704 [ms] (mean)
	Time per request:       0.245 [ms] (mean, across all concurrent requests)
	Transfer rate:          14188.19 [Kbytes/sec] received
	Connection Times (ms)
	              min  mean[+/-sd] median   max
	Connect:        0    0   0.0      0       1
	Processing:     2   16   3.7     14      34
	Waiting:        1   16   3.7     14      34
	Total:          3   16   3.7     14      34



# hapi 16 (original - no domains)

Command

	ab -c 64 -n 100000 "http://127.0.0.1:3000/"

Results

	Requests per second:    5285.94 [#/sec] (mean)
	Time per request:       12.108 [ms] (mean)
	Time per request:       0.189 [ms] (mean, across all concurrent requests)
	Transfer rate:          18402.71 [Kbytes/sec] received
	Connection Times (ms)
	              min  mean[+/-sd] median   max
	Connect:        0    0   0.0      0       1
	Processing:     3   12   3.7     10      35
	Waiting:        3   12   3.7     10      34
	Total:          4   12   3.7     10      35


# hapi 16 (modified - no domains)

Command

	ab -c 64 -n 100000 "http://127.0.0.1:3000/"

Results

	Requests per second:    5446.11 [#/sec] (mean)
	Time per request:       11.751 [ms] (mean)
	Time per request:       0.184 [ms] (mean, across all concurrent requests)
	Transfer rate:          18960.35 [Kbytes/sec] received
	Connection Times (ms)
	              min  mean[+/-sd] median   max
	Connect:        0    0   0.0      0       1
	Processing:     1   12   3.9     10      35
	Waiting:        1   12   3.9     10      35
	Total:          3   12   3.9     10      35



# hapi 16 (modified) 

Command

	ab -c 64 -n 100000 "http://127.0.0.1:3000/"


Results

	Requests per second:    4169.51 [#/sec] (mean)
	Time per request:       15.350 [ms] (mean)
	Time per request:       0.240 [ms] (mean, across all concurrent requests)
	Transfer rate:          14515.91 [Kbytes/sec] received
	Connection Times (ms)
	              min  mean[+/-sd] median   max
	Connect:        0    0   0.0      0       1
	Processing:     2   15   4.5     13      39
	Waiting:        2   15   4.5     13      39
	Total:          3   15   4.5     13      39
