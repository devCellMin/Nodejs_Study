const http = require("http"); // 내장객체

http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type":
    "text/html"});
    response.write("<h1>Hello World!</h1>");
    response.end();
}).listen(8877, () => {
    console.log("Server running...");
});