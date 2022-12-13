const express = require("express");
const app = express();

const router = express.Router();
const routerA = express.Router();
const routerB = express.Router();

router.get("/", function(req, res){
    res.send("<h1>0 page</h1>");
});

routerA.get("/index", function(req, res){
    res.send("<h1>A page</h1>");
});

routerB.get("/index", function(req, res){
    res.send("<h1>B page</h1>");
});

app.use("/", router);
app.use("/a", routerA);
app.use("/b", routerB);

app.listen(8888, function() {
    console.log("run at 8888");
});