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

let appInstance = wss.on('connection', function connection(ws, req) {

	console.log(`client connected from ${req.connection.remoteAddress}`);

	ws.on('message', function incoming(message) {
		console.log('received: %s', message);

		//const jsonObj = JSON.parse(message);

		//const replyText = `You sent '${jsonObj.sending}'`;

		//const replyJsonObj = { reply: replyText };

		//const jsonString = JSON.stringify(replyJsonObj);

		//ws.send(jsonString);

		ws.send(`You sent ${message}`);

		////var debug = { hello: "world" };
		////var blob = new Blob([JSON.stringify(debug, null, 2)], { type: 'application/json' });

		////ws.send(blob);
	});


	// Demonstrating sending a ping or daemon-style message on a regular basis
	setInterval(function () {

		const msg = "interval message";

		console.log(`universal: ${msg}`);

		const timestamp = getTimeStamp();

		const msgStr = JSON.stringify({ autoBroadcastMessage: msg, time: timestamp });

		ws.send(msgStr);

	}, 10000);

});


// util
function getTimeStamp() {

	return new Date().toISOString();
}

