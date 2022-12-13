const http = require('node:http');
const fs = require('node:fs');
const url = require('node:url');

http.createServer((req, res)=> {
    let pathname = url.parse(req.url).pathname;
    // console.log(pathname);

    switch(pathname)
    {
        case '/devCellmin': 
            fs.readFile('index.html', (err, data)=>{
                res.writeHead(200, {"Content-Type":"text/html"});
                res.end(data);
            });
            break;
        case '/html/login': 
            fs.readFile('./html/login.html', (err, data)=> {
                res.writeHead(200, {"Content-Type" : "text/html"});
                res.end(data);
            });
            break;
        case '/content': 
            break;
        default:
            fs.readFile('./html/notfound.html', (err, data)=> {
                res.writeHead(404);
                res.end(data);
            });
            break;
    }


}).listen(8888, ()=>{
    console.log('8888 Port Start');
});