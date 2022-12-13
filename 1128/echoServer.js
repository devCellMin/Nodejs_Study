const http = require("node:http");
const fs = require("node:fs");
const socketIO = require("socket.io");
const { userInfo } = require('node:os');

const server = http.createServer(function(req, res) {
    fs.readFile("echoClient.html", (error, data)=> {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });


}).listen(8888, ()=> {
    console.log("Port 8888 Start");
});


const io = socketIO.listen(server);
io.sockets.on('connection', function(socket) {
    // console.log(socket);
    
    // // private 방식
    // // 각각의 접속한 socket의 id를 출력
    // console.log(socket.id);
    // let id = socket.id;

    socket.on('test', function(data) {
        // console.log(data);
        // // socket.emit 방식 -> 해당 브라우저에만
        // socket.emit('reciveTest', `${data}`);

        // // public 방식 -> 모든 사용자에게
        // io.sockets.emit('reciveTest', `${data}`);

        // // brodcast 방식 -> 나를 제외한 모두에게
        // socket.broadcast.emit('reciveTest', `${data}`);

        // // private 방식 -> 1 vs 1로 보내는 방법
        // io.sockets.to(id).emit('reciveTest', `${data}`);
    });
});

// 채팅방 방법
// connect를 한 접속자들을 배열로 만든 후에, private의 경우 해당 접속자 배열에서 선택
// disconnect를 한 접속자의 경우, disconnect를 한 접속자를 배열에서 제거