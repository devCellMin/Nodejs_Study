// Module Event Practice

const me = require('events');
const { clearInterval } = require('timers');
exports.timer = new me();

// let moduleE = setInterval(() => {
//     exports.timer.emit('today');
// }, 1000);

let cnt = 0;
let moduleE = setInterval(() => {
    exports.timer.emit('today');
    // cnt++;
    // if(cnt == 10) {process.exit();}
    if((++cnt) == 10) {console.log('Bye~~!');clearInterval(moduleE);}
}, 1000);