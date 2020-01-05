var http = require('http');
var fs = require('fs');

var httpserver = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });   
});


const WebSocket = require('ws');
const ws_client = new WebSocket('ws://192.168.141.235:8088/ari/events?api_key=toto:pass1&app=hello&subscribeAll=true');

ws_client.on('error',function error(error){ 
    console.log(error);
})

var io_httpserver = require('socket.io')(httpserver);

io_httpserver.sockets.on('connection', function (mysocket) {
    ws_client.on('message',function show(data){
        mysocket.emit('titi',data); 
    })
  });

httpserver.listen(8080);