const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser()); //쿠키 사용
app.get("/setCook", function(req, res) {
    res.cookie("man", "jo");
    res.cookie("human", {
        name: "kildong",
        surname: "Go",
        age: 22
    });
    res.redirect("/getCook");
});
app.get("/getCook", function(req, res) {
    let {name, surname, age} = req.cookies.human;
    res.send(`${req.cookies.man} <br>${name} ${surname} ${age}`);
});
app.listen(8888, function() {
    console.log("run at 8888");
});