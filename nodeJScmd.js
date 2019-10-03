var http = require('http');
var st;
http.createServer(function (req, res) {

const { exec } = require('child_process');
exec('df -h', (err, stdout, stderr) => {
  if (err) {
    //some err occurred
    console.error(err)
  } else {
   // the *entire* stdout and stderr (buffered)
   console.log(`stdout: ${stdout}`);
   console.log(`stderr: ${stderr}`);
	  st=stdout;
  }
});

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(st);
}).listen(3000, "192.168.64.17");
console.log('Server running at http://192.168.64.17:3000/');
