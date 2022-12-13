//app.js
const fs = require("fs");
const ejs = require("ejs");
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

const client = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
});

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

//get("/"): list
//get("/insert"): 값을 넣는 페이지 표시
//post("/insert"): 값을 DB에 넣음
//get("/edit/:id"): 수정하는 페이지 표시
//post("/edit/:id"): DB 수정
//get("/delete/:id"): 삭제
app.listen(process.env.PORT, function() {
    console.log(`run at ${process.env.PORT}`);
});

app.get("/", function(req, res) {
    fs.readFile('list.html', "utf8", function(err, data) {
        client.query('select * from member', function(error, result){
            res.send(ejs.render(data, {
                result: result
            }));
        });
    });
});

app.get("/user", function(req, res) {
    fs.readFile("insert.html", "utf8", function(err, data) {
        res.send(data);
    });
});

app.post("/user", function(req, res) {
    const {name, age} = req.body;
    client.query("insert into member(name, age) values (?, ?)", [name, age], function(err) {
        if (err) {
            console.log(err);
            return;
        } else {
            res.redirect("/");
        }
    });
});

app.get("/edit/:id", function(req, res) {
    fs.readFile("edit.html", "utf-8", function(err, data) {
        client.query('select * from member where id = ?', [req.params.id], function(error, result){
            console.log(result[0]);
            res.send(ejs.render(data, {
                result: result[0]
            }));
        });
    });
});

app.post("/edit/:id", function(req, res) {
    const {id, name, age} = req.body;
    client.query("update member set name = ?, age = ? where id = ?", [name, age, id], function(err) {
        if(err) {
            console.log(err);
            return;
        } else {
            res.redirect("/");
        }
    });
});

app.get("/delete/:id", function(req, res) {
    fs.readFile("delete.html", "utf-8", function(err, data) {
        client.query('select * from member where id = ?', [req.params.id], function(error, result) {
            // console.log(result[0]);
            res.send(ejs.render(data, {
                result: result[0]
            }));
        });
    });
});

app.post("/delete/:id", function(req, res) {
    const {id} = req.body;
    // console.log(id);
    client.query("delete from Member Where id = ?", Number(id), function(err) {
        if(err) {
            console.log(err);
            return;
        } else {
            res.redirect("/");
        }
    });
});