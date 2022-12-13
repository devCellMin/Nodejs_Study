// console.log(__filename); // 실행 중인 파일 이름

// /* 전체 주석은 : alt + shift + A */

// console.log(__dirname); // 실행 중인 폴더 이름

const fs = require("node:fs");
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// Custom simple logger
const logger = new Console({ stdout: output, stderr: errorOutput });
// use it like console
const count = 5;
logger.log('count: %d', count);
// In stdout.log: count 5