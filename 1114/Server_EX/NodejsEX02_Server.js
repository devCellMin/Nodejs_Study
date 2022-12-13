
const fs = require('fs');
const http = require('http');
const server = http.createServer((request, response)=>{
    fs.readFile('img/back1.jpg', (err, data)=> {
        response.writeHead(200, {"Content-Type" : "image"});
        response.end(data);
    });
});

server.listen(7777, ()=> {
    console.log("7777포트로 시작합니다.");
});

const server2 = http.createServer((request, response)=>{
    fs.readFile('mp3/igo.mp3', (err, data)=> {
        response.writeHead(200, {"Content-Type" : "audio/mpeg"});
        response.end(data);
    });
});

server2.listen(7778, ()=> {
    console.log('7778포트로 시작합니다.');
});

const server3 = http.createServer((request, response)=>{
    fs.readFile('index.html', (err, data)=> {
        response.writeHead(200, {"Content-Type" : "text/html"});
        response.end(data);
    });
});

server3.listen(7776, ()=> {
    console.log('7776포트로 시작합니다.')
})