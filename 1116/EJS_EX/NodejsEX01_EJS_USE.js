const http = require('node:http');
const fs = require('node:fs');
const ejs = require('ejs');

http.createServer(function(req, res) {
    fs.readFile("NodejsEX01_EJS.ejs", "utf-8", (err, data)=> {
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.end(ejs.render(data));
    });
}).listen(8888, () => {
    console.log('Port 8888 Start');
});