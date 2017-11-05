require('http').createServer((req,res) => {
  var x = 0;
  x++; 
  res.end(); 
}).listen(3000);

