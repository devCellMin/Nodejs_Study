const express = require("express");
const app = express();

app.get("/list/:id", function(req, res){
    //let id = req.params.id;
    let {id} = req.params;
    
    res.send(`${id} 페이지`);
}).listen(8888, () => {
    console.log("run at 8888");
})