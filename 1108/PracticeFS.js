// Prcatice with File System
const fs = require("node:fs");

// // 1. 동기 방식의 FS - readFileSync()
// // fs.readFileSync("File_Name.txt", "Encoding");
// let contents = fs.readFileSync("sample.txt", "utf-8");
// console.log(contents);
// console.log("동기방식의 FS 예제 끝");

// // 2. 비동기 방식의 FS - readFile()
// // fs.readFile("File_Name", "Encoding", CallbackFunction);
// fs.readFile("sample.txt", "utf-8", function(error, data) {
//     console.log(data);
// });
// console.log("비동기 방식의 FS 끝");