const fs = require("fs");
const express = require("express");
const cm = require("connect-multiparty");

const app = express();
app.use(cm({uploadDir: __dirname + "/img00"})); //파일이 저장되는 위치 지정

app.get("/", function(req, res) {
    console.log(req.query.error);
    console.log(req.query.myName);
    fs.readFile("fileupload.html", function(err, data) {
        res.send(data.toString());
    });
});
app.post("/", function(req, res) {
    // console.log(req.body);
    // console.log(req.files);
    let {userImage} = req.files;

    if (userImage) {
        let {name, path, type} = userImage;
        if (type.indexOf("image") != -1) {
            let myName = __dirname + "/img00/" + name;
            fs.rename(path, myName, function () {
                res.redirect("/?myName=" + myName);
            });
        } else {
            fs.unlink(path, function(error) {
                res.redirect("/?error=1");
            });
        }
    }

});

app.listen(8888, function() {
    console.log("run at 8888");
})