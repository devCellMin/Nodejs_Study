// Make Circle with JS

const {PI} = Math;
// const PI = Math.PI;
// console.log(Math["PI"]);
// console.log(PI);

// 화살표 함수
// 인자가 하나일 경우 괄호를 생략
// 리턴문만 있을 경우 중괄호 생략

// exports.area = function (r) {
//     return PI * r * r;
// }

// exports.area = (r) => {
//     return PI * r * r;
// }

// 객체, 구조분해할당, 화살표함수
// 모듈
// exports.area = r => PI * r * r;
// exports.cf = r => PI * r * 2;
// exports.PI = PI;

module.exports = (r) => {
    return {
        area() {return PI * r * r; },
        cf() {return 2 * PI * r; },
        PI : PI
    }
};