const me = require('events');
exports.timer = new me();

let count = 0;

let moduleE = setInterval(() => {
    // if(++count === 10) {
    //     clearInterval(moduleE);
    // }
    exports.timer.emit('today');
}, 1000);