// File System EX
// 비동기방식인 readFile를 활용한 File System

const fs = require("node:fs");

// fs.readFile("txt파일", "문장 인코딩", "Callback");
fs.readFile("sample.txt", "utf-8", function(error, data) {
    console.log(data);
});
console.log("====================END====================");