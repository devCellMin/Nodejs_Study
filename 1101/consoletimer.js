// 프로그램 실행 시간 측정
console.time("chkTimer");
let output = 1;
for (let i = 1; i < 100; i++) {
    output *= i;
}
console.log(`결과: ${output}`);
console.timeEnd("chkTimer");