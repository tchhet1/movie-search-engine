import React, { useState } from 'react';
import './movies.css';
import Watchlist from './watchlist';

function Movies(props) {

    const imageUrl = props.url.concat(props.image);
    const imageUnavailable = "http://localhost:3000/static/media/movies-collage.ad1077861c300af9991b.webp";
   

   
       
    return (
              
                <div className="movie-data-container">
                    <div className="movie-image">   
                       <Watchlist 
                       movieID = { props.movieID } 
                       image =  { imageUrl } 
                       title = { props.title }
                       releaseDate = {  props.releaseDate }
                       overview = { props.overview }> </Watchlist>
                        
                        
                        <img src = { imageUrl === "https://image.tmdb.org/t/p/originalnull" ? imageUnavailable : imageUrl } width="200px" height="auto" alt= {props.title} /> 
                        
                    </div>    
                    <div className="movie-title">  
                         <b> { props.title } </b>        
                    </div>
                    <div className="movie-year">
                        <b>Release Date:</b> { props.releaseDate }
                        
                    </div>
                   
                    
                </div> 
                 

            
    )
     
}

export default Movies;