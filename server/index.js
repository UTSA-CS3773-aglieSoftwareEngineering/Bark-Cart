// this is where server going to be running through

const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'todoapp'
});

app.use(cors());
app.use(bodyParser.urlencoded({extended:true }))
app.use(express.json());

app.get("/api/get", (req,res) => {
    const sqlSelect = "SELECT * FROM movies";    
    db.query(sqlSelect, (err,result) =>{
        if(err){
            console.log('error in the query');
        }else{
            console.log("successful query (get)");
        }
    })
})

app.post('/api/post', (req,res) => {
    const movieName     = req.body.movieName;
    const movieReview   = req.body.movieReview;
    const sqlInsert = "INSERT INTO movies (movieName, movieReview) VALUES (?,?)"   
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        if(err){
            console.log('fail posted');
            console.log(err);
        }
        else {
            console.log(result)
        }
    })
})

app.listen(3001, () =>{
    console.log("running on port 3001");
});