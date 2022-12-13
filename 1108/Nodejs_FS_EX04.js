// FS Error Handling

const fs = require("node:fs");

// // 동기 예외 처리 [try{} catch(error) {}]
// try {
//     let txt = fs.readFileSync("sample.txt", "utf-8");
//     console.log(txt);
// } catch(error) {
//     console.log(error);
// }

// // 비동기 예외 처리
// fs.readFile("sample.txt", "utf-8", (error, data) => {
//     if(error) {
//         console.log(error);
//         return; // 에러가 나면 함수가 종료된다.
//     }
//     console.log(data);
//     // else문 없이 정상적으로 처리가 가능하다.
// });

// // boolean 값에서 true, false(0, null, undifined, "")
// console.log(Boolean(NaN));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));

// console.log(Boolean(1));
// console.log(Boolean('test'));