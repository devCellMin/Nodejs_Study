// Customer Evnents

// // ce = Customer Evnet
// const ce = require('node:events');
// console.log(ce);

// Event Emitter
const EventEmitter = require('events');
const ce = new EventEmitter();

ce.on('myEvent', (code) => {
    console.log(code);
});

ce.emit('myEvent');