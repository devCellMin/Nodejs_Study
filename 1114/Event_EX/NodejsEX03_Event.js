// Module Event

const ee = require('events');
exports.timer = new ee();

setInterval(() => {
    exports.timer.emit('today');
}, 1000);