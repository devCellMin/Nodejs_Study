// USE NodeJS_Practice

const myEvent = require('./NodeJS_Practice');

let count = 0;
myEvent.timer.on('today', () => {
    let today = new Date();
    console.log(`${++count}`+ ". " +today.toLocaleDateString() + " / " + today.toLocaleTimeString());
});