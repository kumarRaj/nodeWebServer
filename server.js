var http = require("http");
var lib = require('./library.js').lib;
var text,id,path,sum = 0;

var showOutput = function(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	text = request.url;
	id = require('url').parse(text,true);
	path = id.pathname.substr(1);
	if(path == "add2")
  		response.write('Sum is ' + lib.sum2(id.query));
  	if(path == "accumulate"){
  		sum = lib.accumulate(id.query,sum);
  		response.write('Accumulation ' + sum);
  	}
  	if(path == "reset")
  		sum = 0;
  	response.end();
}

http.createServer(showOutput).listen(8282);