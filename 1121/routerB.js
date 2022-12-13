const express = require("express");
router = express.Router();

router.get('/index', function(req,res){
    res.send("<h1>B Page</h1>");
});

exports.router = router;

//http://localhost:8888/a/index