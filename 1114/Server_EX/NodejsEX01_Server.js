// Create Server

const http = require('http');
const fs = require("fs");

const server = http.createServer((request, response)=> {
    response.writeHead(200, {'Content-Type' : "text/html"});
    // response.end('<h1>Hello~</h1>');

    fs.readFile('index.html', (err, data)=> {
        response.end(data);
    });


});

// server 객체 안의 메서드
// listen(포트번호, 콜백함수) : 서버 실행
// close() : 서버 종료

// 일반적인 포트번호 : 80 (만단위까지 포트번호가 설정 가능하다)
// callback함수의 매개변수로 request와 resonse를 설정
server.listen(7777, ()=>{
    console.log('7777포트로 서버 실행');
});

server.on('close', ()=>{
    console.log("Server Close");
});

server.on('connection', ()=>{
    console.log('User Connected')
});

server.on('request', ()=>{
    console.log('Request');
});

// setTimeout(() => {
//     server.close();
// }, 10000);