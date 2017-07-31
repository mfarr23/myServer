var http = require("http");

var PORT = 7000;

function handleRequest(request, response) {
	response.end("You're awesome mfarr23");
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {

  console.log("Server listening on: http://localhost:%s", PORT);

});


var PORT2 = 7500;

function handleSecondRequest(request, response) {
	response.end("Remember! You can always learn more");
}

var server2 = http.createServer(handleSecondRequest);

server2.listen(PORT2, function() {
  console.log("Server listening on: http://localhost:%s", PORT2);
})