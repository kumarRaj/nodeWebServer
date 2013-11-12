var http = require("http");
var text,id;
var showOutput = function(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	text = request.url;
	id = require('url').parse(text,true);
  	response.write("Hello World" + text + 'hi' + JSON.stringify(id));
  	response.end();
}
http.createServer(showOutput).listen(8282);