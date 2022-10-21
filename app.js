const express = require('express');
const app = express();

const router = express.Router();


app.use(express.json());

app.use('/abc', movies);



app.get("/", function (req, res){
    res.send("WORKING!!! Hello There");
})


app.use("/", router);

app.listen(process.env.PORT || 5000);