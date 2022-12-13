// 환경설정에 되어 있는 프로그램
const {exec, execFile} = require('child_process');

exec("explorer");

// 크롬 켜기
execFile("C:/Program Files/Google/Chrome/Application/chrome.exe", 
    ["http://www.naver.com"], (error, stdout, stderr) => {
    if(error) {
        throw error;
    } else {
        console.log(stdout);
    }
});



// // 이유모를 실패
// // 환결성정에 되어있는 프로그램
// const {exec} = require('child_process');
// let count = 0;
// process.on('exit', () => {
//     exec('explorer');
//     console.log('End');
// });