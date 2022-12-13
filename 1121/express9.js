const fs = require("fs");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();
app.use(cookieParser());//쿠키설정
app.use(bodyParser.urlencoded({extended: false}));
//post데이터로 전송되는 객체안의 객체 사용 여부 저장

/* {
    person:{
        name:'홍길동',
        age: 22
    }
} */

app.get("/", function(req,res){
    if(req.cookies.loginOK)
    {
        res.send('<h1>'+req.cookies.name + '님 환영합니다.</h1>');
    }
    else{
        res.redirect('/login');
    }
});

app.get("/login4", function(req,res){
    if(!req.cookies.loginOK){
        fs.readFile('login4.html',function(err, data){
            res.send(data.toString());
        });
    }
    else{
        res.redirect("/");
    }
});

app.post("/login4", function(req,res){
     //console.log(req.body);
    const userID = req.body['userID'];
    const userPWD = req.body['userPWD'];
    if (userID === 'tester' && userPWD === '5678') {
        res.cookie("loginOK", true);
        res.cookie("name", userID);
        res.redirect("/");
    } else {
        res.redirect("/login4");
    }
});

app.listen(8888, function() {
    console.log("run at 8888");
});