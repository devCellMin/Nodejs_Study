const fs = require('node:fs');
const http = require('node:http');
const jade = require('jade');
const url = require('node:url');

http.createServer((req, res)=> {
    fs.readFile("NodejsEX01_JADE.jade", "utf-8", (err, data)=> {
        // 함수 리턴
        const fn = jade.compile(data);

        let {num} = url.parse(req.url, true).query;
        if(num === undefined) {
            num = -1;
        }

        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(fn({
            name: "홍길동",
            age: 22,
            num: num
        }));
    });

}).listen(8888, ()=> {
    console.log('Port Number 8888 Start');
});