// npm install mysql -> mysql 설치

const mysql = require("mysql");

const conn = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
});

//member
// id : int auto_increment
// name : varchar
// age : int

let sql = `Create table member
            (
                id int not null auto_increment primary key,
                name varchar(255), 
                age int
            )`;

conn.query("desc member", function(err, result) {
    if(!err) {
        console.log(result);
    } else {
        console.log(err);
    }
});

