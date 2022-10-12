import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';
import Movies from '../components/movies';
import InputForm from '../components/inputForm';
import MovieModal from '../components/movieModal/movieModal';


function Search() {
    
    const location = useLocation();

    //this is coming from hero.js page HOME page
   
    //console.log(location.state);

   
   //let homepageData = [...location.state.movieData];
    
    const [data, setData] = useState([]);

   // if(location.state){
      //homepageData = [...location.state.movieData];
      //setData(homepageData);
    //}

    
    //setData(homepageData);
    
    //setData();
    
    const posterUrl = 'https://image.tmdb.org/t/p/original';
    
    const submitHandler = (data) => {
        //e.preventDefault();
            setData(data);         
    }
       
    return (
        <div>
        
       <InputForm submitHandler = {submitHandler}/>
      
        { data && (
           <div className="movies-container" >
          
           {
             data.map((movie) => {
                 return (
   
                   <Movies  
                     key = {movie.id}
                     movieID = { movie.id } 
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

        )
          }
      </div>    
    )
    
}

export default Search;