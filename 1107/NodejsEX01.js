// console.log(process);
// console.log(process.version);
// console.log(process["version"]);
// console.log(process.versions.ares);

let myObject = {
    name : "text",
    version : "1.0.0",
    getVersion() {
        return this.version;
    }
};
console.log(myObject);

myObject.age = 99;

console.log(myObject);
console.log(myObject.getVersion());


