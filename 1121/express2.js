//const { request, response } = require("express");
const { request } = require("express");
const express = require("express");
const app = express();
//http://localhost:8888?name=홍길동&age=22

app.use(function(req, res){
    let name = req.query.name;
    let age = req.query.age;
    // const {name, age} = request.query;
    res.send(`<h1>당신의 이름은 ${name}이며 나이는 ${age}입니다.</h1>`)
}).listen(8888, ()=>{
    console.log("run at 8888")
});