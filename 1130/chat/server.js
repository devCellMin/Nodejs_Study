const http = require('node:http');
const fs = require('node:fs');
const socketIo = require('socket.io');
const index = 'Chatting.html';

const server = http.createServer((req, res)=> {
    fs.readFile(index, (err, data)=> {
        res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
        res.end(data);
    });
}).listen(8888,()=>{console.log('Port 8888 Started')});

// let cnt = 0;
const io = socketIo.listen(server);
io.sockets.on('connection', (socket)=> {
    
    // cnt++;
    // let data = {
    //     "msg":"Hi",
    //     "cnt":cnt
    // };
    // socket.on('greetings', ()=> {
    //     io.sockets.emit('greetings', data);
    // });

    socket.on('message', (data)=> {
        io.sockets.emit('message', data);
    });

});