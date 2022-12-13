const circle = require("./Circle.js");
const circle2 = require("./Circle2.js");

// console.log(circle);


// // 단순하게 각 각의 메소드와 변수를 exports로 해주었을 때는 따로 값을 넣는 것에 따라 모두 다르게 된다.
// console.log(circle.area(5));
// console.log(circle.cf(5));
// console.log(circle.PI);


// // module.exports의 경우 선언을 하면서 넣어주는 값만이 출력이 가능하다.
const myCircle = circle(5);
console.log(myCircle.area());
console.log(myCircle.cf());
console.log(myCircle.PI);

const myCircle2 = circle2();
console.log(myCircle2.area(5));
console.log(myCircle2.cf(3));
console.log(myCircle2.PI);