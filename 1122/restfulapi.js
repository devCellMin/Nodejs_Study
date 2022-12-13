const express = require("express");
const bodyParser = require("body-parser");

//GET /user => 검색
//GET /user/:id => id검색
//POST /user => 데이터 입력
//PUT /user/:id => 수정
//DELETE /user/:id => 삭제

const DB = (function() {
    let DB = {}; //객체
    let storage = [];//데이터
    let cnt = 0;

    DB.getData = function (id) {
        if (id) {
            id = (typeof id === 'string') ? Number(id) : id;
            for (let i in storage) {
                if (storage[i].id === id) {
                    return storage[i];
                }
            }
        } else {
            return storage;
        }
    }

    DB.insertData = function (data) {
        data.id = ++cnt;
        storage.push(data);
        return data;
    }

    DB.delectData = function (id) {
        if(id){
            id = (typeof id === 'string') ? Number(id) : id;
            for(let i in storage) {
                if(storage[i].id === id){
                    storage.splice(i, 1);

                    return true;
                }
            }
        }
        else{
            storage = [];
            return true;
        }
    }
    return DB;
})();



const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get("/user", function(req, res) {
    res.send(DB.getData());
});

app.get("/user/:id", function(req, res) {
    let {id} = req.params;
    res.send(DB.getData(id));
});

app.post("/user", function(req, res) {
    let {name, age} = req.body;

    if (name && age) {
        res.send(DB.insertData({
            name: name,
            age: age
        }));
    }
});

app.post("/user/:id", function(req, res) {
    let {id} = req.params;
    let {name, age} = req.body;

    if(name && age){
        let item = DB.getData(id);
        item.name = name || item.name;
        item.age || item.age;
    }

    res.send(DB.getData(id));
});
app.delete("/user/:id", function(req, res){
    DB.delectData(req.params.id);
    res.send(DB.getData());
});

app.delete("/user", function(req, res){
    DB.delectData();
    res.send(DB.getData());
});

app.listen(8888, function() {
    console.log("run at 8888");
});