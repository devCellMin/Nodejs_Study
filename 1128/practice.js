const http = require('node:http');
const fs = require('node:fs');
const socketIO = require('socket.io');

const server = http.createServer(function(req, res) {
    fs.readFile('practice.html', (err, data)=> {
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(data);
    });
}).listen(8888, ()=> {
    console.log("Port 8888 Started");
});

const io = socketIO.listen(server);
io.sockets.on("connection", function(socket) {
    socket.on('giveData', (data)=> {
        console.log(data);

        // // socket.emit의 방법
        // socket.emit('getData', `I'm ${data} from Server!`);

        // public 방법
        io.sockets.emit('getData', `I'm ${data} from Server!`);
    });
});