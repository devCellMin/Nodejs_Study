const http = require('node:http');
const fs = require('node:fs');
const socketIo = require('socket.io');

const server = http.createServer(function(req, res) {
    fs.readFile('chattingRoom.html', (err, data)=> {
        res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
        res.end(data);
    });
}).listen(8888, ()=> {
    console.log("Port 8888 Started");
});

let users = [];
let roomName = null;
const io = socketIo.listen(server);
io.sockets.on("connection", function(socket) {

    // console.log(socket.id);

    // Join Chatting Room
    socket.on('join', function(data) {
        
        // Room 설정
        roomName = data["roomName"];
        socket.join(roomName); // 방 이름이 같으면, 같은 group이 된다.

        // Add information in Users Array
        let user = {
            "name" : data["userName"],
            "id": socket.id
        };

        socket.emit('set', users);
        socket.emit('greeting', roomName);
        io.sockets.in(roomName).emit('add', user);
        users.push(user);
    });

    socket.on("message", function(data) {
        // to와 in이 같으나, 보통 room에서는 in, private를 to로 구분한다. 
        io.sockets.in(roomName).emit('message', data);
        // console.log(data);
    });

    socket.on("privateMessage", function(data) {
        socket.emit("message", data);
        data["toWho"].forEach(chatTarget => {
            io.sockets.to(chatTarget).emit("message", data);
        })
    });

    socket.on("disconnect", function() {
        let count = 0;
        users.forEach(items => {
            if(items["id"] == socket.id) {
                io.sockets.in(roomName).emit('deluser', count);
                users.splice(count,1);
                return;
            } count++;
        });
    });
});