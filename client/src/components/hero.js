import React, { useState } from 'react';
import Axios from 'axios';
import './hero.css';


function Hero(){
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);
    
    const url = `https://api.themoviedb.org/3/search/movie/?api_key=29c6212e49ed62a5bd8f2c72cd239af9&query=${input}`;

    

    const inputHandler = ((e) => {
        setInput(e.target.value);
        console.log(input);
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
            <input type="text" placeholder="Search for movies..."  value= { input }onChange= { inputHandler } />            
            <button type="submit" onClick= { submitHandler }>Search</button>
        </div>
            
      </section>
      
      {
        data.map((movie) => {
            return (
              <div className="movie-data-container">
                <div className="movie-title">
                    <h3> { movie.title }  </h3><br /> 
                    Release Date: { movie.release_date }
                </div>
                <div className="movie-overview">
                    { movie.overview }
                </div>
                <div className="movie-year">
                    
                </div>
              </div>
            )
             
            
        })
      } 
         
    </div>
     
    )
}

export default Hero;