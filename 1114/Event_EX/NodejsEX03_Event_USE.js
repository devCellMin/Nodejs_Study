// Use Module Event

const myEvent = require('./NodejsEX03_Event'); // NodejsEX03_Event.js => Module Event

console.log(myEvent);

myEvent.timer.on('today', () => {
    let today = new Date();
    // console.log(today.toLocaleDateString() + " " + today.toLocaleTimeString());
    console.log(today.getTimezoneOffset());
});