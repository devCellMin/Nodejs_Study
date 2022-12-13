const myModule = require("./CalcPakage");

console.log(myModule.clac.add(1, 2));
console.log(myModule.clac.minus(3, 1));
myModule.writeline.sayHello();
console.log(myModule.clac.power(2, 3));


const myModule2 = require("./Test");
console.log(myModule2.calc.calculate().add(1, 2));