const express = require("express");

const app = express();
app.get("/", function(req, res){
    res.send("<a href='/a'>A페이지</a>&nbsp;<a href='/b'>B페이지</a>");
});
app.get("/a", function(req, res){
    res.send("<a href='/'>Main페이지</a>&nbsp;<a href='/b'>B페이지</a>");
});
app.get("/b", function(req, res){
    res.send("<a href='/'>Main페이지</a>&nbsp;<a href='/a'>A페이지</a>");
});

app.all("*", function(req, res){
    res.status(404).send("<h1>404! Not Found.</h1>");
});

app.listen(8888, ()=>{
    console.log("run at 8888");//에러
});

/*
    http://localhost:8888/ : main 페이지
    http://localhost:8888/a : A페이지
    http://localhost:8888/b : B페이지
*/