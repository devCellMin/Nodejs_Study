const express = require('express');
const app = express(); // 서버 생성
const fs = require('node:fs');

// 미들 웨어 설정

// app.use(express.static(__dirname)); -> 파일 공유 경로 설정
app.use(express.static(__dirname));

app.use(function(req, res, next) {
    // res.writeHead(200, {"Content-Type":"text-html"});
    // res.end("<h1>Title</h1>");

    // Send => 다 해줌    
    // res.send("<h1>Title</h1>"); // 내용에 따라 헤더를 지정해 줌

    let arr = [];
    for(let i=0;i<4;i++) {
        arr.push({
            count: i,
            name: '홍길동'+i
        })
    }

    fs.readFile("index.html", (err, data)=> {
        res.send(data);
    });

});

// 서버 구동
app.listen(8888, ()=> {
    console.log('Start at Port 8888 ')
});