const http = require('node:http');

// http.createServer((request, response)=> {
//     response.writeHead(200, {"Content-Type" : "text/html", 
//         "Set-Cookie": ["myValue1 = value1", "myValue2 = value2"]});

//     response.end(`<h1>${request.headers.cookie}</h1>`)
// }).listen(8888, ()=> {
//     console.log('Run at 8888');
// });

http.createServer((request, response)=> {
    response.writeHead(302, {Location : "http://www.naver.com"});
    response.end(`<h1>${request.headers.cookie}</h1>`)
}).listen(8888, ()=> {
    console.log('Run at 8888');
});