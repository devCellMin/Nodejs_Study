const http = require('node:http');
const fs = require('node:fs');

http.createServer((request, response)=> {
    response.writeHead(404);
    fs.readFile('notfound.html', (err, data)=> {
        response.end(data);
    });
}).listen(8888, ()=> {
    console.log('Run at 8888');
});