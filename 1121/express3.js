const express = require("express");

const app = express();

app.use(function(req, res, next){
    console.log("미들웨어1");
    next();
});

app.use(function(req, res, next){
    console.log("미들웨어2");
    next();
});

app.use(function(req, res, next){
    console.log("미들웨어3");
    res.status(200).send("<h1>사용자에게 표시</h1>");
});

app.listen(8888, function(){
    console.log("run at 8888");
});