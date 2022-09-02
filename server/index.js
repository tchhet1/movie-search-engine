//start working form here tomorrow*******************************
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
   

/* app.get("/contacts", (req, res) => {
    
    db.query("SELECT * FROM contacts",  (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
       
      });

  });
 */

app.post('/create', (req, res) => {
    console.log(req.body);
  
    const movieID = req.body.movieID;
    const imageUrl = req.body.imageUrl;
    const title = req.body.title;
    const releaseDate = req.body.releaseDate;
    const overview = req.body.overview;

     var sql = "INSERT INTO movies (movieID, imageUrl, title, releaseDate, overview) VALUES ('"+movieID+"', '"+imageUrl+"', '"+title+"', '"+releaseDate+"', '"+overview+"')";
     //sql = sql.replace('?1', name)
      db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
}); 


app.listen(3001, () => {
    console.log("server is running");
});