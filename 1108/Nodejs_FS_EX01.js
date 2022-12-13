// File System EX
// 동기방식인 readFileSync를 활용한 File System

const fs = require("node:fs");

let contents = fs.readFileSync("readfilesync.txt", "utf-8");
console.log(contents);
console.log("====================END====================");