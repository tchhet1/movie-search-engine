import React, { useState } from 'react';
import Axios from 'axios';
import './hero.css';
import Movies from './movies';


function Hero(){
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);
    
    const url = `https://api.themoviedb.org/3/search/movie/?api_key=29c6212e49ed62a5bd8f2c72cd239af9&query=${input}`;
    const posterUrl = 'https://image.tmdb.org/t/p/original';

    

    const inputHandler = ((e) => {
        setInput(e.target.value);
    });

    

    const submitHandler = ((e) => {
      e.preventDefault();
      
      Axios.get(url)
      .then((res) => {
        setData(res.data.results);
        
      }); 
      
    });

   console.log(data);

    return (
      <div>
      <section className="hero">
        <div>
            <input type="text" placeholder="Search for movies..."  value= { input } onChange= { inputHandler } />            
            <button type="submit" onClick= { submitHandler }>Search</button>
        </div>
            
      </section>

      <div>
        { data.length ? `Results: ${data.length}` : "No Results" }
      </div>
      <div class="movies-container" >
        
      {
        data.map((movie) => {
            return (

              

              <Movies  
                key = {movie.id}
                movieID = { movie.id.toString() } 
                adult = { movie.adult }
                url = { posterUrl }
                image = { movie.poster_path } 
                title = { movie.title }
                releaseDate = { movie.release_date }
                overview = { movie.overview }
                ></Movies>
            )
             
            
        })
      } 

      </div>
      
    
         
    </div>
     
    )
}

export default Hero;