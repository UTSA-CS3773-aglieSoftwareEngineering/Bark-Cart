const express = require("express");
const app = express();

app.get("/",  function(res, req){
    res.setEncoding("ITS WORKING!!")
});

app.listen(process.env.PORT || 5000);