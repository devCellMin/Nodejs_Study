const http = require('node:http');
const fs = require('node:fs');
const socketIo = require('socket.io');

const server = http.createServer(function(req, res) {
    fs.readFile('chattingPage.html', (err, data)=> {
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(data);
    });
}).listen(8888, ()=> {
    console.log("Port 8888 Start");
});


const io = socketIo.listen(server);
io.sockets.on("connection", function(socket) {

    socket.on('test', function(data) {
        io.sockets.emit('resiveData', `${data}`);
    });

});