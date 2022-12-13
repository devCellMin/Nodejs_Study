const http = require('node:http');
const fs = require('node:fs');
const socketIo = require('socket.io');
const { isObject } = require('node:util');

const server = http.createServer(function(req, res) {
    fs.readFile('roomClient.html', function(err, data) {
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(data);
    });
}).listen(8888, ()=> {
    console.log("Start with Port 8888");
});

const io = socketIo.listen(server);
io.sockets.on('connection', function(socket) {
    let roomName = null;

    socket.on('join', function(data) {
        roomName = data;
        // Room 설정
        socket.join(roomName); // 방 이름이 같으면, 같은 group이 된다.
    });

    socket.on('message', function(data) {
        // to와 in이 같으나, 보통 room에서는 in, private를 to로 구분한다. 
        io.sockets.in(roomName).emit('message', 'Hello World~~!');
        // io.sockets.to(roomName).emit('message', 'Hello World~~!');
        // io.sockets.in(roomName).emit('message', `${data}`);
    });

});

io.sockets.on('disconnection', function(socket) {

});