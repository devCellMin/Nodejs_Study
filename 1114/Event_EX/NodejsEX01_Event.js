// Exit Event Ex
process.on('exit', () => {
    console.log('Bye~~');
    
});

// 강제로 Exit Event를 실행
// 이벤트는 Handler를 실행시킴, 실제 프로그램을 종료시키지는 않는다.
// 프로그램을 실제로 종료 시키는 것은 process.exit() 이다.

// process.emit('exit');
setTimeout(() => {
    process.exit();
}, 5000);
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');
console.log('실행중...');