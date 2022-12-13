const http = require('node:http');
const fs = require('node:fs');
const ejs = require('ejs');
const url = require('node:url');

http.createServer(function(req, res) {
    
    fs.readFile("NodejsEX02_EJS.ejs", "utf-8", (err, data)=> {
        let {num} = url.parse(req.url, true).query;
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.end(ejs.render(data, {name: "홍길동", age: 22, num: num}));
    });

}).listen(8888, () => {
    console.log('Port 8888 Start');
});