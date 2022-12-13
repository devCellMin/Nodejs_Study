const express = require("express");
const app = express();

app.use('/a', require("./routerA.js").router);
app.use('/b', require("./routerB.js").router);

app.listen(8888, function() {
    console.log("run at 8888");
});