const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors'); // this allows client to make an api request to localhost

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'chitwan88',
    database: 'watchlist'
});



db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    

    /* var sql = "INSERT INTO contacts (name, email, comment) VALUES ('Test', 'triptichhetri123@gmail.com', 'This is a test')";
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    }); */


  });
   

//getting movies that were watchlisted from the movies database
app.get("/movies", (req, res) => {
    
    db.query("SELECT * FROM movies",  (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
       
      });

  });

//sends watchlisted movie to the database
app.post('/create', (req, res) => {
    console.log(req.body);
  
    const movieID = req.body.movieID;
    const imageUrl = req.body.imageUrl;
    const title = req.body.title;
    const releaseDate = req.body.releaseDate;
    const overview = req.body.overview;

    let sql = "INSERT INTO movies (movieID, imageUrl, title, releaseDate, overview) VALUES ('"+movieID+"', '"+imageUrl+"', '"+title+"', '"+releaseDate+"', '"+overview+"')";
     //sql = sql.replace('?1', name)
      db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
}); 


//update priority field of watchlisted movies
app.post('/update', (req, res) => {
  console.log(req.body);


  const priority = req.body.priority;
  const movieID = req.body.movieID;

  
  let sql = "UPDATE movies SET Priority = '"+priority+"' WHERE movieID = '"+movieID+"'";
   //sql = sql.replace('?1', name)
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record updated");
    });
}); 


//deletes movies removed from the watchlist
app.delete('/', (req, res) => {
  //console.log(red.body);

  let movieID = req.body.movieID;

  let sql = "DELETE FROM movies WHERE movieID = ?";

  db.query(sql, movieID, (err, result) => {
          if (err) {
              console.log(err);
          } else {
              console.log("deleted Record: " + result.affectedRows);
              res.send(result);
          }
      });
}); 

app.listen(3001, () => {
    console.log("server is running");
});