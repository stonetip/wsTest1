//const WebSocket = require("ws");

//const ws = new WebSocket("wss://echo.websocket.org");

//ws.on("open", function open() {
//	ws.send("something");
//});

//ws.on("message", function incoming(data) {
//	console.log(`message from remote server: ${data}`);
//});


//setTimeout(function () {

//	ws.send("here's another message");
//}, 2000);


const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 7856 });


console.log(`ws test is running on port ${wss.address().port}`);

let appInstance = wss.on('connection', function connection(ws) {

	ws.on('message', function incoming(message) {
		console.log('received: %s', message);
	});

	ws.send('something');
});