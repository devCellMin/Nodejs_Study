const http = require('node:http');
const url = require('node:url');
const fs = require('node:fs');

http.createServer((req, res)=> {
    console.log(req.method);
    if(req.method === "GET") {
        // console.log("GET"); // 선택
        let query = url.parse(req.url, true).query;
        console.log(query.key2);

        fs.readFile('./html/login.html', (err, data)=> {
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(data);
        });

    } else if(req.method === "POST") {
        // console.log("POST"); // 값 입력
        req.on('data', function(data) {
            // console.log(data);
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(data);
        });
    }

}).listen(8888, ()=> {
    console.log('8888 Start');
});