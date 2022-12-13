const myEvent = require('./NodeJS_Practice_ANS');

let count = 0;
myEvent.timer.on('today', () => {
    let today = new Date();
    console.log(`${++count}`+ ". " +today.toLocaleDateString() + " / " + today.toLocaleTimeString());
    if(count === 10) {

        // 이벤트 해제(취소)
        // removeAllListener('이벤트 이름', 핸들러 함수);
        // removeAllListeners('이벤트 이름')


        myEvent.timer.removeAllListeners('today');
        process.exit();
    }
});