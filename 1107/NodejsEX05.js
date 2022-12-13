// URL 모듈 EX

// // 방법 1
// const url = require("node:url");
// let naver = url.parse("http://www.naver.com/a/b/c?key1=test1&key2=test2#hash");
// console.log(naver);

// 방법 2
const {URL, parse} = require("node:url");
let naver = new URL("http://www.naver.com/a/b/c?key1=test1&key2=test2#hash");
// query부분을 Map객체로 리턴

let naver2 = parse("http://www.naver.com/a/b/c?key1=test1&key2=test2#hash", true);
// true로 사용하면 query부분을 배열로 리턴한다.

console.log(naver);
console.log(naver2);

console.log("\nGet Params");
console.log(naver.searchParams.get("key1"));
console.log(naver2.query.key1);
console.log(naver2.query["key2"]);