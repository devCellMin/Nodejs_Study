const fs = require("node:fs");

// 동기 방식 writeFileSync()
fs.writeFileSync("temp1.txt", "우리나라 대한민국", "utf-8");

// 비동기 방식 writeFile()
fs.writeFile("temp2.txt", "우리나라 대한민국", "utf-8", function(error){
    console.log("end");
});

