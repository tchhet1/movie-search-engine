import React, { useState } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import './hero.css';
import Movies from './movies';
import InputForm from './inputForm'


function Hero(){
   
  const posterUrl = 'https://image.tmdb.org/t/p/original';
  
  const [movieData, setMovieData] = useState([]);


  const navigate = useNavigate();

    const submitHandler = (data) => {
      //e.target.reset();
      //e.preventDefault();
      setMovieData(data);

      navigate("/search",
        {state:  {movieData: data} }
      );
}

      console.log(movieData);



    return (
      <div>
        <section className="hero">
        <InputForm submitHandler = {submitHandler}/>
              
        </section>

        
        <div class="movies-container" >
          
        {
          movieData.map((movie) => {
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